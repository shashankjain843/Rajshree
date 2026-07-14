import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';

import extrusionImg from '../assets/hero-bg.png';
import pipesImg from '../assets/about-pipes.png';
import qcImg from '../assets/quality-lab.png';
import warehouseImg from '../assets/warehouse.png';

export default function Gallery() {
  const [activeImageIdx, setActiveImageIdx] = useState(null);

  const images = [
    {
      src: extrusionImg,
      alt: 'High-speed extrusion machinery line producing RAJSHREE pipes',
      title: 'Extrusion Floor Unit I',
      desc: 'Advanced automated extrusion systems ensuring wall thickness uniformity and high structural strength.',
    },
    {
      src: pipesImg,
      alt: 'Large neat stockpile of HDPE and PVC pipes',
      title: 'Product Stockyard',
      desc: 'Thousands of meters of HDPE and PVC pipes ready for immediate dispatch and deployment.',
    },
    {
      src: qcImg,
      alt: 'Quality control checking laboratory testing pipes',
      title: 'QA Testing Laboratory',
      desc: 'Rigorous hydrostatic and tensile stress audit tests carried out continuously on production samples.',
    },
    {
      src: warehouseImg,
      alt: 'Spacious warehouse showing loading bays and trucks',
      title: 'Logistics & Dispatch Yard',
      desc: 'Streamlined logistics infrastructure processing bulk transport trucks for nationwide deliveries.',
    },
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
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-brand-blue font-bold tracking-wide uppercase">Operations Gallery</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Inside Our Manufacturing Facilities
          </p>
          <div className="mt-4 h-1.5 w-24 bg-brand-orange mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-500 font-light text-sm sm:text-base">
            Take a visual tour of our state-of-the-art factories, automated production lines, testing laboratories, and loading yards in Jaipur.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setActiveImageIdx(idx)}
              className="relative rounded-3xl overflow-hidden shadow-md group cursor-pointer aspect-[4/3] border border-slate-100"
            >
              {/* Image */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-brand-darkblue/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-left">
                {/* View Icon */}
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full w-fit text-white">
                  <Eye className="w-5 h-5" />
                </div>

                {/* Details */}
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {img.title}
                  </h3>
                  <p className="text-xs text-slate-200 mt-1 font-light leading-snug line-clamp-2">
                    {img.desc}
                  </p>
                </div>
              </div>
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
                className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                title="Close"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                title="Previous"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
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
                  <h3 className="text-xl font-bold">{images[activeImageIdx].title}</h3>
                  <p className="text-sm text-slate-350 font-light mt-1.5 leading-relaxed">
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
