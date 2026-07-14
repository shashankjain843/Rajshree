import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, Info, X } from 'lucide-react';

export default function Products() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [
    'All',
    'HDPE Pipe (IS:4984:2018)',
    'HDPE Sewage Pipe (IS:14333)',
    'MDPE Pipe',
    'DWC Pipe SN4',
    'Agriculture Pipe',
    'HDPE Coil Pipe',
    'Flanged HDPE Pipe',
    'Fittings & Couplers'
  ];

  const productsList = [
    {
      id: 'black-hdpe',
      name: 'High-Density Polyethylene (HDPE) Pipes',
      image: '/images/products-black-hdpe-pipes.jpg',
      categories: ['HDPE Pipe (IS:4984:2018)', 'Agriculture Pipe'],
      standards: 'IS:4984:2018 | ISO 4427',
      sizes: '20mm to 1200mm OD',
      pressure: 'PN 2.5 to PN 16 (SDR 41 to SDR 9)',
      desc: 'Engineered from premium PE 100/PE 80 resin, ideal for high-pressure water mains, industrial fluid transport, and agricultural mainlines.',
      details: {
        applications: 'Potable water supply, micro-irrigation, sewer force mains, industrial effluent disposal, and fly ash slurry transport.',
        jointing: 'Butt fusion welding, electrofusion jointing, and mechanical compression fittings.',
        durability: 'Highly resistant to weathering, chemical attack, UV radiation, and seismic ground movements.'
      }
    },
    {
      id: 'blue-mdpe',
      name: 'Blue MDPE / Agricultural Coil Pipes',
      image: '/images/products-blue-pipes.jpg',
      categories: ['MDPE Pipe', 'Agriculture Pipe', 'HDPE Coil Pipe'],
      standards: 'IS:14885 | IS:4984',
      sizes: '20mm to 110mm OD',
      pressure: 'SDR 11 & SDR 17.6',
      desc: 'Medium-density blue polyethylene pipes with outstanding flexibility and stress-crack resistance. Ideal for drinking water connection lines and farms.',
      details: {
        applications: 'House service connections, farm sprinkler lines, micro-irrigation distribution, borewell pump delivery lines.',
        jointing: 'Compression fittings, socket fusion, and electrofusion couplers.',
        durability: 'High flexibility allows layout around obstacles; resistant to soil chemistry and freezing temperatures.'
      }
    },
    {
      id: 'grey-dwc',
      name: 'Structured Wall Grey PVC Pipes',
      image: '/images/products-grey-pipes-stacked.jpg',
      categories: ['DWC Pipe SN4', 'HDPE Sewage Pipe (IS:14333)'],
      standards: 'IS:13592 | IS:4985',
      sizes: '75mm to 315mm OD',
      pressure: 'Ring-fit Class 1 & 2 (SN4 / SN8)',
      desc: 'Robust grey structured wall pipes designed for low-pressure gravity sewers, building drainage, and underground telecommunication cable protection.',
      details: {
        applications: 'Gravity storm sewers, industrial wastewater drainage, soil/waste venting, underground high-voltage cable protection ducts.',
        jointing: 'Elastomeric rubber ring joints (Ring-fit) and cold solvent cement welding.',
        durability: 'Excellent hydraulic capacity due to smooth internal bore; immune to internal scale and chemical decay.'
      }
    },
    {
      id: 'bulk-couplers',
      name: 'HDPE Compression Couplers & Fittings',
      image: '/images/products-pipe-couplers-bulk.jpg',
      categories: ['Fittings & Couplers'],
      standards: 'IS:7328 | ISO 14236',
      sizes: '20mm to 110mm OD',
      pressure: 'Up to PN 16 (16 Bar)',
      desc: 'Bulk-manufactured high-precision compression couplers, elbows, and tees ensuring watertight joints in agricultural or pipeline connection runs.',
      details: {
        applications: 'Quick-release jointing for agricultural headers, service connections, and temporary supply piping lines.',
        jointing: 'Hand-tightened mechanical compression nuts with elastomeric O-rings and split-ring grips.',
        durability: 'Molded from virgin PP/HDPE for high impact strength and UV resistance under heavy sunlight.'
      }
    },
    {
      id: 'endcap-fitting',
      name: 'Premium Molded Endcap Joint Fittings',
      image: '/images/pipe-fittings-endcap.jpg',
      categories: ['Fittings & Couplers'],
      standards: 'IS:4984 | IS:7328',
      sizes: '50mm to 250mm OD',
      pressure: 'PN 6 to PN 16',
      desc: 'High-strength butt-fusion end caps designed to safely cap off pressurized HDPE lines in industrial and municipal supply runs.',
      details: {
        applications: 'Dead-end capping in water distribution lines, testing pressure lines, and sealing empty conduits.',
        jointing: 'Thermal butt-fusion welding or electrofusion coupling.',
        durability: 'Engineered to withstand the same pressure spikes and surge loads as the main HDPE pipeline.'
      }
    },
    {
      id: 'endcap-fitting-2',
      name: 'Heavy-Duty Threaded Fitting End Caps',
      image: '/images/pipe-fitting-endcap-2.jpg',
      categories: ['Fittings & Couplers'],
      standards: 'ISO 4427 | IS:4984',
      sizes: '32mm to 160mm OD',
      pressure: 'PN 10 to PN 16',
      desc: 'Secondary molded threaded termination caps providing a secure, leak-proof seal with high mechanical resistance against tensile loads.',
      details: {
        applications: 'Service termination points in agricultural spray setups, plumbing branches, and main terminal caps.',
        jointing: 'Female/Male BSP threads or compression lock mechanism.',
        durability: 'Constructed to resist abrasive soils, fertilizer chemicals, and mechanical vibration.'
      }
    },
    {
      id: 'display-board',
      name: 'Full Range Showcase Display Board',
      image: '/images/products-display-board.jpg',
      categories: ['HDPE Pipe (IS:4984:2018)', 'Fittings & Couplers'],
      standards: 'Full RAJSHREE Product Range',
      sizes: 'Comprehensive size showcase',
      pressure: 'Variegated Class Ratings',
      desc: 'A demonstration display board showcasing our wide catalog of PE, MDPE, PVC, end caps, tees, reducers, and custom couplers.',
      details: {
        applications: 'Comprehensive specification review for distribution agencies, trade exhibits, and contractor presentations.',
        jointing: 'Inter-compatible compression and fusion systems.',
        durability: 'Certified polymer molding ensuring long life and reliable thread tolerances.'
      }
    }
  ];

  // Filter products based on selected tab
  const filteredProducts = selectedFilter === 'All'
    ? productsList
    : productsList.filter(p => p.categories.includes(selectedFilter));

  return (
    <section id="products" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-base text-brand-blue font-bold tracking-wide uppercase">Our Products</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            High-Performance Piping &amp; Fittings
          </p>
          <div className="mt-4 h-1.5 w-24 bg-brand-orange mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-500 font-light text-sm sm:text-base">
            Manufactured from high-grade polymer resins under strict dimensional checks. Fully compliant with Bureau of Indian Standards (BIS) specifications.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-200 cursor-pointer ${
                selectedFilter === cat
                  ? 'bg-brand-blue border-brand-blue text-white shadow-md'
                  : 'bg-slate-50 border-slate-200 text-slate-655 hover:bg-slate-100 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards Grid with Animations */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-50 rounded-3xl border border-slate-150 overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
              >
                <div>
                  {/* Image */}
                  <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Category Label Overlay */}
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm border border-slate-200 text-brand-blue font-extrabold text-[10px] sm:text-xs px-2.5 py-1 rounded-lg">
                      {product.categories[0]}
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 text-left space-y-3">
                    <span className="text-[10px] sm:text-xs uppercase font-extrabold text-brand-orange bg-brand-orange/10 px-2.5 py-1 rounded-md border border-brand-orange/20">
                      {product.standards}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-slate-500 font-light text-xs sm:text-sm leading-relaxed">
                      {product.desc}
                    </p>

                    {/* Specs strip */}
                    <div className="bg-white border border-slate-100 p-3.5 rounded-xl space-y-1.5">
                      <div className="flex justify-between text-xs font-light">
                        <span className="text-slate-400 font-medium">Size Range:</span>
                        <span className="text-slate-800 font-bold">{product.sizes}</span>
                      </div>
                      <div className="flex justify-between text-xs font-light">
                        <span className="text-slate-400 font-medium">Pressure Class:</span>
                        <span className="text-slate-800 font-bold">{product.pressure}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action Strip */}
                <div className="p-5 bg-slate-100/50 border-t border-slate-200 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="flex items-center gap-1 text-brand-blue font-bold text-xs hover:text-brand-darkblue transition-colors cursor-pointer"
                  >
                    <Info className="w-4 h-4" />
                    <span>View Specifications</span>
                  </button>
                  <a
                    href="#contact"
                    className="group flex items-center gap-1 text-brand-orange font-bold text-xs hover:text-brand-orange/80 transition-colors"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Specification Detail Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
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
                  <div className="text-left">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 tracking-tight">
                      {selectedProduct.name}
                    </h3>
                    <p className="text-xs uppercase font-extrabold text-brand-blue tracking-wide mt-1">
                      Technical Spec Sheet
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="p-2 rounded-full hover:bg-slate-200 text-slate-500 hover:text-slate-700 transition-colors cursor-pointer"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-8 space-y-6 text-left">
                  <div>
                    <p className="text-slate-650 font-light text-sm sm:text-base leading-relaxed">
                      {selectedProduct.desc}
                    </p>
                  </div>

                  {/* Specs Table */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border border-slate-200 p-6 rounded-2xl bg-slate-50">
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Applicable Standards</p>
                      <p className="text-sm font-extrabold text-slate-800 mt-1">{selectedProduct.standards}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Size Range (Outer Diameter)</p>
                      <p className="text-sm font-extrabold text-slate-800 mt-1">{selectedProduct.sizes}</p>
                    </div>
                    <div className="sm:col-span-2 pt-2 border-t border-slate-200">
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Pressure / Class Rating</p>
                      <p className="text-sm font-extrabold text-slate-800 mt-1">{selectedProduct.pressure}</p>
                    </div>
                  </div>

                  {/* Extended Technical Details */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-slate-850 border-b border-slate-100 pb-2">Technical Parameters</h4>
                    
                    <div className="space-y-3">
                      <div>
                        <span className="font-bold text-slate-700 text-xs sm:text-sm block">Core Applications:</span>
                        <span className="text-slate-550 font-light text-xs sm:text-sm mt-0.5 block">{selectedProduct.details.applications}</span>
                      </div>
                      <div>
                        <span className="font-bold text-slate-700 text-xs sm:text-sm block">Jointing Methodologies:</span>
                        <span className="text-slate-550 font-light text-xs sm:text-sm mt-0.5 block">{selectedProduct.details.jointing}</span>
                      </div>
                      <div>
                        <span className="font-bold text-slate-700 text-xs sm:text-sm block">Durability &amp; Safety:</span>
                        <span className="text-slate-550 font-light text-xs sm:text-sm mt-0.5 block">{selectedProduct.details.durability}</span>
                      </div>
                    </div>
                  </div>

                  {/* Quality Seal */}
                  <div className="flex items-center gap-3 p-4 bg-brand-blue/5 rounded-2xl border border-brand-blue/10">
                    <ShieldCheck className="w-6 h-6 text-brand-blue shrink-0" />
                    <p className="text-xs text-slate-500 leading-normal font-light">
                      Every production run is calibrated and tested in-house. Meets strict BIS code conformity benchmarks before being stocked.
                    </p>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-6 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <span className="text-xs text-slate-400 font-medium">Rajshree Technoplast Pvt Ltd</span>
                  <a
                    href="#contact"
                    onClick={() => setSelectedProduct(null)}
                    className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange/90 text-white font-bold text-center px-6 py-3 rounded-xl transition-all duration-200"
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
