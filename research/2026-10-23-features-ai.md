---
title: "Features · the minimum capability the service could offer at each touchpoint, proposed from the research notes"
date: 2026-10-23
activity: desk-research
source: "2026-10-23-touchpoints-ai.md, cross-checked against the six interview notes (P1 to P6) and the App Store review note, read on 2026-10-23; transcripts not read"
author: "Eugenia Valentina Muffolini"
channel: web
method: feature proposal from touchpoints, one row per feature, each anchored to a touchpoint and a quote
tags: [train, boat, bus, venezia, vicenza, padova, castelfranco, rovigo, monselice, routine-break, cancellation, strike, long-delay, missed-connection, noticing, understanding, deciding, information-source, trust, waiting, alternative, warning, trenitalia, viaggiatreno]
confidence: medium
grade: secondary
status: needs-review
related: [plan.md, 2026-10-23-touchpoints-ai.md, 2026-10-23-user-stories-ai.md, Notes/2026-10-07-interview-lucrezia-gradi.md, Notes/2026-10-07-interview-matteo-galvagni.md, Notes/2026-10-07-interview-lorena-tonuzi.md, Notes/2026-10-07-interview-greta-tonuzi.md, Notes/2026-10-09-interview-anna-baggio.md, Notes/2026-10-09-interview-benedetta-rossi.md, Desk research/2026-10-13-review-analysis-trenitalia-trainline.md]
---

# Features · the minimum capability the service could offer at each touchpoint

## Scope and method

This note proposes features. It does not decide which to build: that decision stays with the author of the project.

Each feature starts from a touchpoint in `2026-10-23-touchpoints-ai.md` (cited as TP and its row number) and answers only the moment the quotes show. "Minimum" means the smallest capability that answers that moment. The "what it does" column says what, never how: no implementation, no interface.

Rules applied: every feature cites at least one touchpoint and one quote from a note; no competitor or market practice was used as a source of need; a touchpoint whose quotes show no unmet need gets no feature; features that could not be anchored are listed under "Dropped" with the touchpoint that failed to hold them.

## Confidence marks

- **[strong]**: the touchpoint behind the feature is cited by at least two participants, and the citations relied on are not marked (?).
- **[weak]**: the touchpoint rests on one participant, on App Store reviewers only, or on citations marked (?) or ⚠ in a way that touches the feature.

The mark is about the evidence, not about the value of the feature.

- **[no story]**: added on 2026-10-23 by `2026-10-23-user-stories-ai.md`. No participant's quote or observation shows the outcome the feature would serve, so it got no user story. The reason is in that note, under "Back on the list".

## Source codes

Same codes as the touchpoints note.

| Code | Note |
|---|---|
| P1 | `Notes/2026-10-07-interview-lucrezia-gradi.md` |
| P2 | `Notes/2026-10-07-interview-matteo-galvagni.md` (Pt.2 and Pt.2.1 are the two recordings) |
| P3 | `Notes/2026-10-07-interview-lorena-tonuzi.md` |
| P4 | `Notes/2026-10-07-interview-greta-tonuzi.md` |
| P5 | `Notes/2026-10-09-interview-anna-baggio.md` |
| P6 | `Notes/2026-10-09-interview-benedetta-rossi.md` |
| REV | `Desk research/2026-10-13-review-analysis-trenitalia-trainline.md` (App Store reviewers, not participants) |

## Features before the trip

