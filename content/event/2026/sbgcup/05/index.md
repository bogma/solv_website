---
title: "5. Salzburger Sportvoglcup 2026"
date: 2026-09-26T14:00:00 # keep time 0 until start time is known
draft: false

outputs:
- html
- Calendar
- splitsbrowser

status: active # planned (= for preview Calendar), active (= Announcement...), done (=Results...), canceled (for canceled events)

archives: []
tags: [ "SBG Cup", "Landesmeisterschaft"]

anne2_id: "ooem-langdistanz-2026"

event:
  name_amend: "LM Algemeine Klasse" # respects markdown
  form: "Normaler OL"
  location: "Pramet"
  type: "sbgcup"
championship: false
organiser: "SOLV - Salzburger Orientierungslaufverband"
implementation: "HSV Ried" # remove 2 of the 3 options

# active section ------------------------------------------------

#liveresultat_id: 18741
#oresults_id: 578
#end: 150 # x minutes from event->date (remove if not needed)
start_amend: "(WKZ - Start 800m / 100hm)" # respects markdown

official: # names of course setter, event organizer and inspector
  course: "Georg Gittmaier sen"
  event: "Georg Gittmaier sen"
  inspection: "Franz Nagele"
course:
  valid: false # set to true when the course lenghts are final
  lenghts: [["Einfach","x km"], ["Kurz","x km"], ["Mittel","x km"], ["Lang","x km"]]
entry:
  anne: true # if true, a link to ANNE will be provided
  email: anmeldung@ol-sbg.at
  closing_date_days: -6 # x days from event->date
meeting:
  point: "Eberschwang, Skizentrum – Gasthaus Rabengruber"
  time_minutes: -60 # x minutes from event->date
  location: [48.143768, 13.601911]
map:
  name: "Eberschwang/Skizentrum"
  scale: "1:10.000 / 1.7.500"
  equidistance: "5m"
  update: "August 2026"
  format: ""
  hints: "" # additional hints to map
control_point_description: "Auf der Karte und zum Download"
hints: "" # respects markdown
greetings: "" # Der Verein wünscht Euch ...

resources:
- src: "**/*SOLV**"
  title: "SOLV Kategorien Gegenüberstellung"
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
