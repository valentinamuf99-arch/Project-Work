---
title: "Specification 06 · What still gets me home: the trains that can still take me there, and told early when nothing will tonight"
date: 2026-11-02
activity: desk-research
source: "User stories F12 and F14 in Synthesis/2026-10-23-03-user-stories-ai.md, with the features, touchpoints, How-Might-We and gaps notes; written following 2026-11-02-specification-instructions.md. Interview notes and transcripts not read."
author: "Eugenia Valentina Muffolini"
channel: web
method: functional specification from user stories, every rule traced to a story
tags: [train, bus, venezia, padova, university-commute, work-commute, cancellation, long-delay, deciding, alternative, notifying-others, cost-of-lateness]
confidence: medium
grade: tertiary
status: draft
related: [plan.md, 2026-11-02-specification-instructions.md, Synthesis/2026-10-23-03-user-stories-ai.md, Synthesis/2026-10-23-02-features-ai.md, Synthesis/2026-10-23-01.1-touchpoints-ai.md, Ideation/2026-10-26-01.1-how-might-we-ai.md, 2026-10-24-gaps-notes.md, Specs/2026-11-02-spec-01-warned-about-my-own-train.md, Specs/2026-11-02-spec-05-why-and-for-how-long.md, Specs/2026-11-02-spec-07-will-my-connection-wait.md, Specs/2026-11-02-spec-08-is-my-ticket-valid.md, Synthesis/User Stories/2026-10-23-user-story-09-f12-no-way-home-said-early.md, Synthesis/User Stories/2026-10-23-user-story-10-f14-alternatives-for-own-trip.md]
---

# Specification 06 · What still gets me home

# Part A · Specification

## Purpose

When the commuter's train is cancelled or stuck, the app shows the trains and public options that can still get them to their destination tonight, including trains already waiting in the station they are in. When no public option will get them there tonight, the app says so early and plainly, so the commuter can ask someone to come and fetch them in time instead of waiting alone at the station.

## Who it is for

- A commuter who chains boat, train and bus from the Lido di Venezia. Put off a cancelled train at Venezia Mestre in the evening, she heads for the bus because she cannot see another train, while a train for Venezia is waiting in the station. She does not want to be stuck at Mestre, a station she does not feel safe in.
- A student who rides home from Padova in the evening. She sits for an hour on a train at Padova that has not left, wondering whether to call her parents to come and get her by car. She wants to know early when no public option will get her home, so her parents can leave in time.

## Behaviour

- **R1.** The app knows where the commuter is going (the destination of "my train", spec 01, or a destination they type) and where they are now (the station they are at, or the train they are on).
- **R2.** When the commuter's train is cancelled, or stopped or late beyond the point where it can still get them there tonight, the app works out the options still available to reach the destination tonight.
- **R3.** The options are listed by arrival time at the destination, earliest first. Each shows: departure time and platform, arrival time, changes, and whether it runs late too.
- **R4.** Trains already standing in the commuter's current station are shown first, with their platform and how many minutes remain before they leave.
- **R5.** Options include other trains and other public transport (bus, boat) that complete the trip, each labelled by type.
- **R6.** When no public option reaches the destination tonight, the app says so in one sentence, as soon as it is known, together with the last option that would have worked and the time it left.
- **R7.** When it is not yet known whether the stuck train will leave, the app states the time by which, if it has not left, no public option will get the commuter home tonight.
- **R8.** From the "no way home" message, the commuter can send a short message to a person of their choice, with the facts: where they are, that no public option is left, and the time.
- **R9.** The app lists options and facts; it does not choose for the commuter.

## States and data

Information needed:

- The destination and the current position (station or train). From "my train" (spec 01), the commuter, or the train being followed.
- Trains and other public transport from the current station to the destination for the rest of the evening, with live state. From the operators' timetables and running information.
- Trains standing in the current station and their platforms. From the operator's running information.
- A contact chosen by the commuter for R8. From the commuter.

States: options available; options running out (deadline shown, R7); no public option tonight; information missing.

## What the commuter sees and does

**Normal path (put off a cancelled train)**

1. The commuter's train is cancelled at Venezia Mestre at 21:50. The cancellation message (spec 01) opens this view.
2. At the top: "In this station now: regional train to Venezia Santa Lucia, platform 4, leaves in 3 minutes."
3. Below, other options by arrival time: "22:10 train, arrives 22:22", "bus 22:05, arrives 22:30".
4. The commuter picks one and goes. The app does not mark any option as recommended.

