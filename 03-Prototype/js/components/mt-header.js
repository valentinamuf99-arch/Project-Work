import { store } from '../store.js';

// The Trenitalia Infomobilità header: page title and its section chips, the followed trains current.
// The chips are not links: the prototype only has the followed trains.
class MtHeader extends HTMLElement {
  connectedCallback() {
    const { app } = store.data;
    this.innerHTML = `
      <header>
        <h1>${store.text('headerTitle')}</h1>
        <nav aria-label="${store.text('headerTabsLabel')}"><ul>${app.headerTabs.map(tab =>
          `<li><span${tab === app.currentHeaderTab ? ' aria-current="page"' : ''}>${tab}</span></li>`).join('')}</ul></nav>
      </header>`;
    const chips = this.querySelector('ul');
    chips.scrollLeft = chips.scrollWidth; // the current chip is the last one: keep it in view
  }
}

if (!customElements.get('mt-header')) customElements.define('mt-header', MtHeader);
