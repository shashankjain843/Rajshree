import { Phone, Mail, ArrowUp, MapPin } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialTiles = siteConfig.footerSocialTiles;

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 pt-0 pb-5 relative text-left transition-colors duration-300">

      {/* Social Feed Marquee Strip */}
      <div className="w-full border-b border-slate-800 py-2 overflow-hidden">
        <p className="text-center text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-1.5">
          📸 FOLLOW OUR JOURNEY
        </p>
        <div className="flex gap-3 animate-marquee whitespace-nowrap">
          {[...socialTiles, ...socialTiles, ...socialTiles, ...socialTiles].map((tile, i) => (
            <div
              key={i}
              className={`inline-flex items-center gap-2 ${tile.bg} border border-slate-800 rounded-lg px-3 py-1 shrink-0 text-xs font-bold text-slate-300 hover:border-sky-400/50 transition-colors`}
            >
              <span className="text-sm">{tile.icon}</span>
              <span>{tile.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 pb-6 border-b border-slate-800">
          
          {/* Column 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            <img 
              src={siteConfig.company.logo} 
              alt={siteConfig.company.logoAlt} 
              className="h-11 w-auto object-contain rounded-lg p-1 bg-white shadow-sm" 
            />
            <p className="text-slate-300 text-xs font-semibold italic mt-1">
              Leading BIS &amp; ISO Certified HDPE &amp; PVC Pipe Manufacturer in Rajasthan, India
            </p>
            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm">
              {siteConfig.company.name} and {siteConfig.company.legalName} specialize in manufacturing premium-grade HDPE pipes, PVC conduits, and MDPE lines for agricultural irrigation and municipal water infrastructure across India.
            </p>
            
          </div>

          {/* Column 2: QUICK LINKS (3 cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-xs font-light">
              {siteConfig.navigation.map((nav, idx) => (
                <li key={idx}>
                  <a href={nav.href} className="hover:text-white transition-colors block text-slate-400">
                    {nav.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: GET IN TOUCH & REGD OFFICE (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="space-y-2">
              <h4 className="text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider">
                Get In Touch
              </h4>
              <div className="space-y-1.5 text-xs font-light">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <a href={`mailto:${siteConfig.contact.primaryEmail}`} className="hover:text-white text-slate-400 transition-colors">
                    {siteConfig.contact.primaryEmail}
                  </a>
                </div>
                <div className="flex items-start gap-2.5">
                  <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <div className="flex flex-col space-y-0.5">
                    {siteConfig.contact.phoneNumbers.slice(0, 2).map((ph, idx) => (
                      <a key={idx} href={`tel:${ph.number}`} className="hover:text-white text-slate-400 transition-colors">
                        {ph.number}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-3">
              <h5 className="text-slate-300 font-extrabold text-[11px] uppercase tracking-wider block mb-1">
                Registered Office
              </h5>
              <div className="flex items-start gap-2 text-xs text-slate-400 font-light leading-relaxed">
                <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <p>{siteConfig.contact.corporateOffice.address}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & meta row */}
        <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <p className="font-light text-slate-400 text-[11px]">
            &copy; 2026 {siteConfig.company.legalName}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => window.dispatchEvent(new Event('open-privacy-modal'))}
              className="hover:text-white text-slate-400 transition-colors cursor-pointer bg-transparent border-0 p-0 text-[11px]"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => window.dispatchEvent(new Event('open-terms-modal'))}
              className="hover:text-white text-slate-400 transition-colors cursor-pointer bg-transparent border-0 p-0 text-[11px]"
            >
              Terms of Service
            </button>
            <button 
              onClick={handleScrollToTop}
              className="p-2 rounded-full bg-slate-800 hover:bg-sky-500 text-white shadow-md transition-all duration-200 cursor-pointer"
              title="Scroll to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
      </div>
    </footer>
  );
}
