---
title: "Specification 05 · Why it is late, and for how long: the reason and the expected length of a delay or a stop, at the station and on board"
date: 2026-11-02
activity: desk-research
source: "User stories F9 and F11 in Synthesis/2026-10-23-03-user-stories-ai.md, with the features, touchpoints, How-Might-We and gaps notes; written following 2026-11-02-specification-instructions.md. Interview notes and transcripts not read."
author: "Eugenia Valentina Muffolini"
channel: web
method: functional specification from user stories, every rule traced to a story
tags: [train, padova, monselice, venezia, university-commute, work-commute, long-delay, understanding, uncertainty, information-source, waiting]
confidence: medium
grade: tertiary
status: draft
related: [plan.md, 2026-11-02-specification-instructions.md, Synthesis/2026-10-23-03-user-stories-ai.md, Synthesis/2026-10-23-02-features-ai.md, Synthesis/2026-10-23-01.1-touchpoints-ai.md, Ideation/2026-10-26-01.1-how-might-we-ai.md, 2026-10-24-gaps-notes.md, Specs/2026-11-02-spec-01-warned-about-my-own-train.md, Specs/2026-11-02-spec-06-what-still-gets-me-home.md]
---

# Specification 05 · Why it is late, and for how long

# Part A · Specification

## Purpose

When a train is late at the station, or stopped on the line, the service tells the people waiting or on board why, and how long the delay or the stop is expected to last. With the reason and the expected length, the commuter can judge whether the delay is passing or will grow, and act in time. The same reason line appears on the station departure board, for people who do not use the app, and in the app.

## Who it is for

- A student from Monselice who uses no app. At Padova station after her six o'clock lesson she finds on the board that her usual train is late, and wants to know why, to judge whether the delay is temporary or will grow.
- A commuter who chains boat, train and bus from the Lido di Venezia. Late in the evening, her train home stops near Padova, moves a little and stops again, with no explanation. She wants to know why and for how long, to work out what to do instead of panicking.

## Behaviour

- **R1.** When a train is late or stopped, the service gives one reason line: the cause in plain words (for example "fault on the line between Padova and Vicenza", "train waiting for a late connecting train", "earlier train broken down ahead").
- **R2.** The reason line appears in three places with the same wording: on the station departure board next to the train, in the app for that train, and in any warning about that train (spec 01).
- **R3.** With the reason, the service gives the expected length: the expected departure time at the station, or, on board, the expected time the train will move again.
- **R4.** The service says whether the delay is growing, steady or shrinking, from the last updates.
- **R5.** When the reason is not known, the service says "Reason not known yet" and does not leave the line empty. When the expected length is not known, it says "No restart time yet".
- **R6.** When a train has been stopped on board for a set time with no new information, the app sends an update anyway, saying that nothing has changed and when the next update is expected.
- **R7.** When the reason or the expected length changes, the board and the app update together, and the app tells the commuters following that train.

## States and data

Information needed:

- The train, its current delay or stop, and its position. From the operator's running information.
- The cause of the delay or stop. From the operator.
- The expected departure or restart time. From the operator.
- The recent history of the delay (last values), to tell growing from steady.

States of the reason: not known yet; known. States of the length: not known; expected time given; changed since last time.

## What the commuter sees and does

**At the station (board, no app)**

1. The commuter looks at the departure board. Next to her train: "18:09 Monselice · +20 min · Fault on the line south of Padova · expected 18:29 · delay growing".
2. If the reason is not known: "18:09 Monselice · +20 min · Reason not known yet".

**In the app**

1. The commuter opens her train. Under the delay: the reason line, the expected time, and "growing / steady / shrinking".
2. If she follows the train, every change is sent to her.

**On board**

1. The train stops. Within a few minutes the commuter's app shows: "Stopped near Padova. Reason: signal fault ahead. Expected to move at 22:40 (in about 15 minutes)."
2. If the stop goes on with no news: "Still stopped. No new information. Next update by 22:50."
3. When the train moves: "Moving again. Now 25 minutes late."

