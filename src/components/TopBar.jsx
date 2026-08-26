import React from 'react';
import { Phone, Mail } from 'lucide-react';

export default function TopBar() {
  const handlePhoneClick = () => {
    if (window.trackConversion) {
      window.trackConversion('phone_call', 'Header Phone Click', 25);
    }
  };

  const handleEmailClick = () => {
    if (window.trackConversion) {
      window.trackConversion('email_click', 'Header Email Click', 15);
    }
  };

  return (
    <div className="top-bar">
      <div className="container top-bar-inner">
        <div className="top-bar-left">
          <span className="badge-live">
            <span className="pulse-dot"></span> BUNDESWEIT IM EINSATZ
          </span>
          <span className="top-text">Ihr B2B-Partner für Hausverwaltungen & Wohnungsunternehmen</span>
        </div>
        <div className="top-bar-right">
          <a href="tel:+4920212345678" className="top-link" onClick={handlePhoneClick}>
            <Phone size={14} />
            +49 (0) 202 / 123 456 78
          </a>
          <span className="divider-pipe">|</span>
          <a href="mailto:anfrage@mocd-nextmeasure.de" className="top-link" onClick={handleEmailClick}>
            <Mail size={14} />
            anfrage@mocd-nextmeasure.de
          </a>
        </div>
      </div>
    </div>
  );
}
