---
title: "Specification instructions · how AI agents turn the concept and its reduced set of user stories into specification files"
date: 2026-11-02
activity: plan
source: "Author's request on 2026-11-02, revised on 2026-11-05 against Lesson 06 · Specification (A. Andreetto); built on 05-Ideation/2026-10-26-05-concept-ai.md, the reduced set in 05-Ideation/2026-10-26-04-prioritisation-ai.md and the synthesis notes they rest on"
author: "Eugenia Valentina Muffolini"
channel: web
method: instruction file for AI agents, format specification
tags: [train, noticing, understanding, deciding, warning, alternative, routine]
confidence: high
grade: tertiary
status: draft
related: [../plan.md, ../../structure.md, ../05-Ideation/2026-10-26-05-concept-ai.md, ../05-Ideation/2026-10-26-04-prioritisation-ai.md, ../04-Synthesis/2026-10-23-03-user-stories-ai.md, ../04-Synthesis/2026-10-23-02-features-ai.md, ../04-Synthesis/2026-10-23-01.1-touchpoints-ai.md, ../05-Ideation/2026-10-26-01.1-how-might-we-ai.md, ../01.3-Raw/2026-10-24-gaps-notes.md]
---

# Specification instructions · from the concept to specifications

## What this file is

This file is the instruction set for writing the specifications of this repository. Any AI agent asked to write, extend or review a specification reads it first and follows it exactly, the same way `../../structure.md` governs every research note. It is a standing reference, not a one-off prompt: it stays in the repository and applies to every specification file, now and in later revisions. The agent reads the sources listed below, then writes the specification files described here. Nothing else is asked of it: no code, no prototype.

A specification is the product's functioning logic: what it does, in what sequence, under which conditions. It never says how the product is built. It is a living document: it is versioned with the repository, and whenever a later step (interface, prototype, test) changes a behaviour, the specification is updated in the same commit. A specification that no longer matches the product is wrong, not old.

## Role and goal

You are writing the functional specification of the app, starting from the concept document and the stories of its reduced set. Each specification has three readers:

- **A model that builds the prototype.** It receives Part A of one file as its prompt and adds that part of the app. It has never seen this repository, the research notes or the other specifications. Part A must be complete by itself and tell it what the app does, under which conditions, what the commuter gets and can do, and with which example data.
- **The developer.** Part A must be clear enough to build and to test without a meeting. If a rule needs explaining, it is not written yet.
- **The author (the designer).** Part B shows where every rule of Part A comes from and how it could fail, so the specification can be checked against the research.

## Read first, in this order

1. `../../structure.md` · the format every note in this repository follows.
2. `../plan.md` · the brief, the questions and section 7, the only tags you may use.
3. `../05-Ideation/2026-10-26-05-concept-ai.md` · the concept document: the chosen direction, the reduced set and the cut list. It is the authority on what the app is and on which stories are in.
4. `../05-Ideation/2026-10-26-04-prioritisation-ai.md` · the reduced set of stories, in its order, and why each one was kept or cut.
5. `../04-Synthesis/2026-10-23-03-user-stories-ai.md` · the full text of every story in the reduced set. It is the authority on what each story asks.
6. `../04-Synthesis/2026-10-23-02-features-ai.md` · the feature behind each story, its evidence and its confidence mark.
7. `../04-Synthesis/2026-10-23-01.1-touchpoints-ai.md` · the touchpoints each feature answers.
8. `../05-Ideation/2026-10-26-01.1-how-might-we-ai.md` · the How-Might-We question written for each story.
9. `../01.3-Raw/2026-10-24-gaps-notes.md` · open gaps and contradictions that touch the stories.

Stories on the cut list get no specification. Do not reopen the cuts. Do not open transcripts or other raw material. Do not use anything in `Reference/`.

## The files to write

Specifications start from the stories of the reduced set. Work in this order.

