---
title: "Specification instructions · how AI agents turn the user stories into specification files for concept 1, Own-train warning"
date: 2026-11-02
activity: plan
source: "Author's request on 2026-11-02, built on Ideation/2026-10-26-05-concept-ai.md and the synthesis and ideation notes it cites"
author: "Eugenia Valentina Muffolini"
channel: web
method: instruction file for AI agents, format specification
tags: [train, noticing, understanding, deciding, warning, alternative, routine]
confidence: high
grade: tertiary
status: draft
related: [plan.md, ../structure.md, Ideation/2026-10-26-05-concept-ai.md, Ideation/2026-10-26-04-prioritisation-ai.md, Ideation/2026-10-26-03-clusters-ai.md, Ideation/2026-10-26-01.1-how-might-we-ai.md, Synthesis/2026-10-23-01.1-touchpoints-ai.md, Synthesis/2026-10-23-02-features-ai.md, Synthesis/2026-10-23-03-user-stories-ai.md, 2026-10-24-gaps-notes.md]
---

# Specification instructions · from user stories to specifications

## What this file is

This file is the instruction set for writing the specifications of this repository. Any AI agent asked to write, extend or review a specification reads it first and follows it exactly, the same way `../structure.md` governs every research note. It is a standing reference, not a one-off prompt: it stays in the repository and applies to every specification file, now and in later revisions. The agent reads the sources listed below, then writes the specification files described here. Nothing else is asked of it: no interface, no code, no prototype.

## Role and goal

You are writing the functional specification of concept 1 · Own-train warning, the direction chosen in `Ideation/2026-10-26-05-concept-ai.md`, starting from the user stories it answers. Each specification you write will later be used, on its own, as an integration prompt: someone will paste one file into a building tool and ask it to add that part of the app. So every file must be complete by itself, describe what the app does and how it behaves, and say nothing about how it is built.

## Read first, in this order

