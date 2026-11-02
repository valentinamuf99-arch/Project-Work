---
title: "Research plan · Redesigning the commute"
date: 2026-10-05
activity: plan
source: "Brief 01 · Redesigning the commute, and the key research questions derived from it"
author: "Eugenia Valentina Muffolini"
channel: course
method: research planning
tags: [train, vicenza, padova, routine-break, noticing, understanding, deciding]
confidence: high
grade: primary
status: complete
related: [../brief.md, interview-script.md, ../structure.md, ../index.md, 2026-10-24-gaps-notes.md, Desk research/2026-10-12-benchmark.md, Desk research/2026-10-13-review-analysis-trenitalia-trainline.md, Ideation/2026-10-26-02-ideation-human.md, Ideation/2026-10-26-04-prioritisation-ai.md, Ideation/2026-10-26-05-concept-ai.md]
---

# Research plan · Redesigning the commute

Based on [brief.md](../brief.md).
Research window: **one week, 05/10 → 12/10/2026**.
Context: **Vicenza–Padova area (Veneto)**. Participants commute there by train, to work or university.

> Every assumption from the brief (A1–A11) is treated as a **hypothesis** until the research confirms or rejects it. Nothing in this plan proposes a design solution.

---

## 1. Research goals

1. **Check that the problem is real and frequent.** Find out how often the routine breaks, and how commuters tell an ordinary delay from "today is different" (H: A3, A4).
2. **Understand the moment of the break.** Learn when commuters notice the break, where the first signal comes from, and how they find alternatives (H: A6, A7, A9).
3. **Check whether uncertainty is the main pain.** Test the brief's central claim, which comes from a single personal experience (H: A8).

---

## 2. Priority questions

These 6 questions test the core of the brief. If they fail, the problem framing changes.

| # | Question (short) | Tests | Why it comes first |
|---|---|---|---|
| Q11 | How do they tell an ordinary delay from "today is different"? What is the threshold? | A3, A4 | This is the core of the brief. |
| Q15 | Is uncertainty really worse than the delay itself, or only in some situations? | A8 | The brief generalises from one experience. |
| Q9 | How often does the routine break in a way that changes plans? | A4 | Frequency decides whether the problem matters at all. |
| Q12 | At what moment do they realise the routine has broken? | A6 | When they notice decides how many options are left. |
| Q17 | Where do they first learn that something is wrong? | A7 | This shows what the current information chain actually delivers. |
| Q24 | Were past alternatives planned, suggested or found by chance? | A9 | Directly tests the claim that alternatives are found by luck. |

---

## 3. Human-led research: interviews

**Format:** semi-structured interviews, remote, **30 min**, recorded with consent. Each interview walks through the participant's **most recent disrupted journey**, step by step. The script is in [interview-script.md](../interview-script.md).

**Required question on apps:** *"Which apps or sources do you use for your commute, and which one did you open during that last disrupted journey?"* (Q6). The answers are used to adjust the benchmark to what participants actually use.

**Sample:** 4 confirmed participants (P1–P4), plus a fifth (P5) still to recruit. P5 is a target, not a certainty. Only participant codes are used, never real names.

| Code | Commute | Mode | Status | Interview |
|---|---|---|---|---|
| P1 | Work | Train | Confirmed | 2026-10-07 |
| P2 | Work | Train | Confirmed | 2026-10-07 |
| P3 | Work | Train | Confirmed | 2026-10-08 |
| P4 | University | Train | Confirmed | 2026-10-09 |
| P5 | Work or university | Train | To recruit | 2026-10-10, if recruited |

The sample includes **work and university commuters**. Note any differences between the two groups, but treat them as **hypotheses**: with only one confirmed university commuter (P4), a difference is a lead to follow up, not a finding. Points worth checking, not assumed: how fixed their route and timetable are (Q2) and what being late costs them (Q8).

For each interview, the same day: the recording goes in `research/raw/`, the verbatim transcript in `research/transcripts/` and the derived note in `research/notes/`. Notes follow [structure.md](../structure.md), and every file is added to [index.md](index.md). Files use participant codes, never real names.

