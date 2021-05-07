---
title: "8. Salzburger Sportvoglcup 2020"
date: 2020-10-10T11:00:00 # keep time 0 until start time is known
draft: false

outputs:
- html
- Calendar
- splitsbrowser

status: done # planned (= for preview Calendar), active (= Announcement...), done (=Results...), canceled (for canceled events)

archives: ["2020"]
tags: [ "SBG Cup"]

anne_id: 3183
liveresultat_id: 18394

event:
  name_amend: "LM allgemeine Klasse" # respects markdown
  form: "Normaler OL"
  location: "Adnet"
  type: "sbgcup"
championship: true
organiser: "SOLV - Salzburger Orientierungslaufverband"
implementation: "HSV Wals (mit Unterstützung durch ASKÖ Henndorf und SSV Hallein-Neualm)" # remove 2 of the 3 options

# active section ------------------------------------------------

end: 165 # x minutes from event->date (remove if not needed)
start_amend: "(WKZ - Start 800m)" # respects markdown

official: # names of course setter, event organizer and inspector
  course: "Franz Nagele"
  event: "Christian Breitschädel"
  inspection: "Christian Breitschädel, Jakob Buchberger"
course:
  valid: true # set to true when the course lenghts are final
  lenghts: [["Einfach","1,9 km", "90 HM"], ["Kurz","2,4 km", "120 HM"], ["D55","2,2 km", "110 HM"], ["Mittel","4,4 km", "240 HM"], ["Lang","5,4 km", "320 HM"], ["Family","1,9 km", "85 HM"]]
entry:
  anne: true # if true, a link to ANNE will be provided
  email: anmeldung@ol-sbg.at
  closing_date_days: -10 # x days from event->date
meeting:
  point: "Parkplatz ADNET (Nähe Kirche)"
  time_minutes: -75 # x minutes from event->date
  location: [47.695248, 13.132724]
map:
  name: "Adnet"
  scale: "1:6.000"
  equidistance: "5m"
  update: "September 2020"
  format: ""
  hints: "" # additional hints to map
control_point_description: "Auf der Laufkarte und zum Download (für den Ausdruck zuhause)"
hints: "- Die Bahnlegung auf den Bahnen Mittel (LM Damen) und Lang (LM Herren) ist auf einem (sehr) fordernden Niveau und entspricht den Ansprüchen die an eine Landesmeisterschaft gestellt werden!

- Unbedingt zeitgerecht anmelden – **Auch Familien**!!!

- Banküberweisung! IBAN: AT37 4501 0000 0410 5755" # respects markdown
greetings: "" # Der Verein wünscht Euch ...

resources:
- src: "**/*anno**"
  title: "Ausschreibung"
- src: "**/*start**"
  title: "Startliste"
- src: "**/*splits_class**"
  title: "Splits (Kategorie)"
- src: "**/*splits_course**"
  title: "Splits (Bahn)"
- src: "**/*split**"
  title: "Splits"
- src: "**/*resu**"
  title: "Ergebnisse"
- src: "**/*info2**"
  title: "Treffpunkt & Aufwärmen"
- src: "**/*info**"
  title: "Läuferinfo"
- src: "**/*dir**"
  title: "Anfahrt"
- src: "**/*map**"
  title: "Alte Karte"
- src: "**/*pb1**"
  title: "Postenbeschreibung Einfach"
- src: "**/*pb2_d**"
  title: "Postenbeschreibung D55"
- src: "**/*pb2**"
  title: "Postenbeschreibung Kurz"
- src: "**/*pb3**"
  title: "Postenbeschreibung Mittel"
- src: "**/*pb4**"
  title: "Postenbeschreibung Lang"
- src: "**/*pb5**"
  title: "Postenbeschreibung Family"
- src: "**/*lms**"
  title: "Ergebnis Landesmeisterschaft allg. Klasse"


# resource_links:
#   infos:
#   - link: "/resources/2019/start5sc2019.html"
#     title: "Startliste"
#   results:
#   - link: "/resources/2019/resu5sc2019.html"
#     title: "Ergebnisse 5.SC"
#   - link: "/resources/2019/resu6sc2019.html"
#     title: "Ergebnisse 6.SC"
---

### Startgeld

- bis D/H -15 und OL: € 3,-
- ab D/H 16-: € 4,50
- Family: € 5,- (Für Kartendruck bitte alle Teilnehmer angeben!)

### Zeitnehmung

SPORTIdent; SI-Air+ (touch free) aktiviert.

### Allgemeines

- Der Veranstalter sowie der durchführende Verein übernimmt keinerlei Haftung für auftretende Schäden jeglicher Art, auch nicht gegenüber Dritten.
- Die Bestimmungen des Forstgesetzes und der StVO sind einzuhalten.
- Die Veranstaltung wird nach den gültigen Regeln der [Wettlaufordnung](../../wettlaufordnung) des SOLV durchgeführt.
- Im Laufgebiet besteht bis zum Wettkampf Trainingsverbot.
- Jede\(r) Läufer(in) startet auf eigene Gefahr und ist für die entsprechenden Versicherungen selbst verantwortlich.
- Die Regeln der Straßenverkehrsordnung sind unbedingt einzuhalten.
- Privatgrundstücke dürfen nicht betreten werden.

### Hinweis des SOLV

Für die Jahreswertung des SOLV-Cup werden nur SOLV-Mitglieder berücksichtigt!
