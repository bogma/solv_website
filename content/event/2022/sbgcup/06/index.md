---
title: "6. Salzburger Sportvoglcup 2022"
date: 2022-06-25T10:30:00 # keep time 0 until start time is known
draft: false

outputs:
- html
- Calendar
- splitsbrowser

status: done # planned (= for preview Calendar), active (= Announcement...), done (=Results...), canceled (for canceled events)

archives: ["2022"]
tags: [ "SBG Cup"]

anne_id: 3753

event:
  name_amend: "" # respects markdown
  form: "Normaler OL"
  location: "Weiland"
  type: "sbgcup"
championship: false
organiser: "SOLV - Salzburger Orientierungslaufverband"
implementation: "ASKÖ Henndorf Orientieering" # remove 2 of the 3 options

# active section ------------------------------------------------

liveresultat_id: 23203
#end: 150 # x minutes from event->date (remove if not needed)
start_amend: "(Parkplatz - Start 200m)" # respects markdown

official: # names of course setter, event organizer and inspector
  course: "Karin Hillebrand & Edith Müller-Grambichler"
  event: ""
  inspection: "Eduard Böhm"
course:
  valid: false # set to true when the course lenghts are final
  lenghts: [["Einfach","x km"], ["Kurz","x km"], ["Mittel","x km"], ["Lang","x km"]]
entry:
  anne: true # if true, a link to ANNE will be provided
  email: anmeldung@ol-sbg.at
  closing_date_days: -9 # x days from event->date
meeting:
  point: "Gumersil / Fischtaging 21"
  time_minutes: -60 # x minutes from event->date
  location: [47.883981, 13.166440]
map:
  name: "Weiland"
  scale: "1:7.500 & 1:10.000"
  equidistance: "5m"
  update: "Mai 2022"
  format: ""
  hints: "" # additional hints to map
control_point_description: "Auf der Laufkarte und zum Download (für den Ausdruck zuhause)"
hints: "Parken vom Bauern bis Waldrand entlang der Straße rechts (bis zum Start)" # respects markdown
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
- src: "**/*lms**"
  title: "Ergebnis Landesmeisterschaft Jugend & Senioren"
- src: "**/*control_description**"
  title: "Postenbeschreibungen"

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