**Variant: no way home (stuck train)**

1. The commuter is on a train at Padova that has not left for an hour. The view says: "If this train hasn't left by 22:15, there is no public way to Castelfranco Veneto tonight."
2. At 22:15 the train has not left: "No public transport will get you to Castelfranco Veneto tonight. The last option was the 21:35 bus."
3. Below: "Send a message to Mum". The prepared message: "I'm at Padova station, no train or bus home tonight. 22:15."

**Other variants**

- **No problem.** The view is not opened unasked; if opened, it lists tonight's options as usual.
- **Delay only.** If the commuter's train is late but still arrives tonight, the view shows it first, with the other options below for comparison.
- **Information changes.** If an option is cancelled or a new one appears, the list updates and the commuter is told: "The 22:10 is cancelled."
- **Information missing.** "We can't get tonight's options right now. Last updated 21:48."

## Example scenarios

1. **Cancelled at Mestre.** 21:50, train to Venezia Santa Lucia cancelled at Venezia Mestre. A regional train for Venezia Santa Lucia stands on platform 4, leaving 21:53. The app shows it first. She catches it.
2. **No way home from Padova.** 21:00, the commuter's train to Castelfranco Veneto has not left Padova because of a line fault. The last bus leaves 21:35. 21:20: "If this train hasn't left by 22:15, there is no public way home tonight." 22:15: "No public transport tonight." She sends the prepared message to her mother at 22:16.
3. **Options remain.** 20:30, train cancelled at Padova. Options: next train 21:05 (arrives 21:40), bus 20:50 (arrives 21:55). Both shown; she chooses.

## Acceptance criteria

- Given a commuter with a saved train or a typed destination, when this view opens, then destination and current position are known. (R1)
- Given a cancelled or stuck train, when this view opens, then the options still reaching the destination tonight are computed. (R2)
- Given several options, when listed, then they are ordered by arrival time with departure, platform, arrival, changes and live state. (R3)
- Given a train standing in the current station that reaches the destination, when listed, then it is shown first with platform and minutes left. (R4)
- Given buses or boats that complete the trip, when listed, then they appear labelled by type. (R5)
- Given no option tonight, when it is known, then the app says so in one sentence with the last option that would have worked. (R6)
- Given a stuck train with unknown departure, when the view is open, then the deadline after which no option is left is stated. (R7)
- Given the "no way home" message, when the commuter chooses, then a prepared message with place, fact and time can be sent to their chosen person. (R8)
- Given any list of options, when shown, then none is marked as recommended. (R9)
- Given an option cancelled after the list is shown, when it happens, then the list updates and the commuter is told. (variant: information changes)

## Out of scope

- Taxis, lifts and private transport: no story asks for them; the app only states that public transport is over.
- Safety at the station: dropped in the features note.
- Whether the ticket is valid on the option: spec 08.
- Whether a connection will wait: spec 07.

## Links to other parts of the app

- **Warned about my own train (spec 01):** its cancellation and delay messages open this view and pass "my train" and its destination.
- **Why it is late, and for how long (spec 05):** the expected restart time feeds R7.
- **Will my connection wait? (spec 07):** options with a change show whether the change holds.
- **Is my ticket valid on it? (spec 08):** each option can show whether the commuter's ticket is valid on it.

# Part B · Traceability

## User stories

**F12 · No way home, said early**

As the student who rides home from Padova in the evening (P4), sitting for an hour on a train at Padova that has not left, starting to wonder whether to call her parents, I want to be told early when no public option will get me home that evening, so that my parents can leave much earlier and I am not left alone at the station, worried.

Source: F12 · `Notes/2026-10-07-interview-greta-tonuzi.md` · [00:04:49] "E passa un'ora e finché comincio a domandarmi se effettivamente avesse avuto senso far partire qualcuno da casa per venirmi a prendere in macchina."; [00:09:35] "Che non avrei avuto modo di tornare a casa con I mezzi pubblici e che avrei potuto far partire I miei genitori molto 1º senza stare appunto con la preoccupazione del mio Dio, adesso sono qua da sola." Supporting evidence from a second participant: `Notes/2026-10-09-interview-benedetta-rossi.md` · P6 [00:07:26] "l'unica, appunto, alternativa era prendere l'autobus e farsi un'ora e 20 di autobus e poi appunto farsi raggiungere dai genitori"; [00:08:12] "un 1 senso di disagio, come dire, di far spostare anche magari I miei genitori"; [00:11:17] "mi sarei attivata in anticipo con eventuali altre soluzioni magari." Caveat from the features note: P6 already knew the bus option and did not ask at the station, so the story stays with P4.

