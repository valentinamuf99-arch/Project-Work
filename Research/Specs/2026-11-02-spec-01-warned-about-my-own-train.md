---
title: "Specification 01 · Warned about my own train: told unasked, before leaving, whether my train is late or cancelled"
date: 2026-11-02
activity: desk-research
source: "User stories F1 and F3 in Synthesis/2026-10-23-03-user-stories-ai.md, with the features, touchpoints, How-Might-We and gaps notes; written following 2026-11-02-specification-instructions.md. Interview notes and transcripts not read."
author: "Eugenia Valentina Muffolini"
channel: web
method: functional specification from user stories, every rule traced to a story
tags: [train, work-commute, long-delay, cancellation, noticing, understanding, deciding, warning]
confidence: medium
grade: tertiary
status: draft
related: [plan.md, 2026-11-02-specification-instructions.md, Synthesis/2026-10-23-03-user-stories-ai.md, Synthesis/2026-10-23-02-features-ai.md, Synthesis/2026-10-23-01.1-touchpoints-ai.md, Ideation/2026-10-26-01.1-how-might-we-ai.md, 2026-10-24-gaps-notes.md, Specs/2026-11-02-spec-02-following-my-train.md, Specs/2026-11-02-spec-03-disruptions-on-my-route.md, Specs/2026-11-02-spec-05-why-and-for-how-long.md, Specs/2026-11-02-spec-06-what-still-gets-me-home.md]
---

# Specification 01 · Warned about my own train

# Part A · Specification

## Purpose

The app tells a commuter, without being asked, that the train they take is late or cancelled, early enough to change plans before leaving home. When the train's fate is still open, it says so plainly and tells the commuter, as soon as it is settled, whether the train is cancelled or only late. The commuter decides what to do; the app gives the facts.

## Who it is for

- An office-day commuter who leaves home at about six in the morning, whose first train starts further up the line and can build up delay before it reaches his station. He would rather not go to the station at all if the delay is large, and look for another way.
- The same commuter later in the morning, watching a train that shows neither departed nor cancelled, who needs to know which of the two it is, because a short delay and a cancellation with an hour's wait call for different plans.

## Behaviour

- **R1.** When the commuter uses the app for the first time, the app asks for their own train: the departure station, the destination station, the scheduled departure time and the days they travel. The app keeps it as "my train".
- **R2.** When "my train" runs on a travel day, the app watches its state from before the commuter leaves home until its departure from the commuter's station.
- **R3.** When "my train" is late, the app tells the commuter unasked, with the expected delay in minutes at the commuter's station and the new expected departure time.
- **R4.** When "my train" is cancelled, the app tells the commuter unasked that it is cancelled, as a separate kind of message from a delay, and states when the next train on the same route leaves.
- **R5.** When the state of "my train" is not yet known (it shows neither departed nor cancelled), the app says that the state is not settled yet, and does not show it as on time.
- **R6.** When an unsettled train becomes either late or cancelled, the app tells the commuter at once which of the two it is.
- **R7.** When the delay changes after the commuter has been told (it grows, shrinks or becomes a cancellation), the app sends an update that replaces the previous one and says what changed.
- **R8.** When "my train" is on time, the app sends nothing. Its state is still visible if the commuter opens the app.
- **R9.** The app never tells the commuter what to do (go, stay, take another train). It states the facts; links to other options are given by the parts of the app that handle them.

## States and data

Information needed:

- "My train": departure station, destination station, scheduled departure time, travel days. Comes from the commuter (R1).
- The running state of that train today: on time, late with a number of minutes, cancelled, or not settled. Comes from the operator's running information.
- The next train on the same route, for the cancellation message. Comes from the operator's timetable.

States of "my train" on a travel day, and what moves between them:

| from | to | when |
|---|---|---|
| on time | late | the operator reports a delay |
| on time or late | not settled | the scheduled departure has passed and the train shows neither departed nor cancelled |
| not settled | late or cancelled | the operator settles the state |
| late | late (new minutes) | the delay changes |
| any | cancelled | the operator cancels the run |
| any | departed | the train leaves the commuter's station; watching stops for the day |

## What the commuter sees and does

**Set-up (calm day)**

1. The commuter opens the app for the first time. The app asks: "Which train do you take?"
2. The commuter enters departure station, destination, departure time and travel days. The app shows the saved train as a single line, for example "06:12 Bassano to Venezia Mestre, Mon to Fri", and confirms: "We'll tell you if this train is late or cancelled."
3. The commuter can change or delete "my train" at any time.

**Normal path (bad morning, train late)**

