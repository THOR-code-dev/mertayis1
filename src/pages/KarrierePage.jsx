import React, { useState, useRef } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Euro, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Send, 
  UploadCloud, 
  FileText, 
  X, 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  Award, 
  Wrench, 
  Truck, 
  GraduationCap, 
  Calendar, 
  HeartHandshake, 
  ArrowRight,
  Sparkles,
  Check
} from 'lucide-react';

const OPEN_POSITIONS = [
  {
    id: 'monteur-zaehlertechnik',
    title: 'Servicetechniker / Monteur für Zählertechnik (m/w/d)',
    department: 'Montage & Technik',
    category: 'montage',
    locations: 'NRW (Wuppertal, Köln, Düsseldorf, Ruhrgebiet) & Bundesweit',
    type: 'Vollzeit (Unbefristet)',
    salary: '3.400 € – 4.600 € / Monat + Auslöse & Prämien',
    badge: 'Dringend gesucht',
    badgeColor: 'badge-pill-orange',
    description: 'Verantwortlich für die fachgerechte Montage, den Turnustausch und die Inbetriebnahme von Wasserzählern, Wärmezählern (WMZ) und Funk-Heizkostenverteilern in Liegenschaften der Wohnungswirtschaft.',
    tasks: [
      'Montage und Turnustausch von Kalt- und Warmwasserzählern',
      'Installation von Ultraschall- und mechanischen Wärmezählern (WMZ)',
      'Montage und Programmierung moderner Funk-Heizkostenverteiler (OMS / Walk-by)',
      'Digitale Fotodokumentation und Datenerfassung via iPad/Tablet',
      'Freundlicher und professioneller Umgang mit Mietern und Eigentümern vor Ort'
    ],
    requirements: [
      'Ausbildung im Bereich SHK (Sanitär-, Heizungs- und Klimatechnik) oder vergleichbare handwerkliche Erfahrung',
      'Auch versierte Quereinsteiger mit praktischer Erfahrung im Rohrleitungsbau/Installation willkommen',
      'Führerschein der Klasse B zwingend erforderlich',
      'Zuverlässigkeit, Pünktlichkeit und kundenorientiertes Auftreten',
      'Gute Deutschkenntnisse in Wort und Schrift für die Mieterkommunikation'
    ],
    benefits: [
      'Modernes Service-Fahrzeug mit Premium-Ausstattung (Hilti Werkzeuge, Tankkarte)',
      'Ausstattung mit Apple iPad für papierlose Auftragsabwicklung',
      'Überdurchschnittliche Vergütung + steuerfreie Spesen / Verpflegungsmehraufwand',
      '30 Tage Erholungsurlaub & geregelte Arbeitszeiten (Kein 24/7 Notdienst-Stress)',
      'Kostenlose Weiterbildungen (Eichrecht, DIN 14676 Fachkraft)'
    ]
  },
  {
    id: 'fachkraft-rauchwarnmelder',
    title: 'Fachkraft für Rauchwarnmelder nach DIN 14676 (m/w/d)',
    department: 'Montage & Technik',
    category: 'montage',
    locations: 'Wuppertal, Düsseldorf, Köln, Frankfurt am Main & Umgebung',
    type: 'Vollzeit oder Teilzeit',
    salary: '2.900 € – 3.800 € / Monat + Leistungsboni',
    badge: 'Sofortstart möglich',
    badgeColor: 'badge-pill-red',
    description: 'Verantwortlich für die normgerechte Erstinstallation, jährliche Sicht- und Funktionsprüfung sowie lückenlose Fotodokumentation von 10-Jahres-Rauchwarnmeldern in Mehrfamilienhäusern.',
    tasks: [
      'Fachgerechte Montage von Qualitäts-Rauchwarnmeldern (Klebepad & Bohrmontage nach DIN 14676-1)',
      'Durchführung der jährlichen Wartung, Akustikprüfung und Sensorinspektion',
      'Rechtssichere digitale Protokollierung via mobiler Prüf-App',
      'Identifikation von Bedarfen und Tausch veralteter oder defekter Melder'
    ],
    requirements: [
      'Zertifikat als geprüfte Fachkraft für Rauchwarnmelder nach DIN 14676 von Vorteil (Kosten werden bei Fehlen zu 100% von uns übernommen!)',
      'Saubere und sorgfältige Arbeitsweise im bewohnten Wohnraum',
      'Führerschein Klasse B',
      'Freundliches und souveränes Auftreten gegenüber Mietern'
    ],
    benefits: [
      'Eigener Firmenwagen auch für den Weg zur Arbeit',
      'Vollständige Übernahme der Zertifizierungskosten für DIN 14676',
      'Feste Tourenplanung ohne unnötige Leerlaufzeiten',
      'Attraktive Prämien bei überdurchschnittlicher Montagequalität',
      'Krisensicherer Arbeitsplatz durch gesetzliche Rauchmelderpflicht'
    ]
  },
  {
    id: 'disponent-einsatzplaner',
    title: 'Disponent / Einsatzplaner für den Außendienst (m/w/d)',
    department: 'Büro & Disposition',
    category: 'disposition',
    locations: 'Zentrale Wuppertal (mit Home-Office-Möglichkeit)',
    type: 'Vollzeit (Unbefristet)',
    salary: '3.300 € – 4.400 € / Monat',
    badge: 'Wachstumsteam',
    badgeColor: 'badge-pill-cyan',
    description: 'Das Herzstück unserer Einsatzlogistik: Sie koordinieren unsere bundesweiten Montageteams, optimieren Touren digital und sichern den reibungslosen Ablauf für unsere B2B-Kunden.',
    tasks: [
      'Touren- und Routenoptimierung für bundesweit tätige Servicetechniker',
      'Koordination von Montageterminen mit Hausverwaltungen und Liegenschaftsverwaltern',
      'Mieterankündigungen und Terminkoordination gemäß gesetzlicher Vorlauffristen',
      'Schnittstelle zwischen Kunden, Außendiensttechnikern und Qualitätsmanagement',
      'Überwachung der termingerechten Auftragsausführung und Dokumentationsprüfung'
    ],
    requirements: [
      'Kaufmännische Ausbildung (z. B. Spedition, Groß- und Außenhandel, Büromanagement) oder vergleichbare Erfahrung in der Disposition',
      'Erfahrung in der Koordination von Handwerkern oder Servicetechnikern von Vorteil',
      'Sicherer Umgang mit gängigen Dispositions- und ERP-Systemen sowie MS Office',
      'Ausgeprägtes Organisationstalent, Stressresistenz und lösungsorientierte Denkweise',
      'Hervorragende Kommunikationsfähigkeit in deutscher Sprache'
    ],
    benefits: [
      'Modernes Büro in Wuppertal mit ergonomischem Arbeitsplatz & neuester Hardware',
      'Flexible Arbeitszeitmodelle & bis zu 2 Tage Home-Office pro Woche nach Einarbeitung',
      'Kostenlose Heißgetränke, Obst und Teamevents',
      'Unbefristeter Arbeitsvertrag in einer krisensicheren Wachstumsbranche',
      'Flache Hierarchien und direkte Kommunikationswege mit der Geschäftsleitung'
    ]
  },
  {
    id: 'key-account-vertrieb',
    title: 'Key Account Manager B2B – Wohnungswirtschaft (m/w/d)',
    department: 'Vertrieb & Key Account',
    category: 'vertrieb',
    locations: 'NRW / Deutschlandweit (Remote / Außendienst)',
    type: 'Vollzeit',
    salary: 'Festgehalt + ungedeckelte B2B-Provision (Ziel: 65.000 € – 90.000 €)',
    badge: 'Hohe Provision',
    badgeColor: 'badge-pill-green',
    description: 'Gewinnung und strategische Betreuung von Hausverwaltungen, Wohnungsunternehmen und Immobiliengesellschaften für Rahmenverträge im Bereich Messdienst und RWM.',
    tasks: [
      'Aktive Ansprache und Akquise von Hausverwaltungen (WEG / Mietverwaltung) und Wohnungsunternehmen',
      'Vorstellung unserer digitalen Messdienstkonzepte und DIN 14676 Rauchmelderlösungen',
      'Ausarbeitung maßgeschneiderter Angebote und Verhandlung von Rahmenverträgen',
      'Teilnahme an Messen, Branchentreffen (BVI, VDIV) und Netzwerkveranstaltungen',
      'Langfristiger Beziehungsaufbau als vertrauensvoller B2B-Partner'
    ],
    requirements: [
      'Erfolgreiche Vertriebserfahrung im B2B-Bereich, idealerweise in der Immobilien- oder Gebäudetechnikbranche',
      'Verhandlungsgeschick, professionelles Auftreten und Abschlussstärke',
      'Selbstständige, strukturierte Arbeitsweise und Reisebereitschaft',
      'Führerschein Klasse B'
    ],
    benefits: [
      'Repräsentativer Firmenwagen der Mittelklasse (z.B. VW Passat / Audi A4) auch zur uneingeschränkten privaten Nutzung',
      'Attraktives Fixgehalt plus transparente, ungedeckelte Erfolgsprovision',
      'Modernste Vertriebsausstattung (iPhone, MacBook / ThinkPad)',
      'Großer Freiraum bei der Gestaltung des Vertriebsgebiets'
    ]
  },
  {
    id: 'quereinsteiger-montage',
    title: 'Quereinsteiger im handwerklichen Montagebereich (m/w/d)',
    department: 'Quereinsteiger & Nachwuchs',
    category: 'quereinsteiger',
    locations: 'Wuppertal, Ruhrgebiet, Köln, Düsseldorf & bundesweite Montage',
    type: 'Vollzeit (Umfassende Einarbeitung)',
    salary: '2.800 € – 3.500 € / Monat + Spesen & Prämien',
    badge: '100% Einarbeitung',
    badgeColor: 'badge-pill-cyan',
    description: 'Keine Vorkenntnisse in der Zählertechnik? Kein Problem! Wir bilden Sie in unserer internen Praxis-Schulung umfassend aus und finanzieren Ihre Zertifizierungen.',
    tasks: [
      'Unterstützung erfahrener Obermonteure bei Zählertäuschen und Montagen',
      'Austausch und Montage von Rauchwarnmeldern in Wohnungen',
      'Erfassung von Zählerständen und digitale Fotoerfassung per Tablet',
      'Lager- und Materialvorbereitung für die anstehenden Touren'
    ],
    requirements: [
      'Handwerkliches Geschick, Sorgfalt und Lernbereitschaft',
      'Gepflegtes Erscheinungsbild und höfliche Umgangsformen',
      'Führerschein Klasse B (Pkw)',
      'Zuverlässigkeit und Teamgeist'
    ],
    benefits: [
      'Volle Bezahlung ab dem 1. Tag der Einarbeitung',
      '100% Kostenübernahme für die offizielle DIN 14676 Fachkraft-Zertifizierung',
      'Klare Karriereperspektive zum eigenständigen Servicetechniker',
      'Hochwertige Arbeitskleidung (Engelbert Strauss) und Markenwerkzeug gestellt',
      'Stabiler Arbeitsplatz mit unbefristeter Festanstellung nach Probezeit'
    ]
  }
];

