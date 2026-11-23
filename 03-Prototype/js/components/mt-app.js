import { store } from '../store.js';

// The whole page: facilitator controls (only with #facilitator), header, main with the warning region (R10, R12).
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
      <header><h1></h1><p></p></header>
      <main><div class="alerts" role="alert"></div><mt-my-trains></mt-my-trains></main>`;
    this.querySelector('h1').textContent = app.title;
    this.querySelector('header p').textContent = app.tagline;
    this.toggleFacilitator();
    addEventListener('hashchange', this.toggleFacilitator);
  }

  disconnectedCallback() { removeEventListener('hashchange', this.toggleFacilitator); }

  toggleFacilitator = () => {
    const shown = this.querySelector('mt-facilitator');
    if (location.hash === '#facilitator' && !shown) this.prepend(document.createElement('mt-facilitator'));
    if (location.hash !== '#facilitator') shown?.remove();
  };
}

if (!customElements.get('mt-app')) customElements.define('mt-app', MtApp);
