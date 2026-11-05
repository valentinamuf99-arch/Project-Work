---
title: "Gaps notes · contradictions and gaps found across the research base, by document"
date: 2026-10-24
activity: desk-research
source: "Every file in research/ (plan, interview script, interview notes P1 to P6, timestamped and original transcripts, spontaneous notes, desk research notes, touchpoint, feature and user story notes, research.html), plus index.md, brief.md, structure.md and CLAUDE.md for the rules they are checked against, read on 2026-10-24"
author: "Eugenia Valentina Muffolini"
channel: web
method: consistency review across notes, each item checked against the transcript where the notes disagree
tags: [information-source, trust, routine-break, break-frequency, alternative]
confidence: medium
grade: tertiary
status: needs-review
related: [plan.md, interview-script.md, touchpoints-human.md, 2026-10-23-touchpoints-ai.md, 2026-10-23-features-ai.md, 2026-10-23-user-stories-ai.md, Desk research/2026-10-12-benchmark.md, Desk research/2026-10-13-review-analysis-trenitalia-trainline.md, Desk research/2026-10-13-commuting-statistics.md, Notes/2026-10-07-interview-lucrezia-gradi.md, Notes/2026-10-07-interview-matteo-galvagni.md, Notes/2026-10-07-interview-lorena-tonuzi.md, Notes/2026-10-07-interview-greta-tonuzi.md, Notes/2026-10-09-interview-anna-baggio.md, Notes/2026-10-09-interview-benedetta-rossi.md]
---

# Gaps notes · contradictions and gaps across the research base

## Scope and method

Every file in `research/` was read, and `index.md`, `brief.md`, `structure.md` and `CLAUDE.md` were used as the rules the files are checked against. Where two notes disagree about what a participant said, the timestamped transcript was checked, because the transcript is the source of truth.

Each item is marked:

- **[Contradiction]**: two documents, or two parts of the same document, say incompatible things about the same fact (a date, a count, a citation, a rule).
- **[Divergence]**: a participant's account differs from another participant's, from an official figure, or from what was jotted down in the spontaneous notes. Participants have different experiences and recount them as such, so a divergence is not an error: it is kept and noted, not resolved.
- **[Gap]**: something the plan, the brief or the repository rules require is missing, or a claim has no evidence behind it.

Each item gives the reference (file, line or section, timestamp) and why it counts. Items are listed under the document where the problem sits; when two documents conflict, the item is under the one that should change, with a pointer to the other. Participants are cited by code only.

## plan.md

