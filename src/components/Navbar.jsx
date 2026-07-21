import { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import FaqDropdown from './FaqDropdown';
import { siteConfig } from '../config/siteConfig';

export default function Navbar() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFaqOpen, setIsFaqOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 0) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = siteConfig.navigation;

  const handleLinkClick = (e, link) => {
    if (link.name === 'FAQ' || link.href === '#faq') {
      e.preventDefault();
      setIsFaqOpen((prev) => !prev);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isAtTop
          ? 'bg-slate-950/85 backdrop-blur-sm border-b border-slate-800/60 py-4 text-left'
          : 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-md py-3 text-left'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <img 
              src={siteConfig.company.logo} 
              alt={siteConfig.company.logoAlt} 
              className="h-10 sm:h-11 w-auto object-contain rounded-lg p-1 bg-white shadow-sm border border-slate-200 transition-transform duration-300 group-hover:scale-105" 
            />
            <div className="flex flex-col text-left">
              <span className={`font-extrabold text-sm sm:text-base tracking-tight leading-tight transition-colors duration-300 ${
                isAtTop ? 'text-white' : 'text-slate-900'
              }`}>
                {siteConfig.company.name}
              </span>
              <span className={`text-[10px] font-semibold tracking-wider uppercase transition-colors duration-300 ${
                isAtTop ? 'text-sky-400' : 'text-slate-500'
              }`}>
                {siteConfig.company.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className={`font-semibold text-xs uppercase tracking-wider transition-colors duration-300 py-2 relative group cursor-pointer ${
                  isAtTop
                    ? 'text-slate-200 hover:text-white'
                    : 'text-slate-800 hover:text-blue-600 font-bold'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isAtTop ? 'bg-sky-400' : 'bg-blue-600'
                }`}></span>
              </a>
            ))}
          </div>

          {/* Right CTA Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-rfq-modal'))}
              className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-4.5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 text-xs uppercase tracking-wider cursor-pointer"
            >
              Request Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg focus:outline-none cursor-pointer transition-colors ${
                isAtTop ? 'text-white hover:bg-slate-800' : 'text-slate-800 hover:bg-slate-100'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Header FAQ Click-to-Toggle Popup Overlay */}
      <FaqDropdown
        isOpen={isFaqOpen}
        onClose={() => setIsFaqOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-slate-950 border-b border-slate-800 shadow-2xl px-4 pt-3 pb-6 space-y-2 text-left">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                handleLinkClick(e, link);
                setIsMobileMenuOpen(false);
              }}
              className="block px-3 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white hover:bg-slate-900 hover:text-sky-400 transition-all cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.dispatchEvent(new CustomEvent('open-rfq-modal'));
              }}
              className="flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white font-bold py-2.5 rounded-lg shadow-md cursor-pointer text-xs uppercase tracking-wider w-full"
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
