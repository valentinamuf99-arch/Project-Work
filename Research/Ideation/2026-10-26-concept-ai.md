---
title: "Concept document · 1 · Verdict before the door, with its reduced feature set and the cut list"
date: 2026-10-26
activity: desk-research
source: "Author's decisions of 2026-10-26 (chosen direction: concept 1; reduced feature set: F1 only), drafted from 2026-10-26-concept-marks-ai.md, 2026-10-26-merge-list.md, 2026-10-23-features-ai.md, 2026-10-23-user-stories-ai.md and 2026-10-23-touchpoints-ai.md; P2 note and P2 transcript checked for the [00:06:15] quote"
author: "Eugenia Valentina Muffolini"
channel: web
method: concept drafting from recorded decisions, every sentence traced to a story, a touchpoint or a quote, untraced ones marked
tags: [train, venezia, work-commute, noticing, deciding, cancellation, long-delay, warning, autonomy]
confidence: low
grade: tertiary
status: draft
related: [2026-10-26-concept-marks-ai.md, 2026-10-26-merge-list.md, 2026-10-26-possible-solutions-ai.md, 2026-10-26-how-might-we-ai.md, 2026-10-23-features-ai.md, 2026-10-23-user-stories-ai.md, 2026-10-23-touchpoints-ai.md, Notes/2026-10-07-interview-matteo-galvagni.md]
---

# Concept document · 1 · Verdict before the door

## Scope and method

This is a draft. The author chose the direction (concept 1 · Verdict before the door) and the reduced feature set (F1 only); this note writes those choices down and does not revisit them. Every line stays a draft until the author commits it.

- **Trace marks.** `[untraced]` marks a sentence with no story, touchpoint or quote behind it. `[thin]` marks a sentence that rests on one quote or on an observation in a note rather than a quote. They are left in, not smoothed.
- **Codes.** Stories are cited as F and their number (`2026-10-23-user-stories-ai.md`), touchpoints as TP and their row (`2026-10-23-touchpoints-ai.md`), concepts by their number in `2026-10-26-merge-list.md`, marks as V, F, R (valuable, feasible, relevant) from `2026-10-26-concept-marks-ai.md`.
- **Out of scope here.** No interface, no implementation, no technology. Specification is the next step.

## The concept

Verdict before the door tells a commuter, at home in the minutes before leaving for the station, whether their first train of the day is worth going for: "go" or "don't go". It is for the commuter whose first train starts upstream and can build delay before it reaches their station, like the office-day commuter who leaves home at about six and changes at Mestre (P2, F1) `[thin: the hour comes from the note's observation, not a quote]`. Today he checks before leaving, and if the train is half an hour late he may not go to the station at all (TP 10):

> "Magari 1º di andare in stazione controllo se il treno un ritardo effettivamente. Il mio parte da Bassano, fa in tempo ad accumulare un tot di ritardo e quindi, se vedo che mezz'ora di ritardo, magari neanche vado in stazione o cerco un modo alternativo o chiedo a qualcuno, eccetera." — P2 Pt.2 [00:06:15]

The moment it serves is the one where the word from the operator now arrives too late: minutes before departure (TP 11, `[thin: row marked (?)]`) or after the commuter is already on the way (TP 44).

> "può essere che ti avvisi proprio pochi minuti 1º" — P3 [00:14:29]
>
> "letteralmente 2 minuti 1º del... Dell'annuncio, mi è arrivata una mail." — P1 [00:10:16]

What the commuter gains is the decision itself, made at home: not to go to the station and to look for another way (F1, "so that I can decide not to go to the station at all and look for another way").

- `[untraced]` **The verdict wording.** "Go" or "don't go" is the concept's word (concept 1), not the participant's. F1 asks to be told that the train "is late or cancelled", and P2 applies his own threshold ("se vedo che mezz'ora di ritardo"). Whether a verdict, rather than the fact, serves him is not shown by any quote.

## The reduced feature set

One feature. It is kept as written in `2026-10-23-features-ai.md`: not widened, not merged, not improved.

