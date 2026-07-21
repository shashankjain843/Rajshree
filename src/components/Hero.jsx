import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Factory, Zap, Globe } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const heroImages = siteConfig.hero.images;

export default function Hero() {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const statIcons = [<Factory className="w-6 h-6" />, <Zap className="w-6 h-6" />, <Globe className="w-6 h-6" />];

  return (
    <section id="home" className="relative min-h-[75vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-slate-950 pt-20 pb-12">
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

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25 z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full text-left py-8 md:py-14">
        <div className="max-w-4xl">
          {/* Tag / Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/20 border border-brand-blue/30 text-brand-lightblue font-semibold text-xs uppercase tracking-wider mb-6"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-brand-lightblue animate-pulse"></span>
            {siteConfig.hero.badge}
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6"
          >
            {siteConfig.hero.headingMain}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300">
              {siteConfig.hero.headingHighlight}
            </span>{' '}
            {siteConfig.hero.headingSub}
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 leading-relaxed font-light max-w-3xl"
          >
            {siteConfig.hero.description}
          </motion.p>

          {/* 3 Unique Hero Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/10 pt-6"
          >
            {siteConfig.hero.stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="p-3 bg-brand-blue/10 rounded-xl text-brand-lightblue">
                  {statIcons[idx % statIcons.length]}
                </div>
                <div>
                  <p className="text-sm font-extrabold text-white">{stat.value}</p>
                  <p className="text-xs text-slate-400">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
    </section>
  );
}
