import React, { useState } from 'react';
import { 
  ShieldAlert, 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  FileCheck, 
  BatteryCharging, 
  Radio, 
  ArrowRight, 
  Zap, 
  PhoneCall, 
  AlertTriangle,
  FileText
} from 'lucide-react';

export default function RwmPage({ onOpenOffer }) {
  const [selectedPackage, setSelectedPackage] = useState('full');

  return (
    <div className="page-wrapper rwm-page">
      {/* Header Banner */}
      <section className="page-header-banner rwm-header-bg">
        <div className="container text-center">
          <span className="badge-pill-fire">
            🚨 DIN 14676 ZERTIFIZIERTER KOMPLETTSERVICE
          </span>
          <h1 className="page-title">Rauchwarnmelder Komplettlösung & Enthaftung</h1>
          <p className="page-subtitle">
            10-Jahres-Qualitätsrauchmelder (Q-Label), fachgerechte Montage, lückenlose Fotodokumentation und jährliche revisionssichere Prüfung für Hausverwaltungen & Wohnungsunternehmen.
          </p>
          <div className="banner-cta-row mt-4">
            <button className="btn btn-primary btn-lg btn-glow" onClick={() => onOpenOffer('RWM Page Hero')}>
              <Zap size={18} />
              <span>ANGEBOT FÜR LIEGENSCHAFTEN ANFORDERN</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3 Säulen der Enthaftung */}
      <section className="section-wrapper bg-white">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-category">RECHTSSICHERHEIT FÜR VERWALTER</span>
            <h2 className="section-title">Die 3 Säulen der vollständigen Verwalter-Enthaftung</h2>
            <p className="section-subtitle">
              Als Hausverwalter oder Eigentümer haften Sie im Brandfall für die ordnungsgemäße Installation und Funktionsfähigkeit der Rauchmelder. MOCD Nextmeasure übernimmt die vollständige operative und dokumentarische Verantwortung.
            </p>
          </div>

          <div className="rwm-pillars-grid">
            <div className="rwm-pillar-card">
              <div className="pillar-num">1</div>
              <div className="pillar-icon red-bg">
                <Award size={28} />
              </div>
              <h3>Geprüfte Q-Label Melder</h3>
              <p>
                Wir montieren ausschließlich Premium-Rauchwarnmelder mit dem unabhängigen <strong>Q-Label Prüfzeichen</strong> und fest verbauter 10-Jahres-Lithium-Batterie gegen vorzeitigen Ausfall.
              </p>
              <ul className="pillar-checklist">
                <li><CheckCircle2 size={15} color="#D7282F" /> Fehlalarm-Reduktion durch Sensorik</li>
                <li><CheckCircle2 size={15} color="#D7282F" /> 10 Jahre Herstellergarantie</li>
                <li><CheckCircle2 size={15} color="#D7282F" /> Schutz vor Insekten & Verschmutzung</li>
              </ul>
            </div>

            <div className="rwm-pillar-card">
              <div className="pillar-num">2</div>
              <div className="pillar-icon cyan-bg">
                <FileCheck size={28} />
              </div>
              <h3>DIN 14676 Fachmontage</h3>
              <p>
                Unsere Monteure sind zertifizierte Fachkräfte für Rauchwarnmelder nach DIN 14676. Wir prüfen Raumgeometrien, Mindestabstände und Deckenunterzüge.
              </p>
              <ul className="pillar-checklist">
                <li><CheckCircle2 size={15} color="#00A3E0" /> Exakter 50cm Wandabstand</li>
                <li><CheckCircle2 size={15} color="#00A3E0" /> Schraub- oder zertifizierte Klebemontage</li>
                <li><CheckCircle2 size={15} color="#00A3E0" /> Erfassung von Raumtyp & Deckenhöhe</li>
              </ul>
            </div>

            <div className="rwm-pillar-card">
              <div className="pillar-num">3</div>
              <div className="pillar-icon green-bg">
                <ShieldCheck size={28} />
              </div>
              <h3>Lückenlose Prüfprotokolle</h3>
              <p>
                Jeder montierte und gewartete Melder wird mit Seriennummer, Raumbezeichnung und hochauflösendem Fotobeweis digital erfasst und archiviert.
              </p>
              <ul className="pillar-checklist">
                <li><CheckCircle2 size={15} color="#187A44" /> Gerichtsverwertbare Dokumentation</li>
                <li><CheckCircle2 size={15} color="#187A44" /> Jährliche Inspektionsberichte für Versicherer</li>
                <li><CheckCircle2 size={15} color="#187A44" /> Direkter PDF-Export für Eigentümer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware & Funk-Technologie */}
      <section className="section-wrapper bg-light">
        <div className="container">
          <div className="rwm-tech-layout">
            <div className="rwm-tech-info">
              <span className="section-category">HARDWARE & TECHNIK</span>
              <h2 className="section-title">Moderne Meldertechnik für jede Liegenschaft</h2>
              <p className="section-subtitle">
                Wählen Sie zwischen klassischen Stand-Alone Meldern mit Vor-Ort-Wartung oder modernen Funk-Rauchwarnmeldern mit stichtagsgenauer Ferninspektion.
              </p>

              <div className="rwm-tech-types">
                <div className="tech-type-card">
                  <div className="tech-type-header">
                    <BatteryCharging size={24} color="#0C3E7C" />
                    <h4>Typ A & B: Stand-Alone mit Vor-Ort-Prüfung</h4>
                  </div>
                  <p>
                    Wirtschaftliche Lösung für kleinere Liegenschaften. Jährliche Inspektion der Raucheintrittsöffnungen und Funktionsprüfung durch zertifizierte Techniker vor Ort.
                  </p>
                </div>

                <div className="tech-type-card highlight">
                  <div className="tech-type-header">
                    <Radio size={24} color="#00A3E0" />
                    <h4>Typ C: Funk-Ferninspektion (OMS / Walk-by)</h4>
                  </div>
                  <p>
                    Maximale Effizienz: Der Melder führt selbstständig 14-tägige Sensor-, Batterie- und Hindernistests durch. Die Daten werden via Funk im Treppenhaus oder Gateway empfangen – <strong>ohne Betreten der Wohnungen!</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="rwm-tech-specs-box">
              <div className="specs-card-inner">
                <span className="specs-card-badge">GERÄTE-STANDARDS</span>
                <h3>Technische Highlights</h3>
                <ul className="specs-card-list">
                  <li><strong>Zertifizierung:</strong> DIN EN 14604 & DIN 14676</li>
                  <li><strong>Batterielebensdauer:</strong> 10 Jahre fest versiegelt</li>
                  <li><strong>Alarmpegel:</strong> &gt; 85 dB(A) in 3m Entfernung</li>
                  <li><strong>Stummschaltung:</strong> 10 Min. temporäre Deaktivierung</li>
                  <li><strong>Demontage-Schutz:</strong> Mechanische Verriegelung</li>
                  <li><strong>Hindernis-Sensor:</strong> Ultraschall / Optische Umfeld-Prüfung</li>
                </ul>
                <button className="btn btn-primary btn-block mt-3" onClick={() => onOpenOffer('RWM Tech Specs')}>
                  Gerätemuster anfordern
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Pakete Übersicht */}
      <section className="section-wrapper bg-white">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-category">TRANSPARENTE B2B PREISMODELLE</span>
            <h2 className="section-title">Unsere Rauchwarnmelder Service-Pakete</h2>
            <p className="section-subtitle">
              Passgenau für WEG-Gemeinschaften, Mietverwaltungen und Wohnungsunternehmen.
            </p>
          </div>

          <div className="rwm-packages-grid">
            {/* Paket 1: Turnustausch */}
            <div className="pkg-card">
              <div className="pkg-header">
                <h3>10-Jahres Turnustausch</h3>
                <span className="pkg-tag">EINMALIGE MONTAGE</span>
              </div>
              <p className="pkg-desc">Ideal bei Ablauf der 10-jährigen Nutzungsdauer von Altmeldern.</p>
              <ul className="pkg-features">
                <li><CheckCircle2 size={16} color="#0C3E7C" /> Demontage & fachgerechte Entsorgung Altmelder</li>
                <li><CheckCircle2 size={16} color="#0C3E7C" /> Lieferung neuer 10-Jahres Q-Label Melder</li>
                <li><CheckCircle2 size={16} color="#0C3E7C" /> DIN 14676 zertifizierte Montage</li>
                <li><CheckCircle2 size={16} color="#0C3E7C" /> Digitales Alt/Neu-Fotoprotokoll</li>
              </ul>
              <button className="btn btn-outline-navy btn-block" onClick={() => onOpenOffer('RWM Paket: Turnustausch')}>
                Paket anfragen
              </button>
            </div>

            {/* Paket 2: Komplett & Enthaftung (Empfohlen) */}
            <div className="pkg-card popular">
              <div className="pkg-badge-popular">MEISTGEWÄHLT</div>
              <div className="pkg-header">
                <h3>Full-Service & Enthaftung</h3>
                <span className="pkg-tag">ALL-INCLUSIVE</span>
              </div>
              <p className="pkg-desc">Rundum-Sorglos-Paket für Verwalter mit jährlicher Wartung.</p>
              <ul className="pkg-features">
                <li><CheckCircle2 size={16} color="#00A3E0" /> 10-Jahres Q-Label Premium Melder</li>
                <li><CheckCircle2 size={16} color="#00A3E0" /> DIN 14676 Montage & Dokumentation</li>
                <li><CheckCircle2 size={16} color="#00A3E0" /> Jährliche Prüfung & Prüfbericht</li>
                <li><CheckCircle2 size={16} color="#00A3E0" /> Kostenloser Geräteaustausch bei Defekt</li>
                <li><CheckCircle2 size={16} color="#00A3E0" /> Mieter-Terminservice inklusive</li>
              </ul>
              <button className="btn btn-primary btn-block btn-glow" onClick={() => onOpenOffer('RWM Paket: Full-Service')}>
                Jetzt Angebot anfordern
              </button>
            </div>

            {/* Paket 3: Funk-Ferninspektion */}
            <div className="pkg-card">
              <div className="pkg-header">
                <h3>Funk-Ferninspektion (Typ C)</h3>
                <span className="pkg-tag">OHNE WOHNUNGSZUTRITT</span>
              </div>
              <p className="pkg-desc">Höchste Mieterzufriedenheit durch automatisierte Funkferntests.</p>
              <ul className="pkg-features">
                <li><CheckCircle2 size={16} color="#187A44" /> OMS-Funk-Rauchwarnmelder</li>
                <li><CheckCircle2 size={16} color="#187A44" /> Automatische 14-tägige Eigendiagnose</li>
                <li><CheckCircle2 size={16} color="#187A44" /> Auslesung aus dem Treppenhaus (Walk-by)</li>
                <li><CheckCircle2 size={16} color="#187A44" /> Keine Mieter-Terminkoordination nötig</li>
              </ul>
              <button className="btn btn-outline-green btn-block" onClick={() => onOpenOffer('RWM Paket: Funk Typ C')}>
                Paket anfragen
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Rechtliche Hinweise & FAQ */}
      <section className="section-wrapper bg-light">
        <div className="container">
          <div className="rwm-law-box">
            <div className="law-box-header">
              <AlertTriangle size={24} color="#D7282F" />
              <h3>Gesetzliche Rauchmelderpflicht in allen 16 Bundesländern</h3>
            </div>
            <p>
              Gemäß den Landesbauordnungen (LBO) aller 16 Bundesländer müssen in allen Wohnungen Schlafräume, Kinderzimmer sowie Flure, die als Rettungswege dienen, mit mindestens einem Rauchwarnmelder ausgestattet sein. Der Eigentümer bzw. bevollmächtigte Verwalter steht in der Verkehrssicherungspflicht.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-wrapper bg-navy text-white text-center">
        <div className="container">
          <h2 className="cta-banner-title">Rechtssicherheit für Ihren Immobilienbestand sichern</h2>
          <p className="cta-banner-sub">
            Fordern Sie jetzt ein kostenloses und unverbindliches Festpreisangebot für Ihre Wohnanlagen an.
          </p>
          <div className="cta-banner-actions">
            <button className="btn btn-primary btn-lg btn-glow" onClick={() => onOpenOffer('RWM Bottom CTA')}>
              <Zap size={18} />
              <span>B2B FESTPREIS-ANGEBOT ANFORDERN</span>
            </button>
            <a href="tel:+4920212345678" className="btn btn-outline-white btn-lg">
              <PhoneCall size={18} />
              <span>DIREKT ANRUFEN: +49 202 12345678</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