**F14 · Alternatives for one's own trip**

As the commuter who chains boat, train and bus from the Lido di Venezia (P1), just put off a cancelled train at Mestre in the evening and heading for the bus, I want to be shown the trains that can still get me to Venezia, including ones still waiting in the station, so that I get home instead of being stuck at Mestre, alone, in a station I do not feel safe in.

Source: F14 · `Notes/2026-10-07-interview-lucrezia-gradi.md` · [00:11:03] "Vado vado verso l'autobus perché non vedevo boh"; [00:17:41] "Io avrei voluto sapere quali altri treni ci sono che avrei potuto prendere e prendere Venezia."; [00:13:32] "è più il il fatto che mi sarei fermata in una stazione che a me non piace per niente."

**Why together.** Both ask the app what can still get the commuter home tonight. F14 is the case where options exist and one is standing in the station; F12 is the case where none is left, told early. They are one behaviour with two outcomes.

## References

| story | feature | HMW | touchpoints | key quotes | gaps |
|---|---|---|---|---|---|
| F12 | F12 · No way home, said early `[weak]` (`Synthesis/2026-10-23-02-features-ai.md`) | #10, #11 (`Ideation/2026-10-26-01.1-how-might-we-ai.md`) | TP 29 (`Synthesis/2026-10-23-01.1-touchpoints-ai.md`) | P4 [00:09:35]; P4 [00:04:49]; P6 [00:08:12] | TP 29 rests on P4 alone. P6's bus was an ordinary line, not a replacement bus (`2026-10-24-gaps-notes.md`). |
| F14 | F14 · Alternatives for one's own trip `[strong]` | #12, #13 | TP 46, TP 26, TP 45 (?), TP 53 | P1 [00:17:41]; P1 [00:11:35] "È stato random"; P1 [00:12:03] "Avevo paura che magari il treno partisse"; P2 Pt.2.1 [00:07:50] "manca la soluzione alternativa proposta"; REV [IMG_2403] "non mi ha inviato neanche delle alternative di treni" | `[strong]` breaks the note's own rule: TP 45 is (?), TP 53 is reviewers only. |

## Rule trace

| rule | story | rests on | mark |
|---|---|---|---|
| R1 | F14, F12 | "get me to Venezia"; "get me home that evening" | |
| R2 | F14, F12 | "just put off a cancelled train"; "a train at Padova that has not left" | |
| R3 | F14 | P1 [00:17:41] "quali altri treni ci sono che avrei potuto prendere" | the fields shown: `[thin]` |
| R4 | F14 | "including ones still waiting in the station"; P1 [00:11:03], [00:12:03] | |
| R5 | F12 | "no public option"; P6 [00:07:26] (bus as the only alternative); P4 [00:04:49] (asked for a replacement bus, TP 29) | F14 asks for trains only; buses and boats come from F12 |
| R6 | F12 | "told early when no public option will get me home"; P4 [00:09:35] | last option shown: `[untraced]` |
| R7 | F12 | "told early"; P4 [00:04:49] "passa un'ora e finché comincio a domandarmi" | `[thin]`: the deadline is a reading of "early" |
| R8 | F12 | "so that my parents can leave much earlier"; P4 [00:04:49] | `[thin]`: the story asks to be told, not to send a message |
| R9 | F14, F12 | both stories ask to be shown or told, not advised | |

## Assumptions and open questions

- **The app knows tonight's last options across operators.** Train, bus and boat timetables come from different operators; whether this information is available together was not checked.
- **R8 goes beyond the story.** F12 asks to be told; sending a message is a reading of its "so that". Keep or drop after testing with P4 and P6.
- **F12 is `[weak]`.** One participant at the touchpoint. P6 supports the need but already knew her bus.
- **F14 rests on one evening.** P1's case is one cancellation at Mestre. P2 supports a proposed alternative only in places he does not know (Pt.2.1 [00:07:50]).
- **"Tonight".** Both stories are evening trips. Whether the same view matters in the morning is not in the stories.
