---
title: "User stories · one story per feature, with who, moment and value taken from the interview notes"
date: 2026-10-23
activity: desk-research
source: "2026-10-23-features-ai.md, with who, circumstance and value checked against the six interview notes (P1 to P6) and the App Store review note, read on 2026-10-23; transcripts not read"
author: "Eugenia Valentina Muffolini"
channel: web
method: user stories from features, one per feature, each traced to a note and a quote
tags: [train, boat, bus, venezia, vicenza, padova, castelfranco, rovigo, monselice, strike, cancellation, long-delay, missed-connection, noticing, understanding, deciding, information-source, alternative, warning, trenitalia, viaggiatreno]
confidence: medium
grade: secondary
status: needs-review
related: [plan.md, 2026-10-23-features-ai.md, 2026-10-23-touchpoints-ai.md, Notes/2026-10-07-interview-lucrezia-gradi.md, Notes/2026-10-07-interview-matteo-galvagni.md, Notes/2026-10-07-interview-lorena-tonuzi.md, Notes/2026-10-07-interview-greta-tonuzi.md, Notes/2026-10-09-interview-anna-baggio.md, Notes/2026-10-09-interview-benedetta-rossi.md, Desk research/2026-10-13-review-analysis-trenitalia-trainline.md]
---

# User stories · one story per feature

## Scope and method

Each feature in `2026-10-23-features-ai.md` was turned into at most one story in the form: As a [who], in [circumstance], I want [capability], so that [value].

- **Who** is one interview participant, described by their commute and cited by code. App Store reviewers are not participants, so they cannot be the "who".
- **Circumstance** is the moment in that participant's note, not the setting.
- **Capability** is the feature's own "what it does" line, narrowed where the participant's moment is narrower, never widened.
- **Value** traces to a quote, or to an observation in the note, marked as such.

A feature whose value could not be traced to a participant's quote or observation did not become a story. Those features are listed under "Back on the list" and marked `[no story]` in the features note.

No feature was split: in each story the capability answers one moment of one participant.

Each story is followed by its source line: feature · note · quote. Notes are cited by path from `research/`; codes as in the features note.

## Before the trip

**F1 · Own-train alert before leaving**

As the office-day commuter who changes trains at Mestre (P2), in the minutes before leaving home at about six in the morning, when his first train, coming from Bassano, may already have built up delay, I want to be told that my own train is late or cancelled, so that I can decide not to go to the station at all and look for another way.

Source: F1 · `Notes/2026-10-07-interview-matteo-galvagni.md` · Pt.2 [00:06:15] "Magari 1º di andare in stazione controllo se il treno un ritardo effettivamente. Il mio parte da Bassano, fa in tempo ad accumulare un tot di ritardo e quindi, se vedo che mezz'ora di ritardo, magari neanche vado in stazione o cerco un modo alternativo o chiedo a qualcuno, eccetera."

**F3 · Cancelled or only late**

As the office-day commuter who changes trains at Mestre (P2), at half past nine, looking at the live tracking of a train that shows neither departed nor cancelled, I want to be told, as soon as it is known, whether my train is cancelled or only late, so that I can make a plan, since a fifteen-minute delay and a cancellation that means an hour's wait call for different ones.

Source: F3 · `Notes/2026-10-07-interview-matteo-galvagni.md` · Pt.2.1 [00:12:55] "Può succedere che io alle 9 e mezza nel tracking live non lo vedo partito, ma non lo vedo neanche cancellato."; Pt.2.1 [00:14:23] "non sai come fare un piano, perché un ritardo di 15 minuti è molto diverso da una cancellazione"; Pt.2.1 [00:14:46] "La cancellazione può significare un ritardo di un'ora se devi aspettare quello dopo."

**F4 · Strike notice for one's own route**

As the student who rides home from Padova in the evening (P4), the day before a long strike, having heard it only from the conductor on board and finding nothing about it in the app, I want to be told in the app, days ahead, that a strike hits my route and which of my trains are guaranteed, so that I can take a train that is guaranteed and stay clear of the window when trains may not run.

Source: F4 · `Notes/2026-10-07-interview-greta-tonuzi.md` · [00:11:38] "il giorno 1º che succedesse questo sciopero [...] abbiamo sentito proprio la voce del... Insomma del capotreno"; [00:13:14] "Dall'app no, ma dal sito sì."; [00:12:01] "il mio treno era garantito. Okay. Quindi ho preso il treno 1º."; [00:12:23] "c'è quella specie di lasso di tempo dove non è garantito che ci sia appunto il treno"

