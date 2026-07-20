import { ShieldCheck, Award, CheckCircle, Factory, FileCheck, Building2 } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

export default function TrustBar() {
  const { lang } = useTranslation();

  const badges = [
    {
      code: 'IS 4984 : 2018',
      title: lang === 'HI' ? 'एचडीपीई पेयजल पाइप्स' : 'HDPE Water Supply Pipes',
      sub: 'BIS Licence CM/L-7800045812',
      icon: <ShieldCheck className="w-5 h-5 text-brand-orange" />
    },
    {
      code: 'IS 14333 : 1996',
      title: lang === 'HI' ? 'सीवरेज व ड्रेनेज पाइप्स' : 'Sewerage & Drainage Conduit',
      sub: 'Bureau of Indian Standards Approved',
      icon: <FileCheck className="w-5 h-5 text-brand-lightblue" />
    },
    {
      code: 'IS 14151 (Pt 1&2)',
      title: lang === 'HI' ? 'स्प्रिंकलर सिंचाई पाइप्स' : 'Sprinkler Irrigation Pipes',
      sub: 'Govt Agriculture Subsidy Approved',
      icon: <Award className="w-5 h-5 text-emerald-400" />
    },
    {
      code: 'ISO 9001 : 2015',
      title: lang === 'HI' ? 'गुणवत्ता प्रबंधन प्रणाली' : 'Quality Management Certified',
      sub: 'TUV / International Accreditation',
      icon: <CheckCircle className="w-5 h-5 text-blue-400" />
    },
    {
      code: 'JAL JEEVAN MISSION',
      title: lang === 'HI' ? 'जल जीवन मिशन प्रोजेक्ट्स' : 'Jal Jeevan Mission Partner',
      sub: 'PAN-India Rural Water Supply',
      icon: <Building2 className="w-5 h-5 text-cyan-400" />
    },
    {
      code: 'NABL & CIPET TESTED',
      title: lang === 'HI' ? '3rd पार्टी लैब प्रमाणित' : 'Third-Party Lab Tested',
      sub: 'RITES & CIPET Cleared Batches',
      icon: <Factory className="w-5 h-5 text-amber-400" />
    }
  ];

  return (
    <div className="bg-slate-900 border-y border-slate-800 py-6 overflow-hidden relative shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-2 border-b border-slate-800">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping"></span>
            <span>{lang === 'HI' ? 'प्रमाणपत्र एवं मान्यताएं' : 'Accreditations & Government Standards'}</span>
          </div>
          <span className="text-[11px] text-slate-400 font-medium hidden sm:inline-block">
            {lang === 'HI' ? 'भारत सरकार एवं बीआईएस (BIS) मानकों के अनुरूप निर्माण' : 'Conforming to Govt Tenders & Infrastructure Mandates'}
          </span>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {badges.map((badge, idx) => (
            <div
              key={idx}
              className="bg-slate-950/60 hover:bg-slate-800/80 border border-slate-800 hover:border-brand-blue/50 p-3 rounded-2xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-black text-brand-lightblue bg-brand-blue/15 px-2 py-0.5 rounded-lg border border-brand-blue/20">
                  {badge.code}
                </span>
                {badge.icon}
              </div>
              <div>
                <h4 className="text-xs font-bold text-white tracking-tight group-hover:text-brand-lightblue transition-colors line-clamp-1">
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