const BENEFITS_LIST = [
  {
    icon: <Truck size={28} className="benefit-icon cyan" />,
    title: 'Firmenwagen & Premium-Equipment',
    desc: 'Voll ausgestatteter moderner Servicetransporter, Markenwerkzeug (Hilti / Bosch Pro), Tankkarte und Apple iPad für papierloses Arbeiten.'
  },
  {
    icon: <Euro size={28} className="benefit-icon green" />,
    title: 'Überdurchschnittliches Gehalt + Boni',
    desc: 'Pünktliche, faire Bezahlung, steuerfreie Auslöse / Spesen, Jahresgratifikationen und Leistungsprämien für saubere Qualitätsarbeit.'
  },
  {
    icon: <Clock size={28} className="benefit-icon orange" />,
    title: 'Geregelte Arbeitszeiten & 30 Tage Urlaub',
    desc: 'Kein Wochenend- oder 24/7 Notdienst-Stress! Klare Planung, planbarer Feierabend und 30 Tage bezahlter Jahresurlaub.'
  },
  {
    icon: <GraduationCap size={28} className="benefit-icon navy" />,
    title: '100% Bezahlte Zertifizierungen',
    desc: 'Wir investieren in Ihre Zukunft: DIN 14676 Fachkraft, Zählertechnik, Eichfristen-Seminare und Produktschulungen auf Firmenkosten.'
  },
  {
    icon: <HeartHandshake size={28} className="benefit-icon red" />,
    title: 'Familiäres, faires Betriebsklima',
    desc: 'Bei uns sind Sie keine bloße Nummer. Kurze Dienstwege, direkte Ansprechpartner, respektvoller Ton und regelmäßige Teamevents.'
  },
  {
    icon: <ShieldCheck size={28} className="benefit-icon cyan" />,
    title: 'Zukunftssichere Festanstellung',
    desc: 'Gesetzlich vorgeschriebene Zählerwechsel und Rauchwarnmelder-Prüfungen sorgen für dauerhaft gefüllte Auftragsbücher.'
  }
];

