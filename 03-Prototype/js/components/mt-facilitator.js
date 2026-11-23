import { store } from '../store.js';

// Facilitator strip: pick or reset a scenario, move the simulated clock forward (R9, R10).
class MtFacilitator extends HTMLElement {
  connectedCallback() {
    const t = (key, values) => store.text(key, values);
    this.innerHTML = `
      <section aria-labelledby="mt-facilitator-title">
        <h2 id="mt-facilitator-title">${t('facilitatorTitle')}</h2>
        <label>${t('scenarioLabel')}
          <select>${store.data.scenarios.map(s => `<option value="${s.id}">${s.name}</option>`).join('')}</select>
        </label>
        <p>${t('clockLabel')} <output></output></p>
        <div class="steps">${store.data.app.advanceSteps.map(m =>
          `<button type="button" data-minutes="${m}">${t('advance', { minutes: m })}</button>`).join('')}</div>
        <button type="button" class="reset">${t('reset')}</button>
      </section>`;
    this.querySelector('select').addEventListener('change', e => store.startScenario(e.target.value));
    this.querySelector('.steps').addEventListener('click', e => {
      const minutes = e.target.closest('button')?.dataset.minutes;
      if (minutes) store.advance(Number(minutes));
    });
    this.querySelector('.reset').addEventListener('click', () => store.reset());
    store.addEventListener('change', this.update);
    this.update();
  }

  disconnectedCallback() { store.removeEventListener('change', this.update); }

  // Updates values in place, so keyboard focus stays where it was.
  update = () => {
    const { day, time } = store.now;
    this.querySelector('select').value = store.scenario.id;
    this.querySelector('output').textContent = store.text('clockValue', { day: store.text(`day.${day}`), time });
  };
}

if (!customElements.get('mt-facilitator')) customElements.define('mt-facilitator', MtFacilitator);
