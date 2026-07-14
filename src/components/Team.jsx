import { motion } from 'framer-motion';
import { Users, Shield, Cpu, Zap } from 'lucide-react';

export default function Team() {
  const highlights = [
    {
      icon: <Users className="w-5 h-5 text-brand-orange" />,
      title: 'Skilled Technicians',
      desc: 'Our machine operators have over 8+ years of technical experience in plastic polymer extrusion and cooling setups.'
    },
    {
      icon: <Shield className="w-5 h-5 text-brand-orange" />,
      title: 'QA Inspectors',
      desc: 'Dedicated quality supervisors monitor physical parameters at every extrusion interval.'
    },
    {
      icon: <Cpu className="w-5 h-5 text-brand-orange" />,
      title: 'Continuous Training',
      desc: 'Regular technical workshops and safety drills keep our plant staff aligned with modern ISO standards.'
    }
  ];

  return (
    <section id="team" className="py-20 bg-white overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-brand-blue font-bold tracking-wide uppercase">Our Team</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Meet the Force Behind Our Quality
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
            
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl border-4 border-white bg-slate-50">
              <img
                src="/images/exhibition-stall-team-1.jpg"
                alt="Rajshree Technoplast team and staff standing together"
                className="w-full h-auto object-cover aspect-[16/10] hover:scale-[1.02] transition-transform duration-500"
              />
              {/* Image Caption overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 to-transparent p-6 text-left">
                <span className="text-white text-sm font-bold tracking-wider">
                  Rajshree Group Production Team — Unit I &amp; II
                </span>
              </div>
            </div>

            {/* Float badge */}
            <div className="absolute -top-6 -right-6 bg-white p-5 rounded-2xl shadow-xl flex items-center gap-3 z-20 border border-slate-100 hidden sm:flex">
              <div className="p-3 bg-brand-orange/10 rounded-xl text-brand-orange">
                <Zap className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Workforce</p>
                <p className="text-sm font-extrabold text-slate-800">120+ Skilled Members</p>
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
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-850 tracking-tight leading-snug">
                Engineered for Reliability, Trained for Perfection
              </h3>
              <p className="text-slate-600 font-light text-base leading-relaxed">
                At Rajshree Group, our strength lies in our unified workforce. From senior chemical engineers to line technicians and logistics operators, our staff is dedicated to maintaining high-quality outputs.
              </p>
              <p className="text-slate-600 font-light text-base leading-relaxed">
                We believe that modern technology is only as good as the hands that operate it. That is why our workers undergo strict training to oversee extrusion, cooling temperature profiles, and dimension inspection, ensuring every batch meets BIS requirements.
              </p>
            </div>

            {/* Features list */}
            <div className="space-y-4 border-t border-slate-100 pt-6">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-xl bg-brand-orange/10 text-brand-orange shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-extrabold text-slate-850">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-500 font-light mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
