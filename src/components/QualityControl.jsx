import { motion } from 'framer-motion';
import { CheckSquare, Search, Award } from 'lucide-react';

export default function QualityControl() {
  const qcStages = [
    {
      image: '/images/quality-testing-lab.jpg',
      title: 'Oxidation Induction Test',
      desc: 'Conducted in our climate-controlled lab to test thermodynamic stability and aging characteristics of polymer materials.'
    },
    {
      image: '/images/quality-testing-machine-lab.jpg',
      title: 'Tensile & Elongation Testing',
      desc: 'Technicians utilize digital universal testing machines to gauge yield stress and elongation break points of pipe segments.'
    },
    {
      image: '/images/quality-lab-testing-2.jpg',
      title: 'Hydrostatic Pressure Audits',
      desc: 'Our laboratory conducts high-pressure hydrostatic tests over extended durations to verify hoop stress resistance.'
    },
    {
      image: '/images/quality-team-pipe-inspection.jpg',
      title: 'Dimensional & Visual Inspections',
      desc: 'Team of quality engineers perform on-site caliper audits on wall thickness, ovality, and outer diameter metrics before stocks are signed off.'
    }
  ];

  return (
    <section id="quality" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-brand-lightblue font-bold tracking-wide uppercase">Quality Control</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            NABL-Accredited Lab &amp; Multi-Stage Auditing
          </p>
          <div className="mt-4 h-1.5 w-24 bg-brand-orange mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 font-light text-sm sm:text-base">
            We enforce strict quality control at every phase — from auditing raw polymer resins to conducting hydrostatic stress tests on finished pipes.
          </p>
        </div>

        {/* Layout: Text + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text content (5cols) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 text-left space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white tracking-tight leading-snug">
                Third-Party Approved In-House Quality Assurance
              </h3>
              <p className="text-slate-400 font-light text-sm sm:text-base leading-relaxed">
                Rajshree Group / Technoplast operates a fully equipped, modern testing laboratory complying with National Accreditation Board for Testing and Calibration Laboratories (NABL) guidelines.
              </p>
              <p className="text-slate-400 font-light text-sm sm:text-base leading-relaxed">
                Our pipes are regularly audited and cleared by leading third-party inspection agencies including <strong className="text-white font-semibold">RITES, SHRI RAM Institute, and CIPET</strong>, satisfying strict government project mandates.
              </p>
            </div>

            {/* Bullet Highlights */}
            <div className="space-y-3.5 pt-4 border-t border-slate-800">
              <div className="flex gap-3">
                <CheckSquare className="w-5.5 h-5.5 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Melt Flow Index (MFI) Check</h4>
                  <p className="text-xs text-slate-400 font-light mt-0.5">Every incoming batch of PE resins is checked for optimal extrusion viscosity.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Search className="w-5.5 h-5.5 text-brand-lightblue shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Carbon Black Dispersion</h4>
                  <p className="text-xs text-slate-400 font-light mt-0.5">Ensures uniform distribution of carbon black for peerless UV protection and weathering life.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Award className="w-5.5 h-5.5 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Reversion &amp; Impact Tests</h4>
                  <p className="text-xs text-slate-400 font-light mt-0.5">Validates material relaxation characteristics and fracture toughness under freezing loads.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4-Card Image Grid (7cols) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {qcStages.map((stage, idx) => (
              <div
                key={idx}
                className="bg-slate-850 border border-slate-800 rounded-3xl overflow-hidden shadow-lg flex flex-col group hover:border-brand-blue/30 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                  <img
                    src={stage.image}
                    alt={stage.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Subtle border overlay */}
                  <div className="absolute inset-0 border border-white/5 rounded-t-3xl" />
                </div>
                {/* Content */}
                <div className="p-5 text-left space-y-2">
                  <h4 className="text-sm sm:text-base font-extrabold text-white group-hover:text-brand-lightblue transition-colors">
                    {stage.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
