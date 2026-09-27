import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search, Sparkles } from 'lucide-react';

export default function FaqInteractive() {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const faqs = [
    {
      category: 'rwm',
      q: 'Was beinhaltet das Rauchwarnmelder-Komplettangebot nach DIN 14676?',
      a: 'Unser Komplettpaket umfasst die Lieferung von hochwertigen 10-Jahres-Q-Label-Rauchmeldern, die fachgerechte Montage durch nach DIN 14676 zertifizierte Fachkräfte, die lückenlose Fotodokumentation mit Standortplan sowie die jährliche Wartung und rechtssichere Prüfberichterstellung für Ihre Versicherungsunterlagen.'
    },
    {
      category: 'eich',
      q: 'Welche gesetzlichen Eichfristen gelten für Wasser- und Wärmezähler in Deutschland?',
      a: 'Gemäß MessEG und MessEV gelten folgende gesetzliche Fristen: Kaltwasserzähler (6 Jahre), Warmwasserzähler (6 Jahre) und Wärmemengenzähler (5 Jahre). Nach Ablauf der Frist dürfen die Geräte nicht mehr für die rechtssichere Betriebskostenabrechnung genutzt werden.'
    },
    {
      category: 'verwalter',
      q: 'Wie entlastet MOCD Nextmeasure Hausverwaltungen im Tagesgeschäft?',
      a: 'Wir übernehmen die komplette Mieterankündigung mit fristgerechten Hausaushängen und Terminkarten, wickeln Erst- und Nachtermine selbstständig ab und liefern Ihnen gebündelte, digitale Fotoprotokolle sowie fertige Datenimporte für Ihre Verwalter-Software (z.B. CSV, Datanorm, ERP-Schnittstellen).'
    },
    {
      category: 'funk',
      q: 'Was bedeutet OMS-Funk und unterjährige Verbrauchsinformation (UVI)?',
      a: 'Mit modernen Open Metering System (OMS) Funk-Zählern und Funk-HKVs können die Zählerstände stichtagsgenau aus dem Treppenhaus oder per Gateway ausgelesen werden. Das Betreten der Mietwohnungen entfällt komplett, und Sie erfüllen mühelos die gesetzliche Pflicht zur monatlichen Bereitstellung der Verbrauchsinformationen (UVI).'
    },
    {
      category: 'verwalter',
      q: 'Gibt es feste Rahmenkonditionen für größere Liegenschaften oder Portfolios?',
      a: 'Ja, für Wohnungsunternehmen, Genossenschaften und größere Hausverwaltungen bieten wir gestaffelte Rahmenverträge mit verbindlichen Festpreisen, festen Projektleitern und definierten Service-Level-Agreements (SLA) an.'
    },
    {
      category: 'deutschland',
      q: 'In welchen Regionen bietet MOCD Nextmeasure seinen Montageservice an?',
      a: 'Wir sind deutschlandweit in allen 16 Bundesländern im Einsatz. Gesteuert aus unserer Zentrale in Wuppertal und unserem bundesweiten Servicenetzwerk betreuen wir Liegenschaften in allen Metropolen wie Köln, Düsseldorf, Frankfurt, Stuttgart, München, Berlin, Hamburg und Leipzig.'
    }
  ];

  const filteredFaqs = faqs.filter(item => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const matchesQuery = item.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="faq-interactive-wrapper">
      <div className="section-header text-center">
        <span className="section-category">HÄUFIG GESTELLTE FRAGEN</span>
        <h2 className="section-title">Antworten auf die wichtigsten B2B-Fragen</h2>
        <p className="section-subtitle">
          Alles Wissenswerte zu Eichfristen, DIN 14676 Rauchmelderpflicht, Funk-Auslesung und unserem bundesweiten Montageservice.
        </p>
      </div>

      {/* Search & Category Filter Bar */}
      <div className="faq-search-bar-box">
        <div className="faq-search-input-wrap">
          <Search size={18} className="faq-search-icon" />
          <input 
            type="text"
            placeholder="Suchbegriff eingeben (z.B. Eichfrist, Rauchmelder, Funk, Kosten)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="faq-search-field"
          />
        </div>

        <div className="faq-filter-pills">
          <button 
            className={`faq-pill-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            Alle Fragen ({faqs.length})
          </button>
          <button 
            className={`faq-pill-btn ${activeCategory === 'rwm' ? 'active' : ''}`}
            onClick={() => setActiveCategory('rwm')}
          >
            🚨 Rauchwarnmelder
          </button>
          <button 
            className={`faq-pill-btn ${activeCategory === 'eich' ? 'active' : ''}`}
            onClick={() => setActiveCategory('eich')}
          >
            💧 Eichfristen & Zähler
          </button>
          <button 
            className={`faq-pill-btn ${activeCategory === 'verwalter' ? 'active' : ''}`}
            onClick={() => setActiveCategory('verwalter')}
          >
            🏢 Hausverwaltungen
          </button>
          <button 
            className={`faq-pill-btn ${activeCategory === 'funk' ? 'active' : ''}`}
            onClick={() => setActiveCategory('funk')}
          >
            📡 Funk & UVI
          </button>
        </div>
      </div>

      {/* Accordion List */}
      <div className="faq-accordion-container">
        {filteredFaqs.length === 0 ? (
          <div className="faq-no-results">
            <p>Keine passenden Fragen für Ihre Suchanfrage gefunden.</p>
          </div>
        ) : (
          filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`faq-item-modern ${isOpen ? 'open' : ''}`}
                onClick={() => setOpenIndex(isOpen ? null : idx)}
              >
                <div className="faq-item-question">
                  <span className="faq-q-icon">?</span>
                  <span className="faq-q-text">{faq.q}</span>
                  <ChevronDown size={18} className={`faq-arrow-icon ${isOpen ? 'rotate' : ''}`} />
                </div>
                {isOpen && (
                  <div className="faq-item-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