| # | Feature | Touchpoint it answers | Evidence (note + quote) | What it does, one line |
|---|---|---|---|---|
| F1 | **Own-train alert before leaving** [strong] | TP 10, TP 11, TP 44 | P2 Pt.2 [00:06:15] "1º di andare in stazione controllo se il treno un ritardo effettivamente"; P3 [00:14:29] "può essere che ti avvisi proprio pochi minuti 1º"; P1 [00:10:16] "letteralmente 2 minuti 1º del... Dell'annuncio, mi è arrivata una mail."; P5 [00:11:29] "se ci fosse un'applicazione che appunto mi mi dice che il quel treno è in ritardo, sarebbe comodissimo" | Tells the commuter, before they leave home, that their own train is late or cancelled. |
| F2 | **Alerts for pass holders too** [weak] [no story] | TP 51 | REV [IMG_2386] "Almeno una volta al mese mi ritrovo a piedi" (row marked (?): the quote shows the consequence, not the moment). P3, P5 and P6 hold passes but were not asked about alerts | Sends the F1 alert to pass holders, for the route their pass covers. |
| F3 | **Cancelled or only late** [weak] | TP 13 | P2 Pt.2.1 [00:12:55] "nel tracking live non lo vedo partito, ma non lo vedo neanche cancellato"; P2 Pt.2.1 [00:14:23] "un ritardo di 15 minuti è molto diverso da una cancellazione". One participant | Says, as soon as it is known, whether the commuter's train is cancelled or only late. |
| F4 | **Strike notice for one's own route** [strong] | TP 17, TP 18, TP 19 | P2 Pt.2 [00:07:12] "non sempre sono indicati nell'applicazione, sicuramente non ti arriva una notifica"; P4 [00:13:14] "Dall'app no, ma dal sito sì."; P5 [00:08:37] "sui social escono gli annunci [...] Tipo Instagram"; P4 [00:12:01] "il mio treno era garantito" | Tells the commuter, days ahead and in the operator's own channel, that a strike hits their route and which of their trains are guaranteed. |
| F5 | **Notices filtered to one's route** [strong] | TP 16 | P2 Pt.2 [00:09:40] "C'è un trafiletto piccolo piccolo che a volte appare però tu devi aprire l'app"; P2 Pt.2.1 [00:00:00] "non me ne frega nulla se a Palermo c'è un guasto"; P4 [00:13:24] "nella parte di infomobilità che c'è nell'app non esce niente" | Shows only the disruptions that touch the commuter's own route, regional trains included. |
| F6 | **Last-minute purchase path** [strong] | TP 7, TP 8, TP 9 | P2 Pt.2.1 [00:09:10] "Provando, dando per scontato che fosse possibile"; P5 [00:04:39] "tu non puoi fare il biglietto perché dicono che il treno è in partenza imminente [...] devi andare proprio allo sportello"; P5 [00:05:12] "provo a fare tap and tap, me l' suggerito anche la [P3]" | When the app stops selling a ticket close to departure, says so before the commuter tries and points to the way of paying that still works. |
| F7 | **Tight connection flagged at purchase** [weak] [no story] | TP 6 | REV [IMG_2397] "che anche se i treni fossero in orario si farebbe fatica". Reviewers only | Flags, when the commuter buys, a connection too short to hold if the first train is late. |
| F8 | **Own train, stop by stop** [weak] | TP 12, TP 14 | P3 [00:14:51] "puoi inserire il numero del tuo treno e ti dà aggiornamenti in tempo reale"; REV [IMG_2383] "l'aggiornamento in tempo reale è sempre sbagliato". One participant, plus reviewers | Lets the commuter follow their own train stop by stop, in the operator's own channel. |

## Features at the station

| # | Feature | Touchpoint it answers | Evidence (note + quote) | What it does, one line |
|---|---|---|---|---|
| F9 | **The reason, on the board** [strong] | TP 23, TP 28 | P3 [00:15:29] "nei tabelloni c'è sempre scritto in grande proprio ritardo, ritardo, cancellato"; P6 [00:11:00] "La motivazione magari."; P6 [00:11:38] "in un luogo in cui tutti comunque passano [...] sarebbe utile che ci siano tutte le informazioni per tutte le persone"; P6 [00:14:01] "solitamente è dopo che magari ti dicono eventuali soluzioni". The ask for a reason at the station is P6's; the board moment itself is shared by P1, P3, P5, P6 | Gives the reason for a delay at the station, where commuters without the app look. |
| F10 | **Board in step with the train** [weak] [no story] | TP 24 | P1 [00:09:00] "Il mio treno non sembra in ritardo [...] Grandissima cazzata perché in realtà era era in ritardo". One participant, ⚠C1 | Shows the commuter's train on the board as late when it is late. |

