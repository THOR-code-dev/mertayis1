import React, { useState, useEffect } from 'react';
import { X, Send, Shield } from 'lucide-react';

export default function OfferModal({ isOpen, onClose, initialContext, onShowToast }) {
  const [formData, setFormData] = useState({
    company: '',
    contact: '',
    phone: '',
    email: '',
    units: '',
    service: 'Rauchwarnmelder Komplettpaket',
    location: ''
  });

  useEffect(() => {
    if (initialContext) {
      if (initialContext.includes('Wasser')) {
        setFormData(prev => ({ ...prev, service: 'Wasserzähler Montage & Tausch' }));
      } else if (initialContext.includes('Wärme')) {
        setFormData(prev => ({ ...prev, service: 'Wärmezähler Service' }));
      } else if (initialContext.includes('Heizkosten')) {
        setFormData(prev => ({ ...prev, service: 'Heizkostenverteiler Funk' }));
      } else if (initialContext.includes('Hausverwaltung')) {
        setFormData(prev => ({ ...prev, service: 'Komplettservice Hausverwaltung' }));
      }
    }
  }, [initialContext]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (window.trackConversion) {
      window.trackConversion('modal_offer_submission', `Service: ${formData.service}`, 80);
    }

    onShowToast(`Vielen Dank! Ihre Anfrage für ${formData.company || 'Ihr Unternehmen'} wurde erfolgreich entgegengenommen.`);
    onClose();
  };

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Schließen">
          <X size={18} />
        </button>

        <div className="modal-header">
          <span className="modal-badge">B2B ANFRAGE</span>
          <h3 className="modal-title">Unverbindliches Angebot anfordern</h3>
          <p className="modal-subtitle">
            {initialContext ? `Bezug: ${initialContext}` : 'Füllen Sie das Formular aus – wir melden uns innerhalb von 24h mit einem Festpreisangebot.'}
          </p>
        </div>

        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Firma / Hausverwaltung *</label>
              <input 
                type="text" 
                required 
                placeholder="z.B. Schmidt Hausverwaltung GmbH"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>

            <div className="form-row-2">
              <div className="input-group">
                <label>Ansprechpartner *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Ihr Name"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                />
              </div>
              <div className="input-group">
                <label>Telefon *</label>
                <input 
                  type="tel" 
                  required 
                  placeholder="Ihre Telefonnummer"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="form-row-2">
              <div className="input-group">
                <label>E-Mail *</label>
                <input 
                  type="email" 
                  required 
                  placeholder="ihre@email.de"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="input-group">
                <label>Wohneinheiten (ca.)</label>
                <input 
                  type="number" 
                  placeholder="z.B. 80"
                  value={formData.units}
                  onChange={(e) => setFormData({ ...formData, units: e.target.value })}
                />
              </div>
            </div>

            <div className="input-group">
              <label>Gewünschter Schwerpunkt:</label>
              <select 
                value={formData.service} 
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                <option value="Rauchwarnmelder Komplettpaket">🚨 Rauchwarnmelder Komplettpaket</option>
                <option value="Wasserzähler Montage & Tausch">💧 Wasserzähler Montage & Austausch</option>
                <option value="Wärmezähler Service">🔥 Wärmezähler / WMZ</option>
                <option value="Heizkostenverteiler Funk">📊 Heizkostenverteiler</option>
                <option value="Komplettservice Hausverwaltung">🏢 Komplettservice für Hausverwaltung</option>
              </select>
            </div>

            <div className="input-group">
              <label>PLZ / Region des Objekts:</label>
              <input 
                type="text" 
                placeholder="z.B. 42103 Wuppertal oder 50667 Köln"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block btn-lg btn-glow mt-3">
              <Send size={16} />
              <span>JETZT ANGEBOT ANFORDERN →</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
