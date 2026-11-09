# Key research questions · Redesigning the commute

Questions to answer before designing anything, based on [brief.md](brief.md).
Each question carries a one-line rationale and, where relevant, the assumption(s) it tests.

## Assumptions in the brief

Stated in the brief:

- **A1** The user travels the **same home–work route** regularly.
- **A2** They travel by **public transport**.
- **A3** They **know the route well**, including its usual delays, so ordinary variation is not the problem.
- **A4** The core problem is **not being able to tell when today is different**, rather than the delay itself.
- **A5** Breaks are caused mainly by **cancelled runs, strikes and missed connections**.
- **A6** They **decide late**, often **while already waiting at the stop**.
- **A7** At decision time the **information is partial**.
- **A8** **Deciding without information is worse than the delay itself** (drawn from a single personal experience in Rome).
- **A9** Alternatives exist but are **found by chance**, not systematically.

Implicit in the project framing (not stated in the brief):

- **A10** **AI prediction or personalisation** is a relevant lever for this problem.
- **A11** The **data needed** to detect or anticipate a break is available and reliable.

---

## 1. The user: who commuters are, their routines, habits and tools

1. **Who are the regular commuters on these routes (age, occupation, schedule flexibility, caring duties)?**
   Why it matters: a student, a shift worker and a parent on a school run have very different tolerance for disruption and room to adapt. *Tests A1.*

2. **How fixed is their route and timetable in reality: same days, same times, same lines every week?**
   Why it matters: the whole brief rests on a stable routine; hybrid work or variable shifts would weaken it. *Tests A1.*

3. **Is their journey made entirely by public transport, or does it mix modes (walking, bike, car, lifts, scooters)?**
   Why it matters: multimodal commuters already have fallbacks, which changes what "a break" means for them. *Tests A2, A9.*

4. **How many legs and connections does a typical journey involve?**
   Why it matters: missed connections only matter for multi-leg trips, and the risk grows with every transfer. *Tests A5.*

5. **What do they mean when they say they "know" their route: timetables, typical delays, crowding, the driver's habits, workarounds?**
   Why it matters: the shape of their tacit knowledge tells us what they can already judge alone and where it stops working. *Tests A3.*

6. **What tools do they use today around the commute (official operator apps, Google Maps/Moovit, social media, chat groups, displays at the stop)?**
   Why it matters: we need to know the existing ecosystem and its gaps before assuming anything is missing. *Tests A7.*

7. **What constraints shape their journey: ticket or pass type, budget, accessibility needs, safety concerns at certain hours?**
   Why it matters: these constraints decide which alternatives are actually viable for a given person. *Tests A9.*

8. **What happens at the destination if they are late (strict start time, flexible hours, consequences with employer or school)?**
   Why it matters: the stakes of being late decide how much a break really costs and how urgent the decision is. *Tests A8.*

## 2. The problem: when and how the routine breaks, how often, what it costs them

9. **How often does their routine actually break in a way that changes their plans (per week or month)?**
   Why it matters: a rare problem and a weekly one call for very different levels of investment and attention. *Tests A4.*

10. **What kinds of break happen most often (cancellations, strikes, missed connections, breakdowns, overcrowding, roadworks, weather, events)?**
    Why it matters: the brief names three causes; the real mix may be different, and each cause behaves differently. *Tests A5.*

11. **How do they tell an "ordinary" delay from a "today is different" situation? What is the threshold?**
    Why it matters: this is the core of the brief; if the line is blurry, the problem is about interpretation, not just information. *Tests A3, A4.*

12. **At what moment do they realise the routine has broken: at home, on the way, at the stop, on board, at the transfer?**
    Why it matters: where awareness arrives decides how many options are still open. *Tests A6.*

13. **Which breaks are known in advance (planned strikes, scheduled works) and which are sudden?**
    Why it matters: announced disruptions are an awareness problem; sudden ones are a detection problem. *Tests A5, A7.*

14. **What does a break cost them: time, money (taxi, lost wages), stress, safety, relationships, reputation at work?**
    Why it matters: we need to know which cost they feel most, so we don't optimise the wrong one. *Tests A8.*

15. **Is uncertainty really worse than the delay itself for most commuters, or only in specific situations (night, alone, long waits)?**
    Why it matters: the brief generalises from one personal experience; this needs to be checked with other people. *Tests A8.*

16. **Are some times, lines or areas much more fragile than others?**
    Why it matters: if breaks concentrate in predictable places or times, the problem is narrower and more tractable. *Tests A5, A11.*

## 3. Current behaviour: how they find out about disruptions today and how they decide

17. **Where do they first learn that something is wrong (stop display, app, operator site, social media, other passengers, the absence of the bus)?**
    Why it matters: the first signal and its timing show what the current information chain actually delivers. *Tests A7.*

18. **Which sources do they trust, and which have let them down before?**
    Why it matters: trust in existing channels sets the baseline any new information has to beat. *Tests A7, A10.*

