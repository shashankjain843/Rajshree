import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, Sun, Moon, Globe } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, toggleLang, t } = useTranslation();
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const navLinks = [
    { name: t('navHome'), href: '#home' },
    { name: t('navAbout'), href: '#about' },
    { name: t('navMfg'), href: '#manufacturing' },
    { name: t('navProducts'), href: '#products' },
    { name: t('navQuality'), href: '#quality' },
    { name: t('navExhibitions'), href: '#exhibitions' },
    { name: t('navContact'), href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-md py-2 border-b border-slate-200 dark:border-slate-900'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center shrink-0">
            <img
              src="/images/rajshree logo.png"
              alt="Rajshree Group Logo"
              className={`transition-all duration-300 object-contain rounded-lg p-1 bg-white shadow-sm ${
                isScrolled ? 'h-11' : 'h-14'
              } w-auto`}
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium text-sm transition-colors duration-200 hover:text-brand-blue dark:hover:text-brand-lightblue relative py-2 group ${
                  isScrolled ? 'text-slate-700 dark:text-slate-300' : 'text-white'
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-blue dark:bg-brand-lightblue transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA & Phone (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                isScrolled
                  ? 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800'
                  : 'bg-white/10 text-white hover:bg-white/20 dark:bg-slate-900/30'
              }`}
              title={t('changeLang')}
            >
              <Globe className="w-4 h-4 text-brand-orange" />
              <span>{lang}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl transition-all cursor-pointer ${
                isScrolled 
                  ? 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800' 
                  : 'bg-white/10 text-white hover:bg-white/20 dark:bg-slate-900/30'
              }`}
              title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            <a
              href="tel:+919829050790"
              className={`flex items-center gap-2 font-semibold text-sm transition-colors ${
                isScrolled ? 'text-slate-700 dark:text-slate-300 hover:text-brand-blue' : 'text-white hover:text-brand-lightblue'
              }`}
            >
              <Phone className="w-4 h-4 text-brand-orange animate-pulse" />
              <span>+91-9829050790</span>
            </a>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-rfq-modal'))}
              className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 text-sm cursor-pointer"
            >
              {t('getQuote')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            {/* Mobile Language Toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 px-2.5 py-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 text-xs font-extrabold cursor-pointer"
              title="Change Language"
            >
              <Globe className="w-3.5 h-3.5 text-brand-orange" />
              <span>{lang}</span>
            </button>

            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer"
              title="Toggle Theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <a
              href="tel:+919829050790"
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-brand-blue dark:text-brand-lightblue hover:bg-slate-200 dark:hover:bg-slate-800"
              title="Call Us"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 focus:outline-none cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[73px] bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-900 shadow-xl transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-brand-blue dark:hover:text-brand-lightblue transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <a
              href="tel:+919829050790"
              className="flex items-center justify-center gap-2 border border-slate-250 dark:border-slate-800 bg-slate-55 dark:bg-slate-900 text-slate-800 dark:text-slate-205 font-bold py-3 rounded-lg"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              {t('callSupport')}
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white font-bold py-3 rounded-lg shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              {t('getQuote')}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
