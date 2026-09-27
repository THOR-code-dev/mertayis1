import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ChevronDown, FileText, Menu, X, Phone, MessageSquare } from 'lucide-react';
import logoImg from '../assets/logoM.jpg';

export default function Navbar({ onOpenOffer }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => {
    setMobileOpen(false);
  };

  return (
    <header className="site-header" id="navbar">
      <div className="container header-inner">
        <Link to="/" className="brand-logo" onClick={closeMobile} aria-label="MOCD Nextmeasure Startseite">
          <img src={logoImg} alt="MOCD Nextmeasure GmbH" className="logo-img" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="main-nav">
          <ul className="nav-links">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                end
              >
                Startseite
              </NavLink>
            </li>

            <li className="dropdown-parent">
              <NavLink 
                to="/leistungen" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Leistungen <ChevronDown size={14} />
              </NavLink>
              <div className="dropdown-menu">
                <Link to="/leistungen" className="dropdown-item">
                  <span className="dot cyan-dot"></span>
                  <div>
                    <strong>Wasserzähler</strong>
                    <small>Ablesung, Montage, Turnustausch & Funk</small>
                  </div>
                </Link>
                <Link to="/leistungen" className="dropdown-item">
                  <span className="dot orange-dot"></span>
                  <div>
                    <strong>Wärmezähler / WMZ</strong>
                    <small>Montage, Eichfristen & Fühler</small>
                  </div>
                </Link>
                <Link to="/leistungen" className="dropdown-item">
                  <span className="dot green-dot"></span>
                  <div>
                    <strong>Heizkostenverteiler</strong>
                    <small>Elektronisch 2-Fühler, Funk & UVI</small>
                  </div>
                </Link>
                <Link to="/leistungen" className="dropdown-item">
                  <span className="dot blue-dot"></span>
                  <div>
                    <strong>Messdienstleistungen</strong>
                    <small>Liegenschaftsaufnahme & Service</small>
                  </div>
                </Link>
              </div>
            </li>

            <li>
              <NavLink 
                to="/rauchwarnmelder" 
                className={({ isActive }) => `nav-link highlight-pill ${isActive ? 'active' : ''}`}
              >
                🚨 Rauchwarnmelder
              </NavLink>
            </li>

            <li className="dropdown-parent">
              <span className="nav-link cursor-pointer">
                Zielgruppen <ChevronDown size={14} />
              </span>
              <div className="dropdown-menu">
                <Link to="/hausverwaltungen" className="dropdown-item">
                  <span className="dot navy-dot"></span>
                  <div>
                    <strong>Für Hausverwaltungen</strong>
                    <small>WEG- & Mietverwaltungen, Terminservice</small>
                  </div>
                </Link>
                <Link to="/wohnungsunternehmen" className="dropdown-item">
                  <span className="dot cyan-dot"></span>
                  <div>
                    <strong>Für Wohnungsunternehmen</strong>
                    <small>Großbestände, ERP-Import & Rahmenverträge</small>
                  </div>
                </Link>
              </div>
            </li>

            <li>
              <NavLink 
                to="/standorte" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Deutschlandweit
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/ueber-uns" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Über uns
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/kontakt" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Kontakt
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Action Button */}
        <div className="header-actions">
          <Link to="/angebot" className="btn btn-primary btn-glow">
            <FileText size={16} />
            <span>ANGEBOT ANFORDERN</span>
          </Link>
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
            <li>
              <NavLink to="/" onClick={closeMobile} end>
                🏠 Startseite
              </NavLink>
            </li>
            <li>
              <NavLink to="/leistungen" onClick={closeMobile}>
                ⚙️ Leistungen Übersicht
              </NavLink>
            </li>
            <li>
              <NavLink to="/rauchwarnmelder" onClick={closeMobile} className="text-red-highlight">
                🚨 Rauchwarnmelder Hub
              </NavLink>
            </li>
            <li>
              <NavLink to="/hausverwaltungen" onClick={closeMobile}>
                🏢 Für Hausverwaltungen
              </NavLink>
            </li>
            <li>
              <NavLink to="/wohnungsunternehmen" onClick={closeMobile}>
                🏙️ Für Wohnungsunternehmen
              </NavLink>
            </li>
            <li>
              <NavLink to="/standorte" onClick={closeMobile}>
                📍 Deutschlandweit & Städte
              </NavLink>
            </li>
            <li>
              <NavLink to="/ueber-uns" onClick={closeMobile}>
                ℹ️ Über MOCD Nextmeasure
              </NavLink>
            </li>
            <li>
              <NavLink to="/kontakt" onClick={closeMobile}>
                📞 Kontakt & Anfahrt
              </NavLink>
            </li>
          </ul>

          <div className="mobile-drawer-cta">
            <Link 
              to="/angebot" 
              className="btn btn-primary btn-block" 
              onClick={closeMobile}
            >
              JETZT ANGEBOT ANFORDERN
            </Link>
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
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
