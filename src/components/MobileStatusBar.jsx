import { Mail, Phone } from 'lucide-react';

export default function MobileStatusBar() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 flex gap-3 z-40 shadow-lg transition-colors duration-300">
      <a
        href="tel:+919829050790"
        className="flex-1 flex items-center justify-center gap-2 border border-slate-300 bg-slate-50 text-slate-800 font-bold py-2.5 px-3 rounded-lg text-xs"
      >
        <Phone className="w-4 h-4 text-amber-600" />
        <span>Call Sales</span>
      </a>

      <button
        onClick={() => window.dispatchEvent(new CustomEvent('open-rfq-modal'))}
        className="flex-1 flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold py-2.5 px-3 rounded-lg text-xs uppercase tracking-wider shadow-xs"
      >
        <Mail className="w-4 h-4" />
        <span>Get Quote</span>
      </button>
    </div>
  );
}
