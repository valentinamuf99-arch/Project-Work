---
title: "How-Might-We questions · one per user story, plus a second width for the three best-evidenced stories"
date: 2026-10-26
activity: desk-research
source: "2026-10-23-user-stories-ai.md, read on 2026-10-26; how-might-we-human.md read on 2026-10-26 (empty at that date); interview notes and transcripts not reread"
author: "Eugenia Valentina Muffolini"
channel: web
method: How-Might-We questions translated from user stories, one per story, each marked for width
tags: [train, bus, boat, venezia, vicenza, padova, rovigo, monselice, strike, cancellation, long-delay, missed-connection, noticing, understanding, deciding, alternative, warning, notifying-others, trenitalia]
confidence: medium
grade: secondary
status: needs-review
related: [plan.md, 2026-10-23-user-stories-ai.md, 2026-10-23-features-ai.md, how-might-we-human.md]
---

# How-Might-We questions · one per user story

## Scope and method

Each of the twelve stories in `2026-10-23-user-stories-ai.md` became one question in the form: how might we [capability] for [who] in [circumstance]? The question restates the story. It adds no need the story does not carry.

- **Capability** is taken from the story's value ("so that"), not from its "I want" line, wherever the "I want" line already names a form (a board, an app, a stop-by-stop view). Where the two coincide the capability is kept as written, with the channel dropped.
- **Who and circumstance** are the story's own, shortened. Participants are cited by code.
- **The quote** is one quote from the story's source line, the one closest to the value.
- **Width** answers one question: how many different concepts could answer this? `[narrow]` fewer than three; `[calibrated]` several, all traceable to the story; `[wide]` many, with the story only one of the things it could be about.

The three stories with the strongest evidence received a second question at a different width. Strongest means: the value is stated in the participant's own words, by more than one quote or more than one participant, and no caveat in the features note weakens it. They are F12 (two participants, P4 and P6), F3 (three quotes, the value said outright by P2) and F14 (the wish said verbatim by P1). F11 also states its wish verbatim but carries caveat ⚠C2, so it was not chosen.

## The questions

