---
title: "Prioritisation · 60 clustered concepts marked on valuable, feasible and relevant, before boarding"
date: 2026-10-26
activity: desk-research
source: "Read on 2026-11-02 as input: Ideation/2026-10-26-03-clusters-ai.md (60 concepts, 13 families), Synthesis/2026-10-23-03-user-stories-ai.md (F1, F3, F4, F8, F9: the 'so that' clauses and quotes), Ideation/2026-10-26-01.1-how-might-we-ai.md (questions #1, #2, #4, #7, #8), Ideation/2026-10-26-02.1-ideation-ai.md (only the [risky] marks and their assumptions), brief.md (scope). The previous version of this file was replaced. Interview notes and transcripts not read: every quote is taken from the user stories note."
author: "Eugenia Valentina Muffolini"
channel: web
method: three-axis marking (valuable, feasible, relevant), strong / weak / out, one traced reason per axis
tags: [train, padova, venezia, monselice, work-commute, university-commute, strike, cancellation, long-delay, noticing, understanding, deciding, uncertainty, alternative, warning, information-source]
confidence: low
grade: tertiary
status: needs-review
related: [plan.md, 2026-10-26-03-clusters-ai.md, 2026-10-23-03-user-stories-ai.md, 2026-10-26-01.1-how-might-we-ai.md, 2026-10-26-02.1-ideation-ai.md]
---

# Prioritisation · 60 concepts marked, before boarding

## Scope and method

Every concept in `2026-10-26-03-clusters-ai.md` gets one mark per axis: `[strong]`, `[weak]` or `[out]`, each with a one-line reason. The marks are proposals. Nothing here ranks the families or names a concept to build: that decision stays with the author.

The chosen moment is before boarding: from days ahead up to the platform, when the commuter needs to know whether their train is late, cancelled or hit by a strike, and decide what to do.

