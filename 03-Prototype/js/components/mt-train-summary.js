import { store } from '../store.js';

// Spec 01, step 6: one saved train in four lines (train, stops with times, limit, days).
// The "open" attribute shows what the operator says about it now (spec 02, R4).
class MtTrainSummary extends HTMLElement {
  static observedAttributes = ['open'];

  connectedCallback() {
    const saved = store.saved.find(t => t.number === this.getAttribute('number'));
    const stops = store.data.trains.find(t => t.number === saved.number).stops;
    const at = name => stops.find(s => s.stop === name);
    this.innerHTML = `
      <p class="number">${store.text('summaryTrain', { number: saved.number })}</p>
      <p class="trip">
        <span class="sr-only">${store.text('summaryStops', { from: saved.from, depart: at(saved.from).depart, to: saved.to, arrive: at(saved.to).arrive })}</span>
        <span class="end" aria-hidden="true"><span class="stop">${saved.from}</span><span class="time">${at(saved.from).depart}</span></span>
        <span class="line" aria-hidden="true"></span>
        <span class="end" aria-hidden="true"><span class="stop">${saved.to}</span><span class="time">${at(saved.to).arrive}</span></span>
      </p>
      <p class="details">
        <span>${store.text('summaryLimit', { minutes: saved.limit })}</span>
        <span>${store.text('summaryDays', { days: saved.days.map(d => store.text(`dayShort.${d}`)).join(', ') })}</span>
      </p>
      <button type="button" class="toggle" aria-expanded="false">${store.text('showTrain')}</button>`;
    this.querySelector('.toggle').addEventListener('click', () => this.toggleAttribute('open'));
    this.attributeChangedCallback();
  }

  attributeChangedCallback() {
    const button = this.querySelector('.toggle');
    if (!button) return; // not rendered yet
    const open = this.hasAttribute('open');
    button.setAttribute('aria-expanded', open);
    button.textContent = store.text(open ? 'hideTrain' : 'showTrain');
    const status = this.querySelector('mt-train-status');
    if (open && !status) this.insertAdjacentHTML('beforeend', `<mt-train-status number="${this.getAttribute('number')}"></mt-train-status>`);
    if (!open) status?.remove();
  }
}

if (!customElements.get('mt-train-summary')) customElements.define('mt-train-summary', MtTrainSummary);