**F5 · Notices filtered to one's route**

As the office-day commuter who changes trains at Mestre (P2), when he opens the app and the only notice is a small banner of faults across the whole network, I want to see only the disruptions that touch my own route, regional trains included, so that I can rely on an official notice instead of ignoring it and turning to news channels that are not made for me.

Source: F5 · `Notes/2026-10-07-interview-matteo-galvagni.md` · Pt.2 [00:09:40] "C'è un trafiletto piccolo piccolo che a volte appare però tu devi aprire l'app"; Pt.2.1 [00:00:00] "non me ne frega nulla se a Palermo c'è un guasto"; Pt.2.1 [00:11:46] "Quindi non è una roba fatta apposta per me, è semplicemente il meglio che al momento c'è". Value partly from an observation: the note records that he does not read the banner and looks for information elsewhere (unit "Service notices are generic, so he ignores them").

**F6 · Last-minute purchase path**

As the student who drives to Rovigo station and takes the train to Padova (P5), in the last minutes before her train leaves, buying a single ticket in the app, I want to be told before I try that the app will no longer sell it and which way of paying still works, so that I can still pay for this train without having to go to the counter.

Source: F6 · `Notes/2026-10-09-interview-anna-baggio.md` · [00:04:39] "tu non puoi fare il biglietto perché dicono che il treno è in partenza imminente, quindi non te lo fanno fare, devi andare proprio allo sportello con la persona."; [00:05:43] "Perché lì non c'è il limite di tempo che lo puoi fare... Lo puoi fare sempre."

**F8 · Own train, stop by stop**

As the student who commutes from Bassano to Padova on a monthly pass (P3), before going to the station, when the Trenitalia app does not say whether her train is running, I want to follow my own train stop by stop in the operator's own channel, so that I know when it will reach my stop.

Source: F8 · `Notes/2026-10-07-interview-lorena-tonuzi.md` · [00:13:55] "Non sempre il... L'app di Trenitalia o il sito dice se il treno c'è o meno."; [00:14:51] "dice arrivato a Vicenza alle 13.08, ripartito alle 13.12, quindi sai quando arriverà quella successiva"

## At the station

**F9 · The reason, on the board**

As the student from Monselice who uses no app (P6), at Padova station after her six o'clock lesson, finding on the board that her usual train is late, I want the board to give the reason for the delay, so that I can judge whether it is temporary or likely to grow, and turn to another solution in time if it grows.

Source: F9 · `Notes/2026-10-09-interview-benedetta-rossi.md` · [00:05:02] "avevo il treno delle 6.09, che è quello che prendo di solito, e era... Siamo arrivati in stazione, oltre a essere in ritardo"; [00:11:04] "Capire se è anche una cosa magari temporanea o che si può eventualmente prolungare e quindi dopo creare un ritardo più ampio."; [00:11:17] "se magari appunto il ritardo si sarebbe prolungato, mi sarei attivata in anticipo con eventuali altre soluzioni magari."

## On the train

**F11 · Why it is stopped, and for how long**

As the commuter who chains boat, train and bus from the Lido di Venezia (P1), on the train home stopped near Padova, moving a little and stopping again with no explanation, I want to be told why it is stopped and how long it is expected to stay, so that I can work out what to do instead of panicking late in the evening.

Source: F11 · `Notes/2026-10-07-interview-lucrezia-gradi.md` · [00:10:02] "Eravamo appunto a Padova e vediamo che il treno sta fermo. Va va un po' più avanti e poi si ferma di nuovo."; [00:16:19] "fammi capire qual è il problema, qual è la tempistica"; [00:10:42] "Io non sapevo le motivazioni, non sapevo niente, infatti lì per lì ho un attimo panicato perché ho detto che cazzo faccio, era era tardi." Caveat ⚠C2 from the features note: P5 [00:07:51] says on-board announcements do give a restart time.

**F12 · No way home, said early**

As the student who rides home from Padova in the evening (P4), sitting for an hour on a train at Padova that has not left, starting to wonder whether to call her parents, I want to be told early when no public option will get me home that evening, so that my parents can leave much earlier and I am not left alone at the station, worried.

Source: F12 · `Notes/2026-10-07-interview-greta-tonuzi.md` · [00:04:49] "E passa un'ora e finché comincio a domandarmi se effettivamente avesse avuto senso far partire qualcuno da casa per venirmi a prendere in macchina."; [00:09:35] "Che non avrei avuto modo di tornare a casa con I mezzi pubblici e che avrei potuto far partire I miei genitori molto 1º senza stare appunto con la preoccupazione del mio Dio, adesso sono qua da sola."

