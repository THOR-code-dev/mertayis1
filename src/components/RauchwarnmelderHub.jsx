import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';

export default function RauchwarnmelderHub({ onOpenOffer }) {
  const [selectedUnits, setSelectedUnits] = useState('50 - 500 WE');
  const [scope, setScope] = useState({
    kauf: true,
    montage: true,
    austausch: true,
    wartung: true
  });

  const toggleScope = (key) => {
    setScope(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleRwmQuote = () => {
    onOpenOffer(`Rauchwarnmelder Großbestand (${selectedUnits})`);
  };

  return (
    <section className="section-wrapper rauchmelder-section" id="rauchwarnmelder">
      <div className="container">
        <div className="row align-center">
          <div className="col-lg-6">
            <div className="section-tag red-tag">SPEZIALBEREICH SICHERHEITSTECHNIK</div>
            <h2 className="section-title">Rauchwarnmelder – Verkauf, Montage und Wartung</h2>
            <p className="section-lead">
              <strong>“Wir bieten Ihnen eine Komplettlösung für Rauchwarnmelder – von der Lieferung über die Montage bis zur Dokumentation und Wartung.”</strong>
            </p>
            
            <p className="text-muted">
              Als Hausverwaltung oder Wohnungsunternehmen tragen Sie die gesetzliche Verantwortung für die Rauchwarnmelder-Installation und die jährliche Betriebsbereitschaftsprüfung nach den Landesbauordnungen (LBO) und der DIN 14676. MOCD Nextmeasure übernimmt die komplette Enthaftung für Sie.
            </p>

            {/* 4-in-1 Concept */}
            <div className="concept-boxes">
              <div className="concept-box">
                <span className="concept-num">01</span>
                <strong>Gerät & Verkauf</strong>
                <p>10-Jahres Lithium Qualitätsmelder mit Q-Label</p>
              </div>
              <div className="concept-box">
                <span className="concept-num">02</span>
                <strong>Lieferung</strong>
                <p>Direkt zur Liegenschaft oder Großmengen-Logistik</p>
              </div>
              <div className="concept-box">
                <span className="concept-num">03</span>
                <strong>Montage</strong>
                <p>Fachgerechte Installation nach DIN 14676-1</p>
              </div>
              <div className="concept-box">
                <span className="concept-num">04</span>
                <strong>Dokumentation</strong>
                <p>Rechtssichere digitale Fotoprotokolle je Raum</p>
              </div>
            </div>

            {/* Target Sectors */}
            <div className="target-sectors">
              <strong>Perfekt zugeschnitten auf:</strong>
              <div className="sector-tags">
                <span>🏢 Hausverwaltungen</span>
                <span>🏘️ Wohnungsunternehmen</span>
                <span>🏡 Private & gewerbliche Eigentümer</span>
                <span>🏬 Gewerbeimmobilien</span>
              </div>
            </div>
          </div>

          {/* B2B Großmengen Angebot Card */}
          <div className="col-lg-6">
            <div className="rwm-quote-card">
              <div className="rwm-quote-header">
                <div className="rwm-icon">🚨</div>
                <div>
                  <h3 className="rwm-card-title">Rauchwarnmelder kaufen & montieren</h3>
                  <p className="rwm-card-subtitle">Individuelle B2B-Konditionen für Bestände jeder Größenordnung</p>
                </div>
              </div>

              <div className="rwm-quote-body">
                <div className="quote-callout">
                  <strong>Benötigen Sie Rauchwarnmelder für 10, 50, 500 oder mehrere tausend Wohnungen?</strong>
                  <p>Wir erstellen Ihnen ein maßgeschneidertes Großkunden-Angebot mit Bestpreis-Garantie und flexiblen Mieterterminen.</p>
                </div>

                <div className="rwm-form-group">
                  <label className="form-label">Geplante Einheiten / Wohnungen:</label>
                  <div className="btn-group-selector">
                    {['10 - 50 WE', '50 - 500 WE', '500 - 2.000 WE', '2.000+ WE'].map((tier) => (
                      <button 
                        key={tier}
                        type="button" 
                        className={`btn-select-pill ${selectedUnits === tier ? 'active' : ''}`}
                        onClick={() => setSelectedUnits(tier)}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="rwm-form-group">
                  <label className="form-label">Gewünschter Leistungsumfang:</label>
                  <div className="checkbox-grid-compact">
                    <label className="checkbox-label" onClick={() => toggleScope('kauf')}>
                      <input type="checkbox" checked={scope.kauf} readOnly /> Geräte-Kauf & Lieferung
                    </label>
                    <label className="checkbox-label" onClick={() => toggleScope('montage')}>
                      <input type="checkbox" checked={scope.montage} readOnly /> Montage nach DIN 14676
                    </label>
                    <label className="checkbox-label" onClick={() => toggleScope('austausch')}>
                      <input type="checkbox" checked={scope.austausch} readOnly /> 10-Jahres Turnustausch
                    </label>
                    <label className="checkbox-label" onClick={() => toggleScope('wartung')}>
                      <input type="checkbox" checked={scope.wartung} readOnly /> Jährliche Wartung & Doku
                    </label>
                  </div>
                </div>

                <div className="rwm-features-checklist">
                  <div className="feat-item">✓ Inklusive digitaler Mieterterminierung</div>
                  <div className="feat-item">✓ DIN 14676 zertifizierte Fachkräfte für Rauchwarnmelder</div>
                  <div className="feat-item">✓ Gesetzlich revisionssichere Nachweise für Gebäudeversicherer</div>
                </div>

                <button className="btn btn-primary btn-block btn-lg btn-glow" onClick={handleRwmQuote}>
                  INDIVIDUELLES B2B-ANGEBOT ANFORDERN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
