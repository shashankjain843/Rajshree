import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, ArrowRight, ShieldCheck, Check, Info, X } from 'lucide-react';

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productsList = [
    {
      id: 'hdpe',
      name: 'HDPE Pipes',
      standards: 'IS:4984 | IS:14333 | IS:14151',
      sizeRange: '20mm OD to 1200mm OD',
      pressureRating: 'PN 2.5 to PN 16 (SDR 41 to SDR 9)',
      features: ['High tensile strength', 'Flexible and crack-resistant', 'Lifespan up to 50+ years', 'Corrosion & chemical proof'],
      description: 'Our High-Density Polyethylene (HDPE) pipes are engineered for high-pressure water mains, sewer disposal systems, industrial effluents, and dredging pipelines. Made from prime virgin PE 100 or PE 80 grade raw materials.',
      details: {
        applications: 'Drinking water networks, irrigation mains, industrial slurry disposal, river crossing pipelines, submarine outfalls.',
        jointing: 'Butt fusion welding, electrofusion jointing, and mechanical compression fittings.',
        durability: 'High resistance to weathering, UV radiation, and ground movements (seismic resilience).'
      }
    },
    {
      id: 'pvc',
      name: 'PVC Pipes',
      standards: 'IS:4985 | IS:13592 | IS:12818',
      sizeRange: '50mm OD to 315mm OD',
      pressureRating: 'PN 2.5 to PN 10 (Class 1 to Class 6)',
      features: ['SDR34, SN8 Ring fit', 'Self fit & Cement solvent', 'Type B Cement solvent', 'Smooth inner bore'],
      description: 'Our Polyvinyl Chloride (PVC) piping systems are designed for high-efficiency fluid flows, irrigation channels, and ventilation ducting. Available in various fittings including Ring Fit, Self Fit, and Solvent Cement types.',
      details: {
        applications: 'Agriculture irrigation, tube-well casings, soil-waste-rainwater (SWR) systems, building drainage, chemical vent systems.',
        jointing: 'Elastomeric ring joints (Ring-fit) and cold-solvent weld jointing (Self-fit).',
        durability: 'Excellent hydraulic characteristics, scale-proof, fire retardant, and high mechanical impact resistance.'
      }
    },
    {
      id: 'hdpe-coil',
      name: 'HDPE Coil Pipes',
      standards: 'IS:4984',
      sizeRange: '20mm OD to 110mm OD',
      pressureRating: 'PN 4.0 to PN 16',
      features: ['Jointless long lengths', 'Easy to transport & layout', 'Highly flexible coils', 'Saves installation joints'],
      description: 'Designed for quick installation in long-span piping projects, agricultural irrigation, and electrical ducting. Coils reduce the number of jointing steps, minimizing leakage failure points.',
      details: {
        applications: 'Drip irrigation connections, borewell pump pipelines, telecommunication optical fiber ducting, sub-surface drainage.',
        jointing: 'Compression jointing, male/female couplers, and electrofusion fittings.',
        durability: 'Flexible enough to bend around obstacles without cracking; handles freezing/heaving conditions.'
      }
    },
    {
      id: 'mdpe',
      name: 'MDPE Pipes',
      standards: 'IS:14885',
      sizeRange: '20mm OD to 110mm OD',
      pressureRating: 'SDR 11 & SDR 17.6',
      features: ['Excellent stress crack resistance', 'High impact strength', 'Color coded (Blue/Yellow)', 'Fusion-compatible'],
      description: 'Medium-Density Polyethylene (MDPE) pipes are specifically manufactured for natural gas grid networks and drinking water service lines, maintaining supreme ductility in all temperature ranges.',
      details: {
        applications: 'LPG/PNG gas distribution pipelines, city gas grids, service connection pipes for drinking water mains.',
        jointing: 'Electrofusion fittings and socket fusion welding.',
        durability: 'Very high slow-crack growth resistance, high squeeze-off recovery, and electrical insulation properties.'
      }
    }
  ];

  return (
    <section id="products" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-brand-blue font-bold tracking-wide uppercase">Product Catalog</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            High-Performance Piping Systems
          </p>
          <div className="mt-4 h-1.5 w-24 bg-brand-orange mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-500 font-light text-sm sm:text-base">
            Manufactured using state-of-the-art extrusion machinery and virgin raw materials. Fully compliant with Bureau of Indian Standards (BIS) specifications.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productsList.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
            >
              {/* Product Card Header */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs uppercase font-extrabold text-brand-blue bg-brand-blue/10 px-3 py-1.5 rounded-lg border border-brand-blue/20">
                    {product.standards}
                  </span>
                  {product.id === 'hdpe' || product.id === 'hdpe-coil' ? (
                    <span className="w-4 h-4 rounded-full bg-slate-900 ring-4 ring-slate-200" title="Color: Black"></span>
                  ) : product.id === 'pvc' ? (
                    <span className="w-4 h-4 rounded-full bg-orange-600 ring-4 ring-orange-100" title="Color: Orange/Gray"></span>
                  ) : (
                    <span className="w-4 h-4 rounded-full bg-yellow-400 ring-4 ring-yellow-100" title="Color: Blue/Yellow"></span>
                  )}
                </div>

                <h3 className="text-2xl font-extrabold text-slate-800 tracking-tight group-hover:text-brand-blue transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-slate-500 font-light text-sm mt-3 leading-relaxed line-clamp-3">
                  {product.description}
                </p>

                {/* Specs highlights */}
                <div className="mt-6 space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-slate-500 font-medium">Sizes:</span>
                    <span className="text-slate-800 font-bold">{product.sizeRange}</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-slate-500 font-medium">Rating:</span>
                    <span className="text-slate-800 font-bold">{product.pressureRating}</span>
                  </div>
                </div>

                {/* Quick Bullet List */}
                <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 text-left">
                  {product.features.slice(0, 4).map((f, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-light">
                      <Check className="w-4 h-4 text-brand-orange shrink-0" />
                      <span className="truncate">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Strip */}
              <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="flex items-center gap-1.5 text-brand-blue font-bold text-xs sm:text-sm hover:text-brand-darkblue transition-colors"
                >
                  <Info className="w-4 h-4" />
                  <span>View Specifications</span>
                </button>
                <a
                  href="#contact"
                  className="group flex items-center gap-1.5 text-brand-orange font-bold text-xs sm:text-sm hover:text-brand-orange/80 transition-colors"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specification Detail Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProduct(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ type: 'spring', damping: 25 }}
                className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto overflow-x-hidden border border-slate-200"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50 sticky top-0 z-10">
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-800 tracking-tight">
                      {selectedProduct.name}
                    </h3>
                    <p className="text-xs uppercase font-extrabold text-brand-blue tracking-wide mt-1">
                      Technical Spec Sheet
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="p-2 rounded-full hover:bg-slate-200 text-slate-500 hover:text-slate-700 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-8 space-y-6">
                  {/* Summary */}
                  <div>
                    <p className="text-slate-600 font-light text-base leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  </div>

                  {/* Quick specs grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border border-slate-200 p-6 rounded-2xl bg-slate-50">
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Applicable Standards</p>
                      <p className="text-sm font-extrabold text-slate-800 mt-1">{selectedProduct.standards}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Size Range (Outer Diameter)</p>
                      <p className="text-sm font-extrabold text-slate-800 mt-1">{selectedProduct.sizeRange}</p>
                    </div>
                    <div className="sm:col-span-2 pt-2 border-t border-slate-200">
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Pressure / Class Rating</p>
                      <p className="text-sm font-extrabold text-slate-800 mt-1">{selectedProduct.pressureRating}</p>
                    </div>
                  </div>

                  {/* Extended Details */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-2">Technical Parameters</h4>
                    
                    <div className="space-y-3">
                      <div>
                        <span className="font-bold text-slate-700 text-sm block">Core Applications:</span>
                        <span className="text-slate-600 font-light text-sm mt-0.5 block">{selectedProduct.details.applications}</span>
                      </div>
                      <div>
                        <span className="font-bold text-slate-700 text-sm block">Jointing Methodologies:</span>
                        <span className="text-slate-600 font-light text-sm mt-0.5 block">{selectedProduct.details.jointing}</span>
                      </div>
                      <div>
                        <span className="font-bold text-slate-700 text-sm block">Durability &amp; Safety:</span>
                        <span className="text-slate-600 font-light text-sm mt-0.5 block">{selectedProduct.details.durability}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bullet list of advantages */}
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-2 mb-3">Key Advantages</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedProduct.features.map((f, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-slate-600 font-light text-sm">
                          <Check className="w-4 h-4 text-brand-orange" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-6 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <span className="text-xs text-slate-400 font-medium">Rajshree Technoplast Pvt Ltd © 2026</span>
                  <a
                    href="#contact"
                    onClick={() => setSelectedProduct(null)}
                    className="w-full sm:w-auto bg-brand-blue hover:bg-brand-darkblue text-white font-bold text-center px-6 py-3 rounded-xl transition-all duration-200"
                  >
                    Request Callback for this Product
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
