import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const routeTitles = {
  '/': 'MOCD Nextmeasure GmbH | Messdienstleistungen, Zählertechnik & Rauchwarnmelder',
  '/leistungen': 'Leistungen & Zählertechnik | MOCD Nextmeasure GmbH',
  '/rauchwarnmelder': 'Rauchwarnmelder Hub nach DIN 14676 | MOCD Nextmeasure GmbH',
  '/hausverwaltungen': 'Lösungen für Hausverwaltungen & WEG | MOCD Nextmeasure GmbH',
  '/wohnungsunternehmen': 'Für Wohnungsunternehmen & Großbestände | MOCD Nextmeasure GmbH',
  '/standorte': 'Deutschlandweite Standorte & Städte | MOCD Nextmeasure GmbH',
  '/ueber-uns': 'Über uns & Qualitätsversprechen | MOCD Nextmeasure GmbH',
  '/angebot': 'B2B-Angebot & Konfigurator | MOCD Nextmeasure GmbH',
  '/kontakt': 'Kontakt & Unternehmenszentrale | MOCD Nextmeasure GmbH'
};

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    const newTitle = routeTitles[pathname] || 'MOCD Nextmeasure GmbH';
    document.title = newTitle;
  }, [pathname]);

  return null;
}
