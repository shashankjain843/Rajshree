import { motion } from 'framer-motion';
import { Award, ShieldCheck, Factory, Calendar, CheckCircle } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: <Calendar className="w-6 h-6 text-brand-orange" />, label: 'Established', value: '2012', desc: 'Over a decade of manufacturing excellence' },
    { icon: <Factory className="w-6 h-6 text-brand-orange" />, label: 'Plant Size', value: '75,000+ Sq. Ft.', desc: 'Across Unit I (Bagru) & Unit II (Phagi)' },
    { icon: <Award className="w-6 h-6 text-brand-orange" />, label: 'Accreditation', value: 'ISO 9001:2015', desc: 'QRO Certified Quality Management' },
    { icon: <ShieldCheck className="w-6 h-6 text-brand-orange" />, label: 'BIS Standard', value: 'ISI Certified', desc: 'Conforming to IS:4984 & IS:14333' },
  ];

  const galleryImages = [
    {
      src: '/images/hero-factory-warehouse.jpg',
      alt: 'Rajshree Group state-of-the-art plant warehouse',
      label: 'Factory Infrastructure'
    },
    {
      src: '/images/manufacturing-production-line.jpg',
      alt: 'Automated extrusion production line',
      label: 'Production Line Unit II'
    },
    {
      src: '/images/hero-hdpe-pipes-closeup.jpg',
      alt: 'High-density polyethylene pipes close-up',
      label: 'Premium Finished Pipes'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-brand-blue font-bold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Factory Infrastructure &amp; Technical Standing
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
              Pioneering Durable Piping Infrastructure
            </h3>
            <p className="text-slate-600 leading-relaxed font-light text-base">
              Founded in 2012, <strong className="text-brand-blue font-semibold">Rajshree Technoplast Pvt. Ltd.</strong> (under the renowned Rajshree Group) has established itself as a premier manufacturer of high-density polyethylene (HDPE) and polyvinyl chloride (PVC) pipes. For over a decade, we have been a trusted partner in India's agricultural, urban sewerage, and industrial growth.
            </p>
            <p className="text-slate-600 leading-relaxed font-light text-base">
              With a commitment to zero-defect manufacturing, our state-of-the-art facilities in Bagru and Phagi, Jaipur, span over <strong className="text-slate-800 font-semibold">75,000 square feet</strong>. Fully accredited with <strong className="text-brand-blue font-semibold">ISO 9001:2015</strong> certification, our plant combines automated production systems with an in-house NABL-standards testing laboratory to guarantee peerless product standards.
            </p>
            
            <ul className="space-y-3 pt-2">
              <li className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle className="w-5 h-5 text-brand-orange shrink-0" />
                <span>100% Virgin High-Grade Polymer Resins</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle className="w-5 h-5 text-brand-orange shrink-0" />
                <span>Rigorous ISI compliance and BIS licensed certification</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle className="w-5 h-5 text-brand-orange shrink-0" />
                <span>Large warehousing capabilities for immediate bulk dispatches</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-slate-200">
              <blockquote className="border-l-4 border-brand-blue pl-4 italic text-slate-600 font-medium">
                "We do not just construct pipes; we engineer durable fluid highways that feed irrigation networks and cities across the nation."
              </blockquote>
            </div>
          </motion.div>

          {/* Right Image Grid describing Manufacturing Facility */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {/* Main Tall Image */}
            <div className="col-span-2 relative group overflow-hidden rounded-3xl shadow-lg border border-slate-200">
              <img
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-bold uppercase tracking-wider bg-brand-blue/90 px-3 py-1 rounded-md">
                  {galleryImages[0].label}
                </span>
              </div>
            </div>
            
            {/* Second Image */}
            <div className="relative group overflow-hidden rounded-3xl shadow-lg border border-slate-200">
              <img
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-bold uppercase tracking-wider bg-brand-blue/90 px-3 py-1 rounded-md">
                  {galleryImages[1].label}
                </span>
              </div>
            </div>

            {/* Third Image */}
            <div className="relative group overflow-hidden rounded-3xl shadow-lg border border-slate-200">
              <img
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-bold uppercase tracking-wider bg-brand-blue/90 px-3 py-1 rounded-md">
                  {galleryImages[2].label}
                </span>
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
              className="bg-white p-6 rounded-2xl shadow-md border border-slate-150 hover:shadow-xl transition-all duration-300 flex flex-col text-left group hover:-translate-y-1"
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