- **[Contradiction] Sample size.** §3 (lines 55 to 63) plans 4 confirmed participants plus a possible P5. Six were interviewed (P1 to P6). The plan was never updated, so the risk table (§6, "Report the sample as 4 participants") no longer applies.
- **[Contradiction] Work vs university split.** §3 lists P3 as a work commuter and expects only one university commuter (P4). In the notes P1 and P2 commute to work and P3 to P6 are university students (4 of 6). The plan's warning that "a difference is a lead, not a finding" now applies to the work side, which rests on two people, both on office days only.
- **[Contradiction] Interview dates.** §3 and §5 schedule P3 on 08/10, P4 on 09/10, P5 on 10/10. The notes date P3 and P4 on 2026-10-07 and P5, P6 on 2026-10-09. See also the P4 date item under "Transcripts and raw material".
- **[Contradiction] Interview format.** §3 says remote video interviews of 30 minutes. Every note says phone, and the lengths are 13 (P5), 15 (P6), 18 (P4), 21 (P3), 22 (P1) and 25 minutes (P2).
- **[Contradiction] Folders and file names.** §3 (lines 67 to 75) and §4 put notes in `research/notes/` named `interview-pN`, transcripts in `research/transcripts/`, desk research as `YYYY-MM-DD-desk-research-<topic>.md`, and say "Files use participant codes, never real names". The repository uses `Notes/` with real names (allowed by `CLAUDE.md`), `Transcript/` with a `-timestamped` suffix, `Desk research/` without the `desk-research` prefix. The plan and `CLAUDE.md` now give opposite rules on file names.
- **[Gap] Missing files the plan depends on.** Line 13 links `questions.md` and `research/index.md`; line 18 and the brief point to `questions.md` for assumptions A1 to A11 and questions Q1 to Q32. `questions.md` does not exist and `index.md` is at the repository root. Every note's Signals cites A3 to A11 and Q9 to Q32, but their wording cannot be checked anywhere in the repository.
- **[Gap] Benchmark scope not followed.** §4 asks for at most 4 apps (Trenitalia, Busitalia Veneto, Google Maps, Moovit, adjusted by the interviews) verified on a phone by 11/10. The benchmark covers six (Trenitalia, ViaggiaTreno, Trainline, AVM Venezia, SVT, Google Maps in the table only), drops Busitalia Veneto and Moovit without saying why, is dated 12/10 and was not verified on a phone.
- **[Gap] Open data check never done.** §4 plans an open data note testing A11. It does not exist; the benchmark lists it as open work (check 5) and names it as a dependency for every opportunity it proposes. A11 is untested.
- **[Gap] Synthesis day not done.** §5 (Sun 11/10) asks to tag findings against Q9 to Q24 and A3 to A9 and to note work/university differences. No synthesis note exists; the mapping lives only in each note's Signals, with no cross-participant answer to the six priority questions of §2.
- **[Gap] Research window.** The brief and plan close the research on 12/10. Two desk research notes are dated 13/10 and three synthesis notes 23/10. The plan does not record the extension.
- **[Gap] Tag vocabulary.** §7 says to add a tag before using a missing concept. Concepts recurring in the notes have no tag: safety at the station at night (P1, P4), informal channels such as Google, Telegram, Instagram (P2, P5), engineering works (P5), weather (P3), refunds and compensation (reviews). The `activity` list in `structure.md` has no value for a synthesis, so touchpoints, features and stories are filed as `desk-research`.
- **[Gap] Unused tags, unasked questions.** `autonomy`, `privacy` and `ai` are used by no note. The script's probe "Which decisions on your commute do you prefer to make yourself?" (Q30) has no reported answer in any note, so Q30 and Q31 are unanswered.

## interview-script.md

- **[Contradiction] Paths.** Lines 107 to 110 name `research/transcripts/`, `research/notes/` with code-based names and `research/index.md`; see the plan item on folders. Line 18 links `research/plan.md` from inside `research/`, which resolves to a path that does not exist.
- **[Gap] Consent procedure.** Line 50 requires consent before recording and repeated on the recording. P5 was asked only at the end of the call (P5 transcript [00:13:10]: "ho registrato la chiamata, posso farlo oppure vuoi che la cancelli?"). The P4 and P6 notes say consent was asked before recording, so it is not on tape.
- **[Gap] Frequency question not comparable.** Question 7 asks about "the last month". Answers come in other units: 2 or 3 times a year (P1), last year (P3), four times in one month of last semester (P4), since the end of September (P5), once in over a year (P6). Q9 (frequency) cannot be compared across participants.
- **[Gap] "Ask about real events" not always held.** Line 23 asks to bring answers back to a specific day. The P2 note records no specific last disrupted journey, only habits and hypotheticals (the 5 a.m. airport trip, "if it is cancelled"). Q12 and Q24 for P2 rest on general behaviour, not on an episode.

## index.md (repository root)

- **[Contradiction] Location.** `CLAUDE.md`, the plan and the script place the index at `research/index.md`; it is at the root.
- **[Gap] Incomplete.** `structure.md` rule 3 and the script (line 110) require every file to be indexed, transcripts included. The six timestamped transcripts, the six original transcripts, the six spontaneous notes, the 33 review screenshots and `research.html` are not listed.
- **[Gap] Unknown fields.** `touchpoints-human.md` is listed as unknown on every field because it has no frontmatter.
- **[Contradiction] Grades.** `plan.md` and `interview-script.md` are graded `primary`. `structure.md` defines `primary` as evidence you collected; a plan and a script are not evidence.

