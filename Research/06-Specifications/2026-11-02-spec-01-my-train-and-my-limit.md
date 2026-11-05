---
title: "Specification 01 · My train and my limit: the commuter names their usual train, their stops and the delay that would change their plans"
date: 2026-11-02
activity: desk-research
source: "Concept document 05-Ideation/2026-10-26-05-concept-ai.md (concepts 41 and 3), user stories F1 and F8 in 04-Synthesis/2026-10-23-03-user-stories-ai.md, with the features, touchpoints, How-Might-We and gaps notes; written on 2026-11-05 following 2026-11-02-specification-instructions.md. Interview notes and transcripts not read."
author: "Eugenia Valentina Muffolini"
channel: web
method: functional specification from the concept's reduced set, every rule traced to a story
tags: [train, work-commute, university-commute, routine, deciding, warning]
confidence: low
grade: tertiary
status: draft
related: [../plan.md, 2026-11-02-specification-instructions.md, ../05-Ideation/2026-10-26-05-concept-ai.md, ../05-Ideation/2026-10-26-04-prioritisation-ai.md, ../04-Synthesis/2026-10-23-03-user-stories-ai.md, ../04-Synthesis/2026-10-23-02-features-ai.md, ../04-Synthesis/2026-10-23-01.1-touchpoints-ai.md, ../05-Ideation/2026-10-26-01.1-how-might-we-ai.md, ../01.3-Raw/2026-10-24-gaps-notes.md, ../04-Synthesis/User Stories/2026-10-23-user-story-01-f01-own-train-alert-before-leaving.md, ../04-Synthesis/User Stories/2026-10-23-user-story-06-f08-own-train-stop-by-stop.md, 2026-11-02-spec-02-warned-about-my-own-train.md, 2026-11-02-spec-03-another-way-to-make-the-trip.md, 2026-11-02-spec-04-following-my-train-stop-by-stop.md]
---

# Part A · Specification

## Purpose

On a calm day, the commuter tells the app which train they take every day, where they get on and off, and how many minutes of delay would change their plans. This is the set-up of the own-train warning: everything the app later says about the bad morning depends on it. It happens once, before any trip.

## Who it is for

- An office-day commuter who takes the same early train every morning, from a line that starts upstream at Bassano, and changes at Mestre. He has his own rule: if the train is half an hour late, he may not go to the station at all.
- A student on a monthly pass who takes the same train between Bassano and Padova and wants to follow it by its number.

## Behaviour

| rule | actor | action | response | conditions and edges | state changes |
|---|---|---|---|---|---|
| R1 | The commuter | Names their usual train by its number. | The app finds the train in the operator's running information and shows its route: origin, stops, destination and scheduled times. | Only a train the operator's running information knows. If the number is not found, the app says so and saves nothing; it never guesses a near match. Whether a commuter can save more than one usual train: unspecified. | A train is chosen, not yet saved. |
| R2 | The commuter | Picks, on that route, the stop where they get on and the stop where they get off. | The app shows the scheduled departure from the first and arrival at the second, and saves the train with the two stops. | The get-off stop must come after the get-on stop on the route. If the commuter changes trains (for example at Mestre), the get-off stop is where they leave this train; the second train is unspecified. | The usual train is saved, with the commuter's two stops. |
| R3 | The commuter | Sets the delay, in whole minutes, that would change their plans. | The app saves it as the commuter's limit and says, in one sentence, what it means: "You will be told when this train is N minutes late or more, or cancelled." | A limit is required to save the set-up. No default value: the app does not propose a number. [open] Whether a limit of zero (told of any delay) is allowed. | The limit is saved; the warning is active for this train. |
| R4 | The commuter | Chooses on which days they take the train. | The app saves the days. | [open] Every day the train runs, or only the days the commuter picks. The sources do not say. | The days are saved. |

## States and data

- **Data from the commuter:** the train number, the get-on stop, the get-off stop, the limit in minutes, the days (R4, [open]).
- **Data from the operator's running information:** the train's route, its stops and scheduled times.
- **States:** no train saved → train chosen (R1) → train saved with stops (R2) → warning active (R3).

## What the commuter gets and does

1. **No train saved.** The app asks for the number of the train the commuter takes every day.
2. **Number entered.** The app shows the route with its stops and times (R1), or says "No train with this number was found" and keeps the field open.
3. **Stops chosen.** The app shows "You get on at A at 06:xx and get off at B at 07:xx" with the scheduled times (R2).
4. **Limit set.** The commuter types a number of minutes. The app confirms with the sentence in R3.
5. **Days chosen** (R4, [open]).
6. **Set-up done.** The app shows a summary: train, two stops, limit, days. From now on it stays silent until the limit is passed or the train is cancelled (see "Warned about my own train").

Appearance constraint: the summary fits in four lines, one per item, the limit written in minutes.

## Example scenarios

1. **The office-day commuter.** Train number: unspecified. Route: from Bassano to Venezia via Mestre (the stops in between: unspecified). Get on: unspecified, a stop after Bassano. Get off: Mestre, where he changes. Departure: about six in the morning. Limit: 30 minutes. Steps 1 to 6 run without an edge.
2. **The student on a pass.** Train number: unspecified. Route: through Vicenza (the train she follows passes Vicenza, arriving 13:08 and leaving 13:12). Get on and get off: unspecified, on her trip between Bassano and Padova. Limit: unspecified. Steps 1 to 6.
3. **Number not found.** The commuter types a number the operator's running information does not know. Step 2 shows "No train with this number was found"; nothing is saved.

