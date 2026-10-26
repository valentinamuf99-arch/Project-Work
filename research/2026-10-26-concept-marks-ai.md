---
title: "Concept marks · 37 merged concepts marked on valuable, feasible and relevant"
date: 2026-10-26
activity: desk-research
source: "2026-10-26-merge-list.md (37 concepts, 8 families) and 2026-10-23-user-stories-ai.md (the 'so that' clauses and quotes), plus brief.md for scope; read on 2026-10-26; interview notes and transcripts not reread"
author: "Eugenia Valentina Muffolini"
channel: web
method: three-axis marking (valuable, feasible, relevant), strong / weak / out, one traced reason per axis
tags: [train, strike, cancellation, long-delay, noticing, understanding, deciding, uncertainty, alternative, warning, information-source, cost-of-lateness, autonomy]
confidence: low
grade: tertiary
status: needs-review
related: [2026-10-26-merge-list.md, 2026-10-23-user-stories-ai.md, 2026-10-26-how-might-we-ai.md, 2026-10-26-possible-solutions-ai.md, possible-solutions-human.md, plan.md]
---

# Concept marks · valuable, feasible, relevant

## Scope and method

Every concept in `2026-10-26-merge-list.md` gets one mark per axis: `[strong]`, `[weak]` or `[out]`, each with a one-line reason. The marks are proposals. Nothing here ranks the families or names a concept to build: that decision stays with the author.

- **Valuable** asks whether the concept serves the "so that" of the user story behind its question. Reasons cite the story (F1, F3, F4, F8, F9, F12 in `2026-10-23-user-stories-ai.md`) and a quote with its timestamp. A concept with no quote behind it is `[weak]`, never `[strong]`. `[risky]` marks come from `2026-10-26-possible-solutions-ai.md`.
- **Feasible** asks whether one flow can be prototyped in this course by one designer and an agent. Anything that needs hardware, a timetable or live feed, an organisation to change, or a crowd of other users to exist is `[weak]`. `[out]` means there is no flow to prototype at all.
- **Relevant** asks whether the concept sits in the moment the brief scopes. No note in the repository names a single chosen moment yet, so relevance is marked against `brief.md` "In scope": the day of a disrupted journey, and how the commuter notices, understands and decides in it. Anything in "Out of scope" (ticketing, prices, improving the service) is `[out]`. If one moment is chosen later, this axis must be redone.
- **No averaging.** One `[out]` on any axis puts the whole concept out, whatever the other two say.

Questions, as in the merge list: #1 early commuter before six (story F1, P2), #3 plan in the unclear minutes (story F3, P2), #4 evening student and the strike (story F4, P4).

## The marks

