import { motion } from 'framer-motion';
import { Users, Shield, Cpu, Zap, Award, GraduationCap, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Team() {
  const highlights = [
    {
      icon: <Users className="w-5 h-5 text-amber-500" />,
      title: 'Skilled Extrusion Technicians',
      desc: 'Our machine operators possess 8+ years of specialized technical experience in polymer extrusion and cooling parameters.'
    },
    {
      icon: <Shield className="w-5 h-5 text-amber-500" />,
      title: 'Certified QA Supervisors',
      desc: 'Dedicated quality auditors monitor physical specs, wall thickness, and outer diameters at every production interval.'
    },
    {
      icon: <Cpu className="w-5 h-5 text-amber-500" />,
      title: 'Continuous Technical Workshops',
      desc: 'Regular skill enhancement programs and safety drills keep our plant staff aligned with ISO 9001:2015 & BIS standards.'
    }
  ];

  return (
    <section id="team" className="py-12 bg-white overflow-hidden border-t border-slate-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-base text-blue-600 font-bold tracking-wide uppercase">Our Team</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Meet the Force Behind Our Quality
          </p>
          <div className="mt-4 h-1.5 w-24 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Corporate Team Credentials Card (7cols) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative group"
          >
            <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-blue-950 p-8 sm:p-10 rounded-3xl shadow-xl border border-slate-800 text-left relative overflow-hidden">
              {/* Background Glow */}
              <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-blue-600/10 rounded-full blur-2xl pointer-events-none"></div>
              
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded border border-amber-400/20">
                Engineering &amp; Executive Leadership
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-4 tracking-tight leading-snug">
                Rajshree Group Operational Board
              </h3>

              <p className="text-slate-300 text-sm sm:text-base font-light mt-3 leading-relaxed">
                Our plant personnel at Jaipur Unit I &amp; Unit II combine decades of polymer engineering expertise. We operate with strict zero-defect thresholds across raw material processing, extrusion, and dispatch.
              </p>

              {/* Core Pillars */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-800 pt-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                  <span className="text-xs font-semibold text-slate-200">120+ Full-Time Plant Personnel</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                  <span className="text-xs font-semibold text-slate-200">24/7 Shift Extrusion Management</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                  <span className="text-xs font-semibold text-slate-200">NABL Certified Testing Technicians</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                  <span className="text-xs font-semibold text-slate-200">Zero-Accident Safety Compliance</span>
                </div>
              </div>
            </div>

            {/* Float badge */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20 border border-slate-200 hidden sm:flex">
              <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500">
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
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight leading-snug">
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
            <div className="space-y-4 border-t border-slate-200 pt-6">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500 shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-extrabold text-slate-800">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-500 font-light mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Life at Rajshree Behind-the-Scenes Cards */}
        <div className="mt-12 border-t border-slate-200 pt-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-xs font-extrabold uppercase text-amber-500 tracking-widest">
              LIFE AT RAJSHREE
            </h3>
            <h4 className="text-2xl font-black text-slate-800 mt-1.5 leading-snug">
              Behind-the-Scenes &amp; Work Culture
            </h4>
            <p className="text-slate-500 text-xs sm:text-sm font-light mt-2 max-w-md mx-auto">
              A glimpse into our collaborative workplace, safety-first procedures, and regular plant technical training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tile 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col text-left group"
            >
              <div className="p-3 bg-amber-500/10 text-amber-500 rounded-xl w-fit mb-4">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <span className="text-[10px] font-extrabold text-amber-600 uppercase tracking-wider bg-amber-500/10 px-2 py-0.5 rounded w-fit mb-2">
                Safety Compliance
              </span>
              <h5 className="font-extrabold text-slate-800 text-base mb-1">
                Strict PPE Enforcement
              </h5>
              <p className="text-slate-500 text-xs font-light leading-relaxed mt-1">
                Helmet, safety jackets, and protective footwear are mandatory for all plant floor operators across our 75,000+ sq. ft. facilities.
              </p>
            </motion.div>

            {/* Tile 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col text-left group"
            >
              <div className="p-3 bg-blue-600/10 text-blue-600 rounded-xl w-fit mb-4">
                <Award className="w-7 h-7" />
              </div>
              <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-wider bg-blue-500/10 px-2 py-0.5 rounded w-fit mb-2">
                Unified Team
              </span>
              <h5 className="font-extrabold text-slate-800 text-base mb-1">
                National Exhibition Showcase
              </h5>
              <p className="text-slate-500 text-xs font-light leading-relaxed mt-1">
                Our customer support and engineering teams collaborate to present advanced polymer pipeline standards at major trade expos.
              </p>
            </motion.div>

            {/* Tile 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col text-left group"
            >
              <div className="p-3 bg-emerald-600/10 text-emerald-600 rounded-xl w-fit mb-4">
                <GraduationCap className="w-7 h-7" />
              </div>
              <span className="text-[10px] font-extrabold text-emerald-600 uppercase tracking-wider bg-emerald-600/10 px-2 py-0.5 rounded w-fit mb-2">
                Technical Training
              </span>
              <h5 className="font-extrabold text-slate-800 text-base mb-1">
                NABL Lab Standard Audits
              </h5>
              <p className="text-slate-500 text-xs font-light leading-relaxed mt-1">
                Technicians undergo weekly quality refresher training to operate density, oxidation, and hydrostatic pressure testing devices.
              </p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
