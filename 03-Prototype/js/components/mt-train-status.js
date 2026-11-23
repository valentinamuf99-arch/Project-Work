import { store } from '../store.js';

// Spec 04: the saved train stop by stop, up to the commuter's get-on stop.
// First lines: cancellation (if any), current position, time at the get-on stop, last update.
// Nothing is computed: an expected time is shown only if the operator gives it (spec 02, R4: no news is never "on time").
class MtTrainStatus extends HTMLElement {
  connectedCallback() {
    this.tabIndex = -1; // focus target when opened from a warning
    store.addEventListener('change', this.render);
    this.render();
  }

  disconnectedCallback() { store.removeEventListener('change', this.render); }

  render = () => {
    const t = (key, values) => store.text(key, values);
    const number = this.getAttribute('number');
    const saved = store.saved.find(x => x.number === number);
    const stops = store.data.trains.find(x => x.number === number).stops;
    const index = name => stops.findIndex(s => s.stop === name);
    const on = index(saved.from);
    const events = store.runningOf(number);
    const last = events.at(-1);

    if (!saved.days.includes(store.now.day)) return this.show([t('notTripDay')]);
    if (!last) return this.show([t('noNews')], this.stops(stops, on, {}, -1, null));

    // R4: whole run, or part of it (stops cancelledFrom..cancelledTo).
    const cancel = events.findLast(e => e.cancelled);
    const cut = cancel && [cancel.cancelledFrom ? index(cancel.cancelledFrom) : 0,
      cancel.cancelledTo ? index(cancel.cancelledTo) : stops.length - 1];
    if (cancel && !cancel.cancelledFrom) return this.show([t('cancelledWhole'), t('lastUpdate', { time: last.at })], this.stops(stops, on, {}, -1, cut));

    const actual = {}; // actual times of the stops reached and left
    for (const e of events) if (e.reached) actual[e.reached] = { arrived: e.arrived, left: e.left ?? e.at };
    const position = events.findLast(e => e.reached);
    const current = position ? index(position.reached) : -1;
    const lines = cancel ? [t('cancelledPart', { from: cancel.cancelledFrom, to: cancel.cancelledTo ?? stops.at(-1).stop })] : [];

    if (current >= on) return this.show([...lines, t('leftGetOn', { stop: saved.from, time: actual[saved.from].left })]); // nothing more shown

    // R2 and R3: current position.
    const origin = stops.findIndex((s, i) => !cut || i < cut[0] || i > cut[1]);
    if (position) lines.push(t('position', { stop: position.reached, time: actual[position.reached].left, next: stops[current + 1].stop }));
    else if (store.now.time >= stops[origin].depart) lines.push(t('notLeftPast', { origin: stops[origin].stop }));
    else lines.push(t('notLeft', { origin: stops[origin].stop, time: stops[origin].depart }));

    // R1: the get-on stop, expected only if the operator gives it.
    const scheduled = stops[on].depart;
    const atGetOn = events.findLast(e => e.stop === saved.from);
    const expected = atGetOn?.expected ? atGetOn : null; // an older expectation is never shown as current
    const late = events.findLast(e => e.delay != null);
    if (expected) lines.push(t(expected.delay ? 'expectedLate' : 'expected', { stop: saved.from, expected: expected.expected, scheduled, minutes: expected.delay }));
    else lines.push(t('scheduledOnly', { stop: saved.from, scheduled }) + (late?.delay ? ' ' + t('lateAt', { minutes: late.delay, stop: late.reached ?? late.stop }) : ''));

    lines.push(t('lastUpdate', { time: last.at }));
    this.show(lines, this.stops(stops, on, actual, current, cut, expected?.expected));
  };

  show(lines, list = '') {
    this.innerHTML = lines.map((line, i) => `<p class="${i < 2 ? 'lead' : ''}">${line}</p>`).join('') + list;
  }

  // Stops in order up to the get-on stop, with actual or scheduled times.
  stops(stops, on, actual, current, cut, expected) {
    const t = (key, values) => store.text(key, values);
    const items = stops.slice(0, on + 1).map((s, i) => {
      const done = actual[s.stop];
      const notes = [];
      const isCut = cut && i >= cut[0] && i <= cut[1];
      if (isCut) notes.push(t('stopCancelled'));
      else if (done) notes.push(done.arrived ? t('stopArrivedLeft', done) : t('stopLeft', done));
      else if (i === on) notes.push(t('stopScheduled', { time: s.depart }) + (expected ? ` · <span class="expected">${t('stopExpected', { time: expected })}</span>` : ''));
      else notes.push(t('stopScheduled', { time: s.arrive ?? s.depart }));
      if (i === current) notes.push(t('stopCurrent'));
      const classes = [i === current && 'current', i === on && 'get-on', done && i !== current && 'done', isCut && 'cut'].filter(Boolean).join(' ');
      return `<li class="${classes}"${i === current ? ' aria-current="location"' : ''}>
        <span class="name">${s.stop}</span> <span class="times">${notes.join(' · ')}</span></li>`;
    });
    return `<h3>${t('stopsTitle')}</h3><ol class="stops">${items.join('')}</ol>`;
  }
}

if (!customElements.get('mt-train-status')) customElements.define('mt-train-status', MtTrainStatus);
