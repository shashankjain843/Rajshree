import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageCircle, Store } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Contact() {
  const [activeFormTab, setActiveFormTab] = useState('quote');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: 'hdpe',
    message: '',
  });

  const [warrantyData, setWarrantyData] = useState({
    name: '',
    email: '',
    phone: '',
    invoiceNum: '',
    purchaseDate: '',
    product: 'hdpe',
    invoiceFile: null
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone.trim())) {
      errors.phone = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  const validateWarranty = () => {
    const errors = {};
    if (!warrantyData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!warrantyData.phone.trim()) {
      errors.phone = 'Phone number is required';
    }
    if (!warrantyData.email.trim()) {
      errors.email = 'Email is required';
    }
    if (!warrantyData.invoiceNum.trim()) {
      errors.invoiceNum = 'Invoice number is required';
    }
    if (!warrantyData.purchaseDate.trim()) {
      errors.purchaseDate = 'Purchase date is required';
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = activeFormTab === 'quote' ? validate() : validateWarranty();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setSubmitError(null);
    setIsSubmitting(true);

    const payload = activeFormTab === 'quote' ? {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      product: formData.product,
      _subject: `RAJSHREE GROUP - Commercial Inquiry: ${formData.product.toUpperCase()}`,
      subject: `RAJSHREE GROUP - Commercial Inquiry: ${formData.product.toUpperCase()}`,
      message: `====================================\n           RAJSHREE GROUP\n   Official Commercial Inquiry\n====================================\n\nClient Details:\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Email: ${formData.email}\n• Product: ${formData.product}\n\nMessage / Requirements:\n${formData.message}\n====================================`
    } : {
      name: warrantyData.name,
      email: warrantyData.email,
      phone: warrantyData.phone,
      product: warrantyData.product,
      _subject: `RAJSHREE GROUP - Warranty Registration`,
      subject: `RAJSHREE GROUP - Warranty Registration`,
      message: `====================================\n           RAJSHREE GROUP\n   Product Warranty Registration\n====================================\n\nCustomer Details:\n• Name: ${warrantyData.name}\n• Phone: ${warrantyData.phone}\n• Email: ${warrantyData.email}\n• Product: ${warrantyData.product}\n\nInvoice Details:\n• Invoice Number: ${warrantyData.invoiceNum}\n• Purchase Date: ${warrantyData.purchaseDate}\n====================================`
    };

    // 1. Direct Email Delivery via FormSubmit AJAX service to realshashankjain@gmail.com
    try {
      await fetch('https://formsubmit.co/ajax/realshashankjain@gmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      console.warn('FormSubmit contact error:', err);
    }

    // 2. Secondary local server API
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      console.warn('Local API error:', err);
    }

    // 3. Automatically open WhatsApp chat with details
    const text = `*RAJSHREE GROUP - ${activeFormTab === 'quote' ? 'Commercial Inquiry' : 'Warranty Registration'}*\n\n• *Name:* ${payload.name}\n• *Phone:* ${payload.phone}\n• *Email:* ${payload.email}\n• *Product:* ${payload.product}`;
    window.open(`https://wa.me/919829050790?text=${encodeURIComponent(text)}`, '_blank');

    setIsSubmitted(true);
    setIsSubmitting(false);
      
    if (activeFormTab === 'quote') {
      setFormData({
        name: '',
        email: '',
        phone: '',
        product: 'hdpe',
        message: '',
      });
    } else {
      setWarrantyData({
        name: '',
        email: '',
        phone: '',
        invoiceNum: '',
        purchaseDate: '',
        product: 'hdpe',
        invoiceFile: null
      });
    }
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    if (activeFormTab === 'quote') {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    } else {
      setWarrantyData({
        ...warrantyData,
        [e.target.name]: e.target.value,
      });
    }
    if (formErrors[e.target.name]) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: null,
      });
    }
  };

  const whatsappNumber = '919829050790';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%20Rajshree%2520Technoplast,%2520I%2520am%2520interested%2520in%252520your%252520pipes.`;

  return (
    <section id="contact" className="py-10 sm:py-16 bg-slate-50 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-xs sm:text-base text-blue-700 font-bold tracking-wide uppercase">Contact Us</h2>
          <p className="mt-1.5 sm:mt-2 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Connect with Rajshree Sales &amp; Plant Units
          </p>
          <div className="mt-3 sm:mt-4 h-1.5 w-20 sm:w-24 bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 mx-auto rounded-full"></div>
          <p className="mt-3 sm:mt-4 text-slate-500 font-light text-xs sm:text-base">
            For dealer pricing, custom flanged layouts, or government project tenders, submit the form below. Our response team will revert within 24 business hours.
          </p>
        </div>

        {/* Split Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          
          {/* Left Column: Form (7cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white p-5 sm:p-10 rounded-3xl border border-slate-200 shadow-xl relative"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center space-y-4"
              >
                <div className="p-4 bg-green-100 rounded-full text-green-600">
                  <CheckCircle2 className="w-16 h-16 animate-bounce" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-800">Inquiry Sent Successfully!</h3>
                <p className="text-slate-500 font-light max-w-sm">
                  Thank you for reaching out. A Rajshree Group representative will review your requirements and call you back shortly.
                </p>
              </motion.div>
            ) : (
              <div className="space-y-6">
                {/* Form Tabs */}
                <div className="flex bg-slate-50 p-1.5 rounded-2xl border border-slate-200">
                  <button
                    type="button"
                    onClick={() => { setActiveFormTab('quote'); setFormErrors({}); setSubmitError(null); }}
                    className={`flex-1 text-center py-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                      activeFormTab === 'quote'
                        ? 'bg-gradient-to-r from-blue-600 via-blue-700 to-sky-600 text-white shadow-md'
                        : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    Request Quote
                  </button>
                  <button
                    type="button"
                    onClick={() => { setActiveFormTab('warranty'); setFormErrors({}); setSubmitError(null); }}
                    className={`flex-1 text-center py-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                      activeFormTab === 'warranty'
                        ? 'bg-gradient-to-r from-blue-600 via-blue-700 to-sky-600 text-white shadow-md'
                        : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    Warranty Registration
                  </button>
                </div>

                {activeFormTab === 'quote' ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="text-left">
                        <label className="text-sm font-bold text-slate-700 block mb-2">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className={`w-full px-4 py-3 rounded-xl border font-light text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all ${
                            formErrors.name ? 'border-red-500 bg-red-50' : 'border-slate-200'
                          }`}
                        />
                        {formErrors.name && (
                          <span className="text-xs text-red-500 font-semibold mt-1 block">{formErrors.name}</span>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="text-left">
                        <label className="text-sm font-bold text-slate-700 block mb-2">Contact Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter contact number"
                          className={`w-full px-4 py-3 rounded-xl border font-light text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all ${
                            formErrors.phone ? 'border-red-500 bg-red-50' : 'border-slate-200'
                          }`}
                        />
                        {formErrors.phone && (
                          <span className="text-xs text-red-500 font-semibold mt-1 block">{formErrors.phone}</span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Email */}
                      <div className="text-left">
                        <label className="text-sm font-bold text-slate-700 block mb-2">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter email address"
                          className={`w-full px-4 py-3 rounded-xl border font-light text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all ${
                            formErrors.email ? 'border-red-500 bg-red-50' : 'border-slate-200'
                          }`}
                        />
                        {formErrors.email && (
                          <span className="text-xs text-red-500 font-semibold mt-1 block">{formErrors.email}</span>
                        )}
                      </div>

                      {/* Product Interest */}
                      <div className="text-left">
                        <label className="text-sm font-bold text-slate-700 block mb-2">Product Category</label>
                        <select
                          name="product"
                          value={formData.product}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 font-light text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
                        >
                          <option value="hdpe">HDPE Pipes</option>
                          <option value="pvc">PVC Pipes</option>
                          <option value="hdpe-coil">HDPE Coil Pipes</option>
                          <option value="mdpe">MDPE Pipes</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="text-left">
                      <label className="text-sm font-bold text-slate-700 block mb-2">Message / Specifications &amp; Quantity</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Enter pipe sizes, pressure ratings, total quantity, and project location..."
                        className={`w-full px-4 py-3 rounded-xl border font-light text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all ${
                          formErrors.message ? 'border-red-500 bg-red-50' : 'border-slate-200'
                        }`}
                      ></textarea>
                      {formErrors.message && (
                        <span className="text-xs text-red-500 font-semibold mt-1 block">{formErrors.message}</span>
                      )}
                    </div>

                    {submitError && (
                      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-xl text-left">
                        <p className="text-sm text-red-700 font-medium">{submitError}</p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-blue-700 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-blue-600/30 transition-all duration-300 disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Sending Inquiry...</span>
                      ) : (
                        <>
                          <span>Send Inquiry Message</span>
                          <Send className="w-4.5 h-4.5" />
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="text-left">
                        <label className="text-sm font-bold text-slate-700 block mb-2">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={warrantyData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className={`w-full px-4 py-3 rounded-xl border font-light text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all ${
                            formErrors.name ? 'border-red-500 bg-red-50' : 'border-slate-200'
                          }`}
                        />
                        {formErrors.name && (
                          <span className="text-xs text-red-500 font-semibold mt-1 block">{formErrors.name}</span>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="text-left">
                        <label className="text-sm font-bold text-slate-700 block mb-2">Contact Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={warrantyData.phone}
                          onChange={handleChange}
                          placeholder="Enter contact number"
                          className={`w-full px-4 py-3 rounded-xl border font-light text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all ${
                            formErrors.phone ? 'border-red-500 bg-red-50' : 'border-slate-200'
                          }`}
                        />
                        {formErrors.phone && (
                          <span className="text-xs text-red-500 font-semibold mt-1 block">{formErrors.phone}</span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Email */}
                      <div className="text-left">
                        <label className="text-sm font-bold text-slate-700 block mb-2">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={warrantyData.email}
                          onChange={handleChange}
                          placeholder="Enter email address"
                          className={`w-full px-4 py-3 rounded-xl border font-light text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all ${
                            formErrors.email ? 'border-red-500 bg-red-50' : 'border-slate-200'
                          }`}
                        />
                        {formErrors.email && (
                          <span className="text-xs text-red-500 font-semibold mt-1 block">{formErrors.email}</span>
                        )}
                      </div>

                      {/* Category */}
                      <div className="text-left">
                        <label className="text-sm font-bold text-slate-700 block mb-2">Product Category Purchased</label>
                        <select
                          name="product"
                          value={warrantyData.product}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 font-light text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
                        >
                          <option value="hdpe">HDPE Pipes</option>
                          <option value="pvc">PVC Pipes</option>
                          <option value="mdpe">MDPE Pipes</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Invoice Number */}
                      <div className="text-left">
                        <label className="text-sm font-bold text-slate-700 block mb-2">Invoice Number</label>
                        <input
                          type="text"
                          name="invoiceNum"
                          value={warrantyData.invoiceNum}
                          onChange={handleChange}
                          placeholder="Enter invoice number"
                          className={`w-full px-4 py-3 rounded-xl border font-light text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all ${
                            formErrors.invoiceNum ? 'border-red-500 bg-red-50' : 'border-slate-200'
                          }`}
                        />
                        {formErrors.invoiceNum && (
                          <span className="text-xs text-red-500 font-semibold mt-1 block">{formErrors.invoiceNum}</span>
                        )}
                      </div>

                      {/* Purchase Date */}
                      <div className="text-left">
                        <label className="text-sm font-bold text-slate-700 block mb-2">Purchase Date</label>
                        <input
                          type="date"
                          name="purchaseDate"
                          value={warrantyData.purchaseDate}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl border font-light text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all ${
                            formErrors.purchaseDate ? 'border-red-500 bg-red-50' : 'border-slate-200'
                          }`}
                        />
                        {formErrors.purchaseDate && (
                          <span className="text-xs text-red-500 font-semibold mt-1 block">{formErrors.purchaseDate}</span>
                        )}
                      </div>
                    </div>

                    {/* Invoice Upload Mockup */}
                    <div className="text-left">
                      <label className="text-sm font-bold text-slate-700 block mb-2">Invoice File Attachment (Mockup)</label>
                      <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center cursor-pointer hover:border-blue-500 hover:bg-slate-50 transition-colors">
                        <Send className="w-8 h-8 text-slate-400 mx-auto mb-2 rotate-90" />
                        <span className="text-xs font-bold text-slate-500 block">
                          Attach invoice PDF or PNG receipt
                        </span>
                        <span className="text-[10px] text-slate-400 font-light mt-1 block">
                          (Max file size 5MB)
                        </span>
                      </div>
                    </div>

                    {submitError && (
                      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-xl text-left">
                        <p className="text-sm text-red-700 font-medium">{submitError}</p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-blue-600/20 transition-all duration-300 disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Sending Inquiry...</span>
                      ) : (
                        <>
                          <span>Submit Warranty Registration</span>
                          <Send className="w-4.5 h-4.5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            )}
          </motion.div>

          {/* Right Column: Contact Details & Map (5cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Info Cards */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl text-left space-y-6 transition-colors duration-300">
              <h3 className="text-xl font-extrabold text-slate-800 tracking-tight pb-3 border-b border-slate-100">
                Contact Directory
              </h3>

              {/* Office Address */}
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-slate-700">{siteConfig.contact.corporateOffice.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-light mt-1 leading-relaxed">
                    {siteConfig.contact.corporateOffice.address}
                  </p>
                  <div className="mt-2 inline-flex items-center gap-2 px-2.5 py-1 bg-slate-100 text-slate-700 text-[10px] font-bold rounded-lg border border-slate-200">
                    <span>GSTIN: {siteConfig.company.gstin}</span>
                    <span>•</span>
                    <span>{siteConfig.company.msmeRegistration}</span>
                  </div>
                </div>
              </div>

              {/* Factory Addresses */}
              <div className="flex gap-4 border-t border-slate-100 pt-4">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                <div>
                  {siteConfig.contact.factoryUnits.map((unit, idx) => (
                    <div key={idx} className={idx > 0 ? 'mt-3' : ''}>
                      <h4 className="text-sm font-bold text-slate-700">{unit.name}</h4>
                      <p className="text-xs sm:text-sm text-slate-500 font-light mt-1 leading-relaxed">
                        {unit.address}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emails & Phones */}
              <div className="flex gap-4 border-t border-slate-100 pt-4">
                <div className="flex flex-col gap-4 text-slate-700 w-full">
                  <div className="flex gap-4 items-center">
                    <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-700">Email Address</h4>
                      <a href={`mailto:${siteConfig.contact.primaryEmail}`} className="text-xs sm:text-sm text-blue-600 hover:underline font-light">
                        {siteConfig.contact.primaryEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <Phone className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-700">Phone Numbers</h4>
                      <div className="flex flex-col text-xs sm:text-sm font-light text-slate-500 space-y-1 mt-1">
                        {siteConfig.contact.phoneNumbers.map((ph, idx) => (
                          <a key={idx} href={`tel:${ph.number}`} className="hover:text-blue-600 transition-colors">
                            {ph.number} ({ph.label})
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-md hover:shadow-lg w-full"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
