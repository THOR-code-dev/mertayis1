import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare, Send } from 'lucide-react';

export default function ContactSection({ onShowToast, onOpenOffer }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: 'Allgemeine Anfrage',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.trackConversion) {
      window.trackConversion('contact_form_message', `Subject: ${formData.subject}`, 50);
    }
    onShowToast(`Vielen Dank, ${formData.name}! Ihre Nachricht wurde erfolgreich übermittelt.`);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      subject: 'Allgemeine Anfrage',
      message: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="section-wrapper bg-light" id="kontakt">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-category">DIREKTER DRAHT</span>
          <h2 className="section-title">Kontakt & Beratung</h2>
          <p className="section-subtitle">Sprechen Sie direkt mit unseren Spezialisten über Ihr anstehendes Projekt.</p>
        </div>

        <div className="row">
          <div className="col-lg-5">
            <div className="contact-info-card">
              <h3 className="contact-card-title">MOCD Nextmeasure GmbH</h3>
              <p className="contact-card-lead">Zuverlässiger B2B-Service für Zählertechnik und Rauchmelder bundesweit.</p>

              <div className="contact-details-list">
                <div className="contact-detail-item">
                  <div className="c-icon">📍</div>
                  <div>
                    <strong>Zentrale & Verwaltung:</strong>
                    <p>Musterstraße 100, 42103 Wuppertal, Deutschland</p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="c-icon">📞</div>
                  <div>
                    <strong>Telefon:</strong>
                    <p>
                      <a 
                        href="tel:+4920212345678" 
                        onClick={() => window.trackConversion && window.trackConversion('phone_call', 'Contact Card Phone', 25)}
                      >
                        +49 (0) 202 / 123 456 78
                      </a>
                    </p>
                    <small>Mo. - Fr.: 08:00 - 18:00 Uhr</small>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="c-icon">✉️</div>
                  <div>
                    <strong>E-Mail:</strong>
                    <p>
                      <a 
                        href="mailto:anfrage@mocd-nextmeasure.de" 
                        onClick={() => window.trackConversion && window.trackConversion('email_click', 'Contact Card Email', 15)}
                      >
                        anfrage@mocd-nextmeasure.de
                      </a>
                    </p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="c-icon">💬</div>
                  <div>
                    <strong>WhatsApp Business:</strong>
                    <p>
                      <a 
                        href="https://wa.me/4920212345678?text=Hallo%20MOCD%20Nextmeasure,%20ich%20habe%20eine%20Projektanfrage." 
                        target="_blank" 
                        rel="noreferrer"
                        onClick={() => window.trackConversion && window.trackConversion('whatsapp_click', 'Contact Card WhatsApp', 30)}
                      >
                        +49 (0) 202 / 123 456 78
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="contact-action-box">
                <button className="btn btn-primary btn-block" onClick={() => onOpenOffer('Contact Card Offer Trigger')}>
                  Projektanfrage starten
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="contact-form-card">
              <h3 className="form-title">Direktnachricht senden</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-row-2">
                  <div className="input-group">
                    <label>Ihr Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Vor- und Nachname" 
                    />
                  </div>
                  <div className="input-group">
                    <label>Unternehmen *</label>
                    <input 
                      type="text" 
                      name="company" 
                      required 
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Firma / Hausverwaltung" 
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="input-group">
                    <label>E-Mail-Adresse *</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@firma.de" 
                    />
                  </div>
                  <div className="input-group">
                    <label>Telefon</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Ihre Rufnummer" 
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label>Betreff</label>
                  <select name="subject" value={formData.subject} onChange={handleChange}>
                    <option value="Allgemeine Anfrage">Allgemeine Anfrage</option>
                    <option value="Rauchwarnmelder Großbestand">Rauchwarnmelder Großbestand</option>
                    <option value="Zählerwechsel / Eichfristen">Zählerwechsel / Eichfristen</option>
                    <option value="Messdienstleistung & Abrechnung">Messdienstleistung & Abrechnung</option>
                    <option value="Servicepartner-Bewerbung">Servicepartner-Bewerbung</option>
                  </select>
                </div>

                <div className="input-group">
                  <label>Ihre Nachricht *</label>
                  <textarea 
                    name="message" 
                    rows="4" 
                    required 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Beschreiben Sie kurz Ihr Vorhaben oder Ihren Objektbestand..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-block btn-lg">
                  <Send size={18} />
                  <span>Nachricht jetzt absenden</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
