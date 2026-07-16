import { Phone, Mail, ArrowUp, MapPin } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

export default function Footer() {
  const { lang, t } = useTranslation();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialTiles = [
    { label: 'Factory Tour', bg: 'bg-brand-blue/15', icon: '🏭' },
    { label: 'Quality Lab', bg: 'bg-brand-orange/15', icon: '🔬' },
    { label: 'Pipe Extrusion', bg: 'bg-emerald-500/15', icon: '⚙️' },
    { label: 'Team Rajshree', bg: 'bg-purple-500/15', icon: '👷' },
    { label: 'RAJPLASTE Expo', bg: 'bg-amber-500/15', icon: '🏆' },
    { label: 'HDPE Delivery', bg: 'bg-brand-blue/15', icon: '🚛' },
    { label: 'IS Certification', bg: 'bg-emerald-500/15', icon: '📋' },
    { label: 'Water Projects', bg: 'bg-sky-500/15', icon: '💧' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-0 pb-8 relative text-left transition-colors duration-300">

      {/* Social Feed Marquee Strip */}
      <div className="w-full border-b border-slate-900 py-3 overflow-hidden">
        <p className="text-center text-[10px] font-extrabold uppercase tracking-widest text-slate-600 mb-4">
          {lang === 'HI' ? '📸 हमारी यात्रा को फॉलो करें' : '📸 FOLLOW OUR JOURNEY'}
        </p>
        <div className="flex gap-4 animate-marquee whitespace-nowrap">
          {[...socialTiles, ...socialTiles].map((tile, i) => (
            <div
              key={i}
              className={`inline-flex items-center gap-2 ${tile.bg} border border-slate-800 rounded-xl px-4 py-2 shrink-0 text-xs font-bold text-slate-300`}
            >
              <span className="text-base">{tile.icon}</span>
              <span>{tile.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Match 3-Column Layout Exactly */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-8 border-b border-slate-900">
          
          {/* Column 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <img 
              src="/images/rajshree logo.png" 
              alt="Rajshree Group Logo" 
              className="h-14 w-auto object-contain rounded-lg p-1 bg-white shadow-sm" 
            />
            <p className="text-slate-350 text-sm font-semibold italic mt-3">
              {t('footTagline')}
            </p>
            <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed max-w-sm">
              {t('footDesc')}
            </p>
            
            {/* Social Icons inside small dark square boxes */}
            <div className="flex space-x-3 pt-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-brand-blue text-slate-450 hover:text-white transition-all flex items-center justify-center border border-slate-850/60 shadow-inner"
                title="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-brand-blue text-slate-450 hover:text-white transition-all flex items-center justify-center border border-slate-850/60 shadow-inner"
                title="Twitter / X"
              >
                {/* SVG for X Logo */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-brand-blue text-slate-455 hover:text-white transition-all flex items-center justify-center border border-slate-850/60 shadow-inner"
                title="LinkedIn"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://wa.me/919829050790"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-[#25D366] text-slate-455 hover:text-white transition-all flex items-center justify-center border border-slate-850/60 shadow-inner"
                title="WhatsApp"
              >
                {/* SVG for Message bubble / WhatsApp symbol */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.324 5.328 0 11.894 0c3.18 0 6.171 1.242 8.423 3.498 2.253 2.256 3.491 5.253 3.488 8.435-.006 6.571-5.33 11.895-11.896 11.895-2.006-.002-3.98-.51-5.729-1.478L0 24zm6.549-3.267c1.615.957 3.2 1.463 4.79 1.466 5.485 0 9.948-4.468 9.953-9.957.002-2.659-1.033-5.161-2.915-7.046C16.556 3.31 14.06 2.275 11.4 2.278c-5.485 0-9.947 4.471-9.952 9.96-.001 1.687.452 3.327 1.314 4.772L1.75 22.252l5.441-1.425z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: QUICK LINKS (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-extrabold text-sm sm:text-base uppercase tracking-wider">
              {t('footQuickLinks')}
            </h4>
            <ul className="space-y-3 text-sm font-light">
              <li>
                <a href="#home" className="hover:text-white transition-colors block text-slate-450">
                  {t('footHomeOverview')}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors block text-slate-450">
                  {t('footAboutRajshree')}
                </a>
              </li>
              <li>
                <a href="#manufacturing" className="hover:text-white transition-colors block text-slate-450">
                  {t('footMfgProcess')}
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors block text-slate-450">
                  {t('footProductsCatalog')}
                </a>
              </li>
              <li>
                <a href="#quality" className="hover:text-white transition-colors block text-slate-450">
                  {t('footQualityCerts')}
                </a>
              </li>
              <li>
                <a href="#logistics" className="hover:text-white transition-colors block text-slate-450">
                  {t('footLogisticsDispatch')}
                </a>
              </li>
              <li>
                <a href="#exhibitions" className="hover:text-white transition-colors block text-slate-450">
                  {t('footExhibitionsEvents')}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: GET IN TOUCH & REGD OFFICE (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <h4 className="text-white font-extrabold text-sm sm:text-base uppercase tracking-wider">
                {t('footGetInTouch')}
              </h4>
              <div className="space-y-3 text-sm font-light">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                  <a href="mailto:rajshreearun123@gmail.com" className="hover:text-white text-slate-450 transition-colors">
                    rajshreearun123@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-brand-lightblue shrink-0 mt-0.5" />
                  <div className="flex flex-col space-y-1">
                    <a href="tel:+919829050790" className="hover:text-white text-slate-450 transition-colors">+91-9829050790</a>
                    <a href="tel:+919829054690" className="hover:text-white text-slate-450 transition-colors">+91-9829054690</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider line as seen in screenshot */}
            <div className="border-t border-slate-900 pt-4">
              <h5 className="text-slate-400 font-extrabold text-xs uppercase tracking-wider block mb-2">
                {t('footRegdOffice')}
              </h5>
              <div className="flex items-start gap-2.5 text-xs text-slate-500 font-light leading-relaxed">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <p>{t('footRegdOfficeAddr')}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & meta row */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p className="font-light text-slate-600">
            &copy; 2026 Rajshree Technoplast Pvt Ltd. {t('footRights')}
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => window.dispatchEvent(new Event('open-privacy-modal'))}
              className="hover:text-white text-slate-500 transition-colors cursor-pointer bg-transparent border-0 p-0 text-xs"
            >
              {lang === 'HI' ? 'गोपनीयता नीति' : 'Privacy Policy'}
            </button>
            <button
              onClick={() => window.dispatchEvent(new Event('open-terms-modal'))}
              className="hover:text-white text-slate-500 transition-colors cursor-pointer bg-transparent border-0 p-0 text-xs"
            >
              {lang === 'HI' ? 'सेवा की शर्तें' : 'Terms of Service'}
            </button>
            <button 
              onClick={handleScrollToTop}
              className="p-2.5 rounded-full bg-slate-900 hover:bg-brand-blue text-white shadow-md transition-all duration-200 cursor-pointer"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
      </div>
    </footer>
  );
}