## touchpoints-human.md

- **[Gap] No frontmatter.** Breaks the "every note must open with a YAML block" rule of `structure.md`.
- **[Contradiction] Real names inside the note.** The Sources table and "Summary by source" use participants' full names (S1 to S6). `CLAUDE.md` allows real names only in note file names; inside notes, codes only. The S codes also do not match the P codes (S1 is P4, S2 is P3, S3 is P1, S4 is P2).
- **[Contradiction] Wrong sources on several rows**, checked against the interview notes:
  - TP-07 "app to buy bus tickets" cites S2 (P3). The bus ticket app (SVT Vicenza) is P1's, which is S3 (P1 note, [00:05:40]).
  - TP-16 "showing the ticket to the inspector" cites S2 (P3). That moment is P1 ([00:06:02]) and P2 (Pt.2 [00:03:07]), S3 and S4.
  - TP-06 "website to buy a season pass" cites S5 (P5). P5 buys the pass in the app ([00:03:25] "con l'app di di Tenitalia mi faccio l'abbonamento").
  - TP-10 "Tap&Tap at the station" cites S4 (P2) only. The participant who taps at the validators is P5 ([00:05:12] to [00:05:43]); P2 speaks of card payment on local services in general.
  - TP-14 "listening to station announcements" cites S1 (P4). P4 reports the opposite, no announcement at all ([00:14:57] "Neanche dallo speaker niente").
- **[Gap] Moments in the notes but not in the list.** ViaggiaTreno (P3), Trainline (P5), Google Maps (P2), strikes found on Google, Telegram or Instagram (P2, P5), the conductor announcing a strike on board (P4), the conductor holding a connection (P3), the replacement bus (P3, P4), the official cancellation message with generic options (P1).
- **[Gap] Sources.** Only interviews and the review note; the benchmark and statistics notes are not read. S7 is cited without folder or `.md` extension.
- **[Contradiction] Two touchpoint lists, never reconciled.** This note has 19 touchpoints, `2026-10-23-touchpoints-ai.md` has 54, and the AI note says it was written without reading this one. Features and stories are built only on the AI list.

## 2026-10-23-touchpoints-ai.md

- **[Contradiction] Count.** "Count" says 49 touchpoints from the interviews and 5 from the reviews. Rows 6, 14 and 15 cite only REV, so the split is 46 and 8.
- **[Contradiction] Row 13 citation.** REV [IMG_2384] "meno intuitiva e più dispersiva" is about the layout after an update, not about a train shown neither departed nor cancelled.
- **[Contradiction] C3 overstates.** It says that for P3, P4 and P6 "staff are the only working source". P3 also relies on ViaggiaTreno and station announcements ([00:08:56], [00:14:51]); P6 says staff only act after the problem ([00:14:01]), which is C4 in the same note.
- **[Divergence] C1 to C4 are labelled "Contradictions".** They compare different participants' experiences (the board, announcements, staff), which is a divergence, not a conflict to resolve. Only C5 and C6 (the benchmark misreporting P1, P2, P3) are contradictions between documents.
- **[Gap] Missing touchpoints.** The conductor announcing a strike on board (P4 [00:11:38]) has no row, although F4's user story is built on it. Engineering works (P5 [00:12:03]) has no row, which later makes the features note drop the works notice.
- **[Gap] Telling others left out.** Calling parents and messaging an employer are excluded as "not contacts with the service" and listed as P2, P4, P6 and P2, P5. P3 also told her family ([00:10:38]). `notifying-others` is a plan tag and the moment appears in five of six interviews, so the definition drops a frequent moment with no replacement.

## 2026-10-23-features-ai.md

