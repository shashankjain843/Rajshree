import { motion } from 'framer-motion';
import { ShieldAlert, Cpu, Settings, Ruler } from 'lucide-react';

export default function QualityControl() {
  const labTests = [
    {
      icon: <Cpu className="w-5 h-5 text-brand-orange" />,
      title: 'Oxidation Induction Test',
      desc: 'Conducted in our lab to test thermodynamic stability and polymer aging characteristics, ensuring a 50+ year lifespan.'
    },
    {
      icon: <Settings className="w-5 h-5 text-brand-orange" />,
      title: 'Tensile & Elongation Audits',
      desc: 'Verifies the physical yield stress, elasticity, and elongation break points under high-pressure conditions.'
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-brand-orange" />,
      title: 'Hydrostatic Pressure Test',
      desc: 'Pipes are subjected to high internal pressures for extended durations to verify hoop stress resistance.'
    },
    {
      icon: <Ruler className="w-5 h-5 text-brand-orange" />,
      title: 'Dimensional & Ovality Check',
      desc: 'Continuous caliper audits on wall thickness, concentricity, and outer diameter metrics at regular extrusion intervals.'
    }
  ];

  return (
    <section id="quality" className="py-20 bg-slate-900 text-white relative overflow-hidden border-t border-slate-950">
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

        {/* Layout: Text + Hero Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & List (6cols) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 text-left space-y-6"
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

            {/* Grid of Lab Tests */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-800">
              {labTests.map((test, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="p-2 bg-brand-orange/15 text-brand-orange rounded-xl w-fit">
                    {test.icon}
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">{test.title}</h4>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">{test.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Large Single Real Lab Image (6cols) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative group"
          >
            {/* Background frame decoration */}
            <div className="absolute inset-0 bg-brand-lightblue/10 rounded-3xl rotate-2 scale-[0.98] group-hover:rotate-1 transition-all duration-300 z-0"></div>
            
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl border-4 border-slate-800 bg-slate-900">
              <img
                src="/images/quality-testing-lab.jpg"
                alt="NABL quality control testing laboratory with Oxidation Induction Tester equipment"
                className="w-full h-auto object-cover aspect-[4/3] hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
              {/* Overlay label */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 to-transparent p-6 text-left">
                <span className="text-white text-xs font-bold uppercase tracking-wider bg-brand-blue/90 px-3 py-1.5 rounded-lg border border-brand-blue/35">
                  In-House Testing Facility Unit I
                </span>
                <p className="text-slate-300 text-xs font-light mt-2">
                  Oxidation Induction Tester verifying thermal endurance.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
