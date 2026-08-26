import React from 'react';
import { Phone, FileText } from 'lucide-react';

export default function FloatingActionBar({ onOpenOffer }) {
  const handlePhoneClick = () => {
    if (window.trackConversion) {
      window.trackConversion('phone_call', 'Floating Action Phone', 25);
    }
  };

  const handleWaClick = () => {
    if (window.trackConversion) {
      window.trackConversion('whatsapp_click', 'Floating Action WhatsApp', 30);
    }
  };

  return (
    <div className="floating-contact-bar">
      <a 
        href="tel:+4920212345678" 
        className="float-btn float-phone" 
        title="Direkt anrufen"
        onClick={handlePhoneClick}
      >
        <Phone size={18} />
        <span>Anrufen</span>
      </a>

      <a 
        href="https://wa.me/4920212345678?text=Hallo%20MOCD%20Nextmeasure,%20ich%20habe%20eine%20Anfrage%20f%C3%BCr%20ein%20Angebot." 
        target="_blank" 
        rel="noreferrer"
        className="float-btn float-wa" 
        title="WhatsApp Chat"
        onClick={handleWaClick}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2M12.05 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.04 3.68C14.25 3.68 16.31 4.54 17.87 6.1C19.42 7.66 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.05 20.15M16.57 14.45C16.32 14.32 15.11 13.73 14.88 13.65C14.66 13.56 14.5 13.52 14.33 13.77C14.17 14.01 13.69 14.58 13.54 14.75C13.4 14.91 13.25 14.93 13 14.81C12.75 14.68 11.71 14.34 10.47 13.24C9.5 12.38 8.85 11.32 8.73 11.07C8.6 10.82 8.71 10.69 8.84 10.56C8.95 10.45 9.09 10.27 9.22 10.12C9.34 9.97 9.38 9.87 9.46 9.7C9.55 9.54 9.5 9.4 9.44 9.28C9.38 9.15 8.88 7.93 8.68 7.43C8.47 6.94 8.27 7.01 8.12 7C7.98 7 7.81 7 7.65 7C7.48 7 7.22 7.06 6.99 7.31C6.77 7.56 6.13 8.15 6.13 9.37C6.13 10.58 7.02 11.75 7.14 11.91C7.27 12.08 8.88 14.56 11.35 15.63C11.94 15.88 12.39 16.03 12.75 16.15C13.34 16.33 13.88 16.31 14.31 16.24C14.79 16.17 15.78 15.64 15.99 15.06C16.19 14.47 16.19 13.98 16.13 13.87C16.07 13.77 15.91 13.7 15.66 13.58L16.57 14.45Z" />
        </svg>
        <span>WhatsApp</span>
      </a>

      <button className="float-btn float-offer" onClick={() => onOpenOffer('Floating Action Button')}>
        <FileText size={18} />
        <span>Angebot</span>
      </button>
    </div>
  );
}
