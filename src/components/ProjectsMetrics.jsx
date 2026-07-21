import { motion } from 'framer-motion';
import { Truck, MapPin, Factory, Award } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function ProjectsMetrics() {
  const iconMap = {
    Truck: <Truck className="w-6 h-6 text-sky-400" />,
    MapPin: <MapPin className="w-6 h-6 text-sky-400" />,
    Factory: <Factory className="w-6 h-6 text-sky-400" />,
    Award: <Award className="w-6 h-6 text-sky-400" />
  };

  const metrics = siteConfig.projectsMetrics.map(item => ({
    ...item,
    icon: iconMap[item.iconName] || <Truck className="w-6 h-6 text-sky-400" />
  }));

  return (
    <section className="py-16 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400 bg-sky-400/10 px-3 py-1 rounded border border-sky-400/20">
            Projects Delivered &amp; Supply Metrics
          </span>
          <h2 className="text-3xl font-extrabold text-white mt-3 tracking-tight">
            High-Volume Extrusion for Pan-India Utilities
          </h2>
          <p className="text-slate-400 text-sm font-light mt-2">
            Demonstrated industrial delivery capacity across municipal potable networks, Jal Jeevan Mission, and industrial effluent pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-800/60 border border-slate-700 p-6 rounded-2xl hover:border-sky-400/40 hover:bg-slate-800 transition-all duration-300 space-y-2 group"
            >
              <div className="p-2.5 bg-sky-400/10 rounded-xl w-fit border border-sky-400/20 mb-3 group-hover:scale-110 transition-transform duration-300">
                {metric.icon}
              </div>
              <p className="text-3xl font-black text-white tracking-tight">
                {metric.value}
              </p>
              <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                {metric.label}
              </h3>
              <span className="inline-block text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-mono">
                {metric.subtext}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