| question | the story behind it | the quote | its width, one line |
|---|---|---|---|
| HMW let an early commuter know, before leaving home at six, that their first train is already late or cancelled, so they can choose whether to go to the station at all? | F1 · P2, office-day commuter changing at Mestre, whose first train builds delay on its way from Bassano | Pt.2 [00:06:15] "se vedo che mezz'ora di ritardo, magari neanche vado in stazione o cerco un modo alternativo" | [calibrated] Warning, check-before-leaving, threshold or alternative-suggesting concepts all answer it; all trace to the pre-departure moment. |
| HMW let an office commuter know, as soon as it is decided, whether their train is cancelled or only late, when live tracking shows it neither departed nor cancelled? | F3 · P2, at half past nine, watching a train in limbo | Pt.2.1 [00:14:23] "non sai come fare un piano, perché un ritardo di 15 minuti è molto diverso da una cancellazione" | [calibrated] Several ways to surface the state exist, but the question stays on one fact: cancelled or late. |
| HMW help a commuter make a plan in the minutes when the fate of their train is still unclear? | F3 · P2, same moment (second width) | Pt.2.1 [00:14:46] "La cancellazione può significare un ritardo di un'ora se devi aspettare quello dopo." | [wide] Drops "cancelled or late"; any planning-under-uncertainty concept answers it, so it reaches F1 and F9 too. |
| HMW make sure an evening student learns from the service, days ahead, that a strike hits their route and which of their trains still run? | F4 · P4, rides home from Padova, heard of a long strike only from the conductor the day before | [00:12:01] "il mio treno era garantito. Okay. Quindi ho preso il treno 1º." | [calibrated] Channel left open (the story says "in the app"); notice timing and guaranteed-train content keep it traceable. |
| HMW make official disruption notices worth reading for a commuter who cares only about their own route, when all they see is a network-wide banner? | F5 · P2, opens the app to a small banner of faults across the network | Pt.2.1 [00:11:46] "non è una roba fatta apposta per me, è semplicemente il meglio che al momento c'è" | [calibrated] "Worth reading" opens relevance, tone and placement; the route keeps it anchored. The story's "filtered" is left out as a form. Thin "so that": see below. |
| HMW help a student in the last minutes before departure still pay for this train without going to the counter? | F6 · P5, drives to Rovigo, buying a single ticket for Padova as the train is about to leave | [00:04:39] "non te lo fanno fare, devi andare proprio allo sportello con la persona." | [calibrated] Warning before trying, another payment path, a later cut-off: several concepts, one moment. |
| HMW let a pass holder know, before going to the station, when their own train will reach their stop, when the operator's app does not say whether it runs? | F8 · P3, Bassano to Padova on a monthly pass | [00:14:51] "dice arrivato a Vicenza alle 13.08, ripartito alle 13.12, quindi sai quando arriverà quella successiva" | [narrow] The value restates the capability: an arrival time at one stop. Few concepts beyond tracking or an estimate. Thin "so that": see below. |
| HMW help a student at the station, finding their usual train late, judge whether the delay will pass or grow, while there is still time to find another way? | F9 · P6, Monselice, uses no app, at Padova after a six o'clock lesson | [00:11:04] "Capire se è anche una cosa magari temporanea o che si può eventualmente prolungare" | [calibrated] The story's "on the board" is dropped as a form; the reason, a forecast or a trend all answer it, and P6's no-app habit stays a constraint. |
| HMW tell a passenger on a train stopped near Padova late in the evening why it is stopped and for how long, so they can work out what to do instead of panicking? | F11 · P1, boat, train and bus from the Lido, on the train home that stops, moves, stops again | [00:16:19] "fammi capire qual è il problema, qual è la tempistica" | [calibrated] Announcement, message, staff or on-screen concepts all answer it. Caveat ⚠C2: P5 says on-board announcements do give a restart time. |
| HMW let a student sitting on a train that has not left tell early that no public option will get them home tonight, so their parents can set off in time? | F12 · P4, an hour on a train at Padova, wondering whether to call home | [00:09:35] "avrei potuto far partire I miei genitori molto 1º senza stare appunto con la preoccupazione" | [calibrated] One fact (no way home tonight), told early; many concepts can deliver it, all trace to P4. |
| HMW keep an evening commuter whose trip home has fallen apart from being left alone and worried at the station? | F12 · P4, supported by P6 (second width) | P6 [00:08:12] "un 1 senso di disagio, come dire, di far spostare anche magari I miei genitori" | [wide] Opens to safety, company, family, transport alternatives; P1's fear of Mestre fits too. Still traceable through P4 and P6. |
| HMW help a commuter just put off a cancelled train at night find a train that still gets them home, before they give up and head for the bus? | F14 · P1, put off at Mestre in the evening, heading for the bus | [00:17:41] "Io avrei voluto sapere quali altri treni ci sono che avrei potuto prendere e prendere Venezia." | [calibrated] Any alternatives concept answers it; "home" and "before the bus" keep it on P1's moment. |
| HMW let a passenger just put off at Mestre know which trains already standing in the station will take them to Venezia? | F14 · P1, same moment (second width) | [00:11:03] "Vado vado verso l'autobus perché non vedevo boh" | [narrow] One station, one destination, trains already there: one or two concepts at most. |
| HMW let a pass holder about to board a strike-day replacement bus know whether their pass covers it, before they pay for a ticket? | F15 · P3, asking the conductors at the replacement bus | [00:12:45] "l'autobus non consentiva l'utilizzo dell'abbonamento, quindi ho dovuto fare un biglietto in più" | [narrow] A yes or no about one ticket on one bus; few concepts. Thin "so that": see below. |
| HMW let a student on a late train know, before the change, whether the next leg will still be there to take them home? | F16 · P3, late train back from Vicenza, about to miss the change at Cittadella for Bassano | [00:18:15] "il treno era molto in ritardo e l'avremmo perso sicuramente, quindi non sarei potuta tornare a Bassano" | [calibrated] Telling, holding or rerouting all answer it. Caveat ⚠C4: the held connection depended on one conductor. |

Count: 15 questions. 12 stories with one question each, 3 with a second. Widths: 10 calibrated, 3 narrow, 2 wide.

## Stories that could not be questioned

None was left without a question: every story has one. Three were questioned on a thin "so that" and are marked here, not strengthened.

- **F5.** The value ("rely on an official notice instead of news channels") rests partly on an observation in the note, not on a stated outcome. The question builds on what P2 said is wrong with the notice, not on what P2 wants from one.
- **F8.** The value ("so that I know when it will reach my stop") restates the capability. There is no outcome behind it, such as a decision P3 would make with the time. The question comes out narrow for that reason.
- **F15.** The value comes from an observation: the extra ticket P3 had to buy. P3 does not say what was wanted instead. The question assumes the outcome is not paying twice.

## Comparison with the human drafts

`how-might-we-human.md` was empty when this note was written (created in commit 721e911 with no content). There is nothing to compare yet. This unit should be filled once the drafts exist: one line per difference.

## Signals

This unit is a reading of the questions, not what the sources say.

- **Four stories carry a form in their "I want" line** (F4 "in the app", F5 "filtered", F8 "stop by stop", F9 "on the board"). The questions drop the form. If a concept later returns to that form, it is a choice, not the evidence.
- **Most questions end in a decision made earlier**, the same pattern the stories note found: go or not (F1), plan (F3), act before it grows (F9), call parents (F12).
