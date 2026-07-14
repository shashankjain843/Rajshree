import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import logo from '../assets/logo.svg';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    { name: 'Products', href: '#products' },
    { name: 'Manufacturing', href: '#manufacturing' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-2 border-b border-slate-200'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center shrink-0">
            <img
              src={logo}
              alt="Rajshree Technoplast Logo"
              className={`transition-all duration-300 ${
                isScrolled ? 'h-10' : 'h-12'
              } w-auto`}
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium text-sm transition-colors duration-200 hover:text-brand-blue relative py-2 group ${
                  isScrolled ? 'text-slate-700' : 'text-white lg:text-slate-800'
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-blue transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA & Phone (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+919829050790"
              className={`flex items-center gap-2 font-semibold text-sm transition-colors ${
                isScrolled ? 'text-slate-700 hover:text-brand-blue' : 'text-slate-800 hover:text-brand-blue'
              }`}
            >
              <Phone className="w-4 h-4 text-brand-orange animate-pulse" />
              <span>+91-9829050790</span>
            </a>
            <a
              href="#contact"
              className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 text-sm"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <a
              href="tel:+919829050790"
              className="p-2 rounded-lg bg-slate-100 text-brand-blue hover:bg-slate-200"
              title="Call Us"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[73px] bg-white border-b border-slate-200 shadow-xl transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-brand-blue transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <a
              href="tel:+919829050790"
              className="flex items-center justify-center gap-2 border border-slate-200 bg-slate-50 text-slate-800 font-bold py-3 rounded-lg"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              Call Support
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white font-bold py-3 rounded-lg shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
