import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logoM.jpg';

export default function Footer({ onOpenLegal }) {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="row">
          {/* Col 1: Brand & Slogan */}
          <div className="col-lg-4">
            <div className="footer-brand">
              <Link to="/">
                <img src={logoImg} alt="MOCD Nextmeasure GmbH" className="footer-logo" />
              </Link>
              <p className="footer-slogan">
                <strong>Messen. Montieren. Dokumentieren.</strong><br />
                Deutschlandweit. Zuverlässig. Digital.
              </p>
              <p className="footer-text">
                Ihr spezialisierter B2B Partner für Messdienstleistungen, Eichfristen-Management und Rauchwarnmelder nach DIN 14676 für die deutsche Immobilienwirtschaft.
              </p>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="col-lg-3 col-md-6">
            <h4 className="footer-heading">Leistungen</h4>
            <ul className="footer-links">
              <li><Link to="/leistungen">Wasserzähler Montage & Tausch</Link></li>
              <li><Link to="/leistungen">Wärmezähler / WMZ Service</Link></li>
              <li><Link to="/leistungen">Heizkostenverteiler (Funk)</Link></li>
              <li><Link to="/rauchwarnmelder">Rauchwarnmelder Komplettpaket</Link></li>
              <li><Link to="/leistungen">Messdienst & Geräteaufnahme</Link></li>
              <li><Link to="/angebot">Individuelles B2B Angebot</Link></li>
            </ul>
          </div>

          {/* Col 3: Target Groups */}
          <div className="col-lg-2 col-md-6">
            <h4 className="footer-heading">Zielgruppen</h4>
            <ul className="footer-links">
              <li><Link to="/hausverwaltungen">Für Hausverwaltungen</Link></li>
              <li><Link to="/wohnungsunternehmen">Für Wohnungsunternehmen</Link></li>
              <li><Link to="/wohnungsunternehmen">Immobilienfonds</Link></li>
              <li><Link to="/rauchwarnmelder">Gewerbeimmobilien</Link></li>
              <li><Link to="/standorte">Deutschlandweiter Service</Link></li>
              <li><Link to="/ueber-uns">Über unser Team</Link></li>
            </ul>
          </div>

          {/* Col 4: Regional SEO Cities */}
          <div className="col-lg-3">
            <h4 className="footer-heading">Städte & Regionen</h4>
            <div className="footer-city-tags">
              {['Köln', 'Düsseldorf', 'Dortmund', 'Essen', 'Wuppertal', 'Frankfurt', 'Stuttgart', 'München', 'Berlin', 'Hamburg'].map(city => (
                <Link 
                  key={city} 
                  to="/standorte"
                >
                  {city}
                </Link>
              ))}
            </div>
            <div className="footer-badge-box">
              <span>🇩🇪 Bundesweiter Einsatz mit digitaler Steuerung</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} MOCD Nextmeasure GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="legal-links">
            <button type="button" className="btn-legal-link" onClick={() => onOpenLegal('impressum')}>Impressum</button>
            <button type="button" className="btn-legal-link" onClick={() => onOpenLegal('datenschutz')}>Datenschutzerklärung</button>
            <button type="button" className="btn-legal-link" onClick={() => onOpenLegal('agb')}>AGB (B2B)</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
