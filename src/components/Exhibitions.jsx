import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Landmark, ChevronLeft, ChevronRight, X, Maximize2, Star, Play, Quote } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

export default function Exhibitions() {
  const { lang, t } = useTranslation();
  const [activeImageIdx, setActiveImageIdx] = useState(null);
  const [activeVideoTestimonial, setActiveVideoTestimonial] = useState(null);

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

        {/* Google Reviews & Video Testimonials */}
        <div className="mt-24 border-t border-slate-200 dark:border-slate-800 pt-16 text-left">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-xs font-extrabold uppercase text-brand-orange tracking-widest">
              {lang === 'HI' ? 'साझेदारों की प्रतिक्रिया' : 'PARTNER FEEDBACK'}
            </h3>
            <h4 className="text-2xl font-black text-slate-855 dark:text-white mt-1.5">
              {lang === 'HI' ? 'Google समीक्षाएं और वीडियो प्रशंसापत्र' : 'Google Reviews & Buyer Testimonials'}
            </h4>
            <div className="mt-4 h-1.5 w-16 bg-brand-orange mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
            {/* Google Reviews Widget (4 cols) */}
            <div className="lg:col-span-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 bg-slate-100 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center font-black text-slate-850 dark:text-white text-base select-none">
                    G
                  </div>
                  <div>
                    <h5 className="font-extrabold text-slate-805 dark:text-white text-sm">Google Reviews</h5>
                    <p className="text-[10px] text-slate-400 font-medium">Verified Business Profile</p>
                  </div>
                </div>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-black text-slate-800 dark:text-white">4.8</span>
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
                <div className="space-y-3.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="text-xs">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-slate-700 dark:text-slate-350">Shashank Jain</span>
                      <span className="text-[10px] text-slate-400">1 week ago</span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                      "Excellent dimensional accuracy in HDPE pipes. Delivered 20MT to our Ajmer site on time. Highly recommended manufacturer!"
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://search.google.com/local/reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full text-center border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-brand-blue font-bold py-3 rounded-xl text-xs transition-all block"
              >
                View All Google Reviews
              </a>
            </div>

            {/* Video Testimonial 1 (4 cols) */}
            <div className="lg:col-span-4 relative group overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-900 flex flex-col justify-end min-h-[300px]">
              <img
                src="/images/exhibition-client-meeting.jpg"
                alt="Client meeting testimonial thumbnail"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-102 transition-transform duration-500"
                loading="lazy"
                width="360"
                height="300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setActiveVideoTestimonial({
                    title: lang === 'HI' ? 'अजय शर्मा (परियोजना प्रबंधक, जन स्वास्थ्य अभियांत्रिकी)' : 'Ajay Sharma (Project Manager, PHED)',
                    desc: lang === 'HI' ? 'PHED पेयजल ग्रिड पर हमारे क्लास 4 पीएन10 एचडीपीई पाइपों की गुणवत्ता और दबाव प्रतिरोधात्मक क्षमता पर प्रतिक्रिया।' : 'Feedback on the reliability, durability, and standard compliance of our Class 4 PN10 HDPE pipes installed in PHED water supply lines.'
                  })}
                  className="w-12 h-12 rounded-full bg-white/20 hover:bg-white text-brand-orange hover:text-brand-blue flex items-center justify-center shadow-lg backdrop-blur-sm border border-white/20 transition-all cursor-pointer group-hover:scale-110"
                >
                  <Play className="w-6 h-6 fill-current translate-x-0.5" />
                </button>
              </div>

              <div className="relative p-6 z-10 text-left">
                <Quote className="w-5 h-5 text-brand-orange mb-2" />
                <h5 className="text-white font-extrabold text-sm sm:text-base">
                  {lang === 'HI' ? 'अजय शर्मा (PHED)' : 'Ajay Sharma (PHED)'}
                </h5>
                <p className="text-slate-300 text-xs mt-1 font-light leading-relaxed">
                  {lang === 'HI' ? '"दबाव परीक्षण के परिणाम शानदार रहे..."' : '"The pressure testing results were superb..."'}
                </p>
              </div>
            </div>

            {/* Video Testimonial 2 (4 cols) */}
            <div className="lg:col-span-4 relative group overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-900 flex flex-col justify-end min-h-[300px]">
              <img
                src="/images/exhibition-team-discussion.jpg"
                alt="Team discussion testimonial thumbnail"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-102 transition-transform duration-500"
                loading="lazy"
                width="360"
                height="300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setActiveVideoTestimonial({
                    title: lang === 'HI' ? 'विक्रम सिंह (गुणवत्ता प्रमुख, बिल्डकॉन)' : 'Vikram Singh (Head of QA, Buildcon)',
                    desc: lang === 'HI' ? 'एनएबीएल ऑडिट्स और सामग्री तुलना के संबंध में प्रतिक्रिया।' : 'Corporate buyer review sharing about RITES/CIPET inspector approvals and materials testing consistency.'
                  })}
                  className="w-12 h-12 rounded-full bg-white/20 hover:bg-white text-brand-orange hover:text-brand-blue flex items-center justify-center shadow-lg backdrop-blur-sm border border-white/20 transition-all cursor-pointer group-hover:scale-110"
                >
                  <Play className="w-6 h-6 fill-current translate-x-0.5" />
                </button>
              </div>

              <div className="relative p-6 z-10 text-left">
                <Quote className="w-5 h-5 text-brand-orange mb-2" />
                <h5 className="text-white font-extrabold text-sm sm:text-base">
                  {lang === 'HI' ? 'विक्रम सिंह ( QA प्रमुख)' : 'Vikram Singh (Head of QA)'}
                </h5>
                <p className="text-slate-300 text-xs mt-1 font-light leading-relaxed">
                  {lang === 'HI' ? '"गुणवत्ता प्रमाणीकरण पूरी तरह से सत्यापित है..."' : '"The quality certifications are fully verified..."'}
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
            className="fixed inset-0 z-50 bg-slate-955/90 backdrop-blur-md flex items-center justify-center p-4"
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
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 hover:bg-brand-orange text-white cursor-pointer transition-all z-20"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Viewscreen */}
              <div className="aspect-video w-full relative flex flex-col items-center justify-center p-8 text-center bg-slate-950">
                <div className="absolute inset-0 pointer-events-none opacity-40">
                  <div className="w-full h-full bg-slate-950/80"></div>
                </div>

                <div className="z-10 max-w-md space-y-4">
                  <div className="w-14 h-14 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center mx-auto border-2 border-brand-orange animate-pulse">
                    <Play className="w-6 h-6 fill-current translate-x-0.5" />
                  </div>
                  <h3 className="text-white text-base sm:text-lg font-bold tracking-tight">
                    {activeVideoTestimonial.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm font-light">
                    {activeVideoTestimonial.desc}
                  </p>
                  <span className="text-[10px] text-brand-orange block font-bold mt-2 uppercase tracking-widest">
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
