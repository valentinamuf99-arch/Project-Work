import { store } from '../store.js';

// Spec 01, step 6: one saved train in four lines (train, stops with times, limit, days).
class MtTrainSummary extends HTMLElement {
  connectedCallback() {
    const saved = store.saved.find(t => t.number === this.getAttribute('number'));
    const stops = store.data.trains.find(t => t.number === saved.number).stops;
    const at = name => stops.find(s => s.stop === name);
    this.innerHTML = `
      <p class="number">${store.text('summaryTrain', { number: saved.number })}</p>
      <p>${store.text('summaryStops', { from: saved.from, depart: at(saved.from).depart, to: saved.to, arrive: at(saved.to).arrive })}</p>
      <p>${store.text('summaryLimit', { minutes: saved.limit })}</p>
      <p>${store.text('summaryDays', { days: saved.days.map(d => store.text(`dayShort.${d}`)).join(', ') })}</p>`;
  }
}

if (!customElements.get('mt-train-summary')) customElements.define('mt-train-summary', MtTrainSummary);
