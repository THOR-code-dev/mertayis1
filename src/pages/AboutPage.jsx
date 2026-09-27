import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ShieldCheck, 
  Target, 
  Award, 
  Users2, 
  Zap, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import logoImg from '../assets/logoM.jpg';

export default function AboutPage({ onOpenOffer }) {
  return (
    <div className="page-wrapper about-page">
      {/* Header Banner */}
      <section className="page-header-banner">
        <div className="container text-center">
          <span className="badge-pill-cyan">UNTERNEHMENSPROFIL</span>
          <h1 className="page-title">Über MOCD Nextmeasure GmbH</h1>
          <p className="page-subtitle">
            Ihr verlässlicher, digitaler und herstellerunabhängiger Dienstleister für Messdienstleistungen, Zählertechnik und Rauchwarnmelder in ganz Deutschland.
          </p>
        </div>
      </section>

      {/* Company Philosophy & Mission */}
      <section className="section-wrapper bg-white">
        <div className="container">
          <div className="about-intro-grid">
            <div className="about-intro-text">
              <span className="section-category">UNSERE PHILOSOPHIE</span>
              <h2 className="section-title">Messen. Montieren. Dokumentieren.</h2>
              <p className="about-lead">
                Die MOCD Nextmeasure GmbH wurde mit einer klaren Vision gegründet: Die oft veralteten, trägen und intransparenten Prozesse klassischer Messdienste grundlegend zu digitalisieren und Verwaltern höchste Zuverlässigkeit zu garantieren.
              </p>
              <p className="about-desc">
                Ob Einzelliegenschaft mit 10 Wohneinheiten oder großvolumiges Wohnungsunternehmen mit tausenden Zählern – wir behandeln jedes Projekt mit höchster technischer Präzision nach deutschem Mess- und Eichrecht sowie den anerkannten DIN-Normen.
              </p>

              <div className="about-values-list">
                <div className="about-val-item">
                  <CheckCircle2 size={20} color="#00A3E0" />
                  <div>
                    <strong>100% Herstellerunabhängig:</strong>
                    <span>Wir wählen stets die wirtschaftlichste und beste Gerätelösung für Ihre Liegenschaft.</span>
                  </div>
                </div>
                <div className="about-val-item">
                  <CheckCircle2 size={20} color="#00A3E0" />
                  <div>
                    <strong>Transparente Festpreise:</strong>
                    <span>Keine versteckten Nebenkosten oder intransparente Abrechnungsschlüssel.</span>
                  </div>
                </div>
                <div className="about-val-item">
                  <CheckCircle2 size={20} color="#00A3E0" />
                  <div>
                    <strong>Digitaler Fotobeweis:</strong>
                    <span>Jeder Zählerstand und Montageort wird mit Zeitstempel und Geotag lückenlos belegt.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-intro-card">
              <div className="about-card-badge">
                <img src={logoImg} alt="MOCD Nextmeasure GmbH" className="about-logo-preview" />
                <div className="about-stats-summary">
                  <div className="ab-stat">
                    <strong>50.000+</strong>
                    <span>Betreute Zähler & Melder</span>
                  </div>
                  <div className="ab-stat">
                    <strong>16</strong>
                    <span>Bundesländer im Einsatz</span>
                  </div>
                  <div className="ab-stat">
                    <strong>&lt; 24h</strong>
                    <span>B2B Reaktionszeit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Certifications */}
      <section className="section-wrapper bg-light">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-category">QUALITÄT & RECHTSSICHERHEIT</span>
            <h2 className="section-title">Unsere Zertifizierungen & Standards</h2>
            <p className="section-subtitle">
              Wir arbeiten streng nach den gesetzlichen Vorschriften und anerkannten Regeln der Technik.
            </p>
          </div>

          <div className="cert-grid">
            <div className="cert-card">
              <div className="cert-icon-wrap"><Award size={32} color="#0C3E7C" /></div>
              <h3>DIN 14676 Zertifiziert</h3>
              <p>Zertifizierte Fachkräfte für Planung, Einbau und Instandhaltung von Rauchwarnmeldern nach DIN 14676-1 und DIN 14676-2.</p>
            </div>

            <div className="cert-card">
              <div className="cert-icon-wrap"><ShieldCheck size={32} color="#00A3E0" /></div>
              <h3>MessEG & MID Konformität</h3>
              <p>Ausschließlicher Einsatz von europäisch zugelassener MID-Messtechnik mit vorschriftsmäßiger Eichfristenüberwachung.</p>
            </div>

            <div className="cert-card">
              <div className="cert-icon-wrap"><Target size={32} color="#187A44" /></div>
              <h3>OMS / wM-Bus Standard</h3>
              <p>Zukunftssichere Open Metering System (OMS) Funk-Infrastruktur zur Erfüllung der EED und HeizkostenV.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-wrapper bg-navy text-white text-center">
        <div className="container">
          <h2 className="cta-banner-title">Möchten Sie MOCD Nextmeasure als Partner gewinnen?</h2>
          <p className="cta-banner-sub">
            Fordern Sie noch heute unverbindliche Unterlagen oder ein persönliches B2B-Konditionenblatt an.
          </p>
          <div className="cta-banner-actions">
            <button className="btn btn-primary btn-lg btn-glow" onClick={() => onOpenOffer('About Page CTA')}>
              <Zap size={18} />
              <span>B2B ANGEBOT ANFORDERN</span>
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
