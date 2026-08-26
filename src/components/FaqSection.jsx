import React, { useState } from 'react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Wie läuft der Austausch von Wasser- und Wärmezählern bei MOCD Nextmeasure ab?',
      a: 'Wir übernehmen die gesamte Abwicklung: Von der Überprüfung der bestehenden Eichfristen über die rechtzeitige Mieterbenachrichtigung (Aushänge & Terminkarten) bis hin zur fachgerechten Montage durch geschulte Monteure. Sämtliche Zählernummern, Stände und Ausbaufotos werden digital erfasst und Ihnen zur Verfügung gestellt.'
    },
    {
      q: 'Sind Ihre Monteure für Rauchwarnmelder nach DIN 14676 zertifiziert?',
      a: 'Ja. Unsere Fachkräfte für Rauchwarnmelder sind nach DIN 14676-1 (Planung, Einbau, Betrieb und Instandhaltung) zertifiziert. Dies garantiert Ihnen als Verwalter oder Eigentümer volle Rechtssicherheit und Enthaftung im Schadensfall gegenüber Versicherungen und Behörden.'
    },
    {
      q: 'Können Sie auch sehr große Bestände (über 1.000 Einheiten) übernehmen?',
      a: 'Absolut. Durch unser strukturiertes Servicepartner-Netzwerk und digitale Dispositionssoftware können wir zeitgleich mehrere Liegenschaften in ganz Deutschland betreuen. Wir erstellen für Wohnungsunternehmen maßgeschneiderte Rollout-Pläne.'
    },
    {
      q: 'In welchem Format erhalten wir die Mess- und Montageprotokolle?',
      a: 'Sie erhalten alle Daten als strukturierte PDF-Protokolle mit Zeitstempeln und Fotodokumentation sowie auf Wunsch als CSV- oder Excel-Datensatz für den einfachen Import in Ihre Immobilienverwaltungs-Software.'
    },
    {
      q: 'Wie schnell erhalten wir nach einer Anfrage unser B2B-Angebot?',
      a: 'In der Regel kalkulieren und versenden wir Ihr maßgeschneidertes B2B-Angebot innerhalb von 24 Stunden nach Eingang Ihrer Liegenschaftsdaten.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="section-wrapper bg-white" id="faq">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-category">HÄUFIG GESTELLTE FRAGEN</span>
          <h2 className="section-title">Fragen & Antworten für Verwalter</h2>
          <p className="section-subtitle">Alles Wissenswerte über unsere Abläufe, Eichfristen und Dienstleistungen.</p>
        </div>

        <div className="faq-accordion-wrap">
          {faqs.map((f, i) => (
            <div key={i} className={`faq-item ${openIndex === i ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => toggleFaq(i)}>
                <span>{f.q}</span>
                <span className="faq-icon">{openIndex === i ? '−' : '+'}</span>
              </button>
              {openIndex === i && (
                <div className="faq-answer">
                  <p>{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
