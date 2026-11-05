---
title: "Specification 03 · Another way to make the trip: the warning comes with the next workable train for the same trip"
date: 2026-11-02
activity: desk-research
source: "Concept document 05-Ideation/2026-10-26-05-concept-ai.md (concept 11, verdict dropped), user story F1 in 04-Synthesis/2026-10-23-03-user-stories-ai.md, with the features, touchpoints, How-Might-We and gaps notes; written on 2026-11-05 following 2026-11-02-specification-instructions.md. Interview notes and transcripts not read."
author: "Eugenia Valentina Muffolini"
channel: web
method: functional specification from the concept's reduced set, every rule traced to a story
tags: [train, work-commute, long-delay, cancellation, deciding, alternative]
confidence: low
grade: tertiary
status: draft
related: [../plan.md, 2026-11-02-specification-instructions.md, ../05-Ideation/2026-10-26-05-concept-ai.md, ../05-Ideation/2026-10-26-04-prioritisation-ai.md, ../04-Synthesis/2026-10-23-03-user-stories-ai.md, ../04-Synthesis/2026-10-23-02-features-ai.md, ../04-Synthesis/2026-10-23-01.1-touchpoints-ai.md, ../05-Ideation/2026-10-26-01.1-how-might-we-ai.md, ../01.3-Raw/2026-10-24-gaps-notes.md, ../04-Synthesis/User Stories/2026-10-23-user-story-01-f01-own-train-alert-before-leaving.md, 2026-11-02-spec-01-my-train-and-my-limit.md, 2026-11-02-spec-02-warned-about-my-own-train.md]
---

# Part A · Specification

## Purpose

When the commuter is warned that their usual train is late beyond their limit or cancelled, the warning also shows the next train that still makes the same trip. It gives the commuter something to weigh against waiting, without deciding for them. It belongs to the own-train warning, on the same day, before boarding.

## Who it is for

An office-day commuter on an early train from the Bassano line who, if the train is very late, may not go to the station at all and look for another way instead.

## Behaviour

| rule | actor | action | response | conditions and edges | state changes |
|---|---|---|---|---|---|
| R1 | The app | Sends a warning about the saved train (at or beyond the limit, or cancelled). | The app looks, in the operator's running information, for the next train that leaves the commuter's get-on stop and reaches the get-off stop, and shows it with its departure and arrival times and its own delay, if any. | Only trains. [open] Whether other ways (a bus, a lift) are included: the sources do not give them. "Next" means the earliest arrival at the get-off stop, not the earliest departure. If the saved train, even late, still arrives first, it is shown as the next way. | An option is shown with the warning. |
| R2 | The app | Finds no train that reaches the get-off stop on the same day. | The app says that no other train was found for this trip today. It never invents an option. | | "No other way found" is shown. |
| R3 | The operator's running information | Changes the next train (late, cancelled) after the warning. | unspecified: whether the app updates the option or warns again. | | |

## States and data

