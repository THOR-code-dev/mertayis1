import React, { useState } from 'react';
import { Zap, MessageSquare, Check, Shield, Globe, Smartphone, UserCheck } from 'lucide-react';

export default function Hero({ onOpenOffer }) {
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
    onOpenOffer(`Hero Calc (${summaryStr})`);
  };

  return (
    <section className="hero-section" id="home">
      <div className="hero-bg-overlay"></div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-pill-badge">
            <span className="hero-pill-icon">🏢</span>
            <span>Ihr spezialisierter B2B Dienstleister für die Immobilienwirtschaft</span>
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
            Wir unterstützen <strong>Hausverwaltungen</strong>, <strong>Wohnungsunternehmen</strong> und <strong>Immobilieneigentümer</strong> mit skalierbarer Montage, rechtssicherem Turnus-Austausch, professioneller Ablesung und lückenloser digitaler Fotodokumentation bundesweit.
          </p>

          <div className="hero-cta-group">
            <button className="btn btn-primary btn-lg btn-glow" onClick={() => onOpenOffer('Hero Main Button')}>
              <Zap size={18} />
              ANGEBOT ANFORDERN
            </button>
            <a href="#kontakt" className="btn btn-outline-white btn-lg">
              <MessageSquare size={18} />
              KONTAKT AUFNEHMEN
            </a>
          </div>

          {/* Trust Badges */}
          <div className="hero-trust-grid">
            <div className="trust-item">
              <div className="trust-icon cyan-bg">
                <Shield size={16} />
              </div>
              <div className="trust-text">
                <strong>DIN 14676</strong>
                <span>Zertifizierte Fachkräfte</span>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon green-bg">
                <Globe size={16} />
              </div>
              <div className="trust-text">
                <strong>Deutschlandweit</strong>
                <span>Skalierbares Partnernetz</span>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon orange-bg">
                <Smartphone size={16} />
              </div>
              <div className="trust-text">
                <strong>100% Digital</strong>
                <span>Echtzeit-Fotoprotokolle</span>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon blue-bg">
                <UserCheck size={16} />
              </div>
              <div className="trust-text">
                <strong>1 Ansprechpartner</strong>
                <span>Fester Projektleiter</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Interactive B2B Card */}
        <div className="hero-visual">
          <div className="hero-card-glass">
            <div className="hero-card-header">
              <div className="card-header-left">
                <span className="status-indicator"></span>
                <span className="card-title">MOCD B2B Auftragsportal</span>
              </div>
              <span className="card-tag">DIGITALE ABWICKLUNG</span>
            </div>

            <div className="hero-card-stats-row">
              <div className="stat-card">
                <span className="stat-num">100%</span>
                <span className="stat-lbl">Digitales Protokoll</span>
              </div>
              <div className="stat-card">
                <span className="stat-num">50.000+</span>
                <span className="stat-lbl">Zähler & Melder betreut</span>
              </div>
              <div className="stat-card">
                <span className="stat-num">24h</span>
                <span className="stat-lbl">Angebotsabwicklung</span>
              </div>
            </div>

            {/* Quick Calculator inside Hero */}
            <div className="hero-quick-calc">
              <h3 className="calc-title">Schnell-Bedarfskalkulation</h3>
              <p className="calc-sub">Wählen Sie Ihre Anforderung für ein unverbindliches B2B-Angebot:</p>
              
              <div className="calc-chips">
                <label className={`chip-item ${selectedServices.rwm ? 'active' : ''}`} onClick={() => toggleService('rwm')}>
                  <input type="checkbox" checked={selectedServices.rwm} readOnly />
                  <span>🚨 Rauchwarnmelder</span>
                </label>
                <label className={`chip-item ${selectedServices.wasser ? 'active' : ''}`} onClick={() => toggleService('wasser')}>
                  <input type="checkbox" checked={selectedServices.wasser} readOnly />
                  <span>💧 Wasserzähler</span>
                </label>
                <label className={`chip-item ${selectedServices.waerme ? 'active' : ''}`} onClick={() => toggleService('waerme')}>
                  <input type="checkbox" checked={selectedServices.waerme} readOnly />
                  <span>🔥 Wärmezähler</span>
                </label>
                <label className={`chip-item ${selectedServices.hkv ? 'active' : ''}`} onClick={() => toggleService('hkv')}>
                  <input type="checkbox" checked={selectedServices.hkv} readOnly />
                  <span>📊 HKV Verteiler</span>
                </label>
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
  );
}
