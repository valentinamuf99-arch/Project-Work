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
    });
    store.addEventListener('change', this.update);
    this.update();
  }

  disconnectedCallback() { store.removeEventListener('change', this.update); }

  update = e => {
    const warnings = store.warnings();
    const moved = e?.detail === 'clock' || e?.detail === 'running';
    if (moved && warnings.length === this.shown) return; // nothing new; keep the last announcement
    const lines = w => {
      const kind = w.kind[0].toUpperCase() + w.kind.slice(1);
      return [
        ...store.text((w.board ? 'warnBoard' : 'warn') + kind, w).split('\n'), // first line: train and minutes only
        w.reached && store.text('warnFromReached', w),
        w.updated && store.text(w.updated === 'added' ? 'warnUpdatedAdded' : 'warnUpdatedChanged'),
        w.reason ? store.text('reasonLine', { reason: w.reason }) : store.text('reasonMissing'),
      ].filter(Boolean);
    };
    const announce = this.querySelector('.announce');
    announce.textContent = moved ? warnings.slice(this.shown).map(w => lines(w).join(' ')).join(' ') : '';
    this.shown = warnings.length;
    this.querySelector('section').hidden = !warnings.length;
    this.querySelector('ol').innerHTML = warnings.slice().reverse().map(w => {
      const [first, ...rest] = lines(w);
      return `<li class="${w.kind}">
        <p class="first">${first}</p>
        ${rest.map(l => `<p>${l}</p>`).join('')}
        <p class="sent">${store.text('warnSentAt', { time: w.at })}</p>
        <button type="button" data-train="${w.number}">${store.text('seeTrain')}</button>
      </li>`;
    }).join('');
  };
}

if (!customElements.get('mt-warnings')) customElements.define('mt-warnings', MtWarnings);
