import React from 'react';
import { Globe, Layers, Smartphone, CheckCircle, UserCheck } from 'lucide-react';

export default function UspSection() {
  const usps = [
    {
      num: '01',
      title: 'Deutschlandweit',
      desc: 'Zentrale Auftragskoordination in allen Bundesländern – ohne Qualitätsverlust und ohne Schnittstellenprobleme.',
      icon: <Globe size={24} />,
      wrapClass: 'navy-wrap'
    },
    {
      num: '02',
      title: 'Flexibel',
      desc: 'Egal ob Einzelaufträge, Kleinreparaturen, Turnuswechsel oder Rollouts für tausende Liegenschaften.',
      icon: <Layers size={24} />,
      wrapClass: 'cyan-wrap'
    },
    {
      num: '03',
      title: 'Digital',
      desc: 'Volldigitalisierte Auftragsplanung, mobile Monteur-App und lückenlose Foto- und Barcode-Dokumentation.',
      icon: <Smartphone size={24} />,
      wrapClass: 'green-wrap'
    },
    {
      num: '04',
      title: 'Zuverlässig',
      desc: 'Pünktliche Einhaltung von Fristen, transparente Status-Updates und qualitätsgeprüfte Montage nach DIN & MID.',
      icon: <CheckCircle size={24} />,
      wrapClass: 'orange-wrap'
    },
    {
      num: '05',
      title: 'Ein Ansprechpartner',
      desc: 'Ein persönlicher Betreuer, der Ihre Objekte kennt, kurze Wege garantiert und Rückfragen direkt klärt.',
      icon: <UserCheck size={24} />,
      wrapClass: 'red-wrap'
    }
  ];

  return (
    <section className="section-wrapper bg-white" id="vorteile">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-category">IHRE ENTSCHEIDENDEN VORTEILE</span>
          <h2 className="section-title">Warum MOCD Nextmeasure?</h2>
          <p className="section-subtitle">
            5 Gründe, warum führende Verwalter und Immobilienunternehmen auf uns vertrauen.
          </p>
        </div>

        <div className="usp-grid-5">
          {usps.map((usp) => (
            <div key={usp.num} className="usp-card">
              <div className="usp-number">{usp.num}</div>
              <div className={`usp-icon-wrap ${usp.wrapClass}`}>
                {usp.icon}
              </div>
              <h3 className="usp-title">{usp.title}</h3>
              <p className="usp-desc">{usp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
