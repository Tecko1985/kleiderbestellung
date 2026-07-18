const APP_VERSION = "1.0";

const APP_CHANGELOG = [
  {
    version: "1.0",
    groups: [
      {
        title: "Bestellung aufgeben",
        items: [
          "Trainer:innen wählen aus einem Artikelkatalog (z.B. Trainingsjacke, Poloshirt) die passende Größe; die Menge je Artikel ist vom Verein über den Artikelkatalog fest vorgegeben.",
          "Die eigene Bestellung kann beliebig oft geändert werden, solange das Bestellfenster geöffnet ist.",
          "Kommentarfeld für Anmerkungen zur Bestellung (z.B. Rückfragen zur Größe).",
          "Betreute Mannschaft(en) aus dem zentralen Trainerprofil (Tools-Übersicht) werden als Hinweis neben dem eigenen Namen angezeigt, sofern dort gepflegt."
        ]
      },
      {
        title: "Anmeldung & Speicherung",
        items: [
          "Automatische Nextcloud-Synchronisierung über die zentrale Anmeldung (Tools-Übersicht) — kein separates Passwort auf diesem Gerät nötig."
        ]
      },
      {
        title: "Bestellfenster (Admin/Bearbeiter)",
        items: [
          "Artikelkatalog pflegen, Bestellfenster öffnen/schließen und fremde Bestellungen löschen sind an das Bearbeiten-Recht der Gruppen-Verwaltung gekoppelt, nicht an Admin-Status allein — die eigene Bestellung aufgeben/ändern bleibt für jeden mit Tool-Zugriff unverändert möglich.",
          "Das Bestellfenster kann geschlossen werden — danach sind alle Bestellungen nur noch lesbar, damit nach Auslösung der Lieferanten-Bestellung keine Änderungen mehr möglich sind.",
          "Wieder-Öffnen jederzeit möglich."
        ]
      },
      {
        title: "Artikelkatalog (Admin/Bearbeiter)",
        items: [
          "Artikel mit Name, verfügbaren Größen und Standardmenge anlegen, bearbeiten, deaktivieren oder entfernen.",
          "Artikel, die bereits bestellt wurden, können nur deaktiviert (nicht gelöscht) werden, damit bestehende Bestellungen konsistent bleiben."
        ]
      },
      {
        title: "Bestellungsübersicht & Export (Admin/Bearbeiter)",
        items: [
          "Tabelle aller abgegebenen Bestellungen mit Name, Positionen und letzter Änderung.",
          "Export als Text- oder PDF-Datei, gruppiert nach Artikel und Größe — direkt als Bestellliste an den Lieferanten weiterreichbar."
        ]
      }
    ]
  }
];
