---
title: "9. Salzburger Sportvoglcup 2020"
date: 2020-11-07T11:00:00 # keep time 0 until start time is known
draft: false

outputs:
- html
- Calendar
- splitsbrowser

status: active # planned (= for preview Calendar), active (= Announcement...), done (=Results...), canceled (for canceled events)

archives: []
tags: [ "SBG Cup"]

anne_id: 2905

event:
  name_amend: "" # respects markdown
  form: "Normaler OL"
  location: "Mönchsberg"
  type: "sbgcup"
championship: false
organiser: "SOLV - Salzburger Orientierungslaufverband"
implementation: "HSV Wals" # remove 2 of the 3 options

# active section ------------------------------------------------

end: 165 # x minutes from event->date (remove if not needed)
start_amend: "(WKZ - Start 500m + 50HM)" # respects markdown

official: # names of course setter, event organizer and inspector
  course: "Franz Nagele"
  event: "Franz Nagele"
  inspection: "Jakob Buchberger, Leopold Tonka"
course:
  valid: true # set to true when the course lenghts are final
  lenghts: [["Family","1,7 km", "65HM", "15Po"], ["Einfach","2,9 km", "100HM", "20Po"], ["Kurz","3,0 km", "115HM", "24Po"], ["D55","2,5 km", "100HM", "19Po"], ["Mittel","4,4 km", "230HM", "30Po"], ["Lang","5,1 km", "330HM", "38Po"]]
entry:
  anne: true # if true, a link to ANNE will be provided
  email: anmeldung@ol-sbg.at
  closing_date_days: -9 # x days from event->date
meeting:
  point: "Parkplatz Augustinerbräu"
  time_minutes: -75 # x minutes from event->date
  location: [47.804756, 13.032753]
map:
  name: "Mönchsberg"
  scale: "1:4.000"
  equidistance: "5m"
  update: "Herbst 2020"
  format: ""
  hints: "" # additional hints to map
control_point_description: "Auf der Laufkarte und zum Download (für den Ausdruck zuhause)"
hints: "
+ Unbedingt zeitgerecht anmelden – Corona-bedingt sind keine Anmeldungen vor Ort erwünscht!

+ Bitte die Corona-Regeln einhalten. Hier gelten **2 Meter Abstand!**

+ Banküberweisung! IBAN: AT37 4501 0000 0410 5755
  
+ Bei Kategorie Family unbedingt anmelden und Anzahl der teilnehmenden Familienmitglieder angeben!" # respects markdown
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
  title: "Übersichtsplan"
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
