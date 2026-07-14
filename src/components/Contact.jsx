import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

export default function Contact() {
  const { lang, t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: 'hdpe',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = lang === 'HI' ? 'नाम लिखना आवश्यक है' : 'Name is required';
    }
    
    if (!formData.phone.trim()) {
      errors.phone = lang === 'HI' ? 'फ़ोन नंबर लिखना आवश्यक है' : 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone.trim())) {
      errors.phone = lang === 'HI' ? 'कृपया एक वैध फ़ोन नंबर दर्ज करें' : 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      errors.email = lang === 'HI' ? 'ईमेल लिखना आवश्यक है' : 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = lang === 'HI' ? 'कृपया एक वैध ईमेल पता दर्ज करें' : 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      errors.message = lang === 'HI' ? 'आवश्यकता विवरण लिखना आवश्यक है' : 'Message is required';
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setSubmitError(null);
    setIsSubmitting(true);

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      product: formData.product,
      message: formData.message
    };

    console.log("[SMTP Submit Payload]:", payload);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });
      
      const result = await response.json();
      console.log("[SMTP Response]:", result);

      if (result.success) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          product: 'hdpe',
          message: '',
        });
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setSubmitError(result.message || "Failed to submit inquiry. Please verify your SMTP credentials.");
      }
    } catch (err) {
      console.error("[SMTP Error]:", err);
      setSubmitError("A network error occurred. Please check if the server is running.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (formErrors[e.target.name]) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: null,
      });
    }
  };

  const whatsappNumber = '919829050790';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%20Rajshree%20Technoplast,%20I%20am%20interested%20in%20your%20pipes.`;

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-brand-blue dark:text-brand-lightblue font-bold tracking-wide uppercase">{t('conTitle')}</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('conSubtitle')}
          </p>
          <div className="mt-4 h-1.5 w-24 bg-brand-orange mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-500 dark:text-slate-400 font-light text-sm sm:text-base">
            {t('conDesc')}
          </p>
        </div>

        {/* Split Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form (7cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl relative"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center space-y-4"
              >
                <div className="p-4 bg-green-100 dark:bg-green-950/40 rounded-full text-green-600 dark:text-green-400">
                  <CheckCircle2 className="w-16 h-16 animate-bounce" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-800 dark:text-white">{t('btnSent')}</h3>
                <p className="text-slate-500 dark:text-slate-400 font-light max-w-sm">
                  {lang === 'HI'
                    ? 'हमसे संपर्क करने के लिए धन्यवाद। राजश्री ग्रुप के प्रतिनिधि जल्द ही आपसे संपर्क करेंगे।'
                    : 'Thank you for reaching out. A Rajshree Group representative will review your requirements and call you back shortly.'}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="text-left">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 block mb-2">{t('formName')}</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={lang === 'HI' ? 'उदा. शशांक जैन' : 'e.g. Shashank Jain'}
                      className={`w-full px-4 py-3 rounded-xl border font-light text-slate-700 dark:text-slate-200 dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all ${
                        formErrors.name ? 'border-red-500 bg-red-50 dark:bg-red-950/20' : 'border-slate-200 dark:border-slate-800'
                      }`}
                    />
                    {formErrors.name && (
                      <span className="text-xs text-red-500 font-semibold mt-1 block">{formErrors.name}</span>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="text-left">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 block mb-2">{t('formPhone')}</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={lang === 'HI' ? 'उदा. +91 98290 50790' : 'e.g. +91 98290 50790'}
                      className={`w-full px-4 py-3 rounded-xl border font-light text-slate-700 dark:text-slate-200 dark:bg-slate-955 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all ${
                        formErrors.phone ? 'border-red-500 bg-red-50 dark:bg-red-950/20' : 'border-slate-200 dark:border-slate-800'
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
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 block mb-2">{t('formEmail')}</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. client@website.com"
                      className={`w-full px-4 py-3 rounded-xl border font-light text-slate-700 dark:text-slate-200 dark:bg-slate-955 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all ${
                        formErrors.email ? 'border-red-500 bg-red-50 dark:bg-red-950/20' : 'border-slate-200 dark:border-slate-800'
                      }`}
                    />
                    {formErrors.email && (
                      <span className="text-xs text-red-500 font-semibold mt-1 block">{formErrors.email}</span>
                    )}
                  </div>

                  {/* Product Interest */}
                  <div className="text-left">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 block mb-2">{lang === 'HI' ? 'उत्पाद श्रेणी' : 'Product Category'}</label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 dark:bg-slate-955 font-light text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                    >
                      <option value="hdpe">{lang === 'HI' ? 'एचडीपीई पाइप्स' : 'HDPE Pipes'}</option>
                      <option value="pvc">{lang === 'HI' ? 'पीवीसी पाइप्स' : 'PVC Pipes'}</option>
                      <option value="hdpe-coil">{lang === 'HI' ? 'एचडीपीई कॉइल पाइप्स' : 'HDPE Coil Pipes'}</option>
                      <option value="mdpe">{lang === 'HI' ? 'एमडीपीई पाइप्स' : 'MDPE Pipes'}</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="text-left">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 block mb-2">{t('formMsg')}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder={lang === 'HI' ? 'पाइप का आकार, दबाव क्षमता और कुल मात्रा दर्ज करें...' : 'Enter pipe sizes, pressure ratings, total quantity, and project location...'}
                    className={`w-full px-4 py-3 rounded-xl border font-light text-slate-700 dark:text-slate-202 dark:bg-slate-955 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all ${
                      formErrors.message ? 'border-red-500 bg-red-55 dark:bg-red-955/20' : 'border-slate-200 dark:border-slate-800'
                    }`}
                  ></textarea>
                  {formErrors.message && (
                    <span className="text-xs text-red-500 font-semibold mt-1 block">{formErrors.message}</span>
                  )}
                </div>

                {submitError && (
                  <div className="bg-red-50 dark:bg-red-955/20 border-l-4 border-red-500 p-4 rounded-xl text-left">
                    <p className="text-sm text-red-700 dark:text-red-400 font-medium">{submitError}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-darkblue text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-brand-blue/20 transition-all duration-300 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>{t('btnSending')}</span>
                  ) : (
                    <>
                      <span>{t('btnSendMsg')}</span>
                      <Send className="w-4.5 h-4.5" />
                    </>
                  )}
                </button>
              </form>
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
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl text-left space-y-6 transition-colors duration-300">
              <h3 className="text-xl font-extrabold text-slate-800 dark:text-white tracking-tight pb-3 border-b border-slate-100 dark:border-slate-800">
                {lang === 'HI' ? 'संपर्क डायरेक्टरी' : 'Contact Directory'}
              </h3>

              {/* Office Address */}
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300">{lang === 'HI' ? 'कॉर्पोरेट कार्यालय' : 'Corporate Office'}</h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light mt-1 leading-relaxed">
                    Plot No.51 Maliram Kheradi Marg, Hanuman Vatika-I, Near 200FT Chauraha, Ajmer Road, Jaipur-302021
                  </p>
                </div>
              </div>

              {/* Factory Addresses */}
              <div className="flex gap-4 border-t border-slate-100 dark:border-slate-800 pt-4">
                <MapPin className="w-5 h-5 text-brand-blue shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300">{lang === 'HI' ? 'फैक्ट्री इकाई I' : 'Factory Unit I'}</h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light mt-1 leading-relaxed">
                    C-151, RIICO Industrial Area, Bagru Extn, Bagru, Jaipur-303007
                  </p>
                  
                  <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 mt-3">{lang === 'HI' ? 'फैक्ट्री इकाई II' : 'Factory Unit II'}</h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light mt-1 leading-relaxed">
                    146, 147, 155 &amp; 156, Ratan Industrial Area, Harsuliya, Phagi, Jaipur-303904
                  </p>
                </div>
              </div>

              {/* Emails & Phones */}
              <div className="flex gap-4 border-t border-slate-100 dark:border-slate-800 pt-4">
                <div className="flex flex-col gap-4 text-slate-700 w-full">
                  <div className="flex gap-4 items-center">
                    <Mail className="w-5 h-5 text-brand-orange shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300">{t('conEmail')}</h4>
                      <a href="mailto:rajshreearun123@gmail.com" className="text-xs sm:text-sm text-brand-blue dark:text-brand-lightblue hover:underline font-light">
                        rajshreearun123@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <Phone className="w-5 h-5 text-brand-blue shrink-0 mt-1" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300">{lang === 'HI' ? 'फ़ोन नंबर' : 'Phone Numbers'}</h4>
                      <div className="flex flex-col text-xs sm:text-sm font-light text-slate-500 dark:text-slate-400 space-y-1 mt-1">
                        <a href="tel:+919829050790" className="hover:text-brand-blue transition-colors">+91-9829050790 (Direct)</a>
                        <a href="tel:+919829054690" className="hover:text-brand-blue transition-colors">+91-9829054690</a>
                        <a href="tel:+919460004801" className="hover:text-brand-blue transition-colors">+91-9460004801</a>
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
                  <span>{lang === 'HI' ? 'व्हाट्सएप पर चैट करें' : 'Chat on WhatsApp'}</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-2">
              <iframe
                title="Rajshree Technoplast Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.33230691515!2d75.6967732297831!3d26.848596645391307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c5e2d637c358f%3A0xe54e6035f8d6896e!2sAjmer%20Road%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: '1.25rem' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