| concept | valuable | feasible | relevant | the one-line reasons |
|---|---|---|---|---|
| 1 · Verdict before the door *(Give the fact)* | [strong] | [weak] | [strong] | **V** F1 "so that I can decide not to go to the station at all"; P2 checks before leaving [00:06:15]. The verdict replaces his own 30-minute threshold.<br>**F** needs live train state (a real-time feed).<br>**R** Noticing, on the day, before leaving home. |
| 6 · Silence means go *(Give the fact)* | [strong] | [weak] | [strong] | **V** F1 "I want to be told that my own train is late or cancelled"; the human list reached it independently.<br>**F** needs live train state (a real-time feed) and a push service.<br>**R** Noticing, on the day, before leaving home. |
| 13 · My trains, strike day *(Give the fact)* | [strong] | [weak] | [weak] | **V** F4 "which of my trains are guaranteed"; P4 [00:12:01] "il mio treno era garantito. Okay. Quindi ho preso il treno 1º."<br>**F** Needs the per-train guaranteed list for the strike day (timetable data).<br>**R** Acts days ahead, before the brief's in-scope day of disruption. |
| 17 · Strike in my week *(Give the fact)* | [weak] | [strong] | [weak] | **V** Covers F4 "told days ahead" but not "which of my trains are guaranteed", which the "so that" rests on [00:12:01].<br>**F** Strike announcements are a published list; the student's own trains can be typed in. One flow.<br>**R** Acts days ahead, before the brief's in-scope day of disruption. |
| 37 · Real-time train view *(Give the fact)* | [strong] | [weak] | [strong] | **V** F8 "so that I know when it will reach my stop" (P3 [00:14:51]); P2 decides by what he sees: "se vedo che mezz'ora di ritardo" [00:06:15].<br>**F** needs live train state (a real-time feed).<br>**R** Noticing and understanding, on the day. |
| 9 · Fixed hour of truth *(Make not-knowing workable)* | [strong] | [weak] | [strong] | **V** F1 "before leaving home"; a fixed time matches P2's own check "1º di andare in stazione" [00:06:15].<br>**F** Needs the operator to commit to the hour (an organisation to change).<br>**R** Noticing, on the day, before leaving home. |
| 22 · Sure, likely, unknown *(Make not-knowing workable)* | [strong] | [weak] | [weak] | **V** F4 "which of my trains are guaranteed"; P4 names the uncertain window: "lasso di tempo dove non è garantito" [00:12:23].<br>**F** Needs the guaranteed list plus a likelihood source (timetable data).<br>**R** Acts days ahead, before the brief's in-scope day of disruption. |
| 25 · Deadline for the verdict *(Make not-knowing workable)* | [strong] | [weak] | [strong] | **V** F3 "told, as soon as it is known, whether my train is cancelled or only late"; the limbo at [00:12:55].<br>**F** Needs the operator to commit to a deadline (an organisation to change).<br>**R** Understanding, in the unclear minutes. |
| 27 · Odds, not status *(Make not-knowing workable)* | [strong] | [weak] | [strong] | **V** F9 "so that I can judge whether it is temporary or likely to grow" (P6 [00:11:04]). The agent file marked it [risky] against the HMW quotes.<br>**F** Needs historic delay data and a live feed to compute odds.<br>**R** Understanding, on the day. |
| 29 · Price of waiting *(Make not-knowing workable)* | [strong] | [weak] | [strong] | **V** F3 "so that I can make a plan"; P2 prices it himself: "La cancellazione può significare un ritardo di un'ora" [00:14:46].<br>**F** Needs the next train's time (a timetable feed).<br>**R** Understanding and deciding, in the unclear minutes. |
| 2 · Upstream witness *(Others pass the word)* | [weak] | [weak] | [strong] | **V** Serves F1, and P2's train builds delay from Bassano [00:06:15], but no quote says he would trust riders; agent marked [risky].<br>**F** Needs riders upstream reporting before six (a crowd to exist).<br>**R** Noticing, on the day, before leaving home. |
| 7 · Morning circle *(Others pass the word)* | [weak] | [weak] | [strong] | **V** No quote on regulars warning each other; agent marked [risky].<br>**F** Needs a group of regulars on the same train (a crowd to exist).<br>**R** Noticing, on the day, before leaving home. |
| 14 · Earlier conductor *(Others pass the word)* | [strong] | [weak] | [weak] | **V** The conductor's word already got P4 onto the guaranteed train: [00:11:38], [00:12:01]. F4 asks for the app, but the "so that" was met.<br>**F** Needs on-board staff to change practice (an organisation to change).<br>**R** Acts days ahead, before the brief's in-scope day of disruption. |
| 20 · Classmates as relay *(Others pass the word)* | [weak] | [strong] | [weak] | **V** No quote on the course group; P4 heard it with others from the conductor ("abbiamo sentito", [00:11:38]).<br>**F** Forwards a public strike notice into a group the student already has. One flow.<br>**R** Acts days ahead, before the brief's in-scope day of disruption. |
| 21 · University as messenger *(Others pass the word)* | [weak] | [weak] | [weak] | **V** No quote on the university as a source.<br>**F** Needs the university to adopt it (an organisation to change).<br>**R** Acts days ahead, before the brief's in-scope day of disruption. |
| 15 · Strike-night ride swap *(Others help you out)* | [weak] | [weak] | [strong] | **V** F4's "so that" is a guaranteed train, not a shared ride; agent marked [risky].<br>**F** Needs matching students on the same route (a crowd to exist).<br>**R** Deciding and the alternative, on the strike evening itself. |
| 28 · Someone plans with you *(Others help you out)* | [weak] | [weak] | [strong] | **V** Partial trace: P2 "chiedo a qualcuno" [00:06:15], in the F1 moment, not F3.<br>**F** Needs staff (an organisation to change) or a fellow regular on call.<br>**R** Deciding, in the unclear minutes. |
| 33 · Platform pool *(Others help you out)* | [weak] | [weak] | [strong] | **V** No quote on deciding with others on the platform.<br>**F** Needs people waiting for the same train to join (a crowd to exist).<br>**R** Deciding and the alternative, on the day. |
| 8 · Second train agreed *(Decided before it fails)* | [weak] | [strong] | [strong] | **V** Serves F1 "look for another way" ("cerco un modo alternativo", [00:06:15]), but no quote shows P2 planning ahead.<br>**F** The commuter writes the plan; the check only triggers it. No feed, one flow.<br>**R** Deciding; the plan is used on the day. |
| 19 · Strike evening pre-planned *(Decided before it fails)* | [weak] | [weak] | [weak] | **V** Goes past F4's "so that": once she knew her train was guaranteed she managed alone [00:12:01].<br>**F** Needs timetable data to build a whole way home.<br>**R** Acts days ahead, before the brief's in-scope day of disruption. |
| 26 · Both plans in hand *(Decided before it fails)* | [strong] | [weak] | [strong] | **V** F3 "a fifteen-minute delay and a cancellation ... call for different ones" ([00:14:23], [00:14:46]).<br>**F** Needs the next trains to build both plans (a timetable feed).<br>**R** Deciding, in the unclear minutes. |
| 30 · Plan made the night before *(Decided before it fails)* | [weak] | [strong] | [strong] | **V** Serves F3 "so that I can make a plan", but no quote shows planning the night before.<br>**F** The commuter writes the plan; no feed, one flow.<br>**R** Deciding; the plan is used on the day. |
| 4 · Seat already held *(The service decides)* | [weak] | [weak] | [strong] | **V** F1 "so that I can decide"; the service takes the decision from him. Agent marked [risky].<br>**F** needs live train state (a real-time feed), plus operator booking.<br>**R** Deciding and the alternative, on the day. |
| 5 · Morning set by the train *(The service decides)* | [weak] | [weak] | [strong] | **V** No quote on a wake-up set by the train; agent marked [risky].<br>**F** needs live train state (a real-time feed).<br>**R** Noticing, on the day, before leaving home. |
| 18 · Your train, named *(The service decides)* | [strong] | [weak] | [strong] | **V** F4 "so that I can take a train that is guaranteed" [00:12:01].<br>**F** Needs the guaranteed list per train (timetable data).<br>**R** Deciding which train, on the strike evening. |
| 31 · The service picks *(The service decides)* | [weak] | [weak] | [strong] | **V** F3 "so that I can make a plan": P2 makes it; the service picking removes it.<br>**F** needs live train state (a real-time feed) and timetable data to choose.<br>**R** Deciding, in the unclear minutes. |
| 34 · Arrival promised *(The service decides)* | [weak] | [weak] | [weak] | **V** No quote on a promised arrival; F3 is about which plan, not a guarantee.<br>**F** Needs the operator to guarantee arrivals (an organisation to change).<br>**R** A service guarantee leans into improving the service, which the brief leaves out. |
| 3 · The six o'clock pact *(Failure costs less)* | [weak] | [weak] | [weak] | **V** No quote on working from home; F1 "so that" is "look for another way". Agent marked [risky].<br>**F** Needs the workplace to agree (an organisation to change).<br>**R** Sets the stakes on an ordinary day; not noticing, understanding or deciding. |
| 11 · Proof of a failed morning *(Failure costs less)* | [weak] | [weak] | [weak] | **V** No quote on needing proof at work; agent marked [risky].<br>**F** Needs an operator-certified record (an organisation to change).<br>**R** Comes after the moment: consequences at work. |
| 12 · Paid to stay home *(Failure costs less)* | [weak] | [weak] | [out] | **V** No quote on money for a skipped trip; agent marked [risky].<br>**F** Needs the operator to refund (an organisation to change).<br>**R** Refunds are ticketing, out of scope in the brief. |
| 16 · Lesson follows the train *(Failure costs less)* | [weak] | [weak] | [weak] | **V** No quote on moving lessons; agent marked [risky].<br>**F** Needs the school to change its timetable (an organisation to change).<br>**R** Changes the lesson, not how the student notices, understands or decides. |
| 24 · Night covered *(Failure costs less)* | [weak] | [weak] | [out] | **V** No quote on a paid ride; F12 shows parents driving instead ([00:09:35]).<br>**F** Needs the operator to pay (an organisation to change).<br>**R** Paying for a ride is prices and compensation, out of scope in the brief. |
| 35 · Lateness forgiven *(Failure costs less)* | [weak] | [weak] | [weak] | **V** No quote in F3 on consequences at work.<br>**F** Needs the workplace or school to agree (an organisation to change).<br>**R** Comes after the moment: consequences at work or school. |
| 36 · Doubt paid back *(Failure costs less)* | [weak] | [weak] | [out] | **V** No quote on compensation for waiting.<br>**F** Needs the operator to pay (an organisation to change).<br>**R** Compensation is prices, out of scope in the brief. |
| 10 · First train protected *(The service fails less)* | [weak] | [out] | [out] | **V** Would help P2 ([00:06:15] "fa in tempo ad accumulare un tot di ritardo"), but it removes the moment the "so that" is about.<br>**F** An operations change: there is no flow to prototype.<br>**R** "Improving the service itself (punctuality, frequency)" is out of scope in the brief. |
| 23 · An evening run kept *(The service fails less)* | [strong] | [out] | [out] | **V** F4 "so that I can take a train that is guaranteed and stay clear of the window" ([00:12:01], [00:12:23]).<br>**F** A timetable change: there is no flow to prototype.<br>**R** "Improving the service itself (frequency)" is out of scope in the brief. |
| 32 · No limbo *(The service fails less)* | [strong] | [out] | [out] | **V** Removes the limbo of F3 directly: "non lo vedo partito, ma non lo vedo neanche cancellato" [00:12:55].<br>**F** An operations change: there is no flow to prototype.<br>**R** "Improving the service itself" is out of scope in the brief. |