- **[Gap] Ticketing is out of the brief's scope.** The brief excludes "Ticketing, prices and subscriptions". F6 (last-minute purchase), F15 (ticket validity on the alternative) and F17 (change or claim) answer ticketing moments, so the brief's scope should say whether these moments are now in.
- **[Contradiction] Touchpoints read.** "Count" says 55 touchpoints read; the touchpoints note has 54.
- **[Contradiction] Confidence marks break the note's own rule.** [strong] requires a touchpoint cited by at least two participants with no (?) or ⚠ touching the feature. Marked [strong] anyway:
  - F9: TP 23 carries ⚠C1, TP 28 carries ⚠C3 and ⚠C4.
  - F11: TP 37 carries ⚠C2, which the row itself cites.
  - F16: TP 42 carries ⚠C3 and ⚠C4; TP 49 rests on P1 alone.
  - F14: TP 45 is marked (?) and TP 53 is reviewers only.
  - F15: TP 48 (P3) and TP 50 (P2) each rest on one participant.
  - F6: TP 8 rests on P5 alone and TP 9 is marked (?).
- **[Contradiction] Stale reference.** "Touchpoints with no feature" lists TP 36, which the touchpoints note merged into row 27.
- **[Gap] Engineering-works notice dropped for the wrong reason.** P5 asks for it explicitly ([00:12:03]); it is dropped only because the touchpoints note has no row for it (see above).
- **[Contradiction] "Telling an employer or family"** lists P2, P4, P5, P6; it misses P3 ([00:10:38]).
- **[Gap] Citation format.** The "One ticket or plan across operators" row cites P2 [00:05:12] without the recording part; the quote is Pt.2.1.

## 2026-10-23-user-stories-ai.md

- **[Contradiction] F4 story outside its own chain.** The story's circumstance is the strike heard from the conductor on board (P4 [00:11:38]), but no touchpoint row holds that moment, so the story does not trace back through a touchpoint as the method says.
- **[Contradiction] F9 story value.** The story says P6 wants the reason to "turn to another solution in time" on the day of her late 18:09 train. For that day she says the delay was not excessive and she considered no alternative ([00:06:24]); her wish for the reason ([00:11:00] to [00:11:17]) is general, not tied to that trip.
- **[Gap] Open follow-up never scheduled.** Signals names pass holders (P3, P5, P6) and anyone who claimed a refund as "the first people to ask". No follow-up interview or question exists in the plan.

## Desk research/2026-10-12-benchmark.md

- **[Contradiction] Self-flagged errors left in place.** The note flags that "People outside the apps" (P2, P3 only buy tickets) and "Understanding" (P1 got the cause from people) contradict the interview notes, but the Signals were not corrected and the status is `complete`.
- **[Contradiction] "Understanding" also cites P6.** P6 never received a cause from staff; she says staff "non ti anticipano nulla" ([00:14:01]) and she still wants the reason ([00:11:00]).
- **[Contradiction] "Noticing" cites P1, P2, P4** for "a delay and a cancellation look the same". P4's case was a line fault on a train that never left, not a cancellation; P1's board showed her train on time, not as cancelled.
- **[Gap] Not verified on a phone.** The plan requires it; the note says so and closes anyway. Every "Unverified" line, including Smart Caring for pass holders, is still open.
- **[Gap] Smart Caring.** The published service promises delays "with the reason" to followed trains. No participant mentions it and none was asked, so the gap between promise and experience is assumed, not tested.
- **[Contradiction] Tag without evidence.** `open-data` is tagged although open data was not checked.
- **[Gap] Broken links.** From `Desk research/`, `related` entries `plan.md` and `Notes/...` and the Signals links `Notes/...` resolve to paths that do not exist (they need `../`).
## Desk research/2026-10-13-review-analysis-trenitalia-trainline.md

- **[Contradiction] Replacement buses "also in P3, P4 and P6".** P6 took an ordinary bus she knew from high school ([00:09:02], [00:09:47]), not a replacement bus. The same error is in the P3 note (Signals, line 154), the P4 note (line 158) and the P6 note (line 141).
- **[Contradiction] "The conductor is often the one who explains (P3, P4)".** P3's conductor held a connection ([00:17:41]); he did not explain a cause.
- **[Gap] Recovery sits outside the brief's scope.** The note names refund, change and compensation as "a fourth moment the brief does not name". It falls under ticketing, which the brief excludes, so the brief's scope should say whether this moment is in.
- **[Gap] Questions for participants not asked.** "Pass holders as second-class users: worth asking P3, P5 and P6" was never followed up.

