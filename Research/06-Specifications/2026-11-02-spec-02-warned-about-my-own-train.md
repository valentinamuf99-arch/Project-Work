---
title: "Specification 02 · Warned about my own train: told unasked, the same day before boarding, that my train is past my limit or cancelled"
date: 2026-11-02
activity: desk-research
source: "Concept document 05-Ideation/2026-10-26-05-concept-ai.md (concepts 1 and 3), user story F1 in 04-Synthesis/2026-10-23-03-user-stories-ai.md, with the features, touchpoints, How-Might-We and gaps notes; written on 2026-11-05 following 2026-11-02-specification-instructions.md. Interview notes and transcripts not read."
author: "Eugenia Valentina Muffolini"
channel: web
method: functional specification from the concept's reduced set, every rule traced to a story
tags: [train, venezia, work-commute, long-delay, cancellation, noticing, deciding, warning]
confidence: low
grade: tertiary
status: draft
related: [../plan.md, 2026-11-02-specification-instructions.md, ../05-Ideation/2026-10-26-05-concept-ai.md, ../05-Ideation/2026-10-26-04-prioritisation-ai.md, ../04-Synthesis/2026-10-23-03-user-stories-ai.md, ../04-Synthesis/2026-10-23-02-features-ai.md, ../04-Synthesis/2026-10-23-01.1-touchpoints-ai.md, ../05-Ideation/2026-10-26-01.1-how-might-we-ai.md, ../01.3-Raw/2026-10-24-gaps-notes.md, ../04-Synthesis/User Stories/2026-10-23-user-story-01-f01-own-train-alert-before-leaving.md, 2026-11-02-spec-01-my-train-and-my-limit.md, 2026-11-02-spec-03-another-way-to-make-the-trip.md, 2026-11-02-spec-04-following-my-train-stop-by-stop.md, 2026-11-02-spec-05-why-it-is-late.md]
---

# Part A · Specification

## Purpose

On the day of the trip, from home up to the platform, the app tells the commuter without being asked that their usual train is late beyond their limit or cancelled. The warning gives the facts and leaves the decision to the commuter: go to the station, wait, or look for another way. It belongs to the own-train warning and is the moment the whole app exists for.

## Who it is for

An office-day commuter who takes an early train, about six in the morning, on a line that starts upstream at Bassano and changes at Mestre. By the time he leaves home the train may already have built up delay on its way. If it is half an hour late, he may not go to the station at all.

## Behaviour

| rule | actor | action | response | conditions and edges | state changes |
|---|---|---|---|---|---|
| R1 | The operator's running information | Gives a delay for the saved train, at the commuter's get-on stop, equal to or greater than the commuter's limit. | The app warns the commuter unasked: the train, its scheduled departure from the get-on stop, and the delay in minutes. | Only on a day the commuter takes the train, and only until the train's departure from the get-on stop. While the delay stays under the limit, the app says nothing. If the delay changes after the warning: [open] warn again at every change, or only when it grows by a set amount. If the delay falls back under the limit after the warning: unspecified. | The train is "at or beyond the limit"; a warning has been sent. |
| R2 | The operator's running information | Marks the saved train as cancelled. | The app warns the commuter unasked that the train is cancelled. | Whatever the limit. Also after an R1 warning for the same train. Same day window as R1. | The train is "cancelled"; a warning has been sent. |
| R3 | The app | Sends a warning under R1 or R2. | The warning carries, besides the facts: the reason, if known (see "Why it is late"); a way to see where the train is (see "Following my train stop by stop"); the next way to make the trip (see "Another way to make the trip"). | The warning never says whether to go or not, and never recommends one option. | No change. |
| R4 | The operator's running information | Has no information about the saved train on the day of the trip, or none newer than the scheduled time. | The app sends no warning. When the commuter opens the train, the app says it has no news of this train, and never shows "on time". | The app cannot tell "no news" from "on time" unless the operator's running information says so. | The train is "no news". |

## States and data

- **Data read:** the saved train, the get-on stop, the limit, the days (from "My train and my limit"); the train's delay at the get-on stop, its cancellation, its reason (from the operator's running information).
- **States of the saved train on a trip day:** under the limit (silent) → at or beyond the limit (R1) or cancelled (R2). From at or beyond the limit it can still move to cancelled (R2). Any state can be "no news" when the information is missing (R4). After the departure from the get-on stop, no state is reported.

## What the commuter gets and does

1. **No problem.** Nothing. The app is silent.
2. **Delay beyond the limit.** A warning arrives unasked: "Your 06:xx from [get-on stop] is [N] minutes late." Under it, the reason line, the link to the train's stops and the next way (R3). The commuter can open any of the three, or do nothing.
3. **Cancellation.** A warning arrives unasked: "Your 06:xx from [get-on stop] is cancelled." Then the same three items.
4. **Delay changes after the warning.** [open] (R1).
5. **Cancelled after a delay warning.** A second warning, as in step 3.
6. **No news.** No warning. If the commuter opens the train, the app says "No news of this train from the operator" (R4).

Appearance constraint: the first line of the warning holds the train and the minutes (or "cancelled"), in that order, and fits on one line.

## Example scenarios

1. **The bad morning.** Saved train: the early train from the Bassano line, scheduled departure from the commuter's stop about 06:00 (exact time unspecified). Limit: 30 minutes. At home before leaving, the operator's running information gives a 30-minute delay. The warning arrives (step 2). The commuter reads it and decides for himself.
2. **A calm morning.** Same train, a delay under 30 minutes (value unspecified). Nothing arrives (step 1).
3. **Cancelled.** Same train, the operator marks it cancelled. The warning says so (step 3).
4. **No news yet.** The operator's running information has nothing on the train at 05:45. No warning; opening the train shows "No news of this train from the operator" (step 6).

