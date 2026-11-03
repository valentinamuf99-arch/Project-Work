---
title: "Specification 04 · Paying at the last minute: told before trying that the app will not sell, and which way of paying still works"
date: 2026-11-02
activity: desk-research
source: "User story F6 in Synthesis/2026-10-23-03-user-stories-ai.md, with the features, touchpoints, How-Might-We and gaps notes; written following 2026-11-02-specification-instructions.md. Interview notes and transcripts not read."
author: "Eugenia Valentina Muffolini"
channel: web
method: functional specification from user stories, every rule traced to a story
tags: [train, rovigo, padova, university-commute, information-source]
confidence: medium
grade: tertiary
status: draft
related: [plan.md, 2026-11-02-specification-instructions.md, Synthesis/2026-10-23-03-user-stories-ai.md, Synthesis/2026-10-23-02-features-ai.md, Synthesis/2026-10-23-01.1-touchpoints-ai.md, Ideation/2026-10-26-01.1-how-might-we-ai.md, 2026-10-24-gaps-notes.md, Specs/2026-11-02-spec-08-is-my-ticket-valid.md, Synthesis/User Stories/2026-10-23-user-story-05-f06-last-minute-purchase-path.md]
---

# Specification 04 · Paying at the last minute

# Part A · Specification

## Purpose

In the last minutes before a train leaves, the app stops selling single tickets for it. This part tells the commuter so before they try, and points to the way of paying that still works for this train, so they can still travel without going to the ticket counter.

## Who it is for

A student who drives to Rovigo station and takes the train to Padova. Buying a single ticket in the app as her train is about to leave, she is told she cannot buy it and must go to the counter.

## Behaviour

- **R1.** The app knows the cut-off: the number of minutes before departure after which it no longer sells a single ticket for that train.
- **R2.** When the commuter starts buying a single ticket for a train that leaves within the cut-off, the app says, before any payment step, that it cannot sell a ticket for this train any more, and why.
- **R3.** When the commuter starts buying a ticket for a train that leaves just outside the cut-off, the app shows how many minutes are left to buy it in the app.
- **R4.** In both cases (R2, R3), the app names the ways of paying that still work for this train at this station, with a short instruction for each, for example paying with a bank card at the validator when getting on and when getting off.
- **R5.** The app offers to buy a ticket for the next train instead, only as an option.
- **R6.** The app never sends the commuter to the counter as the only option when another way of paying works.

## States and data

Information needed:

- The cut-off before departure. From the operator's sales rules.
- The departure time of the chosen train, including its current delay. From the operator's timetable and running information.
- The ways of paying that work at the departure and arrival stations. From the operator's rules for each station.

States of a purchase: open (time left shown), closing (within a few minutes of the cut-off), closed for this train (other ways shown).

## What the commuter sees and does

**Normal path (inside the cut-off)**

1. The commuter chooses Rovigo to Padova, train at 07:41. It is 07:38.
2. Before any payment step the app says: "The app can't sell tickets for the 07:41 any more (sales close 5 minutes before departure)."
3. Below: "You can still travel on this train: tap your bank card at the validator in Rovigo before boarding, and again at the validator in Padova when you get off."
4. A secondary option: "Buy for the next train (08:10)".

**Variants**

- **No problem.** More than a few minutes left: the purchase proceeds as usual.
- **Closing soon.** "3 minutes left to buy this ticket in the app." The ways of paying still listed below.
- **Train delayed.** If the train is late, the cut-off follows the expected departure, and the app says so: "Your train is 10 minutes late. You can buy until 07:46."
- **No other way of paying at this station.** "At this station the only other way is the ticket counter." Stated plainly.
- **Information missing.** If the station's rules are unknown: "We don't know which ways of paying work at Rovigo."

## Example scenarios

1. **Three minutes to departure.** Rovigo, train to Padova at 07:41, it is 07:38. The app says sales are closed and explains the card at the validator. She taps her card and boards.
2. **Seven minutes to departure.** It is 07:34. The app says "2 minutes left to buy in the app" and lists the card option below. She buys in time.
3. **Delayed train.** Train at 07:41 is 10 minutes late. At 07:40 she can still buy until 07:46; the app says so.

