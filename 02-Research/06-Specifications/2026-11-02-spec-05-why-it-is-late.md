---
title: "Specification 05 · Why it is late: the warning gives the reason for the delay, or says it is not known"
date: 2026-11-02
activity: desk-research
source: "Concept document 05-Ideation/2026-10-26-05-concept-ai.md (concept 8; F9 enters only as the reason line in the warning), user story F9 (and F11 in part, for on board) in 04-Synthesis/2026-10-23-03-user-stories-ai.md, with the features, touchpoints, How-Might-We and gaps notes; written on 2026-11-05 following 2026-11-02-specification-instructions.md. Interview notes and transcripts not read."
author: "Eugenia Valentina Muffolini"
channel: web
method: functional specification from the concept's reduced set, every rule traced to a story
tags: [train, padova, monselice, university-commute, long-delay, understanding, deciding]
confidence: low
grade: tertiary
status: draft
related: [../plan.md, 2026-11-02-specification-instructions.md, ../05-Ideation/2026-10-26-05-concept-ai.md, ../05-Ideation/2026-10-26-04-prioritisation-ai.md, ../04-Synthesis/2026-10-23-03-user-stories-ai.md, ../04-Synthesis/2026-10-23-02-features-ai.md, ../04-Synthesis/2026-10-23-01.1-touchpoints-ai.md, ../05-Ideation/2026-10-26-01.1-how-might-we-ai.md, ../01.3-Raw/2026-10-24-gaps-notes.md, ../04-Synthesis/User Stories/2026-10-23-user-story-07-f09-the-reason-on-the-board.md, 2026-11-02-spec-02-warned-about-my-own-train.md]
---

# Part A · Specification

## Purpose

When the commuter is warned that their usual train is late or cancelled, the warning says why, in plain words, so that the commuter can judge whether the delay is likely to pass or to grow. If the reason is not known, the warning says so; if it becomes known later, a new warning brings it. It belongs to the reason for a delay, and lives only inside the warning, on the same day before boarding and on board, as the warning does (see "Warned about my own train").

## Who it is for

A student from Monselice who, after her six o'clock lesson in Padova, finds her usual train late at the station and wants to know why, to judge whether the delay is temporary or will grow, and turn to another solution in time if it grows. Once on board, the same commuter, on a train stopped between two stations, wants to know why it is stopped.

## Behaviour