**Variants**

- **No problem.** No reason line; the board shows the train on time.
- **Delay, reason known.** As above.
- **Reason not known.** "Reason not known yet" in every place.
- **Length not known.** "No restart time yet."
- **Information changes.** "Update: expected to move at 22:55 (was 22:40). Delay growing."
- **Cancellation.** The reason line stays, and the commuter is pointed to spec 06 for what still gets them home.

## Example scenarios

1. **Board at Padova, 18:00.** The 18:09 to Monselice is 20 minutes late. Board: "Fault on the line south of Padova · expected 18:29 · delay growing". At 18:10 the delay is 35 minutes; board and app show "expected 18:44 · delay growing". The commuter decides to call home and look for another way.
2. **Stopped near Padova, 22:25.** The train home stops, moves, stops again. 22:27: "Stopped near Padova. Reason: signal fault ahead. Expected to move at 22:40." 22:40: "Still stopped. No new information. Next update by 22:50." 22:46: "Moving again. Now 25 minutes late."
3. **No reason given.** A train is 15 minutes late with no cause from the operator. Board and app: "Reason not known yet · expected 07:55 · steady".

## Acceptance criteria

- Given a late or stopped train with a known cause, when shown, then one reason line in plain words is given. (R1)
- Given a reason line, when shown, then the board, the app and any warning use the same wording. (R2)
- Given a late or stopped train, when shown, then the expected departure or restart time is given with the reason. (R3)
- Given at least two delay values, when shown, then the trend (growing, steady, shrinking) is stated. (R4)
- Given an unknown cause or length, when shown, then "Reason not known yet" or "No restart time yet" appears, never an empty line. (R5)
- Given a train stopped with no new information for the set time, when that time passes, then the app sends a "nothing has changed" update with the next update time. (R6)
- Given a change in the reason or length, when it happens, then board and app update together and followers are told. (R7)
- Given a train on time, when shown, then no reason line appears. (variant: no problem)

## Out of scope

- Deciding for the commuter whether to wait or leave.
- Alternatives to the train: spec 06.
- Explaining delays on trains the commuter does not follow, in the app (the board shows all trains).
- Announcements over the loudspeaker: not covered by the stories.

## Links to other parts of the app

- **Warned about my own train (spec 01):** includes the reason line in its warning.
- **Following my train (spec 02):** shows the reason line in the train's header.
- **What still gets me home (spec 06):** opened when the expected length makes the trip home doubtful or the train is cancelled.

# Part B · Traceability

## User stories

**F9 · The reason, on the board**

As the student from Monselice who uses no app (P6), at Padova station after her six o'clock lesson, finding on the board that her usual train is late, I want the board to give the reason for the delay, so that I can judge whether it is temporary or likely to grow, and turn to another solution in time if it grows.

Source: F9 · `Notes/2026-10-09-interview-benedetta-rossi.md` · [00:05:02] "avevo il treno delle 6.09, che è quello che prendo di solito, e era... Siamo arrivati in stazione, oltre a essere in ritardo"; [00:11:04] "Capire se è anche una cosa magari temporanea o che si può eventualmente prolungare e quindi dopo creare un ritardo più ampio."; [00:11:17] "se magari appunto il ritardo si sarebbe prolungato, mi sarei attivata in anticipo con eventuali altre soluzioni magari."

**F11 · Why it is stopped, and for how long**

As the commuter who chains boat, train and bus from the Lido di Venezia (P1), on the train home stopped near Padova, moving a little and stopping again with no explanation, I want to be told why it is stopped and how long it is expected to stay, so that I can work out what to do instead of panicking late in the evening.