| Code | Note | Transcript |
|---|---|---|
| P1 | `research/notes/2026-10-07-interview-p1.md` | `research/transcripts/2026-10-07-transcript-p1.md` |
| P2 | `research/notes/2026-10-07-interview-p2.md` | `research/transcripts/2026-10-07-transcript-p2.md` |
| P3 | `research/notes/2026-10-08-interview-p3.md` | `research/transcripts/2026-10-08-transcript-p3.md` |
| P4 | `research/notes/2026-10-09-interview-p4.md` | `research/transcripts/2026-10-09-transcript-p4.md` |
| P5 | `research/notes/2026-10-10-interview-p5.md` | `research/transcripts/2026-10-10-transcript-p5.md` |

---

## 4. AI-led research: desk research

Desk research notes go in `research/notes/YYYY-MM-DD-desk-research-<topic>.md`, where the date is the day the collection is completed.

- **Benchmark (required)** → `research/notes/YYYY-MM-DD-desk-research-benchmark.md`
  - **Timing:** starts after P4 (Fri 09/10), using the apps participants actually mentioned. Complete and verified on a phone by Sun 11/10.
  - **Starting candidates:** Trenitalia (train), Busitalia Veneto (bus, Padova), Google Maps and Moovit. This covers one train operator, one bus operator and two apps that aggregate several operators. Maximum 4 apps.
  - **Vicenza bus:** SVT, the Vicenza bus operator, has no confirmed journey-planning app. The only verified SVT app is ChiamaBus, an evening on-demand service, so it is left out for now. Swap it in if participants say they use an SVT app.
  - **Final list from the interviews:** if participants rely on an app that is not in the list, replace Google Maps or Moovit with it.
  - **Bus operators kept for now:** Busitalia Veneto and SVT stay in the candidate list and the open data check until Fri 09/10, when the P1–P4 app answers decide. All participants commute by train, but they may still have a bus leg (for example from the station to work).
  - **Focus:** how each app signals delays, cancellations and disruptions, and how it shows alternatives.
  - **Questions:** Q17, Q24.
  - **Limit:** the AI may describe features that are outdated or invented, so every claim is checked on a phone.
- **App store reviews (if time allows, after the interviews)** → `research/notes/YYYY-MM-DD-desk-research-app-reviews.md`
  - **Scope:** reviews of the same apps that mention delays and unreliable arrival times.
  - **Questions:** Q9, Q15.
  - **Limit:** people who review are mostly angry users, and quotes must be verified against the source.
- **Open data availability check (if time allows, after the interviews)** → `research/notes/YYYY-MM-DD-desk-research-open-data.md`
  - **Scope:** check which GTFS and GTFS Realtime feeds exist for Trenitalia, Busitalia Veneto and SVT. Starting points are the Mobility Database, the operators' websites and the Veneto Region open data portal.
  - **Output:** a short table showing, for each operator, whether there is a static feed, a realtime feed and service alerts, with the licence for each. This is only an availability check, not a data analysis.
  - **Tests:** A11.
  - **Limit:** finding a feed listed does not mean it is maintained or accurate.

---

## 5. Day-by-day plan

| Day | Human-led | AI-led |
|---|---|---|
| **Mon 05/10** | Write [interview-script.md](../interview-script.md). Confirm slots with P1–P4. | Set up `research/` following [structure.md](../structure.md). |
| **Tue 06/10** | No interviews. Rehearse the script aloud and time it. Recruit P5. | No AI-led work. |
| **Wed 07/10** | Interview **P1** and **P2**. Write notes. | No AI-led work: interview day. |
| **Thu 08/10** | Interview **P3**. Write notes. | No AI-led work: interview day. |
| **Fri 09/10** | Interview **P4**. Write notes. | After P4: fix the benchmark list using the app answers from P1–P4, and start the benchmark. |
| **Sat 10/10** | Interview **P5**, only if recruited. Otherwise, backup slot. | Continue the benchmark. Add P5's apps if P5 mentions one not yet covered. |
| **Sun 11/10** | Tag the findings against Q9–Q24 and A3–A9. Note possible differences between work and university commuters, as hypotheses. | Finish the benchmark and verify every claim on a phone. Cross-check the desk research against the interviews. |
| **Mon 12/10** | **Research closed.** Tidy all files in `research/`. | |

