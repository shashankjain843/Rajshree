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
    <section id="home" className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 pt-20 pb-10 sm:pt-24 sm:pb-16 border-b border-slate-800">
      {/* Background Image Slider with Ultra Bright Visibility & High Contrast */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIdx}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 0.95, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${heroImages[currentImageIdx]})`,
            }}
          />
        </AnimatePresence>
        
        {/* Very Light Contrast Gradients - Factory image is ultra clear & vivid */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-slate-950/30 to-slate-950/15 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20 z-10" />
      </div>

      {/* Industrial Tech Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-5 z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-5 sm:space-y-8 max-w-4xl mx-auto"
        >
          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight drop-shadow-md"
          >
            High-Density <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300">HDPE &amp; PVC</span> Piping Systems
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-100 text-sm sm:text-xl font-light leading-relaxed max-w-3xl mx-auto drop-shadow-sm"
          >
            Rajshree Technoplast operates 75,000+ sq. ft. automated extrusion facilities in Jaipur, producing 100% virgin polymer conduits for potable water distribution, sewerage, and agricultural irrigation.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-rfq-modal'))}
              className="w-full sm:w-auto group bg-gradient-to-r from-blue-600 via-blue-700 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white font-bold py-3 px-5 sm:py-4 sm:px-8 rounded-xl shadow-lg shadow-blue-600/30 transition-all duration-300 flex items-center justify-center gap-2 text-xs sm:text-sm uppercase tracking-wider cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>Request Wholesale Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-sky-200" />
            </button>

            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-rfq-modal', { detail: { product: 'Product Catalogue PDF & Specifications' } }))}
              className="w-full sm:w-auto bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold py-3 px-5 sm:py-4 sm:px-7 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer backdrop-blur-md transform hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4 text-sky-400" />
              <span>Download Product Catalogue (PDF)</span>
            </button>
          </motion.div>

          {/* Credentials Row */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-5 sm:pt-8 border-t border-slate-800/90 grid grid-cols-3 gap-3 sm:gap-6 text-center max-w-2xl mx-auto"
          >
            <div>
              <p className="text-xl sm:text-3xl font-black text-white">75,000+</p>
              <p className="text-[10px] sm:text-xs text-slate-300 font-medium mt-0.5 sm:mt-1">Sq. Ft. Dual Plants</p>
            </div>
            <div>
              <p className="text-xl sm:text-3xl font-black text-sky-400">100%</p>
              <p className="text-[10px] sm:text-xs text-slate-300 font-medium mt-0.5 sm:mt-1">Virgin Polymer Resins</p>
            </div>
            <div>
              <p className="text-xl sm:text-3xl font-black text-white">1,250+ MT</p>
              <p className="text-[10px] sm:text-xs text-slate-300 font-medium mt-0.5 sm:mt-1">Monthly Capacity</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
