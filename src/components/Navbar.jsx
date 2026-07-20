import { useState, useEffect } from 'react';
import { Menu, X, Phone, Globe, HelpCircle, FileText } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';
import FaqDropdown from './FaqDropdown';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  const { lang, toggleLang } = useTranslation();

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

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Manufacturing', href: '#manufacturing' },
    { name: 'Products', href: '#products' },
    { name: 'Quality Control', href: '#quality' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs py-2.5 border-b border-slate-200'
          : 'bg-slate-900 py-3.5 text-white border-b border-slate-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <a href="#home" className="flex items-center shrink-0 gap-3">
            <img
              src="/images/rajshree logo.png"
              alt="Rajshree Group Logo"
              className="h-11 w-auto object-contain rounded p-1 bg-white border border-slate-200"
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-semibold text-xs uppercase tracking-wider transition-colors py-2 relative group ${
                  isScrolled ? 'text-slate-700 hover:text-blue-700' : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Controls & CTA (Desktop) */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Bilingual Language Switcher */}
            <button
              onClick={toggleLang}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer border ${
                isScrolled
                  ? 'bg-slate-100 text-slate-800 border-slate-200 hover:bg-slate-200'
                  : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'
              }`}
              title="Change Language / भाषा बदलें"
            >
              <Globe className="w-3.5 h-3.5 text-amber-500" />
              <span>{lang}</span>
            </button>

            {/* Help / FAQ Icon Button (Triggers FaqDropdown) */}
            <button
              onClick={() => setIsFaqOpen(!isFaqOpen)}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer border ${
                isScrolled
                  ? 'bg-slate-100 text-slate-800 border-slate-200 hover:bg-slate-200'
                  : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'
              }`}
              title="Help & FAQs"
            >
              <HelpCircle className="w-4 h-4 text-blue-500" />
              <span>FAQ</span>
            </button>

            {/* Phone */}
            <a
              href="tel:+919829050790"
              className={`flex items-center gap-1.5 font-bold text-xs tracking-tight transition-colors pl-2 ${
                isScrolled ? 'text-slate-800 hover:text-blue-700' : 'text-slate-200 hover:text-white'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>+91-9829050790</span>
            </a>

            {/* Request Quote Button */}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-rfq-modal'))}
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-4 py-2 rounded-lg shadow-xs transition-all text-xs uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Request Quote</span>
            </button>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={toggleLang}
              className={`px-2 py-1 rounded text-xs font-bold border ${
                isScrolled ? 'bg-slate-100 text-slate-800 border-slate-200' : 'bg-slate-800 text-slate-200 border-slate-700'
              }`}
            >
              {lang}
            </button>

            <button
              onClick={() => setIsFaqOpen(!isFaqOpen)}
              className={`p-1.5 rounded border ${
                isScrolled ? 'bg-slate-100 text-slate-800 border-slate-200' : 'bg-slate-800 text-slate-200 border-slate-700'
              }`}
              title="Help & FAQs"
            >
              <HelpCircle className="w-4 h-4 text-blue-500" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg focus:outline-none cursor-pointer ${
                isScrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-slate-800'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Embedded FAQ Dropdown Panel */}
      <FaqDropdown
        isOpen={isFaqOpen}
        onClose={() => setIsFaqOpen(false)}
      />

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-2 text-left">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-bold uppercase text-slate-800 hover:bg-slate-100 hover:text-blue-700 transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="tel:+919829050790"
              className="flex items-center justify-center gap-2 border border-slate-300 bg-slate-50 text-slate-800 font-bold py-2.5 rounded-lg text-xs"
            >
              <Phone className="w-4 h-4 text-amber-600" />
              <span>Call +91-9829050790</span>
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.dispatchEvent(new CustomEvent('open-rfq-modal'));
              }}
              className="flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold py-2.5 rounded-lg shadow-xs text-xs uppercase tracking-wider cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Request Quote</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
