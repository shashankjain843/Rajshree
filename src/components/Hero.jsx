import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, Download, Award, Factory } from 'lucide-react';

const heroImages = [
  '/images/hero-factory-warehouse-banner-16x9.jpg',
  '/images/hero-hdpe-pipes-closeup.jpg'
];

export default function Hero() {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 pt-24 pb-16 border-b border-slate-800">
      {/* Background Image Slider with Fade & Zoom Animation */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIdx}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 0.45, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${heroImages[currentImageIdx]})`,
            }}
          />
        </AnimatePresence>
        
        {/* Gradient Overlay for high text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40 z-10" />
      </div>

      {/* Industrial Tech Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8 max-w-4xl mx-auto"
        >
          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight"
          >
            High-Density <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500">HDPE &amp; PVC</span> Piping Systems
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-xl font-light leading-relaxed max-w-3xl mx-auto"
          >
            Rajshree Technoplast operates 75,000+ sq. ft. automated extrusion facilities in Jaipur, producing 100% virgin polymer conduits for potable water distribution, sewerage, and agricultural irrigation.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-rfq-modal'))}
              className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-amber-600/25 transition-all duration-300 flex items-center justify-center gap-2 text-sm uppercase tracking-wider cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>Request Wholesale Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="/docs/Rajshree-Product-Catalogue.pdf"
              download="Rajshree-Product-Catalogue.pdf"
              onClick={(e) => {
                e.preventDefault();
                alert("Rajshree Product Catalogue PDF download started.");
              }}
              className="bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold py-4 px-7 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm cursor-pointer backdrop-blur-md transform hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4 text-blue-400" />
              <span>Download Product Catalogue (PDF)</span>
            </a>
          </motion.div>

          {/* Credentials Row */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-8 border-t border-slate-800/90 grid grid-cols-3 gap-6 text-center max-w-2xl mx-auto"
          >
            <div>
              <p className="text-2xl sm:text-3xl font-black text-white">75,000+</p>
              <p className="text-xs text-slate-400 font-medium mt-1">Sq. Ft. Dual Plants</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-amber-400">100%</p>
              <p className="text-xs text-slate-400 font-medium mt-1">Virgin Polymer Resins</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-white">1,250+ MT</p>
              <p className="text-xs text-slate-400 font-medium mt-1">Monthly Capacity</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
