import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Phone, ShieldCheck } from 'lucide-react';

export default function DealerLocator() {
  const [searchQuery, setSearchQuery] = useState('');

  const dealers = [
    {
      name: 'Rajshree Piping Hub (Jaipur)',
      city: 'Jaipur',
      state: 'Rajasthan',
      address: 'VKI Area, Road No. 9, Jaipur - 302013, Rajasthan',
      phone: '+91-9829050790'
    },
    {
      name: 'Marudhar Irrigation Agency (Jodhpur)',
      city: 'Jodhpur',
      state: 'Rajasthan',
      address: 'Basni Industrial Area, Phase II, Jodhpur - 342005, Rajasthan',
      phone: '+91-291-2445678'
    },
    {
      name: 'Gujarat Polymer Distributors (Ahmedabad)',
      city: 'Ahmedabad',
      state: 'Gujarat',
      address: 'GIDC Industrial Estate, Vatva, Ahmedabad - 382445, Gujarat',
      phone: '+91-9426011234'
    },
    {
      name: 'Bharat Infrastructure Sales (Delhi NCR)',
      city: 'Noida',
      state: 'Uttar Pradesh',
      address: 'Sector 63, Block H, Noida - 201301, Uttar Pradesh',
      phone: '+91-9811022334'
    }
  ];

  const filteredDealers = dealers.filter(dealer => {
    const query = searchQuery.toLowerCase();
    return (
      dealer.name.toLowerCase().includes(query) ||
      dealer.city.toLowerCase().includes(query) ||
      dealer.state.toLowerCase().includes(query) ||
      dealer.address.toLowerCase().includes(query)
    );
  });

  return (
    <section id="dealers" className="py-12 bg-white border-t border-slate-200 transition-colors duration-300 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-base text-blue-600 font-bold tracking-wide uppercase">
            Dealer Network
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Locate Authorized Distributors Near You
          </p>
          <div className="mt-4 h-1.5 w-24 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-slate-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 rounded-2xl pl-12 pr-4 py-4 text-sm font-semibold focus:outline-none shadow-inner text-slate-800"
            placeholder="Search by City, State, or Area..."
          />
        </div>

        {/* Dealers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {filteredDealers.length > 0 ? (
            filteredDealers.map((dealer, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-extrabold text-blue-600 bg-blue-500/10 px-2 py-0.5 rounded">
                      {dealer.state}
                    </span>
                    <ShieldCheck className="w-5 h-5 text-amber-500" />
                  </div>
                  <h4 className="font-extrabold text-slate-800 text-base">
                    {dealer.name}
                  </h4>
                  <div className="flex items-start gap-2 text-slate-500 mt-4 text-xs font-light leading-relaxed">
                    <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <p>{dealer.address}</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-2 text-xs font-bold text-slate-700">
                  <Phone className="w-4 h-4 text-[#00A86B]" />
                  <span>Call:</span>
                  <a href={`tel:${dealer.phone}`} className="hover:text-blue-600 transition-colors text-slate-800 font-black">{dealer.phone}</a>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-slate-400 text-sm font-light">
              No authorized dealers found matching your query. Search for Jaipur or Rajasthan.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
