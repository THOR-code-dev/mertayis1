import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  Zap, 
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';

export default function ContactPage({ onShowToast, onOpenOffer }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: 'Allgemeine Anfrage',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (window.trackConversion) {
      window.trackConversion('contact_form_submission', 'Contact Page Form', 50);
    }

    setSubmitted(true);
    if (onShowToast) {
      onShowToast(`Vielen Dank, ${formData.name}! Ihre Nachricht wurde erfolgreich übermittelt.`);
    }
  };

  return (
    <div className="page-wrapper contact-page">
      {/* Header Banner */}
      <section className="page-header-banner">
        <div className="container text-center">
          <span className="badge-pill-cyan">DIREKTER KONTAKT</span>
          <h1 className="page-title">Kontakt & Ansprechpartner</h1>
          <p className="page-subtitle">
            Haben Sie Fragen zu unseren Messdienstleistungen, Eichfristen oder Rauchmelder-Lösungen? Unser Team in Wuppertal ist gerne für Sie da.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="section-wrapper bg-light">
        <div className="container">
          <div className="contact-main-grid">
            
            {/* Contact Info Cards */}
            <div className="contact-info-column">
              <div className="contact-info-card">
                <h3>MOCD Nextmeasure GmbH</h3>
                <p className="contact-info-lead">Ihr B2B Partner für Messdienst & Zählertechnik in Deutschland.</p>

                <div className="contact-channel-list">
                  <div className="channel-item">
                    <div className="channel-icon navy-bg"><MapPin size={20} /></div>
                    <div>
                      <strong>Unternehmenszentrale:</strong>
                      <p>Musterstraße 100, 42103 Wuppertal</p>
                    </div>
                  </div>

                  <div className="channel-item">
                    <div className="channel-icon cyan-bg"><Phone size={20} /></div>
                    <div>
                      <strong>Telefonische Hotline:</strong>
                      <p><a href="tel:+4920212345678" className="phone-link">+49 202 12345678</a></p>
                      <small>Mo. – Fr. 08:00 – 18:00 Uhr</small>
                    </div>
                  </div>

                  <div className="channel-item">
                    <div className="channel-icon green-bg"><Mail size={20} /></div>
                    <div>
                      <strong>E-Mail Anfragen:</strong>
                      <p><a href="mailto:info@mocd-nextmeasure.de">info@mocd-nextmeasure.de</a></p>
                      <small>Antwort in der Regel innerhalb 2-4 Stunden</small>
                    </div>
                  </div>

                  <div className="channel-item">
                    <div className="channel-icon orange-bg"><Clock size={20} /></div>
                    <div>
                      <strong>Service- & Montagezeiten:</strong>
                      <p>Mo. – Sa. nach Terminvereinbarung</p>
                    </div>
                  </div>
                </div>

                <div className="contact-quick-actions mt-4">
                  <a 
                    href="https://wa.me/4920212345678?text=Hallo%20MOCD%20Nextmeasure,%20ich%20habe%20eine%20Projektanfrage." 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn btn-whatsapp btn-block"
                  >
                    💬 Per WhatsApp schreiben
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Message Form */}
            <div className="contact-form-column">
              <div className="contact-form-card">
                {submitted ? (
                  <div className="contact-success-state">
                    <CheckCircle2 size={48} color="#187A44" />
                    <h3>Nachricht erfolgreich übermittelt!</h3>
                    <p>Vielen Dank für Ihre Nachricht. Unser technischer Berater wird sich in Kürze bei Ihnen melden.</p>
                    <button className="btn btn-primary mt-3" onClick={() => setSubmitted(false)}>
                      Weitere Nachricht senden
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="form-card-title">Schreiben Sie uns eine Nachricht</h3>
                    <p className="form-card-sub">Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen.</p>
                    
                    <form onSubmit={handleSubmit}>
                      <div className="form-grid-2">
                        <div className="form-group">
                          <label>Ihr Name *</label>
                          <input 
                            type="text" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange}
                            placeholder="z.B. Markus Weber"
                            className="form-control"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label>Firma / Hausverwaltung</label>
                          <input 
                            type="text" 
                            name="company" 
                            value={formData.company} 
                            onChange={handleChange}
                            placeholder="z.B. Weber Immobilien"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="form-grid-2">
                        <div className="form-group">
                          <label>E-Mail-Adresse *</label>
                          <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange}
                            placeholder="weber@immo.de"
                            className="form-control"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label>Telefonnummer</label>
                          <input 
                            type="tel" 
                            name="phone" 
                            value={formData.phone} 
                            onChange={handleChange}
                            placeholder="+49 123 456789"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Betreff</label>
                        <select 
                          name="subject" 
                          value={formData.subject} 
                          onChange={handleChange}
                          className="form-control"
                        >
                          <option value="Allgemeine Anfrage">Allgemeine Anfrage</option>
                          <option value="Zählerwechsel / Eichfristen">Zählerwechsel / Eichfristen</option>
                          <option value="Rauchwarnmelder Komplettangebot">Rauchwarnmelder Komplettangebot</option>
                          <option value="Rahmenvertrag für Wohnungsunternehmen">Rahmenvertrag für Wohnungsunternehmen</option>
                          <option value="Technischer Support">Technischer Support</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label>Ihre Nachricht *</label>
                        <textarea 
                          name="message" 
                          rows="4" 
                          value={formData.message} 
                          onChange={handleChange}
                          placeholder="Wie können wir Ihnen weiterhelfen?"
                          className="form-control"
                          required
                        ></textarea>
                      </div>

                      <button type="submit" className="btn btn-primary btn-block btn-lg btn-glow">
                        <Send size={18} />
                        <span>NACHRICHT ABSENDEN</span>
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
