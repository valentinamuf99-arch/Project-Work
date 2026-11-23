import { store } from '../store.js';

// Spec 02: warnings sent unasked, newest first. Only warnings that arrive while the clock moves are announced (spec 00, R12).
class MtWarnings extends HTMLElement {
  shown = 0;

  connectedCallback() {
    this.innerHTML = `
      <div class="announce" role="alert"></div>
      <section aria-labelledby="mt-warnings-title" hidden>
        <h2 id="mt-warnings-title">${store.text('warningsTitle')}</h2>
        <ol></ol>
      </section>`;
    this.addEventListener('click', e => {
      const number = e.target.closest('[data-train]')?.dataset.train;
      if (number) this.dispatchEvent(new CustomEvent('open-train', { bubbles: true, detail: number }));
      const buy = e.target.closest('.buy');
      if (buy) this.dispatchEvent(new CustomEvent('buy-ticket', { bubbles: true, detail: { ...buy.dataset } }));
    });
    store.addEventListener('change', this.update);
    this.update();
  }

  disconnectedCallback() { store.removeEventListener('change', this.update); }

  update = e => {
    const warnings = store.warnings();
    const moved = e?.detail === 'clock' || e?.detail === 'running';
    if (moved && warnings.length === this.shown) return; // nothing new; keep the last announcement
    const lines = w => store.warningLines(w);
    const announce = this.querySelector('.announce');
    announce.textContent = moved ? warnings.slice(this.shown).map(w => lines(w).join(' ')).join(' ') : '';
    this.shown = warnings.length;
    this.querySelector('section').hidden = !warnings.length;
    const latest = new Set();
    this.querySelector('ol').innerHTML = warnings.slice().reverse().map(w => {
      const [first, ...rest] = lines(w);
      const isLatest = !latest.has(w.number) && latest.add(w.number); // other ways only under the newest warning of a train
      return `<li class="${w.kind}">
        <p class="first">${first}</p>
        ${rest.map(l => `<p>${l}</p>`).join('')}
        <p class="sent">${store.text('warnSentAt', { time: w.at })}</p>
        ${isLatest && w.ways ? this.ways(w.ways) : ''}
        <button type="button" data-train="${w.number}">${store.text('seeTrain')}</button>
      </li>`;
    }).join('');
  };

  // Spec 03: trains first, then other means of transport; "Buy ticket" only where a ticket is sold.
  ways({ trains, others }) {
    const t = (key, values) => store.text(key, values);
    const row = (text, ticket) => `<li><span>${text}</span>${ticket ? `<button type="button" class="buy"
      data-from="${ticket.from}" data-to="${ticket.to}" data-depart="${ticket.depart}" data-means="${ticket.means}"
      aria-label="${t('buyTicketLabel', ticket)}">${t('buyTicket')}</button>` : ''}</li>`;
    const items = trains.map(w => row(
      `${t(`wayRole.${w.role}`)} ${t(w.own ? 'wayOwn' : 'wayTrain', w)}${w.delay ? ' ' + t('wayDelay', { minutes: w.delay }) : ''}`,
      !w.own && { ...w, means: t('ticketMeansTrain', w) }));
    if (!trains.length && others.length) items.push(row(t('wayNoTrain')));
    items.push(...others.map(o => row(t(o.depart ? 'wayOther' : 'wayTaxi', o), o.ticket && { ...o, means: o.name })));
    if (!items.length) items.push(row(t('wayNothing')));
    return `<details class="ways" open><summary>${t('waysTitle')}</summary><ul>${items.join('')}</ul></details>`;
  }
}

if (!customElements.get('mt-warnings'))
 customElements.define('mt-warnings', MtWarnings);
