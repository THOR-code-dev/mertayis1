import React, { useState } from 'react';
import { 
  Calculator, 
  TrendingDown, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2,
  FileSpreadsheet
} from 'lucide-react';

export default function InteractiveRoiCalculator({ onOpenOffer }) {
  const [weCount, setWeCount] = useState(80);
  const [isManualCurrent, setIsManualCurrent] = useState(true);
  const [hasRwm, setHasRwm] = useState(true);

  // Calculations
  const hoursSavedPerYear = Math.round(weCount * (isManualCurrent ? 1.4 : 0.6));
  const tenantComplaintsReduction = isManualCurrent ? 85 : 40;
  const digitalDocRatio = 100;
  const estimatedSavingsPerYear = Math.round(weCount * 18.5);

  const handleApplyRoi = () => {
    onOpenOffer(`ROI Rechner: ${weCount} WE (${hoursSavedPerYear}h Zeitersparnis, ${hasRwm ? 'inkl. RWM' : 'nur Zähler'})`);
  };

  return (
    <div className="roi-calculator-card">
      <div className="roi-header">
        <div className="roi-badge">
          <Sparkles size={14} />
          <span>INTERAKTIVER EFFIZIENZ- & ZEITERSPARNIS-RECHNER</span>
        </div>
        <h3 className="roi-title">Berechnen Sie Ihr Einsparpotenzial für Verwalter & Eigentümer</h3>
        <p className="roi-subtitle">
          Sehen Sie auf einen Blick, wie viel Arbeitszeit und Koordinationsaufwand Ihr Team durch digitale Ablesung und DIN 14676 Enthaftung einspart.
        </p>
      </div>

      <div className="roi-body-grid">
        {/* Sliders & Controls */}
        <div className="roi-controls">
          <div className="roi-control-group">
            <div className="roi-label-row">
              <label>Anzahl verwaltete Wohneinheiten (WE):</label>
              <span className="roi-val-badge">{weCount} WE</span>
            </div>
            <input 
              type="range" 
              min="10" 
              max="1500" 
              step="10"
              value={weCount} 
              onChange={(e) => setWeCount(Number(e.target.value))}
              className="custom-range"
            />
            <div className="range-marks">
              <span>20 WE</span>
              <span>250 WE</span>
              <span>500 WE</span>
              <span>1.000 WE</span>
              <span>1.500+ WE</span>
            </div>
          </div>

          <div className="roi-toggles-grid">
            <div 
              className={`roi-toggle-card ${isManualCurrent ? 'active' : ''}`}
              onClick={() => setIsManualCurrent(!isManualCurrent)}
            >
              <input type="checkbox" checked={isManualCurrent} readOnly />
              <div>
                <strong>Bisherige manuelle Ablesung / Altgeräte</strong>
                <small>Mieter-Termine vor Ort nötig</small>
              </div>
            </div>

            <div 
              className={`roi-toggle-card ${hasRwm ? 'active' : ''}`}
              onClick={() => setHasRwm(!hasRwm)}
            >
              <input type="checkbox" checked={hasRwm} readOnly />
              <div>
                <strong>Inkl. Rauchwarnmelder-Komplettservice</strong>
                <small>DIN 14676 Vollenthaftung</small>
              </div>
            </div>
          </div>
        </div>

        {/* Results Metrics */}
        <div className="roi-results-box">
          <span className="roi-results-tag">IHRE JÄHRLICHE ENTLASTUNG</span>
          
          <div className="roi-metrics-grid">
            <div className="roi-metric-item highlight-cyan">
              <div className="metric-icon-wrap"><Clock size={20} /></div>
              <div className="metric-value">~{hoursSavedPerYear} Std.</div>
              <div className="metric-lbl">Zeitersparnis pro Jahr</div>
            </div>

            <div className="roi-metric-item highlight-green">
              <div className="metric-icon-wrap"><TrendingDown size={20} /></div>
              <div className="metric-value">-{tenantComplaintsReduction}%</div>
              <div className="metric-lbl">Mieter-Rückfragen</div>
            </div>

            <div className="roi-metric-item highlight-blue">
              <div className="metric-icon-wrap"><ShieldCheck size={20} /></div>
              <div className="metric-value">{digitalDocRatio}%</div>
              <div className="metric-lbl">Rechtssichere Doku</div>
            </div>
          </div>

          <div className="roi-summary-benefit">
            <CheckCircle2 size={16} color="#187A44" />
            <span>Volle Enthaftung für den Verwalter & fertige CSV/ERP-Daten</span>
          </div>

          <button className="btn btn-primary btn-block btn-glow mt-3" onClick={handleApplyRoi}>
            <span>FÜR {weCount} WE ANGEBOT ANFORDERN</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
