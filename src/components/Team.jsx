import { motion } from 'framer-motion';
import { Users, Shield, Cpu, Zap } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

export default function Team() {
  const { lang, t } = useTranslation();

  const highlights = [
    {
      icon: <Users className="w-5 h-5 text-brand-orange" />,
      title: lang === 'HI' ? 'कुशल तकनीशियन' : 'Skilled Technicians',
      desc: lang === 'HI' ? 'हमारे मशीन ऑपरेटरों के पास प्लास्टिक पॉलीमर एक्सट्रूज़न में 8+ वर्षों का अनुभव है।' : 'Our machine operators have over 8+ years of technical experience in plastic polymer extrusion and cooling setups.'
    },
    {
      icon: <Shield className="w-5 h-5 text-brand-orange" />,
      title: lang === 'HI' ? 'गुणवत्ता निरीक्षक (QA)' : 'QA Inspectors',
      desc: lang === 'HI' ? 'समर्पित गुणवत्ता पर्यवेक्षक प्रत्येक एक्सट्रूज़न अंतराल पर भौतिक मापदंडों की निगरानी करते हैं।' : 'Dedicated quality supervisors monitor physical parameters at every extrusion interval.'
    },
    {
      icon: <Cpu className="w-5 h-5 text-brand-orange" />,
      title: lang === 'HI' ? 'सतत तकनीकी प्रशिक्षण' : 'Continuous Training',
      desc: lang === 'HI' ? 'नियमित तकनीकी कार्यशालाएं और सुरक्षा अभ्यास हमारे कर्मचारियों को आधुनिक बीआईएस मानकों के अनुरूप रखते हैं।' : 'Regular technical workshops and safety drills keep our plant staff aligned with modern ISO standards.'
    }
  ];

  return (
    <section id="team" className="py-12 bg-white dark:bg-slate-900 overflow-hidden border-t border-slate-100 dark:border-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-base text-brand-blue dark:text-brand-lightblue font-bold tracking-wide uppercase">{t('navTeam')}</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {lang === 'HI' ? 'हमारी गुणवत्ता के पीछे खड़ी कार्यशक्ति' : 'Meet the Force Behind Our Quality'}
          </p>
          <div className="mt-4 h-1.5 w-24 bg-brand-orange mx-auto rounded-full"></div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Industrial Overlay Frame (7cols) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative group"
          >
            {/* Background decorative frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue to-brand-orange rounded-3xl rotate-2 scale-[0.98] opacity-10 group-hover:rotate-1 group-hover:scale-[0.99] transition-all duration-300 z-0"></div>
            
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl border-4 border-white dark:border-slate-805 bg-slate-50 dark:bg-slate-950">
              <img
                src="/images/exhibition-stall-team-1.jpg"
                alt="Rajshree Technoplast team and staff standing together"
                className="w-full h-auto object-cover aspect-[16/10] hover:scale-[1.02] transition-transform duration-500"
              />
              {/* Image Caption overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 to-transparent p-6 text-left">
                <span className="text-white text-sm font-bold tracking-wider">
                  {t('teamCaption')}
                </span>
              </div>
            </div>

            {/* Float badge */}
            <div className="absolute -top-6 -right-6 bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-xl flex items-center gap-3 z-20 border border-slate-100 dark:border-slate-800 hidden sm:flex">
              <div className="p-3 bg-brand-orange/10 rounded-xl text-brand-orange">
                <Zap className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest font-bold">{lang === 'HI' ? 'कार्यशक्ति' : 'Workforce'}</p>
                <p className="text-sm font-extrabold text-slate-800 dark:text-white">{lang === 'HI' ? '120+ कुशल सदस्य' : '120+ Skilled Members'}</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Text & Highlights (5cols) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 text-left space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-850 dark:text-slate-100 tracking-tight leading-snug">
                {lang === 'HI' ? 'विश्वसनीयता के लिए निर्मित, पूर्णता के लिए प्रशिक्षित' : 'Engineered for Reliability, Trained for Perfection'}
              </h3>
              <p className="text-slate-655 dark:text-slate-400 font-light text-base leading-relaxed">
                {lang === 'HI' 
                  ? 'राजश्री ग्रुप में, हमारी ताकत हमारे एकीकृत कार्यबल में निहित है। रासायनिक इंजीनियरों से लेकर मशीन ऑपरेटरों और लॉजिस्टिक्स तक, हमारे कर्मचारी उच्च-गुणवत्ता मानकों को बनाए रखने के लिए समर्पित हैं।' 
                  : 'At Rajshree Group, our strength lies in our unified workforce. From senior chemical engineers to line technicians and logistics operators, our staff is dedicated to maintaining high-quality outputs.'}
              </p>
              <p className="text-slate-655 dark:text-slate-400 font-light text-base leading-relaxed">
                {lang === 'HI' 
                  ? 'हम मानते हैं कि आधुनिक तकनीक केवल उतनी ही अच्छी है जितनी हाथ उसे चलाते हैं। यही कारण है कि हमारे कर्मचारी एक्सट्रूज़न, तापमान प्रोफाइल और आयामी ऑडिट की निगरानी के लिए कड़े प्रशिक्षण से गुजरते हैं।' 
                  : 'We believe that modern technology is only as good as the hands that operate it. That is why our workers undergo strict training to oversee extrusion, cooling temperature profiles, and dimension inspection, ensuring every batch meets BIS requirements.'}
              </p>
            </div>

            {/* Features list */}
            <div className="space-y-4 border-t border-slate-100 dark:border-slate-800 pt-6">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-xl bg-brand-orange/10 text-brand-orange shrink-0 mt-0.5 animate-pulse">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-extrabold text-slate-850 dark:text-slate-200">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Life at Rajshree Behind-the-Scenes Gallery */}
        <div className="mt-12 border-t border-slate-100 dark:border-slate-800 pt-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-xs font-extrabold uppercase text-brand-orange tracking-widest">
              {lang === 'HI' ? 'राजश्री में कार्य संस्कृति' : 'LIFE AT RAJSHREE'}
            </h3>
            <h4 className="text-2xl font-black text-slate-850 dark:text-white mt-1.5 leading-snug">
              {lang === 'HI' ? 'हमारा कार्यस्थल, सुरक्षा और प्रशिक्षण' : 'Behind-the-Scenes & Work Culture'}
            </h4>
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-light mt-2 max-w-md mx-auto">
              {lang === 'HI' 
                ? 'हमारे विनिर्माण संयत्रों में काम करने वाले कर्मचारियों की सुरक्षा, सहयोग और उच्च तकनीकी प्रशिक्षण की एक झलक।' 
                : 'A glimpse into our collaborative workplace, safety-first procedures, and regular plant technical training.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tile 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col text-left group"
            >
              <div className="relative overflow-hidden aspect-[4/3] bg-slate-900">
                <img 
                  src="/images/manufacturing-workers-handling-pipe.jpg" 
                  alt="Safety first in plant production" 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  loading="lazy"
                  width="400"
                  height="300"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <span className="text-[10px] font-extrabold text-brand-orange uppercase tracking-wider bg-brand-orange/5 px-2 py-0.5 rounded w-fit mb-2">
                  {lang === 'HI' ? 'सुरक्षा नियम' : 'Safety Compliance'}
                </span>
                <h5 className="font-extrabold text-slate-800 dark:text-white text-sm mb-1">
                  {lang === 'HI' ? 'संयंत्र सुरक्षा एवं पीपीई किट' : 'Strict PPE Enforcement'}
                </h5>
                <p className="text-slate-400 dark:text-slate-500 text-xs font-light leading-relaxed mt-1">
                  {lang === 'HI' 
                    ? 'सभी विनिर्माण इकाइयों में सभी ऑपरेटरों के लिए हेलमेट, जैकेट और सुरक्षा जूते पहनना अनिवार्य है।' 
                    : 'Helmet, safety jackets, and protective footwear are mandatory for all plant floor operators.'}
                </p>
              </div>
            </motion.div>

            {/* Tile 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col text-left group"
            >
              <div className="relative overflow-hidden aspect-[4/3] bg-slate-900">
                <img 
                  src="/images/exhibition-stall-team-1.jpg" 
                  alt="Company teamwork and group photo" 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  loading="lazy"
                  width="400"
                  height="300"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <span className="text-[10px] font-extrabold text-brand-blue uppercase tracking-wider bg-brand-blue/5 dark:bg-brand-blue/15 px-2 py-0.5 rounded w-fit mb-2">
                  {lang === 'HI' ? 'एकजुट कार्यबल' : 'Unified Team'}
                </span>
                <h5 className="font-extrabold text-slate-800 dark:text-white text-sm mb-1">
                  {lang === 'HI' ? 'राष्ट्रीय प्रदर्शनी में हमारी टीम' : 'National Exhibition Showcase'}
                </h5>
                <p className="text-slate-400 dark:text-slate-500 text-xs font-light leading-relaxed mt-1">
                  {lang === 'HI' 
                    ? 'हमारे वाणिज्यिक एवं इंजीनियरिंग विशेषज्ञ ग्राहकों को पाइपिंग विशिष्टताओं पर परामर्श देते हैं।' 
                    : 'Our customer support and engineering teams collaborating to present advanced polymer pipeline standards.'}
                </p>
              </div>
            </motion.div>

            {/* Tile 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col text-left group"
            >
              <div className="relative overflow-hidden aspect-[4/3] bg-slate-900">
                <img 
                  src="/images/quality-testing-lab.jpg" 
                  alt="Quality assurance verification" 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  loading="lazy"
                  width="400"
                  height="300"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <span className="text-[10px] font-extrabold text-[#00A86B] uppercase tracking-wider bg-[#00A86B]/5 px-2 py-0.5 rounded w-fit mb-2">
                  {lang === 'HI' ? 'तकनीकी प्रशिक्षण' : 'Technical Training'}
                </span>
                <h5 className="font-extrabold text-slate-800 dark:text-white text-sm mb-1">
                  {lang === 'HI' ? 'लैब परीक्षणों में नियमित अपग्रेड' : 'NABL Lab Standard Audits'}
                </h5>
                <p className="text-slate-400 dark:text-slate-500 text-xs font-light leading-relaxed mt-1">
                  {lang === 'HI' 
                    ? 'हमारे लैब तकनीशियन सटीक आयामी और घनत्व परीक्षण करने के लिए साप्ताहिक रिफ्रेशर ट्रेनिंग लेते हैं।' 
                    : 'Technicians undergo weekly quality refresher training to operate density and hydrostatic auditing devices.'}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
