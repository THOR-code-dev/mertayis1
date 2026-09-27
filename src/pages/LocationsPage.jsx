import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  Zap, 
  CheckCircle2, 
  Building2, 
  PhoneCall, 
  ShieldCheck,
  Search
} from 'lucide-react';

export default function LocationsPage({ onOpenOffer }) {
  const [selectedCity, setSelectedCity] = useState('Köln');
  const [searchTerm, setSearchTerm] = useState('');

  const cityData = {
    'Köln': {
      region: 'Nordrhein-Westfalen & Rheinland',
      title: 'Messdienst & Rauchwarnmelder in Köln',
      desc: 'In Köln und der Metropolregion Rheinland betreuen unsere qualifizierten Serviceteams Wohnungsunternehmen, Hausverwaltungen und Gewerbeobjekte mit schnellen Vor-Ort-Einsätzen für Zählerwechsel, Ablesung und DIN 14676 Rauchmelder-Prüfungen.',
      points: [
        'Express-Terminierung im Kölner Stadtgebiet & Umland',
        'Rechtssichere Umsetzung der Landesbauordnung NRW (LBO)',
        'Hohe Vorratslagerung von MID-Wasser- und Wärmezählern'
      ]
    },
    'Düsseldorf': {
      region: 'Landeshauptstadt NRW & Niederrhein',
      title: 'Zählertechnik & Rauchmelder-Service in Düsseldorf',
      desc: 'Für Düsseldorfer Immobilienverwaltungen und Gewerbeeigentümer übernehmen wir die schlüsselfertige Montage von Funk-Heizkostenverteilern, den Eichfristen-Tausch von Wasserzählern und die revisionssichere Rauchmelder-Wartung.',
      points: [
        'Schnelle Einsatzbereitschaft für Großliegenschaften',
        'Zertifizierte Fachkräfte für Rauchwarnmelder DIN 14676',
        'Digitale Fotoprotokolle für Eigentümergemeinschaften (WEG)'
      ]
    },
    'Dortmund': {
      region: 'Ruhrgebiet Ost / Westfalen',
      title: 'Messdienstleistungen & Zählerwechsel in Dortmund',
      desc: 'Im östlichen Ruhrgebiet und Dortmund koordinieren wir effiziente Serienwechsel von Warm- und Kaltwasserzählern sowie die Montage intelligenter Funk-Ablesesysteme für Wohnungsbaugesellschaften.',
      points: [
        'Optimierte Routenplanung mit hoher Ersttermin-Quote',
        'Zuverlässige Mieterbenachrichtigung & Terminkarten',
        'Direkte Schnittstellen für Verwalter-Software'
      ]
    },
    'Essen': {
      region: 'Zentrales Ruhrgebiet',
      title: 'Rauchwarnmelder & Zählerservice in Essen',
      desc: 'Von der Einzelimmobilie bis zum Großbestand mit mehreren hundert Wohnungen: In Essen sichern wir die gesetzliche Rauchmelderpflicht und präzise Heizkostenverteiler-Aufnahmen ab.',
      points: [
        '10-Jahres Qualitäts-Rauchwarnmelder mit Q-Label',
        'Plombierung und Dokumentation aller Zähler',
        'Fester persönlicher Projektleiter für Verwalter'
      ]
    },
    'Wuppertal': {
      region: 'Bergisches Land (Unternehmenszentrale HQ)',
      title: 'Messdienst-Zentrale & Service-Hub Wuppertal',
      desc: 'An unserem Hauptstandort Wuppertal steuern wir die deutschlandweite Logistik und bieten regionalen Hausverwaltungen im Bergischen Land unschlagbar schnelle Reaktionszeiten.',
      points: [
        'Zentrale Dispositions- und Projektleitungsstelle',
        'Tagesaktuelle Notfall- und Express-Montagen',
        'Komplette Betreuung von A bis Z aus einer Hand'
      ]
    },
    'Frankfurt': {
      region: 'Hessen & Rhein-Main-Gebiet',
      title: 'Submetering & Rauchwarnmelder in Frankfurt am Main',
      desc: 'Im dynamischen Rhein-Main-Gebiet unterstützen wir anspruchsvolle Immobilienfonds und Verwalter bei der Digitalisierung der Verbrauchsdaten und termingerechten Zählerwechseln.',
      points: [
        'Einhaltung der novellierten Heizkostenverordnung (UVI)',
        'Fachgerechte Fühlermontage an Heizungssträngen',
        'Bundesweite Skalierbarkeit für Multi-City-Portfolios'
      ]
    },
    'Stuttgart': {
      region: 'Baden-Württemberg',
      title: 'Messdienst & Rauchwarnmelder-Service in Stuttgart',
      desc: 'In Stuttgart und Umgebung stehen wir für höchste technische Präzision bei der Wärmemengenzähler-Montage und lückenlosen Dokumentation für gewerbliche und private Liegenschaften.',
      points: [
        'Qualitätsmontage nach anerkannten Regeln der Technik',
        'DIN 14676 zertifizierte Prüfberichte für Versicherer',
        'Flexible Terminmodelle für Mieter'
      ]
    },
    'München': {
      region: 'Bayern / Metropolregion Süd',
      title: 'Zählertechnik & Rauchwarnmelder in München',
      desc: 'In München bieten wir professionellen Hausverwaltungen und anspruchsvollen Eigentümern zuverlässige Entlastung bei Zählerwechseln, Funk-Nachrüstungen und der jährlichen Melderinspektion.',
      points: [
        'Präzise 2-Fühler Heizkostenverteiler mit Funk',
        'Schnelle B2B-Konditionen für WEG- und Mietverwaltungen',
        'Vollständige Enthaftung für den Verwalter'
      ]
    },
    'Berlin': {
      region: 'Hauptstadtregion Berlin & Brandenburg',
      title: 'Großprojekte & Messdienstleistungen in Berlin',
      desc: 'Für Berliner Wohnungsbaugesellschaften und Verwalter managen wir großvolumige Rollouts von Rauchwarnmeldern und Wasserzählern mit digitaler Mieterterminierung.',
      points: [
        'Erfahrung mit Beständen von 500 bis über 5.000 Einheiten',
        'Standardisierte CSV/ERP-Datenexporte',
        'Mehrsprachige Mieteranschreiben für hohe Antreffquoten'
      ]
    },
    'Hamburg': {
      region: 'Metropolregion Hamburg & Norddeutschland',
      title: 'Zählertechnik & Rauchwarnmelder in Hamburg',
      desc: 'In Hamburg und dem norddeutschen Raum sind wir der verlässliche Partner für turnusmäßige Zählererneuerungen und stichtagsgenaue Heizkostenverteiler-Ablesungen.',
      points: [
        'Hohe Termintreue und reibungslose Mieterkoordination',
        'Rechtssichere Abwicklung nach LBO Hamburg',
        'Direkter digitaler Datenaustausch'
      ]
    },
    'Hannover': {
      region: 'Niedersachsen & Region Hannover',
      title: 'Messdienst & Rauchmelder-Wartung in Hannover',
      desc: 'Für Kunden in Niedersachsen koordinieren wir strukturierte Zählertausch-Aktionen und jährliche DIN 14676 Prüfungen mit schnellen Vor-Ort-Einsätzen.',
      points: [
        'Einsatzbereite Serviceteams in ganz Niedersachsen',
        'Zertifizierte Fachkräfte und Premium-Hardware',
        'Attraktive Rahmenverträge für Bestandshalter'
      ]
    },
    'Leipzig': {
      region: 'Sachsen & Mitteldeutschland',
      title: 'Zählerwechsel & Liegenschaftsaufnahme in Leipzig',
      desc: 'In Leipzig, Dresden und dem mitteldeutschen Raum unterstützen wir wachsende Bestände bei der Modernisierung ihrer Messtechnik und Rauchmelder-Infrastruktur.',
      points: [
        'Schnelle Ersterfassung bei Portfolio-Zukäufen',
        'Funk-Nachrüstung für unterjährige Mieterinfo (UVI)',
        'Transparente Festpreisangebote'
      ]
    }
  };

  const citiesList = Object.keys(cityData);
  const filteredCities = citiesList.filter(c => 
    c.toLowerCase().includes(searchTerm.toLowerCase()) || 
    cityData[c].region.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentCityInfo = cityData[selectedCity] || cityData['Köln'];

  return (
    <div className="page-wrapper locations-page">
      {/* Header Banner */}
      <section className="page-header-banner">
        <div className="container text-center">
          <span className="badge-pill-cyan">BUNDESWEITE PRÄSENZ</span>
          <h1 className="page-title">Deutschlandweiter Messdienst & Montageservice</h1>
          <p className="page-subtitle">
            Flächendeckende Betreuung von Liegenschaften in allen Bundesländern. Von unserer Zentrale in Wuppertal steuern wir Vor-Ort-Einsätze in allen deutschen Metropolen.
          </p>
        </div>
      </section>

      {/* Interactive City Hub */}
      <section className="section-wrapper bg-light">
        <div className="container">
          <div className="locations-hub-layout">
            
            {/* Sidebar / City Selector */}
            <div className="locations-sidebar">
              <div className="city-search-box">
                <Search size={18} className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Stadt oder Bundesland suchen..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="city-search-input"
                />
              </div>

              <div className="city-buttons-scroll">
                {filteredCities.map(city => (
                  <button
                    key={city}
                    className={`city-select-btn ${selectedCity === city ? 'active' : ''}`}
                    onClick={() => setSelectedCity(city)}
                  >
                    <MapPin size={16} className="pin-icon" />
                    <div className="city-btn-text">
                      <strong>{city}</strong>
                      <small>{cityData[city].region.split('&')[0]}</small>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Main City Detail View */}
            <div className="locations-detail-content">
              <div className="city-detail-card">
                <div className="city-detail-header">
                  <div className="city-header-pill">
                    <span className="city-region-tag">{currentCityInfo.region}</span>
                    <span className="city-status-tag">AKTIV VOR ORT</span>
                  </div>
                  <h2 className="city-detail-title">{currentCityInfo.title}</h2>
                  <p className="city-detail-desc">{currentCityInfo.desc}</p>
                </div>

                <div className="city-benefits-box">
                  <h3>Lokale Betreuungsvorteile für {selectedCity}:</h3>
                  <ul className="city-points-list">
                    {currentCityInfo.points.map((pt, i) => (
                      <li key={i}>
                        <CheckCircle2 size={18} className="text-cyan" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="city-detail-action-card">
                  <div>
                    <h4>Projekt in {selectedCity} oder Umland anfragen?</h4>
                    <p>Erhalten Sie innerhalb von 24h ein verbindliches Festpreisangebot.</p>
                  </div>
                  <button 
                    className="btn btn-primary btn-glow"
                    onClick={() => onOpenOffer(`Standort: ${selectedCity}`)}
                  >
                    <Zap size={16} />
                    <span>Angebot für {selectedCity} anfordern</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* HQ Section */}
      <section className="section-wrapper bg-white">
        <div className="container">
          <div className="hq-showcase-box">
            <div className="hq-text">
              <span className="section-category">UNTERNEHMENSZENTRALE</span>
              <h2 className="section-title">MOCD Nextmeasure GmbH – Zentrale Wuppertal</h2>
              <p className="section-subtitle">
                Von Wuppertal (NRW) aus steuern wir unsere bundesweite Disposition, den Einkauf von MID-Zählertechnik und die zentrale Qualitätssicherung aller digitalen Fotoprotokolle.
              </p>
              <div className="hq-contacts-grid">
                <div>
                  <strong>Adresse:</strong>
                  <p>Musterstraße 100, 42103 Wuppertal</p>
                </div>
                <div>
                  <strong>Telefon Zentrale:</strong>
                  <p>+49 202 12345678</p>
                </div>
                <div>
                  <strong>E-Mail Disposition:</strong>
                  <p>info@mocd-nextmeasure.de</p>
                </div>
              </div>
            </div>
            <div className="hq-badge-card">
              <ShieldCheck size={48} color="#00A3E0" />
              <h3>100% DIN & MessEG Konform</h3>
              <p>Zertifizierte Fachkräfte für Deutschland</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