| feature | what it does (as written) | touchpoints it answers | user story behind it | mark |
|---|---|---|---|---|
| F1 · Own-train alert before leaving | Tells the commuter, before they leave home, that their own train is late or cancelled. | TP 10 (checking at home before going to the station), TP 11 (the app warns only minutes ahead, (?)), TP 44 (a late email about one's own train) | As the office-day commuter who changes trains at Mestre (P2), in the minutes before leaving home at about six in the morning, when his first train, coming from Bassano, may already have built up delay, I want to be told that my own train is late or cancelled, so that I can decide not to go to the station at all and look for another way. | [strong] |

Quotes attached to F1, as in the features note:

> "1º di andare in stazione controllo se il treno un ritardo effettivamente" — P2 Pt.2 [00:06:15] (TP 10)
>
> "può essere che ti avvisi proprio pochi minuti 1º" — P3 [00:14:29] (TP 11)
>
> "letteralmente 2 minuti 1º del... Dell'annuncio, mi è arrivata una mail." — P1 [00:10:16] (TP 44)
>
> "se ci fosse un'applicazione che appunto mi mi dice che il quel treno è in ritardo, sarebbe comodissimo" — P5 [00:11:29]

## The cut list

Every other concept in the merged list is dropped: 36 concepts. The reason given is the one the marks record. Where the marks do not separate a concept from concept 1, the line is marked `[untraced]`: the decision was made, but its reason is not written in the material. Concept 1's own marks, for comparison: V `[strong]`, F `[weak]` (needs live train state), R `[strong]`.

**Out on at least one axis**

| # | concept | reason |
|---|---|---|
| 10 | First train protected | F and R `[out]`: an operations change with no flow to prototype; improving the service is out of scope in the brief. |
| 12 | Paid to stay home | R `[out]`: refunds are ticketing, out of scope in the brief. No quote on money for a skipped trip. |
| 23 | An evening run kept | F and R `[out]`: a timetable change, out of scope in the brief, although V `[strong]` (F4, [00:12:01], [00:12:23]). |
| 24 | Night covered | R `[out]`: paying for a ride is prices and compensation, out of scope in the brief. |
| 32 | No limbo | F and R `[out]`: an operations change, out of scope in the brief, although V `[strong]` (F3, [00:12:55]). |
| 36 | Doubt paid back | R `[out]`: compensation is prices, out of scope in the brief. |

**Weak on all three axes**

| # | concept | reason |
|---|---|---|
| 3 | The six o'clock pact | No quote on working from home; needs the workplace to agree; sets the stakes, not the moment. |
| 11 | Proof of a failed morning | No quote on needing proof at work; needs an operator-certified record; comes after the moment. |
| 16 | Lesson follows the train | No quote on moving lessons; needs the school to change; changes the lesson, not the decision. |
| 19 | Strike evening pre-planned | Goes past F4's "so that" ([00:12:01]); needs timetable data; acts days ahead. |
| 21 | University as messenger | No quote on the university as a source; needs the university to adopt it; acts days ahead. |
| 34 | Arrival promised | No quote on a promised arrival; needs the operator to guarantee arrivals; leans into improving the service. |
| 35 | Lateness forgiven | No quote in F3 on consequences at work; needs the workplace or school to agree; comes after the moment. |

**Weaker than concept 1 on one axis, stronger on none**

| # | concept | reason |
|---|---|---|
| 2 | Upstream witness | V `[weak]`: no quote says P2 would trust riders; marked `[risky]`. Needs a crowd upstream before six. |
| 4 | Seat already held | V `[weak]`: the service takes the decision from P2, against F1's "so that I can decide"; marked `[risky]`. |
| 5 | Morning set by the train | V `[weak]`: no quote on a wake-up set by the train; marked `[risky]`. |
| 7 | Morning circle | V `[weak]`: no quote on regulars warning each other; marked `[risky]`. Needs a crowd. |
| 13 | My trains, strike day | R `[weak]`: acts days ahead, before the in-scope day of disruption. |
| 14 | Earlier conductor | R `[weak]`: acts days ahead; needs on-board staff to change practice. |
| 15 | Strike-night ride swap | V `[weak]`: F4's "so that" is a guaranteed train, not a shared ride; marked `[risky]`. |
| 22 | Sure, likely, unknown | R `[weak]`: acts days ahead, before the in-scope day of disruption. |
| 28 | Someone plans with you | V `[weak]`: only a partial trace ("chiedo a qualcuno", [00:06:15]); needs staff or a fellow regular. |
| 31 | The service picks | V `[weak]`: P2 makes the plan himself (F3); the service picking removes it. |
| 33 | Platform pool | V `[weak]`: no quote on deciding with others on the platform. Needs a crowd. |

**Trade-off: stronger than concept 1 on feasible, weaker on valuable**

| # | concept | reason |
|---|---|---|
| 8 | Second train agreed | V `[weak]`: no quote shows P2 planning ahead. F `[strong]` was given up for V. |
| 17 | Strike in my week | V `[weak]`: misses F4's "which of my trains are guaranteed"; R `[weak]`, days ahead. F `[strong]` was given up. |
| 20 | Classmates as relay | V `[weak]`: no quote on the course group; R `[weak]`, days ahead. F `[strong]` was given up. |
| 30 | Plan made the night before | V `[weak]`: no quote shows planning the night before. F `[strong]` was given up for V. |

**Same marks as concept 1 (V `[strong]`, F `[weak]`, R `[strong]`)**

The marks do not separate these from concept 1. What the material does show is given, but the decision's own reason is not recorded.

| # | concept | reason |
|---|---|---|
| 6 | Silence means go | `[untraced]` Same question (#1), same moment, same feed. The only `[both]` concept in #1 besides 2; the closest sibling of concept 1. |
| 9 | Fixed hour of truth | `[untraced]` Same question (#1). Its feasible gap is an organisation to change (the operator's hour), not a feed. |
| 18 | Your train, named | `[untraced]` Answers #4 (the strike evening, F4), not #1. |
| 25 | Deadline for the verdict | `[untraced]` Answers #3 (the unclear minutes, F3), not #1. Needs the operator to commit. |
| 26 | Both plans in hand | `[untraced]` Answers #3 (F3), not #1. Needs a timetable feed. |
| 27 | Odds, not status | `[untraced]` Answers #3 and #1. Marked `[risky]`: P2 asks for the fact, not odds (Pt.2.1 [00:14:23]). |
| 29 | Price of waiting | `[untraced]` Answers #3 (F3), not #1. Needs a timetable feed. |
| 37 | Real-time train view | `[untraced]` Story F8 (P3), not F1. The human list's only concept with no agent match. |

## Where the material is thin

- **One participant carries the who and the circumstance.** The story behind F1 is P2's alone, and the whole "first train from upstream" circumstance rests on one quote, P2 Pt.2 [00:06:15]. P1, P3 and P5 support the alert (F1's evidence), but not the before-six moment.
- **"At about six" has no quote.** It comes from the P2 note's observation (line 23), not from a quoted passage.
- **The verdict has no quote.** "Go" or "don't go" is the concept's framing. P2 asks for the fact and keeps the threshold ("mezz'ora") for himself. This sits against the `autonomy` signal in the concept marks, where taking the decision from P2 marked 4 and 31 `[weak]`.
- **TP 11 is a (?) row.** P3's "pochi minuti 1º" may be a push or the status shown in the app; the touchpoints note does not settle it.
- **TP 44 is not before leaving home.** P1's and P3's late emails show the word arriving late, but on board or on the way, not at home. It supports "too late", not "at the door".
- **"Look for another way" stops at the door.** F1's "so that" includes finding another way; the reduced set holds no feature for it, and P2's own alternative ([00:06:15] "cerco un modo alternativo o chiedo a qualcuno") is not described further in the quote.
- **Eight cuts have no recorded reason.** 6, 9, 18, 25, 26, 27, 29 and 37 carry the same marks as concept 1.
- **Feasible stays `[weak]`.** Concept 1 needs live train state; no open-data note exists (gaps note, "Open data check never done").

## Count

- **Features in the set: 1** (F1).
- **Concepts cut: 36** (37 merged, minus concept 1).
- **Reasons given: 36.** 28 rest on the marks (6 out, 7 weak on all three, 11 weaker on one axis, 4 trade-offs); 8 are marked `[untraced]` because the marks do not separate them from concept 1.
- **Sentences marked in "The concept": 2 `[thin]`, 1 `[untraced]`.**

## Signals

This unit is a reading of the draft, not of the sources.

- **The chosen concept and its feature do not say the same thing.** Concept 1 gives a verdict; F1 gives the fact. The reduced set keeps the fact. The specification will have to say which one the commuter receives.
- **The closest cut is 6 · Silence means go.** Same question, same moment, same feed, and reached by the human list independently. If the cut list is challenged, it is the first line that will be asked about.
