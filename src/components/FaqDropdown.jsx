import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, HelpCircle } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

export default function FaqDropdown({ isOpen, onClose }) {
  const { lang, t } = useTranslation();
  const dropdownRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'system',
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
            sender: 'system',
            text: t('botGreeting'),
            time: prev[0].time
          }
        ];
      }
      return prev;
    });
  }, [lang, t]);

  // Click outside listener to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

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
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: faq.q,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const answerMsg = {
        id: Date.now() + 1,
        sender: 'system',
        text: faqAnswers[faq.id],
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, answerMsg]);
    }, 800);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        ref={dropdownRef}
        initial={{ opacity: 0, scale: 0.95, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -10 }}
        className="absolute top-16 right-4 sm:right-16 z-50 bg-white border border-slate-200 rounded-2xl shadow-2xl w-80 sm:w-96 overflow-hidden flex flex-col my-2 text-left"
      >
        {/* Header - Simple Help & FAQs Panel */}
        <div className="bg-slate-900 px-4 py-3.5 text-white flex justify-between items-center border-b border-slate-800">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-500" />
            <div>
              <p className="text-xs font-extrabold uppercase tracking-wider">
                {lang === 'HI' ? 'अक्सर पूछे जाने वाले प्रश्न' : 'Help & Frequently Asked Questions'}
              </p>
              <p className="text-[10px] text-slate-400 font-medium">Rajshree Technical Knowledge Base</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4.5 h-4.5" />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="p-4 overflow-y-auto min-h-[220px] max-h-[300px] bg-slate-50 space-y-3">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[82%] p-3 rounded-xl text-xs text-left shadow-xs ${
                  msg.sender === 'user'
                    ? 'bg-blue-700 text-white rounded-tr-none font-medium'
                    : 'bg-white text-slate-800 rounded-tl-none border border-slate-200 font-light'
                }`}
              >
                <p className="leading-relaxed">{msg.text}</p>
                <span className="block text-[9px] text-right mt-1 opacity-60 font-mono">
                  {msg.time}
                </span>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-2 justify-start">
              <div className="bg-white p-3 rounded-xl rounded-tl-none border border-slate-200 flex gap-1 items-center">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* FAQ Quick Buttons */}
        <div className="p-3 border-t border-slate-200 bg-white space-y-2">
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
            {t('botFaqsLabel')}
          </div>
          <div className="flex flex-col gap-1.5">
            {faqTriggers.map((faq) => (
              <button
                key={faq.id}
                onClick={() => handleQuestionClick(faq)}
                disabled={isTyping}
                className="w-full text-left p-2 rounded-lg border border-slate-200 hover:border-blue-400 hover:bg-blue-50 text-xs text-slate-700 font-medium transition-colors cursor-pointer disabled:opacity-50"
              >
                {faq.q}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
