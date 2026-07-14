import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

export default function DealerLocator() {
  const { lang, t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');

  const dealers = [
    {
      name: lang === 'HI' ? 'राजश्री पाइपिंग हब (जयपुर)' : 'Rajshree Piping Hub (Jaipur)',
      city: lang === 'HI' ? 'जयपुर' : 'Jaipur',
      state: lang === 'HI' ? 'राजस्थान' : 'Rajasthan',
      address: lang === 'HI' ? 'वीकेआई एरिया, रोड नंबर 9, जयपुर - 302013' : 'VKI Area, Road No. 9, Jaipur - 302013, Rajasthan',
      phone: '+91-9829050790'
    },
    {
      name: lang === 'HI' ? 'मरुधर सिंचाई एजेंसी (जोधपुर)' : 'Marudhar Irrigation Agency (Jodhpur)',
      city: lang === 'HI' ? 'जोधपुर' : 'Jodhpur',
      state: lang === 'HI' ? 'राजस्थान' : 'Rajasthan',
      address: lang === 'HI' ? 'बासनी औद्योगिक क्षेत्र, द्वितीय चरण, जोधपुर - 342005' : 'Basni Industrial Area, Phase II, Jodhpur - 342005, Rajasthan',
      phone: '+91-291-2445678'
    },
    {
      name: lang === 'HI' ? 'गुजरात पॉलीमर वितरक (अहमदाबाद)' : 'Gujarat Polymer Distributors (Ahmedabad)',
      city: lang === 'HI' ? 'अहमदाबाद' : 'Ahmedabad',
      state: lang === 'HI' ? 'गुजरात' : 'Gujarat',
      address: lang === 'HI' ? 'जीआईडीसी औद्योगिक क्षेत्र, वटवा, अहमदाबाद - 382445' : 'GIDC Industrial Estate, Vatva, Ahmedabad - 382445, Gujarat',
      phone: '+91-9426011234'
    },
    {
      name: lang === 'HI' ? 'भारत इन्फ्रास्ट्रक्चर सेल्स (दिल्ली एनसीआर)' : 'Bharat Infrastructure Sales (Delhi NCR)',
      city: lang === 'HI' ? 'नोएडा' : 'Noida',
      state: lang === 'HI' ? 'उत्तर प्रदेश' : 'Uttar Pradesh',
      address: lang === 'HI' ? 'सेक्टर 63, ब्लॉक एच, नोएडा - 201301' : 'Sector 63, Block H, Noida - 201301, Uttar Pradesh',
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
    <section id="dealers" className="py-20 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-950 transition-colors duration-300 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-base text-brand-blue dark:text-brand-lightblue font-bold tracking-wide uppercase">
            {t('dealerTitle')}
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('dealerSubtitle')}
          </p>
          <div className="mt-4 h-1.5 w-24 bg-brand-orange mx-auto rounded-full"></div>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-slate-400 dark:text-slate-500" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-brand-blue rounded-2xl pl-12 pr-4 py-4 text-sm font-semibold focus:outline-none shadow-inner text-slate-800 dark:text-white"
            placeholder={t('dealerSearchPlaceholder')}
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
                className="bg-slate-50 dark:bg-slate-950 p-6 rounded-2xl border border-slate-150 dark:border-slate-850 hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-extrabold text-brand-blue dark:text-brand-lightblue bg-brand-blue/5 dark:bg-brand-blue/15 px-2 py-0.5 rounded">
                      {dealer.state}
                    </span>
                    <ShieldCheck className="w-5 h-5 text-brand-orange" />
                  </div>
                  <h4 className="font-extrabold text-slate-850 dark:text-white text-base">
                    {dealer.name}
                  </h4>
                  <div className="flex items-start gap-2 text-slate-500 dark:text-slate-400 mt-4 text-xs font-light leading-relaxed">
                    <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                    <p>{dealer.address}</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-slate-150 dark:border-slate-850 flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                  <Phone className="w-4 h-4 text-[#00A86B]" />
                  <span>{t('dealerPhone')}</span>
                  <a href={`tel:${dealer.phone}`} className="hover:text-brand-blue transition-colors text-slate-800 dark:text-white font-black">{dealer.phone}</a>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-slate-400 dark:text-slate-500 text-sm font-light">
              {lang === 'HI' ? 'कोई डीलर नहीं मिला। कृपया जयपुर या राजस्थान खोजें।' : 'No authorized dealers found matching your query. Search for Jaipur or Rajasthan.'}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