## Features on the train

| # | Feature | Touchpoint it answers | Evidence (note + quote) | What it does, one line |
|---|---|---|---|---|
| F11 | **Why it is stopped, and for how long** [strong] | TP 35, TP 37, TP 38, TP 40, TP 41 | P4 [00:06:18] "non era uscito nessun avviso del fatto del guasto di linea, perché appunto mi è stato riferito dal capotreno dopo un po' di chiamate"; P4 [00:14:57] "Neanche dallo speaker niente"; P1 [00:16:19] "fammi capire qual è il problema, qual è la tempistica"; P6 [00:11:04] "Capire se è anche una cosa magari temporanea o che si può eventualmente prolungare". ⚠C2: P5 [00:07:51] says on-board announcements do give a restart time | Tells the commuter on a train that is not moving why it is stopped and how long it is expected to stay. |
| F12 | **No way home, said early** [weak] | TP 29, TP 35 | P4 [00:09:35] "Che non avrei avuto modo di tornare a casa con I mezzi pubblici e che avrei potuto far partire I miei genitori molto 1º"; P4 [00:04:49] "comincio a domandarmi se effettivamente avesse avuto senso far partire qualcuno da casa". One participant | Tells the commuter early when no public option will get them home that evening. |
| F13 | **Someone to ask on board** [weak] [no story] | TP 43 | P1 [00:19:03] "avrò visto il controllore del treno 3 volt"; P1 [00:19:34] "Cioè io se devo chiedere qualcosa a qualcuno cosa faccio?". One participant, ⚠C3: for P3, P4 and P6 staff are there | Gives the commuter on board someone to ask when no conductor is around. |

## Features for replacement, connection and recovery

| # | Feature | Touchpoint it answers | Evidence (note + quote) | What it does, one line |
|---|---|---|---|---|
| F14 | **Alternatives for one's own trip** [strong] | TP 46, TP 26, TP 45, TP 53 | P1 [00:17:41] "Io avrei voluto sapere quali altri treni ci sono che avrei potuto prendere"; P1 [00:11:35] "È stato random"; P2 Pt.2.1 [00:07:50] "manca la soluzione alternativa proposta"; REV [IMG_2403] "non mi ha inviato neanche delle alternative di treni" | After a cancellation or a missed connection, proposes the trains that can still get the commuter to their destination, including ones still waiting in the station. |
| F15 | **Is my ticket valid on it?** [strong] | TP 50, TP 48 | P2 Pt.2.1 [00:07:50] "Non è chiaro subito se con lo stesso biglietto puoi prendere magari quello dopo"; P3 [00:12:45] "l'autobus non consentiva l'utilizzo dell'abbonamento, quindi ho dovuto fare un biglietto in più" | Tells the commuter whether their ticket or pass is valid on the alternative, replacement bus included. |
| F16 | **Will the next leg wait?** [strong] | TP 42, TP 49 | P3 [00:18:15] "il treno era molto in ritardo e l'avremmo perso sicuramente"; P3 [00:17:41] "avrebbe chiamato il treno successivo [...] Per far sì che ci aspettasse"; P1 [00:12:32] "quando sono arrivata non c'era il battello. Mi dovuto aspettare mezz'ora". ⚠C4: P3's held connection depended on one conductor | Tells the commuter on a late train whether the next leg, train or boat, will still be there. |
| F17 | **Change or claim from the same place** [weak] [no story] | TP 54, TP 55 | REV [IMG_2377] "qualcosa è andato storto"; REV [IMG_2387] "Informazione al momento non disponibile". Reviewers only | Lets the commuter change a ticket or claim compensation after a disruption without being sent to another channel. |

## Touchpoints with no feature

The quotes at these touchpoints show the moment working, or show no need a capability could answer. They get no feature, by the minimum rule.

