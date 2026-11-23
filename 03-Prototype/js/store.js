// Clock, scenario, commuter's data and running state (spec 00, R7 to R11).
// Components read from it and change it only through its methods.
const DAYS = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const toMinutes = hhmm => { const [h, m] = hhmm.split(':').map(Number); return h * 60 + m; };
const toTime = m => `${String(Math.floor(m / 60) % 24).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`;

// A cancellation touches the trip a..b (stop indexes) when it is whole, or its part overlaps it (spec 04, R4).
const cancels = (e, stops, a, b) => {
  if (!e?.cancelled) return false;
  if (!e.cancelledFrom) return true;
  const i = name => stops.findIndex(s => s.stop === name);
  return i(e.cancelledFrom) <= b && (e.cancelledTo ? i(e.cancelledTo) : stops.length - 1) >= a;
};
// localStorage may be blocked: then everything stays in memory and is lost on reload (R8).
function read(key) { try { return JSON.parse(localStorage.getItem(key)); } catch { return null; } }
function write(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* memory only */ } }
const fresh = s => ({ minutes: toMinutes(s.time), saved: structuredClone(s.saved ?? []) });

class Store extends EventTarget {
  data = {};          // everything read from data/, by file name
  scenario = null;
  minutes = 0;        // simulated minutes since midnight of the scenario's day (R9)
  saved = [];         // commuter's saved trains (R8)

