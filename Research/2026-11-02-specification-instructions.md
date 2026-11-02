---
title: "Specification instructions · how AI agents turn the user stories into specification files"
date: 2026-11-02
activity: plan
source: "Author's request on 2026-11-02, built on Synthesis/2026-10-23-03-user-stories-ai.md and the synthesis notes it rests on"
author: "Eugenia Valentina Muffolini"
channel: web
method: instruction file for AI agents, format specification
tags: [train, noticing, understanding, deciding, warning, alternative, routine]
confidence: high
grade: tertiary
status: draft
related: [plan.md, ../structure.md, Synthesis/2026-10-23-03-user-stories-ai.md, Synthesis/2026-10-23-02-features-ai.md, Synthesis/2026-10-23-01.1-touchpoints-ai.md, Ideation/2026-10-26-01.1-how-might-we-ai.md, 2026-10-24-gaps-notes.md]
---

# Specification instructions · from user stories to specifications

## What this file is

This file is the instruction set for writing the specifications of this repository. Any AI agent asked to write, extend or review a specification reads it first and follows it exactly, the same way `../structure.md` governs every research note. It is a standing reference, not a one-off prompt: it stays in the repository and applies to every specification file, now and in later revisions. The agent reads the sources listed below, then writes the specification files described here. Nothing else is asked of it: no code, no prototype.

## Role and goal

You are writing the functional specification of the app, starting from the user stories and from nothing else. Each specification has two readers:

- **A model that builds the prototype.** It receives Part A of one file as its prompt and adds that part of the app. It has never seen this repository, the research notes or the other specifications. Part A must be complete by itself and tell it what the app does, how it behaves, what the commuter sees and does, and with which example data.
- **The author.** Part B shows where every rule of Part A comes from, so the specification can be checked against the research.

## Read first, in this order

1. `../structure.md` · the format every note in this repository follows.
2. `plan.md` · the brief, the questions and section 7, the only tags you may use.
3. `Synthesis/2026-10-23-03-user-stories-ai.md` · all the user stories, read in full. This is where the specifications start, and it is the authority on what the app must do.
4. `Synthesis/2026-10-23-02-features-ai.md` · the feature behind each story, its evidence and its confidence mark.
5. `Synthesis/2026-10-23-01.1-touchpoints-ai.md` · the touchpoints each feature answers.
6. `Ideation/2026-10-26-01.1-how-might-we-ai.md` · the How-Might-We question written for each story.
7. `2026-10-24-gaps-notes.md` · open gaps and contradictions that touch the stories.

Do not use the ideation notes after the How-Might-We questions: no clusters, no prioritisation, no concept document. Their choices, cuts and marks do not apply here. Do not open transcripts or raw material. Do not use anything in `Reference/`.

## The files to write

Specifications start from the user stories. Work in this order.

1. **Take every story.** Every story in `Synthesis/2026-10-23-03-user-stories-ai.md` is a candidate. You may leave a story out only when it cannot be specified (for example, its value has no trace, or it repeats another story with nothing added). Every story left out gets a one-line reason in the final report. Features marked `[no story]` in the features note have no story and get no specification.
2. **Group the stories by behaviour.** Stories that ask the app to do the same thing go into the same specification. One specification is one behaviour of the app, answering one or more user stories. A story that needs two behaviours feeds two specifications and is cited in each. You decide the grouping.
3. **Name each specification after its behaviour**, in the commuter's terms (for example "warned about my own train"), not after a feature code.
4. **Order the specifications** by the moment of the journey the stories describe: before the trip, at the station, on the train, replacement, connection and recovery, as in the user stories note.

The number of files follows from the grouping; there is no fixed count. Files go in a new folder `Research/Specifications/`, named `2026-11-02-spec-NN-behaviour.md`, numbered in that order.

If, while writing, one file turns out to hold two behaviours, stop and say so. Do not split or merge files without saying why.

## Rules for every file

