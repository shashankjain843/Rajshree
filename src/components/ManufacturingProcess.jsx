import { motion } from 'framer-motion';
import { Layers, Settings, Compass, Sliders, Scissors, Ruler } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

export default function ManufacturingProcess() {
  const { lang, t } = useTranslation();

  const stages = [
    {
      num: '01',
      title: t('step1Title'),
      icon: <Layers className="w-5 h-5" />,
      image: '/images/manufacturing-production-line.jpg',
      alt: 'Raw polymer resins loaded in hopper feed',
      caption: t('step1Desc')
    },
    {
      num: '02',
      title: t('step2Title'),
      icon: <Settings className="w-5 h-5" />,
      image: '/images/manufacturing-extrusion-machine.jpg',
      alt: 'HDPE pipe extrusion machine die head close-up',
      caption: t('step2Desc')
    },
    {
      num: '03',
      title: t('step3Title'),
      icon: <Sliders className="w-5 h-5" />,
      image: '/images/manufacturing-process.jpg',
      alt: 'Operator control panel for extrusion line parameters',
      caption: t('step3Desc')
    },
    {
      num: '04',
      title: t('step4Title'),
      icon: <Compass className="w-5 h-5" />,
      image: '/images/manufacturing-production-line.jpg',
      alt: 'Full automated cooling line tanks',
      caption: t('step4Desc')
    },
    {
      num: '05',
      title: t('step5Title'),
      icon: <Scissors className="w-5 h-5" />,
      image: '/images/manufacturing-workers-handling-pipe.jpg',
      alt: 'Workers handling finished HDPE pipes on sorting rack',
      caption: t('step5Desc')
    },
    {
      num: '06',
      title: t('step6Title'),
      icon: <Ruler className="w-5 h-5" />,
      image: '/images/manufacturing-production-line.jpg',
      alt: 'Finished HDPE pipes dimension audit and quality marking',
      caption: t('step6Desc')
    }
  ];

  return (
    <section id="manufacturing" className="py-12 bg-slate-50 dark:bg-slate-950 overflow-hidden border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-base text-brand-blue dark:text-brand-lightblue font-bold tracking-wide uppercase">{t('navMfg')}</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {lang === 'HI' ? 'हम राजश्री पाइप्स का निर्माण कैसे करते हैं' : 'How We Manufacture RAJSHREE Pipes'}
          </p>
          <div className="mt-4 h-1.5 w-24 bg-brand-orange mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-500 dark:text-slate-400 font-light text-sm sm:text-base">
            {lang === 'HI' 
              ? 'कच्चे पॉलीमर दानों से लेकर तैयार पाइपों तक - हमारी एकीकृत मशीनरी शून्य आयामी विचलन और अधिकतम मजबूती सुनिश्चित करती है।'
              : 'From polymer resin grains to finished high-pressure conduits — our fully integrated machinery ensures zero dimensional deviation and maximum impact resilience.'}
          </p>
        </div>

        {/* Process Steps Timeline/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stages.map((stage, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-150 dark:border-slate-800 shadow-md flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div>
                {/* Image container */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-105">
                  <img
                    src={stage.image}
                    alt={stage.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Step Number Badge */}
                  <div className="absolute top-4 left-4 bg-brand-darkblue text-white text-sm font-extrabold px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-lg border border-brand-blue/35">
                    <span>{stage.num}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 text-left space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-brand-orange/10 text-brand-orange rounded-lg">
                      {stage.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-850 dark:text-white tracking-tight">{stage.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                    {stage.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
