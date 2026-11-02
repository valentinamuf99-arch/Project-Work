---
title: "Specification 02 · Following my train: my own train stop by stop, and when it will reach my stop"
date: 2026-11-02
activity: desk-research
source: "User story F8 in Synthesis/2026-10-23-03-user-stories-ai.md, with the features, touchpoints, How-Might-We and gaps notes; written following 2026-11-02-specification-instructions.md. Interview notes and transcripts not read."
author: "Eugenia Valentina Muffolini"
channel: web
method: functional specification from user stories, every rule traced to a story
tags: [train, university-commute, vicenza, padova, noticing, understanding, information-source]
confidence: medium
grade: tertiary
status: draft
related: [plan.md, 2026-11-02-specification-instructions.md, Synthesis/2026-10-23-03-user-stories-ai.md, Synthesis/2026-10-23-02-features-ai.md, Synthesis/2026-10-23-01.1-touchpoints-ai.md, Ideation/2026-10-26-01.1-how-might-we-ai.md, 2026-10-24-gaps-notes.md, Specs/2026-11-02-spec-01-warned-about-my-own-train.md]
---

# Specification 02 · Following my train

# Part A · Specification

## Purpose

Before going to the station, the commuter can follow their own train along its line: which stops it has reached, when it arrived and left each one, and when it is expected at the commuter's own stop. It answers a simple question the operator's general information often leaves open: is my train running, and when will it be here?

## Who it is for

A student who commutes by train from Bassano to Padova on a monthly pass. Before leaving for the station, the operator's information does not always say whether her train is running; she wants to see where it is on its way and when it will reach her stop.

## Behaviour

- **R1.** When the commuter opens their own train (the train saved in spec 01, or a train they look up by its number), the app shows every stop of the run in order, from the first to the last.
- **R2.** For each stop already passed, the app shows the scheduled time, the actual arrival time and the actual departure time.
- **R3.** For each stop still ahead, the app shows the scheduled time and the expected time, worked out from the delay at the last stop passed.
- **R4.** The app marks the commuter's own stop and shows, at the top, the expected time the train will reach it.
- **R5.** The app shows the last stop the train has reached and when, as the train's position. It does not show a position between stops.
- **R6.** When the train has not yet started its run, the app says "not started yet" and the scheduled time at the first stop.
- **R7.** When the scheduled departure from the first stop has passed and the train shows neither departed nor cancelled, the app says that its state is not settled, as in spec 01.
- **R8.** When the run is cancelled, completely or from a given stop, the app marks the stops that will not be served.
- **R9.** The app always shows the time of the last update.

## States and data

Information needed:

- The train: its number, its stops in order, the scheduled time at each. From the operator's timetable.
- The commuter's stop. From "my train" in spec 01, or chosen by the commuter when looking up a train by number.
- The actual arrival and departure at each stop passed. From the operator's running information.

States of the run: not started, running (last stop reached), not settled, cancelled (whole or part), arrived at its last stop.

Each stop is one of: passed (with actual times), next, ahead (with expected time), not served.

## What the commuter sees and does

**Normal path**

1. From the warning in spec 01, or from the home view, the commuter opens "my train".
2. The app shows, at the top: "Expected at Padova 13:52 (+6 min)" and "Last stop: left Castelfranco Veneto 13:12".
3. Below, the list of stops. Passed stops show "arrived 13:08, left 13:12". Stops ahead show scheduled and expected time. The commuter's stop is highlighted.
4. The commuter can look up another train by its number and pick their stop on it.

**Variants**

- **No problem.** Expected times match scheduled times; the header says "On time".
- **Delay.** Expected times ahead are shifted by the current delay; the header shows the delay in minutes.
- **Not started yet.** Header: "Not started yet. Scheduled from Bassano at 12:20."
- **Not settled.** Header: "Not left Bassano and not cancelled. State not settled yet."
- **Cancelled from a stop.** Header: "Cancelled from Castelfranco Veneto." Stops after it are shown as not served.
- **Information missing or old.** Header: "No news since 13:12." Expected times are shown as uncertain.

## Example scenarios

1. **Mid-day check.** The train from Bassano del Grappa to Padova. At 13:15 the commuter opens it. Passed: Bassano del Grappa (left 12:38), Castelfranco Veneto (arrived 13:08, left 13:12). Ahead: Camposampiero (scheduled 13:24, expected 13:30), Padova (scheduled 13:46, expected 13:52). Header: "Expected at Padova 13:52 (+6 min)".
2. **Not started.** At 12:10 the same train shows "Not started yet. Scheduled from Bassano at 12:20."
3. **Part cancellation.** The train is cancelled from Castelfranco Veneto. Padova is marked not served; the header says so.

