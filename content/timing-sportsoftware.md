---
title: "Zeitnehmung"
tpye: "page"
draft: false
disable_rightbar: true
slug: "timing"

# menu:
#   main:
#     name: "Zeitnehmung"
#     weight: 1000
#     identifier: "timing"
#     parent: olinfo
---

## Zeitnehmung mit __SportSoftware__

Für Salzburg Cups wird als Vorlage [dieser](/resources/template_sbgcup.skb) Wettkampf verwendet. Wettkampf Sicherung herunterladen und als eigenen Lauf wiederherstellen. Danach sollte der Wettkampf "x. Salzburger Sportvoglcup 202y" vorhanden sein.

+ **Schritt 1:** Mit SportSoftware einen neun Wettkampf anlegen. Dazu SportSoftware öffnen -> Wettkampf kopieren (Von: "x. Salzburger Sportvoglcup 202y" - Neuen Wettkampf anlegen - x/y richtig wählen) und Start drücken. Wenn fertig Schließen drücken.

+ **Schritt 1a:** Wettkampf-Einstellungen setzen. Wettkampf -> Einstellungen -> Sportident Einstellungen (Datum und Nullzeit setzen, Start-Station benuntzen aktivieren)

+ **Schritt 2:** Import der Meldungen. Dazu benötigt man die Meldungen aus ANNE exportiert im CSV Format (entweder vom Wettkampfleiter oder selbst exportiern falls man Vereinsvertreter des austragenden Vereins ist).
  +  ANNE login -> Start -> Meine Veranstaltungen
  +  Veranstaltung wählen + OK
  +  Daten exportieren -> alle Felder wie vorgegeben belassen und exportieren

+ **Schritt 2a:** ANNE export in ANSI codierung abspeichern. Dazu Export-Datei mit einem Text editor öffnen (z.B. Notepad) dann Datei -> Speichern unter -> Codierung = "ANSI" wählen und speichern.

+ **Schritt 2b:** Meldungen -> Importieren (Teilnehmer hinzufügen und ändern, Identifizieren mit Name, Dateiformat CSV, Trennzeichen = ;, Textbegrenzung = ").
Danach evtl. Probleme beim Import beheben wie z.B.:
  + freie Anmeldungen mit falsch geschriebenen Vereinsnamen berichtigen
  + Verein BIB! anlegen falls benötigt (Vereinsnummer 201)
  + Nachmeldungen und Korrekturen die per email eingegangen sind eintragen.

+ **Schritt 4:** Import der Bahnen. Die Bahndaten kommen vom Bahnleger/Wettkampfleiter am besten im ClassesV8 Format oder auch als IOF XML Datei.
  + Bahnen - Importieren
  + Bahnen - Bearbeiten - Kategorien - jeder Kategorie die richtige Bahn zuordnen.

+ **Schritt 5:** Wettkampf sichern!!
