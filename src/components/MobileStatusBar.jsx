import { MessageCircle, Mail } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

export default function MobileStatusBar() {
  const { lang, t } = useTranslation();

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappNumber = '919829050790';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%20Rajshree%20Technoplast,%20I%20am%20interested%20in%20your%20pipes.`;

  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 bg-white/95 dark:bg-slate-955/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-900 px-4 py-3.5 flex gap-4 z-40 shadow-2xl transition-colors duration-300">
      {/* WhatsApp Action */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold py-3 px-4 rounded-xl text-sm shadow-md transition-all cursor-pointer"
      >
        <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
        <span>{lang === 'HI' ? 'व्हाट्सएप' : 'WhatsApp'}</span>
      </a>

      {/* RFQ Quote Action */}
      <button
        onClick={() => window.dispatchEvent(new CustomEvent('open-rfq-modal'))}
        className="flex-1 flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white font-bold py-3 px-4 rounded-xl text-sm shadow-md transition-all cursor-pointer"
      >
        <Mail className="w-4.5 h-4.5" />
        <span>{t('getQuote')}</span>
      </button>
    </div>
  );
}
