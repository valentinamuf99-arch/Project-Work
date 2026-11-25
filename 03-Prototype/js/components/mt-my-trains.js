import { store } from '../store.js';

// Spec 01: list of saved usual trains, or the set-up when there is none or one is being added.
class MtMyTrains extends HTMLElement {
  adding = false;

  connectedCallback() {
    this.render();
    store.addEventListener('change', this.onStore);
    this.addEventListener('train-saved', this.onSaved);
    this.addEventListener('setup-cancelled', this.onCancelled);
    this.addEventListener('train-removed', this.onRemoved);
    this.addEventListener('click', this.onClick);
  }

  disconnectedCallback() { store.removeEventListener('change', this.onStore); }

  // Not on clock changes: a re-render would wipe what the commuter is typing.
  onStore = e => { if (e.detail === 'scenario' || e.detail === 'saved') { this.adding = false; this.render(); } };

  onSaved = e => {
    store.saveTrain(e.detail);
    const confirm = this.querySelector('.confirm');
    confirm.textContent = store.text('limitMeaning', { minutes: e.detail.limit });
    confirm.focus();
  };

  // Focus goes to the message, or to the set-up when no train is left, so it is not lost with the removed card.
  onRemoved = e => {
    store.removeTrain(e.detail);
    const confirm = this.querySelector('.confirm');
    if (!confirm) return this.querySelector('mt-train-setup input').focus();
    confirm.textContent = store.text('trainRemoved', { number: e.detail });
    confirm.focus();
  };

  onCancelled = () => { this.adding = false; this.render(); this.querySelector('.add').focus(); };

  onClick = e => {
    if (!e.target.closest('.add')) return;
    this.adding = true;
    this.render();
    this.querySelector('mt-train-setup input').focus();
  };

  render() {
    const saved = store.saved;
    const list = saved.length ? `
      <h2>${store.text('myTrainsTitle')}</h2>
      <p class="confirm" tabindex="-1"></p>
      <ul>${saved.map(t => `<li><mt-train-summary number="${t.number}"></mt-train-summary></li>`).join('')}</ul>` : '';
    const action = this.adding || !saved.length
      ? '<mt-train-setup></mt-train-setup>'
      : `<button type="button" class="add">${store.text('addTrain')}</button>`;
    this.innerHTML = list + action;
  }
}

if (!customElements.get('mt-my-trains')) customElements.define('mt-my-trains', MtMyTrains);
