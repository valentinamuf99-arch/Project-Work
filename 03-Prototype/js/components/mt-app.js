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
        <mt-push></mt-push>
        <div class="screen">
          <header><h1></h1><p></p></header>
          <main><mt-warnings></mt-warnings><mt-my-trains></mt-my-trains></main>
        </div>
        <mt-ticket hidden></mt-ticket>
      </div>`;
    this.querySelector('h1').textContent = app.title;
    this.querySelector('header p').textContent = app.tagline;
    this.toggleFacilitator();
    addEventListener('hashchange', this.toggleFacilitator);
    this.addEventListener('open-train', this.openTrain);
    this.addEventListener('push-opened', this.openWarning);
    this.addEventListener('buy-ticket', this.openTicket);
    this.addEventListener('ticket-closed', this.closeTicket);
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

  // Spec 03, R4: the ticket screen covers the app until closed; focus goes back to the button.
  openTicket = e => {
    this.opener = document.activeElement;
    const ticket = this.querySelector('mt-ticket');
    for (const [name, value] of Object.entries(e.detail)) ticket.setAttribute(name, value);
    this.querySelector('.screen').inert = true;
    ticket.setAttribute('open', '');
  };

  closeTicket = () => {
    this.querySelector('mt-ticket').removeAttribute('open');
    this.querySelector('.screen').inert = false;
    this.opener?.focus();
  };

  // From the push banner to the newest warning in the page.
  openWarning = () => {
    const warning = this.querySelector('mt-warnings ol > li');
    if (!warning) return;
    warning.tabIndex = -1;
    warning.focus();
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
