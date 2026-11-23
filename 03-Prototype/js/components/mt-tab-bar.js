import { store } from '../store.js';

// The Trenitalia bottom bar, with Infomobilità current. The other items are not links:
// the prototype only lives inside Infomobilità.
class MtTabBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav aria-label="${store.text('tabBarLabel')}"><ul>${store.data.app.tabBar.map(item => `
        <li><span${item.current ? ' aria-current="page"' : ''}><img src="${item.icon}" alt="" width="24" height="24">${item.label}</span></li>`).join('')}
      </ul></nav>`;
  }
}

if (!customElements.get('mt-tab-bar')) customElements.define('mt-tab-bar', MtTabBar);