19. **Do they check for disruptions proactively before leaving, or only react once at the stop?**
    Why it matters: this separates a habit problem (they don't check) from an information problem (checking doesn't help). *Tests A6.*

20. **When they realise there is a problem, what options do they consider, and in what order?**
    Why it matters: their real decision process shows which alternatives they already know and which they miss. *Tests A9.*

21. **How long do they wait before giving up on the expected run, and what makes them decide to move?**
    Why it matters: the waiting threshold is the key moment of decision under uncertainty. *Tests A6, A8.*

22. **What information do they wish they had had at that moment, in their own words?**
    Why it matters: it shows what "partial information" means concretely (cause, duration, alternatives, certainty). *Tests A7.*

23. **Who else is involved in the decision (family, colleagues, employer, people they need to notify)?**
    Why it matters: the commute decision often has social side effects that shape the choice. *Tests A8.*

24. **How did the alternatives they used in the past come about: planned, suggested, or found by chance?**
    Why it matters: it tests whether discovering alternatives really is left to luck. *Tests A9.*

25. **Do they learn from past breaks and change their routine afterwards (leaving earlier, switching line, keeping a plan B)?**
    Why it matters: existing coping strategies tell us what they already do well and shouldn't be replaced. *Tests A3.*

## 4. The role of AI: where prediction or personalisation could really help, and where it could be unwelcome or untrustworthy

26. **In which moments of the journey do commuters feel they lack foresight, and in which do they feel they lack interpretation?**
    Why it matters: AI is useful for some uncertainty types and pointless for others; we need to know which kind dominates. *Tests A4, A10.*

27. **How much uncertainty are they willing to accept in a forecast (for example "70% chance your bus will be cancelled")?**
    Why it matters: probabilistic information can reduce anxiety or increase it, depending on how people read it. *Tests A10.*

28. **What would make them trust a prediction about their journey, and what would make them stop trusting it after one mistake?**
    Why it matters: in a daily routine, a few wrong calls can permanently destroy credibility. *Tests A10, A11.*

29. **What is worse for them: a false alarm (they change plans for nothing) or a missed alert (they get caught out)?**
    Why it matters: the balance between these two errors defines what "useful" means for this audience. *Tests A8, A10.*

30. **Which decisions do they want to keep for themselves, and which would they happily delegate?**
    Why it matters: commuters with strong route knowledge may resent being told what to do. *Tests A3, A10.*

31. **What personal data (location, routine, calendar, history) would they share, in exchange for what, and where is the line?**
    Why it matters: personalisation needs data that people may consider intrusive, especially movement patterns. *Tests A10.*

32. **How much interruption do they tolerate (notifications, timing, frequency) during the commute or before it?**
    Why it matters: unwanted alerts on a routine journey quickly become noise and get switched off. *Tests A10.*

33. **Are there groups for whom AI-driven guidance could be excluding or harmful (low digital literacy, no smartphone, accessibility needs, unsafe alternatives at night)?**
    Why it matters: a recommendation that ignores personal constraints can put someone in a worse situation than no recommendation. *Tests A10.*

34. **When an automated system has been wrong in their past experience (navigation, arrival times), how did they react?**
    Why it matters: existing experiences with "smart" transit info shape expectations and scepticism. *Tests A10.*

## 5. Data and feasibility: what data exists and what is missing

35. **What open data do local operators publish (static GTFS timetables, real-time GTFS-RT feeds, service alerts), and how complete and reliable is it?**
    Why it matters: real-time quality on the target routes decides what can actually be detected. *Tests A11.*

36. **How and when are cancellations, strikes and disruptions officially announced, and through which channels?**
    Why it matters: if official notices arrive late or are vague, the information gap starts upstream. *Tests A7, A11.*

37. **Does historical data on delays and cancellations exist, at what granularity and over what period?**
    Why it matters: prediction requires history; without it, only detection in the moment is possible. *Tests A10, A11.*

38. **How accurate are current real-time arrival predictions compared with what actually happens (for example "ghost" buses that show up but never arrive)?**
    Why it matters: if existing feeds are themselves wrong, building on them could amplify the problem. *Tests A7, A11.*

39. **What signals are missing from official data (crowding, informal reports from passengers, driver shortages, local events)?**
    Why it matters: the gaps tell us whether alternative or crowdsourced sources are needed. *Tests A11.*

40. **What data on alternatives exists (other lines, bike/scooter sharing availability, taxis, park-and-ride) and can it be combined?**
    Why it matters: knowing that the routine broke is only useful if viable alternatives can also be described. *Tests A9, A11.*

41. **What legal, privacy and licensing constraints apply to using operator data and personal mobility data (GDPR, data licences)?**
    Why it matters: these constraints may rule out some kinds of personalisation before design even starts. *Tests A10, A11.*

42. **Which city, operator and routes should the research focus on, and how representative are they?**
    Why it matters: the brief starts from Rome; data quality and disruption patterns differ greatly between cities and operators. *Tests A1, A5, A11.*