*If time allows*, after the interviews and with no fixed day: app store reviews and the open data availability check. The benchmark comes first.

---

## 6. Risks and mitigations

| Risk | Mitigation |
|---|---|
| P5 is not recruited | 4 interviews are enough to test the core hypotheses. Report the sample as 4 participants. |
| A confirmed interview gets cancelled | Move it to Sat 10/10, the only free backup slot. Two interviews fit in one day, as on Wed 07/10, so P5 can still take place. |
| AI hallucination in the desk research | Ask for a source for every claim. Spot-check the apps on a phone. Mark anything unverified. |
| Leading participants toward the brief's own story (A8) | Ask about behaviour during the last incident. Do not mention "uncertainty" first. |
| Not enough time to analyse | Write notes the same day as each interview. Keep Sun 11/10 for synthesis prep and closing the benchmark only. |

---

## 7. Tags

The controlled vocabulary for the `tags` field of every note in `research/`. Rules:

- Use only the tags below. Lowercase, hyphen-separated, singular.
- One term per concept. Do not add near-synonyms (`alternatives`, `plan-b`, `delays`): use the existing tag.
- If a note needs a concept that is missing, add the tag here first, with its definition, then use it.
- Do not tag the type of material (interview, transcript, desk research): the `activity` field already says it.

**Context**

| Tag | Use for |
|---|---|
| `train` | Regional train legs of the commute. |
| `bus` | Bus legs, for example from the station to work or university. |
| `boat` | Boat legs, for example from the Lido di Venezia to the mainland. |
| `vicenza` | Evidence specific to Vicenza or its stations and lines. |
| `padova` | Evidence specific to Padova or its stations and lines. |
| `venezia` | Evidence specific to Venezia, including Mestre and the Lido, or its stations and lines. |
| `castelfranco` | Evidence specific to Castelfranco Veneto or its station, for example the change on the Bassano–Padova line. |
| `rovigo` | Evidence specific to Rovigo or its station and lines. |
| `monselice` | Evidence specific to Monselice or its station and lines. |
| `work-commute` | Commuting to work (A1). |
| `university-commute` | Commuting to university (A1). |

**The routine and its breaks**

| Tag | Use for |
|---|---|
| `routine` | The ordinary day: habits, the usual train, tacit route knowledge (A1, A3, Q2, Q5). |
| `ordinary-delay` | A delay the commuter expects and accepts without changing plans (brief, key terms). |
| `routine-break` | An event that forces a decision the commuter would not normally make (brief, key terms; A4). |
| `break-frequency` | How often the routine breaks (Q9). Not the frequency of the service. |
| `cancellation` | A cancelled run (A5). |
| `strike` | A strike, announced or sudden (A5, Q13). |
| `long-delay` | A delay long enough to break the routine (A5). |
| `missed-connection` | A connection lost because of a delay (A5, Q4). |

**The three moments (brief)**

| Tag | Use for |
|---|---|
| `noticing` | Telling an ordinary delay from a break, and when that happens (A6, Q11, Q12). |
| `understanding` | Finding out what is going on and how long it will last (A7, Q22). |
| `deciding` | Choosing between waiting, changing route or giving up (A6, Q20, Q21). |

**Information and decision**

| Tag | Use for |
|---|---|
| `information-source` | Where information comes from: apps, boards, announcements, other passengers, chat groups (Q6, Q17). |
| `trust` | Which sources they trust or distrust, and why (Q18, Q28). |
| `uncertainty` | Not knowing what will happen, and how that feels compared with the delay itself (A8, Q15). |
| `waiting` | Time spent waiting and the threshold for giving up on a run (Q21). |
| `alternative` | Any other way to complete or give up the journey, and how it was found (A9, Q24). |
| `cost-of-lateness` | What being late costs: time, money, stress, consequences at work or university (Q8, Q14). |
| `notifying-others` | Telling or involving other people: employer, family, colleagues (Q23). |
| `coping-strategy` | What they changed after past breaks: leaving earlier, a plan B (Q25). |

**Help, AI and data**

