import { loadData } from './data.js';

const app = await loadData('app');
document.title = app.title;
document.getElementById('app-title').textContent = app.title;
document.getElementById('app-tagline').textContent = app.tagline;
