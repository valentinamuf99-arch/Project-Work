---
title: "Specification 03 · Another way to make the trip: the warning comes with the next workable way for the same trip, trains first"
date: 2026-11-02
activity: desk-research
source: "Concept document 05-Ideation/2026-10-26-05-concept-ai.md (concept 11, verdict dropped), user story F1 in 04-Synthesis/2026-10-23-03-user-stories-ai.md, with the features, touchpoints, How-Might-We and gaps notes; written on 2026-11-05 following 2026-11-02-specification-instructions.md; other modes, the meaning of 'next', the re-warning and the ticket button added on 2026-11-16 by the author's decision. Interview notes and transcripts not read."
author: "Eugenia Valentina Muffolini"
channel: web
method: functional specification from the concept's reduced set, every rule traced to a story
tags: [train, bus, work-commute, long-delay, cancellation, deciding, alternative]
confidence: low
grade: tertiary
status: draft
related: [../plan.md, 2026-11-02-specification-instructions.md, ../05-Ideation/2026-10-26-05-concept-ai.md, ../05-Ideation/2026-10-26-04-prioritisation-ai.md, ../04-Synthesis/2026-10-23-03-user-stories-ai.md, ../04-Synthesis/2026-10-23-02-features-ai.md, ../04-Synthesis/2026-10-23-01.1-touchpoints-ai.md, ../05-Ideation/2026-10-26-01.1-how-might-we-ai.md, ../01.3-Raw/2026-10-24-gaps-notes.md, ../04-Synthesis/User Stories/2026-10-23-user-story-01-f01-own-train-alert-before-leaving.md, 2026-11-02-spec-01-my-train-and-my-limit.md, 2026-11-02-spec-02-warned-about-my-own-train.md]
---

# Part A · Specification

## Purpose

When the commuter is warned that their usual train is late beyond their limit or cancelled, the warning also shows the next way that still makes the same trip: trains first, then other means of transport such as a bus or a taxi. It gives the commuter something to weigh against waiting, without deciding for them, and a direct way to the ticket. It belongs to the own-train warning, on the same day, before boarding.

## Who it is for

An office-day commuter on an early train from the Bassano line who, if the train is very late, may not go to the station at all and look for another way instead.

## Behaviour

