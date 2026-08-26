import React from 'react';
import { Users, CheckCircle, ArrowRight } from 'lucide-react';

export default function HausverwaltungenSection({ onOpenOffer }) {
  return (
    <section className="section-wrapper bg-white" id="hausverwaltungen">
      <div className="container">
        <div className="row align-center">
          <div className="col-lg-6">
            <div className="section-tag blue-tag">SPEZIELL FÜR HAUSVERWALTUNGEN</div>
            <h2 className="section-title">Maximale Entlastung für Ihre Immobilienverwaltung</h2>
            <p className="section-lead">
              <strong>“MOCD Nextmeasure unterstützt Hausverwaltungen bei der technischen Betreuung ihrer Immobilien.”</strong>
            </p>

            <p className="text-muted">
              Hausverwalter stehen unter hohem Zeitdruck: Mietvertragswechsel, Eichfristen, Eigentümerversammlungen und Mieterbeschwerden. Mit MOCD Nextmeasure haben Sie einen verlässlichen Partner an Ihrer Seite, der die technische Durchführung von A bis Z autonom und transparent abwickelt.
            </p>

            <div className="key-message-box">
              <div className="key-message-icon">🤝</div>
              <div>
                <h4 className="key-message-title">Ein Ansprechpartner für Ihre technischen Aufträge</h4>
                <p className="key-message-desc">
                  Kein Koordinationsaufwand mit 5 verschiedenen Handwerksbetrieben. Wir bündeln alle Gewerke von Wasser, Wärme, HKV bis Rauchwarnmelder.
                </p>
              </div>
            </div>

            <div className="hv-services-list">
              <div className="hv-item">
                <span className="hv-dot"></span>
                <span><strong>Wasser- & Wärmezähler:</strong> Termingerechte Montage & Turnuswechsel</span>
              </div>
              <div className="hv-item">
                <span className="hv-dot"></span>
                <span><strong>Heizkostenverteiler:</strong> Heizkörperaufnahme & Funk-Nachrüstung</span>
              </div>
              <div className="hv-item">
                <span className="hv-dot"></span>
                <span><strong>Rauchwarnmelder:</strong> DIN-Prüfung & lückenloser Prüfbericht</span>
              </div>
              <div className="hv-item">
                <span className="hv-dot"></span>
                <span><strong>Digitale Protokolle:</strong> Direkter PDF/CSV Export für Ihre Verwalter-Software</span>
              </div>
            </div>

            <div className="mt-4">
              <button className="btn btn-primary btn-lg" onClick={() => onOpenOffer('Hausverwaltung Betreuung')}>
                Angebot für Hausverwaltungen anfordern
              </button>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="hv-workflow-card">
              <h3 className="workflow-title">Wie wir Hausverwaltungen entlasten:</h3>
              
              <div className="step-process">
                <div className="step-card">
                  <div className="step-badge">1</div>
                  <div className="step-content">
                    <strong>Auftrag digital übermitteln</strong>
                    <p>Senden Sie uns Ihre Objektlisten, Mieterwechsel oder Turnus-Anfragen per E-Mail oder Portal.</p>
                  </div>
                </div>

                <div className="step-card">
                  <div className="step-badge">2</div>
                  <div className="step-content">
                    <strong>Autonome Mieter-Terminierung</strong>
                    <p>Wir kontaktieren Mieter und Bewohner mit rechtskonformen Aushängen und Terminkarten.</p>
                  </div>
                </div>

                <div className="step-card">
                  <div className="step-badge">3</div>
                  <div className="step-content">
                    <strong>Fachgerechte Montage & Ablesung</strong>
                    <p>Geschulte Monteure führen die Arbeiten sauber, pünktlich und nach allen Normen durch.</p>
                  </div>
                </div>

                <div className="step-card">
                  <div className="step-badge">4</div>
                  <div className="step-content">
                    <strong>Fertiges Digital-Protokoll erhalten</strong>
                    <p>Sie erhalten alle Zählerstände, Seriennummern und Fotobeweise direkt in Ihr Postfach.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
