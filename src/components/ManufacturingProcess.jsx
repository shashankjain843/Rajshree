import { motion } from 'framer-motion';
import { Layers, Settings, Sliders, Scissors } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function ManufacturingProcess() {
  const iconMap = {
    Layers: <Layers className="w-5 h-5" />,
    Settings: <Settings className="w-5 h-5" />,
    Sliders: <Sliders className="w-5 h-5" />,
    Scissors: <Scissors className="w-5 h-5" />
  };

  const stages = siteConfig.manufacturing.stages.map(stage => ({
    ...stage,
    icon: iconMap[stage.iconName] || <Layers className="w-5 h-5" />
  }));

  return (
    <section id="manufacturing" className="py-14 bg-slate-50 overflow-hidden border-t border-slate-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-base text-blue-600 font-bold tracking-wide uppercase">{siteConfig.manufacturing.sectionTag}</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {siteConfig.manufacturing.title}
          </p>
          <div className="mt-4 h-1.5 w-24 bg-amber-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-500 font-light text-sm sm:text-base">
            {siteConfig.manufacturing.description}
          </p>
        </div>

        {/* Process Steps with animated connector line */}
        <div className="relative">
          {/* Horizontal connector line (desktop only) */}
          <div className="hidden lg:block absolute top-[88px] left-[12.5%] right-[12.5%] h-0.5 bg-slate-200 z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 origin-left rounded-full"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
            {stages.map((stage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
              >
                <div>
                  {/* Image container */}
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                    <img
                      src={stage.image}
                      alt={stage.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Step Number Badge */}
                    <div className="absolute top-4 left-4 bg-slate-900 text-white text-sm font-extrabold px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-lg border border-slate-700">
                      <span>{stage.num}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 text-left space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-amber-500/10 text-amber-500 rounded-lg">
                        {stage.icon}
                      </div>
                      <h3 className="text-base font-bold text-slate-800 tracking-tight leading-snug">{stage.title}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                      {stage.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