const APPLICATION_STEPS = [
  {
    step: '01',
    title: '90-Sekunden Blitzbewerbung',
    desc: 'Kein langes Anschreiben erforderlich. Füllen Sie einfach unser Kurzformular aus oder laden Sie Ihren Lebenslauf hoch.'
  },
  {
    step: '02',
    title: 'Telefonisches Erstgespräch',
    desc: 'Innerhalb von 48 Stunden rufen wir Sie für ein kurzes, entspanntes 15-Minuten-Telefonat an, um erste Fragen zu klären.'
  },
  {
    step: '03',
    title: 'Persönliches Kennenlernen',
    desc: 'Ein unkompliziertes Treffen vor Ort in Wuppertal oder per Video-Call. Gerne können Sie auch einen Tag bei unseren Monteuren reinschnuppern.'
  },
  {
    step: '04',
    title: 'Vertrag & Willkommen im Team',
    desc: 'Schnelle Zusage, unbefristeter Arbeitsvertrag, gründliche Einarbeitung und vollständige Ausstattung für einen erfolgreichen Start!'
  }
];

const CAREER_FAQS = [
  {
    q: 'Benötige ich zwingend eine abgeschlossene Ausbildung als SHK-Anlagenmechaniker?',
    a: 'Für die Position als Servicetechniker ist eine SHK-Ausbildung ideal, aber keine absolute Pflicht. Wenn Sie langjährige Erfahrung in der Sanitär-/Heizungsmontage oder als versierter Quereinsteiger im Rohrleitungsbau mitbringen, freuen wir uns ausdrücklich über Ihre Bewerbung!'
  },
  {
    q: 'Werden Reisezeiten und Übernachtungen bei bundesweiten Einsätzen vergütet?',
    a: 'Ja, selbstverständlich! Sämtliche Reisezeiten werden als Arbeitszeit vergütet. Bei auswärtigen Einsätzen stellen wir hochwertige Einzelzimmer in guten Mittelklasse-Hotels und zahlen Ihnen den vollen gesetzlichen Verpflegungsmehraufwand (steuerrfreie Spesen).'
  },
  {
    q: 'Kann ich mich auch ohne fertigen Lebenslauf bewerben?',
    a: 'Ja! Sie können unser Online-Formular in unter 2 Minuten ausfüllen oder uns direkt per Telefon oder WhatsApp kontaktieren. Die formellen Unterlagen können wir ganz entspannt im zweiten Schritt nachholen.'
  },
  {
    q: 'Darf der Firmenwagen auch für private Fahrten genutzt werden?',
    a: 'Für unsere Monteure und Techniker gilt: Das Fahrzeug steht für den Weg zur Arbeit und für die Einsätze zur Verfügung. Für Key Account Manager und leitende Positionen bieten wir individuelle Vereinbarungen inklusive 1%-Regelung zur vollen Privatnutzung an.'
  },
  {
    q: 'Wie sieht die Einarbeitung für Quereinsteiger aus?',
    a: 'Quereinsteiger werden von Tag 1 von einem erfahrenen Senior-Monteur begleitet. Sie lernen Schritt für Schritt die fachgerechte Montage von Wasserzählern, Heizkostenverteilern und Rauchmeldern. Zudem finanzieren wir die offizielle Schulung zur zertifizierten Fachkraft für Rauchwarnmelder nach DIN 14676.'
  }
];

