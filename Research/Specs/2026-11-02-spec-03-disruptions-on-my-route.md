---
title: "Specification 03 · Disruptions on my route: only the notices that touch my route, strikes told days ahead with my guaranteed trains"
date: 2026-11-02
activity: desk-research
source: "User stories F4 and F5 in Synthesis/2026-10-23-03-user-stories-ai.md, with the features, touchpoints, How-Might-We and gaps notes; written following 2026-11-02-specification-instructions.md. Interview notes and transcripts not read."
author: "Eugenia Valentina Muffolini"
channel: web
method: functional specification from user stories, every rule traced to a story
tags: [train, padova, castelfranco, work-commute, university-commute, strike, noticing, warning, information-source, trust]
confidence: medium
grade: tertiary
status: draft
related: [plan.md, 2026-11-02-specification-instructions.md, Synthesis/2026-10-23-03-user-stories-ai.md, Synthesis/2026-10-23-02-features-ai.md, Synthesis/2026-10-23-01.1-touchpoints-ai.md, Ideation/2026-10-26-01.1-how-might-we-ai.md, 2026-10-24-gaps-notes.md, Specs/2026-11-02-spec-01-warned-about-my-own-train.md, Synthesis/User Stories/2026-10-23-user-story-03-f04-strike-notice-for-own-route.md, Synthesis/User Stories/2026-10-23-user-story-04-f05-notices-filtered-to-own-route.md]
---

# Specification 03 · Disruptions on my route

# Part A · Specification

## Purpose

The app shows the commuter only the official disruption notices that touch their own route, regional trains included, and leaves out the rest of the network. When a strike is called on their route, it tells them days ahead, and says which of their trains are guaranteed and in which hours trains may not run. The commuter learns this from the operator's own word, not from news or social channels.

## Who it is for

- An office-day commuter who changes trains at Mestre. When he opens the app, the only notice is a small banner of faults across the whole country, which he ignores; he finds news elsewhere.
- A student who rides home from Padova in the evening. She learned of a long strike only from the conductor the day before, found nothing in the app, and then checked which of her trains was guaranteed on the operator's website.

## Behaviour

- **R1.** The app knows the commuter's route: the stations and lines of "my train" (spec 01), plus any other route the commuter adds (for example the trip home).
- **R2.** When the operator publishes a disruption notice (fault, line closure, works, strike), the app shows it to the commuter only if it touches a station or a line of their route.
- **R3.** When a notice does not touch the commuter's route, the app does not show it in their view.
- **R4.** Each notice shown says, in plain words, what is affected on the commuter's route, from when to when, and which of their trains are hit.
- **R5.** When a strike is announced that touches the commuter's route, the app tells them unasked, as soon as the operator publishes it, and again the day before.
- **R6.** A strike notice lists the commuter's own trains on the strike day, each marked guaranteed or not guaranteed, and states the hours in which trains are not guaranteed to run.
- **R7.** When the list of guaranteed trains changes, the app sends an update.
- **R8.** When there is no disruption on the route, the app says so explicitly ("No disruption on your route"), with the time of the last check.
- **R9.** Every notice names the operator as its source.

## States and data

Information needed:

- The commuter's route: stations and lines. From "my train" (spec 01) and any route the commuter adds.
- Disruption notices: what, where (stations, lines), from when to when, which trains. From the operator's published notices.
- For strikes: the strike day, the hours with no guarantee, the list of guaranteed trains. From the operator's published strike information.

States of the route view: no disruption; disruption today; strike announced (days ahead); strike today; information not available.

## What the commuter sees and does

**Normal path (a strike is called)**

1. Four days ahead, the commuter receives a message: "Strike on Friday 14 November on your route (Padova to Castelfranco Veneto). Your 18:05 is guaranteed. Your 19:05 is not guaranteed. Trains are not guaranteed between 09:00 and 17:00 and after 21:00."
2. Opening it shows the commuter's trains that day, each labelled guaranteed or not, and the hours without guarantee.
3. The day before, a reminder with the same content. On the day, the route view shows the strike first.

