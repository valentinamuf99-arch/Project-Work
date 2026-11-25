---
title: "Design · Moodboard: the Trenitalia app style as the base, and interaction ideas from the commented references, for the prototype"
date: 2026-11-23
activity: desk-research
source: "Author's moodboard: 13 screenshots in 04-Moodboard/references/ with the author's comment in a .md file next to each, and 8 screenshots of the Trenitalia app in 04-Moodboard/reference-trenitalia/ (two of them, 01-recover-ticket.png and 02-infomobility-train-number.png, identical to 01-trenitalia-recover-ticket-tabs and 02-trenitalia-infomobility-tab-bar in references/; files in both folders renamed on 2026-11-25 after what they show). The 5 screenshots in 04-Moodboard/ with an empty comment file were left out. Added on 2026-11-23: 8 screenshots of the Trenitalia Smart Caring flow in 04-Moodboard/reference-trenitalia/smart-caring/, taken by the author on 2026-11-23 on train 16403 (Bassano–Venezia), with the author's comment that Smart Caring is close to the prototype's warning and that the prototype's advantage is giving the alternatives when something goes wrong. Added on 2026-11-25: 3 more screenshots of a Smart Caring notification on train 16403 (24 November 2026, 20:40), with the author's description of the order in which they appear. Images read by the AI; colour values estimated from the screenshots."
author: "Eugenia Valentina Muffolini"
channel: web
method: visual analysis of the commented references, drafted by AI from the author's comments
tags: [trenitalia, train, routine, warning, understanding, alternative]
confidence: medium
grade: tertiary
status: draft
related: [../02-Research/05-Ideation/2026-10-26-05-concept-ai.md, ../02-Research/06-Specifications/2026-11-02-spec-01-my-train-and-my-limit.md, ../02-Research/06-Specifications/2026-11-02-spec-02-warned-about-my-own-train.md, ../02-Research/06-Specifications/2026-11-02-spec-03-another-way-to-make-the-trip.md, ../02-Research/06-Specifications/2026-11-02-spec-04-following-my-train-stop-by-stop.md, ../02-Research/06-Specifications/2026-11-02-spec-05-why-it-is-late.md]
---

# Design · Moodboard and prototype guidelines

## Scope and method

This note sums up the moodboard for the prototype. It collects the style and the interaction ideas taken from the commented references in [references/](references/) and adapts them to the style of the Trenitalia app ([reference-trenitalia/](reference-trenitalia/)). Only references with a written comment are used; the comment is the author's, the reading of the image is the AI's. Colour values are estimated from the screenshots and still need checking. The moodboard is a matter of taste and of fitting into an existing app: it is not evidence from participants.

## Guiding principle

The prototype's features live **inside the Trenitalia app**, so the Trenitalia style leads and external references give ideas, not style.

- **Trenitalia leads**: colours, typography, buttons, cards, bottom bar, header and bottom sheets follow the existing app. A user should not feel they have entered a "new" app.
- **External references give ideas, not style**: from Dribbble/Behance the prototype takes interaction and layout patterns (greeting, vertical tracking, day picker, train images) and redesigns them in the Trenitalia visual language.
- When an external reference and Trenitalia conflict (e.g. yellow or lime green buttons), Trenitalia wins.

## Trenitalia colours

Source: screenshots in [reference-trenitalia/](reference-trenitalia/). Values are estimated.

| Role | Estimated colour | Where it appears |
|---|---|---|
| Primary (petrol green) | about `#00504F` | Infomobilità and results header, active tab, active radio and toggle, text links |
| Light primary on header | petrol green at about 70% opacity | unselected chips and fields inside the green header |
| CTA (Trenitalia red) | gradient from `#8A1A2B` to `#E3173A` (left → right) | "Ricerca", "Ricerca viaggio", "Conferma", "Filtri" |
| Disabled CTA | same gradient, desaturated/transparent | "Ricerca" in Recupera biglietto |
| Soft red accent | light pink about `#F9DDE2` with red icon | swap stations button, "Acquisto rapido" tag |
| Info | light blue about `#EAF0FB` with dark "i" icon | disruption banner, "Vai alle notizie in tempo reale" |
| Warning | amber about `#F5A623` on a `#FDEFD3` circle | "Attenzione" modal |
| Regionale | lime green of the Regionale logo | train type label in results |
| Background | white `#FFFFFF` | all screens |
| Section background | very light grey about `#F2F3F5` | section headers in the menu, thick dividers between blocks |
| Borders | light grey about `#D9DCE1`, 1px | inputs, cards, secondary buttons |
| Text | near black for titles, dark grey for placeholders and labels | everywhere |