## Acceptance criteria

- Given a train number the operator's running information knows, when the commuter enters it, then the app shows that train's route with its stops and scheduled times. (R1)
- Given a number the operator's running information does not know, when the commuter enters it, then the app says no train was found and saves nothing. (R1, edge)
- Given a train's route, when the commuter picks a get-off stop that comes before the get-on stop, then the app does not save and says why. (R2, edge)
- Given a train with two stops chosen, when the commuter saves, then the app shows the scheduled departure and arrival times at those stops. (R2)
- Given no limit entered, when the commuter tries to finish the set-up, then the app does not activate the warning and asks for a limit. (R3, edge)
- Given a limit of N minutes, when the commuter saves it, then the app shows "You will be told when this train is N minutes late or more, or cancelled." (R3)

## Out of scope

- Saving a whole journey with its changes, or the second train after a change.
- Suggesting a train, a limit or a time to leave home.
- Tickets, passes and payment.
- Any warning: this part only saves. Warning is "Warned about my own train".

## Links to other parts of the app

- **Warned about my own train** reads the saved train, the two stops, the limit and the days.
- **Another way to make the trip** reads the get-on and get-off stops.
- **Following my train stop by stop** reads the saved train and the get-on stop.

# Part B · Traceability

## User stories

> **F1 · Own-train alert before leaving.** As the office-day commuter who changes trains at Mestre (P2), in the minutes before leaving home at about six in the morning, when his first train, coming from Bassano, may already have built up delay, I want to be told that my own train is late or cancelled, so that I can decide not to go to the station at all and look for another way.

Source: F1 · P2 Pt.2 [00:06:15].

> **F8 · Own train, stop by stop.** As the student who commutes from Bassano to Padova on a monthly pass (P3), before going to the station, when the Trenitalia app does not say whether her train is running, I want to follow my own train stop by stop in the operator's own channel, so that I know when it will reach my stop.

Source: F8 · P3 [00:13:55], [00:14:51].

Why they share this behaviour: both need the app to know which train is "my own train" before anything else can happen. F1 adds the limit (P2's "mezz'ora"); F8 adds naming the train by its number and "my stop". The concept carries this as concepts 41 (Saved usual train) and 3 (Delay threshold alert).

## References

| story | feature | HMW | touchpoints | key quotes | gaps |
|---|---|---|---|---|---|
| F1 | F1 · Own-train alert before leaving `[strong]` (`../04-Synthesis/2026-10-23-02-features-ai.md`) | #1 `[calibrated]` (`../05-Ideation/2026-10-26-01.1-how-might-we-ai.md`) | TP 10 ⚠C5, TP 11 (?), TP 44 | P2 Pt.2 [00:06:15] "se vedo che mezz'ora di ritardo, magari neanche vado in stazione" | Concept assumption "A commuter sets a threshold" and "There is one usual train to save" (`../05-Ideation/2026-10-26-05-concept-ai.md`) |
| F8 | F8 · Own train, stop by stop `[weak]` | #7 `[narrow]`, thin "so that" | TP 12, TP 14 | P3 [00:14:51] "puoi inserire il numero del tuo treno e ti dà aggiornamenti in tempo reale" | Open data check never done (`../01.3-Raw/2026-10-24-gaps-notes.md`, plan.md) |

## Rule trace

| rule | story | touchpoint | rests on | marks |
|---|---|---|---|---|
| R1 | F8 | TP 12 | P3 [00:14:51] "puoi inserire il numero del tuo treno"; concept 41 | `[weak]` |
| R2 | F8, F1 | TP 12, TP 10 | F8 "when it will reach my stop"; F1 "changes trains at Mestre"; concept 11 needs the trip's end to find another way | `[weak]` |
| R3 | F1 | TP 10 | P2 Pt.2 [00:06:15] "se vedo che mezz'ora di ritardo"; concept 3; "the commuter keeps their own threshold" (concept) | only P2 states a threshold |
| R4 | F1 | TP 10 | F1 "office-day commuter": the train is not taken every day | `[open]` |

## Verifiability pass

| rule | how it fails | what is missing | what is uncheckable | severity |
|---|---|---|---|---|
| R1 | A commuter who takes different trains on different days (P4 in the concept's assumptions) saves one and is warned about the wrong one on other days. | Whether more than one train can be saved: written "unspecified". | Nothing. | `[fixable]` |
| R2 | The commuter who changes at Mestre is never told about the second train. | The second leg is out of scope by choice; the rule says so. | Nothing. | `[note]` |
| R3 | A commuter without a number in mind (P6 calls ten minutes "not excessive", a judgement, not a limit) cannot finish the set-up. | What happens if the commuter does not know their limit. | Nothing. | `[fixable]` |
| R4 | The warning fires on a day off, or stays silent on a working day, depending on the [open] choice. | The choice itself. | Nothing until it is made. | `[fixable]` |

## Assumptions and open questions

- **There is one usual train to save.** P4 takes either of two trains depending on her timetable (concept, Assumptions). Test: ask each participant how many different trains they take in a week.
- **A commuter sets a threshold.** Only P2 states one. Test: ask P3, P5 and P6 at what delay they would change plans, and whether they would set it in advance.
- **The commuter knows the train's number.** P3 does; nothing shows P2 or P6 do. Choosing the train by stop and time instead was not traced and is not specified. Test: ask P2 and P6 how they name their train.
- **Editing and removing the set-up** have no rule: no story asks for them. Test: whether the prototype needs them at all.
- **[open] choices:** R3 limit of zero; R4 which days.
