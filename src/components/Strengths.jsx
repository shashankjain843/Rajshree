import { motion } from 'framer-motion';
import { Factory, Cpu, ShieldCheck, Layers } from 'lucide-react';

export default function Strengths() {
  const strengths = [
    {
      icon: <Factory className="w-8 h-8 text-brand-blue" />,
      title: 'State-of-the-Art Plants',
      description: 'Our advanced manufacturing units located at Jaipur, Rajasthan, feature high-capacity layouts, optimized material flows, and uninterrupted production capabilities.',
    },
    {
      icon: <Cpu className="w-8 h-8 text-brand-blue" />,
      title: 'Advanced Extrusion Technology',
      description: 'We utilize state-of-the-art extrusion lines equipped with automatic gravity feeders and thickness controllers to guarantee perfect structural integrity in every pipe.',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-brand-blue" />,
      title: 'Stringent Quality Control',
      description: 'Our advanced testing laboratories perform rigorous hydrostatic pressure, impact resistance, tensile strength, and carbon black dispersion tests to ensure IS-compliance.',
    },
    {
      icon: <Layers className="w-8 h-8 text-brand-blue" />,
      title: 'Premium Raw Materials',
      description: 'We source high-grade polymer resins (PE 100, PE 80, Virgin PVC compounds) exclusively from industry-leading suppliers like Reliance, GAIL, and IOCL.',
    },
  ];

  return (
    <section id="manufacturing" className="py-12 bg-white relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-base text-brand-blue font-bold tracking-wide uppercase">Manufacturing Might</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Built on Advanced Engineering &amp; Unmatched Capacity
          </p>
          <div className="mt-4 h-1.5 w-24 bg-brand-orange mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-500 font-light max-w-2xl mx-auto text-sm sm:text-base">
            As one of Northern India’s largest HDPE and PVC piping system manufacturers, we combine technical excellence with robust infrastructure.
          </p>
        </div>

        {/* Strengths Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {strengths.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:border-brand-blue/20 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col sm:flex-row gap-5 text-left hover:-translate-y-1"
            >
              {/* Accent slider at the bottom */}
              <div className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-brand-blue to-brand-orange w-0 group-hover:w-full transition-all duration-500"></div>

              {/* Icon Container */}
              <div className="shrink-0">
                <div className="p-4 rounded-2xl bg-white text-brand-blue shadow-md group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 w-16 h-16 flex items-center justify-center">
                  {item.icon}
                </div>
              </div>

              {/* Content Container */}
              <div className="space-y-2">
                <h3 className="text-xl font-extrabold text-slate-800 tracking-tight group-hover:text-brand-blue transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-light text-sm sm:text-base">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industrial capacity callout bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 bg-gradient-to-r from-brand-darkblue to-brand-blue p-6 sm:p-10 rounded-3xl text-white shadow-xl flex flex-col lg:flex-row justify-between items-center gap-6 relative overflow-hidden"
        >
          {/* Subtle logo background glow */}
          <div className="absolute right-0 bottom-0 translate-x-10 translate-y-10 w-96 h-96 bg-white/5 rounded-full pointer-events-none"></div>
          
          <div className="text-left space-y-3 relative z-10 max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-widest text-brand-lightblue bg-white/10 px-3 py-1 rounded-full">
              Industrial Scale
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              One of Northern India's Largest Capacities
            </h3>
            <p className="text-slate-200 text-sm sm:text-base font-light">
              We operate two fully integrated manufacturing units in Bagru and Phagi, Jaipur, processing thousands of tons of high-grade polymers monthly to ensure immediate bulk supply.
            </p>
          </div>
          
          <div className="shrink-0 relative z-10 flex gap-4 w-full sm:w-auto">
            <a
              href="#contact"
              className="bg-brand-orange hover:bg-brand-orange/90 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-brand-orange/30 transition-all duration-300 w-full sm:w-auto text-center hover:-translate-y-0.5"
            >
              Get Factory Pricing
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