| Tag | Use for |
|---|---|
| `warning` | Being warned or advised about a problem, and how they reacted (Q29, Q32). |
| `autonomy` | Decisions they want to keep for themselves (Q30). |
| `ai` | Prediction or personalisation, only when the participant or source raises it (A10). |
| `privacy` | Personal data they would or would not share (Q31). |
| `open-data` | GTFS, GTFS Realtime and service alert feeds (A11). |

**Apps and operators**

| Tag | Use for |
|---|---|
| `trenitalia` | Trenitalia app, site or announcements. |
| `busitalia-veneto` | Busitalia Veneto (Padova bus). |
| `svt` | SVT (Vicenza bus). |
| `avm-venezia` | AVM Venezia app (tickets for Venezia public transport, including boats). |
| `google-maps` | Google Maps. |
| `moovit` | Moovit. |
| `trainline` | Trainline app (train tickets from several operators, including Trenitalia). |
| `viaggiatreno` | ViaggiaTreno website (real-time running information for a single train, searched by train number). |

Add other apps here, in the same form, when participants mention them.

---

## 8. Changes during the project

This section records where the work departed from the plan above, which is kept as written: the gap between plan and reality is itself a finding. Each row was checked against the file named in the last column; a row or a detail that could not be checked is marked [unverified].

