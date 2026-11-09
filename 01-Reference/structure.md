---
title: "Research note structure — instructions for AI agents"
date: 2026-10-05
activity: structure
source: "Course material — Lesson 02 · Ingestion"
author: "Alberto Andreetto"
channel: course
method: format specification
tags: [ingestion, format, metadata, template]
confidence: high
grade: tertiary
status: complete
related: [plan.md, interview.md, desk.md, index.md]
---

# Research note structure — instructions for AI agents

This file is the format specification for this research repository. Any AI agent — or human — creating or editing a note here follows it exactly. Consistency between notes is what makes the knowledge base retrievable later: the same fields, in the same order, in every file.

## The metadata block

Every note **must** open with a YAML frontmatter block, before any content:

```yaml
---
title: "Descriptive, specific — one line"
date: 2026-10-08            # when the evidence was collected (YYYY-MM-DD)
time: "07:55–08:20"         # optional — time of day for interviews and observations
activity: interview         # interview | observation | shadowing | mystery-shopping | desk-research | plan
source: "Who or what produced the evidence — a person and their role, or a publication"
author: "Who collected or produced the note"
channel: in-person          # in-person | phone | video | web | publication
method: semi-structured interview   # the specific method used
location: Milano Centrale   # where — omit for desk research
tags: [commute, delays]     # lowercase, consistent vocabulary, no invention
confidence: high            # high | medium | low — how much you trust this evidence
grade: primary              # primary | secondary | tertiary — the source grade
status: complete            # draft | complete | needs-review
related: [plan.md]          # links to related notes in this repository
---
```

**Field rules:**

- `confidence` is about *this* piece of evidence, not the topic. A low-confidence note is an honest note — mark it, don't hide it.
- `grade` follows the source ladder: `primary` (you collected it, or it is original data) > `secondary` (someone's reporting of data) > `tertiary` (opinion, blog, unverified).
- `tags` come from the research plan's tag list whenever possible. Do not invent near-synonyms (`delay` vs `delays`) — one term, one tag.
- `date` is the collection date, not the writing date. The writing history is in git.

## File naming

```
YYYY-MM-DD-type-source.md
```

Example: `2026-10-08-interview-marta-bianchi.md` — lowercase, hyphen-separated. The filename alone says when it was collected, what kind of material it is, and where it came from.

## Body structure

The body is plain prose organized into **units**: each `##` heading is one unit, and one unit is one complete meaning. Rules:

1. **One unit, one meaning.** If a unit covers two ideas, split it into two units.
2. **Self-contained sentences.** Anyone — human or agent — reading only this note must understand it without opening other files.
3. **Quotes carry timestamps.** In interview and observation notes, quotes are blockquotes with the timestamp from the transcript: `> "..." — [00:04:12]`.
4. **No interpretation mixed with evidence.** A separate final unit (`## Signals`) maps what was said to the brief's pain points — clearly marked as reading, not as what the person said.

## Folders

```
research/
  plan.md          ← the research plan — the container everything answers to
  index.md         ← the map: every note listed with type and status
  notes/           ← derived, structured notes (one file per source)
  transcripts/     ← verbatim transcripts — artifacts, never edited
  raw/             ← unprocessed material: recordings, spontaneous notes, screenshots
```

## Non-negotiable rules

1. **One file per source.** Never merge, never rewrite. New evidence is a new note.
2. **Never edit a transcript.** The transcript is the artifact; the note is the derived view. If a finding is questioned later, you go back to the transcript.
3. **Every note lands in `index.md`** the moment it is committed, with type and status.
4. **Update `related` links** whenever a note connects to another — the network is the scalability.
5. **Same metadata at 10 notes and at 200.** Nothing about the shape changes as the base grows.
