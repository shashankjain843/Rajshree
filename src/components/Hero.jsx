import { ArrowRight, ShieldCheck, Download } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

export default function Hero() {
  const { lang } = useTranslation();

  return (
    <section id="home" className="relative pt-28 pb-20 bg-slate-900 text-white overflow-hidden border-b border-slate-800">
      {/* Background Graphic Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-950 opacity-90 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, Badges, CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* BIS & ISO Certification Pill */}
            <div className="inline-flex items-center gap-2 bg-slate-800/90 border border-slate-700 px-3.5 py-1.5 rounded-full shadow-xs">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                BIS IS:4984 | IS:14333 | IS:4985 Certified Manufacturer
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              {lang === 'HI' ? (
                <>उच्च-घनत्व वाले <span className="text-amber-500">HDPE और PVC</span> पाइपों के अग्रणी निर्माता</>
              ) : (
                <>High-Density <span className="text-amber-500">HDPE &amp; PVC</span> Piping Systems</>
              )}
            </h1>

            {/* Subheading */}
            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
              {lang === 'HI' 
                ? 'राजश्री टेक्नोपलास्ट राजस्थान की प्रमुख निर्माण इकाई है, जो जल जीवन मिशन, कृषि सिंचाई, पेयजल आपूर्ति और औद्योगिक जल निकासी के लिए शत-प्रतिशत वर्जिन पॉलीमर पाइप प्रदान करती है।'
                : 'Rajshree Technoplast Pvt. Ltd. operates 75,000+ sq. ft. automated extrusion facilities in Jaipur, producing 100% virgin polymer conduits for potable water distribution, sewerage, and agricultural irrigation.'}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('open-rfq-modal'))}
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wider cursor-pointer"
              >
                <span>Request Wholesale Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="/docs/Rajshree-Product-Catalogue.pdf"
                download="Rajshree-Product-Catalogue.pdf"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Rajshree Product Catalogue PDF download started. (Replace /docs/Rajshree-Product-Catalogue.pdf with actual file)");
                }}
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Download Product Catalogue (PDF)</span>
              </a>
            </div>

            {/* Credentials Row */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="text-xl font-extrabold text-white">75,000+ SQ. FT.</p>
                <p className="text-xs text-slate-400 font-light">Dual Extrusion Plants</p>
              </div>
              <div>
                <p className="text-xl font-extrabold text-white">PE100 / PE80</p>
                <p className="text-xs text-slate-400 font-light">100% Virgin Resins</p>
              </div>
              <div>
                <p className="text-xl font-extrabold text-white">10,000+ MT</p>
                <p className="text-xs text-slate-400 font-light">Annual Capacity</p>
              </div>
            </div>

          </div>

          {/* Right Column: High Quality Factory Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border-4 border-slate-800 bg-slate-900 shadow-2xl">
              <img
                src="/images/hero-hdpe-pipes-closeup.jpg"
                alt="Rajshree Black HDPE Pipe Coils & Extrusions"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="p-4 bg-slate-950 text-left border-t border-slate-800">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                  FLAGSHIP EXTRUSION
                </span>
                <p className="text-xs text-slate-200 font-bold mt-1">
                  Black HDPE Pressure Pipe (SDR 11 / PN 16) - IS 4984 Standard
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
