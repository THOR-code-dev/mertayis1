import React from 'react';
import logoImg from '../assets/logoM.jpg';

export default function Footer({ onFilterServices, onSelectCity, onOpenLegal }) {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="row">
          {/* Col 1: Brand & Slogan */}
          <div className="col-lg-4">
            <div className="footer-brand">
              <img src={logoImg} alt="MOCD Nextmeasure GmbH" className="footer-logo" />
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
              <li><a href="#leistungen" onClick={() => onFilterServices('wasser')}>Wasserzähler Montage & Tausch</a></li>
              <li><a href="#leistungen" onClick={() => onFilterServices('waerme')}>Wärmezähler / WMZ Service</a></li>
              <li><a href="#leistungen" onClick={() => onFilterServices('heiz')}>Heizkostenverteiler (Funk)</a></li>
              <li><a href="#rauchwarnmelder">Rauchwarnmelder Komplettpaket</a></li>
              <li><a href="#leistungen" onClick={() => onFilterServices('mess')}>Messdienst & Geräteaufnahme</a></li>
              <li><a href="#leistungen">Nutzerwechsel & Ablesung</a></li>
            </ul>
          </div>

          {/* Col 3: Target Groups */}
          <div className="col-lg-2 col-md-6">
            <h4 className="footer-heading">Zielgruppen</h4>
            <ul className="footer-links">
              <li><a href="#hausverwaltungen">Für Hausverwaltungen</a></li>
              <li><a href="#wohnungsunternehmen">Für Wohnungsunternehmen</a></li>
              <li><a href="#wohnungsunternehmen">Immobilienfonds</a></li>
              <li><a href="#rauchwarnmelder">Gewerbeimmobilien</a></li>
              <li><a href="#deutschlandweit">Deutschlandweiter Service</a></li>
            </ul>
          </div>

          {/* Col 4: Regional SEO Cities */}
          <div className="col-lg-3">
            <h4 className="footer-heading">Städte & Regionen</h4>
            <div className="footer-city-tags">
              {['Köln', 'Düsseldorf', 'Dortmund', 'Essen', 'Wuppertal', 'Frankfurt', 'Stuttgart', 'München', 'Berlin', 'Hamburg'].map(city => (
                <a 
                  key={city} 
                  href="#deutschlandweit" 
                  onClick={() => onSelectCity && onSelectCity(city)}
                >
                  {city}
                </a>
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
            <a href="#impressum" onClick={(e) => { e.preventDefault(); onOpenLegal('impressum'); }}>Impressum</a>
            <a href="#datenschutz" onClick={(e) => { e.preventDefault(); onOpenLegal('datenschutz'); }}>Datenschutzerklärung</a>
            <a href="#agb" onClick={(e) => { e.preventDefault(); onOpenLegal('agb'); }}>AGB (B2B)</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