## Desk research/2026-10-13-commuting-statistics.md

- **[Divergence] P5's experience and the targets.** Signals says P5's "five to seven delays in about three weeks" matches 2 to 3 late trips a month. P5 travels 3 days a week since the end of September (transcript [00:09:55]), about 12 to 18 trips by 9 October; 5 to 7 late trips is roughly 40%, several times the 6 to 8% the targets allow. Her account diverges from the targets: the note should report the difference rather than call it a match.
- **[Contradiction] "Participants travel on the region's least punctual lines".** True for P1, P2 (Venezia–Verona) and P5, P6 (Venezia–Bologna). P3 and P4 ride the Bassano lines, with targets of 93 to 96.5%.
- **[Contradiction] Lines marked in bold.** Mantova–Monselice is bolded as a participant line, but P6 rides Monselice to Padova, on Venezia–Bologna. Vicenza–Treviso, used by P3 on her return from Vicenza to Cittadella ([00:18:15]), is not bolded.
- **[Gap] The estimate assumes a daily commuter.** 40 trips a month assumes 20 days. No participant commutes daily: P1 and P2 on office days, P3, P5 and P6 three days a week.
- **[Gap] Unreconciled punctuality figures.** Trenitalia reports 94% for Veneto (all causes); RFI reports 88.9% for Italy. The note lists both without saying which to use; actual Veneto results ("Consuntivo") are missing.
- **[Gap] The breaks are not measured.** No strike count, no cancellation count; frequency of breaks rests only on six interviews with non-comparable timeframes (see the script item on question 7).
- **[Gap] Inference beyond the data.** Signals links the family car fallback (P2, P4, P6) to Veneto being "a car region". The figures show the car share, not why participants call their parents.

## Notes: issues shared by all six interview notes

- **[Gap] Old link to the desk research note.** Every note links `../2026-10-12-desk-research.md` in `related`, and the "Contradiction" bullets in the P1, P2 and P3 Signals link the same path. The file was moved to `Desk research/` and renamed `2026-10-12-benchmark.md` (git commits 66c5132 and be1cdb1), so the path no longer opens it. The links to `raw/Personal notes/`, a folder that no longer exists, were removed on 2026-10-24.
- **[Gap] Metadata not uniform.** Only P1 has the `time` field; `structure.md` rule 5 asks for the same metadata in every note.

## Notes/2026-10-07-interview-lucrezia-gradi.md (P1)

- **[Contradiction] Interview time.** The note and the timestamped transcript say 19:20 to 19:42; the original transcript is stamped "Oct 7, 2026 at 17:49:22", before the stated start.
- **[Gap] Email or on-board message.** Line 94 leaves open whether the "message to everyone" ([00:17:15]) is the same as the email ([00:10:16]). The touchpoints note carries the doubt as (?); it should be settled from the recording.

## Notes/2026-10-07-interview-matteo-galvagni.md (P2)

