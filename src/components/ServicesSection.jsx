import React, { useState } from 'react';
import { Droplet, Flame, BarChart3, BellRing, ClipboardCheck, Check } from 'lucide-react';

export default function ServicesSection({ onOpenOffer, activeFilter = 'all' }) {
  const [filter, setFilter] = useState(activeFilter);

  const services = [
    {
      id: 'wasser',
      title: 'Wasserzähler Service',
      badge: 'Eichfrist-Konform (6 Jahre)',
      icon: <Droplet size={28} />,
      iconClass: 'cyan-gradient',
      desc: 'Kalt- und Warmwasserzähler für präzise Submetering-Erfassung in Wohn- und Gewerbeimmobilien.',
      bullets: [
        { title: 'Ablesung', text: 'Manuell, M-Bus & Funkfernauslesung (Walk-by / AMR)' },
        { title: 'Montage', text: 'Fachgerechter Einbau von Aufputz-, Unterputz- & Ventilzählern' },
        { title: 'Austausch', text: 'Termingerechter Turnuswechsel nach gesetzlichem Eichgesetz' },
        { title: 'Dokumentation', text: 'Foto- und Barcode-gestützte Erfassung aller Zählernummern' }
      ]
    },
    {
      id: 'waerme',
      title: 'Wärmezähler / WMZ',
      badge: 'Heizkostenverordnung (HKVO)',
      icon: <Flame size={28} />,
      iconClass: 'orange-gradient',
      desc: 'Kompakt- und Split-Wärmemengenzähler für Heizungsanlagen, Fernwärme und Fußbodenheizungen.',
      bullets: [
        { title: 'Montage', text: 'Fachgerechter Einbau inkl. Fühler- & Tauchhülsenmontage' },
        { title: 'Austausch', text: '5-Jahres Turnuswechsel gemäß gesetzlicher Eichfristen' },
        { title: 'Ablesung', text: 'Stichtagsablesung & monatliche UVI-Übermittlung' },
        { title: 'Dokumentation', text: 'Plombierungsprotokolle und MID-Konformitätsnachweise' }
      ]
    },
    {
      id: 'heiz',
      title: 'Heizkostenverteiler (HKV)',
      badge: 'Funk & Elektronisch',
      icon: <BarChart3 size={28} />,
      iconClass: 'green-gradient',
      desc: 'Moderne elektronische 2-Fühler Heizkostenverteiler zur exakten Verbrauchserfassung an jedem Heizkörper.',
      bullets: [
        { title: 'Montage', text: 'Präzise Heizkörperaufnahme und Schweißbolzen-Montage' },
        { title: 'Austausch', text: 'Gerätewechsel, KC-Wert Programmierung und Skalierung' },
        { title: 'Ablesung', text: 'Zuverlässige Funk-Fernablesung ohne Betreten der Wohnung' },
        { title: 'Dokumentation', text: 'Heizkörperdatenbank mit Bauart- und Leistungszuordnung' }
      ]
    },
    {
      id: 'rauch',
      title: 'Rauchwarnmelder Komplettlösung',
      badge: 'DIN 14676-1 / Q-Label',
      featured: true,
      icon: <BellRing size={28} />,
      iconClass: 'red-gradient',
      desc: 'Der Rundum-Sorglos-Service für Vermieter und Verwalter: Gesetzliche Rauchmelderpflicht zu 100% erfüllt.',
      bullets: [
        { title: 'Verkauf & Lieferung', text: 'Hochwertige 10-Jahres Standalone- & Funkmelder' },
        { title: 'Montage', text: 'DIN-konforme Platzierung in Schlaf-, Kinder- und Flurräumen' },
        { title: 'Austausch', text: 'Rechtzeitiger 10-Jahres-Tausch vor Ablauf der Lebensdauer' },
        { title: 'Wartung & Inspektion', text: 'Jährliche Prüfung (Prüftaste, Einlassöffnungen, Doku)' }
      ]
    },
    {
      id: 'mess',
      title: 'Messdienstleistungen',
      badge: 'Full-Service B2B',
      icon: <ClipboardCheck size={28} />,
      iconClass: 'blue-gradient',
      desc: 'Technische Liegenschaftsbetreuung und Vorbereitung Ihrer verbrauchsabhängigen Betriebskostenabrechnung.',
      bullets: [
        { title: 'Geräteaufnahme', text: 'Vollständige Stammdatenerfassung & Digitalisierung' },
        { title: 'Nutzerwechsel', text: 'Zeitnahe Zwischenablesung bei Mieterwechseln' },
        { title: 'Zählerwechsel', text: 'Automatisierte Eichfristen-Überwachung' },
        { title: 'Dokumentation', text: 'Exportfähige Abrechnungsdaten für alle gängigen ERP-Systeme' }
      ]
    }
  ];

  const filteredList = filter === 'all' ? services : services.filter(s => s.id === filter);

  return (
    <section className="section-wrapper bg-light" id="leistungen">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-category">KOMPLETTES LEISTUNGSPORTFOLIO</span>
          <h2 className="section-title">Professionelle Zählertechnik & Messdienstleistungen</h2>
          <p className="section-subtitle">
            Ganzheitliche Betreuung für Hausverwaltungen und Wohnungsunternehmen aus einer Hand: von der Gerätebeschaffung über den fachgerechten Einbau bis zur Eichfrist-Überwachung und Abrechnungs-Vorbereitung.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="service-tabs-nav">
          <button className={`service-tab-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
            Alle Leistungen
          </button>
          <button className={`service-tab-btn ${filter === 'wasser' ? 'active' : ''}`} onClick={() => setFilter('wasser')}>
            💧 Wasserzähler
          </button>
          <button className={`service-tab-btn ${filter === 'waerme' ? 'active' : ''}`} onClick={() => setFilter('waerme')}>
            🔥 Wärmezähler / WMZ
          </button>
          <button className={`service-tab-btn ${filter === 'heiz' ? 'active' : ''}`} onClick={() => setFilter('heiz')}>
            📊 Heizkostenverteiler
          </button>
          <button className={`service-tab-btn ${filter === 'rauch' ? 'active' : ''}`} onClick={() => setFilter('rauch')}>
            🚨 Rauchwarnmelder
          </button>
          <button className={`service-tab-btn ${filter === 'mess' ? 'active' : ''}`} onClick={() => setFilter('mess')}>
            📋 Messdienst-Service
          </button>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {filteredList.map((svc) => (
            <div key={svc.id} className={`service-card ${svc.featured ? 'featured-service-card' : ''}`}>
              <div className={`service-icon-box ${svc.iconClass}`}>
                {svc.icon}
              </div>
              <div className={`service-badge ${svc.featured ? 'badge-danger' : ''}`}>
                {svc.badge}
              </div>
              <h3 className="service-name">{svc.title}</h3>
              <p className="service-desc">{svc.desc}</p>
              
              <ul className="service-bullet-list">
                {svc.bullets.map((b, i) => (
                  <li key={i}>
                    <span className="check-icon">✓</span>
                    <div>
                      <strong>{b.title}:</strong> {b.text}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="service-card-footer">
                <button 
                  className={`btn ${svc.featured ? 'btn-primary' : 'btn-outline-primary'} btn-sm btn-block`} 
                  onClick={() => onOpenOffer(svc.title)}
                >
                  Angebot für {svc.title} anfragen
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
