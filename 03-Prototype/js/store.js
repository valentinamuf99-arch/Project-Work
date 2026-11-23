// Clock, scenario, commuter's data and running state (spec 00, R7 to R11).
// Components read from it and change it only through its methods.
const DAYS = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const toMinutes = hhmm => { const [h, m] = hhmm.split(':').map(Number); return h * 60 + m; };
const toTime = m => `${String(Math.floor(m / 60) % 24).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`;

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
  stateOf(train) {
    let last = null;
    for (const e of this.#events()) {
      if (e.train === train && toMinutes(e.at) <= this.minutes && (!last || toMinutes(e.at) >= toMinutes(last.at))) last = e;
    }
    return last;
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