## Trenitalia typography

The Trenitalia app uses a geometric, rounded sans serif (similar to Figtree). In the prototype: Figtree or, as a fallback, the system font.

- **Page title**: large, bold, left aligned ("Ricerca il tuo viaggio", "Recupera biglietto", "Infomobilità").
- **Times** in results: large and bold (`20:25 - 21:39`), they are the main information.
- **Section labels**: uppercase, grey, small ("FILTRA PER TIPOLOGIA TRENO", "IN VIAGGIO").
- **Label + value** in fields: small grey label on top, larger dark value below ("Andata / 23 Nov - 20:17").

## Trenitalia components

The prototype reuses these Trenitalia components as they are.

- **Header**: two variants. White with black title and an X on the right (modal flows, forms). Petrol green with white title and white icons (Infomobilità, search results).
- **Bottom bar** with 5 items, icon + label: Home, I miei viaggi, Acquista, Infomobilità, Carte fedeltà. Active item in petrol green with a thin line above it. The prototype's features sit inside **Infomobilità** (see "Treni seguiti") or **I miei viaggi**; they add no new items.
- **Chips/tabs in the green header**: rounded pills, the selected one dark and filled, the others light green ("N. Treno", "Tabellone", "Da/a", "Treni seguiti"). They scroll horizontally.
- **Segmented control** on white background: light grey pill container, active option white and raised ("PNR/Codice Biglietto" / "Codice di recupero").
- **Input fields**: white rectangles, 1px grey border, rounded corners (~8px), grey placeholder. From/To in a single block with a divider and a round button overlapping on the right.
- **Primary button**: full width, red gradient, white text, ~12px corners, anchored to the bottom of the screen.
- **Secondary button**: white with grey border and black text, same shape as the primary ("Reset", "Torna all'Homepage"). Secondary + primary pair side by side or stacked.
- **Result card**: no border, separated by a grey band. Train type and price at the top, then large times, route, duration and "Diretto"/"1 Cambio" underlined.
- **Lists**: white rows with icon on the left, text, chevron on the right, thin divider. Collapsible sections with a grey header.
- **Radio and toggle**: petrol green when active.
- **Bottom sheet**: rounded top corners, X at the top right, dimmed background behind. Used for filters and confirmations.
- **Warning modal**: centred icon in a coloured circle, large title, one sentence, two stacked buttons.
- **Info banner**: light blue card with "i" icon, bold title and text; external link with icon.
- **Day selector** in results: row of dates ("Sab 21", "Dom 22", "Lun 23") with the active day white and underlined.

## Trenitalia Smart Caring · the existing notification feature

Smart Caring is the Trenitalia feature that comes closest to the prototype's warning: the commuter follows a train and receives notifications about it. Screenshots in [reference-trenitalia/smart-caring/](reference-trenitalia/smart-caring/), taken on train 16403 (Bassano–Venezia, 21:20).

