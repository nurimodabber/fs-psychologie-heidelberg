# Fachschaft Psychologie · Ruprecht-Karls-Universität Heidelberg

Eine moderne, professionelle und ansprechende Web-Plattform für die Fachschaft Psychologie der Universität Heidelberg. Die Website übersetzt die traditionsreiche Corporate Identity der ältesten Universität Deutschlands (*Ruperto Carola*, 1386) in ein frisches, studentisches und zeitgemäßes Design.

---

## 🎨 Designsprache & Cues der Universität Heidelberg

1. **Ruperto-Carola-Identität & Typografie**:
   - Heidelberg-Rot (`#85151D`), Tiefdunkles Tintenschwarz (`#121316`) und warmer Sandstein-Mineral-Ton (`#FAF8F5`).
   - Typografische Hierarchie mit Meta-Titeln (*SEMPER APERTUS*, *Institut für Psychologie*) und dezenten Wasserzeichen-Hintergründen.
   - Hochwertige Schriftart `Plus Jakarta Sans` kombiniert mit der Monospace-Präzision von `JetBrains Mono`.

2. **Strukturelle Grid-Architektur & "Doppelrand"**:
   - Quick-Links-Grid nach dem Vorbild der zentralen Uni-Heidelberg-Startseite (8 fokussierte Kacheln mit Pfeil-Interaktionen).
   - Double-Bezel Hardware-Design (präzise gefasste Inhaltskarten mit sanften Konturen und Schatten).

3. **Fachschafts-spezifische Features**:
   - **Studien-Kompass**: Interaktive Umschaltung zwischen Bachelor (B.Sc.), Master KliP (Klinische Psychologie & Psychotherapie) und dem Schritt-für-Schritt Approbations-Fahrplan nach neuem PsychThG.
   - **BlackBox Institutsmagazin & Necker-Würfel**: Präsentation der aktuellen Ausgabe mit interaktivem Necker-Würfel-Wahrnehmungsexperiment (bistabile Wahrnehmung mit Perspektivwechsel und 3D-Rotation).
   - **Leben am Institut**: Bento-Grid mit echten Heidelberger Traditionen (Psychoparty, Pumpkinparty, PsychoKino, Ersti-Wochenende, Institutsgrillen im Sandsteinhof).
   - **Hochschulpolitik & Gremien**: Transparente Aufschlüsselung der Vertretung in FachRat, FakRat, StuRa, QSM-Kommission, Prüfungsausschuss und PsyFaKo.
   - **Service & FAQ**: Filterbare Suche für Studienanfänger:innen und Download-Center für Modulhandbücher und Leitfäden.
   - **Fachschafts-Desk**: Raumfinder für Hauptstraße 47–51 (Raum A001), Sitzungszeiten (dienstags 18:00 Uhr) und interaktives Beratungsformular.

---

## 🚀 Lokale Entwicklung

Das Projekt basiert auf **React 19**, **Vite 8**, **Tailwind CSS v4** und **Phosphor Icons**.

### 1. Entwicklungsserver starten
```bash
npm run dev
```
Die Seite öffnet sich unter `http://localhost:5173`.

### 2. Produktions-Build erstellen
```bash
npm run build
```
Erzeugt die optimierten statischen Dateien im Verzeichnis `dist/`.

### 3. Vorschau des Builds
```bash
npm run preview
```

---

## 📁 Projektstruktur

```
├── public/
│   └── images/
│       ├── hero-campus.jpg        # Editorial Campus-Aufnahme Psychologisches Institut
│       ├── blackbox-mag.jpg       # BlackBox-Magazin Stillleben mit Necker-Würfel
│       └── events-community.jpg   # Abendliches Institutsgrillen im Innenhof
├── src/
│   ├── components/
│   │   ├── Navbar.tsx             # Floating Header mit Uni-Band und Statusanzeige
│   │   ├── Hero.tsx               # Monumentaler Hero mit Doppelrand und Kennzahlen
│   │   ├── QuickLinks.tsx         # 8-Kachel Schnellzugriff im Uni-Heidelberg-Stil
│   │   ├── StudyPathways.tsx      # Bachelor, KliP Master & Approbations-Roadmap
│   │   ├── BlackBoxFeature.tsx    # Magazin-Präsentation mit Necker-Würfel-Widget
│   │   ├── LifeAtInstitute.tsx    # Events, Partys und Campus-Traditionen
│   │   ├── HopoSection.tsx        # Gremien, Mitbestimmung & offene Sitzungen
│   │   ├── FaqDownloads.tsx       # Durchsuchbare FAQ & Download-Archiv
│   │   ├── ContactSection.tsx     # Raum A001, Sprechzeiten & Anfragen
│   │   └── Footer.tsx             # Uni-Motto, Portale (heiCO, Moodle) & Rechtliches
│   ├── App.tsx                    # Hauptkomponente mit Scroll-Navigation
│   ├── main.tsx                   # React-Einstiegspunkt
│   └── index.css                  # Globale Tailwind- & Theme-Definitionen
├── index.html                     # HTML-Vorlage mit Typografie & Favicon
├── package.json                   # Paketdefinitionen
└── vite.config.ts                 # Vite-Konfiguration mit Tailwind v4
```