- **TP 1 to 5, 33, 34** (buying, validating, showing tickets): no failure in the quotes.
- **TP 9** (tap at the validator): it is the working answer, used by F6.
- **TP 21, 22, 27** (opening the app on arrival, reading the board, the loudspeaker on an ordinary day): they work; the board's failures are in F9 and F10.
- **TP 20, 25, 30, 31, 32, 36, 39, 47, 52**: see "Dropped" below.

## Dropped

Features considered and not shipped, with the touchpoint that failed to hold them.

| Feature considered | Touchpoint | Why it was dropped |
|---|---|---|
| Platform-change alert | TP 25, TP 52 | At TP 25 the board did the job: P6 [00:05:02] "Mi sono resa conto che non era più il binario uno ma era il binario 3". The app sending someone to the wrong platform (TP 52) is reviewers only and is an accuracy problem, already in F8 and F10. |
| My station's departures in the app | TP 15 | Reviewers only, one citation marked (?). Participants answer this moment with the physical board (TP 22: P1, P2, P6). |
| Engineering-works notice | none | P5 [00:12:03] asks for it, but no touchpoint row holds a moment of contact about works: the only review on it (IMG_2394) was dropped from the touchpoints for lack of a quote. |
| One ticket or plan across operators | TP 1 to 5, TP 46 | TP 1 to 5 show each purchase working. P2's quote on buying separately ([00:05:12] "devi andare sui singoli siti") is about planning in Google Maps, which the touchpoints note marks as not an operator channel. |
| Telling an employer or family | none | The touchpoints note left these moments out as not contacts with the service, although they are well quoted (P2, P4, P5, P6). |
| Replacement-bus timetable | TP 29 | P4 found the bus; the problem was the bus, not the information: [00:04:49] "c'erano orari improponibili". F12 covers the information part. |
| Safety at the station at night | TP 31 | The row is marked (?): a place, not a contact. P4's ask (guards, police) is not a capability at this moment. F12 covers the decision to leave earlier. |
| Skipped boat or bus run warning | TP 32 | One participant, and the moment works for her: P1 [00:07:03] "capisco che c'è qualcosa che non va". |
| Timetable adjusted to the usual delay | none | P2 Pt.2 [00:04:55] asks for it, but it is not a touchpoint row and it is a timetable decision, not a service capability. |
| Live map of the train's position | TP 13 | P2 Pt.2.1 [00:14:02] cites Sweden's map: that is a "how". The need under it is F3. |
| Seat or crowding information | TP 47 | P3 asks for bigger trains at busy hours ([00:19:17]), not for information. No capability at this moment answers it. |
| Wait information at Castelfranco | TP 30 | The wait is the timetable; no quote shows an information gap. The hail episode is covered by P3 herself: [00:12:01] "Si tratta di una cosa che non dipende da da Trenitalia". |
| Restart time announced on board | TP 36 | P5 says it already happens ([00:07:51]). Where it does not (TP 37), F11 holds it. |
| A more reliable app for first-time users | TP 20 | One participant, one try, bugs not described: [00:12:12] "aveva dei bug". A quality problem, not a capability. |
| Anything for staff leaving the train during a stop | TP 39 | Staff conduct, not a capability. The information gap in that moment is F11. |

## Count

- **Touchpoints read: 55.** Notes cross-checked: 7 (six interviews and the review note).
- **Features proposed: 17.** Strong: 9 (F1, F4, F5, F6, F9, F11, F14, F15, F16). Weak: 8 (F2, F3, F7, F8, F10, F12, F13, F17), of which 3 rest on reviewers only (F2, F7, F17).
- **Dropped: 15.**

## Signals

This unit is a reading of the tables, not what the sources say.

- **Most strong features are about information on one's own trip, not about tickets.** F1, F4, F5, F11, F14, F15, F16 all answer "what is happening to my train and what can I do", which matches the touchpoints note's finding that the app is used mostly as a ticket wallet.
- **One feature does not live in an app.** F9 answers P6, who uses no app, and the board, the touchpoint five of six participants share. An app-only set would leave it out.
- **The weak features cluster where only reviewers speak** (F2, F7, F17) or where one participant had one bad night (F10, F12, F13). They are the first to check in further interviews, not the first to drop.