## Replacement, connection and recovery

**F14 · Alternatives for one's own trip**

As the commuter who chains boat, train and bus from the Lido di Venezia (P1), just put off a cancelled train at Mestre in the evening and heading for the bus, I want to be shown the trains that can still get me to Venezia, including ones still waiting in the station, so that I get home instead of being stuck at Mestre, alone, in a station I do not feel safe in.

Source: F14 · `Notes/2026-10-07-interview-lucrezia-gradi.md` · [00:11:03] "Vado vado verso l'autobus perché non vedevo boh"; [00:17:41] "Io avrei voluto sapere quali altri treni ci sono che avrei potuto prendere e prendere Venezia."; [00:13:32] "è più il il fatto che mi sarei fermata in una stazione che a me non piace per niente."

**F15 · Is my ticket valid on it?**

As the student who commutes from Bassano to Padova on a monthly pass (P3), on a strike day, about to board the replacement bus and having to ask the conductors whether her pass is valid on it, I want to be told whether my pass is valid on the replacement bus, so that I am not caught buying an extra ticket for a route my pass already covers.

Source: F15 · `Notes/2026-10-07-interview-lorena-tonuzi.md` · [00:12:45] "ho chiesto ai controllori e l'autobus non consentiva l'utilizzo dell'abbonamento, quindi ho dovuto fare un biglietto in più per l'autobus." Value from an observation: the extra ticket she had to buy, recorded in the same quote.

**F16 · Will the next leg wait?**

As the student who commutes from Bassano to Padova on a monthly pass (P3), on a late train back from Vicenza, about to miss the connection at Cittadella for Bassano, I want to be told whether the next train will still be there, so that I know whether I can still get home to Bassano.

Source: F16 · `Notes/2026-10-07-interview-lorena-tonuzi.md` · [00:18:15] "Dovevo scendere a Cittadella tornando da Vicenza, ma il treno era molto in ritardo e l'avremmo perso sicuramente, quindi non sarei potuta tornare a Bassano."; [00:17:41] "avrebbe chiamato il treno successivo [...] Per far sì che ci aspettasse". Caveat ⚠C4 from the features note: the held connection depended on one conductor.

## Back on the list

These features did not become stories. Each is marked `[no story]` in `2026-10-23-features-ai.md`.

| Feature | Why no story |
|---|---|
| F2 · Alerts for pass holders too | The need rests on one App Store reviewer [IMG_2386], who is not a participant. P3, P5 and P6 hold passes but were not asked about alerts, and no note ties a missing alert to the pass. P5's wish for an alert [00:11:29] is already F1's evidence. |
| F7 · Tight connection flagged at purchase | Reviewers only [IMG_2397]. No participant describes the moment of buying a connection. P2's lost change at Mestre happens on the day of travel, not at purchase. |
| F10 · Board in step with the train | P1's moment is clear (her train shown on time while it was late, [00:09:00]), but the note shows no outcome she sought from a correct board. What she says she wanted ([00:16:19], [00:17:41]) is the reason, the timing and where to go, which F11 and F14 already carry. |
| F13 · Someone to ask on board | P1 names the absence ([00:19:03], [00:19:34], [00:20:10]) but no outcome she sought from it, and no single moment: it spans years of trips. P3, P4 and P6 find staff there (⚠C3). |
| F17 · Change or claim from the same place | Reviewers only [IMG_2377, IMG_2387]. No participant describes changing a ticket or claiming compensation. |

## Count

- **Features read: 17.**
- **Stories written: 12** (F1, F3, F4, F5, F6, F8, F9, F11, F12, F14, F15, F16). Split features: none.
- **Back on the list: 5** (F2, F7, F10, F13, F17).
- **Values resting partly on an observation rather than a stated outcome: 2** (F5, F15).

## Signals

This unit is a reading of the stories, not what the sources say.

- **Every reviewer-only feature fell out.** F2, F7 and F17 need a participant before they can carry a story: pass holders (P3, P5, P6) and anyone who has claimed a refund are the first people to ask.
- **Three participants carry most of the stories.** P1, P2 and P3 hold eight of twelve. P5 and P6, who treat delays as ordinary, each carry one.
- **The values are about deciding in time, not about the delay.** Decide not to leave (F1), make a plan (F3), call parents earlier (F12), act before the delay grows (F9): the sought outcome is almost always an earlier decision.