- **Valuable** asks whether the concept serves the "so that" of the story behind its question: F1 for #1, F3 for #2, F4 for #4, F8 for #7, F9 for #8. A `[strong]` reason cites the story and a quote with its timestamp. A concept with no quote behind it is `[weak]`. A concept marked `[risky]` in the ideation note stays `[weak]` unless a quote answers its assumption; none of the fourteen does.
- **Feasible** asks whether one flow of 4 to 5 screens can show it, in Figma or a clickable HTML prototype, with simulated data, built by the author and an agent. A live feed is not a blocker. `[weak]` means it needs hardware, an organisation to change (operator, station staff, the board), a crowd of other users, or more than one flow. `[out]` means no flow to prototype at all. Concepts that work without an app are not marked down for that alone; the reason says what would be prototyped instead.
- **Relevant** asks whether the concept works in the chosen moment. `[out]` for anything that only works on board or after getting off, and for ticketing, prices or subscriptions. `[weak]` where the concept sits in the moment but leans on something the brief leaves out ("improving the service itself").
- **No averaging.** One `[out]` on any axis puts the whole concept out.
- **Rows 4 and 7 answer two questions** (#1 and #7). Their valuable mark takes the stronger of the two stories, and the reason names both.

Quotes are cited as in the user stories note: P2's with the part of the interview (Pt.2, Pt.2.1), the others with the timestamp only.

## The marks

In the reasons column: **V** valuable, **F** feasible, **R** relevant.

### F1 · Told unasked

| concept | question | valuable | feasible | relevant | the one-line reasons |
|---|---|---|---|---|---|
| 1 · Own-train warning | #1 | [strong] | [strong] | [strong] | **V** F1 "so that I can decide not to go to the station at all"; P2 Pt.2 [00:06:15] "se vedo che mezz'ora di ritardo, magari neanche vado in stazione".<br>**F** A push and a status screen on simulated data; one flow.<br>**R** At home, before leaving for the station. |
| 13 · Wake-up check | #1 | [strong] | [strong] | [strong] | **V** F1; P2 already checks at a set point, Pt.2 [00:06:15] "1º di andare in stazione controllo se il treno [ha] un ritardo".<br>**F** Pick a time, receive one line; one flow.<br>**R** At home, before leaving. |
| 14 · Decision push | #2 | [strong] | [strong] | [strong] | **V** F3 "told, as soon as it is known, whether my train is cancelled or only late"; Pt.2.1 [00:14:23] "un ritardo di 15 minuti è molto diverso da una cancellazione".<br>**F** Limbo screen, then the push with the decided state; one flow.<br>**R** Before boarding, while the train has not left. |
| 24 · The platform says it too | #2 | [weak] | [weak] | [strong] | **V** F3's state is wanted, but P2 watches it "nel tracking live" (Pt.2.1 [00:12:55]); no quote puts him at the platform board.<br>**F** Needs the station board to change; prototype a mocked board sequence instead.<br>**R** On the platform, before boarding. |
| 26 · Strike notice for my trip | #4 | [weak] | [strong] | [strong] | **V** Fills F4's gap ("Dall'app no, ma dal sito sì", [00:13:14]) but says the strike hits the route, not which trains run, which the "so that" rests on ([00:12:01]).<br>**F** One notice and its detail screen; one flow.<br>**R** Days ahead. |
| 27 · Told when buying | #4 | [weak] | [strong] | [out] | **V** No quote shows P4 buying a ticket for the strike day.<br>**F** A purchase flow with a strike banner; one flow.<br>**R** Lives inside ticket purchase; ticketing is out of the brief's scope. |
| 34 · Station and on-board posters | #4 | [weak] | [weak] | [strong] | **V** No quote shows P4 reading station notices; she heard it from the conductor ([00:11:38]).<br>**F** Needs the station to post it; prototype a poster mock, which is one artefact rather than a flow.<br>**R** At the station, days ahead; the on-board part is read on an earlier trip. |
| 38 · Strike email with train table | #4 | [strong] | [strong] | [strong] | **V** F4 "which of my trains are guaranteed"; P4 [00:12:01] "il mio treno era garantito. Okay. Quindi ho preso il treno 1º."<br>**F** An inbox, the email, the table; works without the app; one flow.<br>**R** Days ahead. |
| 43 · Told only when it moves | #7 | [weak] | [strong] | [strong] | **V** Serves F8's "when it will reach my stop", but no quote shows P3 wanting to be told; she reads the passage times herself ([00:14:51]).<br>**F** A quiet day, then a change alert; one flow.<br>**R** Before going to the station. |
| 60 · A text about my usual train `[risky]` | #8 | [weak] | [strong] | [strong] | **V** Risky: assumes P6 would give a phone number; F9 has no quote on it.<br>**F** No app needed: prototype the SMS opt-in and two texts on a phone mock; one flow.<br>**R** Before and at the station. |

### F2 · Open to look up

| concept | question | valuable | feasible | relevant | the one-line reasons |
|---|---|---|---|---|---|
| 5 · Real-time train view | #1 | [strong] | [strong] | [strong] | **V** F1; P2 Pt.2 [00:06:15] "Il mio parte da Bassano, fa in tempo ad accumulare un tot di ritardo": seeing it on its way is his check.<br>**F** A map or line view on simulated positions; one flow.<br>**R** At home, before leaving. |
| 15 · Status in plain words | #2 | [weak] | [strong] | [strong] | **V** Names the limbo P2 describes (Pt.2.1 [00:12:55]) but still does not say late or cancelled, which the plan needs ([00:14:23]).<br>**F** One status label in the tracking view.<br>**R** Before boarding. |
| 28 · Guaranteed trains list | #4 | [strong] | [strong] | [strong] | **V** F4 "so that I can take a train that is guaranteed"; P4 [00:12:01] "il mio treno era garantito".<br>**F** Strike screen with each usual train marked; one flow.<br>**R** Days ahead. |
| 29 · Strikes section | #4 | [weak] | [strong] | [strong] | **V** P4 already found strikes on the site ([00:13:14]); the gap was being told about her trains, which a list to look up does not do.<br>**F** A list and a detail; one flow.<br>**R** Days ahead. |
| 39 · Train number lookup | #7 | [strong] | [strong] | [strong] | **V** F8; P3 [00:14:51] "dice arrivato a Vicenza alle 13.08, ripartito alle 13.12, quindi sai quando arriverà quella successiva".<br>**F** Search a number, see the stops; one flow.<br>**R** Before going to the station. |
| 40 · Message lookup | #7 | [strong] | [strong] | [strong] | **V** F8: returns the time at P3's stop, the thing [00:14:51] reads off the passage times.<br>**F** No app needed: prototype a chat or SMS thread; one flow.<br>**R** Before going to the station. |
| 47 · My station's board, from home | #7 | [strong] | [strong] | [strong] | **V** F8: the board of her stop gives the arrival time she works out at [00:14:51].<br>**F** A simulated board screen; one flow.<br>**R** At home, before leaving. |
| 51 · Where the train is now `[no app]` | #8 | [weak] | [weak] | [strong] | **V** Could help P6 judge growth ([00:11:04]) but no quote asks for the train's position.<br>**F** Needs the station board to change; prototype a mocked board sequence.<br>**R** At the station, before boarding. |

### F3 · How it will end

| concept | question | valuable | feasible | relevant | the one-line reasons |
|---|---|---|---|---|---|
| 6 · Delay and cancellation odds `[risky]` | #1 | [weak] | [strong] | [strong] | **V** Risky: assumes a forecast before six; F1 only says the delay builds on the way (Pt.2 [00:06:15]).<br>**F** A percentage on simulated data; one flow.<br>**R** At home, before leaving. |
| 16 · Likelihood label `[risky]` | #2 | [weak] | [strong] | [strong] | **V** Risky: assumes past days predict this one; F3 records one moment (Pt.2.1 [00:12:55]).<br>**F** A label in the limbo view; one flow.<br>**R** Before boarding. |
| 45 · A time with its certainty | #7 | [weak] | [strong] | [strong] | **V** No quote on how sure the time is; P3 reads passage times as given ([00:14:51]).<br>**F** A time plus a confidence marker; one flow.<br>**R** Before going to the station. |
| 50 · Trend arrow `[no app]` | #8 | [strong] | [weak] | [strong] | **V** F9 "judge whether it is temporary or likely to grow"; P6 [00:11:04] "temporanea o che si può eventualmente prolungare".<br>**F** Needs the station board to change; prototype a board mock across three refreshes.<br>**R** At the station, before boarding. |
| 52 · What usually happens next `[risky]` `[no app]` | #8 | [weak] | [weak] | [strong] | **V** Risky: assumes past evenings predict this one; F9 records one evening.<br>**F** Needs the board or announcements to change; prototype a board mock.<br>**R** At the station, before boarding. |
| 53 · Announcement with outlook `[no app]` | #8 | [strong] | [weak] | [strong] | **V** F9; P6 [00:11:17] "se magari appunto il ritardo si sarebbe prolungato, mi sarei attivata in anticipo".<br>**F** Needs station announcements to change; prototype the announcement script with a station scene.<br>**R** At the station, before boarding. |
| 55 · A delay with a range `[risky]` `[no app]` | #8 | [weak] | [weak] | [strong] | **V** Risky: assumes a growing delay can be bounded; F9 is about not knowing ([00:11:04]).<br>**F** Needs the board to change; prototype a board mock.<br>**R** At the station, before boarding. |

### F4 · A time on the unknown

| concept | question | valuable | feasible | relevant | the one-line reasons |
|---|---|---|---|---|---|
| 9 · When it will be known | #1 | [weak] | [weak] | [strong] | **V** F1's moment is a delay already visible (Pt.2 [00:06:15]); no quote has P2 facing an open state at six.<br>**F** Needs the operator to commit to the time; the screen itself is simple.<br>**R** At home, before leaving. |
| 17 · Decision deadline | #2 | [weak] | [weak] | [strong] | **V** Eases "non sai come fare un piano" (Pt.2.1 [00:14:23]) but still does not say late or cancelled.<br>**F** Needs the operator to commit to a deadline.<br>**R** Before boarding. |
| 36 · Guaranteed, confirmed | #4 | [weak] | [weak] | [strong] | **V** No quote doubts that a guaranteed train runs; P4 took hers ([00:12:01]).<br>**F** Needs the operator to confirm the day before.<br>**R** The day before the strike. |
| 44 · When it will be known | #7 | [weak] | [weak] | [strong] | **V** Meets P3's gap ([00:13:55] "Non sempre [...] dice se il treno c'è o meno") with a time to wait for, not the time at her stop.<br>**F** Needs the operator to commit to the time.<br>**R** Before going to the station. |
| 54 · Next news at a set time `[no app]` | #8 | [weak] | [weak] | [strong] | **V** No quote asks when the next update comes.<br>**F** Needs the board or announcements to change; prototype a board mock.<br>**R** At the station, before boarding. |

### F5 · The cause

| concept | question | valuable | feasible | relevant | the one-line reasons |
|---|---|---|---|---|---|
| 8 · Why it is late | #1 | [weak] | [strong] | [strong] | **V** No quote has P2 asking for the cause; his rule is the minutes (Pt.2 [00:06:15]).<br>**F** A cause line in the warning; one flow.<br>**R** At home, before leaving. |
| 19 · Why it has not left | #2 | [weak] | [strong] | [strong] | **V** No quote in F3 asks for the cause; P2 asks late or cancelled (Pt.2.1 [00:14:23]).<br>**F** A cause line in the limbo view; one flow.<br>**R** Before boarding. |
| 49 · Reason on the board `[no app]` | #8 | [strong] | [weak] | [strong] | **V** F9 asks for exactly this; P6 [00:11:04] "Capire se è anche una cosa magari temporanea".<br>**F** Needs the station board to change; prototype a board mock with the cause line.<br>**R** At the station, before boarding. |

### F6 · Restated as my trip

| concept | question | valuable | feasible | relevant | the one-line reasons |
|---|---|---|---|---|---|
| 4 · Leave-home reminder | #1, #7 | [strong] | [strong] | [strong] | **V** F8: a leave time restates the arrival at P3's stop ([00:14:51]). For F1 it says when to leave, not whether to go (Pt.2 [00:06:15]).<br>**F** Set the usual train, receive a leave-at time; one flow.<br>**R** At home, before leaving. |
| 10 · Arrival, not minutes | #1 | [weak] | [strong] | [strong] | **V** No quote asks for arrival time; P2 reasons in minutes of delay (Pt.2 [00:06:15] "mezz'ora di ritardo").<br>**F** One screen with the change at Mestre; one flow.<br>**R** At home, before leaving. |
| 20 · Two plans side by side | #2 | [strong] | [strong] | [strong] | **V** F3 "call for different ones"; Pt.2.1 [00:14:23] and [00:14:46] "La cancellazione può significare un ritardo di un'ora".<br>**F** Two cards on simulated timetables; one flow.<br>**R** Before boarding. |
| 21 · How long I can still wait | #2 | [strong] | [strong] | [strong] | **V** F3 "so that I can make a plan"; Pt.2.1 [00:14:46] prices the wait: "se devi aspettare quello dopo".<br>**F** A countdown on the limbo view; one flow.<br>**R** Before boarding. |
| 32 · The window against my evening | #4 | [strong] | [strong] | [strong] | **V** F4 "stay clear of the window"; P4 [00:12:23] "quella specie di lasso di tempo dove non è garantito".<br>**F** A timeline of the strike window against her train; one flow.<br>**R** Days ahead. |
| 56 · The last moment for another way `[no app]` | #8 | [strong] | [weak] | [strong] | **V** F9 "turn to another solution in time"; P6 [00:11:17] "mi sarei attivata in anticipo con eventuali altre soluzioni".<br>**F** Needs the station display to change; prototype a board mock with the cut-off line.<br>**R** At the station, before boarding. |

### F7 · Only about my train

| concept | question | valuable | feasible | relevant | the one-line reasons |
|---|---|---|---|---|---|
| 30 · Only my trains | #4 | [strong] | [strong] | [strong] | **V** F4 speaks of her own train; P4 [00:12:01] "il mio treno era garantito".<br>**F** Pick trains once, see a filtered notice; one flow.<br>**R** Days ahead. |
| 41 · Saved usual train | #7 | [strong] | [strong] | [strong] | **V** F8 is about her own train at her own stop ([00:14:51]).<br>**F** Save once, then the answer; one flow.<br>**R** Before going to the station. |
| 42 · Pass-linked trip | #7 | [weak] | [strong] | [weak] | **V** No quote ties P3's pass to the information she wants; the pass only says who she is.<br>**F** A simulated pass record drives the view; one flow.<br>**R** In the moment, but rests on the subscription, which the brief leaves out; strictly read, it could be `[out]`. |

### F8 · Decided in calm

| concept | question | valuable | feasible | relevant | the one-line reasons |
|---|---|---|---|---|---|
| 3 · Delay threshold alert | #1 | [strong] | [strong] | [strong] | **V** F1; P2 states his own threshold, Pt.2 [00:06:15] "se vedo che mezz'ora di ritardo, magari neanche vado in stazione".<br>**F** Set one number, receive one alert; one flow.<br>**R** At home, before leaving. |
| 23 · A plan B agreed in advance | #2 | [weak] | [weak] | [strong] | **V** No quote shows P2 planning on a calm day; he plans in the limbo (Pt.2.1 [00:14:23]).<br>**F** Needs two flows: writing the plan on a calm day and its playback in the limbo.<br>**R** Plan made before, used before boarding. |

### F9 · A way out with the news

| concept | question | valuable | feasible | relevant | the one-line reasons |
|---|---|---|---|---|---|
| 11 · Go / don't go card | #1 | [strong] | [strong] | [strong] | **V** F1 "look for another way"; Pt.2 [00:06:15] "o cerco un modo alternativo".<br>**F** Warning plus one alternative on simulated data; one flow.<br>**R** At home, before leaving. |
| 22 · If it goes, this is next | #2 | [strong] | [strong] | [strong] | **V** F3; Pt.2.1 [00:14:46] "se devi aspettare quello dopo": the next way is what the plan needs.<br>**F** Limbo view with the fallback; one flow.<br>**R** Before boarding. |
| 33 · Plan for the day `[risky]` | #4 | [weak] | [strong] | [strong] | **V** Risky: assumes the service knows when lessons end; F4 only says P4 took the guaranteed train ([00:12:01]).<br>**F** A proposed way home from guaranteed trains; one flow.<br>**R** Days ahead. |
| 57 · Alternative from here `[no app]` | #8 | [strong] | [weak] | [strong] | **V** F9; P6 [00:11:17] "mi sarei attivata in anticipo con eventuali altre soluzioni".<br>**F** Needs the station display to change; prototype a board mock that switches to the alternative.<br>**R** At the station, before boarding. |

### F10 · Inside the routine

| concept | question | valuable | feasible | relevant | the one-line reasons |
|---|---|---|---|---|---|
| 2 · Alarm clock link | #1 | [weak] | [strong] | [strong] | **V** No quote on the alarm; P2 checks the train himself (Pt.2 [00:06:15] "controllo").<br>**F** A simulated alarm screen that moves; one flow, no real OS link needed.<br>**R** At home, before leaving. |
| 31 · Calendar entry `[risky]` | #4 | [weak] | [strong] | [strong] | **V** Risky: assumes the student keeps a calendar the service could reach; F4 does not say so.<br>**F** A calendar mock with the strike day; one flow.<br>**R** Days ahead. |

### F11 · Ask a person

| concept | question | valuable | feasible | relevant | the one-line reasons |
|---|---|---|---|---|---|
| 35 · Ask about my train | #4 | [weak] | [weak] | [strong] | **V** A person helped P4 ([00:11:38]), but she was told, not asking; no quote shows her asking.<br>**F** Needs service staff to answer; prototype a chat script.<br>**R** Days ahead. |
| 46 · A person on the line `[risky]` | #7 | [weak] | [weak] | [strong] | **V** Risky: assumes someone reachable knows more than the passage times; F8 has none.<br>**F** Needs service staff; prototype a chat script.<br>**R** Before going to the station. |
| 58 · Help point at the station `[risky]` `[no app]` | #8 | [weak] | [weak] | [strong] | **V** Risky: assumes P6 would ask; she knew the bus option and did not ask.<br>**F** Needs station staff; prototype a service-blueprint scene rather than screens.<br>**R** At the station, before boarding. |

### F12 · People fill the gap

| concept | question | valuable | feasible | relevant | the one-line reasons |
|---|---|---|---|---|---|
| 7 · Reports from earlier stops `[risky]` | #1, #7 | [weak] | [weak] | [strong] | **V** Risky: assumes riders upstream report; F1 has P2 alone at home and F8 has P3 reading the operator's times ([00:14:51]).<br>**F** Needs a crowd of reporting riders.<br>**R** Before leaving home. |
| 18 · Staff-confirmed status | #2 | [strong] | [weak] | [strong] | **V** F3: delivers the decided state P2 needs; Pt.2.1 [00:14:23] "un ritardo di 15 minuti è molto diverso da una cancellazione".<br>**F** Needs staff to confirm into the system; the commuter side is one screen.<br>**R** Before boarding. |

### F13 · Change the service

| concept | question | valuable | feasible | relevant | the one-line reasons |
|---|---|---|---|---|---|
| 12 · Settled before six `[risky]` | #1 | [weak] | [weak] | [weak] | **V** Risky: assumes the fate is known that early; F1 says the delay builds on the way (Pt.2 [00:06:15]).<br>**F** Needs the operator to change how it decides; on screen it looks like row 1.<br>**R** Changes how the service runs, which the brief leaves out. |
| 25 · A limbo that cannot last `[risky]` | #2 | [weak] | [weak] | [weak] | **V** Risky: assumes the operator could decide sooner; F3 says nothing on why the state stays open.<br>**F** Needs the operator to change a rule.<br>**R** Changes how the service runs, which the brief leaves out. |
| 37 · The list as soon as the strike is called `[risky]` | #4 | [weak] | [weak] | [weak] | **V** Risky: assumes the guaranteed trains are known on announcement day; F4 does not say when P4's was known.<br>**F** Needs the operator to fix the list earlier.<br>**R** Changes how the service decides, which the brief leaves out. |
| 48 · Every running train is shown | #7 | [strong] | [weak] | [strong] | **V** F8; P3 [00:13:55] "Non sempre il... L'app di Trenitalia o il sito dice se il treno c'è o meno."<br>**F** Needs the operator's commitment; on screen it is row 39.<br>**R** Changes what is published, not how trains run; before going to the station. |
| 59 · The delay told whole `[risky]` `[no app]` | #8 | [weak] | [weak] | [strong] | **V** Risky: assumes the full length is known when the delay starts; F9 is about not knowing it ([00:11:04]).<br>**F** Needs the operator to change how it announces; prototype a board mock.<br>**R** Changes what is announced, at the station, before boarding. |

## Where the axes disagree

Concepts with `[strong]` on one axis and `[weak]` on another, and no `[out]`. This is the decision list.

- **Valuable strong, feasible weak:** 18 (Staff-confirmed status), 48 (Every running train is shown), 49 (Reason on the board), 50 (Trend arrow), 53 (Announcement with outlook), 56 (The last moment for another way), 57 (Alternative from here). Every one needs the operator, staff or the board to change; five of seven answer #8.
- **Feasible strong, valuable weak:** 2, 6, 8, 10, 15, 16, 19, 26, 29, 31, 33, 43, 45, 60. Easy to build, but no quote carries them, or a `[risky]` assumption is unanswered (6, 16, 31, 33, 60).
- **Relevant strong, valuable and feasible weak:** 7, 9, 17, 23, 24, 34, 35, 36, 44, 46, 51, 52, 54, 55, 58, 59. In the moment, weak on both other axes.
- **Feasible strong, valuable and relevant weak:** 42 (Pass-linked trip).
- **Out:** 27 (Told when buying), on relevant. It is `[strong]` on feasible, but one broken axis breaks it.

Concepts `[strong]` on all three: 1, 3, 4, 5, 11, 13, 14, 20, 21, 22, 28, 30, 32, 38, 39, 40, 41, 47 (18). Concepts `[weak]` on all three: 12, 25, 37 (3).

## Left per question

Concepts with no `[out]`, per question. Rows 4 and 7 count under #1 and #7.

- **#1:** 13 of 13.
- **#2:** 12 of 12.
- **#4:** 12 of 13 (27 is out).
- **#7:** 12 of 12 (ten rows plus 4 and 7).
- **#8:** 12 of 12.

## Count

| axis | strong | weak | out |
|---|---|---|---|
| valuable | 25 | 35 | 0 |
| feasible | 34 | 26 | 0 |
| relevant | 55 | 4 | 1 |

Total 60 concepts, 180 marks.

## Signals

This unit is a reading of the marks, not what the sources say.

- **Relevant barely sorts.** The clusters note already removed everything outside the moment, so this axis puts out only the ticketing concept and softens three operator-change concepts and one pass-based one. The choice will be made on the other two axes.
- **The #8 tension is the board.** P6's story is the one where valuable is strongest on cause, trend and alternative, and every such concept is weak on feasible because the board or the announcements would have to change. A board mock can still be prototyped; whether that counts as one flow is a call for the author.
- **No `[risky]` concept reaches strong on valuable.** None of the fourteen assumptions is answered by a quote in the stories. They need new evidence, not new screens.
- **#7 strong marks rest on a thin "so that".** F8's value restates its capability (see the How-Might-We note), so its strong marks mean "gives the time at her stop", not "supports a decision".
