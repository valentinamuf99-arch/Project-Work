# Project notes

**Project:** Silent until it matters
**Author:** Eugenia Valentina Muffolini
**Course:** Digital Product Design in the AI Era (Talent Garden, 2026)
**Selected brief:** [Brief 01 · Redesigning the commute](https://aandreetto.me/tag/brief-01.html)
**Status:** Draft v0.3 · 05/10/2026

Short version of the brief: `brief.md`. Research plan: `plan.md`.

---

## 1. Chosen brief

Brief 01 asks to design a feature that improves one specific moment of the daily commute within an existing transport service, using AI to reduce uncertainty and make transit feel more predictable.

## 2. The moment

**When the daily routine breaks**: the train or bus I always take is late, cancelled or uncertain, and I have to decide what to do. Keep waiting, leave earlier, take another run, switch mode.

This covers two of the moments listed in the brief:

- Recovering from a delay
- Choosing between transport modes

## 3. Where it comes from

A personal episode. In Rome I waited about an hour for a bus that did not arrive. It was getting late and I had no reliable way to know if the bus was coming. By chance I noticed taxis across the road and took one.

What stayed with me is not the delay itself but the decision: I had to choose between waiting and leaving with almost no information, and the alternative appeared by luck, not because something suggested it.

The episode is the origin of the idea only. The project context is the Vicenza–Padova area (see section 9).

## 4. Problem statement

> A commuter knows their route and its usual delays, but cannot tell when *today* is different. When the routine breaks (a cancelled run, a strike, an accident, a missed connection) they decide late and with partial information, often while already waiting at the stop or on the platform.

## 5. User

**Primary user: the regular commuter** who travels the same home–work or home–university route by train or bus, on a weekly basis.

**What they already know**

- The route, the stops, the usual alternatives
- Which lines tend to be late, as rules of thumb ("it's usually 5 minutes late")

**What they do not know**

- Whether today's run will actually pass, and when
- How a disruption affects their specific trip and connections
- Which alternative is best right now, not in general

⚠️ Hypothesis, not validated: experienced commuters manage normal days well, but make poor or late decisions when the routine breaks.

## 6. Concept

**Silent until it matters.** An assistant that knows the commuter's routine, stays silent on normal days and steps in only when the routine is about to break.

- **Silence on normal days.** It does not repeat what the commuter already knows.
- **Early warning, before leaving home.** The key decision often happens before reaching the station: "Your 8:12 train is running 25 minutes late today. The bus at 8:05 gets you there earlier, leave 5 minutes sooner."
- **Connections at risk.** "With this delay you will miss the 8:40 bus. Here is what to do."
- **Honest uncertainty.** A range and a confidence level instead of a precise but unreliable ETA.
- **Alternatives with trade-offs.** Time, cost and effort made explicit, so the choice stays with the user.
- **Explanation.** Why the run is late or cancelled (strike, accident, line works) when the information is available.

## 7. Role of AI

⚠️ Hypotheses, not validated. To be confirmed or discarded through research.

- **Learning the routine:** recognising the commuter's usual trips and times, so it knows what "normal" means for them.
- **Reliability estimate:** predicting how likely a run is to pass and when, from the line's history, time of day and current events.
- **Deciding when to speak:** distinguishing a normal fluctuation from a real break in the routine, to avoid noise and notification fatigue.
- **Ranking alternatives:** comparing options in the current situation, not in general.

## 8. What the feature is not

- **Not real-time tracking.** Arrival times and train status already exist in operator apps, Google Maps and Moovit.
- **Not a journey planner.** The commuter already knows the route.

The value is in recognising the exception and supporting the decision.

## 9. Context

- **Area:** Vicenza–Padova (Veneto), where the research participants commute.
- **Modes:** regional trains and local buses, often combined.
- **Operators and apps to verify:** Trenitalia (regional trains), Busitalia Veneto (Padova), the local bus operator in Vicenza, plus aggregators such as Google Maps and Moovit.

## 10. Data sources

⚠️ To be verified: which open data (GTFS, GTFS Realtime) are available for Trenitalia and for the bus operators in Vicenza and Padova. Low priority for the first research week, relevant later for the prototype.

Note: realtime feeds are snapshots. Estimating reliability requires collecting them over time to build a history of planned vs actual arrivals.

## 11. Research

I do not commute myself, so research is essential, not optional. Details, participants and timeline are in `plan.md`.

- **Human-led:** remote interviews with commuters (bus and train), 3 confirmed and 2 optional.
- **AI-led:** desk research, starting with a benchmark of the apps commuters actually use.

## 12. Scope

**In scope**

- Recognising when the routine breaks
- The decision moment, before leaving and at the stop or station
- Connections at risk, including train–bus
- Communicating uncertainty and alternatives

**Out of scope (for now)**

- Full journey planning
- Ticket purchase
- Occasional users and tourists

## 13. Open questions

- **Insertion point:** which existing service hosts the feature: an operator app (Trenitalia, local bus operator) or an aggregator such as Google Maps or Moovit? To be decided after research.
- **Value for experienced commuters:** do they really need support when the routine breaks, or do they already manage it well? To be validated through research.
- **Train vs bus:** does the problem feel different for train and bus commuters? To be compared in the interviews.
- Key research questions: see `questions.md`.

## 14. Success criteria (from the brief)

- Integrates naturally into an existing service
- Demonstrably reduces friction or anxiety
- Uses AI substantively, not decoratively
- Can be prototyped within the course timeline
