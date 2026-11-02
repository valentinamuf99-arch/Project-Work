---
title: "Specification 08 · Is my ticket valid on it? Told whether my pass or ticket covers the replacement bus or the other option"
date: 2026-11-02
activity: desk-research
source: "User story F15 in Synthesis/2026-10-23-03-user-stories-ai.md, with the features, touchpoints, How-Might-We and gaps notes; written following 2026-11-02-specification-instructions.md. Interview notes and transcripts not read."
author: "Eugenia Valentina Muffolini"
channel: web
method: functional specification from user stories, every rule traced to a story
tags: [train, bus, university-commute, strike, alternative, cost-of-lateness]
confidence: medium
grade: tertiary
status: draft
related: [plan.md, 2026-11-02-specification-instructions.md, Synthesis/2026-10-23-03-user-stories-ai.md, Synthesis/2026-10-23-02-features-ai.md, Synthesis/2026-10-23-01.1-touchpoints-ai.md, Ideation/2026-10-26-01.1-how-might-we-ai.md, 2026-10-24-gaps-notes.md, Specs/2026-11-02-spec-04-paying-at-the-last-minute.md, Specs/2026-11-02-spec-06-what-still-gets-me-home.md]
---

# Specification 08 · Is my ticket valid on it?

# Part A · Specification

## Purpose

Before boarding a replacement bus or another option after a disruption, the commuter learns whether the pass or ticket they already hold is valid on it. If it is not, the app says so before they board, and says what they need to buy, so they are not caught paying twice for a route their pass already covers, or fined.

## Who it is for

A student who commutes from Bassano to Padova on a monthly pass. On a strike day, about to board the replacement bus, she has to ask the conductors whether her pass is valid; it is not, and she buys an extra ticket.

## Behaviour

- **R1.** The app knows the ticket or pass the commuter holds: its type, the route it covers and its validity dates. The commuter enters it, or it is the one bought in the app.
- **R2.** When the app shows a replacement bus or another option (spec 06), it shows next to it whether the commuter's pass or ticket is valid on it: valid, not valid, or not known.
- **R3.** When it is not valid, the app says what ticket is needed and where to buy it, before the commuter boards.
- **R4.** When it is valid, the app says so in one line, with the rule it rests on (for example "Passes valid on replacement buses during the strike of 14 November").
- **R5.** When the operator has not published a rule for this case, the app says "Not known" and never shows "valid" by default.
- **R6.** The commuter can also ask directly, for any option, "Is my ticket valid on it?".

## States and data

Information needed:

- The commuter's pass or ticket: type, route, validity dates. From the commuter or from a purchase in the app.
- The option: a replacement bus, another train, another operator's service. From spec 06 or the operator's notices.
- The validity rule for that pass or ticket on that option on that day. From the operator's published rules.

States per option: valid; not valid (ticket needed); not known.

## What the commuter sees and does

**Normal path (not valid)**

1. Strike day. The replacement bus from Castelfranco Veneto to Bassano del Grappa is listed among the options.
2. Next to it: "Your monthly pass is not valid on this bus. You need a single bus ticket (sold on board)."
3. The commuter buys the ticket before boarding, not at the door.

**Variants**

- **Valid.** "Your monthly pass is valid on this bus (replacement service for the strike of 14 November)."
- **Not known.** "We don't know if your pass is valid on this bus. Ask the staff before boarding."
- **Another train, after a cancellation.** "Your ticket is valid on the next train on the same route."
- **Information changes.** "Update: passes are now accepted on replacement buses today."
- **No ticket entered.** The app asks which ticket or pass the commuter holds.

## Example scenarios

1. **Strike, pass not valid.** Monthly pass Bassano del Grappa to Padova. Strike day; replacement bus from Castelfranco Veneto. The app shows "not valid, single bus ticket needed". She buys it before boarding.
2. **Strike, pass valid.** Same pass, another day, the operator accepts passes on replacement buses. The app shows "valid" with the rule.
3. **Cancelled train, single ticket.** A commuter holding a single ticket for a cancelled train asks about the next train. The app shows "valid on the next train on the same route".