- **Train detail** ([01](reference-trenitalia/smart-caring/01-train-detail.png)): white header "Infomobilità" with an X. Regionale logo + train number, date, and a soft grey button "Attiva notifiche smart caring" with a bell. A status card ("Non partito" in a grey chip with an "i"). Then the stops as a vertical list: a thin grey line on the left, a table icon per stop, stop name in bold, platform badge ("BIN 4", filled when it is the current stop, outlined otherwise), and for each stop "Programmata" times in grey and "Stimata" times in petrol green, joined by a dotted bracket. Secondary button "Vedi notifiche Smart Caring" at the bottom.
- **Follow set-up** ([02](reference-trenitalia/smart-caring/02-follow-setup.png), [03](reference-trenitalia/smart-caring/03-follow-setup-stops.png)): bottom sheet "Segui treno e attiva notifiche". A toggle "Voglio ricevere le notifiche in app". Grey uppercase section headers: "RICEVI NOTIFICHE APP NEI GIORNI:" with **day circles L M M G V S D** (selected filled petrol green, others light grey), "A QUEST'ORA:" with an hour/minute wheel (selected values in petrol pills), "FINO A:" with a radio list ("Intero percorso" or one stop). "Annulla" (secondary) and "Conferma" (red) side by side, fixed at the bottom.
- **Confirmation** ([04](reference-trenitalia/smart-caring/04-follow-confirmed.png)): bottom sheet with a check in a soft petrol circle, title "Notifica registrata", one sentence, red "Ok" button. Same pattern as the "Attenzione" warning modal, with a success icon.
- **Followed train card** ([05](reference-trenitalia/smart-caring/05-followed-trains-card.png)): under the "Treni seguiti" chip. Card with a header row (Regionale logo, number, trash icon) and a body like a result card: departure and arrival stations, **large times** (21:20, 22:39) with the duration between two dots, then "Modifica" with a bell (petrol link), platform badge and status chip "Non partito".
- **Smart Caring updates** ([06](reference-trenitalia/smart-caring/06-smart-caring-list.png), [07](reference-trenitalia/smart-caring/07-smart-caring-open.png), [08](reference-trenitalia/smart-caring/08-smart-caring-open-two.png)): bottom sheet "Smart Caring" with an accordion, newest first. Each row is only "Aggiornamento - ore 18:35" with a chevron; the text appears only when opened.
- **A notification** ([09](reference-trenitalia/smart-caring/09-push-notification-lock-screen.jpg), [10](reference-trenitalia/smart-caring/10-notification-attention-modal.png), [11](reference-trenitalia/smart-caring/11-notifications-list.png)): the push says "Buonasera, ti informiamo che la circolazione sulle linee interessate dal treno 16403 è regolare. Rilevamento delle 20:40". Tapping it opens the app straight on a bottom sheet titled **"Attenzione"**, with a signal icon, the same sentence and a red "Chiudi" button. Only after closing it does the commuter see the "Notifiche" screen, with the chips "Smart caring" and "Promozioni" and the notification in a list (date and time, text cut after three lines). The arrow on the row opens the same "Attenzione" sheet again. The order of the three screens is the author's description of the flow.

## Smart Caring · what it lacks and what the prototype adds

What the screenshots show about Smart Caring, read against the prototype. This is the author's positioning plus the AI's reading of 11 screenshots, not evidence from participants.

- **The title says nothing.** Every update is "Aggiornamento - ore …": the commuter must open each one to know whether it matters. The prototype's warning puts the fact in the first line ("06:02 Bassano: 35 min late").
- **Generic, repeated text.** The updates opened (18:35 and 18:32) carry the same long notice about works at Venezia Mestre from 13 December, not about the followed train today, and the notice arrived before the train was followed (updates 18:25 to 18:35, train at 21:20). The prototype warns only about the commuter's own train and only past the commuter's limit.
- **No alternative.** Smart Caring sends the commuter to "trenitalia.com, biglietterie e assistenza in stazione, call center". **The prototype's advantage, in the author's words, is giving the alternatives when something goes wrong**: the next train or bus, with "Buy ticket" in place.
- **It speaks on ordinary days too, with the wrong title.** The notification of 24 November says that circulation is regular, and opens under the title "Attenzione": the commuter is alerted to read that nothing is wrong. The prototype stays silent until the delay passes the commuter's limit or the train is cancelled, and gives a title only to what matters.
- **The notification lands on a modal, not on the train.** Tapping the push opens an "Attenzione" sheet with one button, "Chiudi", and then a list of notifications: nothing leads to the train or to another way. In the prototype the warning opens with the train's state and the other ways in the same place.
- **No personal limit.** Smart Caring asks days, a start time and "until which stop"; it does not ask how much delay matters. The prototype asks for the limit.

## Smart Caring · what the prototype takes: style only

The author's decision: flows and behaviour follow the specifications 01 to 05, not Smart Caring. The Smart Caring screenshots are used only for the general style, and some of it can be improved.

- **Not taken**: Smart Caring's flow (bottom-sheet set-up with a time wheel and "until which stop", confirmation sheet, "Aggiornamento" accordion). The set-up, the warnings and the other ways stay as the specifications describe them.
- **Followed train card**: taken as a style base and improved. A header row with the train number above a divider, departure and arrival stations with **large times** at the two ends joined by a line, then the limit and the days as small grey chips (in place of the platform and status chips).
- **Stop list**: estimated times in petrol green, scheduled times in grey, as in the Smart Caring train detail.
- **Day circles**: same look as Smart Caring (selected petrol green); letters stay those of the prototype's language.
- [open] **Line colour of the stop timeline.** Trenitalia's own list uses a thin grey line; the moodboard reference 08-italo-line-map suggests a line in the train's colour. The prototype uses the Regionale green line for now; the author decides.

## References · structure and navigation

For each reference: the author's comment, what the prototype takes and how it is adapted to the Trenitalia style.

