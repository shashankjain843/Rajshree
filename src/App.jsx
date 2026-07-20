import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientLogos from './components/ClientLogos';
import About from './components/About';
import ProjectsMetrics from './components/ProjectsMetrics';
import ManufacturingProcess from './components/ManufacturingProcess';
import Products from './components/Products';
import QualityControl from './components/QualityControl';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyTerms from './components/PrivacyTerms';
import RFQModal from './components/RFQModal';

export default function App() {
  const [isRfqOpen, setIsRfqOpen] = useState(false);
  const [rfqProduct, setRfqProduct] = useState('');

  useEffect(() => {
    const handleOpenRfq = (e) => {
      if (e.detail && e.detail.product) {
        setRfqProduct(e.detail.product);
      } else {
        setRfqProduct('');
      }
      setIsRfqOpen(true);
    };

    window.addEventListener('open-rfq-modal', handleOpenRfq);
    return () => window.removeEventListener('open-rfq-modal', handleOpenRfq);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-blue-600 selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ClientLogos />
        <About />
        <ProjectsMetrics />
        <ManufacturingProcess />
        <Products />
        <QualityControl />
        <Contact />
      </main>
      <Footer />
      <PrivacyTerms />
      <RFQModal
        isOpen={isRfqOpen}
        onClose={() => setIsRfqOpen(false)}
        defaultProduct={rfqProduct}
      />
    </div>
  );
}