1. At home, before leaving, the commuter receives a message on the phone: "Your 06:12 to Venezia Mestre is 30 minutes late. Expected at Bassano 06:42."
2. Opening the message shows the same facts, the time of the last update, and an entry point to follow the train stop by stop (spec 02) and to see other ways to make the trip (spec 06).
3. The commuter decides alone whether to go to the station.

**Variants**

- **No problem.** No message. If the commuter opens the app, "my train" is shown as "On time" with the time of the last update.
- **Cancellation.** Message: "Your 06:12 to Venezia Mestre is cancelled. Next train on this route: 06:42." The word "cancelled" is visually distinct from a delay.
- **Not settled.** If the scheduled departure has passed with no state: "Your 09:30 has not left Venezia Mestre and is not cancelled. We don't know yet which. We'll tell you as soon as it's decided." No "on time" label is shown.
- **Settled after waiting.** "Update: your 09:30 is cancelled." or "Update: your 09:30 is 15 minutes late."
- **Information changes after the warning.** "Update: your 06:12 is now 45 minutes late (was 30)." The new message replaces the old one; the older value is shown as struck through or as "was".
- **Information missing.** If the app cannot get the running state: "We can't get news on your 06:12 right now." The app never shows "on time" when it has no information.

## Example scenarios

1. **Early morning delay.** Tuesday. "My train" is the 06:12 from Bassano del Grappa to Venezia Mestre. At 05:48 the operator reports 30 minutes of delay. The commuter gets the message at 05:48, sees the expected time 06:42, opens the train's stops and chooses to stay home.
2. **Delay that grows.** Same train. 05:50: 10 minutes late, message sent. 06:05: 25 minutes late, update sent ("now 25 minutes late, was 10").
3. **Limbo at half past nine.** "My train" is the 09:30 from Venezia Mestre. At 09:33 it shows neither departed nor cancelled; the app shows "not settled". At 09:41 the operator cancels it; the app sends "Update: your 09:30 is cancelled. Next train on this route: 10:30."
4. **Calm day.** The 06:12 runs on time. No message is sent. At 06:00 the commuter opens the app and sees "On time, updated 05:59".

## Acceptance criteria

- Given a commuter with no saved train, when they open the app, then the app asks for departure station, destination, departure time and travel days, and saves them as "my train". (R1)
- Given a saved train on a travel day, when the operator reports a delay, then the commuter receives a message with the minutes of delay and the new expected time, without opening the app. (R2, R3)
- Given a saved train, when the operator cancels it, then the commuter receives a message that says "cancelled", distinct from a delay message, with the next train on the route. (R4)
- Given a saved train past its scheduled departure with no state, when the commuter opens the app, then it shows "not settled" and not "on time". (R5)
- Given a train shown as not settled, when the operator settles it, then the commuter receives at once a message saying cancelled or late. (R6)
- Given a warning already sent, when the delay changes, then a new message replaces it and shows the old and new value. (R7)
- Given a train on time, when its departure passes, then no message has been sent. (R8)
- Given any message from this part, when it is read, then it contains no instruction to go, stay or choose. (R9)
- Given no running information available, when the commuter opens the app, then it says news are not available and does not show "on time". (variant: information missing)

## Out of scope

- Strike notices days ahead: spec 03.
- Following the train stop by stop: spec 02.
- Proposing alternative trains: spec 06.
- The reason for the delay: spec 05.
- A recommendation to go or not go: no story asks the app to decide.
- Warnings for trains other than "my train", or for the whole network: spec 03 covers route notices.

## Links to other parts of the app

- **Following my train (spec 02):** reads "my train" from here; the warning opens it.
- **Disruptions on my route (spec 03):** reads the route of "my train".
- **Why it is late, and for how long (spec 05):** adds the reason line to the warning when it is known.
- **What still gets me home (spec 06):** opened from the cancellation and delay messages; receives "my train" and its destination.

# Part B · Traceability

## User stories

**F1 · Own-train alert before leaving**

As the office-day commuter who changes trains at Mestre (P2), in the minutes before leaving home at about six in the morning, when his first train, coming from Bassano, may already have built up delay, I want to be told that my own train is late or cancelled, so that I can decide not to go to the station at all and look for another way.

Source: F1 · `Notes/2026-10-07-interview-matteo-galvagni.md` · Pt.2 [00:06:15] "Magari 1º di andare in stazione controllo se il treno un ritardo effettivamente. Il mio parte da Bassano, fa in tempo ad accumulare un tot di ritardo e quindi, se vedo che mezz'ora di ritardo, magari neanche vado in stazione o cerco un modo alternativo o chiedo a qualcuno, eccetera."

**F3 · Cancelled or only late**

