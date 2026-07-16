import { motion } from 'framer-motion';
import { Leaf, Droplet, RefreshCw, ShieldAlert, Heart, HardHat } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

export default function Sustainability() {
  const { lang, t } = useTranslation();

  const ecoCards = [
    {
      icon: <Leaf className="w-6 h-6 text-[#00A86B]" />,
      title: t('susCompliance'),
      desc: t('susComplianceDesc'),
      badge: lang === 'HI' ? 'स्वीकृत' : 'Certified'
    },
    {
      icon: <Droplet className="w-6 h-6 text-[#00A86B]" />,
      title: t('susEfficiency'),
      desc: t('susEfficiencyDesc'),
      badge: lang === 'HI' ? '98% रिसाइकल' : '98% Recycled'
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-[#00A86B]" />,
      title: t('susResin'),
      desc: t('susResinDesc'),
      badge: lang === 'HI' ? '0% बर्बादी' : 'Zero Waste'
    }
  ];

  const safetyProtocols = [
    {
      icon: <HardHat className="w-5 h-5 text-brand-orange" />,
      text: lang === 'HI' ? 'कारखाने के फर्श पर सभी कार्य समय के दौरान सुरक्षा हेलमेट और स्टील-टो जूते पहनना अनिवार्य है।' : 'Mandatory wear of safety helmets, eye protection, and steel-toe safety boots at all times on the floor.'
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-brand-orange" />,
      text: lang === 'HI' ? 'आपातकालीन अग्निशमन उपकरण हर 15 मीटर पर तैनात हैं और मासिक जांच से गुजरते हैं।' : 'Emergency fire extinguishers and fire hydration stations are active every 15 meters on production floors.'
    },
    {
      icon: <Heart className="w-5 h-5 text-brand-orange" />,
      text: lang === 'HI' ? 'कर्मचारियों के लिए प्राथमिक चिकित्सा कक्ष उपलब्ध है और स्थानीय आपातकालीन सेवाओं के साथ 24/7 सहयोग है।' : 'First-aid stations staffed with qualified responders, paired with direct hospital emergency contacts.'
    }
  ];

  return (
    <section id="sustainability" className="py-12 bg-slate-50 dark:bg-slate-950 overflow-hidden transition-colors duration-300 text-left border-t border-slate-100 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-base text-brand-blue dark:text-brand-lightblue font-bold tracking-wide uppercase">
            {t('susTitle')}
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('susSubtitle')}
          </p>
          <div className="mt-4 h-1.5 w-24 bg-brand-orange mx-auto rounded-full"></div>
          <p className="mt-4 text-sm sm:text-base text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-xl mx-auto">
            {t('susDesc')}
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Eco-Initiatives (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2.5">
              <Leaf className="w-5 h-5 text-[#00A86B]" />
              <span>{lang === 'HI' ? 'पर्यावरण के अनुकूल विनिर्माण' : 'Eco-Conscious Manufacturing'}</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ecoCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between text-left group ${
                    idx === 0 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-[#00A86B]/10 rounded-xl text-[#00A86B]">
                        {card.icon}
                      </div>
                      <span className="text-[10px] font-extrabold text-[#00A86B] bg-[#00A86B]/15 px-2 py-0.5 rounded uppercase">
                        {card.badge}
                      </span>
                    </div>
                    <h4 className="font-extrabold text-slate-850 dark:text-white text-base">
                      {card.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light mt-1.5 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: HSE Safety First Block (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between shadow-xl text-white relative overflow-hidden"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-bl-full pointer-events-none"></div>

            <div>
              <span className="text-[10px] font-black text-brand-orange bg-brand-orange/15 px-2.5 py-1 rounded uppercase tracking-wider">
                HSE MANAGEMENT
              </span>
              <h3 className="text-2xl font-black mt-4 tracking-tight leading-snug">
                {t('susSafetyTitle')}
              </h3>
              <p className="text-slate-450 text-xs sm:text-sm font-light mt-2 leading-relaxed">
                {t('susSafetyDesc')}
              </p>

              {/* Protocols checklist */}
              <div className="space-y-4 mt-8">
                {safetyProtocols.map((protocol, idx) => (
                  <div key={idx} className="flex gap-3.5 items-start">
                    <div className="p-2 bg-brand-orange/20 text-brand-orange rounded-lg shrink-0 mt-0.5">
                      {protocol.icon}
                    </div>
                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      {protocol.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Safety Stats strip */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-800">
              <div className="text-left">
                <p className="text-2xl font-black text-brand-orange">100%</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-extrabold mt-0.5">
                  {lang === 'HI' ? 'सुरक्षा अनुपालन' : 'PPE Enforcement'}
                </p>
              </div>
              <div className="text-left">
                <p className="text-2xl font-black text-brand-lightblue">0</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-extrabold mt-0.5">
                  {lang === 'HI' ? 'अवांछित घटनाएं' : 'Injuries Reported'}
                </p>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
