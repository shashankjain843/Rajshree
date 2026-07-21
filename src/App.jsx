import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectsMetrics from './components/ProjectsMetrics';
import ManufacturingProcess from './components/ManufacturingProcess';
import Products from './components/Products';
import QualityControl from './components/QualityControl';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyTerms from './components/PrivacyTerms';
import RFQModal from './components/RFQModal';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [isRfqOpen, setIsRfqOpen] = useState(false);
  const [rfqProduct, setRfqProduct] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleOpenRfq = (e) => {
      if (e.detail && e.detail.product) {
        setRfqProduct(e.detail.product);
      } else {
        setRfqProduct('');
      }
      setIsRfqOpen(true);
    };

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('open-rfq-modal', handleOpenRfq);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('open-rfq-modal', handleOpenRfq);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-blue-600 selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
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

      {/* Floating Scroll-to-Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-brand-blue hover:bg-brand-darkblue text-white shadow-lg shadow-brand-blue/30 hover:shadow-brand-blue/50 transition-all duration-300 cursor-pointer ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}