**[01-trenitalia-recover-ticket-tabs](references/01-trenitalia-recover-ticket-tabs/01-trenitalia-recover-ticket-tabs.png) · Recupera biglietto (Trenitalia)**
- Comment: the author likes the tab at the top.
- Taken: the grey pill segmented control to switch between two views of the same page (e.g. "Outbound / Return" of the usual train, or "Route / Details").

**[02-trenitalia-infomobility-tab-bar](references/02-trenitalia-infomobility-tab-bar/02-trenitalia-infomobility-tab-bar.png) · Infomobilità (Trenitalia)**
- Comment: the author likes the bottom bar because it is the Trenitalia app one.
- Taken: the same bottom bar, with "Infomobilità" active. The "Treni seguiti" chip is the natural entry point for the prototype's features.

## References · home and personalisation

**[05-ride-app-greeting](references/05-ride-app-greeting/05-ride-app-greeting.png) · Ride app, "Good morning, Alex"**
- Comment: the author likes the greeting to the user and the style.
- Taken: a personal greeting at the top ("Good morning, Giulia") and, below it, a contextual suggestion ("Your 7:42 train"). A large card with the most important information of the moment.
- Adaptation: no black and lime green. Large black title on white, card with petrol green header, red CTA.

**[11-trendora-greeting-search](references/11-trendora-greeting-search/11-trendora-greeting-search.png) · Trendora, "Hello Tavorian"**
- Comment: the author likes the greeting, the search bar and the confirm button.
- Taken: greeting + short subtitle, pill search bar with an action button built in on the right, filter chips below.
- Adaptation: the search bar follows the Trenitalia From/To block with the round red button (see Trenitalia Home, [04-home](reference-trenitalia/04-home.png)).

**[04-train-app-search-question](references/04-train-app-search-question/04-train-app-search-question.png) · Train App UI Kit, "Go Every Where?"**
- Comment: the author likes the search bar, the question as a title and the days.
- Taken: **question as title** to guide the user ("Which train do you usually take?", "When do you travel?"); **strip of days** with weekday + number, active day highlighted; search bar with action icon.
- Adaptation: active day in petrol green (not yellow), shapes consistent with Trenitalia chips.

**[13-weekday-picker](references/13-weekday-picker/13-weekday-picker.png) · Edit session, weekdays**
- Comment: the author likes the way the weekday is chosen.
- Taken: days as circles with the initial (M T W T F S S), multiple selection, inside a block with an uppercase label ("EVERY", "TIME"). Then "From / To" fields side by side and a "Repeat" toggle.
- Use in the prototype: setting up the **usual train** (days of travel, time slot, acceptable delay limit).
- Adaptation: selected circles in petrol green, grey uppercase labels as in the Trenitalia filters, red "Save" CTA at the bottom.

## References · train tracking

**[06-parcel-tracking-map](references/06-parcel-tracking-map/06-parcel-tracking-map.png) · Parcel tracking on a map**
- Comment: the author likes the map showing where the parcel is.
- Taken: light, desaturated map, dashed route, start and end markers, summary card at the bottom overlapping the map.

**[07-location-tracking-map](references/07-location-tracking-map/07-location-tracking-map.png) · Location Tracking**
- Comment: the author likes the map and the way the parcel is tracked.
- Taken: map at the top, **draggable bottom sheet** below with status ("In transit"), dotted progress between stops, departure and estimated arrival on either side.
- Adaptation: white bottom sheet as in Trenitalia (not black), status badge with the train state colours (see "Train states").

**[12-schedule-vertical-timeline](references/12-schedule-vertical-timeline/12-schedule-vertical-timeline.png) · Schedule, vertical timeline**
- Comment: the author likes being able to follow the train or parcel vertically too, not only on the map, so more information can be written.
- Taken: **vertical timeline** with a continuous line on the left, a dot for each stop, a card for each stop with time, badge and details. Collapsible groups ("Past stops", "Next stops").
- Use in the prototype: main view to **follow the own train stop by stop**. The map becomes a secondary view (segmented control "Stops / Map").

**[08-italo-line-map](references/08-italo-line-map/08-italo-line-map.png) · Italo line map**
- Comment: the author likes that the line following the train and its stops recalls the style of the train itself.
- Taken: the route line in the **train's colour** (e.g. red for Frecce, green for Regionale) and stops as white circles with a thick border; main stations larger.
- Adaptation: no Italo style. The prototype uses the Trenitalia category colours, applied to the line of the vertical timeline and of the map.

