import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, FileText, CheckCircle2, MessageCircle } from 'lucide-react';

export default function RFQModal({ isOpen, onClose, defaultProduct = '' }) {
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

    const emailMessage = `====================================
           RAJSHREE GROUP
  Commercial Pipe Quote Request
====================================

Client Details:
• Name: ${formData.name}
• Phone: ${formData.phone}
• Email: ${formData.email}
• Company: ${formData.company || 'Direct Buyer'}

Product Specifications:
• Product: ${formData.product}
• Size (OD): ${formData.diameter}
• Rating: ${formData.pressure}
• Quantity: ${formData.quantity}
• Delivery Location: ${formData.deliveryLocation || 'Jaipur Plant / PAN India'}

Notes:
${formData.notes || 'Standard dispatch requested.'}
====================================`;

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          subject: `RAJSHREE GROUP Quote Inquiry: ${formData.product}`,
          message: emailMessage
        })
      });
    } catch (err) {
      console.warn('Backend API submission skipped or failed, fallback to instant trigger:', err);
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const generateWhatsAppUrl = () => {
    const text = `*RAJSHREE GROUP - Pipe Quote Request*\n\n• *Name:* ${formData.name}\n• *Phone:* ${formData.phone}\n• *Product:* ${formData.product}\n• *Size:* ${formData.diameter}\n• *Pressure:* ${formData.pressure}\n• *Quantity:* ${formData.quantity}\n• *Location:* ${formData.deliveryLocation || 'PAN India'}`;
    return `https://wa.me/919829050790?text=${encodeURIComponent(text)}`;
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full border border-slate-200 overflow-hidden my-8"
        >
          {/* Header */}
          <div className="bg-slate-900 text-white p-6 relative flex justify-between items-center border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-500/20 text-blue-400 rounded-2xl border border-blue-400/30">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-500 text-white font-extrabold text-[10px] uppercase tracking-wider mb-1">
                  B2B Commercial RFQ
                </span>
                <h3 className="text-xl font-extrabold tracking-tight">
                  Request Wholesale Quote
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
              <div className="text-center py-6 space-y-5">
                <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-900">
                    Quote Request Received!
                  </h4>
                  <p className="text-slate-500 text-sm mt-1 max-w-md mx-auto">
                    Your structured RFQ has been logged. Our Jaipur sales desk will send your Proforma Invoice shortly.
                  </p>
                </div>

                {/* Short Structured Email Template Summary Box */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left max-w-md mx-auto text-xs space-y-1.5 text-slate-700">
                  <div className="text-center font-extrabold text-blue-700 text-xs tracking-wider border-b border-slate-200 pb-2 mb-2">
                    RAJSHREE GROUP • INQUIRY SUMMARY
                  </div>
                  <p>• <strong className="text-slate-900">Client:</strong> {formData.name} ({formData.phone})</p>
                  <p>• <strong className="text-slate-900">Product:</strong> {formData.product}</p>
                  <p>• <strong className="text-slate-900">Size &amp; Pressure:</strong> {formData.diameter} | {formData.pressure}</p>
                  <p>• <strong className="text-slate-900">Quantity:</strong> {formData.quantity}</p>
                  <p>• <strong className="text-slate-900">Location:</strong> {formData.deliveryLocation || 'PAN India'}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold py-3 px-6 rounded-xl text-sm shadow-lg transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                    <span>Get Instant Price on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      onClose();
                    }}
                    className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-3 px-6 rounded-xl text-sm transition-all cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rajesh Sharma"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98290XXXXX"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Company */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Company / Firm Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Sharma Infra Ltd"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="info@yourcompany.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                </div>

                {/* Product Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Product Category *
                  </label>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <option value="HDPE Water Pipes (IS 4984)">HDPE Water Pipes (IS 4984:2018)</option>
                    <option value="HDPE Sewerage Pipes (IS 14333)">HDPE Sewerage &amp; Drainage Pipes (IS 14333)</option>
                    <option value="HDPE Sprinkler Pipes &amp; Fittings (IS 14151)">HDPE Sprinkler Systems (IS 14151)</option>
                    <option value="MDPE Gas &amp; Water Service Lines">MDPE Service Line Tubing</option>
                    <option value="PVC Agriculture &amp; Sewer Pipes (IS 4985)">PVC Rigid Pipes (IS 4985)</option>
                    <option value="Electrofusion &amp; Butt Fusion Fittings">Butt Fusion &amp; Stub Flange Fittings</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Diameter */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Outer Dia (OD)
                    </label>
                    <select
                      name="diameter"
                      value={formData.diameter}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-xs font-semibold focus:ring-2 focus:ring-blue-500 outline-none"
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
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Rating (PN / SDR)
                    </label>
                    <select
                      name="pressure"
                      value={formData.pressure}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-xs font-semibold focus:ring-2 focus:ring-blue-500 outline-none"
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
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Required Quantity
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="e.g. 1000 Meters"
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-xs font-semibold focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                </div>

                {/* Delivery Location */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Delivery Destination (City / State)
                  </label>
                  <input
                    type="text"
                    name="deliveryLocation"
                    value={formData.deliveryLocation}
                    onChange={handleChange}
                    placeholder="e.g. Jaipur, Rajasthan / PAN India"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                {/* Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-blue-700 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white font-bold py-3 px-6 rounded-xl text-sm shadow-lg shadow-blue-600/30 transition-all cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Submitting RFQ...' : 'Submit Commercial RFQ'}</span>
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
