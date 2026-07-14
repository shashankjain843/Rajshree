import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import heroBg from '../assets/hero-bg.png';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-20">
      {/* Background Image with Parallax & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: 'center 35%'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-transparent z-10" />

      {/* Grid Pattern overlay for tech feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full text-left py-12 md:py-24">
        <div className="max-w-3xl">
          {/* Tag / Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/20 border border-brand-blue/30 text-brand-lightblue font-semibold text-xs uppercase tracking-wider mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand-lightblue animate-pulse"></span>
            Established 2012 • Trust &amp; Durability
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight sm:leading-none mb-6"
          >
            Empowering Progress Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lightblue to-brand-orange">Liquid Network</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-light"
          >
            Rajshree Technoplast Pvt Ltd is a premier manufacturer and supplier of top-grade HDPE and PVC pipes under the trusted brand name <strong className="text-white font-semibold">"RAJSHREE"</strong>. We deliver resilient, sustainable, and engineering-compliant piping solutions across India.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
          >
            <a
              href="#products"
              className="group flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange/95 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/30 transition-all duration-300 w-full sm:w-auto text-base hover:-translate-y-0.5"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
            
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300 w-full sm:w-auto text-base hover:-translate-y-0.5"
            >
              <span>Request Quote</span>
            </a>
          </motion.div>

          {/* Mini Trust Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-12 md:mt-16 grid grid-cols-3 gap-4 border-t border-white/10 pt-8"
          >
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">100%</p>
              <p className="text-xs sm:text-sm text-slate-400">ISI Certified Quality</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">2012</p>
              <p className="text-xs sm:text-sm text-slate-400">Company Founded</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">20-1200mm</p>
              <p className="text-xs sm:text-sm text-slate-400">Broad HDPE Size OD</p>
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