| rule | actor | action | response | conditions and edges | state changes |
|---|---|---|---|---|---|
| R1 | The app | Sends a warning (before boarding or on board: at or beyond the limit, or cancelled) and the operator's running information gives a reason. | The warning carries a reason line: the reason in plain words, as the operator gives it, without codes. | The app does not rewrite the reason into a forecast, and does not add how long the delay will last. On board, the reason is the one the operator gives for the saved train, also when the train is stopped between two stops. | The warning carries a reason. |
| R2 | The app | Sends a warning and the operator's running information gives no reason. | The reason line says "Reason not given yet". | The app never infers or invents a reason. | The warning carries "reason not given yet". |
| R3 | The operator's running information | Gives a reason after a warning has been sent with "Reason not given yet", or changes a reason already given. | The app sends a new warning, marked as updated, that says the reason has been added or changed: the same facts as the last warning (train and minutes, or next stop and minutes on board, or "cancelled"), with the new reason line. | Only within the warning's window (from the trip day until the train's arrival at the get-off stop, see "Warned about my own train"). If a delay change and a new reason arrive together, one warning carries both. A new warning at every change of reason. | The reason line moves from "not given yet" to "given", or from one reason to another; a new warning has been sent. |

## States and data

- **Data read:** the reason for the delay or cancellation of the saved train (from the operator's running information).
- **States of the reason line:** given (R1) or not given yet (R2). From "not given yet" it moves to "given", and from one reason to another, each time with a new, updated warning (R3). The same states apply before boarding and on board.

## What the commuter gets and does

1. **Reason given.** Under the first line of the warning: "Reason: a fault on the line."
2. **No reason given.** "Reason not given yet."
3. **Reason added later.** A new warning, marked as updated: "Updated: reason added." The first line repeats the train and the minutes (or the next stop and the minutes on board), and under it: "Reason: a fault on the line." If the operator later changes the reason, another warning: "Updated: reason changed", with the new reason. (R3)
4. The commuter reads it. There is no action on the reason line.

Appearance constraint: the reason line is one line, directly under the delay, before boarding and on board. In an updated warning, the mark "Updated: reason added" or "Updated: reason changed" sits above the first line.

## Example scenarios

1. **The evening train at Padova.** Saved train: the 18:09 from Padova, the student's usual train. The train is late (delay unspecified; in the student's own trip it was about ten minutes, which she did not call excessive). The operator's running information gives a reason: unspecified. The warning shows the reason line (step 1).
2. **A fault on the line.** Same train; the operator gives "fault on the line" as the reason. The line reads "Reason: a fault on the line." (step 1).
3. **No reason yet.** Same train; no reason given. The line reads "Reason not given yet." (step 2).
4. **The reason comes later.** Same train; the warning went out with "Reason not given yet". A few minutes later the operator gives "fault on the line". A new warning arrives, marked "Updated: reason added", with the same minutes and "Reason: a fault on the line." (step 3).
5. **The reason changes.** Same train; the warning carries "Reason: a fault on the line." Later the operator changes it to "a train ahead with a fault". A new warning arrives, marked "Updated: reason changed", with the same minutes and the new reason (step 3).
6. **Stopped on board.** The commuter is on the train; it stops between two stops and an on-board warning arrives with the next stop and the minutes. The operator gives no reason: "Reason not given yet." When the operator gives one, an updated warning brings it (steps 2 and 3).

## Acceptance criteria

- Given a warning and a reason from the operator, when the warning is shown, then it contains that reason in plain words. (R1)
- Given a reason, when it is shown, then no expected length of delay is added to it. (R1, edge)
- Given a warning and no reason from the operator, when the warning is shown, then it says "Reason not given yet". (R2)
- Given no reason, when the warning is shown, then no reason of the app's own appears. (R2, edge)
- Given a warning sent with "Reason not given yet", when the operator then gives a reason, then the app sends a new warning marked "Updated: reason added", with the same facts and the reason line. (R3)
- Given a warning that carries a reason, when the operator changes the reason, then the app sends a new warning marked "Updated: reason changed", with the same facts and the new reason. (R3)
- Given the train has reached the get-off stop, when the operator gives or changes a reason, then no new warning is sent. (R3, edge)
- Given the commuter is on board and an on-board warning is sent, when the operator gives a reason, then the warning carries it as before boarding. (R1, on board)

## Out of scope

- The reason on the station board or in station announcements.
- A forecast of how the delay will develop, or how long a stopped train will stay stopped.
- The reason outside the warning.

## Links to other parts of the app

- **Warned about my own train** asks for the reason line every time it sends a warning, before boarding (R1, R2) and on board (R5), and shows it under the delay. The updated warning of R3 follows its window.

# Part B · Traceability

## User stories

> **F9 · The reason, on the board.** As the student from Monselice who uses no app (P6), at Padova station after her six o'clock lesson, finding on the board that her usual train is late, I want the board to give the reason for the delay, so that I can judge whether it is temporary or likely to grow, and turn to another solution in time if it grows.

Source: F9 · P6 [00:05:02], [00:11:04], [00:11:17].

> **F11 · Why it is stopped, and for how long.** As the commuter who chains boat, train and bus from the Lido di Venezia (P1), on the train home stopped near Padova, moving a little and stopping again with no explanation, I want to be told why it is stopped and how long it is expected to stay, so that I can work out what to do instead of panicking late in the evening.

Source: F11 · P1 [00:10:02], [00:16:19].

F9 is the main story. By the author's decision in the concept, F9 enters only as the reason line in the warning, not as the station board. The story's "on the board" is a form; the HMW question already drops it. The reason on board and the updated warning when the reason arrives late (R3) are the author's decision of 2026-11-16, following the on-board warning in "Warned about my own train". F11 supports the on-board reason only in part: it asks for why, which this specification gives, and for how long, which stays out of scope.

## References

| story | feature | HMW | touchpoints | key quotes | gaps |
|---|---|---|---|---|---|
| F9 | F9 · The reason, on the board `[strong]` (`../04-Synthesis/2026-10-23-02-features-ai.md`), mark contested in the gaps note | #8 `[calibrated]` (`../05-Ideation/2026-10-26-01.1-how-might-we-ai.md`) | TP 23 ⚠C1, TP 28 ⚠C3 ⚠C4 | P6 [00:11:00] "La motivazione magari."; P6 [00:11:04] "Capire se è anche una cosa magari temporanea o che si può eventualmente prolungare"; outside the moment: P4 [~00:16:00] "se mi arrivasse la notifica il treno in ritardo di tot minuti perché c'è stato un guasto"; P1 [00:10:42] "Io non sapevo le motivazioni" | [Contradiction] F9 story value: on the day of her late 18:09, P6 says the delay was not excessive and considered no alternative ([00:06:24]); [Contradiction] F9's `[strong]` mark breaks the features note's own rule (`../01.3-Raw/2026-10-24-gaps-notes.md`) |

## Rule trace

| rule | story | touchpoint | rests on | marks |
|---|---|---|---|---|
| R1 | F9; F11 (in part) for on board | TP 23 | P6 [00:11:00] "La motivazione magari."; P6 [00:11:04]; concept 8; concept note "F9 enters only as the reason line in the warning"; on board: F11 P1 [00:10:02] "vediamo che il treno sta fermo", author's decision of 2026-11-16 | concept 8 V `[weak]`; F9 used away from its touchpoints; ⚠C1; on board not in the concept |
| R2 | F9 | TP 28 | Concept assumption "A cause is known when the warning is sent": P1 never learned it [00:10:42], P4 learned it from the conductor after an hour and a half [00:06:18] | ⚠C3 |
| R3 | F9; F11 (in part) | TP 28 | Edge from the same assumption; updated warning: author's decision of 2026-11-16 | updated warning not in the sources |

## Verifiability pass

| rule | how it fails | what is missing | what is uncheckable | severity |
|---|---|---|---|---|
| R1 | The operator's reason is a code or a vague label ("technical reasons") and does not let the commuter judge anything. The rule is met; the story is not. | What counts as "plain words" when the source is not. | "Plain words" is uncheckable as written. | `[fixable]` |
| R2 | In practice the reason is almost never given when the warning is sent (P1, P4), so the line always reads "not given yet". | Nothing in the writing; this is the concept's assumption. | Nothing. | `[note]` |
| R3 | The reason arrives after the commuter has decided, or changes often, and the updated warnings add noise. | Nothing in the writing; whether the warnings annoy is a test question (see Assumptions). | Nothing. | `[note]` |

## Assumptions and open questions

- **The cause helps the decision before boarding.** Concept 8 is V `[weak]`: P2 decides on minutes, not causes. P4's reason is for telling classmates or work, not deciding. Test: show P2 and P6 the same warning with and without the reason and ask what each would do.
- **A cause is known when the warning is sent.** Test: the open-data check, never done.
- **P6 would use a working app.** P6 uses no app ([00:02:25]). Test: show P6 the warning and ask whether she would receive it on her phone.
- **The story's value is contested.** On the day of her late train, P6 considered no alternative ([00:06:24]); her wish for the reason is general. Kept as written in the story.
- **The reason quotes are from on board.** P1 and P4 speak on a stopped train; only P6's is before boarding. With the on-board reason, P1's and P4's quotes now support the specification on board too, though they ask for the reason on a stopped train, not inside a warning.
- **Updated warnings for the reason are wanted, not a nuisance.** No participant asks for them, because today none of them gets any warning at all; the question could not come up. Test: show P1 and P6 a sequence of warnings updated only to add or change the reason, and ask whether it helps or annoys.
