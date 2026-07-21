import { motion } from 'framer-motion';
import { Layers, Settings, Compass, Sliders, Scissors, Ruler } from 'lucide-react';

export default function ManufacturingProcess() {
  const stages = [
    {
      num: '01',
      title: 'Raw Polymer Resin Blending',
      icon: <Layers className="w-5 h-5" />,
      image: '/images/manufacturing-process.jpg',
      alt: 'Raw polymer resins loaded in hopper feed',
      caption: 'High-density polyethylene (PE 100/PE 80) virgin granules are audited for purity, blended with UV-stabilized carbon black masterbatch, and gravimetrically fed into the extruder.'
    },
    {
      num: '02',
      title: 'Precision Extrusion Machine',
      icon: <Settings className="w-5 h-5" />,
      image: '/images/manufacturing-extrusion-machine.jpg',
      alt: 'HDPE pipe extrusion machine die head close-up',
      caption: 'The polymer melt is homogenized under automated thermodynamic zones and forced through a high-precision die head to create flawless pipe wall uniformity.'
    },
    {
      num: '03',
      title: 'Automated Line & Vacuum Cooling',
      icon: <Sliders className="w-5 h-5" />,
      image: '/images/manufacturing-production-line.jpg',
      alt: 'Automated extrusion production line overview',
      caption: 'The extruded conduit passes through high-vacuum sizing sleeves and multi-stage spray cooling tanks to achieve exact outer diameter tolerances.'
    },
    {
      num: '04',
      title: 'Planetary Cutting & Factory Handling',
      icon: <Scissors className="w-5 h-5" />,
      image: '/images/manufacturing-workers-handling-pipe.jpg',
      alt: 'Plant technicians handling finished HDPE pipe coils',
      caption: 'Precision planetary cutters slice pipes to specified straight lengths (6m/12m) or coil runs up to 100m, followed by final dimensional and marking inspection.'
    }
  ];

  return (
    <section id="manufacturing" className="py-12 bg-slate-50 overflow-hidden border-t border-slate-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-base text-blue-600 font-bold tracking-wide uppercase">Manufacturing Process</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How We Manufacture RAJSHREE Pipes
          </p>
          <div className="mt-4 h-1.5 w-24 bg-amber-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-500 font-light text-sm sm:text-base">
            From polymer resin grains to finished high-pressure conduits — our fully integrated machinery ensures zero dimensional deviation and maximum impact resilience.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((stage, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div>
                {/* Image container */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <img
                    src={stage.image}
                    alt={stage.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Step Number Badge */}
                  <div className="absolute top-4 left-4 bg-slate-900 text-white text-sm font-extrabold px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-lg border border-slate-700">
                    <span>{stage.num}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 text-left space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-amber-500/10 text-amber-500 rounded-lg">
                      {stage.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 tracking-tight">{stage.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                    {stage.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
