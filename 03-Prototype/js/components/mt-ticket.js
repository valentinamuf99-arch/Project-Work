import { store } from '../store.js';

// Spec 03, R4: the ticket purchase screen, opened with the stops and the departure filled in.
// Price and payment are out of scope. Attributes: open, from, to, depart, means. Sends "ticket-closed".
class MtTicket extends HTMLElement {
  static observedAttributes = ['open'];

  attributeChangedCallback() {
    this.hidden = !this.hasAttribute('open');
    if (this.hidden) return void (this.innerHTML = '');
    const t = key => store.text(key);
    const fields = [['ticketMeans', 'means'], ['ticketFrom', 'from'], ['ticketTo', 'to'], ['ticketDeparture', 'depart']];
    this.innerHTML = `
      <section role="dialog" aria-modal="true" aria-labelledby="mt-ticket-title">
        <h2 id="mt-ticket-title" tabindex="-1">${t('ticketTitle')}</h2>
        <dl>${fields.map(([label]) => `<dt>${t(label)}</dt><dd></dd>`).join('')}</dl>
        <p class="note">${t('ticketNote')}</p>
        <button type="button" class="close">${t('ticketClose')}</button>
      </section>`;
    this.querySelectorAll('dd').forEach((dd, i) => { dd.textContent = this.getAttribute(fields[i][1]); });
    const close = () => this.dispatchEvent(new CustomEvent('ticket-closed', { bubbles: true }));
    this.querySelector('.close').addEventListener('click', close);
    this.querySelector('section').addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
    this.querySelector('h2').focus();
  }
}

if (!customElements.get('mt-ticket')) customElements.define('mt-ticket', MtTicket);
