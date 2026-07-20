import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, User, Bot, HelpCircle } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

export default function Chatbot() {
  const { lang, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: t('botGreeting'),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Sync initial message on language changes
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1) {
        return [
          {
            id: 1,
            sender: 'bot',
            text: t('botGreeting'),
            time: prev[0].time
          }
        ];
      }
      return prev;
    });
  }, [lang, t]);

  const faqTriggers = [
    { q: t('botSizesQ'), id: 'sizes' },
    { q: t('botCertsQ'), id: 'certs' },
    { q: t('botLocQ'), id: 'location' },
    { q: t('botPriceQ'), id: 'price' }
  ];

  const faqAnswers = {
    sizes: t('botSizesA'),
    certs: t('botCertsA'),
    location: t('botLocA'),
    price: t('botPriceA')
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleQuestionClick = (faq) => {
    // Add user message
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: faq.q,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      setIsTyping(false);
      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: faqAnswers[faq.id],
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-45">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white dark:bg-slate-900 border border-slate-205 dark:border-slate-800 rounded-3xl shadow-2xl w-80 sm:w-96 max-h-[500px] overflow-hidden flex flex-col mb-4"
          >
            {/* Header */}
            <div className="bg-brand-blue dark:bg-slate-950 p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-white/10 rounded-full text-white">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-extrabold tracking-tight">{t('botAssistant')}</p>
                  <p className="text-[10px] text-brand-lightblue font-medium">{t('botOnline')}</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto min-h-[250px] max-h-[320px] bg-slate-50 dark:bg-slate-950 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'bot' && (
                    <div className="p-1.5 bg-brand-blue/10 dark:bg-slate-900 text-brand-blue dark:text-brand-lightblue rounded-full h-fit mt-1">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] p-3 rounded-2xl text-xs sm:text-sm text-left shadow-sm ${
                      msg.sender === 'user'
                        ? 'bg-brand-blue text-white rounded-tr-none'
                        : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 rounded-tl-none border border-slate-100 dark:border-slate-808'
                    }`}
                  >
                    <p className="leading-relaxed">{msg.text}</p>
                    <span className="block text-[9px] text-right mt-1.5 opacity-60">
                      {msg.time}
                    </span>
                  </div>
                  {msg.sender === 'user' && (
                    <div className="p-1.5 bg-brand-orange/10 text-brand-orange rounded-full h-fit mt-1">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2.5 justify-start">
                  <div className="p-1.5 bg-brand-blue/10 dark:bg-slate-900 text-brand-blue dark:text-brand-lightblue rounded-full h-fit mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-3 rounded-2xl rounded-tl-none border border-slate-100 dark:border-slate-808 flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested FAQ Triggers */}
            <div className="p-4 border-t border-slate-150 dark:border-slate-850 bg-white dark:bg-slate-900 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 dark:text-slate-500 mb-1.5 text-left">
                <HelpCircle className="w-4.5 h-4.5" />
                <span>{t('botFaqsLabel')}</span>
              </div>
              <div className="flex flex-col gap-1.5">
                {faqTriggers.map((faq) => (
                  <button
                    key={faq.id}
                    onClick={() => handleQuestionClick(faq)}
                    disabled={isTyping}
                    className="w-full text-left p-2.5 rounded-xl border border-slate-150 dark:border-slate-800 hover:border-brand-blue/30 dark:hover:border-brand-blue/30 hover:bg-brand-blue/5 dark:hover:bg-brand-blue/5 text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 font-medium transition-all duration-200 cursor-pointer disabled:opacity-50"
                  >
                    {faq.q}
                  </button>
                ))}
              </div>

              {/* Direct WhatsApp Action */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                <a
                  href="https://wa.me/919829050790?text=Hello%20Rajshree%20Technoplast,%20I%20have%20a%20commercial%20query."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold py-2 px-3 rounded-xl text-xs shadow transition-all cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-white text-[#25D366]" />
                  <span>{lang === 'HI' ? 'व्हाट्सएप पर प्रतिनिधि से बात करें' : 'Talk to Agent on WhatsApp'}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-brand-blue hover:bg-brand-darkblue text-white p-4 rounded-full shadow-2xl flex items-center justify-center cursor-pointer border border-brand-blue/20"
        title="FAQ Chatbot"
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>
    </div>
  );
}