As the office-day commuter who changes trains at Mestre (P2), at half past nine, looking at the live tracking of a train that shows neither departed nor cancelled, I want to be told, as soon as it is known, whether my train is cancelled or only late, so that I can make a plan, since a fifteen-minute delay and a cancellation that means an hour's wait call for different ones.

Source: F3 · `Notes/2026-10-07-interview-matteo-galvagni.md` · Pt.2.1 [00:12:55] "Può succedere che io alle 9 e mezza nel tracking live non lo vedo partito, ma non lo vedo neanche cancellato."; Pt.2.1 [00:14:23] "non sai come fare un piano, perché un ritardo di 15 minuti è molto diverso da una cancellazione"; Pt.2.1 [00:14:46] "La cancellazione può significare un ritardo di un'ora se devi aspettare quello dopo."

**Why together.** Both ask the app to tell the commuter, unasked, the state of their own train before they commit to the trip. F1 adds the moment (at home, early) and the delay case; F3 adds the unsettled state and the need to tell a cancellation apart from a delay as soon as it is known.

## References

| story | feature | HMW | touchpoints | key quotes | gaps |
|---|---|---|---|---|---|
| F1 | F1 · Own-train alert before leaving `[strong]` (`Synthesis/2026-10-23-02-features-ai.md`) | #1 (`Ideation/2026-10-26-01.1-how-might-we-ai.md`) | TP 10, TP 11 (?), TP 44 (`Synthesis/2026-10-23-01.1-touchpoints-ai.md`) | P2 Pt.2 [00:06:15]; P3 [00:14:29] "può essere che ti avvisi proprio pochi minuti 1º"; P1 [00:10:16] "letteralmente 2 minuti 1º del... Dell'annuncio, mi è arrivata una mail."; P5 [00:11:29] "se ci fosse un'applicazione che appunto mi mi dice che il quel treno è in ritardo, sarebbe comodissimo" | Open-data check never done (`2026-10-24-gaps-notes.md`, plan.md): whether the delay is known early is untested. ⚠C5 on TP 10. |
| F3 | F3 · Cancelled or only late `[weak]` (one participant) | #2, #3 | TP 13 | P2 Pt.2.1 [00:12:55]; Pt.2.1 [00:14:23]; Pt.2.1 [00:14:46] | TP 13 cites REV [IMG_2384], which the gaps note says is about layout, not limbo. |

## Rule trace

| rule | story | rests on | mark |
|---|---|---|---|
| R1 | F1 ("my own train") | F1 capability; P3 [00:14:51] "puoi inserire il numero del tuo treno" (F8 evidence) for entering one's train | `[thin]`: no story asks for set-up as such; it is what "my own train" requires |
| R2 | F1 | "in the minutes before leaving home"; Pt.2 [00:06:15] "1º di andare in stazione controllo" | |
| R3 | F1 | "told that my own train is late"; Pt.2 [00:06:15] "se vedo che mezz'ora di ritardo" | |
| R4 | F1, F3 | "late or cancelled"; Pt.2.1 [00:14:46] "La cancellazione può significare un ritardo di un'ora se devi aspettare quello dopo" | next train on the route: `[thin]`, drawn from [00:14:46] |
| R5 | F3 | Pt.2.1 [00:12:55] "non lo vedo partito, ma non lo vedo neanche cancellato" | |
| R6 | F3 | "as soon as it is known, whether my train is cancelled or only late" | |
| R7 | F1 | TP 11 (?), TP 44: the word arrives minutes ahead or late | `[thin]`: no quote asks for updates; derived from the delay growing on its way (Pt.2 [00:06:15] "fa in tempo ad accumulare") |
| R8 | none | | `[untraced]`: silence on time follows from "told that my own train is late or cancelled" but no quote states it |
| R9 | F1 | "so that I can decide"; Pt.2 [00:06:15] "magari neanche vado in stazione o cerco un modo alternativo o chiedo a qualcuno" (he decides) | |

## Assumptions and open questions

- **The delay is known before the commuter leaves.** Untested: the open-data check (gaps note, plan.md §4) was never done. Test it on one early train from Bassano over several mornings.
- **One train per commuter.** The story speaks of "my own train". Whether commuters take one train or several in a week was not asked.
- **A threshold.** P2 decides on about half an hour (Pt.2 [00:06:15]). This spec tells every delay. Whether commuters want to set a minimum delay below which they are not told is open; no story asks for it.
- **F3 is `[weak]`:** one participant. Ask other participants whether a train in limbo has happened to them.
- **The return trip.** Both stories are on P2's outbound morning. Whether the same warning matters on the way home is not in the stories.
