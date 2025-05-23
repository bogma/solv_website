---
title: "3. Salzburger Sportvoglcup 2020"
date: 2020-07-04T10:45:00
draft: false

outputs:
- html
- Calendar
- splitsbrowser

status: done # planned (= for preview Calendar), active (= Announcement...), done (=Results...), canceled (for canceled events)
anne_id: 2907

archives: ["2020"]
tags: [ "SBG Cup"]

event:
  name_amend: ""
  form: "Normaler OL"
  location: "Saalachau"
  type: "sbgcup"
championship: false
organiser: "SOLV - Salzburger Orientierungslaufverband"
implementation: "HSV Wals" # remove one of the 3 options

# active section ------------------------------------------------

end: 150 # x minutes from event->date (remove if not needed)
start_amend: "(WKZ - Start 0m)" # respects markdown

official: # names of course setter, event organizer and inspector
  course: "Franz Nagele"
  event: "Franz Nagele"
  inspection: ""
course:
  valid: true # set to true when the course lenghts are final
  lenghts:
    [
      ["Einfach", "D-13, H-13, Offen Kurz", "Bahn 1", "2,3 km", "15 Posten"],
      ["Kurz regulär", "D-15, D-18, H-15, H55-, H65-, Offen Lang", "Bahn 2 a", "3,3 km", "18 Posten"],
      ["Kurz extra", "D55-", "Bahn 2 b", "2,7 km", "16 Posten"],
      ["Mittel", "H-18, D19-, D35-, D45-, H45-", "Bahn 3", "4,2 km", "14 Posten"],
      ["Lang", "H19-, H35-", "Bahn 4", "5,8 km", "20 Posten"],
      ["Family", "Kinder, Familien, Anfänger", "Family", "2,0 km", "13 Posten"]
    ]
entry:
  anne: true # if true, a link to ANNE will be provided
  email: anmeldung@ol-sbg.at
  closing_date_days: -8 # x days from event->date
meeting:
  point: "Parkplatz Mil-GÜPL Saalachau"
  time_minutes: -45 # x minutes from event->date
  location: [47.802126, 12.974996]
map:
  name: "Saalachau"
  scale: "1:7.500"
  equidistance: "2m"
  update: "Juni 2020"
  format: ""
  hints: "" # additional hints to map
control_point_description: "Nur auf der Laufkarte"
timing: "SPORTIdent; SI-Air+ (touch free) aktiviert"
hints: "
+ Unbedingt zeitgerecht anmelden – Corona-bedingt sind keine Anmeldungen vor Ort erwünscht!

+ Bitte die Corona-Regeln einhalten. Hier gelten **2 Meter Abstand!**

+ Banküberweisung wird erwünscht! IBAN: AT37 4501 0000 0410 5755
  
+ Bei Kategorie Family unbedingt anmelden und Anzahl der teilnehmenden Familienmitglieder angeben!

+ Das Wettkampfgebiet ist ein militärischer Übungsplatz, demgemäß muss immer mit
Grabungen, Löchern oder dergleichen gerechnet werden."

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

liveresultat_id: 17565

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