## Acceptance criteria

- Given a train and the cut-off, when the commuter opens its purchase, then the app knows whether sales are open. (R1)
- Given a train within the cut-off, when the commuter starts buying, then the app says sales are closed before any payment step. (R2)
- Given a train just outside the cut-off, when the commuter starts buying, then the minutes left are shown. (R3)
- Given closed or closing sales, when the message is shown, then the other ways of paying at that station are listed with instructions. (R4)
- Given closed sales, when the message is shown, then buying for the next train is offered as an option, not as the main answer. (R5)
- Given a station where another way of paying works, when sales close, then the counter is not shown as the only option. (R6)
- Given a delayed train, when the commuter starts buying, then the cut-off follows the expected departure. (variant: delay)

## Out of scope

- Changing the cut-off itself: a sales rule, not a feature of the app.
- Passes and season tickets.
- Refunds and compensation.

## Links to other parts of the app

- **Is my ticket valid on it? (spec 08):** shares the ticket rules per station and per train.
- **Warned about my own train (spec 01):** gives the current delay used for the cut-off.

# Part B · Traceability

## User stories

**F6 · Last-minute purchase path**

As the student who drives to Rovigo station and takes the train to Padova (P5), in the last minutes before her train leaves, buying a single ticket in the app, I want to be told before I try that the app will no longer sell it and which way of paying still works, so that I can still pay for this train without having to go to the counter.

Source: F6 · `Notes/2026-10-09-interview-anna-baggio.md` · [00:04:39] "tu non puoi fare il biglietto perché dicono che il treno è in partenza imminente, quindi non te lo fanno fare, devi andare proprio allo sportello con la persona."; [00:05:43] "Perché lì non c'è il limite di tempo che lo puoi fare... Lo puoi fare sempre."

**Why alone.** It is the only story about buying a ticket under time pressure.

## References

| story | feature | HMW | touchpoints | key quotes | gaps |
|---|---|---|---|---|---|
| F6 | F6 · Last-minute purchase path `[strong]` (`Synthesis/2026-10-23-02-features-ai.md`) | #6 (`Ideation/2026-10-26-01.1-how-might-we-ai.md`) | TP 7, TP 8, TP 9 (?) (`Synthesis/2026-10-23-01.1-touchpoints-ai.md`) | P5 [00:04:39]; P5 [00:05:43]; P5 [00:05:12] "provo a fare tap and tap"; P2 Pt.2.1 [00:07:50] "non è più possibile acquistare un biglietto dall'applicazione se è antecedente ai 5 minuti dal prossimo treno"; P2 Pt.2.1 [00:09:10] "Provando, dando per scontato che fosse possibile" | Ticketing is out of the brief's scope (`2026-10-24-gaps-notes.md`). The `[strong]` mark breaks the features note's own rule: TP 8 rests on P5 alone, TP 9 is (?). |

## Rule trace

| rule | story | rests on | mark |
|---|---|---|---|
| R1 | F6 | P2 Pt.2.1 [00:07:50] "antecedente ai 5 minuti" | |
| R2 | F6 | "told before I try"; P2 Pt.2.1 [00:09:10] "Provando, dando per scontato che fosse possibile" | |
| R3 | F6 | "told before I try" | `[thin]`: the countdown is a reading of "before I try" |
| R4 | F6 | "which way of paying still works"; P5 [00:05:12], [00:05:43] (tap at the validator) | |
| R5 | none | | `[untraced]` |
| R6 | F6 | "without having to go to the counter"; P5 [00:04:39] | |

## Assumptions and open questions

- **Ticketing is out of the brief.** The brief excludes ticketing; the gaps note asks the brief to say whether these moments are now in. Settle it before building this part.
- **The cut-off follows the delay.** Not checked against the operator's rules; the variant is `[untraced]`.
- **Card at the validator works at Rovigo and Padova.** P5 describes it at Padova and Rovigo ([00:05:21], TP 9); other stations not checked.
- **One participant in the story.** P2 met the same rule but on a different trip; ask him whether the same message would have helped.
