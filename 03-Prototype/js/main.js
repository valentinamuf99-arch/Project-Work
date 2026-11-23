import { loadData } from './data.js';
import { store } from './store.js';

const FILES = ['app', 'texts', 'trains', 'running', 'alternatives', 'scenarios'];
const COMPONENTS = ['mt-app', 'mt-facilitator', 'mt-my-trains', 'mt-train-setup', 'mt-train-summary', 'mt-warnings', 'mt-train-status'];

const results = await Promise.allSettled(FILES.map(loadData));
const data = Object.fromEntries(FILES.map((name, i) => [name, results[i].value]));
const missing = FILES.filter((_, i) => results[i].status === 'rejected');

if (missing.length) {
  store.data = data; // so the error can still use texts.json if that one was read
  document.querySelector('mt-app').setAttribute('missing', missing.map(f => `data/${f}.json`).join(', '));
} else {
  store.init(data);
}
// Components are registered only now, so they always start from a loaded store.
await Promise.all(COMPONENTS.map(name => import(`./components/${name}.js`)));
