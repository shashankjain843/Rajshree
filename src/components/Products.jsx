import { useState } from 'react';
import { Download, ArrowRight, Check, Info } from 'lucide-react';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'HDPE Water Pipes', 'Sewerage & Drainage', 'Sprinkler Irrigation', 'PVC Pipes', 'Fittings & Endcaps'];

  const productsList = [
    {
      id: 'hdpe-water-black',
      name: 'Black HDPE High-Pressure Pipes (IS 4984)',
      image: '/images/products-black-hdpe-pipes.jpg',
      category: 'HDPE Water Pipes',
      standard: 'IS 4984 : 2018',
      sizes: '20mm to 1200mm OD',
      pressure: 'PN 2.5 to PN 16 (SDR 41 to SDR 9)',
      resin: '100% Virgin PE100 / PE80 Polymer',
      desc: 'High-density polyethylene pressure pipes for municipal water distribution, industrial mains, and Jal Jeevan Mission projects.',
      features: ['50+ Year Operational Lifespan', 'Leak-proof Butt Fusion Jointing', 'Zero Scaling & High Flow Capacity']
    },
    {
      id: 'hdpe-water-blue',
      name: 'Blue Line HDPE Potable Water Pipes (IS 4984)',
      image: '/images/products-blue-pipes.jpg',
      category: 'HDPE Water Pipes',
      standard: 'IS 4984 : 2018',
      sizes: '20mm to 630mm OD',
      pressure: 'PN 6 to PN 16',
      resin: 'Food-Grade PE100 Resin',
      desc: 'Blue co-extruded stripe HDPE conduits for drinking water supply networks and urban utility distribution.',
      features: ['Food Grade Hygienic Inner Surface', 'UV Resistance Coating', 'High Tensile Strength']
    },
    {
      id: 'hdpe-sewerage',
      name: 'HDPE Sewerage & Industrial Conduits (IS 14333)',
      image: '/images/products-grey-pipes-stacked.jpg',
      category: 'Sewerage & Drainage',
      standard: 'IS 14333 : 1996',
      sizes: '63mm to 1000mm OD',
      pressure: 'PN 4 to PN 12.5 (SDR 26 to SDR 13.6)',
      resin: 'High Impact PE100 Polymer Resin',
      desc: 'Engineered for underground gravity sewers, chemical effluent transportation, and under-road drainage culverts.',
      features: ['Immune to Chemical Corrosion', 'Flexible Ground Shift Shock Absorption', 'Abrasion Resistant Interior']
    },
    {
      id: 'pvc-rigid',
      name: 'PVC Rigid Agricultural & Drain Pipes (IS 4985)',
      image: '/images/pipe-fittings-endcap.jpg',
      category: 'PVC Pipes',
      standard: 'IS 4985 : 2021',
      sizes: '40mm to 315mm OD',
      pressure: 'Class 1 to Class 6 (2.5 kg/cm² to 10 kg/cm²)',
      resin: 'Unplasticized Polyvinyl Chloride (uPVC)',
      desc: 'Rigid PVC pressure pipes for deep tubewell borewells, agricultural lift irrigation, and rainwater harvesting.',
      features: ['High Tensile Ring Stiffness', 'Smooth Frictionless Internal Bore', 'Termite & UV Resistant']
    },
    {
      id: 'sprinkler-pipes',
      name: 'HDPE Sprinkler Irrigation Systems (IS 14151)',
      image: '/images/pipe-fitting-endcap-2.jpg',
      category: 'Sprinkler Irrigation',
      standard: 'IS 14151 (Part 1 & 2)',
      sizes: '63mm to 110mm OD',
      pressure: 'PN 2.5 to PN 6 (Class I & II)',
      resin: 'UV-Stabilized Virgin Polyethylene',
      desc: 'Quick-latch metal/plastic coupler sprinkler pipe runs for agricultural water distribution and farm irrigation.',
      features: ['Quick-Latch Metal Latch Couplers', 'Lightweight & Portable Field Handling', 'UV Resistant Masterbatch']
    },
    {
      id: 'hdpe-fittings',
      name: 'Electrofusion & Molded HDPE Fittings',
      image: '/images/products-pipe-couplers-bulk.jpg',
      category: 'Fittings & Endcaps',
      standard: 'IS 8360 / IS 7634',
      sizes: '20mm to 630mm OD',
      pressure: 'PN 6 to PN 16',
      resin: 'Injection Molded PE100',
      desc: 'Complete range of molded tees, elbows, reducers, stub ends, flanges, and electrofusion couplers.',
      features: ['Precision Die Tolerance', 'Pressure Rated to Match Pipeline', '100% Hydrostatic Tested']
    }
  ];

  const specsTableData = [
    { sdr: 'SDR 41', pn: 'PN 2.5', application: 'Gravity Drainage & Low Pressure Conduits', PE100: '110mm - 1200mm', PE80: '90mm - 1000mm' },
    { sdr: 'SDR 26', pn: 'PN 4.0', application: 'Sewer Gravity Mains & Agricultural Runs', PE100: '63mm - 1200mm', PE80: '50mm - 1000mm' },
    { sdr: 'SDR 21', pn: 'PN 6.0', application: 'Rural Potable Water Feeder Lines', PE100: '40mm - 1000mm', PE80: '32mm - 800mm' },
    { sdr: 'SDR 17', pn: 'PN 8.0 / PN 10', application: 'Municipal Distribution & Industrial Mains', PE100: '32mm - 1000mm', PE80: '25mm - 800mm' },
    { sdr: 'SDR 13.6', pn: 'PN 10.0 / PN 12.5', application: 'High Pressure Water Supply & Slurry Lines', PE100: '25mm - 800mm', PE80: '20mm - 630mm' },
    { sdr: 'SDR 11', pn: 'PN 12.5 / PN 16.0', application: 'High-Impact Pressure Mains & Gas Conduits', PE100: '20mm - 630mm', PE80: '20mm - 500mm' },
    { sdr: 'SDR 9', pn: 'PN 16.0 / PN 20.0', application: 'Extreme Chemical Effluents & Deep Trench Runs', PE100: '20mm - 500mm', PE80: '20mm - 400mm' }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? productsList 
    : productsList.filter(p => p.category === selectedCategory);

  return (
    <section id="products" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded border border-blue-100">
            Product Portfolio &amp; Technical Specifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            BIS Certified Piping Range (20mm to 1200mm OD)
          </h2>
          <p className="mt-3 text-slate-600 font-light text-sm sm:text-base">
            Manufactured in strict compliance with Bureau of Indian Standards using 100% virgin PE100 &amp; PE80 resins.
          </p>

          <div className="mt-6">
            <a
              href="/docs/Rajshree-Product-Catalogue.pdf"
              download="Rajshree-Product-Catalogue.pdf"
              onClick={(e) => {
                e.preventDefault();
                alert("Rajshree Product Catalogue PDF download started.");
              }}
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-xl shadow-md transition-all text-xs uppercase tracking-wider cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Product Catalogue (PDF)</span>
            </a>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Photo Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all group"
            >
              <div>
                <div className="relative h-52 w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-slate-900 text-amber-400 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded shadow-xs">
                    {prod.standard}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-snug">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    {prod.desc}
                  </p>

                  <div className="pt-2 space-y-1.5 border-t border-slate-100 text-xs">
                    <p className="text-slate-700 font-medium"><span className="font-bold text-slate-900">Pressure/SDR:</span> {prod.pressure}</p>
                    <p className="text-slate-700 font-medium"><span className="font-bold text-slate-900">Resin Grade:</span> {prod.resin}</p>
                    <p className="text-slate-700 font-medium"><span className="font-bold text-slate-900">Sizes Available:</span> {prod.sizes}</p>
                  </div>

                  <div className="pt-2 space-y-1">
                    {prod.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-100">
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('open-rfq-modal', { detail: { product: prod.name } }))}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 px-4 rounded-lg text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <span>Request Quote For Pipe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Specifications Table */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6 pb-4 border-b border-slate-200">
            <div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                HDPE Pipe Technical Specifications Table (IS 4984)
              </h3>
              <p className="text-xs text-slate-500 font-light mt-1">
                Standard Dimension Ratio (SDR), Working Pressure Ratings (PN), and Diameter Range.
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-800 text-xs font-bold px-3 py-1.5 rounded-lg border border-blue-100">
              <Info className="w-4 h-4 text-blue-600 shrink-0" />
              <span>PE100 &amp; PE80 Compliant</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white uppercase text-[10px] tracking-wider">
                  <th className="py-3 px-4 rounded-tl-lg">SDR Class</th>
                  <th className="py-3 px-4">Pressure Rating (PN)</th>
                  <th className="py-3 px-4">Primary Application</th>
                  <th className="py-3 px-4">PE100 OD Range</th>
                  <th className="py-3 px-4 rounded-tr-lg">PE80 OD Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {specsTableData.map((row, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900 font-mono">{row.sdr}</td>
                    <td className="py-3 px-4 font-bold text-blue-700 font-mono">{row.pn}</td>
                    <td className="py-3 px-4 font-light text-slate-600">{row.application}</td>
                    <td className="py-3 px-4 font-medium text-slate-800">{row.PE100}</td>
                    <td className="py-3 px-4 font-medium text-slate-800">{row.PE80}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
