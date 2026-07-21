import { ShieldCheck, Award, CheckCircle, Factory, FileCheck, Building2 } from 'lucide-react';

export default function TrustBar() {
  const badges = [
    {
      code: 'IS 4984 : 2018',
      title: 'HDPE Water Supply Pipes',
      sub: 'BIS Licence CM/L-7800045812',
      icon: <ShieldCheck className="w-5 h-5 text-sky-400" />
    },
    {
      code: 'IS 14333 : 1996',
      title: 'Sewerage & Drainage Conduit',
      sub: 'Bureau of Indian Standards Approved',
      icon: <FileCheck className="w-5 h-5 text-blue-400" />
    },
    {
      code: 'IS 14151 (Pt 1&2)',
      title: 'Sprinkler Irrigation Pipes',
      sub: 'Govt Agriculture Subsidy Approved',
      icon: <Award className="w-5 h-5 text-cyan-400" />
    },
    {
      code: 'ISO 9001 : 2015',
      title: 'Quality Management Certified',
      sub: 'TUV / International Accreditation',
      icon: <CheckCircle className="w-5 h-5 text-blue-400" />
    },
    {
      code: 'JAL JEEVAN MISSION',
      title: 'Jal Jeevan Mission Partner',
      sub: 'PAN-India Rural Water Supply',
      icon: <Building2 className="w-5 h-5 text-sky-400" />
    },
    {
      code: 'NABL & CIPET TESTED',
      title: 'Third-Party Lab Tested',
      sub: 'RITES & CIPET Cleared Batches',
      icon: <Factory className="w-5 h-5 text-sky-400" />
    }
  ];

  return (
    <div className="bg-slate-900 border-y border-slate-800 py-6 overflow-hidden relative shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-2 border-b border-slate-800">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping"></span>
            <span>Key Manufacturing Standards &amp; Approvals</span>
          </div>
          <span className="text-[11px] text-slate-400 font-medium hidden sm:inline-block">
            Approved for Public Infrastructure &amp; Government Tenders
          </span>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {badges.map((badge, idx) => (
            <div
              key={idx}
              className="bg-slate-800/60 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-500/50 p-3 rounded-2xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-black text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-lg border border-amber-500/20">
                  {badge.code}
                </span>
                {badge.icon}
              </div>
              <div>
                <h4 className="text-xs font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors line-clamp-1">
                  {badge.title}
                </h4>
                <p className="text-[10px] text-slate-400 font-light mt-0.5 line-clamp-1">
                  {badge.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
