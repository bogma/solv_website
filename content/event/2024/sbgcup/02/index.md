---
title: "2. Salzburger Sportvoglcup 2024"
date: 2024-06-23T10:00:00 # keep time 0 until start time is known
draft: false

outputs:
- html
- Calendar
- splitsbrowser

status: done # planned (= for preview Calendar), active (= Announcement...), done (=Results...), canceled (for canceled events)

archives: []
tags: [ "SBG Cup"]

anne_id: 4573

event:
  name_amend: "LM Sprint (Qualifikation)" # respects markdown
  form: "Sprint OL"
  location: "Wals-Siezenheim"
  type: "sbgcup"
championship: true
organiser: "SOLV - Salzburger Orientierungslaufverband"
implementation: "HSV Wals" # remove 2 of the 3 options

# active section ------------------------------------------------

#liveresultat_id: 18741
oresults_id: 1013
#end: 150 # x minutes from event->date (remove if not needed)
#start_amend: "(WKZ - Start 0m)" # respects markdown

official: # names of course setter, event organizer and inspector
  course: "Franz Nagele"
  event: "Franz Nagele"
  inspection: "Jakob Buchberger"
course:
  valid: false # set to true when the course lenghts are final
  lenghts: [["Einfach","x km"], ["Kurz","x km"], ["Mittel","x km"], ["Lang","x km"]]
entry:
  anne: true # if true, a link to ANNE will be provided
  email: anmeldung@ol-sbg.at
  closing_date_days: -10 # x days from event->date
meeting:
  point: "Parkplatz zw. Schloss und Tourismusschule"
  time_minutes: -60 # x minutes from event->date
  location: [47.81899, 12.99110]
map:
  name: "Salzburg – Schloss Klessheim"
  scale: "1:3.000"
  equidistance: "2m"
  update: "Juni 2024"
  format: ""
  hints: "" # additional hints to map
control_point_description: "Ausgabe vor Ort in Papierform! Allg. Damen & Herren erst beim Zugang zum Start."
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
  title: "Ergebnis Landesmeisterschaft Jugend & Senioren"


resource_links:
  results:
  - link: "/resources/2024/lmsprint2024.html"
    title: "Ergebniss Sprint Landesmeisterschaft 2024"

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