- **Format.** Frontmatter as in `../structure.md`, with `activity: desk-research`, `channel: web`, `grade: tertiary`, `status: draft`, `confidence` no higher than the lowest of the notes it cites. `related` lists every note the file cites. Body in two parts, each made of `##` units, one unit one meaning.
- **Tags.** Only from `plan.md` section 7.
- **No technology.** Do not name software, tools, products, programming languages, frameworks or libraries, and do not say how the app is built. Where a source names a data format (open data, GTFS), say "the operator's running information" instead. Describing what the commuter sees and does (screens, the information on them, messages, actions) is allowed and expected.
- **Part A stands alone.** No feature codes, touchpoint numbers, question numbers, file paths, participant codes or evidence marks in Part A. Rules are numbered (R1, R2, ...) so that Part B can trace them.
- **Traceability.** Every rule of Part A traces, in Part B, to a user story, and through it to a feature (F), a touchpoint (TP), a question (#) or a quote. Cite quotes as the user stories note does: participant code, part if any, timestamp, for example (P2 Pt.2 [00:06:15]). Keep `[strong]`, `[weak]`, (?), ⚠ caveats and `~` estimated timestamps where the sources carry them. A rule with no story behind it is marked `[untraced]` in Part B, never smoothed.
- **Stay inside the story.** Each story's who, circumstance, capability and value are the limit. Do not widen a capability beyond what its story asks.
- **Participants.** Codes only (P1 to P6) in Part B, never names. App Store reviewers (REV) are evidence, never the "who".
- **Language.** English, plain sentences. Do not use the em dash to split sentences.

## Body of every file

### Part A · Specification (the prompt for the prototype)

Open with the heading `# Part A · Specification`, then these units, in this order.

1. **`## Purpose`** · what this part of the app does for the commuter and in which moment of the journey, in two or three sentences.
2. **`## Who it is for`** · the commuters the stories describe, by their commute and circumstance, without codes or names.
3. **`## Behaviour`** · the logical description: what the app knows, what it decides, what it tells the commuter, as numbered rules R1, R2, ... Each rule written as "When ..., the app ...".
4. **`## States and data`** · the information this part needs (for example "the commuter's train, its stops, the commuter's stop"), where it comes from (the commuter, or the operator's running information), the states it can be in and what moves it between them.
5. **`## What the commuter sees and does`** · step by step, for the normal path and for every variant the stories imply (for example: no problem, delay, cancellation, information missing or late, information that changes after the commuter has been told): what the app shows, the content and wording of each message, the actions the commuter can take, what the app does in reply.
6. **`## Example scenarios`** · two to four concrete scenarios with simulated data taken from the stories' circumstances (times, stations, delays, reasons), each one walked through the steps above. The prototype runs on these. Real station and line names from the stories are allowed; participant codes and names are not.
7. **`## Acceptance criteria`** · checkable statements, "Given ..., when ..., then ...", one per rule and one per variant.
8. **`## Out of scope`** · what this part must not do, because no story asks for it.
9. **`## Links to other parts of the app`** · which other specifications this one reads from or hands to, by their behaviour name, and what passes between them.

### Part B · Traceability (for the author)

Open with the heading `# Part B · Traceability`, then these units.

1. **`## User stories`** · every user story this specification answers, each quoted in full with its source line, then one line on why they share this behaviour and what each one adds to it.
2. **`## References`** · a table, one row per story: feature (code, name, confidence mark), HMW question, touchpoints, one or two key quotes, gaps from the gaps note. Every row cites its source file.
3. **`## Rule trace`** · a table, one row per rule of Part A: rule number, story, quote or note it rests on, mark (`[untraced]` where nothing stands behind it).
4. **`## Assumptions and open questions`** · what this specification takes for granted without evidence, and what would test it; weak marks, caveats and gaps that touch it.

## Before you finish

- Add each new file to `../index.md` the same day, under a `## Research/Specifications/` heading, in the existing format.
- Add every specification file to the `related` field of `Synthesis/2026-10-23-03-user-stories-ai.md`.
- Check every file for: a named software, tool or programming language; a code, path or name in Part A; a participant name anywhere; a tag not in `plan.md`; an em dash used to split a sentence; a rule without a row in the rule trace; a capability wider than its story.
- Report: every user story, kept or left out, with its reason; for each kept story, the specifications it feeds; then the count: files written, stories per file, rules per file, scenarios per file, acceptance criteria per file, `[untraced]` rules per file.