**Daily route view**

1. The commuter opens the route view. It lists only notices on their route, newest first, each with what, where, when and which of their trains.
2. A notice elsewhere in the country never appears.

**Variants**

- **No problem.** "No disruption on your route. Checked 07:40."
- **Disruption today.** "Line fault between Padova and Vicenza until 10:00. Your 08:12 may be delayed."
- **Information changes.** "Update: your 19:05 is now guaranteed."
- **Information missing.** "We can't get the operator's notices right now. Last checked 06:10."

## Example scenarios

1. **Strike days ahead.** The commuter's evening route is Padova to Castelfranco Veneto with two usual trains, 18:05 and 19:05. A strike is announced on Monday for Friday. Monday: message with 18:05 guaranteed, 19:05 not guaranteed. Thursday: reminder. She takes the 18:05.
2. **Noise filtered out.** A fault at Palermo and works near Milano are published. The commuter whose route is Bassano to Venezia Mestre sees "No disruption on your route".
3. **Fault on the route.** A fault between Venezia Mestre and Padova is published at 07:20. The commuter's route view shows it with the trains it hits; his own train's state is also warned by spec 01.

## Acceptance criteria

- Given a commuter with a saved train, when the app is set up, then the route includes the stations and lines of that train, and the commuter can add another route. (R1)
- Given a notice on a line of the commuter's route, when published, then it appears in their route view. (R2)
- Given a notice elsewhere, when published, then it does not appear in their route view. (R3)
- Given a notice shown, when read, then it says what, where on the route, from when to when, and which of the commuter's trains. (R4)
- Given a strike on the route, when published, then the commuter is told unasked, and reminded the day before. (R5)
- Given a strike notice, when read, then each of the commuter's trains that day is marked guaranteed or not, and the hours without guarantee are stated. (R6)
- Given a change to the guaranteed list, when published, then an update is sent. (R7)
- Given no notice on the route, when the view is opened, then it says "No disruption on your route" with the time of the last check. (R8)
- Given any notice, when shown, then it names the operator as its source. (R9)
- Given notices unavailable, when the view is opened, then it says so with the last check time. (variant: information missing)

## Out of scope

- The minute-by-minute state of the commuter's train: spec 01 and 02.
- Strikes off the commuter's route.
- Unofficial sources (news, social channels): the stories ask for the operator's own notice.
- Advice on which train to take: the commuter chooses.

## Links to other parts of the app

- **Warned about my own train (spec 01):** gives "my train" for the route; a disruption that hits "my train" today is warned there.
- **What still gets me home (spec 06):** can be opened from a strike notice when no guaranteed train fits.

# Part B · Traceability

## User stories

**F4 · Strike notice for one's own route**

As the student who rides home from Padova in the evening (P4), the day before a long strike, having heard it only from the conductor on board and finding nothing about it in the app, I want to be told in the app, days ahead, that a strike hits my route and which of my trains are guaranteed, so that I can take a train that is guaranteed and stay clear of the window when trains may not run.

Source: F4 · `Notes/2026-10-07-interview-greta-tonuzi.md` · [00:11:38] "il giorno 1º che succedesse questo sciopero [...] abbiamo sentito proprio la voce del... Insomma del capotreno"; [00:13:14] "Dall'app no, ma dal sito sì."; [00:12:01] "il mio treno era garantito. Okay. Quindi ho preso il treno 1º."; [00:12:23] "c'è quella specie di lasso di tempo dove non è garantito che ci sia appunto il treno"

**F5 · Notices filtered to one's route**

As the office-day commuter who changes trains at Mestre (P2), when he opens the app and the only notice is a small banner of faults across the whole network, I want to see only the disruptions that touch my own route, regional trains included, so that I can rely on an official notice instead of ignoring it and turning to news channels that are not made for me.

