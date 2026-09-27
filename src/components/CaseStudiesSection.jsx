import React from 'react';
import { Building2, Star, CheckCircle2, TrendingUp, ShieldCheck, Quote } from 'lucide-react';

export default function CaseStudiesSection() {
  const cases = [
    {
      title: 'Wohnungsgenossenschaft Rheinland eG',
      category: '1.200 WOHNEINHEITEN (KÖLN & DÜSSELDORF)',
      quote: '„Der Serienwechsel von über 2.400 Wasserzählern lief absolut geräuschlos. Dank der vorbildlichen Mieterterminierung hatten wir kaum Nachtermine und die Protokolle lagen am Folgetag digital vor.“',
      author: 'M. Becker, Leiter Bestandsmanagement',
      metrics: [
        { val: '98,4%', lbl: 'Erstterminquote' },
        { val: '2.400+', lbl: 'Zähler getauscht' },
        { val: '0 Tage', lbl: 'Verzug im Zeitplan' }
      ]
    },
    {
      title: 'Schmidt & Partner Hausverwaltung GmbH',
      category: '45 WEG-LIEGENSCHAFTEN (WUPPERTAL & RUHRGEBIET)',
      quote: '„Als Verwalter schätze ich vor allem die rechtssicheren DIN 14676 Prüfberichte. Bei Beiratsversammlungen haben wir alle Fotodokumente sofort griffbereit. Das spart uns unzählige Stunden.“',
      author: 'K. Schmidt, Geschäftsführender Gesellschafter',
      metrics: [
        { val: '100%', lbl: 'Rechtssichere Doku' },
        { val: '380+', lbl: 'Rauchmelder geprüft' },
        { val: '1', lbl: 'Fester Ansprechpartner' }
      ]
    },
    {
      title: 'Immobilienfonds Westfalen Portfolio',
      category: 'FUNK-NACHRÜSTUNG & UVI CONVERSION',
      quote: '„Die Umrüstung auf OMS-Funk-Heizkostenverteiler hat unsere unterjährige Verbrauchsinformation komplett automatisiert. Exzellente Schnittstellenkompatibilität für unser ERP.“',
      author: 'T. Wagner, Portfoliomanager',
      metrics: [
        { val: '100%', lbl: 'UVI-Konformität' },
        { val: '0', lbl: 'Wohnungszutritte nötig' },
        { val: '14 Tage', lbl: 'Projektlaufzeit' }
      ]
    }
  ];

  return (
    <section className="section-wrapper bg-light">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-category">ERFOLGSGESCHICHTEN AUS DER PRAXIS</span>
          <h2 className="section-title">Wie wir Immobilienverwaltungen entlasten</h2>
          <p className="section-subtitle">
            Erfahren Sie, wie Kunden aus ganz Deutschland mit MOCD Nextmeasure Zeit sparen, Kosten senken und Haftungsrisiken eliminieren.
          </p>
        </div>

        <div className="cases-grid">
          {cases.map((item, idx) => (
            <div key={idx} className="case-card-modern">
              <div className="case-card-header">
                <span className="case-cat-pill">{item.category}</span>
                <div className="case-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#FFD100" color="#FFD100" />
                  ))}
                </div>
              </div>

              <h3 className="case-card-title">{item.title}</h3>
              
              <div className="case-quote-wrap">
                <Quote size={24} className="case-quote-icon" />
                <p className="case-quote-text">{item.quote}</p>
                <span className="case-quote-author">{item.author}</span>
              </div>

              <div className="case-metrics-row">
                {item.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="case-metric-box">
                    <strong>{m.val}</strong>
                    <small>{m.lbl}</small>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
