---
title: "Specification 07 · Will my connection wait? Told on a late train whether the next leg will still be there"
date: 2026-11-02
activity: desk-research
source: "User story F16 in Synthesis/2026-10-23-03-user-stories-ai.md, with the features, touchpoints, How-Might-We and gaps notes; written following 2026-11-02-specification-instructions.md. Interview notes and transcripts not read."
author: "Eugenia Valentina Muffolini"
channel: web
method: functional specification from user stories, every rule traced to a story
tags: [train, boat, vicenza, venezia, university-commute, missed-connection, long-delay, understanding, deciding, uncertainty]
confidence: medium
grade: tertiary
status: draft
related: [plan.md, 2026-11-02-specification-instructions.md, Synthesis/2026-10-23-03-user-stories-ai.md, Synthesis/2026-10-23-02-features-ai.md, Synthesis/2026-10-23-01.1-touchpoints-ai.md, Ideation/2026-10-26-01.1-how-might-we-ai.md, 2026-10-24-gaps-notes.md, Specs/2026-11-02-spec-06-what-still-gets-me-home.md, Synthesis/User Stories/2026-10-23-user-story-12-f16-will-the-next-leg-wait.md]
---

# Specification 07 · Will my connection wait?

# Part A · Specification

## Purpose

On a late train, the commuter needs to know before reaching the change whether the next leg, a train or a boat, will still be there. The app tells them whether the connection will be held, missed or is still uncertain, and what comes next if it is missed.

## Who it is for

A student who commutes from Bassano to Padova on a monthly pass. On a late train back from Vicenza, she is about to miss the change at Cittadella for Bassano, and does not know whether she can still get home.

## Behaviour

- **R1.** The app knows the commuter's trip with its change: the first train, the change station, and the next leg (train or boat) with its departure time.
- **R2.** When the first train is late, the app compares its expected arrival at the change station with the next leg's departure, including the time needed to change.
- **R3.** The app tells the commuter one of three states: "Connection holds" (enough time); "Connection will wait" (the operator has confirmed that the next leg will wait); "Connection will be missed" (no time and no confirmation). When none is settled, it says "Not sure yet" and when it will know.
- **R4.** When the connection will be missed, the app gives the next departure of the same leg from the change station, and opens spec 06 for other ways.
- **R5.** The app tells the commuter unasked as soon as the state changes, and at the latest a set number of minutes before arrival at the change station.
- **R6.** When the operator confirms that the next leg is being held, the app says for how long it will wait.

## States and data

Information needed:

- The trip: first train, change station, next leg (train or boat) and its scheduled departure. From "my train" (spec 01) or the commuter.
- The first train's expected arrival at the change station. From the operator's running information.
- The next leg's state and any hold decision. From the operator of the next leg.
- The minimum time to change at that station. From the operator.

States of the connection: holds; will wait (confirmed); not sure yet; will be missed; missed (after arrival).

## What the commuter sees and does

**Normal path (connection will wait)**

1. On the late train, 15 minutes before Cittadella, the commuter receives: "Your connection at Cittadella to Bassano (19:42) will wait for your train, up to 10 minutes."
2. Opening it shows both trains, their expected times and the hold.

**Variants**

- **No problem.** "Connection holds: 6 minutes to change at Cittadella." Sent only if the first train is late.
- **Not sure yet.** "Your train is 12 minutes late. Your connection at Cittadella (19:42) may be missed. We'll know by 19:30."
- **Will be missed.** "You will miss the 19:42 to Bassano at Cittadella. Next one: 20:42." With a link to other ways (spec 06).
- **Boat leg.** "You will miss the 21:10 boat to the Lido at Venezia. Next one: 21:40."
- **Information changes.** "Update: the 19:42 will now wait for your train."
- **Information missing.** "We don't know whether the 19:42 will wait."

## Example scenarios

1. **Held connection.** Train from Vicenza to Cittadella, 12 minutes late. Change at Cittadella for the 19:42 to Bassano. At 19:25 the operator confirms a hold of 10 minutes. The app tells her: "will wait, up to 10 minutes."
2. **Missed connection.** Same trip, 25 minutes late, no hold. At 19:25: "You will miss the 19:42 to Bassano. Next one: 20:42."
3. **Missed boat.** A commuter's train to Venezia Santa Lucia arrives 20 minutes late. The boat to the Lido at 21:10 is missed; the app says the next boat leaves at 21:40.

