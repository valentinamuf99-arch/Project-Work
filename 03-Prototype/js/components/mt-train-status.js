import { store } from '../store.js';

// What the operator says about a train now (spec 02, R4: "no news" is never shown as "on time").
class MtTrainStatus extends HTMLElement {
  connectedCallback() {
    this.tabIndex = -1; // focus target when opened from a warning
    store.addEventListener('change', this.render);
    this.render();
  }

  disconnectedCallback() { store.removeEventListener('change', this.render); }

  render = () => {
    const e = store.stateOf(this.getAttribute('number'));
    const line = e?.cancelled ? store.text('statusCancelled')
      : e?.delay === 0 ? store.text('statusOnTime', { stop: e.stop })
      : e?.delay > 0 ? store.text('statusLate', { minutes: e.delay, stop: e.stop })
      : store.text('noNews');
    this.innerHTML = `<p>${line}</p>` + (e ? `<p class="sent">${store.text('lastUpdate', { time: e.at })}</p>` : '');
  };
}

if (!customElements.get('mt-train-status')) customElements.define('mt-train-status', MtTrainStatus);