## Acceptance criteria

- Given a commuter, when they set up their ticket, then type, route and validity dates are stored. (R1)
- Given an option shown, when the commuter has a ticket stored, then validity is shown as valid, not valid or not known. (R2)
- Given an option where the ticket is not valid, when shown, then the needed ticket and where to buy it are stated. (R3)
- Given an option where the ticket is valid, when shown, then the rule it rests on is stated. (R4)
- Given no published rule, when shown, then the state is "not known", never "valid". (R5)
- Given any option, when the commuter asks "Is my ticket valid on it?", then the answer follows R2 to R5. (R6)

## Out of scope

- Selling the extra ticket in the app: no story asks for it.
- Refunds of the extra ticket: no participant story.

## Links to other parts of the app

- **What still gets me home (spec 06):** each option there shows validity from this part.
- **Paying at the last minute (spec 04):** shares the ticket rules per station.
- **Disruptions on my route (spec 03):** strike notices can carry the validity rule for replacement buses.

# Part B · Traceability

## User stories

**F15 · Is my ticket valid on it?**

As the student who commutes from Bassano to Padova on a monthly pass (P3), on a strike day, about to board the replacement bus and having to ask the conductors whether her pass is valid on it, I want to be told whether my pass is valid on the replacement bus, so that I am not caught buying an extra ticket for a route my pass already covers.

Source: F15 · `Notes/2026-10-07-interview-lorena-tonuzi.md` · [00:12:45] "ho chiesto ai controllori e l'autobus non consentiva l'utilizzo dell'abbonamento, quindi ho dovuto fare un biglietto in più per l'autobus." Value from an observation: the extra ticket she had to buy, recorded in the same quote.

**Why alone.** It is the only story about ticket validity on an alternative.

## References

| story | feature | HMW | touchpoints | key quotes | gaps |
|---|---|---|---|---|---|
| F15 | F15 · Is my ticket valid on it? `[strong]` (`Synthesis/2026-10-23-02-features-ai.md`) | #14 (`Ideation/2026-10-26-01.1-how-might-we-ai.md`) | TP 50, TP 48 (`Synthesis/2026-10-23-01.1-touchpoints-ai.md`) | P3 [00:12:45]; P2 Pt.2.1 [00:07:50] "Non è chiaro subito se con lo stesso biglietto puoi prendere magari quello dopo" | Ticketing is out of the brief's scope. `[strong]` breaks the note's own rule: each touchpoint rests on one participant (`2026-10-24-gaps-notes.md`). HMW note: thin "so that". |

## Rule trace

| rule | story | rests on | mark |
|---|---|---|---|
| R1 | F15 | "my pass" | |
| R2 | F15 | "told whether my pass is valid on the replacement bus" | other options: from F15 feature line and P2 Pt.2.1 [00:07:50] (TP 50) |
| R3 | F15 | P3 [00:12:45] "ho dovuto fare un biglietto in più" | |
| R4 | F15 | | rule shown: `[untraced]` |
| R5 | F15 | P3 [00:12:45] "ho chiesto ai controllori" (the rule was not known to her) | `[thin]` |
| R6 | F15 | P2 Pt.2.1 [00:07:50] "richiedono una ricerca su Google ogni volta" | `[thin]` |

## Assumptions and open questions

- **Ticketing is out of the brief.** Same question as spec 04: settle the brief's scope first.
- **The value is an observation.** P3 does not say what she wanted instead; the HMW note assumes "not paying twice". Ask her.
- **The rule is published.** Whether the operator publishes validity rules for replacement buses in advance was not checked.
- **P6's bus** was an ordinary line, not a replacement bus (gaps note); it is not evidence here.
