import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Landmark, ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

export default function Exhibitions() {
  const [activeImageIdx, setActiveImageIdx] = useState(null);

  const images = [
    {
      src: '/images/exhibition-stall-team-1.jpg',
      alt: 'Rajshree team at RAJPLASTE stall setup',
      title: 'Our Stall Team - Setup Day',
      desc: 'Welcoming corporate clients and dealers at Stall No. 114, 115.'
    },
    {
      src: '/images/exhibition-client-meeting.jpg',
      alt: 'Client meeting at exhibition stall',
      title: 'Interactive Client Briefing',
      desc: 'Discussing high-volume supply capabilities with infrastructure development engineers.'
    },
    {
      src: '/images/exhibition-team-discussion.jpg',
      alt: 'Technical group discussion inside stall',
      title: 'Technical Consultation Panel',
      desc: 'Explaining our customized flange welding and DWC pipe ring fit options to engineering students and planners.'
    },
    {
      src: '/images/exhibition-stall-team-2.jpg',
      alt: 'Corporate team standing together at exhibition',
      title: 'Sales & Engineering Executive Board',
      desc: 'Our representatives ready to assist visitors with catalog requests and customized quotes.'
    },
    {
      src: '/images/exhibition-stall-team-3.jpg',
      alt: 'Industrial exhibition display and team photo',
      title: 'Technoplast Exhibition Banner Area',
      desc: 'Showcasing our BIS standards and brand presence to the regional contractor networks.'
    }
  ];

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveImageIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveImageIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="exhibitions" className="py-20 bg-slate-50 overflow-hidden border-t border-slate-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-brand-blue font-bold tracking-wide uppercase">Exhibitions &amp; Events</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Industry Trade Shows &amp; Corporate Alignment
          </p>
          <div className="mt-4 h-1.5 w-24 bg-brand-orange mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-500 font-light text-sm sm:text-base">
            We actively showcase our latest piping technologies, BIS-compliant designs, and custom flange weld options at regional and national industrial trade shows.
          </p>
        </div>

        {/* Feature Event Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-brand-blue text-white p-8 sm:p-12 rounded-3xl shadow-xl flex flex-col md:flex-row justify-between items-center gap-6 mb-12 text-left relative overflow-hidden"
        >
          <div className="absolute right-0 bottom-0 translate-x-1/3 translate-y-1/3 w-64 h-64 bg-white/5 rounded-full pointer-events-none"></div>
          <div className="space-y-3 relative z-10">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-lightblue bg-white/10 px-3 py-1 rounded-full">
              Major Event Showcase
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              RAJPLASTE Mega Exhibition
            </h3>
            <p className="text-sm text-slate-200 font-light max-w-xl">
              Our engineering team and executive panel successfully represented Rajshree Group at Stall No. 114, 115, exhibiting our full size ranges of HDPE and MDPE pipes.
            </p>
          </div>
          <div className="shrink-0 relative z-10 flex items-center gap-3 bg-white/10 border border-white/20 p-5 rounded-2xl">
            <Landmark className="w-8 h-8 text-brand-orange" />
            <div className="text-left">
              <span className="text-xs text-slate-300 block uppercase font-bold">Stall Location</span>
              <span className="text-base font-extrabold text-white">Stall No. 114, 115</span>
            </div>
          </div>
        </motion.div>

        {/* Photo Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setActiveImageIdx(idx)}
              className="bg-white rounded-3xl border border-slate-150 overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer aspect-[4/5] relative"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* View icon overlay */}
                  <div className="absolute inset-0 bg-brand-darkblue/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Info Text */}
                <div className="p-5 text-left space-y-2">
                  <h4 className="text-sm font-extrabold text-slate-800 tracking-tight leading-snug group-hover:text-brand-blue transition-colors">
                    {img.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-light leading-relaxed line-clamp-3">
                    {img.desc}
                  </p>
                </div>
              </div>

              {/* Card Footer tag */}
              <div className="h-1 bg-brand-blue/10 group-hover:bg-brand-orange transition-colors"></div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeImageIdx !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImageIdx(null)}
              className="fixed inset-0 bg-slate-950/95 z-50 flex items-center justify-center p-4"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveImageIdx(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                title="Previous"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                title="Next"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Media Display Container */}
              <motion.div
                initial={{ scale: 0.9, y: 10 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 10 }}
                transition={{ type: 'spring', damping: 25 }}
                className="max-w-4xl w-full flex flex-col items-center gap-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative max-h-[70vh] flex items-center justify-center">
                  <img
                    src={images[activeImageIdx].src}
                    alt={images[activeImageIdx].alt}
                    className="max-w-full max-h-[70vh] object-contain"
                  />
                </div>
                
                {/* Description under image */}
                <div className="text-center text-white max-w-2xl px-4">
                  <h3 className="text-lg sm:text-xl font-bold">{images[activeImageIdx].title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-light mt-1.5 leading-relaxed">
                    {images[activeImageIdx].desc}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