Source: F5 · `Notes/2026-10-07-interview-matteo-galvagni.md` · Pt.2 [00:09:40] "C'è un trafiletto piccolo piccolo che a volte appare però tu devi aprire l'app"; Pt.2.1 [00:00:00] "non me ne frega nulla se a Palermo c'è un guasto"; Pt.2.1 [00:11:46] "Quindi non è una roba fatta apposta per me, è semplicemente il meglio che al momento c'è". Value partly from an observation: the note records that he does not read the banner and looks for information elsewhere (unit "Service notices are generic, so he ignores them").

**Why together.** Both ask the app to deliver the operator's disruption notices for the commuter's own route only. F5 sets the filter and the daily view; F4 adds the strike, told days ahead, with the guaranteed trains.

## References

| story | feature | HMW | touchpoints | key quotes | gaps |
|---|---|---|---|---|---|
| F4 | F4 · Strike notice for one's own route `[strong]` (`Synthesis/2026-10-23-02-features-ai.md`) | #4 (`Ideation/2026-10-26-01.1-how-might-we-ai.md`) | TP 17, TP 18, TP 19 (?) (`Synthesis/2026-10-23-01.1-touchpoints-ai.md`) | P4 [00:12:01]; P4 [00:12:23]; P2 Pt.2 [00:07:12] "non sempre sono indicati nell'applicazione, sicuramente non ti arriva una notifica"; P5 [00:08:37] "sui social escono gli annunci [...] Tipo Instagram" | The conductor's on-board strike announcement (P4 [00:11:38]) has no touchpoint row, so the story does not trace back through a touchpoint (`2026-10-24-gaps-notes.md`). |
| F5 | F5 · Notices filtered to one's route `[strong]` | #5 | TP 16 | P2 Pt.2 [00:09:40]; Pt.2.1 [00:00:00]; P4 [00:13:24] "nella parte di infomobilità che c'è nell'app non esce niente" | HMW note: the "so that" rests partly on an observation, thin. |

## Rule trace

| rule | story | rests on | mark |
|---|---|---|---|
| R1 | F5 | "the disruptions that touch my own route" | adding a second route: `[untraced]`; F4's route is the trip home, F5's the outbound, so both directions are implied but not asked |
| R2 | F5 | Pt.2.1 [00:00:00] "non me ne frega nulla se a Palermo c'è un guasto" | |
| R3 | F5 | same | |
| R4 | F5 | Pt.2.1 [00:11:46] "non è una roba fatta apposta per me" | `[thin]` |
| R5 | F4 | "told in the app, days ahead"; P4 [00:11:38]; P2 Pt.2 [00:07:12] "sicuramente non ti arriva una notifica" | reminder the day before: `[untraced]` |
| R6 | F4 | P4 [00:12:01] "il mio treno era garantito"; P4 [00:12:23] "quella specie di lasso di tempo dove non è garantito" | |
| R7 | F4 | | `[untraced]` |
| R8 | F5 | P4 [00:13:24] "nella parte di infomobilità che c'è nell'app non esce niente" | `[thin]`: the quote shows an empty section, not the wish for an explicit "no disruption" |
| R9 | F5 | "rely on an official notice instead of [...] news channels"; P5 [00:08:37]; P2 Pt.2 [00:07:59] "solo proprio cercando su Google" | |

## Assumptions and open questions

- **The guaranteed list is known days ahead.** P4 found it on the website the day before. When it is published was not checked.
- **"Days ahead" has no number.** How many days ahead P4 needed the notice is not in the story.
- **Route as stations and lines.** P2 speaks of "my route" and regional trains; how a route is described by commuters was not asked.
- **F5's value is thin.** Ask P2 whether a filtered notice would make him stop checking other channels.
- **Works.** P5 asks for engineering-works notices ([00:12:03]), dropped in the features note for lack of a touchpoint (gaps note). They fit R2 but have no story.
