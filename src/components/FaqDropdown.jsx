import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, HelpCircle, ChevronDown } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function FaqDropdown({ isOpen, onClose }) {
  const dropdownRef = useRef(null);
  const [openIdx, setOpenIdx] = useState(0); // First question open by default

  // Click outside listener to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const faqData = siteConfig.faq;

  const toggleAccordion = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <AnimatePresence>
      <motion.div
        ref={dropdownRef}
        initial={{ opacity: 0, scale: 0.95, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -10 }}
        className="fixed top-16 left-4 right-4 sm:left-auto sm:right-12 z-50 bg-white border border-slate-200 rounded-3xl shadow-2xl w-auto sm:w-full max-w-lg overflow-hidden flex flex-col my-2 text-left"
      >
        {/* Header */}
        <div className="bg-slate-900 px-5 py-4 text-white flex justify-between items-center border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-sky-500/10 text-sky-400 rounded-xl">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
                {faqData.title}
              </h3>
              <p className="text-[11px] text-slate-400 font-light">
                {faqData.subtitle}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 7 Accordion Questions List */}
        <div className="p-4 overflow-y-auto max-h-[70vh] bg-slate-50 space-y-2.5">
          {faqData.items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={item.id || idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-blue-500 shadow-md'
                    : 'bg-white/80 border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex justify-between items-center p-3.5 sm:p-4 text-left cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3 pr-2">
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-md ${
                      isOpen ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      0{idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                      {item.question}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-full shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-4 pb-4 pt-1 text-slate-600 font-light text-xs sm:text-sm leading-relaxed border-t border-slate-100 mt-1 bg-slate-50/50">
                        <p className="pt-2">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Footer CTA inside Popup */}
        <div className="p-3 bg-white border-t border-slate-200 flex justify-between items-center text-xs">
          <span className="text-slate-500 font-light text-[11px]">Need custom pipe quotes?</span>
          <button
            onClick={() => {
              onClose();
              window.dispatchEvent(new CustomEvent('open-rfq-modal'));
            }}
            className="bg-brand-orange hover:bg-brand-orange/90 text-white font-bold px-3.5 py-1.5 rounded-lg text-[11px] uppercase tracking-wider shadow-sm transition-all cursor-pointer"
          >
            Request Quote
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
