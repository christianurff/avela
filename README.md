# Avela

Schriften von Christian Urff für Schulbücher, Unterrichtsmaterial und digitale
Lernangebote. Mit klaren Buchstaben, Rechenzeichen und Varianten zum Schreibenüben.

**[Schriftprobe öffnen](https://christianurff.github.io/avela/)** ·
**[Schriftpaket herunterladen](https://github.com/christianurff/avela/releases/latest)**

## Familien und Schnitte

| Familie | Einsatz | Schnitte |
| --- | --- | --- |
| Avela Buch | Ruhige Formen für Lesetexte | Light, Regular, Medium, SemiBold, Bold; Regular bis Bold auch kursiv |
| Avela Text | Handschriftlichere Formen für Lernmaterial | Light, Regular, Medium, Bold |
| Avela Rechnen | Passend zu Avela Text, mit festen Stellenbreiten | Light, Regular, Bold |
| Avela Text Spur / Start | Deutsche Groß- und Kleinbuchstaben üben | Jeweils Regular |
| Avela Rechnen Spur / Start | Ziffern 0–9 üben | Jeweils Regular |

Insgesamt **20 Schnitte**, jeweils als TTF und WOFF2. Die Schriftdateien verwenden
die geprüften lokalen Entwürfe. In **v1.0.1** sind Medium, SemiBold und Bold von
**Avela Buch auf Schriftversion 1.017** aktualisiert: weichere Bögen bei n/m/h/r
und etwas größere Innenräume bei a/b/d/e/g/o/p/q. Textbreiten, Abstände und
Rechenfunktionen bleiben erhalten. Die übrigen Schnitte bleiben auf 1.016 bzw.
0.101. [Alle Änderungen](CHANGELOG.md).

## Auf dem Computer installieren

1. Das ZIP-Paket unter [Releases](https://github.com/christianurff/avela/releases/latest) laden und entpacken.
2. Die gewünschten Dateien aus `fonts/ttf` installieren:
   - **macOS:** TTF-Dateien in die Schriftsammlung ziehen.
   - **Windows:** TTF-Dateien markieren, mit der rechten Maustaste klicken und „Installieren“ wählen.
3. Word oder PowerPoint bei Bedarf neu öffnen.

Die TTF-Dateien erlauben Einbettung. Ob und wie ein Programm die Schrift in
PowerPoint-, Word- oder PDF-Dateien einbettet, hängt vom Programm und seinen
Exporteinstellungen ab. Light steht je nach Programm als Schnitt oder eigene
Menügruppe zur Verfügung. „Avela Buch“ hieß in früheren Entwürfen „Avela Lesen“.

## Direkt als Webschrift einbinden

Diese Zeile in den `<head>` der Webseite setzen:

```html
<link rel="stylesheet" href="https://christianurff.github.io/avela/web/avela.css">
```

Danach in der eigenen CSS-Datei verwenden:

```css
body {
  font-family: "Avela Buch", sans-serif;
  font-size: 1.25rem;
  line-height: 1.5;
}
.handschrift { font-family: "Avela Text", sans-serif; }
.rechnen {
  font-family: "Avela Rechnen", sans-serif;
  font-feature-settings: "calt" 1;
  letter-spacing: 0;
  white-space: pre-wrap;
}
.nachspuren {
  font-family: "Avela Text Spur", sans-serif;
  font-size: 64px;
  font-synthesis: none;
}
```

Die CSS-Datei enthält alle 20 Schnitte. Der Browser lädt nur die tatsächlich
verwendeten Schriften. Die Dateien `avela-buch.css`, `avela-text.css`,
`avela-rechnen.css` und die entsprechenden `*-spur.css` / `*-start.css`
bieten jeweils eine einzelne Familie an.

**Selbst hosten:** Den Ordner `web` mitsamt Lizenzangaben auf den eigenen Server
kopieren und `<link rel="stylesheet" href="/fonts/avela/avela.css">` verwenden.
Die WOFF2-Dateien und CSS müssen im selben Ordner bleiben. Für einen festen
Versionsstand die Dateien aus einem bestimmten Release verwenden. Die direkte
GitHub-Pages-Adresse zeigt jeweils die aktuelle Ausgabe.

Bei einer eigenen Content Security Policy den Host `https://christianurff.github.io`
für `style-src` und `font-src` freigeben oder die Dateien selbst hosten.

## Rechnen

In Avela Rechnen und den beiden zugehörigen Übungsschriften gilt:

- Ziffern und übliche Rechenzeichen belegen eine gleich breite Stelle.
- `*` erscheint als deutscher Malpunkt; `-` als Minuszeichen.
- `:` bleibt das deutsche Geteilzeichen mit zwei Punkten.
- Das Komma direkt zwischen Ziffern, etwa `12,50`, belegt durch OpenType `calt`
  keine eigene Stelle. Ein Komma in einer Liste wie `1, 2, 3` bleibt normal breit.

Für Aufgaben untereinander feste Zeilen, Tabellen oder Tabstopps verwenden.
Keine beliebige Anzahl von Leerzeichen zwischen Zeilen mischen. Die Zeichen im
gespeicherten Text ändern sich durch die Darstellung nicht. Dezimalkomma und
weitere OpenType-Funktionen benötigen Unterstützung durch das verwendete Programm.

Avela Buch enthält eine Rechenoption unter OpenType `ss02`. Sie ist keine
zusätzliche Familie. Für einfache Mathematikeingabe ist Avela Rechnen vorgesehen.

## Spur und Start

**Spur** zeigt gestrichelte Schreibwege, Startpunkte und Richtungspfeile.
**Start** zeigt nur die Startpunkte und die erste Richtung. Der erste Punkt ist
größer, weitere Punkte sind etwas kleiner. Es gibt keine sichtbaren Strichnummern.

Text Spur/Start unterstützt A–Z, a–z, ÄÖÜ, äöü, ß und ẞ. Rechnen Spur/Start
unterstützt 0–9. Andere Zeichen bleiben normal sichtbar. Große Schriftgrade ab
etwa **48 pt** verwenden. Start-Hilfen brauchen eine bekannte Schreibaufgabe oder
eine vollständige Vorlage. Die Schreibwege zeigen eine mögliche Strichfolge.
Die Daten stehen in `sources/Schreibwege.json` auch für eigene Werkzeuge bereit.

## Lizenz und Herkunft

**Avela Text, Rechnen und die vier Übungsschriften:** [CC BY 3.0](licenses/CC-BY-3.0.md),
wie [Grundschrift](https://github.com/christianurff/grundschrift).
Empfohlene Namensnennung: „Avela von Christian Urff“, mit Link zur Schrift und Lizenz.

**Avela Buch:** [SIL Open Font License 1.1](licenses/OFL-1.1-Avela-Buch.txt).
Die Basis ist [Andika 7.000 von SIL Global](https://software.sil.org/andika/).
Angepasst wurden unter anderem Buchstabenformen, Ziffern, Rechenzeichen,
Proportionen und Abstände; hinzu kam ein Light-Schnitt. Diese Ableitung muss
unter der OFL bleiben. Die Lizenz gilt nicht automatisch für die erstellten
Unterrichtsmaterialien. Details: [LICENSE.md](LICENSE.md).

Die Familie ist technisch geprüft. Eine allgemeine Überlegenheit beim Lesen
wurde nicht mit Kindern nachgewiesen. Hinweise und Fehler können über die
[Issues](https://github.com/christianurff/avela/issues) gemeldet werden.

`MANIFEST.json` dokumentiert Schnitte, Lizenzen und Prüfsummen.
`VALIDATION.json` dokumentiert die Prüfung dieser Veröffentlichung.
