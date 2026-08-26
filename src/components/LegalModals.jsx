import React from 'react';
import { X } from 'lucide-react';

export default function LegalModals({ activeModal, onClose }) {
  if (!activeModal) return null;

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-card modal-card-large" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Schließen">
          <X size={18} />
        </button>

        {activeModal === 'impressum' && (
          <div className="modal-body-legal">
            <h2>Impressum</h2>
            <p><strong>Angaben gemäß § 5 TMG:</strong></p>
            <p>
              <strong>MOCD Nextmeasure GmbH</strong><br />
              Musterstraße 100<br />
              42103 Wuppertal<br />
              Deutschland
            </p>
            <p>
              <strong>Vertreten durch:</strong><br />
              Die Geschäftsführung
            </p>
            <p>
              <strong>Kontakt:</strong><br />
              Telefon: +49 (0) 202 / 123 456 78<br />
              E-Mail: anfrage@mocd-nextmeasure.de<br />
              Website: www.mocd-nextmeasure.de
            </p>
            <p>
              <strong>Registereintrag:</strong><br />
              Eintragung im Handelsregister.<br />
              Registergericht: Amtsgericht Wuppertal<br />
              Registernummer: HRB XXXXX
            </p>
            <p>
              <strong>Umsatzsteuer-ID:</strong><br />
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE XXXXXXXXX
            </p>
          </div>
        )}

        {activeModal === 'datenschutz' && (
          <div className="modal-body-legal">
            <h2>Datenschutzerklärung (DSGVO)</h2>
            <p>Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Nachfolgend informieren wir Sie über die Erhebung und Verarbeitung personenbezogener Daten auf unserer Webseite.</p>
            
            <h4>1. Verantwortliche Stelle</h4>
            <p>MOCD Nextmeasure GmbH, Musterstraße 100, 42103 Wuppertal, E-Mail: datenschutz@mocd-nextmeasure.de</p>
            
            <h4>2. B2B Angebotsanfragen & Kontaktformulare</h4>
            <p>Die von Ihnen im Rahmen einer Anfrage übermittelten Daten (Firma, Name, E-Mail, Telefonnummer, Liegenschaftsdaten) werden zur Bearbeitung des Anliegens und für geschäftliche B2B-Konditionsangebote nach Art. 6 Abs. 1 lit. b DSGVO verarbeitet.</p>
            
            <h4>3. Google Ads Conversion Tracking & Google Tag Manager</h4>
            <p>Auf dieser Website verwenden wir bei Einwilligung Google Ads Conversion Tracking zur statistischen Messung unserer Werbekampagnen.</p>
          </div>
        )}

        {activeModal === 'agb' && (
          <div className="modal-body-legal">
            <h2>Allgemeine Geschäftsbedingungen (B2B)</h2>
            <p>Für alle Dienstleistungen der MOCD Nextmeasure GmbH gegenüber Unternehmern, Hausverwaltungen und juristischen Personen des öffentlichen Rechts gelten die nachstehenden Bestimmungen für Messdienstleistungen, Eichfristen-Turnusmontagen und Rauchwarnmelder-Wartung.</p>
          </div>
        )}
      </div>
    </div>
  );
}