## Acceptance criteria

- Given a saved train, when the commuter opens it, then all its stops are listed in order. (R1)
- Given a stop the train has passed, when the list is shown, then that stop shows scheduled, actual arrival and actual departure time. (R2)
- Given a stop ahead and a current delay, when the list is shown, then that stop shows its scheduled and expected time. (R3)
- Given the commuter's stop, when the train is opened, then the header shows the expected time at that stop. (R4)
- Given a running train, when it is opened, then its position is the last stop reached with its time. (R5)
- Given a train before its first departure, when opened, then it shows "not started yet". (R6)
- Given a train past its first scheduled departure with no state, when opened, then it shows "not settled". (R7)
- Given a partly cancelled run, when opened, then the stops not served are marked. (R8)
- Given any view of the train, when shown, then the time of the last update is visible. (R9)

## Out of scope

- Messages sent unasked: spec 01.
- Position between stops (a map): no story asks for it.
- Other trains at the commuter's station: no story asks for it.
- The reason for the delay: spec 05.

## Links to other parts of the app

- **Warned about my own train (spec 01):** gives "my train" and the commuter's stop; its messages open this view. Shares the "not settled" state.
- **Why it is late, and for how long (spec 05):** the reason line can be shown in the header when known.

# Part B · Traceability

## User stories

**F8 · Own train, stop by stop**

As the student who commutes from Bassano to Padova on a monthly pass (P3), before going to the station, when the Trenitalia app does not say whether her train is running, I want to follow my own train stop by stop in the operator's own channel, so that I know when it will reach my stop.

Source: F8 · `Notes/2026-10-07-interview-lorena-tonuzi.md` · [00:13:55] "Non sempre il... L'app di Trenitalia o il sito dice se il treno c'è o meno."; [00:14:51] "dice arrivato a Vicenza alle 13.08, ripartito alle 13.12, quindi sai quando arriverà quella successiva"

**Why alone.** It is the only story that asks to follow the train on its way. F3's limbo state (spec 01) appears here as a state of the run, not as a second story.

## References

| story | feature | HMW | touchpoints | key quotes | gaps |
|---|---|---|---|---|---|
| F8 | F8 · Own train, stop by stop `[weak]` (`Synthesis/2026-10-23-02-features-ai.md`) | #7 (`Ideation/2026-10-26-01.1-how-might-we-ai.md`) | TP 12, TP 14 (`Synthesis/2026-10-23-01.1-touchpoints-ai.md`) | P3 [00:14:51]; P2 Pt.2.1 [00:14:02] "il tracking non è via GPS ma è sempre via le stazioni, cioè ti dice l'ultima stazione che raggiunto quando"; REV [IMG_2383] "l'aggiornamento in tempo reale è sempre sbagliato" | TP 12 rests on P3 alone; TP 14 on reviewers only. HMW note: the "so that" restates the capability, thin. |

## Rule trace

| rule | story | rests on | mark |
|---|---|---|---|
| R1 | F8 | "follow my own train stop by stop"; P3 [00:14:51] "puoi inserire il numero del tuo treno" | |
| R2 | F8 | P3 [00:14:51] "arrivato a Vicenza alle 13.08, ripartito alle 13.12" | |
| R3 | F8 | P3 [00:14:51] "quindi sai quando arriverà quella successiva" | |
| R4 | F8 | "so that I know when it will reach my stop" | |
| R5 | F8 | P2 Pt.2.1 [00:14:02] "ti dice l'ultima stazione che raggiunto quando" (F8 evidence) | |
| R6 | F8 | P3 [00:13:55] "dice se il treno c'è o meno" | `[thin]` |
| R7 | F8 | P2 Pt.2.1 [00:12:55] (F8 evidence, story F3) | |
| R8 | F8 | P3 [00:13:55] "se il treno c'è o meno" | `[thin]`: part cancellation is not in any quote |
| R9 | F8 | REV [IMG_2383] "l'aggiornamento in tempo reale è sempre sbagliato" | `[thin]`: reviewers only |

## Assumptions and open questions

- **The "so that" is thin.** Knowing when the train reaches her stop restates the capability; no decision P3 would take with that time is recorded (HMW note). Ask P3 what she does with the time.
- **The story names a channel** ("in the operator's own channel"). This spec keeps it inside the app; whether it must be the operator's own app is not settled.
- **Accuracy.** Reviewers say real-time information is often wrong (REV [IMG_2383], TP 14). The spec shows the time of the last update; it does not fix accuracy.
- **Scenario 1 route.** The story says Bassano to Padova; the quote's times (13:08, 13:12) are at Vicenza, on another trip. The scenario reuses the times on the Bassano to Padova line; stops and times are illustrative, not checked against the timetable.
