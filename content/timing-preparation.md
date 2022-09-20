---
title: "Zeitnehmung - Die Vorbereitung"
tpye: "page"
draft: false
disable_rightbar: true
slug: "timing/preparation"

# menu:
#   main:
#     name: "Zeitnehmung"
#     weight: 1001
#     identifier: "timing"
#     parent: olinfo
---

### **Schritt 1:** Mit SportSoftware einen neun Wettkampf anlegen.

Dazu entweder

a) SportSoftware öffnen ->
  - *Wettkampf - Neu* - Zumindest Bezeichnung, Datum und Nullzeit setzten.
  - *Wettkampf - Einstellungen - Chip-System* - Start-Station benuntzen aktivieren  
  - *Meldungen - Importieren - Kategorien* - als erstes werden jetzt die [Salzburgcup Kategorien](/resources/sbgcup_categories_V12.csv) importiert

oder

b) SportSoftware öffnen (Vorraussetzung ist, dass [die Wettkampfvorlage](/resources/template_sbgcup_V12.skb) vorher schon einmal mittels *Wettkampf - Wiederherstellen* importiert wurde.) -> 
  - *Wettkampf - Kopieren* - den Wettkampf "x. Salzburger Sportvoglcup 202y" - Neuen Wettkampf anlegen anhacken - x/y richtig wählen und *Start* drücken. Wenn fertig - *Schließen* drücken.
  - *Wettkampf - Einstellungen* - Zumindest Bezeichnung, Datum und Nullzeit setzten. Weiter zu *Chip-System* und Start-Station benuntzen aktivieren

### **Schritt 2:** Import der Meldungen.

Dazu benötigt man die Meldungen aus ANNE exportiert im CSV Format (entweder vom Wettkampfleiter oder selbst exportiern falls man Vereinsvertreter des austragenden Vereins ist).
  
1. Meldungen exportieren:
  - ANNE login -> Start -> Meine Veranstaltungen
  - Veranstaltung wählen + OK
  - Daten exportieren -> alle Felder wie vorgegeben belassen und exportieren

2. Export Datei bearbeiten
  - Bei Sportsoftware **V12.1**: die ANNE Exportdatei ist im OEV10 Format. Sie muss zuerst konvertiert werden. Dazu [dieses Programm](/resources/OETransform.exe) herunterladen und am besten in den Ordner mit den Exportdateien speichern. In einer Konsole (powershell, cmd, windows-terminal)
  ''' OETransform.exe -i <v10 anne entries csv> -o <neuer csv dateiname>''' aufrufen. Achtung: in beiden Fällen den vollen Pfad (Rooted Path) verwenden.
  - Bei Sportsoftware **V10**: ANNE export in ANSI codierung abspeichern. Dazu Export-Datei mit einem Text editor öffnen (z.B. Notepad) dann Datei -> Speichern unter -> Codierung = "ANSI" wählen und speichern.

3. Meldungen importieren
  - *Meldungen - Importieren - Meldungen* - Teilnehmer hinzufügen und ändern, Identifizieren mit Name, Dateiformat CSV, Trennzeichen = ;, Textbegrenzung = ", CSV Datei auswählen und *OK* drücken.
  - Danach evtl. Probleme beim Import beheben wie z.B.:
    + freie Anmeldungen mit falsch geschriebenen Vereinsnamen berichtigen
    + Verein BIB! anlegen falls benötigt (Vereinsnummer 201)
    + Nachmeldungen und Korrekturen die per email eingegangen sind eintragen.

### **Schritt 3:** Import der Bahnen.

Die Bahndaten kommen vom Bahnleger/Wettkampfleiter am besten im ClassesV8 Format oder auch als IOF XML Datei.

  + *Bahnen - Importieren - Bahnen* - Bahnen löschen und neu erzeugen, Posten löschen und neu erzeugen, Dateiformat je nach vorhandener Bahnendatei wählen
  + *Bahnen - Bearbeiten - Kategorien* - jeder Kategorie die richtige Bahn (wie lt. Ausschreibung angegeben) zuordnen.
 
### **Schritt 4:** Wettkampf sichern!!

Es empfiehlt sich von Zeit zu Zeit eine Sicherung zu machen. SportSoftware 'verliert' zwar keine Daten aber bei falschen Bearbeitungsschritten (z.B weitere Meldungen werden importiert, Test des Chip Lesesystems mit SI Sticks, Läufer werden bearbeitet zur Erstellung von LM Wertungen, Korrekturen bei fehlerhaften Chip Auswertungen ...) gibt es keine Möglichkeit etwas Rückgängig zu machen. Daher vor solchen Schritten immer eine Sicherung durchführen damit man im Notfall zu diesem Zeitpunkt zurückkehren kann. Weiters kann die Sicherungsdatei zum Austausch des Wettkampfs mit anderen genutzt werden.

  - *Wettkampf - Sichern*

### **Schritt 5:** Startliste erstellen

Die Erstellung der Startlisten erfordert etwas Geduld. Zuerst muss die Startliste organisiert werden (bei Salzburgcups nach Kategorien) und danach kann die Auslosung erfolgen. Schlussendlich werden mind. 2 PDF Startlisten erstellt - 1 zum Veröffentlichen im WEB und eine für die Startmannschaft.

1. Startliste organisieren
   *Startliste - Organisation - Kategorien* - im Normalfall werden 4 Startboxen verwendet (für die Bahnen Einfach, Kurz + Kurz Sen., Mittel, Lang). Danach alle Kategorien die die selbe Bahn haben in ein Starbox geben. Dabei die langsameren Kategorien eher am Anfang starten lassen und weiter hinten die schnelleren. Für die verschieden Wettkampfarten gibt es unterschiedliche Vorgaben für das Startinterval: Sprint - 1 min, Mittel - 2 min, Lang - 3 min.. In mindestens einer Kategorie werden ein paar Vakantplätze eingeplant (evtl. mit dem Orgianisator über die Anzahl verfügbarer Karten sprechen). Die Fam. Kategorie kann, muss aber nicht unbedingt mit geplant werden, da sie generell freie Startzeiten hat.

2. Startliste auslosen
   *Startliste - Erstellen - Kategorien* - jetzt kann die Startliste ausgelost werden mit *Startzeiten - Alle Kategorien*. Danach können noch individuelle Wünsche (z.B. frühe Startzeit) mittels verschieben einzelner Teilnehmer berücksichtigt werden.

3. Startliste exportieren
   - Startliste zum Veröffentlichen: *Startliste - Startlisten-Berichte - Kategorien* - PDF erstellen
   - Startliste für die Startmannschaft: *Startliste - Startlisten-Berichte - Startzeiten* - PDF erstellen
   - beide PDF Dateien dem Organisator schicken
  
### **Schritt 6:** Siehe Schritt 4
   

 
