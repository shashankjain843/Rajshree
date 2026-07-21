import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const faqData = siteConfig.faq;

  return (
    <section id="faq" className="py-14 sm:py-20 bg-slate-950 text-white relative overflow-hidden border-t border-slate-900 transition-colors duration-300">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 opacity-80 z-0"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs text-sky-400 font-bold tracking-widest uppercase bg-sky-500/10 px-3.5 py-1.5 rounded-full border border-sky-500/20 inline-flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-sky-400" />
            <span>{faqData.sectionTag}</span>
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {faqData.title}
          </h2>
          <div className="mt-4 h-1.5 w-24 bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 font-light text-sm sm:text-base leading-relaxed">
            {faqData.description}
          </p>
        </div>

        {/* Accordion Questions List */}
        <div className="space-y-4 text-left">
          {faqData.items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={item.id || idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900/90 border-sky-500/50 shadow-lg shadow-sky-500/5'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/70'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center p-5 sm:p-6 text-left cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-black px-2.5 py-1 rounded-lg transition-colors ${
                      isOpen ? 'bg-sky-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                    }`}>
                      0{idx + 1}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {item.question}
                    </span>
                  </div>
                  <div className={`p-2 rounded-full transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-sky-500/20 text-sky-400' : 'bg-slate-800 text-slate-400'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-300 font-light text-xs sm:text-sm leading-relaxed border-t border-slate-800/80 mt-1">
                        <p className="whitespace-pre-line pt-3">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Need more help CTA card */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-left shadow-xl">
          <div>
            <h3 className="text-lg font-bold text-white">Have a specific engineering or tender question?</h3>
            <p className="text-slate-400 text-xs sm:text-sm font-light mt-1">
              Contact our sales desk directly for immediate technical assistance and bulk price quotes.
            </p>
          </div>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-rfq-modal'))}
            className="shrink-0 bg-brand-orange hover:bg-brand-orange/90 text-white font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg transition-all duration-200 cursor-pointer"
          >
            Ask Sales Team
          </button>
        </div>

      </div>
    </section>
  );
}
