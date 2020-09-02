---
title: "4. Salzburger Sportvoglcup 2020"
date: 2020-09-05T11:00:00 # keep time 0 until start time is known
draft: false

outputs:
- html
- Calendar
- splitsbrowser

status: active # planned (= for preview Calendar), active (= Announcement...), done (=Results...), canceled (for canceled events)

archives: []
tags: [ "SBG Cup"]

anne_id: 3130

event:
  name_amend: "" # respects markdown
  form: "Sprint OL"
  location: "Landes-Berufsschule Hallein"
  type: "sbgcup"
championship: false
organiser: "SOLV - Salzburger Orientierungslaufverband"
implementation: "SSV Hallein-Neualm" # remove 2 of the 3 options

# active section ------------------------------------------------

end: 120 # x minutes from event->date (remove if not needed)
start_amend: "" # respects markdown

official: # names of course setter, event organizer and inspector
  course: "Horst Mayer"
  event: "Horst Mayer"
  inspection: ""
course:
  valid: true # set to true when the course lenghts are final
  lenghts:
    [
      ["Einfach", "D-13, H-13, Offen Kurz", "Bahn 1", "1100 m", "17 Posten"],
      ["Kurz regulär", "D-15, D-18, H-15, H55-, H65-, Offen Lang", "Bahn 2", "1700 m", "21 Posten"],
      ["Mittel", "H-18, D19-, D35-, D45-, H45-", "Bahn 3", "1800 m", "24 Posten"],
      ["Lang", "H19-, H35-", "Bahn 4", "1900 m", "25 Posten"],
      ["Family", "Kinder, Familien, Anfänger", "Family", "800 m", "14 Posten"]
    ]
entry:
  anne: true # if true, a link to ANNE will be provided
  email: anmeldung@ol-sbg.at
  closing_date_days: -10 # x days from event->date
meeting:
  point: "Landes-Berufsschule Hallein"
  time_minutes: -60 # x minutes from event->date
  location: [47.689324, 13.091962]
map:
  name: "Landes-Berufsschule Hallein"
  scale: "1:2.000"
  equidistance: "2m"
  update: "August 2020"
  format: "A4"
  hints: "" # additional hints to map
control_point_description: "Nur auf der Karte"
hints: "
+ Unbedingt zeitgerecht anmelden – Keine Nachmeldungen vor Ort!

+ Bitte die Corona-Regeln einhalten. Hier gelten **2 Meter Abstand!**

+ Einzahlung auf das Konto des SSV Hallein-Neualm erwünscht! Kontoverbindung: IBAN: AT48 3502 2000 0201 0148
  
+ Bei Kategorie Family unbedingt anmelden und Anzahl der teilnehmenden Familienmitglieder angeben!"
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

liveresultat_id: 18020

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