  init(data) {
    this.data = data;
    this.#restore();
    // A second window (commuter or facilitator) follows the changes made in this one.
    addEventListener('storage', e => { if (e.key?.startsWith('mt-')) { this.#restore(); this.#emit('scenario'); } });
  }

  get now() {
    const day = DAYS[(DAYS.indexOf(this.scenario.day) + Math.floor(this.minutes / 1440)) % 7];
    return { day, time: toTime(this.minutes) };
  }

  startScenario(id) {
    const s = this.data.scenarios.find(x => x.id === id);
    this.#load(s, fresh(s));
    this.#save();
    this.#emit('scenario');
  }

  reset() { this.startScenario(this.scenario.id); }

  advance(minutes) {
    if (!Number.isInteger(minutes) || minutes < 1) return; // forward only, whole minutes (R9)
    const from = this.minutes;
    this.minutes += minutes;
    this.#save();
    this.#emit('clock');
    if (this.#events().some(e => toMinutes(e.at) > from && toMinutes(e.at) <= this.minutes)) this.#emit('running');
  }

  saveTrain(train) {
    this.saved = [...this.saved.filter(t => t.number !== train.number), train];
    this.#save();
    this.#emit('saved');
  }

  removeTrain(number) {
    this.saved = this.saved.filter(t => t.number !== number);
    this.#save();
    this.#emit('saved');
  }

  // Most recent event at or before the clock; null means "no news", never "on time" (R7).
  stateOf(train, at = this.minutes) {
    let last = null;
    for (const e of this.#events()) {
      if (e.train === train && toMinutes(e.at) <= at && (!last || toMinutes(e.at) >= toMinutes(last.at))) last = e;
    }
    return last;
  }

  // Spec 02, 03 and 05: every warning sent up to the clock, oldest first, rebuilt from the running events.
  // An event's "stop" is the stop its delay is given for; "reached" is the last stop the train has left.
  warnings() {
    const out = [];
    const events = this.#events()
      .filter(e => toMinutes(e.at) <= this.minutes)
      .sort((a, b) => toMinutes(a.at) - toMinutes(b.at));
    for (const saved of this.saved) {
      if (!saved.days.includes(this.now.day)) continue; // only on a trip day (R1)
      const stops = this.data.trains.find(t => t.number === saved.number).stops;
      const index = name => stops.findIndex(s => s.stop === name);
      const on = index(saved.from), off = index(saved.to);
      let board = false, over = false, cancelled = false, done = false, delay, reason = null, last = null;
      let watched = new Map(); // trains shown as the next way, with their last known delay (spec 03, R3)
      const send = w => {
        last = { number: saved.number, ...w };
        // Next ways only before boarding, and only when late by the limit or more, or cancelled (spec 03, R1).
        last.ways = last.board || last.kind === 'under' ? null : this.ways(saved, toMinutes(w.at));
        watched = new Map(last.ways?.trains.filter(t => !t.own).map(t => [t.number, t.delay]));
        out.push(last);
      };
      for (const e of events) {
        if (done) break;
        if (e.train !== saved.number) { // spec 03, R3: a way shown becomes late by the limit or more, or cancelled
          if (!watched.has(e.train)) continue;
          const time = this.data.trains.find(t => t.number === e.train).stops.find(s => s.stop === saved.from).depart;
          const way = { at: e.at, board: false, time, reason: null, updated: null };
          const wayStops = this.data.trains.find(t => t.number === e.train).stops;
          const wa = wayStops.findIndex(s => s.stop === saved.from), wb = wayStops.findIndex(s => s.stop === saved.to);
          if (cancels(e, wayStops, wa, wb)) send({ ...way, kind: 'wayCancelled' });
          else if (e.delay >= saved.limit && e.delay !== watched.get(e.train)) send({ ...way, kind: 'wayLate', minutes: e.delay });
          else if (e.delay != null) watched.set(e.train, e.delay);
          continue;
        }
        const reached = e.reached ? index(e.reached) : -1;
        if (reached >= off || index(e.stop) > off) { done = true; continue; } // at or past the get-off stop: silent (R5)
        if (!board && reached >= on) { board = true; over = false; delay = undefined; watched = new Map(); }
        const previous = reason;
        reason = e.reason ?? reason; // a reason left out is not a reason withdrawn
        const facts = { at: e.at, reason, updated: null };
        const update = { ...last, ...facts, updated: previous ? 'changed' : 'added' }; // spec 05, R3
        if (cancels(e, stops, on, off) || cancelled) { // R2
          if (!cancelled) send({ ...facts, kind: 'cancelled', board, stop: saved.from, time: stops[on].depart });
          else if (reason !== previous) send(update);
          cancelled = true;
          continue;
        }
        if (e.delay == null) continue;
        if (!board && e.stop !== saved.from) continue; // before boarding only the delay at the get-on stop counts
        const fromReached = board && e.stop === e.reached; // no delay given for the next stop
        const next = board ? (fromReached ? reached + 1 : index(e.stop)) : on;
        const place = board
          ? { board, stop: stops[next].stop, time: stops[next].arrive, reached: fromReached ? e.reached : null }
          : { board, stop: saved.from, time: stops[on].depart };
        const nowOver = e.delay >= saved.limit, changed = e.delay !== delay;
        if (nowOver && changed) send({ ...facts, ...place, kind: over ? 'again' : 'late', minutes: e.delay });
        else if (nowOver && reason !== previous) send(update);
        else if (!nowOver && over) send({ ...facts, ...place, kind: 'under', minutes: e.delay });
        over = nowOver;
        delay = e.delay;
      }
    }
    return out.sort((a, b) => toMinutes(a.at) - toMinutes(b.at));
  }

  // Spec 03, R1: the next ways from the get-on to the get-off stop at a given minute.
  // Trains: the first to leave and the first to arrive (one entry when they are the same), ranked on
  // scheduled time plus known delay. Then the next of each other means of transport (times made up).
  ways(saved, at) {
    const trains = [];
    for (const t of this.data.trains) {
      const a = t.stops.findIndex(s => s.stop === saved.from), b = t.stops.findIndex(s => s.stop === saved.to);
      if (!t.days.includes(this.now.day) || a < 0 || b <= a) continue;
      const state = this.stateOf(t.number, at);
      if (cancels(state, t.stops, a, b)) continue;
      const leaves = toMinutes(t.stops[a].depart) + (state?.delay ?? 0);
      if (leaves < at) continue; // already left
      trains.push({
        number: t.number, own: t.number === saved.number, delay: state?.delay, image: t.image,
        depart: t.stops[a].depart, arrive: t.stops[b].arrive, from: saved.from, to: saved.to,
        leaves, arrives: toMinutes(t.stops[b].arrive) + (state?.delay ?? 0),
      });
    }
    const first = key => trains.reduce((best, t) => (!best || t[key] < best[key] ? t : best), null);
    const leaves = first('leaves'), arrives = first('arrives');
    const shown = !trains.length ? []
      : leaves === arrives ? [{ ...leaves, role: 'next' }]
      : [{ ...leaves, role: 'leaves' }, { ...arrives, role: 'arrives' }];
    const kinds = new Set();
    const others = this.data.alternatives
      .filter(o => o.from === saved.from && o.to === saved.to && (!o.depart || toMinutes(o.depart) >= at))
      .sort((x, y) => (x.depart ? toMinutes(x.depart) : Infinity) - (y.depart ? toMinutes(y.depart) : Infinity))
      .filter(o => !kinds.has(o.kind) && kinds.add(o.kind));
    return { trains: shown, others };
  }

  // The sentences of one warning (spec 05, appearance): the "Updated" mark above the first line,
  // the first line (train and minutes only), the reason line directly under it, then the rest.
  warningLines(w) {
    const kind = w.kind[0].toUpperCase() + w.kind.slice(1);
    const [first, ...more] = this.text((w.board ? 'warnBoard' : 'warn') + kind, w).split('\n');
    const reason = !w.kind.startsWith('way') && (w.reason ? this.text('reasonLine', { reason: w.reason }) : this.text('reasonMissing'));
    return {
      mark: w.updated && this.text(w.updated === 'added' ? 'warnUpdatedAdded' : 'warnUpdatedChanged'),
      first,
      rest: [reason, ...more, w.reached && this.text('warnFromReached', w)].filter(Boolean),
    };
  }

  // Spec 04: every running event of one train up to the clock, oldest first.
  runningOf(train) {
    return this.#events()
      .filter(e => e.train === train && toMinutes(e.at) <= this.minutes)
      .sort((a, b) => toMinutes(a.at) - toMinutes(b.at));
  }

  // Interface sentence from texts.json, with {placeholders} filled (R6).
  text(key, values = {}) {
    return (this.data.texts[key] ?? key).replace(/\{(\w+)\}/g, (m, k) => values[k] ?? m);
  }

  #events() { return this.data.running.filter(e => e.scenario === this.scenario.id); }

  #restore() {
    const s = this.data.scenarios.find(x => x.id === read('mt-scenario')) ?? this.data.scenarios[0];
    this.#load(s, read(`mt-${s.id}`) ?? fresh(s));
  }

  #load(s, { minutes, saved }) { this.scenario = s; this.minutes = minutes; this.saved = saved; }

  #save() {
    write(`mt-${this.scenario.id}`, { minutes: this.minutes, saved: this.saved });
    write('mt-scenario', this.scenario.id);
  }

  #emit(part) { this.dispatchEvent(new CustomEvent('change', { detail: part })); }
}

export const store = new Store();