Source: F11 · `Notes/2026-10-07-interview-lucrezia-gradi.md` · [00:10:02] "Eravamo appunto a Padova e vediamo che il treno sta fermo. Va va un po' più avanti e poi si ferma di nuovo."; [00:16:19] "fammi capire qual è il problema, qual è la tempistica"; [00:10:42] "Io non sapevo le motivazioni, non sapevo niente, infatti lì per lì ho un attimo panicato perché ho detto che cazzo faccio, era era tardi." Caveat ⚠C2 from the features note: P5 [00:07:51] says on-board announcements do give a restart time.

**Why together.** Both ask the service for the reason and the expected length of a delay, so that the commuter can judge it and act. F9 adds the station board and the commuter without an app; F11 adds the train stopped on the line and the expected restart time.

## References

| story | feature | HMW | touchpoints | key quotes | gaps |
|---|---|---|---|---|---|
| F9 | F9 · The reason, on the board `[strong]` (`Synthesis/2026-10-23-02-features-ai.md`) | #8 (`Ideation/2026-10-26-01.1-how-might-we-ai.md`) | TP 23 ⚠C1, TP 28 ⚠C3 ⚠C4 (`Synthesis/2026-10-23-01.1-touchpoints-ai.md`) | P6 [00:11:00] "La motivazione magari."; P6 [00:11:04]; P6 [00:11:38] "in un luogo in cui tutti comunque passano [...] sarebbe utile che ci siano tutte le informazioni per tutte le persone" | `[strong]` breaks the features note's own rule (⚠ on both touchpoints). The story's value is general, not tied to the 18:09 day, when she considered no alternative ([00:06:24]) (`2026-10-24-gaps-notes.md`). |
| F11 | F11 · Why it is stopped, and for how long `[strong]` | #9 | TP 37 ⚠C2, TP 38, TP 40, TP 41 ⚠C3 | P1 [00:16:19]; P1 [00:10:42]; P4 [00:06:18] "non era uscito nessun avviso del fatto del guasto di linea, perché appunto mi è stato riferito dal capotreno dopo un po' di chiamate"; P4 [00:14:57] "Neanche dallo speaker niente" | ⚠C2: P5 says restart times are announced on board. `[strong]` breaks the note's own rule (TP 37 carries ⚠C2). |

## Rule trace

| rule | story | rests on | mark |
|---|---|---|---|
| R1 | F9, F11 | P6 [00:11:00] "La motivazione magari."; P1 [00:16:19] "qual è il problema" | |
| R2 | F9 | "I want the board to give the reason"; P6 [00:11:38] "per tutte le persone" | the same line in the app: `[thin]`, from F11 (on board, an app user) |
| R3 | F11 | "how long it is expected to stay"; P1 [00:16:19] "qual è la tempistica" | at the station: `[thin]`, from F9's "temporary or likely to grow" |
| R4 | F9 | P6 [00:11:04] "temporanea o che si può eventualmente prolungare" | `[thin]`: she asks to judge it, not for a trend line |
| R5 | F11 | P1 [00:10:42] "Io non sapevo le motivazioni, non sapevo niente" | |
| R6 | F11 | P1 [00:10:02] "sta fermo. Va va un po' più avanti e poi si ferma di nuovo"; P4 [00:14:57] "Neanche dallo speaker niente" | `[thin]`: the interval is not in any quote |
| R7 | F9 | P6 [00:11:17] "se magari appunto il ritardo si sarebbe prolungato" | |

## Assumptions and open questions

- **The board is not the app.** F9 asks for the reason on the station board, for a commuter with no app. The prototype can show the board as a view; a real board is outside the app.
- **The cause is known in time.** P1 never learned it ([00:10:42]); P4 learned it from the conductor after about an hour and a half ([00:06:18]). Whether the operator has the cause early is untested (open-data check, gaps note).
- **The trend is meaningful.** Telling growing from steady needs several updates; early in a delay it may mislead.
- **⚠C2.** P5 hears restart times on board. The need may depend on the line or the train.
- **P6's value.** The gaps note says her wish is general and that on the 18:09 day she considered no alternative. Ask her what she would have done with the reason.
