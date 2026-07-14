import { motion } from 'framer-motion';
import { Truck, Clock, Globe } from 'lucide-react';

export default function Logistics() {
  const cards = [
    {
      icon: <Globe className="w-6 h-6 text-brand-orange" />,
      title: 'Pan-India Distribution',
      desc: 'Seamless shipping to construction yards, irrigation projects, and municipal worksites across all Indian states.'
    },
    {
      icon: <Clock className="w-6 h-6 text-brand-orange" />,
      title: 'Timely Dispatch Guarantee',
      desc: 'Dedicated 24/7 loading bays ensure bulk shipments are dispatched within hours of quality approval clearance.'
    },
    {
      icon: <Truck className="w-6 h-6 text-brand-orange" />,
      title: 'Logistics Fleet Network',
      desc: 'Collaborations with major logistics partners provide real-time shipment tracking and flexible cargo loading options.'
    }
  ];

  return (
    <section id="logistics" className="py-20 bg-white overflow-hidden border-t border-slate-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-brand-blue font-bold tracking-wide uppercase">Logistics &amp; Dispatch</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Streamlined Nationwide Delivery Capability
          </p>
          <div className="mt-4 h-1.5 w-24 bg-brand-orange mx-auto rounded-full"></div>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Pillars (6cols) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 text-left space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-850 tracking-tight">
                Bulk Dispatch Processing &amp; High Fleet Availability
              </h3>
              <p className="text-slate-600 font-light text-base leading-relaxed">
                At Rajshree Technoplast, we understand that pipeline laying runs on strict schedules. Any delivery delay can stall excavation work. That is why our logistics office works in close sync with the production floor to process bulk dispatches seamlessly.
              </p>
              <p className="text-slate-600 font-light text-base leading-relaxed">
                Operating directly from our main plants in Jaipur, Rajasthan, we have easy transit access to national highways, enabling rapid truck dispatches to northern, western, and southern regions alike.
              </p>
            </div>

            {/* Logistics Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
              {cards.map((card, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="p-3 bg-brand-orange/10 text-brand-orange rounded-xl w-fit">
                    {card.icon}
                  </div>
                  <h4 className="text-sm sm:text-base font-extrabold text-slate-800 tracking-tight">{card.title}</h4>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Loading Truck Photo (6cols) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            {/* Background frame */}
            <div className="absolute inset-0 bg-brand-blue rounded-3xl -rotate-2 scale-95 opacity-10 z-0"></div>
            
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
              <img
                src="/images/dispatch-loading-truck.jpg"
                alt="A commercial cargo truck being loaded with coiled HDPE pipes at Rajshree factory yard"
                className="w-full h-auto object-cover aspect-[4/3] hover:scale-102 transition-transform duration-500"
                loading="lazy"
              />
              {/* Overlay caption */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 to-transparent p-6 text-left">
                <p className="text-white text-sm font-bold">Nationwide Shipping Terminal, Jaipur Plant</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
