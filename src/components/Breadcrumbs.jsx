import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const routeNames = {
  '/leistungen': 'Leistungen & Zählertechnik',
  '/rauchwarnmelder': 'Rauchwarnmelder Hub (DIN 14676)',
  '/hausverwaltungen': 'Für Hausverwaltungen',
  '/wohnungsunternehmen': 'Für Wohnungsunternehmen',
  '/standorte': 'Deutschlandweite Standorte',
  '/ueber-uns': 'Über MOCD Nextmeasure',
  '/angebot': 'B2B Angebotsrechner',
  '/kontakt': 'Kontakt & Zentrale'
};

export default function Breadcrumbs() {
  const location = useLocation();
  const rawPath = location.pathname.toLowerCase().replace(/\/+$/, '');

  // Hide on homepage or root paths
  if (!rawPath || rawPath === '' || rawPath === '/' || rawPath.endsWith('/mertayis1')) {
    return null;
  }

  // Match corresponding route
  const matchedKey = Object.keys(routeNames).find(key => rawPath === key || rawPath.endsWith(key));

  if (!matchedKey) {
    return null;
  }

  const currentName = routeNames[matchedKey];

  return (
    <nav className="breadcrumbs-nav" aria-label="Breadcrumb">
      <div className="container">
        <ol className="breadcrumbs-list">
          <li className="breadcrumb-item">
            <Link to="/" className="breadcrumb-link">
              <Home size={14} />
              <span>Startseite</span>
            </Link>
          </li>
          <li className="breadcrumb-separator">
            <ChevronRight size={13} />
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <span>{currentName}</span>
          </li>
        </ol>
      </div>
    </nav>
  );
}
