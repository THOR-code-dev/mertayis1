import React, { useState } from 'react';
import { ChevronDown, FileText, Menu, X, Phone } from 'lucide-react';
import logoImg from '../assets/logoM.jpg';

export default function Navbar({ onOpenOffer, onFilterServices }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (serviceType = null) => {
    setMobileOpen(false);
    if (serviceType && onFilterServices) {
      onFilterServices(serviceType);
    }
  };

  return (
    <header className="site-header" id="navbar">
      <div className="container header-inner">
        <a href="#home" className="brand-logo" onClick={() => handleNavClick()}>
          <img src={logoImg} alt="MOCD Nextmeasure GmbH Logo" className="logo-img" />
          <div className="logo-badge-text">
            <span className="logo-subtext">Messdienstleistungen · Zählertechnik · Rauchwarnmelder</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="main-nav">
          <ul className="nav-links">
            <li><a href="#home" className="nav-link active">Startseite</a></li>
            <li className="dropdown-parent">
              <a href="#leistungen" className="nav-link">
                Leistungen <ChevronDown size={14} />
              </a>
              <div className="dropdown-menu">
                <a href="#leistungen" onClick={() => handleNavClick('wasser')} className="dropdown-item">
                  <span className="dot cyan-dot"></span>
                  <div>
                    <strong>Wasserzähler</strong>
                    <small>Ablesung, Montage, Austausch & Doku</small>
                  </div>
                </a>
                <a href="#leistungen" onClick={() => handleNavClick('waerme')} className="dropdown-item">
                  <span className="dot orange-dot"></span>
                  <div>
                    <strong>Wärmezähler / WMZ</strong>
                    <small>Montage, Eichung, Austausch & Funk</small>
                  </div>
                </a>
                <a href="#leistungen" onClick={() => handleNavClick('heiz')} className="dropdown-item">
                  <span className="dot green-dot"></span>
                  <div>
                    <strong>Heizkostenverteiler</strong>
                    <small>Elektronisch, Funk & Ablesung</small>
                  </div>
                </a>
                <a href="#leistungen" onClick={() => handleNavClick('mess')} className="dropdown-item">
                  <span className="dot blue-dot"></span>
                  <div>
                    <strong>Messdienstleistungen</strong>
                    <small>Geräteaufnahme, Nutzerwechsel & Service</small>
                  </div>
                </a>
              </div>
            </li>
            <li><a href="#rauchwarnmelder" className="nav-link highlight-pill">🚨 Rauchwarnmelder</a></li>
            <li><a href="#hausverwaltungen" className="nav-link">Für Hausverwaltungen</a></li>
            <li><a href="#wohnungsunternehmen" className="nav-link">Für Wohnungsunternehmen</a></li>
            <li><a href="#deutschlandweit" className="nav-link">Deutschlandweit</a></li>
            <li><a href="#ueber-uns" className="nav-link">Über uns</a></li>
            <li><a href="#kontakt" className="nav-link">Kontakt</a></li>
          </ul>
        </nav>

        {/* Action Button */}
        <div className="header-actions">
          <button className="btn btn-primary btn-glow" onClick={() => onOpenOffer('Header Button')}>
            <FileText size={16} />
            <span>ANGEBOT ANFORDERN</span>
          </button>
          <button 
            className="mobile-toggle" 
            onClick={() => setMobileOpen(!mobileOpen)} 
            aria-label="Menü umschalten"
          >
            {mobileOpen ? <X size={24} color="#0C3E7C" /> : <Menu size={24} color="#0C3E7C" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="mobile-menu-drawer open">
          <ul className="mobile-nav-list">
            <li><a href="#home" onClick={() => handleNavClick()}>Startseite</a></li>
            <li><a href="#leistungen" onClick={() => handleNavClick()}>Leistungen Übersicht</a></li>
            <li><a href="#rauchwarnmelder" onClick={() => handleNavClick()}>🚨 Rauchwarnmelder Komplettangebot</a></li>
            <li><a href="#hausverwaltungen" onClick={() => handleNavClick()}>Für Hausverwaltungen</a></li>
            <li><a href="#wohnungsunternehmen" onClick={() => handleNavClick()}>Für Wohnungsunternehmen</a></li>
            <li><a href="#deutschlandweit" onClick={() => handleNavClick()}>Deutschlandweiter Service & Städte</a></li>
            <li><a href="#ueber-uns" onClick={() => handleNavClick()}>Über MOCD Nextmeasure</a></li>
            <li><a href="#kontakt" onClick={() => handleNavClick()}>Kontakt & Anfahrt</a></li>
          </ul>
          <div className="mobile-drawer-cta">
            <button className="btn btn-primary btn-block" onClick={() => { setMobileOpen(false); onOpenOffer('Mobile Drawer'); }}>
              JETZT ANGEBOT ANFORDERN
            </button>
            <div className="mobile-quick-contacts">
              <a href="tel:+4920212345678" className="mobile-call-btn">
                📞 Jetzt Anrufen
              </a>
              <a 
                href="https://wa.me/4920212345678?text=Hallo%20MOCD%20Nextmeasure,%20ich%20habe%20eine%20Projektanfrage." 
                target="_blank" 
                rel="noreferrer" 
                className="mobile-whatsapp-btn"
              >
                💬 WhatsApp B2B
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
