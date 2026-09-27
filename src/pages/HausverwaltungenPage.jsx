import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  CheckCircle2, 
  FileText, 
  ShieldCheck, 
  Users, 
  PhoneCall, 
  Zap, 
  Clock, 
  FileCheck2,
  Calendar
} from 'lucide-react';

export default function HausverwaltungenPage({ onOpenOffer }) {
  return (
    <div className="page-wrapper audience-page">
      {/* Header Banner */}
      <section className="page-header-banner">
        <div className="container text-center">
          <span className="badge-pill-navy">WEG- & MIETVERWALTUNGEN</span>
          <h1 className="page-title">Messdienst & Rauchmelder für Hausverwaltungen</h1>
          <p className="page-subtitle">
            Wir nehmen Ihnen die operative Last ab: Zuverlässige Mieterkommunikation, termingerechter Zählerwechsel und lückenlose Protokolle für Beiräte und Eigentümerversammlungen.
          </p>
          <div className="banner-cta-row mt-4">
            <button className="btn btn-primary btn-lg btn-glow" onClick={() => onOpenOffer('Hausverwaltungen Page Hero')}>
              <Zap size={18} />
              <span>INDIVIDUELLES ANGEBOT ANFORDERN</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pain Points vs Our Solutions */}
      <section className="section-wrapper bg-white">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-category">VERWALTER-ALLTAG ERLEICHTERN</span>
            <h2 className="section-title">Warum Hausverwaltungen auf MOCD Nextmeasure setzen</h2>
            <p className="section-subtitle">
              Zählerwechsel und Rauchmelderwartung bedeuten oft hohen Koordinationsaufwand, Mieterbeschwerden und Termineskalationen. Unser digitaler Prozess löst diese Probleme von Grund auf.
            </p>
          </div>

          <div className="pain-solution-grid">
            <div className="pain-card">
              <h3 className="pain-title">Typische Hürden im Verwalteralltag</h3>
              <ul className="pain-list">
                <li>❌ Unzuverlässige Mieter-Ersttermine und zeitraubende Nachtermine</li>
                <li>❌ Unklare handschriftliche Ablese- und Montagezettel</li>
                <li>❌ Streitigkeiten über Zählerstände bei Mieterwechseln</li>
                <li>❌ Unvollständige Nachweise für Versicherungen bei Brandschäden</li>
                <li>❌ Wechselnde Ansprechpartner bei anonymen Großkonzernen</li>
              </ul>
            </div>

            <div className="solution-card">
              <h3 className="solution-title">Die MOCD Nextmeasure Lösung</h3>
              <ul className="solution-list">
                <li><CheckCircle2 size={18} color="#187A44" /> <strong>Hohe Antreffquote:</strong> Frühzeitige, mehrsprachige Terminkarten & SMS-Erinnerungen</li>
                <li><CheckCircle2 size={18} color="#187A44" /> <strong>100% Digitales Fotoprotokoll:</strong> Sofortige PDF-Nachweise mit Geotag & Zeitstempel</li>
                <li><CheckCircle2 size={18} color="#187A44" /> <strong>Revisionssicher:</strong> Klare Belege für WEG-Abrechnungen & Beiratsprüfungen</li>
                <li><CheckCircle2 size={18} color="#187A44" /> <strong>Vollständige Enthaftung:</strong> Zertifizierte Fachmontage nach DIN 14676</li>
                <li><CheckCircle2 size={18} color="#187A44" /> <strong>Fester Projektleiter:</strong> Direkte Durchwahl ohne lästige Warteschleifen</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Schritte zur perfekten Liegenschaftsbetreuung */}
      <section className="section-wrapper bg-light">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-category">OPERATIVER ABLAUF</span>
            <h2 className="section-title">In 4 Schritten zu rechtssicheren Liegenschaften</h2>
          </div>

          <div className="workflow-steps-grid">
            <div className="workflow-card">
              <div className="wf-num">01</div>
              <h4>Liegenschaftsübergabe</h4>
              <p>Sie senden uns Bestandsdaten, Zählerlisten oder bisherige Abrechnungsdaten per E-Mail oder Upload.</p>
            </div>
            <div className="workflow-card">
              <div className="wf-num">02</div>
              <h4>Terminierung & Ankündigung</h4>
              <p>Wir übernehmen die fristgerechte Ankündigung im Hausflur und bei den Mietern gemäß BGB.</p>
            </div>
            <div className="workflow-card">
              <div className="wf-num">03</div>
              <h4>Fachgerechte Montage</h4>
              <p>Geschulte Monteure tauschen Zähler & Melder aus, plombieren und fotografieren jeden Arbeitsschritt.</p>
            </div>
            <div className="workflow-card">
              <div className="wf-num">04</div>
              <h4>Digitales Protokoll</h4>
              <p>Sie erhalten gebündelte PDF-Prüfberichte und Zählerlisten fertig aufbereitet für Ihre Software.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-wrapper bg-navy text-white text-center">
        <div className="container">
          <h2 className="cta-banner-title">Möchten Sie Ihre Liegenschaften unkompliziert betreuen lassen?</h2>
          <p className="cta-banner-sub">
            Senden Sie uns eine Liegenschaftsanfrage – wir erstellen innerhalb von 24 Stunden Ihr persönliches B2B-Konditionenblatt.
          </p>
          <div className="cta-banner-actions">
            <button className="btn btn-primary btn-lg btn-glow" onClick={() => onOpenOffer('Hausverwaltungen CTA')}>
              <Zap size={18} />
              <span>ANGEBOT FÜR VERWALTER ANFORDERN</span>
            </button>
            <Link to="/kontakt" className="btn btn-outline-white btn-lg">
              <span>KONTAKT AUFNEHMEN</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