1. **Take every story in the reduced set.** Every one must feed at least one specification. A story that resists (for example, its value has no trace, or it asks for a behaviour the concept rules out) is not forced into a file: it is listed in the final report as resisting, with a one-line reason.
2. **Find the behaviours.** One specification is one behaviour of the app, not one story. Stories that ask the app to do the same thing merge into the same specification. A story that needs two behaviours feeds two specifications and is cited in each. You decide the grouping.
3. **Group the behaviours by feature**, in the order of the reduced set. Specifications of the same feature are numbered one after the other. Inside a feature, follow the moment of the journey (before the trip, at the station, on the train, replacement, connection, recovery).
4. **Name each specification after its behaviour**, in the commuter's terms (for example "warned about my own train"), not after a feature code.

The number of files follows from the grouping; there is no fixed count. Files go in `Research/06-Specifications/`, named `2026-11-02-spec-NN-behaviour.md`, numbered in the order above.

If, while writing, one file turns out to hold two behaviours, stop and say so. Do not split or merge files without saying why.

## Rules for every file

- **Format.** Frontmatter as in `../../structure.md`, with `activity: desk-research`, `channel: web`, `grade: tertiary`, `status: draft`, `confidence` no higher than the lowest of the notes it cites. `related` lists every note the file cites. Body in two parts, each made of `##` units, one unit one meaning.
- **Linked to its stories.** Every specification answers one or more user stories and must be reachable from them by link. Its `related` field lists the file of every story it answers, from `../04-Synthesis/User Stories/` (for example `../04-Synthesis/User Stories/2026-10-23-user-story-01-f01-own-train-alert-before-leaving.md`). Each of those story files lists the specification in its own `related` field.
- **Tags.** Only from `../plan.md` section 7.
- **Logic, never implementation.** Do not name software, tools, products, programming languages, frameworks or libraries, and do not say how the app is built. Where a source names a data format (open data, GTFS), say "the operator's running information" instead. Do not design the interface either: no screens, layouts, components or visual style. Say what information the commuter gets, what each message must say, and which actions they can take. Where appearance matters, write it as a constraint with numbers or rules (for example "the delay is readable at a glance: one line, minutes first"), never as a screen.
- **Part A stands alone.** No feature codes, touchpoint numbers, question numbers, file paths, participant codes or evidence marks in Part A. Rules are numbered (R1, R2, ...) so that Part B can trace them.
- **Every rule has a source.** Every rule of Part A traces, in Part B, to a user story, and through it to a feature (F), a touchpoint (TP), a question (#) or a quote. Cite quotes as the user stories note does: participant code, part if any, timestamp, for example (P2 Pt.2 [00:06:15]). Keep `[strong]`, `[weak]`, (?), ⚠ caveats and `~` estimated timestamps where the sources carry them. A rule with no story behind it is deleted, not defended. If you think it is needed, write it as an open question in Part B instead.
- **Do not invent.** Where the stories and the research are silent on a condition, an edge case or a value, write "unspecified". Never fill the gap with a plausible guess.
- **Edges come from the research.** The contradictions and caveats in the sources (⚠, gaps) become edge cases in the conditions of the rules they touch, marked, not smoothed.
- **Open choices are marked.** Where the stories allow more than one behaviour and the choice is a design decision, write both and mark the rule `[open]`. The author decides before Part A is used as a prompt.
- **Every rule is checkable.** Either the app does what the rule says, or it does not. A rule that describes a feeling ("the app feels reliable") is not a rule: rewrite it as behaviour.
- **Stay inside the story.** Each story's who, circumstance, capability and value are the limit. Do not widen a capability beyond what its story asks.
- **Participants.** Codes only (P1 to P6) in Part B, never names. App Store reviewers (REV) are evidence, never the "who".
- **Language.** English, plain sentences. Do not use the em dash to split sentences.

## Body of every file

### Part A · Specification (the prompt for the prototype)

Open with the heading `# Part A · Specification`, then these units, in this order.

1. **`## Purpose`** · what this part of the app does for the commuter, which feature it belongs to (by its plain name) and in which moment of the journey, in two or three sentences.
2. **`## Who it is for`** · the commuters the stories describe, by their commute and circumstance, without codes or names.
3. **`## Behaviour`** · the rules, as a table with one row per rule and these columns: `rule | actor | action | response | conditions and edges | state changes`.
   - **Actor:** who or what starts the behaviour: a specific commuter, the app itself, or an outside trigger (for example the operator's running information changing).
   - **Action:** what the actor does, or what event occurs.
   - **Response:** what the app does in return.
   - **Conditions and edges:** when the rule applies, and what happens in each edge case (information missing, late, or changing after the commuter has been told). "unspecified" where the sources are silent.
   - **State changes:** what is different in the app after the rule has run.
4. **`## States and data`** · the information this part needs (for example "the commuter's train, its stops, the commuter's stop"), where it comes from (the commuter, or the operator's running information), and the states it can be in, as the state changes of the rules move it between them.
5. **`## What the commuter gets and does`** · step by step, for the normal path and for every variant the rules imply (for example: no problem, delay, cancellation, information missing or late, information that changes after the commuter has been told): what information the app gives, what each message must say, the actions the commuter can take, what the app does in reply. No screens or layouts.
6. **`## Example scenarios`** · two to four concrete scenarios, each one walked through the steps above. The prototype runs on these. Take the data (times, stations, delays, reasons) from the stories' circumstances and quotes; where they give none, write "unspecified" rather than invent a value. Real station and line names from the stories are allowed; participant codes and names are not.
7. **`## Acceptance criteria`** · checkable statements, "Given ..., when ..., then ...", one per rule and one per edge case.
8. **`## Out of scope`** · what this part must not do, because no story asks for it or the concept cuts it.
9. **`## Links to other parts of the app`** · which other specifications this one reads from or hands to, by their behaviour name, and what passes between them.

### Part B · Traceability (for the author)

Open with the heading `# Part B · Traceability`, then these units.

1. **`## User stories`** · every user story this specification answers, each quoted in full with its source line, then one line on why they share this behaviour and what each one adds to it.
2. **`## References`** · a table, one row per story: feature (code, name, confidence mark), HMW question, touchpoints, one or two key quotes, gaps from the gaps note. Every row cites its source file.
3. **`## Rule trace`** · a table, one row per rule of Part A: rule number, story, touchpoint, quote or note it rests on, marks (`[weak]`, ⚠, `[open]` where they apply).
4. **`## Verifiability pass`** · see the next section.
5. **`## Assumptions and open questions`** · what this specification takes for granted without evidence, and what would test it; weak marks, caveats and gaps that touch it; rules you wanted to add but could not trace; `[open]` choices waiting for the author.

## Verifiability pass

After writing Part A, attack every rule and write the result in Part B, `## Verifiability pass`, as a table: `rule | how it fails | what is missing | what is uncheckable | severity`.

- **Ask how the app could break the rule in use.** If you cannot say how a rule fails, it cannot be checked: that is a finding.
- **Attack the writing, not the idea.** Whether the feature is worth building was decided in the concept.
- **Evidence first.** An edge case counts only if the rule's own conditions can reach it. No horror scenarios the story cannot produce.
- **Severity:** `[fatal]` the rule breaks, `[fixable]` it needs a line, `[note]` worth knowing. Honest, no drama.
- **Do not repair.** Find and mark the failures; the author fixes them. After the author fixes a `[fatal]`, run the pass again on that rule. A rule is verified only when nothing above `[note]` remains.

## Before you finish

- Add each new file to `../../index.md` the same day, under the existing specifications heading, in the existing format.
- Add every specification file to the `related` field of `../04-Synthesis/2026-10-23-03-user-stories-ai.md`.
- Check every file for: a story it answers missing from its `related` field, or a story file that does not link back to it; a rule with no source; a named software, tool or programming language; a screen or layout described in Part A; a code, path or name in Part A; an invented value where "unspecified" was due; a participant name anywhere; a tag not in `../plan.md`; an em dash used to split a sentence; a rule without a row in the rule trace or in the verifiability pass; a capability wider than its story.
- Report:
  - **Coverage map:** every story of the reduced set, with the specifications it feeds.
  - **Resisting stories:** the stories that feed no specification, each with its reason, marked, not forced.
  - **Counts:** stories in, files written, files that merge more than one story, rules per file, edge cases per file, `[open]` choices per file, scenarios per file, acceptance criteria per file, and the verifiability pass per file (`[fatal]`, `[fixable]`, `[note]`).
  - **The three worst rules,** the ones closest to `[fatal]`, for the author to fix first.
- Commit the specifications with the repository. When a later step changes a behaviour, update the specification it belongs to in the same commit.
