import { motion } from 'framer-motion';
import { Award, ShieldCheck, Factory, Calendar } from 'lucide-react';
import aboutPipes from '../assets/about-pipes.png';

export default function About() {
  const stats = [
    { icon: <Calendar className="w-6 h-6 text-brand-orange" />, label: 'Established', value: '2012', desc: 'Over a decade of manufacturing excellence' },
    { icon: <Factory className="w-6 h-6 text-brand-orange" />, label: 'Location', value: 'Jaipur, Rajasthan', desc: 'State-of-the-art facilities in Rajasthan' },
    { icon: <Award className="w-6 h-6 text-brand-orange" />, label: 'Accreditation', value: 'ISI Certified', desc: 'Strict compliance with Indian standards' },
    { icon: <ShieldCheck className="w-6 h-6 text-brand-orange" />, label: 'Market Standing', value: 'Northern India Capacity', desc: 'Leading manufacturer in the region' },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-brand-blue font-bold tracking-wide uppercase">Who We Are</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Delivering Integrity &amp; Durability In Every Pipeline
          </p>
          <div className="mt-4 h-1.5 w-24 bg-brand-orange mx-auto rounded-full"></div>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-left"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 leading-tight">
              Leading the Way in HDPE &amp; PVC Piping Systems
            </h3>
            <p className="text-slate-600 leading-relaxed font-light text-base">
              Rajshree Technoplast Pvt Ltd is a premier manufacturer and supplier of high-density polyethylene (HDPE) and polyvinyl chloride (PVC) pipes. Since our inception in 2012, we have focused on offering engineered, robust, sustainable, and cost-effective piping solutions under our trusted brand name <strong className="text-brand-blue font-semibold">"RAJSHREE."</strong>
            </p>
            <p className="text-slate-600 leading-relaxed font-light text-base">
              Headquartered and manufactured in Jaipur, Rajasthan, we have built a reputation of absolute trust among contractors, engineers, municipalities, and infrastructure developers across India. Our products power irrigation schemes, drinking water supply networks, industrial waste transport, sewerage drainage, and telecom/electrical ducting.
            </p>
            <div className="pt-4 border-t border-slate-200">
              <blockquote className="border-l-4 border-brand-blue pl-4 italic text-slate-600 font-medium">
                "Empowering Progress Through Liquid Network"
              </blockquote>
            </div>
          </motion.div>

          {/* Right Image Column with Custom Overlay */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-brand-blue rounded-3xl rotate-3 scale-95 opacity-10 z-0"></div>
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
              <img
                src={aboutPipes}
                alt="Stacked HDPE and PVC pipes at Rajshree factory yard"
                className="w-full h-auto object-cover aspect-[4/3] hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Quick Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl flex items-center gap-4 z-20 border border-slate-100 hidden sm:flex">
              <div className="p-3 bg-brand-blue/10 rounded-xl text-brand-blue">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Guaranteed</p>
                <p className="text-sm font-extrabold text-slate-800">100% Raw Material Purity</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col text-left group hover:-translate-y-1"
            >
              <div className="p-3 rounded-xl bg-brand-orange/10 w-fit mb-4 group-hover:bg-brand-orange/20 transition-colors">
                {stat.icon}
              </div>
              <h4 className="text-2xl font-extrabold text-slate-800 tracking-tight">{stat.value}</h4>
              <p className="text-sm font-bold text-slate-500 mt-1 uppercase tracking-wider">{stat.label}</p>
              <p className="text-xs text-slate-400 mt-2 font-medium">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
