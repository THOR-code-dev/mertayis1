import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  CheckCircle2, 
  Database, 
  Layers, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  Cpu, 
  FileSpreadsheet
} from 'lucide-react';

export default function WohnungsunternehmenPage({ onOpenOffer }) {
  return (
    <div className="page-wrapper audience-page">
      {/* Header Banner */}
      <section className="page-header-banner wug-header-bg">
        <div className="container text-center">
          <span className="badge-pill-cyan">GROSSBESTÄNDE & WOHNUNGSBAUGESELLSCHAFTEN</span>
          <h1 className="page-title">Skalierbare Messdienst-Rollouts & Rahmenverträge</h1>
          <p className="page-subtitle">
            Für Wohnungsunternehmen, Genossenschaften und institutionelle Bestandshalter: Serienwechsel von 500 bis 10.000+ Einheiten mit automatisierter ERP-Datenübergabe.
          </p>
          <div className="banner-cta-row mt-4">
            <button className="btn btn-primary btn-lg btn-glow" onClick={() => onOpenOffer('Wohnungsunternehmen Page Hero')}>
              <Zap size={18} />
              <span>RAHMENVEREINBARUNG ANFRAGEN</span>
            </button>
          </div>
        </div>
      </section>

      {/* Enterprise Capabilities */}
      <section className="section-wrapper bg-white">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-category">ENTERPRISE LEISTUNGSFÄHIGKEIT</span>
            <h2 className="section-title">Maßgeschneidert für Portfolios mit hohem Volumen</h2>
            <p className="section-subtitle">
              Große Bestände erfordern durchgetaktete Logistik, standardisierte Schnittstellen und maximale Kostentransparenz.
            </p>
          </div>

          <div className="enterprise-grid">
            <div className="ent-card">
              <div className="ent-icon"><Database size={28} /></div>
              <h3>ERP-Schnittstellen (CSV / XML / Datanorm)</h3>
              <p>
                Wir liefern Zähler- und Stammdaten kompatibel für gängige ERP-Systeme wie SAP RE-FX, Aareon Wodis Yuneo, Immoware24, RealEstate und Haufe WOWINE.
              </p>
            </div>

            <div className="ent-card">
              <div className="ent-icon"><Layers size={28} /></div>
              <h3>Skalierbare Montagekapazität</h3>
              <p>
                Mit unserem bundesweiten Netzwerk von geschulten Montageteams realisieren wir auch enge Eichfristen-Zeitfenster und Groß-Rollouts terminsicher.
              </p>
            </div>

            <div className="ent-card">
              <div className="ent-icon"><TrendingUp size={28} /></div>
              <h3>Wirtschaftliche Rahmenkonditionen</h3>
              <p>
                Transparente Festpreise ohne versteckte Nebenkosten. Durch Staffelpreise und mehrjährige Rahmenverträge optimieren Sie Ihre Bewirtschaftungskosten.
              </p>
            </div>

            <div className="ent-card">
              <div className="ent-icon"><Cpu size={28} /></div>
              <h3>Submetering & UVI Compliance</h3>
              <p>
                Umrüstung auf moderne OMS-Funk-Technologie zur Erfüllung der monatlichen unterjährigen Verbrauchsinformation (UVI) nach HeizkostenV.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rollout Prozess */}
      <section className="section-wrapper bg-light">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-category">PROJEKTSTEUERUNG</span>
            <h2 className="section-title">Strukturierter 5-Phasen Rollout-Prozess</h2>
          </div>

          <div className="rollout-steps-container">
            <div className="rollout-step">
              <div className="step-circle-badge">1</div>
              <h4>Portfolio-Audit</h4>
              <p>Prüfung von Eichfristen, Altgeräten und baulichen Besonderheiten Ihres Bestands.</p>
            </div>
            <div className="rollout-step">
              <div className="step-circle-badge">2</div>
              <h4>Rahmenvertrag</h4>
              <p>Festlegung von Staffelpreisen, Service-Level-Agreements (SLA) und Meilensteinen.</p>
            </div>
            <div className="rollout-step">
              <div className="step-circle-badge">3</div>
              <h4>Mieter-Disposition</h4>
              <p>Systematische Terminankündigung und automatisierte Nachtermin-Steuerung.</p>
            </div>
            <div className="rollout-step">
              <div className="step-circle-badge">4</div>
              <h4>Qualitäts-Rollout</h4>
              <p>Serienmontage mit 100% Fotoprotokollierung und Barcode-Scan aller Messgeräte.</p>
            </div>
            <div className="rollout-step">
              <div className="step-circle-badge">5</div>
              <h4>ERP-Datenimport</h4>
              <p>Bereitstellung bereinigter Datensätze zur nahtlosen Übernahme in Ihr System.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-wrapper bg-navy text-white text-center">
        <div className="container">
          <h2 className="cta-banner-title">Sie planen einen Bestands-Rollout oder Zählertausch?</h2>
          <p className="cta-banner-sub">
            Sprechen Sie direkt mit unserer Key-Account-Projektleitung für Großkunden.
          </p>
          <div className="cta-banner-actions">
            <button className="btn btn-primary btn-lg btn-glow" onClick={() => onOpenOffer('Wohnungsunternehmen CTA')}>
              <Zap size={18} />
              <span>KEY-ACCOUNT GESPRÄCH VEREINBAREN</span>
            </button>
            <Link to="/kontakt" className="btn btn-outline-white btn-lg">
              <span>ZENTRALE KONTAKTIEREN</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