## Acceptance criteria

- Given a limit of 30 minutes, when the delay at the get-on stop becomes 30 minutes on a trip day before departure, then the app warns with the train and "30 minutes late". (R1)
- Given a limit of 30 minutes, when the delay is under 30 minutes, then the app sends nothing. (R1, edge)
- Given a delay beyond the limit, when it happens after the train has left the get-on stop, then the app sends nothing. (R1, edge)
- Given a day the commuter does not take the train, when the train is at or beyond the limit, then the app sends nothing. (R1, edge, depends on the [open] choice in "My train and my limit")
- Given any limit, when the train is cancelled on a trip day before departure, then the app warns "cancelled". (R2)
- Given a delay warning already sent, when the train is then cancelled, then the app sends a second warning "cancelled". (R2, edge)
- Given a warning, when the commuter reads it, then it contains no advice to go or not to go. (R3)
- Given no information about the train, when the commuter opens it, then the app shows "No news of this train from the operator" and not "on time". (R4)

## Out of scope

- A verdict or a recommendation (go, don't go, leave now).
- Warnings on board, after the train has left the get-on stop.
- Strikes announced days ahead, and notices about the whole network.
- Warnings about trains other than the saved one.

## Links to other parts of the app

- **My train and my limit** gives the train, the get-on stop, the limit and the days.
- **Why it is late** gives the reason line for the warning.
- **Following my train stop by stop** opens from the warning, on the same train.
- **Another way to make the trip** opens from the warning, with the get-on and get-off stops.

# Part B · Traceability

## User stories

> **F1 · Own-train alert before leaving.** As the office-day commuter who changes trains at Mestre (P2), in the minutes before leaving home at about six in the morning, when his first train, coming from Bassano, may already have built up delay, I want to be told that my own train is late or cancelled, so that I can decide not to go to the station at all and look for another way.

Source: F1 · P2 Pt.2 [00:06:15].

One story only. The concept narrows the moment to the same day, from home up to the platform, and adds the limit (concept 3) and "no verdict" (concept 11, verdict dropped by the author).

## References

| story | feature | HMW | touchpoints | key quotes | gaps |
|---|---|---|---|---|---|
| F1 | F1 · Own-train alert before leaving `[strong]` (`../04-Synthesis/2026-10-23-02-features-ai.md`) | #1 `[calibrated]` (`../05-Ideation/2026-10-26-01.1-how-might-we-ai.md`) | TP 10 ⚠C5, TP 11 (?), TP 44 | P2 Pt.2 [00:06:15] "Il mio parte da Bassano, fa in tempo ad accumulare un tot di ritardo e quindi, se vedo che mezz'ora di ritardo, magari neanche vado in stazione"; P3 [00:14:29] "può essere che ti avvisi proprio pochi minuti 1º" (?); P1 [00:10:16] "letteralmente 2 minuti 1º del... Dell'annuncio, mi è arrivata una mail." | Open data check never done (`../01.3-Raw/2026-10-24-gaps-notes.md`); concept assumption "The delay is known before the commuter leaves" |

## Rule trace

| rule | story | touchpoint | rests on | marks |
|---|---|---|---|---|
| R1 | F1 | TP 10, TP 11 | P2 Pt.2 [00:06:15] "se vedo che mezz'ora di ritardo"; concepts 1 and 3; moment "same day, from home up to the platform" (concept) | TP 11 (?) |
| R2 | F1 | TP 10 | F1 capability "late or cancelled" | |
| R3 | F1 | TP 10 | F1 "so that I can decide"; concept: "the warning gives the facts; the decision stays with the commuter" | concept 8 V `[weak]`; concept 11 `[thin]` |
| R4 | F1 | TP 11, TP 44 | TP 11 and TP 44: the word arrives minutes ahead or late; concept assumption "The delay is known before the commuter leaves" | TP 11 (?) |

## Verifiability pass

| rule | how it fails | what is missing | what is uncheckable | severity |
|---|---|---|---|---|
| R1 | The delay is given late by the operator (TP 44: minutes before, or half an hour after), so the warning arrives after the commuter has left home. The rule is met; the story is not. | A latest useful time for the warning. | Whether the warning is "in time" cannot be checked without one. | `[fixable]` |
| R1 | The delay changes after the warning and the commuter acts on a stale number. | The [open] choice on re-warning. | Nothing once chosen. | `[fixable]` |
| R2 | None found within the rule's conditions. | | | `[note]` |
| R3 | The reason or the next way is empty and the warning looks broken. | Handled in "Why it is late" and "Another way to make the trip" (they say so). | Nothing. | `[note]` |
| R4 | The commuter reads silence as "on time" and goes to the station. | Whether the app should warn about "no news" unasked. | Nothing. | `[fixable]` |

## Assumptions and open questions

- **The delay is known before the commuter leaves.** F1's own circumstance is a train that builds delay on its way; TP 11 and TP 44 show the word arriving minutes ahead or late. Test: the open-data check, for one early train from the Bassano line across several mornings.
- **Silence is understood as "no problem".** Nothing in the material tests it. Test: show P2 a calm morning with no warning and ask what he concludes.
- **The warning reaches the commuter at home.** TP 10 has P2 and P3 checking before leaving; ⚠C5 says the benchmark claims they open an app only to buy tickets. Test: ask P2 how he checked on the last late morning.
- **[open] choices:** R1 re-warning on change; R1 falling back under the limit is unspecified.
