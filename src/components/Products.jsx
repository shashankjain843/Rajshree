import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Info, X, Check, Download } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Products() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = siteConfig.products.categories;
  const productsList = siteConfig.products.items;

  // When 'All' is selected, show exactly 1 representative pipe for each category
  const getFilteredProducts = () => {
    if (selectedFilter === 'All') {
      const specificCategories = categories.filter(cat => cat !== 'All');
      const representativeList = [];

      for (const cat of specificCategories) {
        const item = productsList.find(p => p.categories.includes(cat) && !representativeList.some(r => r.id === p.id));
        if (item) {
          representativeList.push(item);
        }
      }
      return representativeList;
    }
    return productsList.filter(p => p.categories.includes(selectedFilter));
  };

  const filteredProducts = getFilteredProducts();

  return (
    <section id="products" className="py-10 md:py-16 bg-slate-50 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs text-brand-blue font-bold tracking-widest uppercase bg-blue-50 px-3 py-1.5 rounded-md border border-blue-100">
            {siteConfig.products.sectionTag}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {siteConfig.products.title}
          </h2>
          <div className="mt-4 h-1.5 w-24 bg-brand-orange mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 font-light text-sm sm:text-base">
            {siteConfig.products.description}
          </p>

          {/* Download Product Catalogue Button shifted here */}
          <div className="mt-5 flex justify-center">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-rfq-modal', { detail: { product: 'Product Catalogue PDF & Technical Specifications' } }))}
              className="inline-flex items-center gap-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer text-xs sm:text-sm uppercase tracking-wider hover:-translate-y-0.5 border border-slate-700"
            >
              <Download className="w-4 h-4 text-sky-400" />
              <span>Download Product Catalogue (PDF)</span>
            </button>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-200 cursor-pointer ${
                selectedFilter === cat
                  ? 'bg-brand-blue border-brand-blue text-white shadow-md'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards Grid (Clean Outer Card layout) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative group text-left"
              >
                <div>
                  {/* Image */}
                  <div className="relative h-44 bg-slate-100 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm border border-slate-200 text-brand-blue font-extrabold text-[10px] sm:text-xs px-2.5 py-1 rounded-lg">
                      {product.standards}
                    </div>
                  </div>

                  {/* Body Info (Clean: Title + Resin Badge + Short Description) */}
                  <div className="p-5 space-y-2.5">
                    <span className="text-[10px] sm:text-xs uppercase font-extrabold text-brand-orange bg-brand-orange/10 px-2.5 py-1 rounded-md border border-brand-orange/20 inline-block">
                      {product.resin}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-slate-600 font-light text-xs sm:text-sm leading-relaxed">
                      {product.desc}
                    </p>
                  </div>
                </div>

                {/* Footer Action Strip ("Details" + "Request Quote") */}
                <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="flex items-center gap-1.5 text-brand-blue font-bold text-xs hover:text-brand-darkblue transition-colors cursor-pointer bg-blue-50/80 hover:bg-blue-100/80 px-3 py-1.5 rounded-lg border border-blue-100"
                  >
                    <Info className="w-4 h-4 text-brand-blue" />
                    <span>Details</span>
                  </button>

                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('open-rfq-modal', { detail: { product: product.name } }))}
                    className="group flex items-center gap-1 text-brand-orange font-bold text-xs hover:text-brand-orange/80 transition-colors cursor-pointer"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Product Details Modal (Opens on "Details" click) */}
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
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50 sticky top-0 z-10">
                <div className="text-left">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-xs uppercase font-extrabold text-brand-blue tracking-wide mt-1">
                    PRODUCT TECHNICAL SPECIFICATIONS &amp; DETAILS
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="p-2 rounded-full hover:bg-slate-200 text-slate-500 hover:text-slate-700 transition-colors cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-6 text-left">
                <p className="text-slate-600 font-light text-sm sm:text-base leading-relaxed">
                  {selectedProduct.desc}
                </p>

                {/* Key Specs Box: Size Range & Pressure Class */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border border-slate-200 p-5 rounded-2xl bg-slate-50">
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Available Sizes (OD)</p>
                    <p className="text-sm font-extrabold text-slate-900 mt-1">{selectedProduct.sizes}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Pressure / SDR Rating</p>
                    <p className="text-sm font-extrabold text-slate-900 mt-1">{selectedProduct.pressure}</p>
                  </div>
                  <div className="sm:col-span-2 pt-2 border-t border-slate-200">
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Applicable Standards</p>
                    <p className="text-sm font-extrabold text-slate-900 mt-1">{selectedProduct.standards}</p>
                  </div>
                </div>

                {/* Key Features Bullet Points */}
                <div className="space-y-3">
                  <h4 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
                    Key Features &amp; Quality Highlights
                  </h4>
                  <div className="space-y-2">
                    {selectedProduct.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                        <div className="p-1 bg-emerald-100 text-emerald-600 rounded-full shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Extended Details */}
                <div className="space-y-4 pt-2 border-t border-slate-100">
                  <h4 className="text-base font-bold text-slate-900">Applications &amp; Installation</h4>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div>
                      <span className="font-bold text-slate-800 block">Core Applications</span>
                      <span className="text-slate-600 font-light mt-0.5 block">{selectedProduct.details.applications}</span>
                    </div>
                    <div>
                      <span className="font-bold text-slate-800 block">Jointing Methodology</span>
                      <span className="text-slate-600 font-light mt-0.5 block">{selectedProduct.details.jointing}</span>
                    </div>
                    <div>
                      <span className="font-bold text-slate-800 block">Durability &amp; Life Expectancy</span>
                      <span className="text-slate-600 font-light mt-0.5 block">{selectedProduct.details.durability}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-5 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row justify-between items-center gap-3">
                <span className="text-xs text-slate-500 font-medium">BIS &amp; ISO 9001 Certified Quality</span>
                <button
                  onClick={() => {
                    setSelectedProduct(null);
                    window.dispatchEvent(new CustomEvent('open-rfq-modal', { detail: { product: selectedProduct.name } }));
                  }}
                  className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange/90 text-white font-bold text-center px-6 py-2.5 rounded-xl transition-all duration-200 cursor-pointer text-xs uppercase tracking-wider"
                >
                  Request Quote for {selectedProduct.name.split(' ')[0]}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
