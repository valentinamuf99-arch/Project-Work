# Research plan · Redesigning the commute

Based on [brief.md](brief.md) and [questions.md](questions.md).
Research window: **one week, 05/10 → 12/10/2026**.
Context: **Vicenza–Padova area (Veneto)**. Participants commute there by train and bus.

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

**Format:** semi-structured interviews, remote, **30 min**, recorded with consent. Each interview walks through the participant's **most recent disrupted journey**, step by step. The script is in [interview-script.md](interview-script.md).

**Required question on apps:** *"Which apps or sources do you use for your commute, and which one did you open during that last disrupted journey?"* (Q6). The answers are used to adjust the benchmark to what participants actually use.

**Sample:** 3 required interviews and 2 optional ones. Only participant codes are used, never real names.

| Code | Commute | Mode | Status |
|---|---|---|---|
| P1 | Work | Bus | Required |
| P2 | Work | Train | Required |
| P3 | Work | Train | Required |
| P4 | University | Train | Optional |
| P5 | Work, ideally | Bus, ideally | Optional |

The sample covers **both bus and train commuting**, so findings must be **compared across the two modes**. They differ in how often services run, how disruptions are announced, and which alternatives exist. If P5 is not recruited, P1 is the only bus commuter, and bus findings will be weaker.

Notes for each interview go in `research/interviews/P1.md` and so on, written the same day.

---

## 4. AI-led research: desk research

- **Benchmark (required)** → `research/benchmark.md`
  - **Apps:** Trenitalia (train), Busitalia Veneto (bus, Padova), Google Maps and Moovit. This covers one train operator, one bus operator and two apps that aggregate several operators.
  - **Vicenza bus:** SVT, the Vicenza bus operator, has no confirmed journey-planning app. The only verified SVT app is ChiamaBus, an evening on-demand service, so it is left out for now. Swap it in if participants say they use an SVT app.
  - **Adjust after the interviews:** if participants rely on an app that is not in the list, replace Google Maps or Moovit with it.
  - **Focus:** how each app signals delays, cancellations and disruptions, and how it shows alternatives.
  - **Questions:** Q17, Q24.
  - **Limit:** the AI may describe features that are outdated or invented, so every claim is checked on a phone.
- **App store reviews (only if time allows)** → `research/app-reviews.md`
  - **Scope:** reviews of the same apps that mention delays and unreliable arrival times.
  - **Questions:** Q9, Q15.
  - **Limit:** people who review are mostly angry users, and quotes must be verified against the source.
- **Open data availability check (low priority)** → `research/open-data.md`
  - **Scope:** check which GTFS and GTFS Realtime feeds exist for Trenitalia, Busitalia Veneto and SVT. Starting points are the Mobility Database, the operators' websites and the Veneto Region open data portal.
  - **Output:** a short table showing, for each operator, whether there is a static feed, a realtime feed and service alerts, with the licence for each. This is only an availability check, not a data analysis.
  - **Tests:** A11.
  - **Limit:** finding a feed listed does not mean it is maintained or accurate.

---

## 5. Day-by-day plan

| Day | Human-led | AI-led |
|---|---|---|
| **Mon 05/10** | Write [interview-script.md](interview-script.md). Confirm slots with P1–P3. | Set up `research/`. Start the benchmark. |
| **Tue 06/10** | Interview **P1** (bus). Write notes. | Finish the benchmark draft. |
| **Wed 07/10** | Interview **P2** (train). Write notes. | Check the benchmark on a phone. |
| **Thu 08/10** | Interview **P3** (train). Write notes. | *If time allows:* app store reviews. |
| **Fri 09/10** | *Optional:* interview **P4** (train). | *Low priority:* open data availability check. Adjust the benchmark list using the app answers from P1–P3. |
| **Sat 10/10** | *Optional:* interview **P5** (bus). | — |
| **Sun 11/10** | Tag the findings against Q9–Q24 and A3–A9. Compare bus and train. | Cross-check the desk research against the interviews. |
| **Mon 12/10** | **Research closed.** Tidy all files in `research/`. | |

---

## 6. Risks and mitigations

| Risk | Mitigation |
|---|---|
| The optional participants do not happen | 3 interviews are enough to test the core hypotheses. Note the gap in bus coverage. |
| A required interview gets cancelled | Use Fri or Sat as a backup slot, or move P4 into the required group. |
| AI hallucination in the desk research | Ask for a source for every claim. Spot-check the apps on a phone. Mark anything unverified. |
| Leading participants toward the brief's own story (A8) | Ask about behaviour during the last incident. Do not mention "uncertainty" first. |
| Not enough time to analyse | Write notes the same day as each interview. Keep Sun 11/10 for synthesis prep only. |
