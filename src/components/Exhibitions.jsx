import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Landmark, ChevronLeft, ChevronRight, X, Maximize2, Star, Play, Quote } from 'lucide-react';

export default function Exhibitions() {
  const [activeImageIdx, setActiveImageIdx] = useState(null);
  const [activeVideoTestimonial, setActiveVideoTestimonial] = useState(null);

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
    <section id="exhibitions" className="py-12 bg-slate-50 overflow-hidden border-t border-slate-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-base text-blue-600 font-bold tracking-wide uppercase">Trade Shows &amp; Exhibitions</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            RAJPLASTE Exhibitions &amp; Client Meets
          </p>
          <div className="mt-4 h-1.5 w-24 bg-amber-500 mx-auto rounded-full"></div>
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
          className="bg-blue-700 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row justify-between items-center gap-5 mb-8 text-left relative overflow-hidden"
        >
          <div className="absolute right-0 bottom-0 translate-x-1/3 translate-y-1/3 w-64 h-64 bg-white/5 rounded-full pointer-events-none"></div>
          <div className="space-y-3 relative z-10">
            <span className="text-xs uppercase font-extrabold tracking-widest text-amber-400 bg-white/10 px-3 py-1 rounded-full">
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
            <Landmark className="w-8 h-8 text-amber-400 animate-bounce" />
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
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-slate-100">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Hover icon */}
                  <div
                    onClick={() => setActiveImageIdx(idx)}
                    className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                  >
                    <div className="p-3 bg-white/25 rounded-full text-white backdrop-blur-sm">
                      <Maximize2 className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="p-4 text-left space-y-1">
                  <h4 className="text-sm font-extrabold text-slate-800 tracking-tight">{img.title}</h4>
                  <p className="text-[11px] text-slate-500 font-light leading-relaxed">{img.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews & Video Testimonials */}
        <div className="mt-12 border-t border-slate-200 pt-10 text-left">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-xs font-extrabold uppercase text-amber-500 tracking-widest">
              PARTNER FEEDBACK
            </h3>
            <h4 className="text-2xl font-black text-slate-800 mt-1.5">
              Google Reviews &amp; Buyer Testimonials
            </h4>
            <div className="mt-4 h-1.5 w-16 bg-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
            {/* Google Reviews Widget (4 cols) */}
            <div className="lg:col-span-4 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center font-black text-slate-800 text-base select-none">
                    G
                  </div>
                  <div>
                    <h5 className="font-extrabold text-slate-800 text-sm">Google Reviews</h5>
                    <p className="text-[10px] text-slate-400 font-medium">Verified Business Profile</p>
                  </div>
                </div>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-black text-slate-800">4.8</span>
                  <div className="flex text-amber-500 gap-0.5">
                    <Star className="w-4.5 h-4.5 fill-current" />
                    <Star className="w-4.5 h-4.5 fill-current" />
                    <Star className="w-4.5 h-4.5 fill-current" />
                    <Star className="w-4.5 h-4.5 fill-current" />
                    <Star className="w-4.5 h-4.5 fill-current" />
                  </div>
                </div>
                <p className="text-slate-400 text-xs font-light mb-6">
                  Based on 120+ verified evaluations.
                </p>

                {/* Star review quote */}
                <div className="space-y-3.5 pt-4 border-t border-slate-100">
                  <div className="text-xs">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-slate-700">Shashank Jain</span>
                      <span className="text-[10px] text-slate-400">1 week ago</span>
                    </div>
                    <p className="text-slate-500 font-light leading-relaxed">
                      "Excellent dimensional accuracy in HDPE pipes. Delivered 20MT to our Ajmer site on time. Highly recommended manufacturer!"
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://search.google.com/local/reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full text-center border border-slate-200 text-slate-700 hover:text-white hover:bg-blue-600 font-bold py-3 rounded-xl text-xs transition-all block"
              >
                View All Google Reviews
              </a>
            </div>

            {/* Video Testimonial 1 (4 cols) */}
            <div className="lg:col-span-4 relative group overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 flex flex-col justify-end min-h-[300px]">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950/70 to-slate-950"></div>
              <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-25"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setActiveVideoTestimonial({
                    title: 'Ajay Sharma (Project Manager, PHED)',
                    desc: 'Feedback on the reliability, durability, and standard compliance of our Class 4 PN10 HDPE pipes installed in PHED water supply lines.'
                  })}
                  className="w-12 h-12 rounded-full bg-white/20 hover:bg-white text-amber-500 hover:text-blue-700 flex items-center justify-center shadow-lg backdrop-blur-sm border border-white/20 transition-all cursor-pointer group-hover:scale-110"
                >
                  <Play className="w-6 h-6 fill-current translate-x-0.5" />
                </button>
              </div>

              <div className="relative p-6 z-10 text-left">
                <Quote className="w-5 h-5 text-amber-500 mb-2" />
                <h5 className="text-white font-extrabold text-sm sm:text-base">
                  Ajay Sharma (PHED)
                </h5>
                <p className="text-slate-300 text-xs mt-1 font-light leading-relaxed">
                  "The pressure testing results were superb..."
                </p>
              </div>
            </div>

            {/* Video Testimonial 2 (4 cols) */}
            <div className="lg:col-span-4 relative group overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 flex flex-col justify-end min-h-[300px]">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-850 to-blue-950/80"></div>
              <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setActiveVideoTestimonial({
                    title: 'Vikram Singh (Head of QA, Buildcon)',
                    desc: 'Corporate buyer review sharing about RITES/CIPET inspector approvals and materials testing consistency.'
                  })}
                  className="w-12 h-12 rounded-full bg-white/20 hover:bg-white text-amber-500 hover:text-blue-700 flex items-center justify-center shadow-lg backdrop-blur-sm border border-white/20 transition-all cursor-pointer group-hover:scale-110"
                >
                  <Play className="w-6 h-6 fill-current translate-x-0.5" />
                </button>
              </div>

              <div className="relative p-6 z-10 text-left">
                <Quote className="w-5 h-5 text-amber-500 mb-2" />
                <h5 className="text-white font-extrabold text-sm sm:text-base">
                  Vikram Singh (Head of QA)
                </h5>
                <p className="text-slate-300 text-xs mt-1 font-light leading-relaxed">
                  "The quality certifications are fully verified..."
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Testimonial Player Modal */}
      <AnimatePresence>
        {activeVideoTestimonial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveVideoTestimonial(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 max-w-2xl w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setActiveVideoTestimonial(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 hover:bg-amber-600 text-white cursor-pointer transition-all z-20"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Viewscreen */}
              <div className="aspect-video w-full relative flex flex-col items-center justify-center p-8 text-center bg-slate-900">
                <div className="absolute inset-0 pointer-events-none opacity-40">
                  <div className="w-full h-full bg-slate-900/80"></div>
                </div>

                <div className="z-10 max-w-md space-y-4">
                  <div className="w-14 h-14 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center mx-auto border-2 border-amber-500 animate-pulse">
                    <Play className="w-6 h-6 fill-current translate-x-0.5" />
                  </div>
                  <h3 className="text-white text-base sm:text-lg font-bold tracking-tight">
                    {activeVideoTestimonial.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm font-light">
                    {activeVideoTestimonial.desc}
                  </p>
                  <span className="text-[10px] text-amber-500 block font-bold mt-2 uppercase tracking-widest">
                    [Video Testimonial Stream Placeholder]
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImageIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/95 backdrop-blur-md z-50 flex flex-col items-center justify-center p-4"
            onClick={() => setActiveImageIdx(null)}
          >
            <button
              onClick={() => setActiveImageIdx(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Slider */}
            <div className="max-w-4xl w-full flex items-center justify-between gap-4">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer shrink-0"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div
                className="flex-grow flex flex-col items-center select-none"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={images[activeImageIdx].src}
                  alt={images[activeImageIdx].alt}
                  className="max-h-[65vh] w-auto object-contain rounded-2xl shadow-2xl border border-white/10"
                />
                <div className="text-center mt-6 text-white max-w-xl">
                  <h3 className="text-lg font-bold">{images[activeImageIdx].title}</h3>
                  <p className="text-sm text-slate-300 font-light mt-2">{images[activeImageIdx].desc}</p>
                </div>
              </div>

              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer shrink-0"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}Idx(null)}
          >
            <button
              onClick={() => setActiveImageIdx(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Slider */}
            <div className="max-w-4xl w-full flex items-center justify-between gap-4">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer shrink-0"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div
                className="flex-grow flex flex-col items-center select-none"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={images[activeImageIdx].src}
                  alt={images[activeImageIdx].alt}
                  className="max-h-[65vh] w-auto object-contain rounded-2xl shadow-2xl border border-white/10"
                />
                <div className="text-center mt-6 text-white max-w-xl">
                  <h3 className="text-lg font-bold">{images[activeImageIdx].title}</h3>
                  <p className="text-sm text-slate-300 font-light mt-2">{images[activeImageIdx].desc}</p>
                </div>
              </div>

              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer shrink-0"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
