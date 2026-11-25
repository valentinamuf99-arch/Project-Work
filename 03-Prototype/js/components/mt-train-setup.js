import { store } from '../store.js';

// Spec 01, R1 to R4: find a train by number, pick the two stops, the limit and the days.
// Sends "train-saved" (detail: the saved train) or "setup-cancelled".
class MtTrainSetup extends HTMLElement {
  train = null; // the train found, not yet saved

  connectedCallback() {
    const t = key => store.text(key);
    this.innerHTML = `
      <form novalidate>
        <h2>${t(store.saved.length ? 'setupTitleAnother' : 'setupTitle')}</h2>
        <label for="mt-setup-number">${t('numberLabel')}</label>
        <div class="find">
          <input id="mt-setup-number" name="number" inputmode="numeric" autocomplete="off">
          <button type="button" class="find-button">${t('find')}</button>
        </div>
        <p class="number-message" role="status"></p>
        <div class="details" hidden>
          <h3>${t('routeTitle')}</h3>
          <ol class="route"></ol>
          <label for="mt-setup-from">${t('getOnLabel')}</label>
          <select id="mt-setup-from" name="from"></select>
          <label for="mt-setup-to">${t('getOffLabel')}</label>
          <select id="mt-setup-to" name="to"></select>
          <p class="stops-message" role="status"></p>
          <label for="mt-setup-limit">${t('limitLabel')}</label>
          <input id="mt-setup-limit" name="limit" type="number" min="1" step="1" inputmode="numeric">
          <fieldset><legend>${t('daysLabel')}</legend><div class="days"></div></fieldset>
          <p class="save-message" role="alert"></p>
          <button type="submit" name="save">${t('save')}</button>
        </div>
        ${store.saved.length ? `<button type="button" class="cancel">${t('cancel')}</button>` : ''}
      </form>`;
    this.form = this.querySelector('form');
    this.form.addEventListener('submit', this.onSubmit);
    this.querySelector('.find-button').addEventListener('click', () => this.find());
    this.form.addEventListener('change', e => { if (e.target.tagName === 'SELECT') this.checkStops(); });
    this.querySelector('.cancel')?.addEventListener('click', () =>
      this.dispatchEvent(new CustomEvent('setup-cancelled', { bubbles: true })));
  }

  onSubmit = e => {
    e.preventDefault();
    // Enter with a new number typed means "find"; otherwise "save".
    if (this.form.number.value.trim() !== this.train?.number) this.find();
    else this.save();
  };

  // R1: exact number only, never a near match; never saved twice.
  find() {
    const number = this.form.number.value.trim();
    const message = this.querySelector('.number-message');
    const found = store.data.trains.find(t => t.number === number);
    this.train = null;
    this.querySelector('.details').hidden = true;
    if (!found) return void (message.textContent = store.text('notFound'));
    if (store.saved.some(t => t.number === number)) return void (message.textContent = store.text('alreadySaved', { number }));

    this.train = found;
    message.textContent = store.text('found', { number });
    this.querySelector('.route').innerHTML = found.stops.map(s => `<li>${this.stopLine(s)}</li>`).join('');
    const options = `<option value="">${store.text('chooseStop')}</option>` +
      found.stops.map((s, i) => `<option value="${i}">${s.stop}</option>`).join('');
    this.form.from.innerHTML = options;
    this.form.to.innerHTML = options;
    // R4 [open], decided here: the days the train runs, none ticked; the commuter picks them.
    this.querySelector('.days').innerHTML = found.days.map(d =>
      `<label><input type="checkbox" name="days" value="${d}"><span class="initial" aria-hidden="true">${store.text(`dayInitial.${d}`)}</span><span class="sr-only">${store.text(`day.${d}`)}</span></label>`).join('');
    this.form.limit.value = store.data.app.defaultLimit; // user choice 2026-11-25, departs from R3 "no default"
    this.querySelector('.stops-message').textContent = '';
    this.querySelector('.save-message').textContent = '';
    this.querySelector('.details').hidden = false;
  }

  stopLine(s) {
    const key = s.arrive && s.depart ? 'stopBoth' : s.depart ? 'stopDepart' : 'stopArrive';
    return store.text(key, { stop: s.stop, arrive: s.arrive, depart: s.depart });
  }

  // R2: returns an error key, or null when both stops are valid; shows the scheduled times.
  checkStops() {
    const from = this.form.from.value, to = this.form.to.value;
    const message = this.querySelector('.stops-message');
    let error = null;
    if (from === '' || to === '') error = 'stopsMissing';
    else if (Number(to) <= Number(from)) error = 'stopsOrder';
    const a = this.train.stops[from], b = this.train.stops[to];
    message.textContent = error
      ? (from === '' || to === '' ? '' : store.text(error))
      : store.text('stopsChosen', { from: a.stop, depart: a.depart, to: b.stop, arrive: b.arrive });
    return error;
  }

  save() {
    const f = this.form;
    const limit = Number(f.limit.value);
    const days = [...f.querySelectorAll('[name=days]:checked')].map(c => c.value);
    const fail = (key, field) => {
      this.querySelector('.save-message').textContent = store.text(key);
      field.focus();
    };
    const stopsError = this.checkStops();
    if (stopsError) return fail(stopsError, f.from.value === '' ? f.from : f.to);
    // R3: limit required, whole minutes; [open] zero not allowed.
    if (f.limit.value === '' || !Number.isInteger(limit) || limit < 1) return fail('limitMissing', f.limit);
    if (!days.length) return fail('daysMissing', f.querySelector('[name=days]'));

    this.dispatchEvent(new CustomEvent('train-saved', { bubbles: true, detail: {
      number: this.train.number,
      from: this.train.stops[f.from.value].stop,
      to: this.train.stops[f.to.value].stop,
      limit,
      days,
    } }));
  }
}

if (!customElements.get('mt-train-setup')) customElements.define('mt-train-setup', MtTrainSetup);