- **[Divergence] With the spontaneous notes.** The spontaneous note says P2 checks the app or the boards again on arriving at the station; the note says he does not reopen the app at the station (Pt.2 [00:07:04]). The spontaneous note says he gets a lift from a colleague at the arrival station and that the five-minute rule hit him on the day his train was cancelled; neither is in the transcript, where the rule was "discovered by trying" (Pt.2.1 [00:09:10]).
- **[Gap] Lost content.** The note says what was said between Pt.2 and Pt.2.1 is lost; the spontaneous note may hold part of it (the colleague's lift) but it is not recorded anywhere as such.
- **[Gap] No specific episode.** See the script item: Q12 and Q24 rest on habits, not on a recalled day.

## Notes/2026-10-07-interview-lorena-tonuzi.md (P3)

- **[Divergence] Strikes and Fridays.** The spontaneous note says she checks for strikes before going to university on Fridays; the note says her lessons are on the first three days of the week, which is why strikes rarely hit her ([00:07:18]).
- **[Contradiction] Replacement bus shared with P6.** See the review analysis item.
- **[Gap] Old, atypical episode.** Her worst episode is from last year and caused by hail, which she accepts as outside the operator's control. It says little about the operator-caused breaks the brief is about, and Q9 has no number for her.

## Notes/2026-10-07-interview-greta-tonuzi.md (P4)

- **[Contradiction] Interview date.** The note and the timestamped transcript say 2026-10-07; the original transcript is stamped "Oct 8, 2026 at 10:32:19"; the plan scheduled P4 on 09/10. Which is the collection date needs checking.
- **[Divergence] With the spontaneous notes.** The spontaneous note merges two episodes: a train that stopped too long while staff smoked, then, "having missed the connection", the information office pointing to a replacement bus. The transcript keeps them apart (the line fault at Padova, [00:04:49]; the exam-day stop, [00:14:20]) and has no missed connection. The note follows the transcript.
- **[Contradiction] Replacement bus shared with P6.** See the review analysis item.
- **[Gap] Frequency without causes.** "Four times in one month last semester" ([00:09:02]) is the highest frequency in the sample, but the causes of the other three nights were not asked.

## Notes/2026-10-09-interview-anna-baggio.md (P5)

- **[Contradiction] Time span.** Signals says five to seven delays "in about three weeks"; the transcript says she commutes regularly since the end of September ([00:09:55]), about two weeks before 9 October.
- **[Gap] Consent at the end.** See the script item.
- **[Gap] No disrupted journey recalled.** At thirteen minutes, the interview has no concrete break; the brief's three moments are untested for her except for strikes.

## Notes/2026-10-09-interview-benedetta-rossi.md (P6)

- **[Contradiction] Replacement bus.** Line 141 says a replacement bus that is not usable is also in P3 and P4; her own bus was an ordinary line she knew ([00:09:02]).
- **[Gap] The one break cannot be classified.** Her only break ([00:07:26]) was "maybe a Friday", a train "cancelled or so late" that waiting made no sense; cause and type stay unknown.

## Transcripts and raw material (Transcript/, raw/)

- **[Contradiction] Real names in transcripts vs "never edit".** `CLAUDE.md` asks for codes only inside transcripts. The original transcripts contain participants' first names (P1: "Prima intervista a Lucrezia"; P3: "Ciao Lori") and third-party names (P1: "Giuliano"). The same rules forbid editing transcripts, so a decision is needed (for example a redacted copy, with the original kept outside the shared repository).
- **[Gap] Recordings.** The plan and script save recordings in `research/raw/`; none is there.
- **[Gap] Unreliable time stamps.** The original transcripts carry processing times, not interview times (P5 at 12:21 and P6 at 12:23 on the same day, two minutes apart); the P2 original has no date at all. They cannot confirm interview dates (see P1 and P4 above).

## research.html

- **[Contradiction] Out of date.** It still shows the touchpoints and features before the 2026-10-24 revision: touchpoint row 1 as "Buying a ticket or pass" (now split into 1 and 1b), F11 citing TP 35 (removed), F12 citing TP 35 and "One participant" (now with P6 as supporting evidence). It is not listed in `index.md`, so readers cannot tell it is a stale view.

## Signals

This unit is a reading of the items above, not evidence.

- **The plan no longer describes the research that was done.** Sample, split, dates, format, folders and benchmark scope all changed; the plan, the script and the index were not updated, and `questions.md`, the source of every A and Q code, is missing.
- **One error travels through four notes.** P6's ordinary bus became a "replacement bus" in the P3, P4, P6 and review notes; P4's missing strike-announcement touchpoint resurfaces in the F4 story. Errors in the touchpoints layer propagate to features and stories.
- **Some features touch ticketing**, which the brief still lists as out of scope. The brief's scope should say whether ticketing moments are now in.
- **The weakest evidence is frequency.** Interview timeframes are not comparable, official figures exclude strikes and cancellations, and the one quantitative cross-check (P5) diverges from the targets it is said to match.
