---
title: "Specification 04 · Following my train stop by stop: where my own train is on its way, and when it will reach my stop"
date: 2026-11-02
activity: desk-research
source: "Concept document 05-Ideation/2026-10-26-05-concept-ai.md (concepts 5 and 41), user story F8 in 04-Synthesis/2026-10-23-03-user-stories-ai.md, with the features, touchpoints, How-Might-We and gaps notes; written on 2026-11-05 following 2026-11-02-specification-instructions.md. Interview notes and transcripts not read."
author: "Eugenia Valentina Muffolini"
channel: web
method: functional specification from the concept's reduced set, every rule traced to a story
tags: [train, vicenza, university-commute, noticing, understanding, information-source]
confidence: low
grade: tertiary
status: draft
related: [../plan.md, 2026-11-02-specification-instructions.md, ../05-Ideation/2026-10-26-05-concept-ai.md, ../05-Ideation/2026-10-26-04-prioritisation-ai.md, ../04-Synthesis/2026-10-23-03-user-stories-ai.md, ../04-Synthesis/2026-10-23-02-features-ai.md, ../04-Synthesis/2026-10-23-01.1-touchpoints-ai.md, ../05-Ideation/2026-10-26-01.1-how-might-we-ai.md, ../01.3-Raw/2026-10-24-gaps-notes.md, ../04-Synthesis/User Stories/2026-10-23-user-story-06-f08-own-train-stop-by-stop.md, 2026-11-02-spec-01-my-train-and-my-limit.md, 2026-11-02-spec-02-warned-about-my-own-train.md]
---

# Part A · Specification

## Purpose

Before going to the station, the commuter opens their usual train and sees where it is on its way: which stops it has reached and left, at what time, and when it is expected at the commuter's stop. It belongs to seeing one's own train, and it opens either on its own or from the warning.

## Who it is for

A student on a monthly pass who takes the same train between Bassano and Padova and, before going to the station, follows it by its number because the operator's app does not always say whether it is running.

## Behaviour

| rule | actor | action | response | conditions and edges | state changes |
|---|---|---|---|---|---|
| R1 | The commuter | Opens the saved train (directly, or from the warning). | The app shows the train's stops in order up to the commuter's get-on stop. For each stop already reached: actual arrival and departure times. For the last stop reached: marked as the train's current position. For the get-on stop: scheduled time and expected time. | Only on a trip day, until the train leaves the get-on stop. The expected time at the get-on stop is shown only if the operator's running information gives it; otherwise the app shows the scheduled time and the delay at the last stop reached, and does not compute one. | No change. |
| R2 | The app | Shows the train's position. | The app says the time of the last update ("last stop reached at 13:12"). | The position is known only stop by stop, not between stops: the app never shows the train between two stops. | No change. |
| R3 | The commuter | Opens a train that has not left its origin. | The app says the train has not left yet and shows its scheduled departure from the origin. | If the departure time from the origin has passed and the train is neither shown as left nor as cancelled, the app says exactly that: "not left yet, not cancelled", with the time of the last update. It never guesses which it will be. | No change. |
| R4 | The commuter | Opens a train that is cancelled. | The app says it is cancelled, on the first line, above the stops. | Whole run or part of the run: unspecified. | No change. |

## States and data

