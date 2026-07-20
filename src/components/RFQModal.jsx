import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, FileText, CheckCircle2, MessageCircle } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

export default function RFQModal({ isOpen, onClose, defaultProduct = '' }) {
  const { lang } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    product: defaultProduct || 'HDPE Water Pipes (IS 4984)',
    diameter: '110mm OD',
    pressure: 'PN 10 / SDR 17',
    quantity: '500 Meters',
    deliveryLocation: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (defaultProduct) {
      setFormData(prev => ({ ...prev, product: defaultProduct }));
    }
  }, [defaultProduct]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          subject: `B2B RFQ Quote: ${formData.product} (${formData.quantity})`,
          message: `[BULK RFQ QUOTE INQUIRY]\nCompany: ${formData.company || 'N/A'}\nProduct: ${formData.product}\nSize (OD): ${formData.diameter}\nPressure Class: ${formData.pressure}\nQuantity: ${formData.quantity}\nDelivery Destination: ${formData.deliveryLocation || 'Jaipur Yard / PAN India'}\nNotes: ${formData.notes}`
        })
      });
    } catch (err) {
      console.warn('Backend API submission skipped or failed, fallback to WhatsApp trigger:', err);
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const generateWhatsAppUrl = () => {
    const text = `Hello Rajshree Technoplast Sales Team,\nI would like a Wholesale Quote for:\n- *Product:* ${formData.product}\n- *Size (OD):* ${formData.diameter}\n- *Rating:* ${formData.pressure}\n- *Quantity:* ${formData.quantity}\n- *Location:* ${formData.deliveryLocation || 'PAN India'}\n- *Client Name:* ${formData.name}\n- *Phone:* ${formData.phone}`;
    return `https://wa.me/919829050790?text=${encodeURIComponent(text)}`;
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl max-w-2xl w-full border border-slate-200 dark:border-slate-800 overflow-hidden my-8"
        >
          {/* Header */}
          <div className="bg-slate-900 text-white p-6 relative flex justify-between items-center border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-brand-blue/20 text-brand-lightblue rounded-2xl border border-brand-blue/30">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-brand-orange text-white font-extrabold text-[10px] uppercase tracking-wider mb-1">
                  {lang === 'HI' ? 'बी2बी थोक कोटेशन' : 'B2B Commercial RFQ'}
                </span>
                <h3 className="text-xl font-extrabold tracking-tight">
                  {lang === 'HI' ? 'थोक कोटेशन अनुरोध पत्र' : 'Request Wholesale Quote'}
                </h3>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Form / Success view */}
          <div className="p-6 sm:p-8">
            {isSubmitted ? (
              <div className="text-center py-8 space-y-6">
                <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {lang === 'HI' ? 'कोटेशन अनुरोध प्राप्त हुआ!' : 'RFQ Request Submitted!'}
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 max-w-md mx-auto">
                    {lang === 'HI' 
                      ? 'हमारी बिक्री टीम 24 घंटे के भीतर आपसे संपर्क करेगी। त्वरित सहायता के लिए आप सीधे व्हाट्सएप पर भी चैट कर सकते हैं।' 
                      : 'Our engineering sales desk will prepare your Proforma Quote within 24 hours.'}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold py-3 px-6 rounded-xl text-sm shadow-lg transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                    <span>{lang === 'HI' ? 'व्हाट्सएप पर तुरंत मूल्य प्राप्त करें' : 'Get Instant Price on WhatsApp'}</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      onClose();
                    }}
                    className="bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-bold py-3 px-6 rounded-xl text-sm transition-all cursor-pointer"
                  >
                    {lang === 'HI' ? 'बंद करें' : 'Close Window'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                      {lang === 'HI' ? 'आपका नाम *' : 'Contact Name *'}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={lang === 'HI' ? 'उदा. राजेश शर्मा' : 'e.g. Rajesh Sharma'}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-blue outline-none"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                      {lang === 'HI' ? 'फोन / व्हाट्सएप नंबर *' : 'Phone / WhatsApp *'}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98290XXXXX"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-blue outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Company */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                      {lang === 'HI' ? 'कंपनी / ठेकेदार का नाम' : 'Company / Firm Name'}
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={lang === 'HI' ? 'उदा. शर्मा इंफ्रा प्रोजेक्ट्स' : 'e.g. Sharma Infra Ltd'}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-blue outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                      {lang === 'HI' ? 'ईमेल पता' : 'Email Address'}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="info@yourcompany.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-blue outline-none"
                    />
                  </div>
                </div>

                {/* Product Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                    {lang === 'HI' ? 'उत्पाद चयन *' : 'Product Category *'}
                  </label>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-blue outline-none"
                  >
                    <option value="HDPE Water Pipes (IS 4984)">HDPE Water Pipes (IS 4984:2018)</option>
                    <option value="HDPE Sewerage Pipes (IS 14333)">HDPE Sewerage & Drainage Pipes (IS 14333)</option>
                    <option value="HDPE Sprinkler Pipes & Fittings (IS 14151)">HDPE Sprinkler Systems (IS 14151)</option>
                    <option value="MDPE Gas & Water Service Lines">MDPE Service Line Tubing</option>
                    <option value="PVC Agriculture & Sewer Pipes (IS 4985)">PVC Rigid Pipes (IS 4985)</option>
                    <option value="Electrofusion & Butt Fusion Fittings">Butt Fusion & Stub Flange Fittings</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Diameter */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                      {lang === 'HI' ? 'व्यास (Outer Dia)' : 'Outer Dia (OD)'}
                    </label>
                    <select
                      name="diameter"
                      value={formData.diameter}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-xs font-semibold focus:ring-2 focus:ring-brand-blue outline-none"
                    >
                      <option value="20mm OD">20 mm</option>
                      <option value="63mm OD">63 mm</option>
                      <option value="90mm OD">90 mm</option>
                      <option value="110mm OD">110 mm</option>
                      <option value="160mm OD">160 mm</option>
                      <option value="200mm OD">200 mm</option>
                      <option value="315mm OD">315 mm</option>
                      <option value="400mm OD">400 mm</option>
                      <option value="630mm OD">630 mm</option>
                      <option value="1200mm OD">1200 mm (Custom)</option>
                    </select>
                  </div>

                  {/* Pressure Rating */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                      {lang === 'HI' ? 'दबाव श्रेणी (PN/SDR)' : 'Rating (PN / SDR)'}
                    </label>
                    <select
                      name="pressure"
                      value={formData.pressure}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-xs font-semibold focus:ring-2 focus:ring-brand-blue outline-none"
                    >
                      <option value="PN 6 / SDR 26">PN 6 (SDR 26)</option>
                      <option value="PN 8 / SDR 21">PN 8 (SDR 21)</option>
                      <option value="PN 10 / SDR 17">PN 10 (SDR 17)</option>
                      <option value="PN 12.5 / SDR 13.6">PN 12.5 (SDR 13.6)</option>
                      <option value="PN 16 / SDR 11">PN 16 (SDR 11)</option>
                    </select>
                  </div>

                  {/* Quantity */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                      {lang === 'HI' ? 'मात्रा (Meters/Coils)' : 'Required Quantity'}
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="e.g. 1000 Meters"
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-xs font-semibold focus:ring-2 focus:ring-brand-blue outline-none"
                    />
                  </div>
                </div>

                {/* Delivery Location */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                    {lang === 'HI' ? 'डिलिवरी शहर / राज्य' : 'Delivery Destination (City / State)'}
                  </label>
                  <input
                    type="text"
                    name="deliveryLocation"
                    value={formData.deliveryLocation}
                    onChange={handleChange}
                    placeholder={lang === 'HI' ? 'उदा. जयपुर, राजस्थान' : 'e.g. Jaipur, Rajasthan / PAN India'}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-blue outline-none"
                  />
                </div>

                {/* Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-darkblue text-white font-bold py-3 px-6 rounded-xl text-sm shadow-lg shadow-brand-blue/20 transition-all cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? (lang === 'HI' ? 'भेजा जा रहा है...' : 'Submitting RFQ...') : (lang === 'HI' ? 'कोटेशन फॉर्म भेजें' : 'Submit Commercial RFQ')}</span>
                  </button>

                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold py-3 px-6 rounded-xl text-sm shadow-md transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4.5 h-4.5 fill-white text-[#25D366]" />
                    <span>WhatsApp RFQ</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