1. `../structure.md` · the format every note in this repository follows.
2. `plan.md` · the brief, the questions and section 7, the only tags you may use.
3. `Ideation/2026-10-26-05-concept-ai.md` · the concept, the reduced feature set, the cut list, what lies beyond the moment, the assumptions, where the material is thin. This is the authority: do not revisit its choices.
4. `Synthesis/2026-10-23-03-user-stories-ai.md` · all the user stories, read in full. This is where the specifications start.
5. `Synthesis/2026-10-23-02-features-ai.md` · the feature behind each story you keep (F1, F8, F9 are the concept's set).
6. `Ideation/2026-10-26-01.1-how-might-we-ai.md` · questions #1 and #7 (and #8, reached through F9's reason line).
7. `Synthesis/2026-10-23-01.1-touchpoints-ai.md` · TP 10, TP 11, TP 12, TP 14, TP 23, TP 28, TP 44.
8. `Ideation/2026-10-26-03-clusters-ai.md` and `Ideation/2026-10-26-04-prioritisation-ai.md` · concepts 1, 3, 5, 8, 11, 41 and their V, F, R marks.
9. `2026-10-24-gaps-notes.md` · open gaps, in particular the open-data check never done.

Do not open transcripts or raw material. Do not use anything in `Reference/`.

## The files to write

Specifications start from the user stories, not from the concepts. The concept note sets the scope; the stories decide what the specifications are. Work in this order.

1. **Choose the stories.** Read every story in `Synthesis/2026-10-23-03-user-stories-ai.md`. Keep a story when it fits the moment (same day, from home up to the platform, before boarding) and the app could answer it inside concept 1 · Own-train warning. Leave it out when it falls outside the moment, needs a cut concept, or belongs under "Beyond the moment". The choice is yours; every story, kept or left out, gets a one-line reason in the final report.
2. **Group the stories by behaviour.** Stories that ask the app to do the same thing go into the same specification. One specification is one behaviour of the app, answering one or more user stories. A story that needs two behaviours feeds two specifications and is cited in each.
3. **Name each specification after its behaviour**, in the commuter's terms (for example "warned about my own train"), not after a concept or a feature.
4. **Map back to the concept.** For each specification, list the chosen concepts (1, 3, 5, 8, 11, 41) and the features it carries, as references. A chosen concept that no kept story reaches does not get a specification of its own: report it as uncovered, do not invent a story for it.

The number of files follows from the grouping; there is no fixed count. Files go in a new folder `Research/Specifications/`, named `2026-11-02-spec-NN-behaviour.md`, numbered in the order of the flow: set-up on a calm day first, then the warning on the bad morning.

If, while writing, one file turns out to hold two behaviours, stop and say so. Do not split or merge files without saying why.

## Rules for every file

- **Format.** Frontmatter as in `../structure.md`, with `activity: desk-research`, `channel: web`, `grade: tertiary`, `status: draft`, `confidence` no higher than the concept note's own (`low`). `related` lists every note the file cites. Body in `##` units, one unit one meaning.
- **Tags.** Only from `plan.md` section 7.
- **No technology.** Do not name platforms, devices, operating systems, languages, frameworks, data formats, services, vendors, notification channels or screen components. Write "the app tells the commuter", not how. Where the concept itself names the data (open data, GTFS), say "the operator's running information" instead. If a rule cannot be written without a technology, write the rule and leave the gap under "Open questions".
- **No interface.** Describe what the app shows and decides, not where or how it looks: no layouts, buttons, colours or screen counts.
- **Traceability.** Every behaviour traces to a feature (F), a user story, a touchpoint (TP), a question (#), a concept number or a quote. Cite quotes as in the concept note: participant code, part if any, timestamp, for example (P2 Pt.2 [00:06:15]). Keep `[untraced]`, `[thin]`, `[weak]` and `~` estimated timestamps where the sources carry them. A behaviour you add with no trace is marked `[untraced]`, never smoothed.
- **Participants.** Codes only (P1 to P6), never names.
- **Scope.** The moment is the same day, from home up to the platform, before boarding. The app gives facts; the decision stays with the commuter. No verdict, no "go" or "don't go". Nothing from the cut list, nothing from "Beyond the moment" (F11 on board), no days-ahead strike notice.
- **Language.** English, plain sentences. Do not use the em dash to split sentences.

## Body of every file

Use these units, in this order.

1. **`## Purpose`** · what this part does for the commuter, in two or three sentences.
2. **`## User stories`** · every user story this specification answers, each quoted in full with its source line, then one line on why they share this behaviour and what each one adds to it.
3. **`## References`** · a table: concept number and name, feature, every user story it answers (by feature code, one row per story), HMW question, touchpoints, V F R marks, one or two key quotes. Every row cites its source file.
4. **`## Behaviour`** · the logical description: what the app knows, what it decides, what it tells the commuter, in numbered rules. Each rule written as "When ..., the app ...". Each rule ends with its trace.
5. **`## States and data`** · what this part holds and how it changes: the information it needs (as meaning, for example "the usual train, its stops, the commuter's stop"), where it comes from (the commuter, or the operator's running information), the states it can be in and what moves it between them.
6. **`## Operations`** · the operational steps, as numbered sequences: what the commuter does, what the app does in reply, for the normal path and for each variant (no delay, delay under threshold, delay over threshold, cancellation, information missing or late, information changes after the warning).
7. **`## Links to the other specifications`** · which other files this one reads from or hands to, by file name, and what passes between them.
8. **`## Acceptance criteria`** · checkable statements, "Given ..., when ..., then ...", one per rule in Behaviour and one per variant in Operations.
9. **`## Out of scope`** · what this part must not do, with the reason from the cut list or the concept note.
10. **`## Assumptions and open questions`** · the concept note's assumptions that touch this part, with their test; plus any gap you met while writing.
11. **`## Integration prompt`** · a closing block, ready to paste into a building tool, that restates Purpose, Behaviour, Operations and Acceptance criteria as instructions ("Add to the app ..."), in plain words, still with no technology and no interface. It must make sense to a reader who has seen no other file.

## Points the specifications must settle

Each point below must be settled in whichever specification its stories lead to. If no kept story reaches a point, report it as uncovered.

- **The usual train.** How the commuter names their train once, and which stop is theirs. What happens when they take more than one train in a week (assumption from P4).
- **The threshold.** How the commuter sets the delay that would change their plans, what applies if they set none `[untraced]` unless a source says otherwise, and that a cancellation always passes the threshold.
- **The warning.** When the app speaks unasked (threshold passed or train cancelled) and when it stays silent; how early before departure; what a warning always contains; what happens when the delay changes after the warning.
- **The reason.** The reason as one line inside the warning, not a station board. What the warning says when no reason is known (P1 [00:10:42]).
- **The train on its way.** Following the saved train stop by stop, with the time it reached and left each stop, and the expected time at the commuter's stop (P3 [00:14:51]). What it shows when the train has neither left nor been cancelled (P2 Pt.2.1 [00:12:55]).
- **The next workable way.** The next way to make the trip that still works, shown with the warning, without telling the commuter what to choose. What it shows when there is none (P2 Pt.2.1 [00:01:34]). Flag that no feature in the set supplies the way itself.

## Before you finish

- Add each new file to `../index.md` the same day, under a `## Research/Specifications/` heading, in the existing format.
- Add every specification file to the `related` field of `Ideation/2026-10-26-05-concept-ai.md`.
- Check every file for: a technology or interface word, a participant name, a tag not in `plan.md`, an em dash used to split a sentence, a behaviour without a trace.
- Report: every user story, kept or left out, with its reason; for each kept story, the specifications it feeds; each chosen concept with the specifications that carry it, or "uncovered"; then the count: files written, stories per file, rules per file, acceptance criteria per file, `[untraced]` and `[thin]` marks per file.
