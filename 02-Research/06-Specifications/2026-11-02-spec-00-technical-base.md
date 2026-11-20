---
title: "Specification 00 · Technical base: a front-end only prototype, built from Web Components, that runs every behaviour on mock data and a simulated clock"
date: 2026-11-02
activity: desk-research
source: "Author's request on 2026-11-20 (front end only, no backend, mock data, Web Components); the prototype rules in 03-Prototype/instructions/project-base.md; the data and states named in specifications 01 to 05. Written on 2026-11-20 with the structure of 2026-11-02-specification-instructions.md."
author: "Eugenia Valentina Muffolini"
channel: web
method: technical specification, the shared base under the functional specifications 01 to 05
tags: [train, open-data, warning, routine]
confidence: low
grade: tertiary
status: draft
related: [../plan.md, 2026-11-02-specification-instructions.md, ../../03-Prototype/instructions/project-base.md, 2026-11-02-spec-01-my-train-and-my-limit.md, 2026-11-02-spec-02-warned-about-my-own-train.md, 2026-11-02-spec-03-another-way-to-make-the-trip.md, 2026-11-02-spec-04-following-my-train-stop-by-stop.md, 2026-11-02-spec-05-why-it-is-late.md, ../04-Synthesis/2026-10-23-03-user-stories-ai.md]
---

# Part A · Specification

## Purpose

This specification sets the technical base that every other part of the app is built on. It is the first file a builder reads, before specifications 01 to 05. It does not add any behaviour for the commuter. It says how the prototype is made, where its data lives, how it pretends to be connected to the operator's running information, and how a test session is driven.

This file is the only specification that names technologies and describes how the app is built. The author asked for it explicitly. Specifications 01 to 05 stay free of implementation, as their instructions require; where they say "the operator's running information", the prototype reads the mock data described here.

## Who it is for

- **The model that builds the prototype.** It reads this Part A first, then the Part A of one functional specification, and adds that behaviour on top of this base without changing it.
- **The developer** who changes the prototype between one test session and the next.
- **The facilitator** of a user test, who chooses a scenario and moves the clock while the commuter uses the app.

## Behaviour

