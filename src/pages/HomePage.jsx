import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  MessageSquare, 
  Shield, 
  Globe, 
  Smartphone, 
  UserCheck, 
  Droplet, 
  Flame, 
  BarChart3, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Home, 
  HelpCircle,
  Clock,
  Sparkles
} from 'lucide-react';

export default function HomePage({ onOpenOffer }) {
  const [units, setUnits] = useState(120);
  const [selectedServices, setSelectedServices] = useState({
    rwm: true,
    wasser: false,
    waerme: false,
    hkv: false,
  });

  const toggleService = (key) => {
    setSelectedServices(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleStartCalc = () => {
    const active = Object.keys(selectedServices).filter(k => selectedServices[k]);
    const summaryStr = `${units} WE - ${active.join(', ')}`;
    onOpenOffer(`Home Hero Calc (${summaryStr})`);
  };

  return (
    <div className="page-wrapper home-page">
      {/* 1. HERO SECTION */}
      <section className="hero-section" id="home">
        <div className="hero-bg-overlay"></div>
        
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-pill-badge">
              <span className="hero-pill-icon">🏢</span>
              <span>Ihr spezialisierter B2B Partner für die Immobilienwirtschaft</span>
            </div>
            
            <h1 className="hero-title">
              <span className="hero-brand">MOCD Nextmeasure GmbH</span>
              <span className="hero-subtitle-line">Messdienstleistungen · Zählertechnik · Rauchwarnmelder</span>
            </h1>

            <div className="hero-slogan-box">
              <p className="hero-lead-bold">Messen. Montieren. Dokumentieren.</p>
              <p className="hero-lead-sub">Deutschlandweit. Zuverlässig. Digital.</p>
            </div>

            <p className="hero-description">
              Wir unterstützen <strong>Hausverwaltungen</strong>, <strong>Wohnungsunternehmen</strong> und <strong>Bestandshalter</strong> mit schlüsselfertiger Montage, rechtssicherem Turnus-Austausch, präziser Ablesung und lückenloser digitaler Fotodokumentation.
            </p>

            <div className="hero-cta-group">
              <button className="btn btn-primary btn-lg btn-glow" onClick={() => onOpenOffer('Home Hero Button')}>
                <Zap size={18} />
                <span>ANGEBOT ANFORDERN</span>
              </button>
              <Link to="/kontakt" className="btn btn-outline-white btn-lg">
                <MessageSquare size={18} />
                <span>KONTAKT AUFNEHMEN</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="hero-trust-grid">
              <div className="trust-item">
                <div className="trust-icon cyan-bg"><Shield size={16} /></div>
                <div className="trust-text">
                  <strong>DIN 14676</strong>
                  <span>Zertifizierte Fachkräfte</span>
                </div>
              </div>
              <div className="trust-item">
                <div className="trust-icon green-bg"><Globe size={16} /></div>
                <div className="trust-text">
                  <strong>Deutschlandweit</strong>
                  <span>Bundesweites Netzwerk</span>
                </div>
              </div>
              <div className="trust-item">
                <div className="trust-icon orange-bg"><Smartphone size={16} /></div>
                <div className="trust-text">
                  <strong>100% Digital</strong>
                  <span>Echtzeit-Fotoprotokoll</span>
                </div>
              </div>
              <div className="trust-item">
                <div className="trust-icon blue-bg"><UserCheck size={16} /></div>
                <div className="trust-text">
                  <strong>1 Ansprechpartner</strong>
                  <span>Feste Projektleitung</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive B2B Calculator Card */}
          <div className="hero-visual">
            <div className="hero-card-glass">
              <div className="hero-card-header">
                <div className="card-header-left">
                  <span className="status-indicator"></span>
                  <span className="card-title">B2B Bedarfsrechner</span>
                </div>
                <span className="card-tag">EXPRESS-KALKULATION</span>
              </div>

              <div className="hero-card-stats-row">
                <div className="stat-card">
                  <span className="stat-num">100%</span>
                  <span className="stat-lbl">Digitales Protokoll</span>
                </div>
                <div className="stat-card">
                  <span className="stat-num">50.000+</span>
                  <span className="stat-lbl">Geräte betreut</span>
                </div>
                <div className="stat-card">
                  <span className="stat-num">&lt; 24h</span>
                  <span className="stat-lbl">Angebotsabgabe</span>
                </div>
              </div>

              <div className="hero-quick-calc">
                <h3 className="calc-title">Schnell-Bedarfskalkulation</h3>
                <p className="calc-sub">Wählen Sie Ihre Anforderung für ein unverbindliches B2B-Angebot:</p>
                
                <div className="calc-chips">
                  <button 
                    type="button"
                    className={`chip-item ${selectedServices.rwm ? 'active' : ''}`} 
                    onClick={() => toggleService('rwm')}
                  >
                    <span>🚨 Rauchwarnmelder</span>
                  </button>
                  <button 
                    type="button"
                    className={`chip-item ${selectedServices.wasser ? 'active' : ''}`} 
                    onClick={() => toggleService('wasser')}
                  >
                    <span>💧 Wasserzähler</span>
                  </button>
                  <button 
                    type="button"
                    className={`chip-item ${selectedServices.waerme ? 'active' : ''}`} 
                    onClick={() => toggleService('waerme')}
                  >
                    <span>🔥 Wärmezähler</span>
                  </button>
                  <button 
                    type="button"
                    className={`chip-item ${selectedServices.hkv ? 'active' : ''}`} 
                    onClick={() => toggleService('hkv')}
                  >
                    <span>📊 HKV Verteiler</span>
                  </button>
                </div>

                <div className="slider-group">
                  <div className="slider-header">
                    <span>Anzahl Wohneinheiten (WE):</span>
                    <strong>{units} WE</strong>
                  </div>
                  <input 
                    type="range" 
                    min="5" 
                    max="2500" 
                    step="5" 
                    value={units} 
                    onChange={(e) => setUnits(Number(e.target.value))} 
                    className="custom-range"
                  />
                  <div className="range-marks">
                    <span>10 WE</span>
                    <span>100 WE</span>
                    <span>500 WE</span>
                    <span>1.000+ WE</span>
                    <span>2.500+ WE</span>
                  </div>
                </div>

                <button className="btn btn-primary btn-block" onClick={handleStartCalc}>
                  B2B-ANGEBOT JETZT BERECHNEN →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE SERVICES SHOWCASE (Vibrant Card Grid) */}
      <section className="section-wrapper bg-white">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-category">UNSER KERNPORTFOLIO</span>
            <h2 className="section-title">Professionelle Messdienstleistungen & Gerätetechnik</h2>
            <p className="section-subtitle">
              Alles aus einer Hand: Rechtssichere Montage, Eichfristentausch, Funk-Nachrüstung und Ablesung für Wohn- und Gewerbeimmobilien.
            </p>
          </div>

          <div className="services-grid-showcase">
            {/* Wasserzähler */}
            <div className="service-card-modern border-cyan">
              <div className="service-card-badge cyan-badge">MID-KONFORM</div>
              <div className="service-card-icon cyan-bg">
                <Droplet size={28} />
              </div>
              <h3 className="service-card-title">Wasserzähler</h3>
              <p className="service-card-desc">
                Montage, Zählertausch nach Eichfrist (6 Jahre) & Funk-Nachrüstung für Kalt- und Warmwasser. Lückenlose Fotodokumentation inklusive.
              </p>
              <ul className="service-card-list">
                <li><CheckCircle2 size={15} color="#00A3E0" /> Aufputz-, Unterputz- & Messkapseln</li>
                <li><CheckCircle2 size={15} color="#00A3E0" /> Funk-Modul (OMS / wM-Bus)</li>
                <li><CheckCircle2 size={15} color="#00A3E0" /> Plombierung & Zählernummer-Scan</li>
              </ul>
              <div className="service-card-footer">
                <Link to="/leistungen" className="btn-link-action cyan-text">
                  Mehr erfahren <ArrowRight size={16} />
                </Link>
                <button className="btn btn-sm btn-outline-cyan" onClick={() => onOpenOffer('Wasserzähler Service Card')}>
                  Anfragen
                </button>
              </div>
            </div>

            {/* Wärmezähler */}
            <div className="service-card-modern border-orange">
              <div className="service-card-badge orange-badge">EICHPFLICHTIG (5 JAHRE)</div>
              <div className="service-card-icon orange-bg">
                <Flame size={28} />
              </div>
              <h3 className="service-card-title">Wärmezähler / WMZ</h3>
              <p className="service-card-desc">
                Kompakt- & Splitt-Wärmemengenzähler für Heizkreise, Fußbodenheizungen und Übergabestationen nach aktuellen Regeln der Technik.
              </p>
              <ul className="service-card-list">
                <li><CheckCircle2 size={15} color="#F38B00" /> Ultraschall- & Flügelradzähler</li>
                <li><CheckCircle2 size={15} color="#F38B00" /> Fühlermontage & Temperaturfühler</li>
                <li><CheckCircle2 size={15} color="#F38B00" /> Einhaltung EnEV / HeizkostenV</li>
              </ul>
              <div className="service-card-footer">
                <Link to="/leistungen" className="btn-link-action orange-text">
                  Mehr erfahren <ArrowRight size={16} />
                </Link>
                <button className="btn btn-sm btn-outline-orange" onClick={() => onOpenOffer('Wärmezähler Service Card')}>
                  Anfragen
                </button>
              </div>
            </div>

            {/* Heizkostenverteiler */}
            <div className="service-card-modern border-green">
              <div className="service-card-badge green-badge">DIGITAL & FUNK</div>
              <div className="service-card-icon green-bg">
                <BarChart3 size={28} />
              </div>
              <h3 className="service-card-title">Heizkostenverteiler (HKV)</h3>
              <p className="service-card-desc">
                Elektronische 2-Fühler-HKV mit Funk-Fernauslesung. Präzise Heizkörperaufnahme, Schweiß- und Bolzenmontage für gerechte Abrechnung.
              </p>
              <ul className="service-card-list">
                <li><CheckCircle2 size={15} color="#187A44" /> OMS Funk-Fernauslesung (UVI)</li>
                <li><CheckCircle2 size={15} color="#187A44" /> Genaue Heizkörper-Datenaufnahme</li>
                <li><CheckCircle2 size={15} color="#187A44" /> Keine Mieterbelästigung bei Funk</li>
              </ul>
              <div className="service-card-footer">
                <Link to="/leistungen" className="btn-link-action green-text">
                  Mehr erfahren <ArrowRight size={16} />
                </Link>
                <button className="btn btn-sm btn-outline-green" onClick={() => onOpenOffer('HKV Service Card')}>
                  Anfragen
                </button>
              </div>
            </div>

            {/* Messdienst & Montage */}
            <div className="service-card-modern border-blue">
              <div className="service-card-badge blue-badge">FULL-SERVICE</div>
              <div className="service-card-icon blue-bg">
                <Layers size={28} />
              </div>
              <h3 className="service-card-title">Messdienst & Datenerfassung</h3>
              <p className="service-card-desc">
                Liegenschafts-Ersterfassung, Zwischenablesungen bei Mieterwechsel, Störungsbehebung und schlüsselfertige Datenbereitstellung für Verwalter.
              </p>
              <ul className="service-card-list">
                <li><CheckCircle2 size={15} color="#0C3E7C" /> CSV / ERP Datenschnittstellen</li>
                <li><CheckCircle2 size={15} color="#0C3E7C" /> Schnelle Terminvereinbarung</li>
                <li><CheckCircle2 size={15} color="#0C3E7C" /> Bundesweites Servicenetz</li>
              </ul>
              <div className="service-card-footer">
                <Link to="/leistungen" className="btn-link-action blue-text">
                  Mehr erfahren <ArrowRight size={16} />
                </Link>
                <button className="btn btn-sm btn-outline-blue" onClick={() => onOpenOffer('Messdienst Service Card')}>
                  Anfragen
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <Link to="/leistungen" className="btn btn-navy btn-lg">
              <span>ALLE LEISTUNGEN & DETAILS ENTDECKEN</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. RAUCHWARNMELDER SPECIAL HIGHLIGHT BANNER */}
      <section className="section-wrapper rwm-home-banner">
        <div className="container">
          <div className="rwm-banner-inner">
            <div className="rwm-banner-content">
              <span className="badge-pill-fire">
                🚨 GESETZLICHE PFLICHT & ENTHAFTUNG
              </span>
              <h2 className="rwm-banner-title">
                Rauchwarnmelder Komplettservice nach DIN 14676
              </h2>
              <p className="rwm-banner-desc">
                Schützen Sie Ihre Liegenschaften und befreien Sie sich von Haftungsrisiken: 10-Jahres-Qualitäts-Melder mit Q-Label, zertifizierte Fachmontage, lückenlose Fotoprotokolle und jährliche rechtssichere Prüfung.
              </p>
              <div className="rwm-banner-features">
                <div className="rwm-feat-item">
                  <CheckCircle2 size={18} className="feat-check" />
                  <span>Zertifizierte Fachkräfte DIN 14676</span>
                </div>
                <div className="rwm-feat-item">
                  <CheckCircle2 size={18} className="feat-check" />
                  <span>10 Jahre fest verbaute Lithium-Batterie</span>
                </div>
                <div className="rwm-feat-item">
                  <CheckCircle2 size={18} className="feat-check" />
                  <span>Rechtssichere Prüfberichte für Versicherer</span>
                </div>
              </div>
              <div className="rwm-banner-actions">
                <Link to="/rauchwarnmelder" className="btn btn-primary btn-glow btn-lg">
                  <span>ZUM RAUCHWARNMELDER HUB</span>
                  <ArrowRight size={18} />
                </Link>
                <button className="btn btn-outline-white btn-lg" onClick={() => onOpenOffer('Home RWM Banner')}>
                  RWM ANGEBOT ANFORDERN
                </button>
              </div>
            </div>
            <div className="rwm-banner-card-box">
              <div className="rwm-spec-card">
                <div className="rwm-spec-header">
                  <span className="rwm-badge-q">Q-LABEL ZERTIFIZIERT</span>
                  <span className="rwm-spec-price">Ab 10 WE Festpreis</span>
                </div>
                <div className="rwm-spec-body">
                  <h4>Vollständiges Enthaftungspaket:</h4>
                  <ul>
                    <li>Lieferung & Montage nach DIN 14676</li>
                    <li>Digitaler Standortplan & Fotobeweis</li>
                    <li>Jährliche Inspektion (Vor-Ort oder Funk)</li>
                    <li>Schneller Austausch bei Defekt</li>
                  </ul>
                  <div className="rwm-spec-cta">
                    <button className="btn btn-primary btn-block" onClick={() => onOpenOffer('RWM Quick Box')}>
                      Jetzt Paket anfragen
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TARGET AUDIENCES (Hausverwaltungen vs Wohnungsunternehmen) */}
      <section className="section-wrapper bg-light">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-category">MASSGESCHNEIDERTE B2B LÖSUNGEN</span>
            <h2 className="section-title">Perfekt abgestimmt auf Ihre Liegenschaften</h2>
            <p className="section-subtitle">
              Egal ob WEG-Verwaltung, Mietwohnungsbestand oder kommunales Wohnungsunternehmen – wir kennen Ihre Anforderungen.
            </p>
          </div>

          <div className="audiences-dual-grid">
            {/* Hausverwaltungen Card */}
            <div className="audience-card">
              <div className="audience-header">
                <div className="audience-icon-wrap navy-bg">
                  <Home size={26} />
                </div>
                <div>
                  <span className="audience-tag">WEG & MIETVERWALTUNG</span>
                  <h3 className="audience-title">Für Hausverwaltungen</h3>
                </div>
              </div>
              <p className="audience-desc">
                Entlastung im stressigen Verwalter-Alltag: Wir übernehmen die komplette Mieter-Terminierung, den Turnus-Zählerwechsel und die Fotoprotokollierung für Ihre Eigentümerversammlungen.
              </p>
              <ul className="audience-points">
                <li><CheckCircle2 size={16} color="#0C3E7C" /> Fester Ansprechpartner & Projektleiter</li>
                <li><CheckCircle2 size={16} color="#0C3E7C" /> Lückenlose Protokolle für Beiräte & Eigentümer</li>
                <li><CheckCircle2 size={16} color="#0C3E7C" /> Schnelle Reaktionszeiten bei Mieterwechsel</li>
              </ul>
              <div className="audience-footer">
                <Link to="/hausverwaltungen" className="btn btn-outline-navy btn-block">
                  Lösungen für Hausverwaltungen ansehen →
                </Link>
              </div>
            </div>

            {/* Wohnungsunternehmen Card */}
            <div className="audience-card">
              <div className="audience-header">
                <div className="audience-icon-wrap cyan-bg">
                  <Building2 size={26} />
                </div>
                <div>
                  <span className="audience-tag">GROSSBESTÄNDE & FONDS</span>
                  <h3 className="audience-title">Für Wohnungsunternehmen</h3>
                </div>
              </div>
              <p className="audience-desc">
                Skalierbare Serienmontagen für tausende Einheiten: Strukturierte Rollouts, standardisierte ERP-Datenexporte und transparente Rahmenverträge für maximale Wirtschaftlichkeit.
              </p>
              <ul className="audience-points">
                <li><CheckCircle2 size={16} color="#00A3E0" /> Hohe Montagekapazitäten für Großbestände</li>
                <li><CheckCircle2 size={16} color="#00A3E0" /> Schnittstellenkompatible CSV/ERP-Daten</li>
                <li><CheckCircle2 size={16} color="#00A3E0" /> B2B-Rahmenvereinbarungen mit Sonderkonditionen</li>
              </ul>
              <div className="audience-footer">
                <Link to="/wohnungsunternehmen" className="btn btn-outline-cyan btn-block">
                  Lösungen für Wohnungsunternehmen ansehen →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DEUTSCHLANDWEIT TEASER */}
      <section className="section-wrapper bg-white">
        <div className="container">
          <div className="locations-teaser-box">
            <div className="locations-teaser-text">
              <span className="section-category">BUNDESWEITES SERVICENETZ</span>
              <h2 className="section-title">Deutschlandweit für Sie im Einsatz</h2>
              <p className="section-subtitle">
                Von unserer Zentrale in Wuppertal und unserem bundesweiten Partnernetzwerk betreuen wir Liegenschaften in allen Bundesländern und Metropolregionen.
              </p>
              
              <div className="city-badges-list">
                <span className="city-pill">📍 Köln</span>
                <span className="city-pill">📍 Düsseldorf</span>
                <span className="city-pill">📍 Dortmund</span>
                <span className="city-pill">📍 Essen</span>
                <span className="city-pill">📍 Wuppertal (HQ)</span>
                <span className="city-pill">📍 Frankfurt am Main</span>
                <span className="city-pill">📍 Stuttgart</span>
                <span className="city-pill">📍 München</span>
                <span className="city-pill">📍 Berlin</span>
                <span className="city-pill">📍 Hamburg</span>
                <span className="city-pill">📍 Hannover</span>
                <span className="city-pill">📍 Leipzig</span>
              </div>

              <div className="mt-4">
                <Link to="/standorte" className="btn btn-primary btn-glow">
                  <span>ALLE STANDORTE & REGIONEN ERKUNDEN</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="locations-teaser-visual">
              <div className="germany-map-visual">
                <div className="map-badge-hq">
                  <span className="map-hq-dot"></span>
                  <div>
                    <strong>Wuppertal HQ</strong>
                    <small>Zentrale Steuerung & Disposition</small>
                  </div>
                </div>
                <div className="map-stat-overlay">
                  <strong>16</strong>
                  <span>Bundesländer abgedeckt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ TEASER & HIGH CONVERSION BANNER */}
      <section className="section-wrapper bg-navy text-white">
        <div className="container">
          <div className="cta-banner-content text-center">
            <span className="badge-pill-cyan">
              <Sparkles size={14} /> SCHNELLE B2B ABWICKLUNG
            </span>
            <h2 className="cta-banner-title">
              Bereit für effiziente Messdienstleistungen & Zählerwechsel?
            </h2>
            <p className="cta-banner-sub">
              Sichern Sie sich jetzt Ihr unverbindliches Festpreisangebot oder lassen Sie sich von unseren technischen Projektleitern individuell beraten.
            </p>

            <div className="cta-banner-actions">
              <Link to="/angebot" className="btn btn-primary btn-lg btn-glow">
                <Zap size={18} />
                <span>B2B ANGEBOT ONLINE ANFORDERN</span>
              </Link>
              <Link to="/kontakt" className="btn btn-outline-white btn-lg">
                <MessageSquare size={18} />
                <span>DIREKT KONTAKT AUFNEHMEN</span>
              </Link>
            </div>

            <div className="cta-banner-trust">
              <span>✓ Schnelle Reaktionszeit</span>
              <span>✓ DIN 14676 zertifiziert</span>
              <span>✓ 100% Fotoprotokoll</span>
              <span>✓ Bundesweit im Einsatz</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
