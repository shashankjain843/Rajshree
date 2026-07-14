import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, Award, Factory } from 'lucide-react';

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
    <section id="home" className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
      {/* Background Image Slider with Fade Transition */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIdx}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.45, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${heroImages[currentImageIdx]})`,
            }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-950/50 z-10" />
      </div>

      {/* Grid Pattern overlay for tech/industrial feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25 z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full text-left py-12 md:py-24">
        <div className="max-w-4xl">
          {/* Tag / Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/20 border border-brand-blue/30 text-brand-lightblue font-semibold text-xs uppercase tracking-wider mb-6"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-brand-lightblue animate-pulse"></span>
            Rajshree Group / Technoplast • Trust &amp; Quality
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6.5xl font-extrabold text-white tracking-tight leading-tight mb-6"
          >
            Leading Manufacturer of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lightblue to-brand-blue-400 bg-white">HDPE Pipes</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-light max-w-3xl"
          >
            Rajshree Technoplast Pvt. Ltd. (Rajshree Group) delivers robust, high-performance, and ISO-compliant HDPE piping systems. Engineered for durability, chemical resistance, and heavy infrastructure workloads, our pipes empower water, agricultural, and industrial networks nationwide.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
          >
            <a
              href="#contact"
              className="group flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-darkblue text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/40 transition-all duration-300 w-full sm:w-auto text-base hover:-translate-y-0.5"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
            
            <a
              href="#products"
              className="flex items-center justify-center gap-2 border-2 border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300 w-full sm:w-auto text-base hover:-translate-y-0.5"
            >
              <span>Our Products</span>
            </a>
          </motion.div>

          {/* Mini Trust Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/10 pt-8"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 bg-brand-blue/10 rounded-xl text-brand-lightblue">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-white">ISO 9001:2015</p>
                <p className="text-xs text-slate-400">Certified Production Control</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-brand-blue/10 rounded-xl text-brand-lightblue">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-white">IS:4984 / IS:14333</p>
                <p className="text-xs text-slate-400">BIS Approved Specifications</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-brand-blue/10 rounded-xl text-brand-lightblue">
                <Factory className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-white">Jaipur, Rajasthan</p>
                <p className="text-xs text-slate-400">State-of-the-art plant setup</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-xs text-slate-400 tracking-widest font-semibold uppercase">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-3 bg-brand-orange rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