## Out by one axis

These six concepts carry at least one `[out]`, so they are out whatever their other marks.

- **12 · Paid to stay home**, **24 · Night covered**, **36 · Doubt paid back**: out on relevant (ticketing, prices, compensation).
- **10 · First train protected**: out on feasible and relevant.
- **23 · An evening run kept** and **32 · No limbo**: out on feasible and relevant, although both are `[strong]` on valuable. These two are where the evidence and the brief part ways most clearly.

## Where the axes disagree

The concepts below are `[strong]` on at least one axis and `[weak]` on another, with no `[out]`. This is the decision list. They are grouped by the shape of the disagreement, in merge-list order inside each group; the grouping is not a ranking.

**Valuable and relevant strong, feasible weak** (the evidence and the brief agree; the build needs a feed or an organisation):
1 · Verdict before the door, 6 · Silence means go, 37 · Real-time train view, 9 · Fixed hour of truth, 25 · Deadline for the verdict, 27 · Odds, not status, 29 · Price of waiting, 26 · Both plans in hand, 18 · Your train, named.

**Feasible and relevant strong, valuable weak** (buildable and in scope; no quote shows the person wants it):
8 · Second train agreed, 30 · Plan made the night before.

**Valuable strong, feasible and relevant weak** (the strike story's "so that" is served, days ahead of the in-scope day):
13 · My trains, strike day, 22 · Sure, likely, unknown, 14 · Earlier conductor.

**Feasible strong, valuable and relevant weak**:
17 · Strike in my week, 20 · Classmates as relay.

**Relevant strong, valuable and feasible weak** (in the moment, but untraced and hard to build):
2 · Upstream witness, 7 · Morning circle, 15 · Strike-night ride swap, 28 · Someone plans with you, 33 · Platform pool, 4 · Seat already held, 5 · Morning set by the train, 31 · The service picks.

Not on the list, `[weak]` on all three axes: 3, 11, 16, 19, 21, 34, 35. No concept is `[strong]` on all three axes.

## Count

| axis | strong | weak | out |
|---|---|---|---|
| valuable | 14 | 23 | 0 |
| feasible | 4 | 30 | 3 |
| relevant | 19 | 12 | 6 |

- Concepts marked: 37.
- Out by at least one axis: 6.
- Axes disagree (strong and weak, no out): 24.
- Weak on all three: 7.
- Strong on all three: 0.

## Signals

This unit is a reading of the marks, not of the sources.

- **Feasible is the narrow axis.** Only 4 of 37 are `[strong]` (8, 17, 20, 30), and all four avoid live train data by letting the commuter type the plan or by forwarding a published notice. Every concept that tells the commuter the train's real state needs a feed.
- **Valuable and feasible barely meet.** No concept is `[strong]` on both. The concepts the quotes support most need data or an organisation; the ones a single designer can build have no quote behind them.
- **The strike question pays for its timing.** Every #4 concept that acts days ahead is `[weak]` on relevant, because the brief scopes the day of the disruption. If the chosen moment is #4, the relevant marks for 13, 14, 17, 19, 20, 21 and 22 change.
- **Autonomy shows up in valuable.** Concepts where the service decides for the commuter (4, 31) score `[weak]` because P2's "so that" in F1 and F3 is that he decides or makes the plan himself.
- **Feasible `[weak]` is not the same as impossible.** A prototype can fake the feed with sample data; the mark only says the real thing needs data or partners the prototype does not have.
