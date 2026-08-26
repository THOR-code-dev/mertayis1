import React from 'react';
import { Building2, Layers, Cpu, TrendingUp } from 'lucide-react';

export default function WohnungsunternehmenSection({ onOpenOffer }) {
  return (
    <section className="section-wrapper bg-gradient-navy text-white" id="wohnungsunternehmen">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-category text-cyan">SKALIERBARE GROSSPROJEKTE</span>
          <h2 className="section-title text-white">Für Wohnungsunternehmen & Großbestände</h2>
          <p className="section-subtitle text-gray">
            Leistungsstarke Infrastruktur für Wohnungsbaugesellschaften, Genossenschaften und institutionelle Immobilienfonds.
          </p>
        </div>

        {/* Scale Highlights */}
        <div className="scale-grid">
          <div className="scale-box">
            <div className="scale-icon">🏢🏢</div>
            <div className="scale-title">Mehrere Objekte</div>
            <p className="scale-text">Gleichzeitige Rollouts über ganze Portfolios hinweg mit zentraler Steuerung.</p>
          </div>
          <div className="scale-box">
            <div className="scale-icon">🔑</div>
            <div className="scale-title">Hunderte Wohnungen</div>
            <p className="scale-text">Reibungslose Serienmontagen mit optimierten Routen und hoher Ersttermin-Quote.</p>
          </div>
          <div className="scale-box">
            <div className="scale-icon">🏙️</div>
            <div className="scale-title">Tausende Einheiten</div>
            <p className="scale-text">Großvolumige Beschaffung von Zählern und Rauchmeldern mit erstklassigen Einkaufsvorteilen.</p>
          </div>
          <div className="scale-box">
            <div className="scale-icon">🇩🇪</div>
            <div className="scale-title">Deutschlandweit</div>
            <p className="scale-text">Einheitliche Qualitätsstandards an jedem Ihrer Standorte bundesweit.</p>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="pillars-row">
          <div className="pillar-card">
            <span className="pillar-badge">01</span>
            <h4 className="pillar-heading">Deutschlandweit</h4>
            <p className="pillar-desc">Zentraler Vertragspartner für Ihren gesamten überregionalen Immobilienbestand.</p>
          </div>
          <div className="pillar-card">
            <span className="pillar-badge">02</span>
            <h4 className="pillar-heading">Flexibel</h4>
            <p className="pillar-desc">Individuelle Einsatzplanung nach Ihren Bauzeiten- und Sanierungsplänen.</p>
          </div>
          <div className="pillar-card">
            <span className="pillar-badge">03</span>
            <h4 className="pillar-heading">Digital</h4>
            <p className="pillar-desc">Standardisierte Datenformate (CSV, Datanorm, XML) für die direkte ERP-Übernahme.</p>
          </div>
          <div className="pillar-card">
            <span className="pillar-badge">04</span>
            <h4 className="pillar-heading">Skalierbar</h4>
            <p className="pillar-desc">Kapazitäten, die mit Ihrem Portfolio wachsen – von 100 bis über 50.000 Wohneinheiten.</p>
          </div>
        </div>

        <div className="text-center mt-5">
          <button className="btn btn-cyan btn-lg btn-glow" onClick={() => onOpenOffer('Wohnungsunternehmen Großprojekt')}>
            Großprojekt unverbindlich anfragen
          </button>
        </div>
      </div>
    </section>
  );
}
