import { motion } from 'framer-motion';
import { Layers, Settings, Compass, Sliders, Scissors, Ruler } from 'lucide-react';

export default function ManufacturingProcess() {
  const stages = [
    {
      num: '01',
      title: 'Raw Material Feeding',
      icon: <Layers className="w-5 h-5" />,
      image: '/images/manufacturing-production-line.jpg',
      alt: 'Raw polymer resins loaded in hopper feed',
      caption: 'High-density polyethylene (PE 100/PE 80) virgin granules are audited for purity, blended with UV-resistant carbon black masterbatch, and fed into the extruder hopper.'
    },
    {
      num: '02',
      title: 'Precision Extrusion',
      icon: <Settings className="w-5 h-5" />,
      image: '/images/manufacturing-extrusion-machine.jpg',
      alt: 'HDPE pipe extrusion machine die head close-up',
      caption: 'The polymer blend is melted under strict thermodynamic controls and forced through a precision die head to form uniform pipe walls.'
    },
    {
      num: '03',
      title: 'Process Control',
      icon: <Sliders className="w-5 h-5" />,
      image: '/images/manufacturing-process.jpg',
      alt: 'Operator control panel for extrusion line parameters',
      caption: 'Technicians utilize the centralized control panel to monitor extrusion speed, vacuum calibration pressure, and water cooling temperatures to eliminate dimensional drift.'
    },
    {
      num: '04',
      title: 'Vacuum Cooling & Shaping',
      icon: <Compass className="w-5 h-5" />,
      image: '/images/manufacturing-production-line.jpg',
      alt: 'Full automated cooling line tanks',
      caption: 'The pipe passes through automated vacuum sizing sleeves and progressive water spray cooling chambers to solidify its perfect circular shape.'
    },
    {
      num: '05',
      title: 'Cutting & Handling',
      icon: <Scissors className="w-5 h-5" />,
      image: '/images/manufacturing-workers-handling-pipe.jpg',
      alt: 'Workers handling finished HDPE pipes on sorting rack',
      caption: 'Fully automated planetary cutting units slice the pipe to required standard lengths. Plant workers stack and sort them in specialized handling racks.'
    },
    {
      num: '06',
      title: 'Measurement & Marking',
      icon: <Ruler className="w-5 h-5" />,
      image: '/images/manufacturing-production-line.jpg',
      alt: 'Finished HDPE pipes dimension audit and quality marking',
      caption: 'Quality control inspectors audit wall thickness tolerances and outer diameters, applying indelible laser marking showing BIS codes, batch numbers, and the RAJSHREE trademark.'
    }
  ];

  return (
    <section id="manufacturing" className="py-20 bg-slate-50 overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-brand-blue font-bold tracking-wide uppercase">Manufacturing Process</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How We Manufacture RAJSHREE Pipes
          </p>
          <div className="mt-4 h-1.5 w-24 bg-brand-orange mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-500 font-light text-sm sm:text-base">
            From polymer resin grains to finished high-pressure conduits — our fully integrated machinery ensures zero dimensional deviation and maximum impact resilience.
          </p>
        </div>

        {/* Process Steps Timeline/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stages.map((stage, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-150 shadow-md flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div>
                {/* Image container */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src={stage.image}
                    alt={stage.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Step Number Badge */}
                  <div className="absolute top-4 left-4 bg-brand-darkblue text-white text-sm font-extrabold px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-lg border border-brand-blue/35">
                    <span>{stage.num}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-left space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-brand-blue/10 text-brand-blue rounded-lg">
                      {stage.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 tracking-tight">
                      {stage.title}
                    </h3>
                  </div>
                  <p className="text-slate-500 font-light text-xs sm:text-sm leading-relaxed">
                    {stage.caption}
                  </p>
                </div>
              </div>

              {/* Bottom tag decoration */}
              <div className="h-1 bg-brand-blue/10 group-hover:bg-brand-orange transition-colors duration-300"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
