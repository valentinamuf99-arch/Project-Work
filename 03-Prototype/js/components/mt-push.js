import { store } from '../store.js';

// A simulated push notification at the top of the phone for every new warning (spec 02).
// Screen readers already hear the warning from mt-warnings, so the banner is not a live region.
// Sends "push-opened" when tapped.
class MtPush extends HTMLElement {
  shown = 0;
  timer = null;

  connectedCallback() {
    const { app } = store.data;
    this.innerHTML = `
      <div class="banner" hidden>
        <button type="button" class="open">
          <img src="${app.icon}" alt="" width="38" height="38">
          <span class="head"><span class="app">${app.title}</span><span class="when">${store.text('pushNow')}</span></span>
          <span class="title"></span>
          <span class="body"></span>
        </button>
        <button type="button" class="close" aria-label="${store.text('pushCloseLabel')}">${store.text('pushClose')}</button>
      </div>`;
    this.banner = this.querySelector('.banner');
    this.querySelector('.open').addEventListener('click', () => {
      this.hide();
      this.dispatchEvent(new CustomEvent('push-opened', { bubbles: true }));
    });
    this.querySelector('.close').addEventListener('click', this.hide);
    // Stays while pointed at or focused, so it can be read and reached by keyboard.
    for (const type of ['mouseenter', 'focusin']) this.banner.addEventListener(type, () => clearTimeout(this.timer));
    for (const type of ['mouseleave', 'focusout']) this.banner.addEventListener(type, this.later);
    this.shown = store.warnings().length; // warnings already there are not pushed again
    store.addEventListener('change', this.update);
  }

  disconnectedCallback() {
    clearTimeout(this.timer);
    store.removeEventListener('change', this.update);
  }

  update = e => {
    const warnings = store.warnings();
    const moved = e.detail === 'clock' || e.detail === 'running';
    const fresh = moved && warnings.length > this.shown;
    this.shown = warnings.length;
    if (!moved) return this.hide(); // scenario switched or reset, or trains changed
    if (!fresh) return;
    const { mark, first, rest } = store.warningLines(warnings.at(-1));
    this.querySelector('.title').textContent = first;
    this.querySelector('.body').textContent = [mark, ...rest].filter(Boolean).join(' ');
    this.banner.hidden = false;
    this.later();
  };

  later = () => {
    clearTimeout(this.timer);
    this.timer = setTimeout(this.hide, store.data.app.pushSeconds * 1000);
  };

  hide = () => {
    clearTimeout(this.timer);
    this.banner.hidden = true;
  };
}

if (!customElements.get('mt-push')) customElements.define('mt-push', MtPush);
