const APP_VERSION = "1.1";

const APP_CHANGELOG = [
  {
    version: "1.1",
    groups: [
      {
        title: "Artikelkatalog (nur Admins)",
        items: [
          "Standardmenge je Artikel festlegbar — die Mengen-Eingabe im Bestellformular ist damit für noch nicht bestellte Artikel bereits sinnvoll vorbelegt (z.B. 1), statt leer zu starten."
        ]
      }
    ]
  },
  {
    version: "1.0",
    groups: [
      {
        title: "Bestellung aufgeben",
        items: [
          "Trainer:innen wählen aus einem Artikelkatalog (z.B. Trainingsjacke, Poloshirt) die passende Größe und Menge.",
          "Die eigene Bestellung kann beliebig oft geändert werden, solange das Bestellfenster geöffnet ist.",
          "Kommentarfeld für Anmerkungen zur Bestellung (z.B. Rückfragen zur Größe)."
        ]
      },
      {
        title: "Anmeldung & Speicherung",
        items: [
          "Automatische Nextcloud-Synchronisierung über die zentrale Anmeldung (Tools-Übersicht) — kein separates Passwort auf diesem Gerät nötig."
        ]
      },
      {
        title: "Bestellfenster (nur Admins)",
        items: [
          "Das Bestellfenster kann geschlossen werden — danach sind alle Bestellungen nur noch lesbar, damit nach Auslösung der Lieferanten-Bestellung keine Änderungen mehr möglich sind.",
          "Wieder-Öffnen jederzeit möglich."
        ]
      },
      {
        title: "Artikelkatalog (nur Admins)",
        items: [
          "Artikel mit Name und verfügbaren Größen anlegen, bearbeiten, deaktivieren oder entfernen.",
          "Artikel, die bereits bestellt wurden, können nur deaktiviert (nicht gelöscht) werden, damit bestehende Bestellungen konsistent bleiben."
        ]
      },
      {
        title: "Bestellungsübersicht & Export (nur Admins)",
        items: [
          "Tabelle aller abgegebenen Bestellungen mit Name, Positionen und letzter Änderung.",
          "Export als Text- oder PDF-Datei, gruppiert nach Artikel und Größe — direkt als Bestellliste an den Lieferanten weiterreichbar."
        ]
      }
    ]
  }
];