## References · alternatives and images

**[03-train-app-ai-results](references/03-train-app-ai-results/03-train-app-ai-results.png) · Train App, "AI Results"**
- Comment: the author likes the train images, useful to show alternatives.
- Taken: cards with a **cut-out train image** sticking out on the right, info chips at the top (line, duration), title, pill CTA.
- Use in the prototype: list of **alternatives to make the same trip** (another train, replacement bus, etc.), each card shows the vehicle with a recognisable image.
- Adaptation: images of Trenitalia vehicles (Regionale, Frecciarossa, Intercity, bus), cards with the same order of information as Trenitalia result cards (large times, route, duration/changes), red CTA.

## References · buttons

**[09-train-booking-buttons](references/09-train-booking-buttons/09-train-booking-buttons.png) · Train booking, "Search Trains"** and **[10-flights-chips-buttons](references/10-flights-chips-buttons/10-flights-chips-buttons.png) · Flights, chips and buttons**
- Comment: the author likes the button style in both.
- Taken: solid, soft buttons; **pill chips** for quick choices (e.g. "Fastest / Fewest changes / Nearest"); small selectable cards for dates; "recent searches" rows with an icon in a soft circle + chevron.
- Adaptation: main buttons stay Trenitalia ones (red gradient, ~12px corners). The pill style is used only for chips and filters, as Trenitalia already does in the Infomobilità header.

## Train states

No reference defines the states of the own train, so this note sets them, consistent with Trenitalia colours. A state never relies on colour alone: always text + icon.

| State | Colour | Example text |
|---|---|---|
| On time | petrol green | "On time" |
| Delay within my limit | amber | "+4 min" |
| Delay over my limit | red | "+18 min, over your limit" |
| Cancelled | solid red, white text | "Cancelled" |
| Information / cause | info blue | "Line fault between X and Y" |

## Interaction ideas

The interaction patterns the prototype takes from the moodboard, in one list.

- **Greeting + card of the moment** on opening: today's train is the first thing the user sees.
- **Question as title** in setup steps, one question per screen.
- **Day selection** with circles, multiple, for the usual train.
- **Vertical timeline** as the main tracking view; the map is optional.
- **Coloured train line** linking the stops, with the current stop highlighted and past ones faded.
- **Draggable bottom sheet** over the map, with a summary always visible.
- **Alternative cards with the vehicle image**, comparable at a glance.
- **Pill chips** for filters and quick choices; segmented control to switch views.
- **Warnings** with the Trenitalia modal (icon in a circle, title, one sentence, two buttons) and light blue banners for non-urgent information.
- **CTA always at the bottom**, full width, within thumb reach.

## What to avoid

Elements of the external references that clash with the Trenitalia app and stay out of the prototype.

- Palettes from external references (yellow, lime green, orange, solid black).
- New bottom bar items or headers different from the Trenitalia ones.
- Pill-shaped primary buttons or buttons with an arrow-in-circle icon: in Trenitalia the primary is a rounded rectangle with a red gradient.
- Photos of people and avatars: Trenitalia does not use them; the greeting is text only.
- Dark or very detailed maps: light, desaturated map, the route is the only coloured element.

## Signals

Reading, not evidence: how the moodboard ideas map to the specifications in `02-Research/06-Specifications/`.

- **Specification 01 · My train and my limit**: day circles, "From / To" time fields and question titles shape the setup of the usual train and of the delay limit.
- **Specification 02 · Warned about my own train**: the greeting + card of the moment and the train state colours carry the warning; the Trenitalia warning modal is the pattern for an urgent one.
- **Specification 03 · Another way to make the trip**: alternative cards with the vehicle image, in the order of the Trenitalia result card.
- **Specification 04 · Following my train stop by stop**: vertical timeline as the main view, coloured train line, map with draggable bottom sheet as the secondary view.
- **Specification 05 · Why it is late**: the light blue info banner and the "Information / cause" state.
- The entry point for all of them is the "Treni seguiti" chip in Infomobilità, so the bottom bar stays as it is.
- **Smart Caring as the baseline**: specifications 02 and 03 improve on an existing Trenitalia feature rather than adding a new one. The difference to test is a warning that says what happened to the own train in its first line and offers the other ways in place, against Smart Caring's "Aggiornamento - ore …" rows with generic text and no alternative. A second difference to test: silence on ordinary days, against Smart Caring's "Attenzione" sheet that says circulation is regular.
