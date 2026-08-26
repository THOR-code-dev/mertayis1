import React from 'react';

export default function AboutSection() {
  return (
    <section className="section-wrapper bg-light" id="ueber-uns">
      <div className="container">
        <div className="row align-center">
          <div className="col-lg-5">
            <div className="about-card-visual">
              <div className="about-logo-wrapper">
                <img src="/logoM.jpg" alt="MOCD Nextmeasure Logo" className="about-logo-img" />
              </div>
              <div className="about-stats-badge">
                <strong>Zuverlässig. Digital. Deutschlandweit.</strong>
                <span>Ihr Messdienst-Spezialist</span>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="about-content">
              <span className="section-category">ÜBER MOCD NEXTMEASURE GMBH</span>
              <h2 className="section-title">Moderne Zählertechnik & Messdienstleistungen mit digitalem Vorsprung</h2>
              
              <p className="about-lead">
                Die <strong>MOCD Nextmeasure GmbH</strong> ist ein modernes, zukunftsorientiertes Unternehmen im Bereich der Messdienstleistungen und technischen Gebäudeausstattung für die deutsche Immobilienwirtschaft.
              </p>

              <p className="text-muted">
                Wir verbinden handwerkliche Fachkompetenz mit modernen digitalen Prozessen. Unser Ziel ist es, Hausverwaltungen und Wohnungsgesellschaften von zeitintensiven Routineaufgaben zu befreien und eine lückenlose, manipulationssichere und rechtskonforme Erfassung aller Verbrauchs- und Sicherheitsdaten zu gewährleisten.
              </p>

              <div className="about-highlights-grid">
                <div className="about-hl">
                  <div className="hl-check">✔</div>
                  <div>
                    <strong>Zukunftssichere Infrastruktur</strong>
                    <p>Bereit für Smart Metering, OMS-Funk und unterjährige Verbrauchsinformationen (UVI).</p>
                  </div>
                </div>
                <div className="about-hl">
                  <div className="hl-check">✔</div>
                  <div>
                    <strong>Haftungssicherheit für Verwalter</strong>
                    <p>Rechtskonforme Montage und Wartung nach DIN 14676 und gesetzlichen Eichfristen.</p>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <a href="#kontakt" className="btn btn-primary">
                  Mit uns in Kontakt treten
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
