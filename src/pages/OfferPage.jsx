import React, { useState } from 'react';
import { 
  Check, 
  Send, 
  ShieldCheck, 
  Building2, 
  Droplet, 
  Flame, 
  BarChart3, 
  ShieldAlert, 
  Layers, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2,
  Lock
} from 'lucide-react';

export default function OfferPage({ onShowToast, onOpenLegal }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    company: '',
    contact: '',
    phone: '',
    email: '',
    clientType: 'Hausverwaltung',
    numObjects: '1',
    numUnits: '40',
    zipLocation: '',
    notes: '',
    services: {
      'Wasserzähler': false,
      'Wärmezähler': false,
      'Heizkostenverteiler': false,
      'Rauchwarnmelder': true,
      'Ablesung & Abrechnung': false,
      'Eichfristentausch': true,
      'Funk-Nachrüstung (OMS)': false
    },
    privacy: true
  });

  const toggleService = (name) => {
    setFormData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [name]: !prev.services[name]
      }
    }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      window.scrollTo({ top: 200, behavior: 'smooth' });
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo({ top: 200, behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (window.trackConversion) {
      window.trackConversion('form_submission', 'B2B Dedicated Offer Page Wizard', 100);
    }

    setSubmitted(true);
    if (onShowToast) {
      onShowToast(`Vielen Dank! Ihre Anfrage für ${formData.company || 'Ihr Unternehmen'} wurde erfolgreich übermittelt.`);
    }
    window.scrollTo({ top: 150, behavior: 'smooth' });
  };

  const selectedCount = Object.keys(formData.services).filter(k => formData.services[k]).length;

  return (
    <div className="page-wrapper offer-page">
      {/* Header Banner */}
      <section className="page-header-banner">
        <div className="container text-center">
          <span className="badge-pill-cyan">ONLINE-ANFRAGE IN 2 MINUTEN</span>
          <h1 className="page-title">Individuelles B2B-Angebot anfordern</h1>
          <p className="page-subtitle">
            Tragen Sie Ihre Liegenschaftsdaten ein – Sie erhalten innerhalb von 24 Stunden ein unverbindliches und detailliertes Festpreis-Angebot.
          </p>
        </div>
      </section>

      <section className="section-wrapper bg-light">
        <div className="container">
          
          {submitted ? (
            <div className="offer-success-card">
              <div className="success-icon-wrap">
                <Check size={48} color="#187A44" />
              </div>
              <h2>Vielen Dank für Ihre Anfrage!</h2>
              <p>
                Wir haben Ihre Anfrage für <strong>{formData.company || 'Ihr Unternehmen'}</strong> ({formData.numUnits} WE, Standort: {formData.zipLocation || 'Deutschland'}) erhalten.
              </p>
              <div className="success-details-box">
                <p><strong>Gewählte Leistungen:</strong> {Object.keys(formData.services).filter(k => formData.services[k]).join(', ')}</p>
                <p><strong>Nächste Schritte:</strong> Unser technischer Projektleiter prüft Ihre Angaben und übermittelt Ihnen innerhalb von 24 Stunden Ihr individuelles B2B-Konditionenblatt.</p>
              </div>
              <button 
                className="btn btn-primary mt-4"
                onClick={() => {
                  setSubmitted(false);
                  setStep(1);
                }}
              >
                Weitere Anfrage stellen
              </button>
            </div>
          ) : (
            <div className="wizard-layout">
              {/* Wizard Steps Indicator */}
              <div className="wizard-stepper">
                <div className={`step-node ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
                  <div className="node-circle">{step > 1 ? <Check size={14} /> : '1'}</div>
                  <span>1. Leistungen</span>
                </div>
                <div className="step-connector"></div>
                <div className={`step-node ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
                  <div className="node-circle">{step > 2 ? <Check size={14} /> : '2'}</div>
                  <span>2. Liegenschaft</span>
                </div>
                <div className="step-connector"></div>
                <div className={`step-node ${step >= 3 ? 'active' : ''}`}>
                  <div className="node-circle">3</div>
                  <span>3. Kontaktdaten</span>
                </div>
              </div>

              {/* Wizard Body Form */}
              <div className="wizard-form-box">
                <form onSubmit={step === 3 ? handleSubmit : handleNextStep}>
                  
                  {/* STEP 1: SERVICES */}
                  {step === 1 && (
                    <div className="wizard-step-panel">
                      <h3 className="wizard-step-title">Schritt 1: Welche Leistungen benötigen Sie?</h3>
                      <p className="wizard-step-sub">Wählen Sie alle zutreffenden Gewerke aus (Mehrfachauswahl möglich):</p>
                      
                      <div className="services-selection-grid">
                        {Object.keys(formData.services).map((srv) => (
                          <div 
                            key={srv}
                            className={`srv-select-card ${formData.services[srv] ? 'selected' : ''}`}
                            onClick={() => toggleService(srv)}
                          >
                            <input 
                              type="checkbox" 
                              checked={formData.services[srv]} 
                              onChange={() => {}}
                              className="srv-checkbox"
                            />
                            <div className="srv-card-text">
                              <strong>{srv}</strong>
                              <small>Montage, Tausch, Dokumentation & Prüfung</small>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="wizard-nav-actions">
                        <div></div>
                        <button 
                          type="submit" 
                          className="btn btn-primary btn-lg"
                          disabled={selectedCount === 0}
                        >
                          <span>Weiter zu Schritt 2</span>
                          <ArrowRight size={18} />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: OBJECT & UNITS */}
                  {step === 2 && (
                    <div className="wizard-step-panel">
                      <h3 className="wizard-step-title">Schritt 2: Rahmendaten Ihrer Liegenschaften</h3>
                      <p className="wizard-step-sub">Geben Sie uns eine grobe Orientierung über den Umfang:</p>
                      
                      <div className="form-grid-2">
                        <div className="form-group">
                          <label>Kundentyp *</label>
                          <select 
                            name="clientType" 
                            value={formData.clientType} 
                            onChange={handleChange}
                            className="form-control"
                            required
                          >
                            <option value="Hausverwaltung">Hausverwaltung / WEG-Verwalter</option>
                            <option value="Wohnungsunternehmen">Wohnungsunternehmen / Genossenschaft</option>
                            <option value="Eigentümer">Privateigentümer / Vermieter</option>
                            <option value="Gewerbe">Gewerbeimmobilie / Fonds</option>
                          </select>
                        </div>

                        <div className="form-group">
                          <label>Geschätzte Anzahl Wohneinheiten (WE) *</label>
                          <input 
                            type="number" 
                            name="numUnits" 
                            value={formData.numUnits} 
                            onChange={handleChange}
                            placeholder="z.B. 40"
                            className="form-control"
                            required
                          />
                        </div>
                      </div>

                      <div className="form-grid-2">
                        <div className="form-group">
                          <label>Anzahl Gebäude / Liegenschaften</label>
                          <input 
                            type="text" 
                            name="numObjects" 
                            value={formData.numObjects} 
                            onChange={handleChange}
                            placeholder="z.B. 2 Objekte"
                            className="form-control"
                          />
                        </div>

                        <div className="form-group">
                          <label>PLZ / Ort(e) der Liegenschaft(en) *</label>
                          <input 
                            type="text" 
                            name="zipLocation" 
                            value={formData.zipLocation} 
                            onChange={handleChange}
                            placeholder="z.B. 50667 Köln oder bundesweit"
                            className="form-control"
                            required
                          />
                        </div>
                      </div>

                      <div className="wizard-nav-actions">
                        <button type="button" className="btn btn-outline-navy" onClick={handlePrevStep}>
                          <ArrowLeft size={18} />
                          <span>Zurück</span>
                        </button>
                        <button type="submit" className="btn btn-primary btn-lg">
                          <span>Weiter zu Schritt 3</span>
                          <ArrowRight size={18} />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: CONTACT & SUBMIT */}
                  {step === 3 && (
                    <div className="wizard-step-panel">
                      <h3 className="wizard-step-title">Schritt 3: Ihre Kontaktdaten für das Angebot</h3>
                      <p className="wizard-step-sub">Wohin dürfen wir die Ausarbeitung & Konditionen senden?</p>
                      
                      <div className="form-grid-2">
                        <div className="form-group">
                          <label>Unternehmen / Hausverwaltung *</label>
                          <input 
                            type="text" 
                            name="company" 
                            value={formData.company} 
                            onChange={handleChange}
                            placeholder="z.B. Muster Immobilien GmbH"
                            className="form-control"
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label>Ansprechpartner (Name) *</label>
                          <input 
                            type="text" 
                            name="contact" 
                            value={formData.contact} 
                            onChange={handleChange}
                            placeholder="z.B. Herr / Frau Schmidt"
                            className="form-control"
                            required
                          />
                        </div>
                      </div>

                      <div className="form-grid-2">
                        <div className="form-group">
                          <label>Geschäftliche E-Mail-Adresse *</label>
                          <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange}
                            placeholder="schmidt@muster-verwaltung.de"
                            className="form-control"
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label>Telefonnummer für Rückfragen *</label>
                          <input 
                            type="tel" 
                            name="phone" 
                            value={formData.phone} 
                            onChange={handleChange}
                            placeholder="+49 123 4567890"
                            className="form-control"
                            required
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Zusätzliche Hinweise / Wunschtermin / Besonderheiten</label>
                        <textarea 
                          name="notes" 
                          rows="3"
                          value={formData.notes} 
                          onChange={handleChange}
                          placeholder="z.B. Austausch bis Q4 gewünscht, bisherige Funk-Zähler von Techem..."
                          className="form-control"
                        ></textarea>
                      </div>

                      <div className="form-group privacy-checkbox">
                        <label className="checkbox-label">
                          <input 
                            type="checkbox" 
                            name="privacy" 
                            checked={formData.privacy} 
                            onChange={handleChange}
                            required
                          />
                          <span>
                            Ich stimme der Verarbeitung meiner Daten gemäß der{' '}
                            <button 
                              type="button" 
                              className="btn-text-link"
                              onClick={() => onOpenLegal('datenschutz')}
                            >
                              Datenschutzerklärung
                            </button>{' '}
                            zu.
                          </span>
                        </label>
                      </div>

                      <div className="wizard-nav-actions">
                        <button type="button" className="btn btn-outline-navy" onClick={handlePrevStep}>
                          <ArrowLeft size={18} />
                          <span>Zurück</span>
                        </button>
                        <button type="submit" className="btn btn-primary btn-lg btn-glow">
                          <Send size={18} />
                          <span>ANGEBOT JETZT ABSENDEN</span>
                        </button>
                      </div>
                    </div>
                  )}

                </form>
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
