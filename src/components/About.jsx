import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Factory, Calendar, CheckCircle, Trophy, Medal } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

function AnimatedCounter({ value, duration = 1500 }) {
  const [count, setCount] = useState(0);
  const [hasRun, setHasRun] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun) {
          setHasRun(true);
          let startTimestamp = null;
          const numberValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
          
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * numberValue));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(numberValue);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [value, duration, hasRun]);

  const suffix = value.replace(/[0-9,]/g, '');
  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  return (
    <span ref={elementRef}>
      {formatNumber(count)}{suffix}
    </span>
  );
}

export default function About() {
  const { lang, t } = useTranslation();

  const stats = [
    { 
      icon: <Calendar className="w-6 h-6 text-brand-orange" />, 
      label: t('statYears'), 
      value: lang === 'HI' ? '15+ वर्ष' : '15+ Years', 
      desc: t('statYearsDesc') 
    },
    { 
      icon: <Factory className="w-6 h-6 text-brand-orange" />, 
      label: t('statCapacity'), 
      value: lang === 'HI' ? '12500+ टन' : '12,500+ MT', 
      desc: t('statCapacityDesc') 
    },
    { 
      icon: <Award className="w-6 h-6 text-brand-orange" />, 
      label: t('statClients'), 
      value: lang === 'HI' ? '500+ ग्राहक' : '500+ Clients', 
      desc: t('statClientsDesc') 
    },
    { 
      icon: <ShieldCheck className="w-6 h-6 text-brand-orange" />, 
      label: t('statPlant'), 
      value: lang === 'HI' ? '75000+ वर्ग फुट' : '75,000+ Sq. Ft.', 
      desc: t('statPlantDesc') 
    },
  ];

  const galleryImages = [
    {
      src: '/images/hero-factory-warehouse.jpg',
      alt: 'Rajshree Group state-of-the-art plant warehouse',
      label: lang === 'HI' ? 'फैक्ट्री इन्फ्रास्ट्रक्चर' : 'Factory Infrastructure'
    },
    {
      src: '/images/manufacturing-production-line.jpg',
      alt: 'Automated extrusion production line',
      label: lang === 'HI' ? 'प्रोडक्शन लाइन यूनिट II' : 'Production Line Unit II'
    },
    {
      src: '/images/hero-hdpe-pipes-closeup.jpg',
      alt: 'High-density polyethylene pipes close-up',
      label: lang === 'HI' ? 'प्रीमियम फिनिश्ड पाइप्स' : 'Premium Finished Pipes'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-950 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-brand-blue dark:text-brand-lightblue font-bold tracking-wide uppercase">{t('aboutTitle')}</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('aboutSubtitle')}
          </p>
          <div className="mt-4 h-1.5 w-24 bg-brand-orange mx-auto rounded-full"></div>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-left"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 leading-tight">
              {t('aboutHeading')}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light text-base">
              {t('aboutPara1')}
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light text-base">
              {t('aboutPara2')}
            </p>
            
            <ul className="space-y-3 pt-2">
              <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                <CheckCircle className="w-5 h-5 text-brand-orange shrink-0" />
                <span>{t('check1')}</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                <CheckCircle className="w-5 h-5 text-brand-orange shrink-0" />
                <span>{t('check2')}</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                <CheckCircle className="w-5 h-5 text-brand-orange shrink-0" />
                <span>{t('check3')}</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-805">
              <blockquote className="border-l-4 border-brand-blue dark:border-brand-lightblue pl-4 italic text-slate-600 dark:text-slate-400 font-medium">
                "{t('aboutQuote')}"
              </blockquote>
            </div>
          </motion.div>

          {/* Right Image Grid describing Manufacturing Facility */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {/* Main Tall Image */}
            <div className="col-span-2 relative group overflow-hidden rounded-3xl shadow-lg border border-slate-200 dark:border-slate-800">
              <img
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-bold uppercase tracking-wider bg-brand-blue/90 px-3 py-1 rounded-md">
                  {galleryImages[0].label}
                </span>
              </div>
            </div>
            
            {/* Second Image */}
            <div className="relative group overflow-hidden rounded-3xl shadow-lg border border-slate-200 dark:border-slate-800">
              <img
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-bold uppercase tracking-wider bg-brand-blue/90 px-3 py-1 rounded-md">
                  {galleryImages[1].label}
                </span>
              </div>
            </div>

            {/* Third Image */}
            <div className="relative group overflow-hidden rounded-3xl shadow-lg border border-slate-200 dark:border-slate-800">
              <img
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-bold uppercase tracking-wider bg-brand-blue/90 px-3 py-1 rounded-md">
                  {galleryImages[2].label}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid with Animated Counters */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md border border-slate-150 dark:border-slate-800 hover:shadow-xl dark:hover:shadow-slate-950/45 transition-all duration-300 flex flex-col text-left group hover:-translate-y-1"
            >
              <div className="p-3 rounded-xl bg-brand-orange/10 w-fit mb-4 group-hover:bg-brand-orange/20 transition-colors">
                {stat.icon}
              </div>
              <h4 className="text-3xl font-extrabold text-slate-800 dark:text-white tracking-tight">
                <AnimatedCounter value={stat.value} />
              </h4>
              <p className="text-sm font-bold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">{stat.label}</p>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-2 font-medium">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Association/Membership Logos (Credibility Booster) */}
        <div className="mt-24 border-t border-slate-200 dark:border-slate-900 pt-16">
          <p className="text-center text-xs uppercase font-extrabold tracking-widest text-slate-400 dark:text-slate-500 mb-8">
            {t('membershipTitle')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-75 dark:opacity-90">
            {/* PMAR Logo */}
            <div className="flex items-center gap-2 group grayscale hover:grayscale-0 transition-all duration-350 cursor-pointer">
              <svg viewBox="0 0 100 100" className="w-10 h-10 text-brand-blue dark:text-brand-lightblue fill-none stroke-current" strokeWidth="4">
                <circle cx="50" cy="50" r="45" />
                <path d="M40,25 C45,30 55,20 60,35 C65,50 35,60 50,75 L45,75" strokeWidth="3" />
                <text x="50" y="85" fontSize="10" fontWeight="bold" textAnchor="middle" fill="currentColor">PMAR</text>
              </svg>
              <div className="text-left leading-tight hidden sm:block">
                <p className="text-xs font-black text-slate-700 dark:text-slate-300">PMAR MEMBER</p>
                <p className="text-[10px] text-slate-400">Plastic Mfrs Assoc Rajasthan</p>
              </div>
            </div>

            {/* CII Logo */}
            <div className="flex items-center gap-2 group grayscale hover:grayscale-0 transition-all duration-350 cursor-pointer">
              <svg viewBox="0 0 100 100" className="w-10 h-10 text-brand-blue dark:text-brand-lightblue fill-none stroke-current" strokeWidth="4">
                <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" />
                <path d="M30,35 H70 M30,50 H70 M30,65 H70" strokeWidth="3" />
                <text x="50" y="55" fontSize="20" fontWeight="black" textAnchor="middle" fill="currentColor" stroke="none">CII</text>
              </svg>
              <div className="text-left leading-tight hidden sm:block">
                <p className="text-xs font-black text-slate-700 dark:text-slate-300">CII AFFILIATED</p>
                <p className="text-[10px] text-slate-400">Confederation of Indian Industry</p>
              </div>
            </div>

            {/* FICCI Logo */}
            <div className="flex items-center gap-2 group grayscale hover:grayscale-0 transition-all duration-350 cursor-pointer">
              <svg viewBox="0 0 100 100" className="w-10 h-10 text-brand-blue dark:text-brand-lightblue fill-none stroke-current" strokeWidth="4">
                <circle cx="50" cy="50" r="45" strokeDasharray="5 3" />
                <circle cx="50" cy="50" r="32" />
                <text x="50" y="56" fontSize="13" fontWeight="black" textAnchor="middle" fill="currentColor" stroke="none">FICCI</text>
              </svg>
              <div className="text-left leading-tight hidden sm:block">
                <p className="text-xs font-black text-slate-700 dark:text-slate-300">FICCI MEMBERSHIP</p>
                <p className="text-[10px] text-slate-400">Federation of Indian Chambers</p>
              </div>
            </div>

            {/* BIS/ISI Logo */}
            <div className="flex items-center gap-2 group grayscale hover:grayscale-0 transition-all duration-350 cursor-pointer">
              <svg viewBox="0 0 100 120" className="w-10 h-12 text-brand-orange fill-none stroke-current" strokeWidth="4">
                <rect x="5" y="5" width="90" height="90" rx="8" />
                <circle cx="50" cy="50" r="28" />
                <text x="50" y="58" fontSize="22" fontWeight="black" textAnchor="middle" fill="currentColor" stroke="none">ISI</text>
                <text x="50" y="112" fontSize="11" fontWeight="bold" textAnchor="middle" fill="currentColor" stroke="none">IS:4984</text>
              </svg>
              <div className="text-left leading-tight hidden sm:block">
                <p className="text-xs font-black text-slate-700 dark:text-slate-300">BIS LICENSED</p>
                <p className="text-[10px] text-slate-400">Bureau of Indian Standards</p>
              </div>
            </div>
          </div>
        </div>

        {/* Awards & Recognition Section */}
        <div className="mt-16 border-t border-slate-200 dark:border-slate-900 pt-16">
          <p className="text-center text-xs uppercase font-extrabold tracking-widest text-slate-400 dark:text-slate-500 mb-8">
            {t('awardsTitle')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Award 1 */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-150 dark:border-slate-800 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow text-left">
              <div className="p-3 bg-brand-orange/10 text-brand-orange rounded-xl shrink-0">
                <Trophy className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-800 dark:text-white text-base">{t('award1Title')}</h4>
                <p className="text-slate-400 dark:text-slate-500 text-xs mt-1">{t('award1Desc')}</p>
                <p className="text-slate-500 dark:text-slate-450 text-xs mt-1.5 font-light italic">
                  {t('award1Edit')}
                </p>
              </div>
            </div>

            {/* Award 2 */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-150 dark:border-slate-800 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow text-left">
              <div className="p-3 bg-brand-orange/10 text-brand-orange rounded-xl shrink-0">
                <Medal className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-800 dark:text-white text-base">{t('award2Title')}</h4>
                <p className="text-slate-400 dark:text-slate-500 text-xs mt-1">{t('award2Desc')}</p>
                <p className="text-slate-500 dark:text-slate-455 text-xs mt-1.5 font-light italic">
                  {t('award2Edit')}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
