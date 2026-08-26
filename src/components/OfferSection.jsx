import React, { useState } from 'react';
import { Send, Check, ShieldCheck } from 'lucide-react';

export default function OfferSection({ onShowToast, onOpenLegal }) {
  const [formData, setFormData] = useState({
    company: '',
    contact: '',
    phone: '',
    email: '',
    numObjects: '',
    numUnits: '',
    zipLocation: '',
    notes: '',
    services: {
      'Wasserzähler': false,
      'Wärmezähler': false,
      'Heizkostenverteiler': false,
      'Rauchwarnmelder': true,
      'Ablesung': false,
      'Montage': true,
      'Austausch': false,
      'Wartung / Inspektion': false,
      'Sonstiges': false
    },
    privacy: false
  });

  const handleCheckboxChange = (serviceName) => {
    setFormData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [serviceName]: !prev.services[serviceName]
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedList = Object.keys(formData.services).filter(k => formData.services[k]);

    // Trigger Google Ads Conversion Macro
    if (window.trackConversion) {
      window.trackConversion('form_submission', 'B2B Main Offer Form', 100);
    }

    // Success notification
    onShowToast(`Vielen Dank, ${formData.contact || 'Herr/Frau'}! Ihre Anfrage für ${formData.company || 'Ihr Unternehmen'} (${formData.numUnits || 'Bestand'} WE) wurde erfolgreich übermittelt.`);

    // Reset or prepare next action
    setFormData({
      company: '',
      contact: '',
      phone: '',
      email: '',
      numObjects: '',
      numUnits: '',
      zipLocation: '',
      notes: '',
      services: {
        'Wasserzähler': false,
        'Wärmezähler': false,
        'Heizkostenverteiler': false,
        'Rauchwarnmelder': true,
        'Ablesung': false,
        'Montage': true,
        'Austausch': false,
        'Wartung / Inspektion': false,
        'Sonstiges': false
      },
      privacy: false
    });
  };

  return (
    <section className="section-wrapper bg-light" id="angebot">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-category">ONLINE-ANFRAGE IN 2 MINUTEN</span>
          <h2 className="section-title">Individuelles B2B-Angebot anfordern</h2>
          <p className="section-subtitle">
            Tragen Sie Ihre Rahmendaten ein und Sie erhalten innerhalb von 24 Stunden ein detailliertes und unverbindliches Festpreis-Angebot für Ihre Liegenschaften.
          </p>
        </div>

        <div className="offer-form-wrapper">
          <form onSubmit={handleSubmit}>
            
            <div className="form-step-title">
              <span className="step-circle">1</span>
              <span>Gewünschte Leistungen auswählen (Mehrfachauswahl möglich):</span>
            </div>

            {/* Services Multi Checkbox Grid */}
            <div className="form-checkbox-group">
              {Object.keys(formData.services).map((srv) => (
                <label key={srv} className="form-check-card">
                  <input 
                    type="checkbox" 
                    checked={formData.services[srv]}
                    onChange={() => handleCheckboxChange(srv)} 
                  />
                  <span className="check-box-label">{srv}</span>
                </label>
              ))}
            </div>

            <div className="form-step-title mt-4">
              <span className="step-circle">2</span>
              <span>Liegenschafts- & Kontaktdaten:</span>
            </div>

            <div className="form-row-2">
              <div className="input-group">
                <label htmlFor="company">Unternehmen / Hausverwaltung *</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  required 
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="z.B. Schmidt Immobilienverwaltung GmbH" 
                />
              </div>
              <div className="input-group">
                <label htmlFor="contact">Ansprechpartner (Vor- & Nachname) *</label>
                <input 
                  type="text" 
                  id="contact" 
                  name="contact" 
                  required 
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="z.B. Herr Michael Schmidt" 
                />
              </div>
            </div>

            <div className="form-row-2">
              <div className="input-group">
                <label htmlFor="phone">Telefonnummer für Rückfragen *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  required 
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="z.B. +49 202 1234567" 
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">Geschäftliche E-Mail-Adresse *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="z.B. schmidt@schmidt-verwaltung.de" 
                />
              </div>
            </div>

            <div className="form-row-3">
              <div className="input-group">
                <label htmlFor="numObjects">Anzahl Objekte / Gebäude</label>
                <input 
                  type="number" 
                  id="numObjects" 
                  name="numObjects" 
                  min="1" 
                  value={formData.numObjects}
                  onChange={handleChange}
                  placeholder="z.B. 12" 
                />
              </div>
              <div className="input-group">
                <label htmlFor="numUnits">Anzahl Wohneinheiten (WE) *</label>
                <input 
                  type="number" 
                  id="numUnits" 
                  name="numUnits" 
                  required 
                  min="1" 
                  value={formData.numUnits}
                  onChange={handleChange}
                  placeholder="z.B. 150" 
                />
              </div>
              <div className="input-group">
                <label htmlFor="zipLocation">PLZ / Einsatzort(e) *</label>
                <input 
                  type="text" 
                  id="zipLocation" 
                  name="zipLocation" 
                  required 
                  value={formData.zipLocation}
                  onChange={handleChange}
                  placeholder="z.B. 50667 Köln oder bundesweit" 
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="notes">Besondere Anforderungen / Bemerkungen (optional):</label>
              <textarea 
                id="notes" 
                name="notes" 
                rows="3" 
                value={formData.notes}
                onChange={handleChange}
                placeholder="z.B. Bestandsaufnahme gewünscht, 10-Jahres-Austausch Rauchwarnmelder für 400 Einheiten bis Q3..."
              ></textarea>
            </div>

            <div className="privacy-consent-box">
              <label className="privacy-check">
                <input 
                  type="checkbox" 
                  name="privacy" 
                  required 
                  checked={formData.privacy}
                  onChange={handleChange}
                />
                <span>
                  Ich willige ein, dass meine Angaben zur Bearbeitung der Anfrage und für geschäftliche Rückfragen verarbeitet werden. (
                  <a href="#datenschutz" onClick={(e) => { e.preventDefault(); onOpenLegal('datenschutz'); }}>
                    Datenschutzerklärung
                  </a>)
                </span>
              </label>
            </div>

            <div className="form-actions text-center">
              <button type="submit" className="btn btn-primary btn-lg btn-glow">
                <Send size={18} />
                <span>ANFRAGE KOSTENLOS SENDEN</span>
              </button>
              <p className="form-guarantee">🔒 SSL-verschlüsselt · Unverbindlich · B2B-Konditionen innerhalb von 24h</p>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}
