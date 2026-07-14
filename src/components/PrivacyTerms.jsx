import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Lock, FileText, Check } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

export default function PrivacyTerms() {
  const { lang, t } = useTranslation();
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    // Check cookie consent in localStorage
    const consent = localStorage.getItem('rajshree-cookie-consent');
    if (!consent) {
      // Delay display by 2 seconds
      const timer = setTimeout(() => setShowCookieBanner(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleOpenPrivacy = () => setIsPrivacyOpen(true);
    const handleOpenTerms = () => setIsTermsOpen(true);

    window.addEventListener('open-privacy-modal', handleOpenPrivacy);
    window.addEventListener('open-terms-modal', handleOpenTerms);

    return () => {
      window.removeEventListener('open-privacy-modal', handleOpenPrivacy);
      window.removeEventListener('open-terms-modal', handleOpenTerms);
    };
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('rajshree-cookie-consent', 'accepted');
    setShowCookieBanner(false);
  };

  return (
    <>
      {/* Privacy Policy Modal */}
      <AnimatePresence>
        {isPrivacyOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsPrivacyOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-slate-200 dark:border-slate-800 text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-slate-150 dark:border-slate-800 flex justify-between items-center sticky top-0 bg-white dark:bg-slate-900 z-10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-brand-blue/10 text-brand-blue rounded-xl">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-855 dark:text-white">
                      {lang === 'HI' ? 'गोपनीयता नीति' : 'Privacy Policy'}
                    </h3>
                    <p className="text-[10px] text-slate-400 font-medium">Rajshree Technoplast Pvt. Ltd.</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsPrivacyOpen(false)}
                  className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4 text-slate-655 dark:text-slate-350 text-xs sm:text-sm font-light leading-relaxed">
                <p className="font-bold text-slate-800 dark:text-white">Last Updated: July 2026</p>
                <p>
                  At Rajshree Technoplast, we prioritize the protection of your commercial and personal data. This policy details how we handle information received via our website forms, direct phone connections, and email integrations.
                </p>

                <h4 className="font-bold text-slate-800 dark:text-white pt-2 text-sm uppercase">1. Information Collection</h4>
                <p>
                  We only gather user-submitted data, including your name, corporate email address, contact numbers, and specific pipe sizing inquiries. This information is used strictly to prepare commercial quotes and register product warranties.
                </p>

                <h4 className="font-bold text-slate-800 dark:text-white pt-2 text-sm uppercase">2. Email & Lead Routing</h4>
                <p>
                  Lead inquiries are securely routed using SMTP protocols directly to our Jaipur sales office at <strong>rajshreearun123@gmail.com</strong>. We do not license, sell, or rent your database info to third-party telemarketing networks.
                </p>

                <h4 className="font-bold text-slate-800 dark:text-white pt-2 text-sm uppercase">3. Data Durability & Retention</h4>
                <p>
                  We store customer records and warranty details in compliance with Indian commercial standards to facilitate product testing audits and post-sale technical support. You can request record updates or erasure by emailing us.
                </p>
              </div>

              {/* Footer */}
              <div className="p-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-150 dark:border-slate-800 flex justify-end">
                <button
                  onClick={() => setIsPrivacyOpen(false)}
                  className="bg-brand-blue hover:bg-brand-darkblue text-white font-bold py-2.5 px-6 rounded-xl text-xs cursor-pointer transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Terms & Conditions Modal */}
      <AnimatePresence>
        {isTermsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-955/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsTermsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-slate-200 dark:border-slate-800 text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-slate-150 dark:border-slate-800 flex justify-between items-center sticky top-0 bg-white dark:bg-slate-900 z-10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-brand-orange/10 text-brand-orange rounded-xl">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-855 dark:text-white">
                      {lang === 'HI' ? 'सेवा की शर्तें' : 'Terms & Conditions'}
                    </h3>
                    <p className="text-[10px] text-slate-400 font-medium">Rajshree Technoplast Pvt. Ltd.</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsTermsOpen(false)}
                  className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4 text-slate-655 dark:text-slate-355 text-xs sm:text-sm font-light leading-relaxed">
                <p className="font-bold text-slate-800 dark:text-white">Last Updated: July 2026</p>
                <p>
                  By browsing this corporate platform, you agree to comply with the terms and conditions outlined below.
                </p>

                <h4 className="font-bold text-slate-800 dark:text-white pt-2 text-sm uppercase">1. Commercial Quotes</h4>
                <p>
                  All pipe specifications, dimensions, flow calculators, and weight estimates are for initial evaluation and engineering estimates. Final commercial bids, pricing lists, and delivery schedules will be documented in official Proforma Invoices sent from our head office.
                </p>

                <h4 className="font-bold text-slate-800 dark:text-white pt-2 text-sm uppercase">2. Warranty Scope</h4>
                <p>
                  Product warranty registrations are subject to verification of sales invoices, batch numbers, and installation under standard IS:7634 laying specifications. We are not liable for installation failures caused by unauthorized jointing or incorrect pressure loads.
                </p>

                <h4 className="font-bold text-slate-800 dark:text-white pt-2 text-sm uppercase">3. Governing Law</h4>
                <p>
                  Any commercial disputes, compliance requirements, or claims arising from transactions with Rajshree Technoplast Pvt Ltd shall be governed by the courts located in Jaipur, Rajasthan, India.
                </p>
              </div>

              {/* Footer */}
              <div className="p-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-150 dark:border-slate-800 flex justify-end">
                <button
                  onClick={() => setIsTermsOpen(false)}
                  className="bg-brand-orange hover:bg-brand-darkorange text-white font-bold py-2.5 px-6 rounded-xl text-xs cursor-pointer transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cookie Consent Banner */}
      <AnimatePresence>
        {showCookieBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-45 bg-slate-900/95 dark:bg-slate-950/95 backdrop-blur-md text-white p-5 rounded-2xl border border-slate-800 shadow-2xl flex flex-col gap-4 text-left"
          >
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-brand-orange shrink-0 mt-0.5" />
              <div>
                <h4 className="font-extrabold text-sm tracking-tight">
                  {lang === 'HI' ? 'कुकी सहमति' : 'Cookie Consent'}
                </h4>
                <p className="text-slate-400 text-xs font-light mt-1 leading-relaxed">
                  {lang === 'HI' 
                    ? 'हम अपनी वेबसाइट पर आपके अनुभव को बेहतर बनाने के लिए कुकीज़ का उपयोग करते हैं।' 
                    : 'We use cookies to analyze web traffic and optimize calculators. By clicking "Accept", you agree to our privacy policy.'}
                </p>
              </div>
            </div>
            
            <div className="flex items-center justify-end gap-3 text-xs">
              <button
                onClick={() => {
                  // Fire event to open privacy policy
                  window.dispatchEvent(new Event('open-privacy-modal'));
                }}
                className="text-slate-400 hover:text-white transition-colors py-1 cursor-pointer"
              >
                {lang === 'HI' ? 'नीति पढ़ें' : 'Read Policy'}
              </button>
              <button
                onClick={acceptCookies}
                className="bg-brand-orange hover:bg-brand-orange/90 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-1.5 shadow transition-all cursor-pointer"
              >
                <Check className="w-3.5 h-3.5" />
                <span>{lang === 'HI' ? 'स्वीकार करें' : 'Accept'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
