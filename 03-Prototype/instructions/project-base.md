# Prototype base instructions

Rules for building and editing the prototype. Read them before creating or changing any file in `Prototype/`.

## 1. Purpose

- **Front-end only** prototype. No backend, no application server, no database, no real APIs.
- Its job is to **simulate and test the UI** (flows, layouts, interactions) during user testing.
- Anything that a real product would ask a server for is simulated in JavaScript from the mock data.

## 2. Technologies

- **Vanilla HTML, CSS and JavaScript** only.
- No frameworks (React, Vue, Angular, Svelte...), no UI libraries (Bootstrap, Tailwind...), no build tools (Webpack, Vite, npm, transpilers).
- Modern JavaScript that runs natively in the browser: ES modules (`<script type="module">`), `fetch`, `import`/`export`.
- The prototype runs from a plain local static server, for example `python3 -m http.server` started inside `Prototype/`. This is needed because `fetch` cannot read the files in `data/` when the HTML is opened directly from disk.

## 3. Folder structure

```
Prototype/
├── index.html          entry point
├── pages/              other HTML pages (if needed)
├── css/                stylesheets
│   ├── base.css        reset, variables (colors, spacing, fonts)
│   └── components.css  styles for reusable components
├── js/                 scripts
│   ├── main.js         page startup
│   ├── data.js         the only place that reads the files in data/
│   └── components/     one file per UI component
├── assets/             static resources
│   ├── images/
│   ├── icons/
│   └── fonts/
├── data/               mock data, one JSON file per data type
└── instructions/       project instructions (this file)
```

Rules:

- No inline CSS and no `<style>` blocks in pages: all styles live in `css/`.
- No inline JavaScript and no `onclick`-style attributes: all scripts live in `js/`.
- Images, icons and fonts live only in `assets/`, never scattered in other folders.
- File and folder names are lowercase, words separated by hyphens (`trip-card.js`, `route-list.json`).
- Always use relative paths, so the prototype works on any machine.

## 4. Mock data

- **Every piece of content shown in the prototype comes from the mock data** in the `data/` folder. No text, number, name or list is hard-coded in the HTML or JavaScript.
- **One file per data type**, in JSON format (e.g. `data/users.json`, `data/routes.json`, `data/trips.json`).
- Each file holds realistic but invented data. Never use real data from research participants.
- The files in `data/` are read only by `js/data.js`; other scripts get their data from `data.js`.
- To change a test scenario, edit the files in `data/`, not the code.
- Changes made by the user during a test (e.g. saved items, preferences) stay in memory or in `localStorage`; they are never written back to the files in `data/`.

Example mock file:

```json
[
  { "id": "r1", "from": "Central Station", "to": "North Campus", "minutes": 25 },
  { "id": "r2", "from": "Cathedral Square", "to": "North Campus", "minutes": 32 }
]
```

## 5. Good practices

- Semantic HTML (`header`, `main`, `nav`, `button`...) and alt text for images.
- Colors, spacing and fonts defined as CSS variables in `css/base.css`.
- Responsive layout, mobile first.
- Simple, readable code: the prototype must be quick to change between one test session and the next.
