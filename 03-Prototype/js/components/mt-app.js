import { store } from '../store.js';

// The whole page: facilitator controls (only with #facilitator) beside a phone that holds the app.
// On a wide screen the phone is drawn as an iPhone 16; its status bar shows the simulated clock.
class MtApp extends HTMLElement {
  connectedCallback() {
    const missing = this.getAttribute('missing');
    if (missing) {
      this.innerHTML = '<p role="alert"></p>';
      this.querySelector('p').textContent = store.data.texts ? store.text('dataMissing', { files: missing }) : missing;
      return;
    }
    const { app } = store.data;
    document.title = app.title;
    this.innerHTML = `
      <div class="phone">
        <div class="status-bar" aria-hidden="true"><span class="time"></span></div>
        <div class="screen">
          <header><h1></h1><p></p></header>
          <main><mt-warnings></mt-warnings><mt-my-trains></mt-my-trains></main>
        </div>
      </div>`;
    this.querySelector('h1').textContent = app.title;
    this.querySelector('header p').textContent = app.tagline;
    this.toggleFacilitator();
    addEventListener('hashchange', this.toggleFacilitator);
    this.addEventListener('open-train', this.openTrain);
    store.addEventListener('change', this.showTime);
    this.showTime();
  }

  showTime = () => { this.querySelector('.status-bar .time').textContent = store.now.time; };

  // From a warning to the same train (spec 02, R3).
  openTrain = e => {
    const summary = this.querySelector(`mt-train-summary[number="${e.detail}"]`);
    summary?.setAttribute('open', '');
    summary?.querySelector('mt-train-status')?.focus();
  };

  disconnectedCallback() {
    removeEventListener('hashchange', this.toggleFacilitator);
    store.removeEventListener('change', this.showTime);
  }

  toggleFacilitator = () => {
    const shown = this.querySelector('mt-facilitator');
    if (location.hash === '#facilitator' && !shown) this.prepend(document.createElement('mt-facilitator'));
    if (location.hash !== '#facilitator') shown?.remove();
  };
}

if (!customElements.get('mt-app')) customElements.define('mt-app', MtApp);
