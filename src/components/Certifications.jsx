import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export default function Certifications() {
  const certs = [
    {
      id: 'isi',
      title: 'ISI Certification',
      sub: 'Bureau of Indian Standards',
      desc: 'Conforms to IS:4984 (HDPE Water Supply), IS:14333 (HDPE Sewerage), and IS:4985 (PVC Pipe) specifications.',
      svg: (
        <svg viewBox="0 0 100 120" className="w-20 h-24 mx-auto" fill="currentColor">
          <rect x="5" y="5" width="90" height="90" rx="8" fill="none" stroke="#1e3a8a" strokeWidth="6" />
          <line x1="50" y1="5" x2="50" y2="95" stroke="#1e3a8a" strokeWidth="4" />
          <circle cx="50" cy="50" r="28" fill="none" stroke="#0ea5e9" strokeWidth="5" />
          <text x="50" y="58" fontFamily="sans-serif" fontSize="22" fontWeight="900" textAnchor="middle" fill="#1e3a8a">ISI</text>
          <text x="50" y="112" fontFamily="sans-serif" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#64748B">IS:4984 / 4985</text>
        </svg>
      )
    },
    {
      id: 'iaf',
      title: 'IAF Member',
      sub: 'International Accreditation Forum',
      desc: 'Globally recognized certification under the multilateral recognition arrangement.',
      svg: (
        <svg viewBox="0 0 100 100" className="w-20 h-20 mx-auto" fill="currentColor">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#1e3a8a" strokeWidth="5" />
          <path d="M 50,15 L 80,30 L 80,60 C 80,75 65,88 50,92 C 35,88 20,75 20,60 L 20,30 Z" fill="#1e3a8a" opacity="0.1" />
          <path d="M 50,20 L 75,32 L 75,58 C 75,70 63,82 50,86 C 37,82 25,70 25,58 L 25,32 Z" fill="none" stroke="#1e3a8a" strokeWidth="4" />
          <text x="50" y="52" fontFamily="sans-serif" fontSize="18" fontWeight="900" textAnchor="middle" fill="#1e3a8a">IAF</text>
          <path d="M30,60 C40,65 60,65 70,60" fill="none" stroke="#0ea5e9" strokeWidth="3" />
        </svg>
      )
    },
    {
      id: 'egac',
      title: 'EGAC Accredited',
      sub: 'Standard Quality System',
      desc: 'Certified accreditation validating rigorous manufacturing quality management systems.',
      svg: (
        <svg viewBox="0 0 100 100" className="w-20 h-20 mx-auto" fill="currentColor">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#1e3a8a" strokeWidth="5" strokeDasharray="6 3" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="#0ea5e9" strokeWidth="4" />
          <text x="50" y="56" fontFamily="sans-serif" fontSize="16" fontWeight="900" textAnchor="middle" fill="#1e3a8a">EGAC</text>
          <line x1="20" y1="50" x2="80" y2="50" stroke="#1e3a8a" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: 'qro',
      title: 'QRO Certified',
      sub: 'ISO 9001:2015 Compliant',
      desc: 'Quality management systems certified for production safety, reliability, and continuous improvement.',
      svg: (
        <svg viewBox="0 0 100 100" className="w-20 h-20 mx-auto" fill="currentColor">
          <polygon points="50,5 90,30 90,70 50,95 10,70 10,30" fill="none" stroke="#1e3a8a" strokeWidth="5" />
          <polygon points="50,12 82,34 82,66 50,88 18,66 18,34" fill="#0ea5e9" opacity="0.15" />
          <text x="50" y="55" fontFamily="sans-serif" fontSize="20" fontWeight="900" textAnchor="middle" fill="#1e3a8a">QRO</text>
          <text x="50" y="72" fontFamily="sans-serif" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#0ea5e9">ISO 9001</text>
        </svg>
      )
    }
  ];

  return (
    <section id="certifications" className="py-12 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950/40 via-slate-900 to-slate-950 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-base text-sky-400 font-bold tracking-wide uppercase">Accredited Standards</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certified Quality You Can Build On
          </p>
          <div className="mt-4 h-1.5 w-24 bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 font-light text-sm sm:text-base">
            Every RAJSHREE pipe is subjected to rigorous testing in our modern laboratories, satisfying both national Indian Standards (ISI) and global regulatory frameworks.
          </p>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certs.map((c, idx) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-slate-800/40 border border-slate-800 hover:border-sky-500/30 rounded-2xl p-5 sm:p-6 flex flex-col justify-between items-center text-center transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/10 hover:-translate-y-1 group"
            >
              {/* Badge Visual */}
              <div className="bg-white p-4 rounded-2xl shadow-lg w-24 h-24 flex items-center justify-center mb-4 group-hover:scale-105 transition-all duration-300">
                {c.svg}
              </div>

              {/* Title & info */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                  {c.title}
                </h3>
                <p className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                  {c.sub}
                </p>
                <p className="text-xs sm:text-sm text-slate-400 font-light mt-3 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quality Commitment Callout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-10 p-5 sm:p-6 bg-slate-800/60 rounded-2xl border border-slate-800 flex flex-col md:flex-row items-center gap-4 max-w-4xl mx-auto"
        >
          <div className="p-3 bg-sky-500/10 rounded-full text-sky-400 shrink-0">
            <ShieldCheck className="w-10 h-10" />
          </div>
          <div className="text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">Our Zero-Defect Manufacturing Mandate</h4>
            <p className="text-xs sm:text-sm text-slate-400 font-light mt-1">
              Rajshree Group enforces strict raw material testing, checking Melt Flow Index (MFI), density, and moisture content before materials hit the extruder. Post-production checks ensure perfect roundness, wall thickness, hydrostatic load capacity, and tensile stretch coefficients.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
