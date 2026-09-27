import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';
import ScrollToTop from './components/ScrollToTop';
import OfferModal from './components/OfferModal';
import LegalModals from './components/LegalModals';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import RwmPage from './pages/RwmPage';
import HausverwaltungenPage from './pages/HausverwaltungenPage';
import WohnungsunternehmenPage from './pages/WohnungsunternehmenPage';
import LocationsPage from './pages/LocationsPage';
import AboutPage from './pages/AboutPage';
import OfferPage from './pages/OfferPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [offerModalOpen, setOfferModalOpen] = useState(false);
  const [offerModalContext, setOfferModalContext] = useState('');
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

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-container">
        {/* Toast Notification */}
        <div className={`toast-notification ${toastMessage ? 'show' : ''}`} id="toast">
          <span className="toast-icon">✓</span>
          <span className="toast-message">{toastMessage || ''}</span>
        </div>

        {/* Global Header */}
        <TopBar />
        <Navbar onOpenOffer={handleOpenOffer} />

        {/* Page Routes */}
        <main id="mainContent" className="main-viewport">
          <Routes>
            <Route path="/" element={<HomePage onOpenOffer={handleOpenOffer} />} />
            <Route path="/leistungen" element={<ServicesPage onOpenOffer={handleOpenOffer} />} />
            <Route path="/rauchwarnmelder" element={<RwmPage onOpenOffer={handleOpenOffer} />} />
            <Route path="/hausverwaltungen" element={<HausverwaltungenPage onOpenOffer={handleOpenOffer} />} />
            <Route path="/wohnungsunternehmen" element={<WohnungsunternehmenPage onOpenOffer={handleOpenOffer} />} />
            <Route path="/standorte" element={<LocationsPage onOpenOffer={handleOpenOffer} />} />
            <Route path="/ueber-uns" element={<AboutPage onOpenOffer={handleOpenOffer} />} />
            <Route 
              path="/angebot" 
              element={
                <OfferPage 
                  onShowToast={showToast} 
                  onOpenLegal={(type) => setLegalModalType(type)} 
                />
              } 
            />
            <Route 
              path="/kontakt" 
              element={
                <ContactPage 
                  onShowToast={showToast} 
                  onOpenOffer={handleOpenOffer} 
                />
              } 
            />
            {/* Fallback to Home */}
            <Route path="*" element={<HomePage onOpenOffer={handleOpenOffer} />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenLegal={(type) => setLegalModalType(type)} />

        {/* Mobile App Bottom Bar */}
        <MobileBottomNav onOpenOffer={handleOpenOffer} />

        {/* Quick Action Modal */}
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
    </BrowserRouter>
  );
}