- **Data read:** the saved train and the get-on stop (from "My train and my limit"); the stops, scheduled times, actual arrival and departure times, delay and cancellation (from the operator's running information).
- **States of the train as shown:** not left yet → on its way (last stop reached) → left the get-on stop (nothing more shown). Cancelled can come from any state. "Not left yet, not cancelled" is "not left yet" past its scheduled departure.

## What the commuter gets and does

1. **On its way, no problem.** The stops passed with their times, the current position, and "Expected at [get-on stop] [time] (scheduled [time])".
2. **On its way, late.** Same, with the delay: "Expected at [get-on stop] [time] (scheduled [time]), [N] minutes late."
3. **No expected time given.** "Scheduled at [get-on stop] [time]. [N] minutes late at [last stop reached]."
4. **Not left yet.** "Not left [origin] yet. Scheduled departure [time]."
5. **Not left, not cancelled, past its time.** "Not left [origin] yet, not cancelled. Last update [time]."
6. **Cancelled.** "Cancelled." above the stops.

Appearance constraint: the current position and the expected time at the get-on stop are the first two lines.

## Example scenarios

1. **Following from home.** The student's train passes Vicenza: arrived 13:08, left 13:12. The app shows Vicenza as the last stop reached, "last stop reached at 13:12", and the expected time at her stop if the operator gives it (her stop and its time: unspecified) (steps 1 to 3).
2. **Neither left nor cancelled.** The train should have left its origin; the operator's running information shows neither. The app shows step 5.
3. **Cancelled.** The operator marks the train cancelled. Step 6.

## Acceptance criteria

- Given a train that has reached and left Vicenza at 13:08 and 13:12, when the commuter opens it, then Vicenza is shown with both times and as the last stop reached. (R1)
- Given an expected time at the get-on stop from the operator, when the commuter opens the train, then that time is shown with the scheduled one. (R1)
- Given no expected time from the operator, when the commuter opens the train, then only the scheduled time and the last known delay are shown, and no computed time. (R1, edge)
- Given any position, when it is shown, then the time of the last update is shown with it. (R2)
- Given a train between two stops, when the commuter opens it, then the position shown is the last stop reached. (R2, edge)
- Given a train past its departure, neither left nor cancelled, when the commuter opens it, then the app shows "not left yet, not cancelled" and the time of the last update. (R3, edge)
- Given a cancelled train, when the commuter opens it, then "Cancelled" is the first line. (R4)

## Out of scope

- Following any train other than the saved one.
- A map, a moving position between stops, a forecast of the delay.
- The stops after the commuter's get-on stop.

## Links to other parts of the app

- **My train and my limit** gives the train and the get-on stop.
- **Warned about my own train** opens this part from the warning.

# Part B · Traceability

## User stories

> **F8 · Own train, stop by stop.** As the student who commutes from Bassano to Padova on a monthly pass (P3), before going to the station, when the Trenitalia app does not say whether her train is running, I want to follow my own train stop by stop in the operator's own channel, so that I know when it will reach my stop.

Source: F8 · P3 [00:13:55], [00:14:51].

One story only. The concept places concept 5 (Real-time train view) here, though its valuable mark traces to F1 (P2 watching his train build delay from Bassano).

## References

| story | feature | HMW | touchpoints | key quotes | gaps |
|---|---|---|---|---|---|
| F8 | F8 · Own train, stop by stop `[weak]` (`../04-Synthesis/2026-10-23-02-features-ai.md`) | #7 `[narrow]`, thin "so that" (`../05-Ideation/2026-10-26-01.1-how-might-we-ai.md`) | TP 12, TP 14 | P3 [00:14:51] "dice arrivato a Vicenza alle 13.08, ripartito alle 13.12, quindi sai quando arriverà quella successiva"; P3 [00:13:55] "Non sempre il... L'app di Trenitalia o il sito dice se il treno c'è o meno."; P2 Pt.2.1 [00:14:02] "il tracking non è via GPS ma è sempre via le stazioni"; P2 Pt.2.1 [00:12:55] "nel tracking live non lo vedo partito, ma non lo vedo neanche cancellato"; REV [IMG_2383] "l'aggiornamento in tempo reale è sempre sbagliato" | TP 12 rests on P3 alone; TP 14 on reviewers only (concept, "Where the material is thin"); open data check never done (`../01.3-Raw/2026-10-24-gaps-notes.md`) |

## Rule trace

| rule | story | touchpoint | rests on | marks |
|---|---|---|---|---|
| R1 | F8 | TP 12 | P3 [00:14:51] "arrivato a Vicenza alle 13.08, ripartito alle 13.12, quindi sai quando arriverà quella successiva"; F8 "so that I know when it will reach my stop" | `[weak]`; thin "so that" |
| R2 | F8 | TP 12, TP 14 | P2 Pt.2.1 [00:14:02] "ti dice l'ultima stazione che raggiunto quando" | `[weak]` |
| R3 | F8 | TP 12 | P3 [00:13:55] "dice se il treno c'è o meno"; P2 Pt.2.1 [00:12:55] "non lo vedo partito, ma non lo vedo neanche cancellato" | P2's quote sits at TP 13 |
| R4 | F8 | TP 12 | F8 "whether her train is running" | |

## Verifiability pass

| rule | how it fails | what is missing | what is uncheckable | severity |
|---|---|---|---|---|
| R1 | The operator's times are wrong (TP 14, reviewers: "sempre sbagliato") and the app repeats them faithfully. | Nothing the app can check; the rule is met. | Whether the shown time is true. | `[note]` |
| R1 | The student never gets "when it will reach my stop" because the operator gives no expected time, and the rule forbids computing one. | Whether to compute an estimate from the last delay: a design choice not in the sources. | Nothing. | `[fixable]` |
| R2 | None within the rule. | | | `[note]` |
| R3 | None within the rule. | | | `[note]` |
| R4 | A train cancelled for part of its run shows as running, or as cancelled for a stop it still serves. | Partial cancellation is unspecified. | Uncheckable until written. | `[fixable]` |

## Assumptions and open questions

- **The value is thin.** F8's "so that" restates the capability (HMW note): no decision is shown that P3 would make with the time. Test: ask P3 what she did the last time she followed her train from home.
- **The operator's running information is right.** Reviewers say the live status is wrong (TP 14). The app cannot correct it. Test: the open-data check against the board for several runs.
- **Computing an expected time** at the get-on stop from the last delay would answer the "so that" but is not in any source. Left out, listed here.
- **"In the operator's own channel"** is part of the story's capability and is a question of who provides the app, not of its behaviour; not specified.
