import React, { useState } from 'react';
import { 
  Droplet, 
  Flame, 
  BarChart3, 
  Layers, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  FileSpreadsheet, 
  ArrowRight, 
  Zap, 
  PhoneCall,
  Check
} from 'lucide-react';

export default function ServicesPage({ onOpenOffer }) {
  const [activeTab, setActiveTab] = useState('all');

  const services = [
    {
      id: 'wasser',
      category: 'Wasserzähler',
      badge: 'MID & EICHPFLICHT (6 JAHRE)',
      icon: <Droplet size={32} />,
      colorClass: 'cyan',
      title: 'Wasserzähler: Montage, Turnustausch & Funk-Nachrüstung',
      lead: 'Gesetzeskonformer Zählerwechsel für Kalt- und Warmwasser mit lückenloser Zählernummer- und Zählerstand-Fotodokumentation.',
      details: [
        'Aufputz- & Unterputzzähler sowie Messkapseln für alle gängigen Fabrikate (Allmess, ISTA, Techem, Minol, Zenner etc.)',
        'Zertifizierter Austausch vor Ablauf der 6-jährigen Eichfrist gemäß Mess- und Eichgesetz (MessEG)',
        'Optionale Ausrüstung mit Funk-Modulen (wM-Bus / OMS) für stichtagsgenaue Fernauslesung ohne Wohnungszutritt',
        'Fachgerechte Plombierung und revisionssichere Erfassung aller Gerätenummern'
      ],
      process: [
        '1. Liegenschaftsaufnahme & Dimensionierungsprüfung',
        '2. Rechtzeitige Mieterankündigung mit Terminkarten',
        '3. Fachgerechter Tausch durch geschulte Monteure',
        '4. Digitaler Alt/Neu-Fotobeweis & Zählerübernahme'
      ]
    },
    {
      id: 'waerme',
      category: 'Wärmezähler',
      badge: 'EICHPFLICHT (5 JAHRE)',
      icon: <Flame size={32} />,
      colorClass: 'orange',
      title: 'Wärmezähler & Kältezähler (WMZ)',
      lead: 'Präzise Erfassung thermischer Energie für Heizkreise, Fußbodenheizungen, Zentralheizungen und Fernwärmestationen.',
      details: [
        'Kompakt-Wärmezähler (mechanisch & Ultraschall) in den Nenngrößen qp 0,6 bis qp 10 m³/h',
        'Austausch nach 5 Jahren Eichfrist mit MID-Konformitätsbescheinigung',
        'Präzise Vor- und Rücklauffühlermontage nach anerkannten Regeln der Technik (A.a.R.d.T.)',
        'Volle Kompatibilität mit moderner Submetering-Infrastruktur und Gateway-Systemen'
      ],
      process: [
        '1. Überprüfung von Einbaulänge, Gewinde & Fühlerart',
        '2. Druckentlastung & sichere Demontage des Altgeräts',
        '3. Einbau des neuen geeichten WMZ & Fühlersitzprüfung',
        '4. Plombierung und Erstellung des Messprotokolls'
      ]
    },
    {
      id: 'hkv',
      category: 'Heizkostenverteiler',
      badge: 'DIGITAL & OMS FUNK',
      icon: <BarChart3 size={32} />,
      colorClass: 'green',
      title: 'Elektronische Heizkostenverteiler (HKV)',
      lead: 'Verursachergerechte Heizkostenabrechnung nach HeizkostenV mit modernen Funk-Heizkostenverteilern.',
      details: [
        'Elektronische 2-Fühler-Geräte zur exakten Differenzierung von Heizkörperwärme und Raumwärme (Kaltgangerkennung)',
        'Funk-Fernablesung nach OMS-Standard zur Erfüllung der unterjährigen Verbrauchsinformation (UVI)',
        'Fachgerechte Heizkörperaufnahme (Hersteller, Modell, Bauart, Gliederanzahl) zur Bestimmung exakter Kc/Kq-Werte',
        'Bolzenschweißung, Schraub- oder Klebemontage für jede Heizkörperbauform'
      ],
      process: [
        '1. Genaue Heizkörper-Vermessung vor Ort',
        '2. Herstellerbezogene Festlegung des Montagepunkts (75% Höhe)',
        '3. Sichere Befestigung & Plombierung gegen Manipulation',
        '4. Digitale Zuordnung von Heizkörper, Raum und HKV-ID'
      ]
    },
    {
      id: 'mess',
      category: 'Messdienstleistungen',
      badge: 'FULL SERVICE BUNDESWEIT',
      icon: <Layers size={32} />,
      colorClass: 'blue',
      title: 'Messdienstleistungen, Liegenschaftserfassung & Service',
      lead: 'Ganzheitliche operative Unterstützung für Hausverwaltungen und Wohnungsgesellschaften.',
      details: [
        'Erstaufnahme von Liegenschaften mit vollständiger digitaler Inventarisierung aller Messpunkte',
        'Störungsbeseitigung, Zwischenablesungen bei Nutzerwechsel und Zählerprüfungen',
        'Exportfähige Abrechnungsdaten in gängigen B2B-Formaten (CSV, Datanorm, XML für ERP-Systeme)',
        'Herstellerunabhängige Beschaffung und Vorratshaltung führender Zählermarken'
      ],
      process: [
        '1. Anforderungsanalyse & Datenübernahme aus Ihrer Software',
        '2. Touren- und Terminoptimierung für maximale Erstterminquote',
        '3. Qualitätsgesicherte Ausführung durch zertifizierte Techniker',
        '4. Sofortiger Daten- und Fotoprotokolltransfer in Ihr Postfach'
      ]
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(s => s.id === activeTab);

  return (
    <div className="page-wrapper services-page">
      {/* Header Banner */}
      <section className="page-header-banner">
        <div className="container text-center">
          <span className="badge-pill-cyan">MOCD NEXTMEASURE LEISTUNGEN</span>
          <h1 className="page-title">Messdienstleistungen & Zählertechnik</h1>
          <p className="page-subtitle">
            Rechtssicher, präzise und bundesweit. Montage, Turnuswechsel und Digitalisierung für Wasser, Wärme und Heizung.
          </p>
        </div>
      </section>

      {/* Tabs Filter Bar */}
      <section className="services-filter-section">
        <div className="container">
          <div className="services-tab-bar">
            <button 
              className={`service-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              Alle Leistungen
            </button>
            <button 
              className={`service-tab-btn tab-cyan ${activeTab === 'wasser' ? 'active' : ''}`}
              onClick={() => setActiveTab('wasser')}
            >
              <Droplet size={16} /> Wasserzähler
            </button>
            <button 
              className={`service-tab-btn tab-orange ${activeTab === 'waerme' ? 'active' : ''}`}
              onClick={() => setActiveTab('waerme')}
            >
              <Flame size={16} /> Wärmezähler
            </button>
            <button 
              className={`service-tab-btn tab-green ${activeTab === 'hkv' ? 'active' : ''}`}
              onClick={() => setActiveTab('hkv')}
            >
              <BarChart3 size={16} /> HKV Verteiler
            </button>
            <button 
              className={`service-tab-btn tab-blue ${activeTab === 'mess' ? 'active' : ''}`}
              onClick={() => setActiveTab('mess')}
            >
              <Layers size={16} /> Messdienst & Ablesung
            </button>
          </div>
        </div>
      </section>

      {/* Services List Content */}
      <section className="section-wrapper bg-light">
        <div className="container">
          <div className="services-detailed-list">
            {filteredServices.map(service => (
              <div key={service.id} className={`service-detail-card border-${service.colorClass}`} id={service.id}>
                <div className="service-detail-header">
                  <div className={`service-icon-lg ${service.colorClass}-bg`}>
                    {service.icon}
                  </div>
                  <div>
                    <span className={`service-detail-badge ${service.colorClass}-badge`}>
                      {service.badge}
                    </span>
                    <h2 className="service-detail-title">{service.title}</h2>
                    <p className="service-detail-lead">{service.lead}</p>
                  </div>
                </div>

                <div className="service-detail-grid">
                  <div className="service-col-specs">
                    <h3 className="service-col-heading">Technische Leistungsinhalte</h3>
                    <ul className="service-spec-bullets">
                      {service.details.map((point, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={18} className={`bullet-check text-${service.colorClass}`} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-col-process">
                    <h3 className="service-col-heading">Ablauf & Qualitätsgarantie</h3>
                    <div className="service-process-steps">
                      {service.process.map((step, idx) => (
                        <div key={idx} className="process-step-item">
                          <span className={`process-step-num ${service.colorClass}-bg`}>{idx + 1}</span>
                          <span>{step.substring(3)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="service-detail-footer">
                  <div className="service-footer-info">
                    <ShieldCheck size={20} className="text-green" />
                    <span>Konform mit MessEG, DIN-Normen & Heizkostenverordnung</span>
                  </div>
                  <button 
                    className={`btn btn-${service.colorClass === 'blue' ? 'primary' : service.colorClass} btn-glow`}
                    onClick={() => onOpenOffer(`Leistungen: ${service.category}`)}
                  >
                    <Zap size={16} />
                    <span>Angebot für {service.category} anfordern</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eichfristen Infobox */}
      <section className="section-wrapper bg-white">
        <div className="container">
          <div className="eichfristen-box">
            <div className="eichfristen-header text-center">
              <span className="section-category">GESETZLICHE VORGABEN IM ÜBERBLICK</span>
              <h2 className="section-title">Eichfristen nach deutschem Mess- und Eichgesetz (MessEG)</h2>
              <p className="section-subtitle">
                Verwalter und Eigentümer sind gesetzlich verpflichtet, Messgeräte rechtzeitig vor Ablauf der Eichfrist auszutauschen. Nicht fristgerecht geeichte Zähler dürfen für die Nebenkostenabrechnung nicht verwendet werden.
              </p>
            </div>

            <div className="eichfristen-grid">
              <div className="eich-card">
                <div className="eich-period">6 Jahre</div>
                <h4>Kaltwasserzähler</h4>
                <p>Messkapseln & Aufputzzähler für Trink- und Kaltwasser.</p>
              </div>
              <div className="eich-card">
                <div className="eich-period">6 Jahre</div>
                <h4>Warmwasserzähler</h4>
                <p>Warmwasser-Messgeräte im Wohn- und Gewerbebereich.</p>
              </div>
              <div className="eich-card">
                <div className="eich-period">5 Jahre</div>
                <h4>Wärmemengenzähler (WMZ)</h4>
                <p>Kompakt- und Splitt-Wärmezähler für Zentral- und Fußbodenheizungen.</p>
              </div>
              <div className="eich-card">
                <div className="eich-period">10 Jahre</div>
                <h4>Rauchwarnmelder (DIN 14676)</h4>
                <p>Gesetzliche Austauschpflicht nach maximal 10 Jahren Betriebszeit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-wrapper bg-navy text-white text-center">
        <div className="container">
          <h2 className="cta-banner-title">Sie planen einen Zählertausch oder eine Funk-Nachrüstung?</h2>
          <p className="cta-banner-sub">
            Übermitteln Sie uns Ihre Liegenschaftsdaten für ein maßgeschneidertes B2B-Angebot.
          </p>
          <div className="cta-banner-actions">
            <button className="btn btn-primary btn-lg btn-glow" onClick={() => onOpenOffer('Services Bottom CTA')}>
              <Zap size={18} />
              <span>B2B ANGEBOT ANFORDERN</span>
            </button>
            <a href="tel:+4920212345678" className="btn btn-outline-white btn-lg">
              <PhoneCall size={18} />
              <span>TELEFONISCHE BERATUNG: +49 202 12345678</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
