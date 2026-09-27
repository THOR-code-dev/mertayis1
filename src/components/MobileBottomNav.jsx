import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Layers, ShieldAlert, FileText, Phone } from 'lucide-react';

export default function MobileBottomNav({ onOpenOffer }) {
  const handlePhoneClick = () => {
    if (window.trackConversion) {
      window.trackConversion('phone_call', 'Mobile Bottom Bar Phone', 25);
    }
  };

  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile Navigation">
      <NavLink 
        to="/" 
        className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
        end
      >
        <Home size={20} className="bottom-nav-icon" />
        <span className="bottom-nav-label">Start</span>
      </NavLink>

      <NavLink 
        to="/leistungen" 
        className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
      >
        <Layers size={20} className="bottom-nav-icon" />
        <span className="bottom-nav-label">Leistungen</span>
      </NavLink>

      <NavLink 
        to="/rauchwarnmelder" 
        className={({ isActive }) => `bottom-nav-item highlight ${isActive ? 'active' : ''}`}
      >
        <div className="bottom-nav-badge-icon">
          <ShieldAlert size={20} />
        </div>
        <span className="bottom-nav-label">Rauchmelder</span>
      </NavLink>

      <NavLink 
        to="/angebot" 
        className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
      >
        <FileText size={20} className="bottom-nav-icon" />
        <span className="bottom-nav-label">Angebot</span>
      </NavLink>

      <a 
        href="tel:+4920212345678" 
        className="bottom-nav-item call-action"
        onClick={handlePhoneClick}
      >
        <div className="bottom-nav-call-btn">
          <Phone size={18} />
        </div>
        <span className="bottom-nav-label">Anrufen</span>
      </a>
    </nav>
  );
}
