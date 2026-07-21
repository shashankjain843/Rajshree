import { motion } from 'framer-motion';
import { Leaf, Droplet, RefreshCw, ShieldAlert, Heart, HardHat } from 'lucide-react';

export default function Sustainability() {
  const ecoCards = [
    {
      icon: <Leaf className="w-6 h-6 text-[#00A86B]" />,
      title: 'Green Polymer Standards',
      desc: 'Our extruders run on lead-free, non-toxic food-grade PE resin formulations fully certified for safe potable drinking water distribution.',
      badge: 'Certified'
    },
    {
      icon: <Droplet className="w-6 h-6 text-[#00A86B]" />,
      title: 'Closed-Loop Water Recycling',
      desc: 'Plant vacuum cooling tanks reuse 98% of process water through closed-loop filtration channels to conserve ground water resources.',
      badge: '98% Recycled'
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-[#00A86B]" />,
      title: 'Zero Waste Regrind Integration',
      desc: 'Off-spec start-up trimmings are re-ground on-site to produce high-durability non-pressure cable protection ducting with 0% land waste.',
      badge: 'Zero Waste'
    }
  ];

  const safetyProtocols = [
    {
      icon: <HardHat className="w-5 h-5 text-amber-500" />,
      text: 'Mandatory wear of safety helmets, eye protection, and steel-toe safety boots at all times on the floor.'
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-amber-500" />,
      text: 'Emergency fire extinguishers and fire hydration stations are active every 15 meters on production floors.'
    },
    {
      icon: <Heart className="w-5 h-5 text-amber-500" />,
      text: 'First-aid stations staffed with qualified responders, paired with direct hospital emergency contacts.'
    }
  ];

  return (
    <section id="sustainability" className="py-12 bg-slate-50 overflow-hidden transition-colors duration-300 text-left border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-base text-blue-600 font-bold tracking-wide uppercase">
            Sustainability &amp; Safety
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Eco-Friendly Manufacturing &amp; HSE Standards
          </p>
          <div className="mt-4 h-1.5 w-24 bg-amber-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-sm sm:text-base text-slate-500 font-light leading-relaxed max-w-xl mx-auto">
            We operate our extrusion lines under rigorous Health, Safety &amp; Environment (HSE) protocols while using recyclable virgin polymers.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Eco-Initiatives (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2.5">
              <Leaf className="w-5 h-5 text-[#00A86B]" />
              <span>Eco-Conscious Manufacturing</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ecoCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between text-left group ${
                    idx === 0 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-[#00A86B]/10 rounded-xl text-[#00A86B]">
                        {card.icon}
                      </div>
                      <span className="text-[10px] font-extrabold text-[#00A86B] bg-[#00A86B]/15 px-2 py-0.5 rounded uppercase">
                        {card.badge}
                      </span>
                    </div>
                    <h4 className="font-extrabold text-slate-800 text-base">
                      {card.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 font-light mt-1.5 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: HSE Safety First Block (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between shadow-xl text-white relative overflow-hidden"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full pointer-events-none"></div>

            <div>
              <span className="text-[10px] font-black text-amber-500 bg-amber-500/15 px-2.5 py-1 rounded uppercase tracking-wider">
                HSE MANAGEMENT
              </span>
              <h3 className="text-2xl font-black mt-4 tracking-tight leading-snug">
                Safety First Environment Across All Plant Floors
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm font-light mt-2 leading-relaxed">
                Our plant safety framework protects line technicians with continuous training, heavy machinery emergency cutoffs, and strict PPE enforcement.
              </p>

              {/* Protocols checklist */}
              <div className="space-y-4 mt-8">
                {safetyProtocols.map((protocol, idx) => (
                  <div key={idx} className="flex gap-3.5 items-start">
                    <div className="p-2 bg-amber-500/20 text-amber-500 rounded-lg shrink-0 mt-0.5">
                      {protocol.icon}
                    </div>
                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      {protocol.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Safety Stats strip */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-800">
              <div className="text-left">
                <p className="text-2xl font-black text-amber-500">100%</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-extrabold mt-0.5">
                  PPE Enforcement
                </p>
              </div>
              <div className="text-left">
                <p className="text-2xl font-black text-blue-400">0</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-extrabold mt-0.5">
                  Injuries Reported
                </p>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