| date | what the plan said | what happened | why | where it is |
|---|---|---|---|---|
| 2026-10-09 | §3: 4 confirmed participants (P1 to P4) plus P5 still to recruit; §6: "Report the sample as 4 participants". | 6 participants were interviewed, P1 to P6. P5 and P6 were both recruited. | The reason for recruiting a sixth participant is not recorded in the repository. | `Notes/` (six interview notes), `Raw/Original transcripts/` (six transcripts), `2026-10-24-gaps-notes.md` |
| 2026-10-07, 2026-10-09 | §3 and §5: P1 and P2 on 07/10, P3 on 08/10, P4 on 09/10, P5 on 10/10 if recruited. | P1, P2, P3 and P4 were interviewed on 2026-10-07; P5 and P6 on 2026-10-09. | Not recorded in the repository. | `date` in the frontmatter of the six notes in `Notes/` and in the transcript file names |
| 2026-10-07 | §3: remote interviews of 30 min. | All six interviews were remote, by phone, between 13 and 25 min long. | Not recorded in the repository. | `channel: phone` and `location: remote` in the six notes; lengths as listed in `2026-10-24-gaps-notes.md` |
| 2026-10-07 | §3: P1, P2 and P3 commute to work, P4 to university; only one university commuter. | P1 and P2 commute to work; P3, P4, P5 and P6 commute to university (4 of 6). The plan's caution on group differences now applies to the work side, which rests on two people. | The plan's P3 row was a guess before the interview. | `source` and `tags` (`work-commute`, `university-commute`) of the six notes in `Notes/` |
| 2026-10-07, 2026-10-09 | Header: Vicenza to Padova area. | The area is wider: the Lido di Venezia and Mestre (P1, P2), Bassano and Castelfranco (P3, P4), Rovigo (P5), Monselice (P6), towards Vicenza (P1, P2) and Padova (P3 to P6). The tags `boat`, `venezia`, `castelfranco`, `rovigo` and `monselice` are already in §7. | The participants recruited live outside the Vicenza to Padova corridor. | `title` and `source` of the six notes in `Notes/` |
| 2026-10-07 | §3 and §4: notes in `research/notes/` named `interview-pN`, transcripts in `research/transcripts/`, desk research as `research/notes/YYYY-MM-DD-desk-research-<topic>.md`, "Files use participant codes, never real names". | Interview notes are in `Notes/`, named with the participant's real name, as `CLAUDE.md` requires. Original transcripts are in `Raw/Original transcripts/`, timestamped transcripts in `Transcript/`, desk research in `Desk research/` without the `desk-research` prefix. Inside notes and transcripts, participant codes only are still used. The paths in §3 and §4 and the "never real names" rule for file names no longer apply. | The file name rule changed in `CLAUDE.md`. | `CLAUDE.md`, folder listing of `Research/` |
| 2026-10-12 | §4: benchmark of at most 4 apps (Trenitalia, Busitalia Veneto, Google Maps, Moovit, adjusted by the interviews), verified on a phone by Sun 11/10. | The benchmark covers the apps participants mentioned: Trenitalia, ViaggiaTreno, Trainline, AVM Venezia and SVT, with Google Maps only in the comparison table. Busitalia Veneto and Moovit are not covered. It is dated 2026-10-12 and was not verified on a phone. | §4 allowed the list to follow the apps participants actually use; no participant mentioned Busitalia Veneto or Moovit. | `Desk research/2026-10-12-benchmark.md` |
| 2026-10-13 | §4: app store reviews of the benchmark apps, if time allows. | An App Store review analysis of Trenitalia and Trainline was added: 33 screenshots, about 45 Trenitalia and 30 Trainline reviews. A note on commuting statistics, not in the plan, was added the same day. | Trenitalia is the app all six participants mention; Trainline is the only other train app in the interviews. | `Desk research/2026-10-13-review-analysis-trenitalia-trainline.md`, `Desk research/2026-10-13-commuting-statistics.md`, `Raw/Trenitalia screenshot reviews/`, `Raw/Trainline screenshot reviews/` |
| 2026-10-24 | §4: open data availability check (GTFS, GTFS Realtime, service alerts) testing A11, if time allows. | Never done; no open data note exists. A11 is still untested. | Not recorded in the repository. | `2026-10-24-gaps-notes.md` (plan.md, "Open data check never done") |
| 2026-10-23 to 2026-10-26 | §5: research closed on Mon 12/10; Sun 11/10 for tagging findings and synthesis prep. No phases after the research window. | The work went on after the window. Synthesis on 2026-10-23: touchpoints, features, user stories. Gaps review on 2026-10-24. On 2026-10-26: How-Might-We questions, ideation, clusters, prioritisation and concept. | The project continued past research into synthesis and ideation. | `Synthesis/` and `Ideation/` file names and frontmatter dates; `../index.md` (which lists some of these files under older names, and one, `2026-10-27-ideation-ai.md`, that does not exist) |
| 2026-10-26 | Not in the plan, which proposes no design direction. | Chosen moment, first version: "before boarding, from days ahead up to the platform", when the commuter needs to know whether their train is late, cancelled or hit by a strike, and decide what to do. | Chosen by the author for ideation. | `Ideation/2026-10-26-02-ideation-human.md`, `Ideation/2026-10-26-03-clusters-ai.md`, `Ideation/2026-10-26-04-prioritisation-ai.md` |
| 2026-11-02 | Not in the plan. | Chosen moment narrowed: "the same day, from home up to the platform, before boarding". Days ahead are no longer part of it. | Decided by the author after the clusters and prioritisation notes were written. | `Ideation/2026-10-26-05-concept-ai.md` (Scope and method; the edit date is in its `source` field) |
| 2026-10-26 | Not in the plan. | Prototype defined: one flow of 4 to 5 screens, in Figma or as a clickable HTML prototype, with simulated data only, built by the author with an AI agent. That the agent is Claude is [unverified]: the notes say "an agent". | Used as the "feasible" test in prioritisation. | `Ideation/2026-10-26-04-prioritisation-ai.md`, `Ideation/2026-10-26-05-concept-ai.md` ("Prototype fit") |
| 2026-10-26 | Not in the plan. | Chosen concept: 1 · Own-train warning. It tells a commuter who takes the same train every day, without them having to check, that this train is late or cancelled, and why. | Chosen by the author from the prioritisation. | `Ideation/2026-10-26-05-concept-ai.md` |
| 2026-11-02 | Frontmatter and the "Based on" line linked `questions.md`, and `research/index.md`. | `questions.md` does not exist anywhere in the research base, so its links were removed; the assumptions A1 to A11 and questions Q1 to Q32 cited in this plan cannot be checked in the repository. The index is at the repository root and is now linked as `../index.md`; `interview-script.md` is in the same folder as this plan. The links inside §3 and §5 are left as written. | The file was never added to the repository. | Folder listing of the repository; `2026-10-24-gaps-notes.md` (plan.md, "Missing files the plan depends on") |
