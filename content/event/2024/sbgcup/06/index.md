---
title: "6. Salzburger Sportvoglcup 2024"
date: 2024-06-29T11:00:00 # keep time 0 until start time is known
draft: false

outputs:
- html
- Calendar
- splitsbrowser

status: done # planned (= for preview Calendar), active (= Announcement...), done (=Results...), canceled (for canceled events)

archives: ["2024"]
tags: [ "SBG Cup", "Landesmeisterschaft"]

anne_id: 4459

event:
  name_amend: "LM Allgemeine Klasse" # respects markdown
  form: "Normaler OL"
  location: "Tannberg"
  type: "sbgcup"
championship: true
organiser: "SOLV - Salzburger Orientierungslaufverband"
implementation: "ASKÖ Henndorf Orientieering" # remove 2 of the 3 options

# active section ------------------------------------------------

#liveresultat_id: 18741
oresults_id: 1057 #DrTgMcmSULdS
end: 210 # x minutes from event->date (remove if not needed)
start_amend: "(WKZ - Start 700m)" # respects markdown

official: # names of course setter, event organizer and inspector
  course: "Roland Kohlbacher"
  event: "Katharina Hinterhofer"
  inspection: "Markus König"
course:
  valid: false # set to true when the course lenghts are final
  lenghts: [["Einfach","x km"], ["Kurz","x km"], ["Mittel","x km"], ["Lang","x km"]]
entry:
  anne: true # if true, a link to ANNE will be provided
  email: anmeldung@ol-sbg.at
  closing_date_days: -8 # x days from event->date
meeting:
  point: "Hallergut / Tannberg"
  time_minutes: -60 # x minutes from event->date
  location: [47.9720, 13.1778]
map:
  name: "Tannberg West"
  scale: "1:10.000 / 1:7.500"
  equidistance: "5m"
  update: "Mai 2024"
  format: ""
  hints: "" # additional hints to map
control_point_description: "Auf der LauŅarte sowie auf ANNE zum Download"
hints: "" # respects markdown
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
  title: "Ergebnis LM allgemeine Klasse"

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

- bis D/H -15 und OL: € 5,-
- ab D/H 16-: € 8
- Family: € 5,- (bis zu 3 Karten includiert - für Kartendruck bitte die Anzahl der Teilnehmer angeben!)

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
