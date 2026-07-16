import { motion } from 'framer-motion';
import { Droplet, ShieldAlert, ArrowDownCircle, Zap } from 'lucide-react';

export default function Services() {
  const verticals = [
    {
      icon: <Droplet className="w-8 h-8 text-brand-lightblue" />,
      title: 'Water Supply',
      description: 'Potable water distribution mains, agricultural drip/sprinkler irrigation systems, and borewell casing pipes.',
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-brand-orange" />,
      title: 'Industrial Waste',
      description: 'Chemically-resistant transit piping for acids, alkalis, slurries, and industrial chemical effluents.',
    },
    {
      icon: <ArrowDownCircle className="w-8 h-8 text-teal-400" />,
      title: 'Sewerage',
      description: 'Underground gravity flow drainage systems, municipal storm water drains, and sanitary piping networks.',
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'Electrical Cabling',
      description: 'High-strength protective conduits and ducting for underground power cables and telecom fiber optics.',
    },
  ];

  return (
    <section className="bg-slate-950 py-10 relative overflow-hidden border-y border-slate-900">
      {/* Dynamic line vector background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100,50 Q100,200 400,50 T900,150 T1400,50 T1900,100" fill="none" stroke="#3b82f6" strokeWidth="4" />
          <path d="M-100,120 Q150,50 450,150 T950,50 T1450,120 T1950,80" fill="none" stroke="#EA580C" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-7">
          <span className="text-xs uppercase font-extrabold tracking-widest text-brand-orange">
            Service Verticals
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
            Piping Solutions Engineered For Diverse Sectors
          </h2>
        </div>

        {/* Horizontal Card ribbon */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {verticals.map((v, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-900/60 backdrop-blur-sm p-5 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col text-left group hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="p-3 bg-slate-800/80 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                {v.icon}
              </div>
              
              {/* Title & Desc */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-lightblue transition-colors">
                {v.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                {v.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