## Acceptance criteria

- Given a trip with a change, when the app is set up, then the first train, change station and next leg are known. (R1)
- Given a late first train, when its expected arrival changes, then the app compares it with the next leg's departure and the time to change. (R2)
- Given the comparison, when shown, then the state is one of holds, will wait, will be missed or not sure yet, with when it will be known. (R3)
- Given a missed connection, when shown, then the next departure of the same leg is given and other ways can be opened. (R4)
- Given a change of state, when it happens, then the commuter is told unasked, at the latest a set time before arrival at the change. (R5)
- Given a confirmed hold, when shown, then the length of the hold is stated. (R6)
- Given the next leg is a boat, when the connection is missed, then the next boat is given. (variant: boat leg)

## Out of scope

- Asking the operator to hold a train: the app reports, it does not request.
- Connections planned at purchase: no story.

## Links to other parts of the app

- **Warned about my own train (spec 01):** gives the delay of the first train.
- **What still gets me home (spec 06):** opened when the connection is missed.

# Part B · Traceability

## User stories

**F16 · Will the next leg wait?**

As the student who commutes from Bassano to Padova on a monthly pass (P3), on a late train back from Vicenza, about to miss the connection at Cittadella for Bassano, I want to be told whether the next train will still be there, so that I know whether I can still get home to Bassano.

Source: F16 · `Notes/2026-10-07-interview-lorena-tonuzi.md` · [00:18:15] "Dovevo scendere a Cittadella tornando da Vicenza, ma il treno era molto in ritardo e l'avremmo perso sicuramente, quindi non sarei potuta tornare a Bassano."; [00:17:41] "avrebbe chiamato il treno successivo [...] Per far sì che ci aspettasse". Caveat ⚠C4 from the features note: the held connection depended on one conductor.

**Why alone.** It is the only story about a change between two legs.

## References

| story | feature | HMW | touchpoints | key quotes | gaps |
|---|---|---|---|---|---|
| F16 | F16 · Will the next leg wait? `[strong]` (`Synthesis/2026-10-23-02-features-ai.md`) | #15 (`Ideation/2026-10-26-01.1-how-might-we-ai.md`) | TP 42 ⚠C3 ⚠C4, TP 49 (`Synthesis/2026-10-23-01.1-touchpoints-ai.md`) | P3 [00:18:15]; P3 [00:17:41]; P1 [00:12:32] "quando sono arrivata non c'era il battello. Mi dovuto aspettare mezz'ora" | `[strong]` breaks the features note's own rule: TP 42 carries ⚠C3 ⚠C4, TP 49 rests on P1 alone (`2026-10-24-gaps-notes.md`). |

## Rule trace

| rule | story | rests on | mark |
|---|---|---|---|
| R1 | F16 | "the connection at Cittadella for Bassano" | |
| R2 | F16 | P3 [00:18:15] "il treno era molto in ritardo e l'avremmo perso sicuramente" | time to change: `[untraced]` |
| R3 | F16 | "whether the next train will still be there"; P3 [00:17:41] "Per far sì che ci aspettasse" | "not sure yet": `[thin]` |
| R4 | F16 | "so that I know whether I can still get home" | |
| R5 | F16 | "about to miss the connection" | the latest time: `[untraced]` |
| R6 | F16 | P3 [00:17:41] (the conductor held the train) | `[thin]`: hold length not in the quote |
| boat variant | F16 (feature) | P1 [00:12:32] (TP 49), in the F16 feature evidence | `[thin]`: the story is about a train |

## Assumptions and open questions

- **⚠C4: holds depend on people.** P3's connection was held because one conductor called ahead. Whether the operator records a hold in a form the app can read is unknown.
- **The decision to hold is made in time.** Not checked.
- **Boats.** The boat case rests on P1 in the feature's evidence, not on the story. Boat timetables come from another operator.
