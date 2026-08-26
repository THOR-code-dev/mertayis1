import React, { useState } from 'react';
import { MapPin, Navigation, Zap, CheckCircle } from 'lucide-react';

export default function DeutschlandweitSection({ onOpenOffer }) {
  const [activeCity, setActiveCity] = useState('Köln');

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
      desc: 'In Hamburg und ganz Norddeutschland gewährleisten wir reibungslose Turnuswechsel von Wasser- und Wärmezählern sowie rechtssichere Rauchmelder-Prüfungen.',
      points: [
        'Norddeutsche Service-Präsenz für Wohnungsunternehmen',
        'MID-konforme Geräteausstattung führender Hersteller',
        'Lückenlose Fotodokumentation pro Zähler'
      ]
    },
    'Leipzig': {
      region: 'Sachsen & Mitteldeutschland',
      title: 'Messdienst & Zählerservice in Leipzig',
      desc: 'In der Wachstumsregion Leipzig betreuen wir Bestandsimmobilien und sanierte Wohnanlagen mit moderner Funk-Zählertechnik und zertifizierter Rauchmelder-Wartung.',
      points: [
        'Moderne Funktechnik ohne Betreten der Wohnungen',
        'Rechtzeitige Eichfristüberwachung',
        'Transparente Festpreis-Angebote'
      ]
    },
    'Hannover': {
      region: 'Niedersachsen',
      title: 'Messdienstleistungen in Hannover',
      desc: 'In Hannover unterstützen wir Verwalter bei der technischen Betreuung ihrer Liegenschaften mit termingerechter Montage und digitalem Protokollversand.',
      points: [
        'Schnelle Bearbeitung aller Anfragen innerhalb von 24h',
        'Ganzheitliches Portfolio von Wasser bis Brandschutz',
        'Ein persönlicher Ansprechpartner für Ihr Team'
      ]
    }
  };

  const current = cityData[activeCity] || cityData['Köln'];

  const citiesList = [
    'Köln', 'Düsseldorf', 'Dortmund', 'Essen', 'Wuppertal',
    'Frankfurt', 'Stuttgart', 'München', 'Berlin', 'Hamburg',
    'Leipzig', 'Hannover'
  ];

  return (
    <section className="section-wrapper bg-light" id="deutschlandweit">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-category">BUNDESWEITE EINSATZBEREITSCHAFT</span>
          <h2 className="section-title">Deutschlandweit einsatzbereit</h2>
          <p className="section-subtitle">
            “Durch unsere digitale Auftragsplanung und unser deutschlandweites Servicepartner-Netzwerk können wir Aufträge regional planen und durchführen.”
          </p>
        </div>

        <div className="row align-center">
          {/* Interactive Germany Map */}
          <div className="col-lg-6">
            <div className="map-interactive-container">
              <div className="map-header">
                <span className="map-title">📍 Einsatzgebiet Deutschland</span>
                <span className="badge-live"><span className="pulse-dot green"></span> Live aktiv</span>
              </div>

              <div className="germany-map-svg-wrap">
                <svg className="germany-svg" viewBox="0 0 500 650" xmlns="http://www.w3.org/2000/svg">
                  {/* Stylized Germany Contour */}
                  <path 
                    className="germany-outline" 
                    d="M190 20 L280 25 L340 50 L380 40 L410 80 L420 130 L400 170 L450 200 L430 250 L460 290 L440 330 L390 380 L390 440 L420 480 L380 540 L340 580 L290 620 L230 630 L180 610 L130 580 L110 520 L130 460 L100 410 L80 340 L60 290 L90 230 L110 180 L100 130 L140 80 Z" 
                  />
                  
                  {/* Hamburg */}
                  <g className={`city-node ${activeCity === 'Hamburg' ? 'active' : ''}`} onClick={() => setActiveCity('Hamburg')}>
                    <circle cx="250" cy="120" r="9" className="city-dot-outer" />
                    <circle cx="250" cy="120" r="5" className="city-dot-inner" />
                    <text x="265" y="125" className="city-label">Hamburg</text>
                  </g>

                  {/* Berlin */}
                  <g className={`city-node ${activeCity === 'Berlin' ? 'active' : ''}`} onClick={() => setActiveCity('Berlin')}>
                    <circle cx="380" cy="190" r="9" className="city-dot-outer" />
                    <circle cx="380" cy="190" r="5" className="city-dot-inner" />
                    <text x="395" y="195" className="city-label">Berlin</text>
                  </g>

                  {/* Hannover */}
                  <g className={`city-node ${activeCity === 'Hannover' ? 'active' : ''}`} onClick={() => setActiveCity('Hannover')}>
                    <circle cx="230" cy="200" r="9" className="city-dot-outer" />
                    <circle cx="230" cy="200" r="5" className="city-dot-inner" />
                    <text x="245" y="205" className="city-label">Hannover</text>
                  </g>

                  {/* Dortmund */}
                  <g className={`city-node ${activeCity === 'Dortmund' ? 'active' : ''}`} onClick={() => setActiveCity('Dortmund')}>
                    <circle cx="140" cy="260" r="9" className="city-dot-outer" />
                    <circle cx="140" cy="260" r="5" className="city-dot-inner" />
                    <text x="75" y="260" className="city-label">Dortmund</text>
                  </g>

                  {/* Essen */}
                  <g className={`city-node ${activeCity === 'Essen' ? 'active' : ''}`} onClick={() => setActiveCity('Essen')}>
                    <circle cx="125" cy="275" r="9" className="city-dot-outer" />
                    <circle cx="125" cy="275" r="5" className="city-dot-inner" />
                    <text x="65" y="275" className="city-label">Essen</text>
                  </g>

                  {/* Düsseldorf */}
                  <g className={`city-node ${activeCity === 'Düsseldorf' ? 'active' : ''}`} onClick={() => setActiveCity('Düsseldorf')}>
                    <circle cx="115" cy="295" r="9" className="city-dot-outer" />
                    <circle cx="115" cy="295" r="5" className="city-dot-inner" />
                    <text x="45" y="295" className="city-label">Düsseldorf</text>
                  </g>

                  {/* Wuppertal (HQ) */}
                  <g className={`city-node hq-node ${activeCity === 'Wuppertal' ? 'active' : ''}`} onClick={() => setActiveCity('Wuppertal')}>
                    <circle cx="130" cy="305" r="14" className="city-dot-pulse" />
                    <circle cx="130" cy="305" r="7" className="city-dot-hq" />
                    <text x="145" y="308" className="city-label font-bold">Wuppertal (HQ)</text>
                  </g>

                  {/* Köln */}
                  <g className={`city-node ${activeCity === 'Köln' ? 'active' : ''}`} onClick={() => setActiveCity('Köln')}>
                    <circle cx="120" cy="325" r="9" className="city-dot-outer" />
                    <circle cx="120" cy="325" r="5" className="city-dot-inner" />
                    <text x="65" y="328" className="city-label">Köln</text>
                  </g>

                  {/* Leipzig */}
                  <g className={`city-node ${activeCity === 'Leipzig' ? 'active' : ''}`} onClick={() => setActiveCity('Leipzig')}>
                    <circle cx="340" cy="285" r="9" className="city-dot-outer" />
                    <circle cx="340" cy="285" r="5" className="city-dot-inner" />
                    <text x="355" y="290" className="city-label">Leipzig</text>
                  </g>

                  {/* Frankfurt */}
                  <g className={`city-node ${activeCity === 'Frankfurt' ? 'active' : ''}`} onClick={() => setActiveCity('Frankfurt')}>
                    <circle cx="190" cy="375" r="9" className="city-dot-outer" />
                    <circle cx="190" cy="375" r="5" className="city-dot-inner" />
                    <text x="205" y="380" className="city-label">Frankfurt a.M.</text>
                  </g>

                  {/* Stuttgart */}
                  <g className={`city-node ${activeCity === 'Stuttgart' ? 'active' : ''}`} onClick={() => setActiveCity('Stuttgart')}>
                    <circle cx="210" cy="480" r="9" className="city-dot-outer" />
                    <circle cx="210" cy="480" r="5" className="city-dot-inner" />
                    <text x="225" y="485" className="city-label">Stuttgart</text>
                  </g>

                  {/* München */}
                  <g className={`city-node ${activeCity === 'München' ? 'active' : ''}`} onClick={() => setActiveCity('München')}>
                    <circle cx="310" cy="540" r="9" className="city-dot-outer" />
                    <circle cx="310" cy="540" r="5" className="city-dot-inner" />
                    <text x="325" y="545" className="city-label">München</text>
                  </g>
                </svg>
              </div>

              <div className="map-footer-info">
                <span>💡 Klicken Sie auf eine Stadt für regionale Projekt-Infos & Details</span>
              </div>
            </div>
          </div>

          {/* City Info Card */}
          <div className="col-lg-6">
            <div className="city-info-box">
              <div className="city-box-header">
                <span className="city-badge-tag">{current.region}</span>
                <h3 className="city-box-title">{current.title}</h3>
              </div>

              <p className="city-box-desc">{current.desc}</p>

              <div className="city-service-highlights">
                {current.points.map((pt, idx) => (
                  <div key={idx} className="city-hl-item">
                    <span className="hl-icon">⚡</span>
                    <div><strong>Vorteil:</strong> {pt}</div>
                  </div>
                ))}
              </div>

              {/* City selector pills */}
              <div className="city-pills-row">
                <span className="pills-label">Stadt wählen:</span>
                <div className="pills-list">
                  {citiesList.map((c) => (
                    <button 
                      key={c}
                      className={`city-pill-btn ${activeCity === c ? 'active' : ''}`}
                      onClick={() => setActiveCity(c)}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div className="city-cta-box">
                <button 
                  className="btn btn-primary btn-block" 
                  onClick={() => onOpenOffer(`Projekt in ${activeCity}`)}
                >
                  Angebot für {activeCity} anfordern →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
