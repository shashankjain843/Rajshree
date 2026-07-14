import { Phone, Mail, ArrowUp, MessageCircle, MapPin } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900 text-left">
          
          {/* Brand Info (4cols) */}
          <div className="lg:col-span-5 space-y-4">
            <img 
              src="/images/rajshree logo.png" 
              alt="Rajshree Technoplast Logo" 
              className="h-12 w-auto object-contain rounded-lg p-1 bg-white" 
            />
            <p className="text-slate-350 text-sm font-semibold italic mt-2">
              "Empowering Progress Through Liquid Network"
            </p>
            <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed max-w-sm">
              Established in 2012, Rajshree Technoplast (Rajshree Group) is a leading manufacturer of premium HDPE and PVC piping systems. We power municipalities, industrial networks, and agricultural layouts across India.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              <a href="#" className="p-2 rounded-lg bg-slate-900 hover:bg-brand-blue text-slate-400 hover:text-white transition-colors" title="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 hover:bg-brand-blue text-slate-400 hover:text-white transition-colors" title="Twitter / X">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 hover:bg-brand-blue text-slate-400 hover:text-white transition-colors" title="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a 
                href="https://wa.me/919829050790" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-lg bg-slate-900 hover:bg-[#25D366] text-slate-400 hover:text-white transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links (3cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-extrabold text-sm sm:text-base uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-sm font-light">
              <li>
                <a href="#home" className="hover:text-white transition-colors block">Home Overview</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors block">About Us</a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition-colors block">Meet Our Team</a>
              </li>
              <li>
                <a href="#manufacturing" className="hover:text-white transition-colors block">Manufacturing Process</a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors block">Products Catalog</a>
              </li>
              <li>
                <a href="#quality" className="hover:text-white transition-colors block">Quality &amp; Testing</a>
              </li>
              <li>
                <a href="#exhibitions" className="hover:text-white transition-colors block">Exhibitions &amp; Events</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors block">Contact Directory</a>
              </li>
            </ul>
          </div>

          {/* Contact Directory summary (4cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-white font-extrabold text-sm sm:text-base uppercase tracking-wider">Get In Touch</h4>
            <div className="space-y-3.5 text-sm font-light">
              <div className="flex items-start gap-3">
                <Mail className="w-4.5 h-4.5 text-brand-orange shrink-0 mt-0.5" />
                <a href="mailto:rajshreearun123@gmail.com" className="hover:text-white transition-colors truncate">
                  rajshreearun123@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4.5 h-4.5 text-brand-lightblue shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-1">
                  <a href="tel:+919829050790" className="hover:text-white transition-colors">+91-9829050790 (Direct)</a>
                  <a href="tel:+919829054690" className="hover:text-white transition-colors">+91-9829054690</a>
                  <a href="tel:+919460004801" className="hover:text-white transition-colors">+91-9460004801</a>
                </div>
              </div>
              
              <div className="text-xs text-slate-500 border-t border-slate-900 pt-3 space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-400 uppercase tracking-wide block">Regd Office</span>
                    <span className="block mt-0.5 font-light leading-normal">
                      Ajmer Road, Jaipur-302021, Rajasthan
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-400 uppercase tracking-wide block">Plant Location</span>
                    <span className="block mt-0.5 font-light leading-normal">
                      Unit I: C-151, RIICO Industrial Area, Bagru Extn, Bagru, Jaipur, Rajasthan
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p className="font-light text-slate-500">
            &copy; 2026 Rajshree Technoplast Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#contact" className="hover:text-white transition-colors">Terms of Service</a>
            <button 
              onClick={handleScrollToTop}
              className="p-2.5 rounded-full bg-slate-900 hover:bg-brand-blue text-white shadow-md transition-all duration-200 cursor-pointer"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