| rule | actor | action | response | conditions and edges | state changes |
|---|---|---|---|---|---|
| R1 | The app | Sends a warning about the saved train (at or beyond the limit, or cancelled). | The app looks for the next way that leaves the commuter's get-on stop and reaches the get-off stop, and shows it with its departure and arrival times and its own delay, if any. Trains come first, from the operator's running information; other means of transport (bus, replacement bus, taxi and the like) come after the trains. | "Next" has two readings, and the app shows both when they differ: the way with the earliest arrival at the get-off stop, and the way with the earliest departure that goes to the same get-off stop. When one way is both, it is shown once. If the saved train, even late, still arrives first, it is shown as the next way. Trains always come before other means of transport, whatever their times. A taxi has no timetable: it is shown as a way, without departure and arrival times. The times of other means of transport are made up for the prototype (author's decision, 2026-11-16), not read from an operator. | An option is shown with the warning. |
| R2 | The app | Finds no train and no other means of transport that reaches the get-off stop on the same day. | The app says that no other way was found for this trip today. It never invents an option. | If no train is found but another means of transport is, the app says that no other train was found and shows the other way. | "No other way found" is shown. |
| R3 | The operator's running information | Changes the way shown after the warning: it is late by the commuter's limit or more, or cancelled. | The app sends another warning, unasked, with the new delay or the cancellation, and the next way found again under R1. | The limit is the one the commuter set for the saved train (see "My train and my limit", R3); the same limit applies to the way shown. A delay under the limit sends no new warning. Same day window as the own-train warning (see "Warned about my own train"). | A new warning has been sent; the option shown is updated. |
| R4 | The commuter | Taps "Buy ticket" next to an option. | The app opens the ticket purchase screen for that option, with the get-on stop, the get-off stop and the departure already filled in. | Only on options that sell a ticket (train, bus). A taxi has no button. | The ticket purchase screen is open. |

## States and data

- **Data read:** the get-on and get-off stops and the limit (from "My train and my limit"); trains between the two stops, their times, delays and cancellations (from the operator's running information); other means of transport between the two stops (times made up for the prototype).
- **States:** no option (no warning yet) → option shown (R1) or no other way found (R2) → option updated with a new warning (R3). From an option shown: ticket purchase screen open (R4).

## What the commuter gets and does

1. **Warning with an option.** Under the warning: "Next way: the 06:xx from [get-on stop], arrives [get-off stop] at 07:xx." If that train is late too, its delay follows on the same line. A "Buy ticket" button sits at the end of the line.
2. **Warning, first to leave and first to arrive differ.** Two lines: "Leaves first: ..." and "Arrives first: ...", each with its times and its "Buy ticket" button.
3. **Warning, the late train still arrives first.** "Next way: your train, arrives [get-off stop] at 07:xx." The commuter sees that waiting is still the quickest.
4. **Warning, other means of transport.** After the trains: "Bus: leaves [stop] at 06:xx, arrives [get-off stop] at 07:xx" with "Buy ticket"; "Taxi" without times and without the button.
5. **Warning, no train found.** "No other train found for this trip today", followed by the other ways, if any.
6. **Warning, nothing found.** "No other way found for this trip today."
7. **The option changes.** The shown way becomes late by the limit or more, or is cancelled: a new warning arrives, with the updated next way (R3).
8. The commuter can read the option, close it, or tap "Buy ticket". The app takes no other action for them.

Appearance constraint: each option fits on one line under the warning, arrival time and "Buy ticket" included. Trains are listed above other means of transport.

## Example scenarios

1. **Cancelled early train.** Saved train from the Bassano line, get off at Mestre, about 06:00. Cancelled. The next train between the same stops leaves unspecified minutes later; the app shows it with its arrival at Mestre and the "Buy ticket" button (step 1).
2. **Late, but still first.** Saved train 30 minutes late. The next train leaves later and arrives after it. The app shows the saved train as the next way (step 3).
3. **Leaves first, arrives later.** A regional train leaves first but stops everywhere; a faster one leaves after and arrives first at Mestre. The app shows both (step 2). Times: unspecified.
4. **No train, a bus.** The operator's running information gives no other train between the two stops that day; a bus reaches the get-off stop. The app says no other train was found and shows the bus (step 5). Times: unspecified.
5. **The next train is cancelled too.** After the warning, the train shown is cancelled. A new warning arrives with the next way found again (step 7).
6. **Nothing found.** No train and no other means of transport between the two stops that day. The app says so (step 6).

## Acceptance criteria

- Given a warning about the saved train, when another train between the same two stops arrives earlier, then the app shows that train with departure and arrival times. (R1)
- Given a warning, when the way that leaves first and the way that arrives first are different, then the app shows both. (R1, edge)
- Given a warning, when the saved train still arrives first, then the app shows the saved train as the next way. (R1, edge)
- Given a next way that is itself late, when it is shown, then its delay is shown too. (R1, edge)
- Given trains and other means of transport both found, when they are shown, then the trains come first. (R1)
- Given a taxi as an option, when it is shown, then it has no times and no "Buy ticket" button. (R1, R4, edge)
- Given a warning, when no train reaches the get-off stop that day but a bus does, then the app says no other train was found and shows the bus. (R2, edge)
- Given a warning, when no way at all reaches the get-off stop that day, then the app says no other way was found. (R2)
- Given a way shown, when it becomes late by the commuter's limit or more, or is cancelled, then the app sends a new warning with the next way found again. (R3)
- Given a way shown, when its delay changes but stays under the limit, then the app sends no new warning. (R3, edge)
- Given a train or bus option, when the commuter taps "Buy ticket", then the ticket purchase screen opens with the two stops and the departure filled in. (R4)
- Given any option, when it is shown, then the app does not say whether to take it. (R1)

## Out of scope

- Recommending options or saying whether to go. Listing trains before other means of transport is an order by type, not a recommendation.
- Lifts and car sharing.
- Ways after a change of train (the second leg).
- The ticket purchase screen and the purchase itself (price, payment, the ticket): this part only opens the screen.

## Links to other parts of the app

- **Warned about my own train** triggers this part and shows its result under the warning; R3 follows its re-warning pattern.
- **My train and my limit** gives the two stops and the limit used in R3.
- **Ticket purchase** (out of scope) is opened by R4.

# Part B · Traceability

## User stories

> **F1 · Own-train alert before leaving.** As the office-day commuter who changes trains at Mestre (P2), in the minutes before leaving home at about six in the morning, when his first train, coming from Bassano, may already have built up delay, I want to be told that my own train is late or cancelled, so that I can decide not to go to the station at all and look for another way.

Source: F1 · P2 Pt.2 [00:06:15].

The behaviour comes from F1's "so that" ("look for another way"), carried by concept 11 with its verdict dropped by the author. No feature in the reduced set supplies the way itself (concept, "Evidence for the next workable way"). Other means of transport, the two readings of "next", the re-warning and the ticket button are the author's decision (2026-11-16).

## References

| story | feature | HMW | touchpoints | key quotes | gaps |
|---|---|---|---|---|---|
| F1 | F1 · Own-train alert before leaving `[strong]` (`../04-Synthesis/2026-10-23-02-features-ai.md`) | #1 `[calibrated]`: "threshold or alternative-suggesting concepts all answer it" (`../05-Ideation/2026-10-26-01.1-how-might-we-ai.md`) | TP 10 ⚠C5 | P2 Pt.2 [00:06:15] "o cerco un modo alternativo"; P2 Pt.2.1 [00:07:50] "manca la soluzione alternativa proposta"; P6 [00:11:17] "mi sarei attivata in anticipo con eventuali altre soluzioni magari." Counter-evidence: P2 Pt.2.1 [00:01:34] "non c'è un'alternativa, io so che non c'è un'alternativa e di conseguenza non la cerco" | Concept assumption "There is a workable other way to show" (`../05-Ideation/2026-10-26-05-concept-ai.md`) |

## Rule trace

| rule | story | touchpoint | rests on | marks |
|---|---|---|---|---|
| R1 | F1 | TP 10 | P2 Pt.2 [00:06:15] "o cerco un modo alternativo"; P2 Pt.2.1 [00:07:50]; concept 11 "the next workable way"; other means of transport, trains first, and the two readings of "next": author's decision | concept 11 `[thin]`: no feature in the set behind it; other modes and "first to leave" not in the sources; other modes' times made up |
| R2 | F1 | TP 10 | P2 Pt.2.1 [00:01:34] "non c'è un'alternativa" (counter-evidence, kept as the edge) | |
| R3 | F1 | TP 10 | Edge from TP 44 (the word changes late); limit from "My train and my limit" R3; re-warning: author's decision | not in the sources |
| R4 | F1 | TP 10 | Author's decision | not in the sources |

## Verifiability pass

| rule | how it fails | what is missing | what is uncheckable | severity |
|---|---|---|---|---|
| R1 | P2 knows his route has no alternative (Pt.2.1 [00:01:34]); the option adds nothing for him on the usual route, which is the only route this app saves. | Whether the option is worth showing on a familiar route. That is an idea question, not a writing one: noted, not attacked. | Nothing. | `[note]` |
| R1 | The bus times are made up, so the prototype cannot show whether a bus really makes the trip. | Nothing: made up by choice for the prototype. | Nothing. | `[note]` |
| R1 | P2's own "other way" includes asking someone ("chiedo a qualcuno"); lifts are out of scope. | Nothing: excluded by choice. | Nothing. | `[note]` |
| R2 | None within the rule. | | | `[note]` |
| R3 | The commuter has already bought a ticket for the way that is then cancelled. | What happens to that ticket: outside this part. | Nothing. | `[note]` |
| R4 | The purchase screen is out of scope, so "filled in" is checked only as far as the screen opening. | Nothing: out of scope by choice. | What happens on the purchase screen. | `[note]` |

## Assumptions and open questions

- **There is a workable other way to show.** No feature in the set produces it, and P2 says that on his own route there is none (Pt.2.1 [00:01:34]); he misses a proposed alternative only in a place he does not know (Pt.2.1 [00:07:50]). Test: ask P2 what he actually did on the last morning the first train was late.
- **The operator's running information covers the other trains.** The open-data check was never done.
- **Other means of transport: times made up.** For the prototype the bus times are invented, not read from an operator (author's decision, 2026-11-16). A real product would need the bus operators' data, not checked.
- **Showing both "first to leave" and "first to arrive" helps rather than confuses.** Author's decision. Test: show P2 and P6 the two lines and ask which one they would act on.
- **The commuter wants to buy the ticket from the warning.** Author's decision; P3 travels on a monthly pass and would not need it. Test: ask P2 and P6 how they bought a ticket the last time they took a different train.
- **[open] choices:** none left.