- **Data read:** the get-on and get-off stops (from "My train and my limit"); trains between the two stops, their times, delays and cancellations (from the operator's running information).
- **States:** no option (no warning yet) → option shown (R1) or no other way found (R2).

## What the commuter gets and does

1. **Warning with an option.** Under the warning: "Next way: the 06:xx from [get-on stop], arrives [get-off stop] at 07:xx." If that train is late too, its delay follows on the same line.
2. **Warning, the late train still arrives first.** "Next way: your train, arrives [get-off stop] at 07:xx." The commuter sees that waiting is still the quickest.
3. **Warning, nothing found.** "No other train found for this trip today."
4. The commuter can read the option and close it. The app takes no action for them.

Appearance constraint: the option fits on one line under the warning, arrival time included.

## Example scenarios

1. **Cancelled early train.** Saved train from the Bassano line, get off at Mestre, about 06:00. Cancelled. The next train between the same stops leaves unspecified minutes later; the app shows it with its arrival at Mestre (step 1).
2. **Late, but still first.** Saved train 30 minutes late. The next train leaves later and arrives after it. The app shows the saved train as the next way (step 2).
3. **Nothing found.** The operator's running information gives no other train between the two stops that day. The app says so (step 3).

## Acceptance criteria

- Given a warning about the saved train, when another train between the same two stops arrives earlier, then the app shows that train with departure and arrival times. (R1)
- Given a warning, when the saved train still arrives first, then the app shows the saved train as the next way. (R1, edge)
- Given a next train that is itself late, when it is shown, then its delay is shown too. (R1, edge)
- Given a warning, when no other train reaches the get-off stop that day, then the app says no other train was found. (R2)
- Given any option, when it is shown, then the app does not say whether to take it. (R1)

## Out of scope

- Recommending or ranking options, or saying whether to go.
- Buses, replacement buses, lifts, taxis (pending the [open] choice in R1).
- Ways after a change of train (the second leg).
- Buying a ticket for the option.

## Links to other parts of the app

- **Warned about my own train** triggers this part and shows its result under the warning.
- **My train and my limit** gives the two stops.

# Part B · Traceability

## User stories

> **F1 · Own-train alert before leaving.** As the office-day commuter who changes trains at Mestre (P2), in the minutes before leaving home at about six in the morning, when his first train, coming from Bassano, may already have built up delay, I want to be told that my own train is late or cancelled, so that I can decide not to go to the station at all and look for another way.

Source: F1 · P2 Pt.2 [00:06:15].

The behaviour comes from F1's "so that" ("look for another way"), carried by concept 11 with its verdict dropped by the author. No feature in the reduced set supplies the way itself (concept, "Evidence for the next workable way").

## References

| story | feature | HMW | touchpoints | key quotes | gaps |
|---|---|---|---|---|---|
| F1 | F1 · Own-train alert before leaving `[strong]` (`../04-Synthesis/2026-10-23-02-features-ai.md`) | #1 `[calibrated]`: "threshold or alternative-suggesting concepts all answer it" (`../05-Ideation/2026-10-26-01.1-how-might-we-ai.md`) | TP 10 ⚠C5 | P2 Pt.2 [00:06:15] "o cerco un modo alternativo"; P2 Pt.2.1 [00:07:50] "manca la soluzione alternativa proposta"; P6 [00:11:17] "mi sarei attivata in anticipo con eventuali altre soluzioni magari." Counter-evidence: P2 Pt.2.1 [00:01:34] "non c'è un'alternativa, io so che non c'è un'alternativa e di conseguenza non la cerco" | Concept assumption "There is a workable other way to show" (`../05-Ideation/2026-10-26-05-concept-ai.md`) |

## Rule trace

| rule | story | touchpoint | rests on | marks |
|---|---|---|---|---|
| R1 | F1 | TP 10 | P2 Pt.2 [00:06:15] "o cerco un modo alternativo"; P2 Pt.2.1 [00:07:50]; concept 11 "the next workable way" | concept 11 `[thin]`: no feature in the set behind it; `[open]` other modes |
| R2 | F1 | TP 10 | P2 Pt.2.1 [00:01:34] "non c'è un'alternativa" (counter-evidence, kept as the edge) | |
| R3 | F1 | TP 10 | Edge from TP 44 (the word changes late); behaviour unspecified | |

## Verifiability pass

| rule | how it fails | what is missing | what is uncheckable | severity |
|---|---|---|---|---|
| R1 | P2 knows his route has no alternative (Pt.2.1 [00:01:34]); the option adds nothing for him on the usual route, which is the only route this app saves. | Whether the option is worth showing on a familiar route. That is an idea question, not a writing one: noted, not attacked. | Nothing. | `[note]` |
| R1 | P2's own "other way" includes asking someone ("chiedo a qualcuno"); a train-only option misses it. | The [open] choice on other modes. | Nothing once chosen. | `[fixable]` |
| R2 | None within the rule. | | | `[note]` |
| R3 | The commuter acts on an option that has since been cancelled. | The behaviour itself is unspecified. | Uncheckable until written. | `[fixable]` |

## Assumptions and open questions

- **There is a workable other way to show.** No feature in the set produces it, and P2 says that on his own route there is none (Pt.2.1 [00:01:34]); he misses a proposed alternative only in a place he does not know (Pt.2.1 [00:07:50]). Test: ask P2 what he actually did on the last morning the first train was late.
- **The operator's running information covers the other trains.** The open-data check was never done.
- **Earliest arrival is what "workable" means.** Not traced; chosen as the smallest reading. Test: show P2 and P6 two options, one leaving first and one arriving first.
- **[open] choices:** R1 other modes. R3 unspecified.