| rule | actor | action | response | conditions and edges | state changes |
|---|---|---|---|---|---|
| R1 | The builder | Builds the prototype. | It is front end only: HTML, CSS and JavaScript that run natively in a current browser. No backend, no application server, no database, no real network service. | No framework, no UI library, no build step, no package manager, no transpiler. JavaScript uses ES modules (`<script type="module">`, `import`, `export`). | None. |
| R2 | The builder | Starts the prototype. | It is served by a plain local static server started inside `03-Prototype/` (for example `python3 -m http.server`) and opened at `index.html`. | Opening the file straight from disk is not supported: the browser blocks `fetch` on local files. | None. |
| R3 | The builder | Writes a piece of interface. | It is a Web Component: a custom element defined with `customElements.define`, one class per file in `js/components/`, the file named after the tag (`mt-train-summary` lives in `mt-train-summary.js`). | Every tag starts with the prefix `mt-` ("my train"), so it always contains the hyphen the platform requires and never clashes with a native element. A file defines exactly one element and guards against defining it twice (`if (!customElements.get(...))`). | The element is registered. |
| R4 | The builder | Styles a component. | The component renders into its own light DOM (no Shadow DOM). Its styles live in `css/components.css`, scoped by the tag name (`mt-train-summary .delay { ... }`), and use only the variables of `css/base.css`. | No `<style>` block and no inline `style` attribute, in pages or in components. [open] Shadow DOM with a shared stylesheet adopted by every component, if style leaks between components become a problem. | None. |
| R5 | The builder | Passes data to a component. | Data goes in through properties (objects, lists) or attributes (single strings, numbers, true or false). A component re-renders when its data changes. Data goes out through `CustomEvent`s dispatched on the element, with `bubbles: true` and the payload in `detail`. | A component never reads `data/`, never reads or writes `localStorage` and never imports another component's internals. It may contain other `mt-` elements. Event names are lowercase with hyphens and say what happened (`train-saved`, `limit-set`). | None. |
| R6 | The builder | Needs content for the interface. | Every text, number, name and list shown comes from a JSON file in `data/`, read only through `js/data.js` (`loadData(name)`). | Nothing is hard-coded in HTML or JavaScript, interface sentences included (for example "No train with this number was found"): they live in `data/texts.json`, and a sentence with a value in it uses a placeholder (`{minutes}`). One file per data type, listed in "States and data". | None. |
| R7 | The prototype | Needs the operator's running information. | It reads it from `data/running.json` at the simulated time of the clock (R9), never from the network. The state of a train at the clock time is the most recent event for that train with a time at or before the clock. | A train with no event at or before the clock has no news: the prototype gives it the state "no news", never "on time". "On time" exists only when an event says so, with a delay of 0. | The running state of every train is recomputed. |
| R8 | The prototype | Keeps what the commuter does during a test (saved trains, stops, limits, days). | It keeps it in one module, `js/store.js`, which mirrors it to `localStorage` under one key per scenario. | Nothing is ever written back to `data/`. If `localStorage` is unavailable or throws, the prototype keeps working in memory and loses the data at reload. A reset (R10) clears it. | The commuter's data is saved. |
| R9 | The prototype | Keeps the time and the day. | It has one simulated clock, held by the store: a weekday and a time of day (hours and minutes), started at the scenario's start time (R10). The facilitator moves it forward. Every part of the app reads "now" from this clock, never from the device. | The clock only moves forward, by whole minutes. [open] Whether the clock also runs by itself (for example one simulated minute every real second) or only on the facilitator's command. | "Now" changes; every part listening is told (R11). |
| R10 | The facilitator | Picks a scenario. | The prototype loads it from `data/scenarios.json`: its start weekday and time, the trains already saved (if any) and the running events that apply. The clock and the commuter's data restart from the scenario. | A reset of the same scenario restores it as at the start. The facilitator controls are reachable only when the address ends in `#facilitator`, so the commuter does not see them. [open] Whether the controls are a strip at the top of the page or a separate page opened on a second device. | A new test session starts. |
| R11 | The store | Changes (clock, scenario, commuter's data, running state). | It dispatches one `change` event, with the part that changed in `detail` (`clock`, `scenario`, `saved`, `running`). Components that need it listen when they are added to the page and stop listening when they are removed. | Components only read from the store and ask it to change through its methods; they never change its data directly. | None. |
| R12 | The prototype | Has something to tell the commuter unasked (a warning, as specification 02 decides). | It shows it inside the page, in a region announced to assistive technology (`role="alert"` for a new warning). | Whether and when to warn is decided by the functional specifications, not here. [open] Whether the prototype also uses the browser's system notifications; the sources do not ask for them. | None. |
| R13 | The builder | Writes any element of the interface. | Semantic HTML (`button` for actions, `header`, `main`, `nav`, lists for lists), a text alternative for every image or icon that carries meaning, every action reachable and usable with the keyboard, a visible focus. Mobile first: the layout works from 320 px wide without horizontal scrolling. | Colours, spacing and fonts come only from the variables in `css/base.css`. | None. |

## States and data

**Folder layout** (the one in `03-Prototype/instructions/project-base.md`, plus `js/store.js`):

```
03-Prototype/
├── index.html            the only page; holds <mt-app>
├── css/base.css          reset and variables
├── css/components.css    styles of every mt- element, by tag
├── js/main.js            loads the data, starts the store, registers the components
├── js/data.js            the only module that reads data/
├── js/store.js           clock, scenario, commuter's data, running state (R7 to R11)
├── js/components/        one mt- element per file
├── assets/               images, icons, fonts
└── data/                 the mock files below
```

**Mock data files** (one per data type; all values invented for testing, except real station and line names taken from the specifications):

| file | holds | used by |
|---|---|---|
| `app.json` | the app title and tagline (exists) | the page header |
| `texts.json` | every interface sentence, by key, with placeholders | every component |
| `trains.json` | each train: number, ordered stops, scheduled arrival and departure at each stop, weekdays it runs | "My train and my limit", "Following my train stop by stop" |
| `running.json` | timed events, per scenario and train: time, stop reached, delay in minutes at a stop, cancelled (whole run or from a stop), reason or none | "Warned about my own train", "Following my train stop by stop", "Why it is late" |
| `alternatives.json` | other means of transport between two stops, with times | "Another way to make the trip" |
| `scenarios.json` | each test scenario: id, name for the facilitator, start weekday and time, trains already saved (number, stops, limit, days) | the facilitator controls (R10) |

Shape of one running event: `{ "scenario": "s2", "train": "<number>", "at": "06:05", "stop": "Bassano", "delay": 12, "cancelled": false, "reason": null }`. A field left out means "not given by the operator", not "zero".

**Commuter's data** (in the store, mirrored to `localStorage`, R8): the list of saved trains, each with number, get-on stop, get-off stop, limit in minutes, days.

**States of the prototype:** not loaded → loaded (data read) → scenario running (clock set) → clock moved, any number of times → reset to the same scenario or switched to another. If a data file cannot be read, the prototype stops at "not loaded" and shows which file is missing.

## What the commuter gets and does

This part gives the commuter nothing of their own: it is the ground the other parts stand on. What a test session looks like:

1. **Before the session.** The developer edits the files in `data/` to fit the scenarios to test, and starts the static server.
2. **Set-up.** The facilitator opens the address with `#facilitator`, picks a scenario, and hands the device (or a second window without `#facilitator`) to the commuter.
3. **During the session.** The commuter uses the app as specifications 01 to 05 describe. The facilitator moves the clock forward; each move can bring new running events, which the parts of the app react to.
4. **Between sessions.** The facilitator resets the scenario, or picks another. Nothing typed by the previous commuter remains.
5. **Data cannot be read.** The page says which mock file is missing and does nothing else.

## Example scenarios

These are the mock scenarios the prototype needs so that the scenarios of specifications 01 to 05 can run. Values those specifications mark "unspecified" (train numbers, most times) are invented in `data/` for testing; they are test inputs, not evidence.

1. **Calm morning, nothing saved.** Weekday, 05:30. No train saved. No running events. Runs the set-up of "My train and my limit".
2. **Late beyond the limit.** Weekday, 05:40. One train saved from Bassano, get off at Mestre, limit 30 minutes. Events: 05:50 delay 10 at Bassano; 05:55 delay 35 at Bassano with a reason; 06:10 delay 40. Runs "Warned about my own train", "Why it is late" and "Following my train stop by stop".
3. **Cancelled, with another way.** Weekday, 05:40. Same saved train. Event at 05:50: cancelled, no reason given yet; at 06:00 a reason arrives. `alternatives.json` holds a later train and one other means of transport between the two stops. Runs "Another way to make the trip" and the "no reason yet" path of "Why it is late".
4. **No news.** Weekday, 05:40. One train saved, no running events for it. Runs the "no news, never on time" edge of "Warned about my own train" and of "Following my train stop by stop".

## Acceptance criteria

- Given the prototype folder, when it is searched, then it contains no framework, library, package manifest or build configuration, and no server code. (R1)
- Given a local static server started in `03-Prototype/`, when `index.html` is opened, then the app loads with no request outside the folder. (R1, R2)
- Given any element of the interface, when the page is inspected, then it is an `mt-` custom element defined in its own file in `js/components/`. (R3)
- Given a component file loaded twice, when the page starts, then no error is raised for a duplicate definition. (R3, edge)
- Given any page or component, when it is searched, then it contains no `<style>` block, no `style` attribute and no Shadow DOM. (R4)
- Given any component, when it is searched, then it does not import `data.js`, does not use `localStorage`, and talks to the outside only through properties, attributes and `CustomEvent`s. (R5)
- Given any sentence shown to the commuter, when it is changed in `data/texts.json`, then the new sentence appears after a reload, with no change to the code. (R6)
- Given a train with no running event at or before the clock, when its state is read, then it is "no news", not "on time". (R7, edge)
- Given a train with events at 05:50 and 05:55, when the clock is at 05:56, then its state is the one of the 05:55 event. (R7)
- Given a commuter who saved a train, when the page is reloaded, then the train is still saved; given `localStorage` blocked, the app still works and the train is lost on reload. (R8, edge)
- Given a scenario started at 05:40, when the facilitator moves the clock five minutes, then every part of the app reads 05:45 and none reads the device time. (R9)
- Given a session with data typed by the commuter, when the facilitator resets the scenario, then the clock and the saved trains are as at the start of the scenario. (R10)
- Given the address without `#facilitator`, when the page is open, then the facilitator controls are not shown. (R10)
- Given a component listening to the store, when it is removed from the page and the store changes, then it does not react. (R11)
- Given a new warning, when it appears, then a screen reader announces it without the commuter moving focus. (R12)
- Given a screen 320 px wide, when any part of the app is shown, then nothing scrolls sideways; given the keyboard only, every action can be done. (R13)
- Given a mock file missing, when the page starts, then it says which file and shows nothing else. (States, edge)

## Out of scope

- A backend, an API, a database, user accounts, sign-in.
- Real running information, live or recorded, and any connection to an operator's service.
- Ticket purchase and payment (specification 03 only opens a placeholder).
- Offline use, installation as an app, push notifications from a server.
- Automated tests, a test runner, continuous integration.
- Any behaviour for the commuter: that belongs to specifications 01 to 05.

## Links to other parts of the app

- **My train and my limit** saves the commuter's trains through the store (R8) and reads `trains.json`.
- **Warned about my own train** reads the running state (R7) at the simulated clock (R9) and shows warnings in the announced region (R12).
- **Another way to make the trip** reads `alternatives.json` and `trains.json`, and the running state of other trains.
- **Following my train stop by stop** reads `trains.json` and the running state of the saved train.
- **Why it is late** reads the reason field of the running events.

# Part B · Traceability

## User stories

This specification answers no user story. It is the technical base the author asked for on 2026-11-20, so that the behaviours of specifications 01 to 05, which do answer stories, can be built and tested. Its rules trace to the author's request, to the prototype instructions and to the data the functional specifications name.

## References

| source | what it gives | file |
|---|---|---|
| Author's request, 2026-11-20 | front end only, no backend, mock data, Web Components, a base specification numbered zero | this conversation |
| Prototype base instructions | vanilla HTML, CSS and JavaScript; static server; folder layout; mock data rules; no inline CSS or JavaScript; semantic HTML; mobile first | `../../03-Prototype/instructions/project-base.md` |
| Existing prototype code | `loadData(name)` in `js/data.js`, `data/app.json`, the CSS variables in `css/base.css` | `../../03-Prototype/` |
| Specification instructions | the structure of this file; the rule that functional specifications name no technology | `2026-11-02-specification-instructions.md` |
| Specifications 01 to 05, "States and data" | the data each behaviour reads: trains, stops, times, delays, cancellations, reasons, other means of transport, saved trains, limits, days | `2026-11-02-spec-01-...` to `2026-11-02-spec-05-...` |
| Specification 02, R4 | "no news" must never be shown as "on time" | `2026-11-02-spec-02-warned-about-my-own-train.md` |
| Specification 03, "States and data" | times of other means of transport are made up for the prototype | `2026-11-02-spec-03-another-way-to-make-the-trip.md` |

## Rule trace

| rule | rests on | marks |
|---|---|---|
| R1 | Author's request ("solo frontend e no backend"); project-base §1 and §2 | |
| R2 | project-base §2 | |
| R3 | Author's request ("approccio Web Components"); project-base §3 (one file per component, lowercase hyphen names) | prefix `mt-` is the author's to confirm |
| R4 | project-base §3 (no `<style>` blocks, styles in `css/`) and §5 (variables in `base.css`); Shadow DOM would need styles inside each component | `[open]` |
| R5 | project-base §4 (only `data.js` reads `data/`); keeps components replaceable between test sessions (project-base §5) | |
| R6 | Author's request ("dati mock"); project-base §4 (no text hard-coded) | `texts.json` is new |
| R7 | Specifications 02, 04, 05 (running information); specification 02 R4 (no news is never on time) | |
| R8 | project-base §4 (user changes stay in memory or `localStorage`); specification 01 (saved trains, limits, days) | `js/store.js` is new |
| R9 | Specification 01 R4 and specification 02 R1, R5 (warnings depend on day and time before and after the departure) | `[open]` |
| R10 | project-base §4 ("to change a test scenario, edit the files in `data/`"); the example scenarios of specifications 01 to 05 | `[open]` |
| R11 | Needed by R5 and R9: components must learn that the clock or the data changed | no direct source |
| R12 | Specification 02 (warned "unasked") | `[open]` |
| R13 | project-base §5 | |

## Verifiability pass

| rule | how it fails | what is missing | what is uncheckable | severity |
|---|---|---|---|---|
| R3 | Two components need the same small piece of interface and each copies it. | Nothing: R3 allows one `mt-` element inside another. | Nothing. | `[note]` |
| R4 | Light DOM styles scoped by tag still leak through generic selectors written without the tag. | A check that every selector in `components.css` starts with an `mt-` tag. | Nothing. | `[fixable]` |
| R6 | Interface sentences of specifications 01 to 05 (for example "You will be told when this train is N minutes late or more, or cancelled.") end up in the code. | Nothing: R6 says where they go. | Nothing. | `[note]` |
| R7 | A cancellation from a stop and a later delay event at an earlier stop overlap, and "the most recent event" hides the cancellation. | Whether a cancellation, once given, can be undone by a later event. The specifications do not say. | Nothing. | `[fixable]` |
| R9 | Specification 02 warns "only on a day the commuter takes the train"; a scenario without a weekday cannot test it. | Nothing: R9 and R10 give the scenario a weekday. | Nothing. | `[note]` |
| R10 | The commuter sees the facilitator controls by typing the address. | Nothing in a moderated test. | Nothing. | `[note]` |
| R11 | No source asks for it: it is a mechanism, not a behaviour. | Nothing. | Nothing. | `[note]` |
| R12 | Several warnings in a row are all announced and overlap for a screen reader. | How many warnings stay on screen and in which order (specification 02's job). | Nothing. | `[fixable]` |

## Assumptions and open questions

- **This specification breaks one rule of the specification instructions on purpose.** The instructions say a specification never names software or says how the app is built. The author asked for a technical base; the rule stays valid for specifications 01 to 05.
- **The folder is `03-Prototype/`.** The prototype instructions call it `Prototype/`; this file uses the folder that exists.
- **`js/store.js` and `data/texts.json` are new.** The prototype instructions do not list them. Test: whether the author accepts the extra module, or prefers the store inside `main.js`.
- **The mock values are invented.** Train numbers and most times are "unspecified" in specifications 01 to 05. Test: the author checks the scenarios in `data/` before the first session.
- **[open] choices:** R4 light DOM or Shadow DOM; R9 clock moved by hand only, or also running by itself; R10 facilitator controls on the same page or on a second device; R12 system notifications or not.