export default function KarrierePage({ onShowToast }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedJobId, setExpandedJobId] = useState(OPEN_POSITIONS[0].id);
  const [faqOpenIndex, setFaqOpenIndex] = useState(0);

  // Form State
  const [formData, setFormData] = useState({
    jobPosition: OPEN_POSITIONS[0].title,
    salutation: 'Herr',
    fullName: '',
    email: '',
    phone: '',
    city: '',
    qualification: 'Erfahrener Monteur / Handwerker',
    hasDriversLicense: 'ja',
    earliestStart: 'Ab sofort',
    salaryExpectation: '',
    message: '',
    privacyAccepted: false
  });

  const [attachedFile, setAttachedFile] = useState(null);
  const [fileError, setFileError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmittedSuccess, setIsSubmittedSuccess] = useState(false);

  const formSectionRef = useRef(null);

  // Filter Jobs
  const filteredJobs = OPEN_POSITIONS.filter(job => {
    if (selectedCategory === 'all') return true;
    return job.category === selectedCategory;
  });

  // Handle pre-select job & smooth scroll
  const handleSelectJobForApplication = (jobTitle) => {
    setFormData(prev => ({ ...prev, jobPosition: jobTitle }));
    if (formSectionRef.current) {
      formSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle File Upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Check size max 10MB
    if (file.size > 10 * 1024 * 1024) {
      setFileError('Die Datei ist zu groß. Maximale Dateigröße beträgt 10 MB.');
      return;
    }

    setFileError('');
    setAttachedFile(file);
  };

  const handleRemoveFile = () => {
    setAttachedFile(null);
    setFileError('');
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phone || !formData.email) {
      if (onShowToast) {
        onShowToast('Bitte füllen Sie Name, Telefonnummer und E-Mail aus.');
      }
      return;
    }

    if (!formData.privacyAccepted) {
      if (onShowToast) {
        onShowToast('Bitte stimmen Sie den Datenschutzbestimmungen zu.');
      }
      return;
    }

    setIsSubmitting(true);

    if (window.trackConversion) {
      window.trackConversion('job_application_submit', formData.jobPosition, 100);
    }

    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmittedSuccess(true);
      if (onShowToast) {
        onShowToast(`Bewerbung erfolgreich eingereicht! Vielen Dank, ${formData.fullName}.`);
      }
    }, 1200);
  };

  const resetForm = () => {
    setIsSubmittedSuccess(false);
    setFormData({
      jobPosition: OPEN_POSITIONS[0].title,
      salutation: 'Herr',
      fullName: '',
      email: '',
      phone: '',
      city: '',
      qualification: 'Erfahrener Monteur / Handwerker',
      hasDriversLicense: 'ja',
      earliestStart: 'Ab sofort',
      salaryExpectation: '',
      message: '',
      privacyAccepted: false
    });
    setAttachedFile(null);
  };

  return (
    <div className="page-wrapper karriere-page">
      {/* Hero Header */}
      <section className="career-hero-section">
        <div className="career-hero-bg-overlay"></div>
        <div className="container career-hero-content">
          <div className="career-hero-badge">
            <Sparkles size={16} />
            <span>WIR STELLEN EIN • DEUTSCHLANDWEIT & REGIONAL</span>
          </div>
          <h1 className="career-hero-title">
            Gestalten Sie mit uns die Zukunft der <span className="highlight-text-cyan">digitalen Gebäudetechnik</span>
          </h1>
          <p className="career-hero-subtitle">
            Werden Sie Teil der MOCD Nextmeasure GmbH. Wir bieten erstklassige Bedingungen, modernstes Werkzeug, überdurchschnittliche Bezahlung und echte Wertschätzung im Handwerk.
          </p>

          <div className="career-hero-stats-row">
            <div className="hero-stat-pill">
              <CheckCircle2 size={18} className="text-cyan" />
              <span>Attraktives Gehalt + Spesen</span>
            </div>
            <div className="hero-stat-pill">
              <CheckCircle2 size={18} className="text-cyan" />
              <span>Firmenwagen & Hilti Werkzeug</span>
            </div>
            <div className="hero-stat-pill">
              <CheckCircle2 size={18} className="text-cyan" />
              <span>30 Tage Urlaub (Kein Notdienst)</span>
            </div>
            <div className="hero-stat-pill">
              <CheckCircle2 size={18} className="text-cyan" />
              <span>Quereinsteiger herzlich willkommen</span>
            </div>
          </div>

          <div className="career-hero-cta-group">
            <button 
              type="button" 
              className="btn btn-primary btn-lg btn-glow"
              onClick={() => {
                if (formSectionRef.current) {
                  formSectionRef.current.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Send size={18} />
              <span>Jetzt in 90 Sek. bewerben</span>
            </button>

            <a 
              href="#offene-stellen" 
              className="btn btn-outline-white btn-lg"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('offene-stellen')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Briefcase size={18} />
              <span>Offene Stellen ansehen ({OPEN_POSITIONS.length})</span>
            </a>
          </div>
        </div>
      </section>

      {/* Why Us / Benefits Section */}
      <section className="section-wrapper career-benefits-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge-pill-cyan">IHRE VORTEILE BEI MOCD</span>
            <h2 className="section-title">Warum Sie gerne für MOCD Nextmeasure arbeiten werden</h2>
            <p className="section-subtitle">
              Wir wissen, was im Handwerk und im technischen Außendienst wirklich zählt: Respekt, faire Vergütung und professionelle Ausrüstung.
            </p>
          </div>

          <div className="benefits-grid">
            {BENEFITS_LIST.map((benefit, idx) => (
              <div key={idx} className="benefit-card">
                <div className="benefit-icon-wrapper">
                  {benefit.icon}
                </div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-desc">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="section-wrapper bg-light" id="offene-stellen">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge-pill-orange">OFFENE STELLENANGEBOTE</span>
            <h2 className="section-title">Finden Sie den Job, der zu Ihnen passt</h2>
            <p className="section-subtitle">
              Ob erfahrener SHK-Monteur, Zählertechniker, Disponent oder motivierter Quereinsteiger – wir haben den passenden Platz für Sie.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="career-filter-bar">
            <button 
              className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              Alle Stellen ({OPEN_POSITIONS.length})
            </button>
            <button 
              className={`filter-btn ${selectedCategory === 'montage' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('montage')}
            >
              🔧 Montage & Technik
            </button>
            <button 
              className={`filter-btn ${selectedCategory === 'disposition' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('disposition')}
            >
              📊 Disposition & Büro
            </button>
            <button 
              className={`filter-btn ${selectedCategory === 'vertrieb' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('vertrieb')}
            >
              💼 Vertrieb B2B
            </button>
            <button 
              className={`filter-btn ${selectedCategory === 'quereinsteiger' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('quereinsteiger')}
            >
              🚀 Quereinsteiger
            </button>
          </div>

          {/* Jobs List */}
          <div className="jobs-list-container">
            {filteredJobs.map((job) => {
              const isExpanded = expandedJobId === job.id;
              return (
                <div key={job.id} className={`job-card ${isExpanded ? 'expanded' : ''}`}>
                  {/* Top Bar of Card */}
                  <div className="job-card-header" onClick={() => setExpandedJobId(isExpanded ? null : job.id)}>
                    <div className="job-card-header-left">
                      <div className="job-meta-row">
                        <span className={`badge-pill ${job.badgeColor}`}>{job.badge}</span>
                        <span className="job-dept-tag">{job.department}</span>
                      </div>
                      <h3 className="job-title">{job.title}</h3>
                      <div className="job-quick-info">
                        <span className="info-item">
                          <MapPin size={15} />
                          {job.locations}
                        </span>
                        <span className="info-item">
                          <Clock size={15} />
                          {job.type}
                        </span>
                        <span className="info-item highlight-salary">
                          <Euro size={15} />
                          {job.salary}
                        </span>
                      </div>
                    </div>

                    <div className="job-card-header-right">
                      <button 
                        type="button" 
                        className="btn btn-primary btn-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelectJobForApplication(job.title);
                        }}
                      >
                        Jetzt bewerben
                      </button>
                      <button 
                        type="button" 
                        className="toggle-expand-btn"
                        aria-label="Details einblenden"
                      >
                        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="job-card-body">
                      <p className="job-description">{job.description}</p>

                      <div className="job-details-grid">
                        <div className="job-detail-col">
                          <h4 className="detail-col-title">
                            <Wrench size={16} /> Ihre Aufgaben:
                          </h4>
                          <ul className="detail-bullets">
                            {job.tasks.map((task, tIdx) => (
                              <li key={tIdx}>
                                <Check size={14} className="bullet-check" />
                                <span>{task}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="job-detail-col">
                          <h4 className="detail-col-title">
                            <Award size={16} /> Das bringen Sie mit:
                          </h4>
                          <ul className="detail-bullets">
                            {job.requirements.map((req, rIdx) => (
                              <li key={rIdx}>
                                <Check size={14} className="bullet-check" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="job-card-footer-action">
                        <div className="footer-benefits-highlight">
                          <strong>Besonderes Plus:</strong> Modernes Werkzeug, eigene Touren & respektvolles Miteinander!
                        </div>
                        <button 
                          type="button" 
                          className="btn btn-primary btn-glow"
                          onClick={() => handleSelectJobForApplication(job.title)}
                        >
                          <Send size={16} />
                          <span>Für diese Position bewerben</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4-Step Process Section */}
      <section className="section-wrapper process-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge-pill-cyan">SCHNELL & TRANSPARENT</span>
            <h2 className="section-title">Unser 4-Schritte-Bewerbungsprozess</h2>
            <p className="section-subtitle">
              Bei uns gibt es keine wochenlangen Wartezeiten oder bürokratische Hürden.
            </p>
          </div>

          <div className="process-timeline-grid">
            {APPLICATION_STEPS.map((stepItem, sIdx) => (
              <div key={sIdx} className="process-step-card">
                <div className="step-number">{stepItem.step}</div>
                <h3 className="step-title">{stepItem.title}</h3>
                <p className="step-desc">{stepItem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="section-wrapper application-form-section" ref={formSectionRef} id="bewerbungsformular">
        <div className="container">
          <div className="application-box-wrapper">
            <div className="application-box-header text-center">
              <span className="badge-pill-orange">BLITZBEWERBUNG</span>
              <h2 className="app-box-title">In 90 Sekunden unkompliziert bewerben</h2>
              <p className="app-box-subtitle">
                Kein langes Anschreiben notwendig. Tragen Sie einfach Ihre wichtigsten Kontaktdaten ein – wir melden uns innerhalb von 48 Stunden bei Ihnen!
              </p>
            </div>

            {isSubmittedSuccess ? (
              <div className="application-success-card text-center">
                <div className="success-icon-badge">
                  <CheckCircle2 size={56} color="#187A44" />
                </div>
                <h3 className="success-title">Vielen Dank für Ihre Bewerbung!</h3>
                <p className="success-text">
                  Wir haben Ihre Unterlagen für die Position <strong>"{formData.jobPosition}"</strong> erfolgreich erhalten. Unser Recruiting-Team prüft Ihre Angaben und meldet sich telefonisch oder per E-Mail innerhalb von 48 Stunden bei Ihnen.
                </p>
                <div className="success-contacts-box">
                  <p>Haben Sie vorab dringende Fragen?</p>
                  <a href="tel:+4920212345678" className="btn btn-outline-primary btn-sm">
                    <Phone size={14} /> +49 (0) 202 / 123 456 78
                  </a>
                </div>
                <button type="button" className="btn btn-secondary mt-3" onClick={resetForm}>
                  Weitere Bewerbung einreichen
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="application-form">
                {/* Position Choice */}
                <div className="form-group mb-4">
                  <label className="form-label" htmlFor="jobPosition">
                    Angestrebte Position <span className="text-red">*</span>
                  </label>
                  <select 
                    id="jobPosition"
                    name="jobPosition"
                    className="form-control form-select-lg"
                    value={formData.jobPosition}
                    onChange={handleInputChange}
                    required
                  >
                    {OPEN_POSITIONS.map(p => (
                      <option key={p.id} value={p.title}>{p.title} ({p.department})</option>
                    ))}
                    <option value="Initiativbewerbung Montage & Technik">Initiativbewerbung (Montage & Technik)</option>
                    <option value="Initiativbewerbung Büro & Disposition">Initiativbewerbung (Büro & Disposition)</option>
                  </select>
                </div>

                {/* Personal Information Row */}
                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label">Anrede</label>
                    <div className="radio-group-salutation">
                      {['Herr', 'Frau', 'Divers'].map(sal => (
                        <label key={sal} className="radio-label">
                          <input 
                            type="radio" 
                            name="salutation" 
                            value={sal}
                            checked={formData.salutation === sal}
                            onChange={handleInputChange} 
                          />
                          <span>{sal}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="fullName">
                      Vor- & Nachname <span className="text-red">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="fullName"
                      name="fullName"
                      className="form-control"
                      placeholder="z.B. Markus Weber"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                {/* Contact Row */}
                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">
                      Telefon / Mobilnummer <span className="text-red">*</span>
                    </label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      className="form-control"
                      placeholder="z.B. +49 170 1234567"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                    <small className="form-hint">Wir rufen Sie für ein kurzes Kennenlernen an.</small>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      E-Mail-Adresse <span className="text-red">*</span>
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="z.B. m.weber@beispiel.de"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                {/* Qualifications & Location Row */}
                <div className="form-row-3">
                  <div className="form-group">
                    <label className="form-label" htmlFor="city">
                      Wohnort / Region
                    </label>
                    <input 
                      type="text" 
                      id="city"
                      name="city"
                      className="form-control"
                      placeholder="z.B. Wuppertal, Köln, Ruhrgebiet..."
                      value={formData.city}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="qualification">
                      Berufserfahrung / Hintergrund
                    </label>
                    <select 
                      id="qualification"
                      name="qualification"
                      className="form-control"
                      value={formData.qualification}
                      onChange={handleInputChange}
                    >
                      <option value="Ausbildung SHK / Anlagenmechaniker">Ausbildung SHK / Anlagenmechaniker</option>
                      <option value="Erfahrener Zähler-/HKV-Monteur">Erfahrener Zähler-/HKV-Monteur</option>
                      <option value="Fachkraft für Rauchwarnmelder">Zertifizierte Fachkraft für Rauchwarnmelder</option>
                      <option value="Elektriker / Elektroniker">Elektriker / Elektroniker</option>
                      <option value="Kaufmännische Ausbildung / Disposition">Kaufmännische Ausbildung / Disposition</option>
                      <option value="Quereinsteiger mit Handwerksgeschick">Quereinsteiger mit Handwerksgeschick</option>
                      <option value="Sonstiges">Sonstiges</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="hasDriversLicense">
                      Führerschein Klasse B vorhanden?
                    </label>
                    <select 
                      id="hasDriversLicense"
                      name="hasDriversLicense"
                      className="form-control"
                      value={formData.hasDriversLicense}
                      onChange={handleInputChange}
                    >
                      <option value="ja">Ja, Klasse B vorhanden</option>
                      <option value="in_arbeit">In Vorbereitung / Fahrschule</option>
                      <option value="nein">Nein</option>
                    </select>
                  </div>
                </div>

                {/* Start & Salary Row */}
                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="earliestStart">
                      Frühestmöglicher Eintrittstermin
                    </label>
                    <input 
                      type="text" 
                      id="earliestStart"
                      name="earliestStart"
                      className="form-control"
                      placeholder="z.B. Ab sofort oder zum 01. nächsten Monats"
                      value={formData.earliestStart}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="salaryExpectation">
                      Gehaltsvorstellung (optional)
                    </label>
                    <input 
                      type="text" 
                      id="salaryExpectation"
                      name="salaryExpectation"
                      className="form-control"
                      placeholder="z.B. 3.500 € Brutto / Monat"
                      value={formData.salaryExpectation}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* File Upload Zone */}
                <div className="form-group mb-4">
                  <label className="form-label">
                    Lebenslauf / Zertifikate hochladen (optional)
                  </label>
                  
                  {attachedFile ? (
                    <div className="uploaded-file-card">
                      <div className="uploaded-file-info">
                        <FileText size={24} className="text-cyan" />
                        <div>
                          <strong className="uploaded-name">{attachedFile.name}</strong>
                          <span className="uploaded-size">({(attachedFile.size / 1024 / 1024).toFixed(2)} MB)</span>
                        </div>
                      </div>
                      <button 
                        type="button" 
                        className="btn-remove-file"
                        onClick={handleRemoveFile}
                        aria-label="Datei entfernen"
                      >
                        <X size={18} />
                      </button>
                    </div>
                  ) : (
                    <label className="file-dropzone-label">
                      <input 
                        type="file" 
                        className="file-hidden-input" 
                        accept=".pdf,.doc,.docx,.jpg,.png"
                        onChange={handleFileChange}
                      />
                      <UploadCloud size={36} className="text-cyan mb-2" />
                      <span className="dropzone-title">Lebenslauf hier ablegen oder Datei auswählen</span>
                      <span className="dropzone-subtitle">Unterstützt PDF, Word oder Bilddateien (max. 10 MB)</span>
                    </label>
                  )}
                  {fileError && <p className="text-red-error mt-1">{fileError}</p>}
                </div>

                {/* Optional Message */}
                <div className="form-group mb-4">
                  <label className="form-label" htmlFor="message">
                    Kurze Nachricht oder Anmerkungen (optional)
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    className="form-control"
                    rows="3"
                    placeholder="Erzählen Sie uns kurz von sich, Ihren Einsatzwünschen oder bisherigen Projekten..."
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                {/* Privacy Checkbox */}
                <div className="form-group mb-4">
                  <label className="checkbox-privacy-label">
                    <input 
                      type="checkbox" 
                      name="privacyAccepted"
                      checked={formData.privacyAccepted}
                      onChange={handleInputChange}
                      required
                    />
                    <span>
                      Ich stimme der Verarbeitung meiner Angaben zum Zwecke der Bearbeitung meiner Bewerbung gemäß der <a href="/datenschutz" target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>Datenschutzerklärung</a> zu. Meine Daten werden nicht an Dritte weitergegeben.
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="btn btn-primary btn-block btn-lg btn-glow submit-career-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border"></span>
                      <span>Bewerbung wird übermittelt...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Bewerbung jetzt absenden</span>
                    </>
                  )}
                </button>
              </form>
            )}

            {/* Direct Contact Alternative Box */}
            <div className="application-alt-contact">
              <div className="alt-contact-text">
                <strong>Lieber direkt und formlos sprechen?</strong>
                <span>Unser Recruiting-Team freut sich auf Ihren Anruf oder eine kurze WhatsApp-Nachricht.</span>
              </div>
              <div className="alt-contact-buttons">
                <a href="tel:+4920212345678" className="btn btn-outline-primary btn-sm">
                  <Phone size={15} /> Direkt anrufen
                </a>
                <a 
                  href="https://wa.me/4920212345678?text=Hallo%20MOCD%20Nextmeasure,%20ich%20interessiere%20mich%20f%C3%BCr%20einen%20Job%20bei%20Ihnen." 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn btn-whatsapp btn-sm"
                >
                  <MessageSquare size={15} /> WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-wrapper career-faq-section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge-pill-cyan">HÄUFIGE FRAGEN</span>
            <h2 className="section-title">Fragen von Bewerbern</h2>
            <p className="section-subtitle">
              Hier finden Sie Antworten auf die wichtigsten Fragen rund um die Anstellung bei MOCD Nextmeasure.
            </p>
          </div>

          <div className="faq-accordion-container max-w-800">
            {CAREER_FAQS.map((faq, fIdx) => {
              const isOpen = faqOpenIndex === fIdx;
              return (
                <div key={fIdx} className={`faq-accordion-item ${isOpen ? 'open' : ''}`}>
                  <button 
                    type="button" 
                    className="faq-accordion-header"
                    onClick={() => setFaqOpenIndex(isOpen ? null : fIdx)}
                  >
                    <span className="faq-q-text">{faq.q}</span>
                    <span className="faq-toggle-icon">
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="faq-accordion-body">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
