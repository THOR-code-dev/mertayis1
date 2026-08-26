import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import RauchwarnmelderHub from './components/RauchwarnmelderHub';
import HausverwaltungenSection from './components/HausverwaltungenSection';
import WohnungsunternehmenSection from './components/WohnungsunternehmenSection';
import DeutschlandweitSection from './components/DeutschlandweitSection';
import UspSection from './components/UspSection';
import AboutSection from './components/AboutSection';
import OfferSection from './components/OfferSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingActionBar from './components/FloatingActionBar';
import OfferModal from './components/OfferModal';
import LegalModals from './components/LegalModals';

export default function App() {
  const [offerModalOpen, setOfferModalOpen] = useState(false);
  const [offerModalContext, setOfferModalContext] = useState('');
  const [servicesFilter, setServicesFilter] = useState('all');
  const [legalModalType, setLegalModalType] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleOpenOffer = (context = '') => {
    setOfferModalContext(context);
    setOfferModalOpen(true);
    if (window.trackConversion) {
      window.trackConversion('open_offer_modal', context, 10);
    }
  };

  const handleFilterServices = (cat) => {
    setServicesFilter(cat);
    const element = document.getElementById('leistungen');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      {/* Toast Notification */}
      <div className={`toast-notification ${toastMessage ? 'show' : ''}`} id="toast">
        <span className="toast-icon">✓</span>
        <span className="toast-message">{toastMessage || ''}</span>
      </div>

      {/* Header & Navigation */}
      <TopBar />
      <Navbar 
        onOpenOffer={handleOpenOffer} 
        onFilterServices={handleFilterServices} 
      />

      {/* Main Page Sections */}
      <main id="mainContent">
        <Hero onOpenOffer={handleOpenOffer} />
        
        <ServicesSection 
          onOpenOffer={handleOpenOffer} 
          activeFilter={servicesFilter} 
        />
        
        <RauchwarnmelderHub onOpenOffer={handleOpenOffer} />
        
        <HausverwaltungenSection onOpenOffer={handleOpenOffer} />
        
        <WohnungsunternehmenSection onOpenOffer={handleOpenOffer} />
        
        <DeutschlandweitSection onOpenOffer={handleOpenOffer} />
        
        <UspSection />
        
        <AboutSection />
        
        <OfferSection 
          onShowToast={showToast} 
          onOpenLegal={(type) => setLegalModalType(type)} 
        />
        
        <FaqSection />
        
        <ContactSection 
          onShowToast={showToast} 
          onOpenOffer={handleOpenOffer} 
        />
      </main>

      {/* Footer */}
      <Footer 
        onFilterServices={handleFilterServices} 
        onSelectCity={(city) => {
          const el = document.getElementById('deutschlandweit');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Floating Action Bar */}
      <FloatingActionBar onOpenOffer={handleOpenOffer} />

      {/* Offer Popup Modal */}
      <OfferModal 
        isOpen={offerModalOpen} 
        onClose={() => setOfferModalOpen(false)} 
        initialContext={offerModalContext}
        onShowToast={showToast}
      />

      {/* Impressum & Privacy Modals */}
      <LegalModals 
        activeModal={legalModalType} 
        onClose={() => setLegalModalType(null)} 
      />
    </div>
  );
}
