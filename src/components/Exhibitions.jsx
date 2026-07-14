import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Landmark, ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

export default function Exhibitions() {
  const { lang, t } = useTranslation();
  const [activeImageIdx, setActiveImageIdx] = useState(null);

  const images = [
    {
      src: '/images/exhibition-stall-team-1.jpg',
      alt: 'Rajshree team at RAJPLASTE stall setup',
      title: lang === 'HI' ? 'हमारी स्टॉल टीम - उद्घाटन दिवस' : 'Our Stall Team - Setup Day',
      desc: lang === 'HI' ? 'स्टॉल नंबर 114, 115 पर ग्राहकों और वितरकों का स्वागत।' : 'Welcoming corporate clients and dealers at Stall No. 114, 115.'
    },
    {
      src: '/images/exhibition-client-meeting.jpg',
      alt: 'Client meeting at exhibition stall',
      title: lang === 'HI' ? 'इंटरएक्टिव क्लाइंट ब्रीफिंग' : 'Interactive Client Briefing',
      desc: lang === 'HI' ? 'इंजीनियरों के साथ थोक आपूर्ति और पाइपलाइनों के प्रदर्शन पर चर्चा।' : 'Discussing high-volume supply capabilities with infrastructure development engineers.'
    },
    {
      src: '/images/exhibition-team-discussion.jpg',
      alt: 'Technical group discussion inside stall',
      title: lang === 'HI' ? 'तकनीकी परामर्श और बैठक' : 'Technical Consultation Panel',
      desc: lang === 'HI' ? 'डी डब्लू सी पाइप और अनुकूलित फ्लैंज वेल्डिंग के बारे में समझाते हुए।' : 'Explaining our customized flange welding and DWC pipe ring fit options to engineering students and planners.'
    },
    {
      src: '/images/exhibition-stall-team-2.jpg',
      alt: 'Corporate team standing together at exhibition',
      title: lang === 'HI' ? 'सेल्स और इंजीनियरिंग टीम' : 'Sales & Engineering Executive Board',
      desc: lang === 'HI' ? 'आगंतुकों को कैटलॉग और कोटेशन प्रदान करने में सहायता करने को तैयार।' : 'Our representatives ready to assist visitors with catalog requests and customized quotes.'
    },
    {
      src: '/images/exhibition-stall-team-3.jpg',
      alt: 'Industrial exhibition display and team photo',
      title: lang === 'HI' ? 'टेक्नोप्लास्ट मुख्य प्रदर्शनी क्षेत्र' : 'Technoplast Exhibition Banner Area',
      desc: lang === 'HI' ? 'अग्रणी ठेकेदार नेटवर्क को हमारे बीआईएस प्रमाणित उत्पादों का प्रदर्शन।' : 'Showcasing our BIS standards and brand presence to the regional contractor networks.'
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
    <section id="exhibitions" className="py-20 bg-slate-50 dark:bg-slate-950 overflow-hidden border-t border-slate-150 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-brand-blue dark:text-brand-lightblue font-bold tracking-wide uppercase">{t('exhTitle')}</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('exhSubtitle')}
          </p>
          <div className="mt-4 h-1.5 w-24 bg-brand-orange mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-500 dark:text-slate-400 font-light text-sm sm:text-base">
            {t('exhDesc')}
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
              {lang === 'HI' ? 'मुख्य आयोजन' : 'Major Event Showcase'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {lang === 'HI' ? 'राजप्लास्ट मेगा प्रदर्शनी' : 'RAJPLASTE Mega Exhibition'}
            </h3>
            <p className="text-sm text-slate-200 font-light max-w-xl">
              {lang === 'HI' 
                ? 'हमारी इंजीनियरिंग और सेल्स टीम ने स्टॉल नंबर 114, 115 पर राजश्री ग्रुप का सफलतापूर्वक प्रतिनिधित्व किया, और विस्तृत पाइप रेंजों का प्रदर्शन किया।'
                : 'Our engineering team and executive panel successfully represented Rajshree Group at Stall No. 114, 115, exhibiting our full size ranges of HDPE and MDPE pipes.'}
            </p>
          </div>
          <div className="shrink-0 relative z-10 flex items-center gap-3 bg-white/10 border border-white/20 p-5 rounded-2xl">
            <Landmark className="w-8 h-8 text-brand-orange animate-bounce" />
            <div className="text-left">
              <span className="text-xs text-slate-300 block uppercase font-bold">{lang === 'HI' ? 'स्टॉल स्थान' : 'Stall Location'}</span>
              <span className="text-base font-extrabold text-white">{lang === 'HI' ? 'स्टॉल संख्या 114, 115' : 'Stall No. 114, 115'}</span>
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
              className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-md border border-slate-150 dark:border-slate-800 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-950">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Hover icon */}
                  <div
                    onClick={() => setActiveImageIdx(idx)}
                    className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                  >
                    <div className="p-3 bg-white/25 rounded-full text-white backdrop-blur-sm">
                      <Maximize2 className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="p-4 text-left space-y-1">
                  <h4 className="text-sm font-extrabold text-slate-800 dark:text-white tracking-tight">{img.title}</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-light leading-relaxed">{img.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImageIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-955/95 backdrop-blur-md z-50 flex flex-col items-center justify-center p-4"
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
}
