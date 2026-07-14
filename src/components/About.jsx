import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ShieldCheck, Factory, Calendar, CheckCircle, Trophy, Medal, Play, X, TrendingUp } from 'lucide-react';
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
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeCapacityHover, setActiveCapacityHover] = useState(null);

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

  const milestones = [
    {
      year: '2012',
      title: lang === 'HI' ? 'कंपनी की स्थापना (यूनिट I)' : 'Company Founded (Unit I)',
      desc: lang === 'HI' ? 'बागरू औद्योगिक क्षेत्र, जयपुर में पहले विनिर्माण संयंत्र की शुरुआत।' : 'Commenced operations at the first extrusion plant in RIICO Area, Bagru (Jaipur).'
    },
    {
      year: '2015',
      title: lang === 'HI' ? 'आईएसओ 9001:2015 और बीआईएस लाइसेंस' : 'ISO 9001:2015 & BIS Licensed',
      desc: lang === 'HI' ? 'गुणवत्ता प्रबंधन प्रणालियों के लिए प्रमाणन और आईएसआई मार्क लाइसेंस प्राप्त किया।' : 'Acquired formal ISO certifications and BIS ISI marking approval for water supply pipes.'
    },
    {
      year: '2018',
      title: lang === 'HI' ? 'एनएबीएल प्रयोगशाला की स्थापना' : 'NABL Lab Commissioned',
      desc: lang === 'HI' ? 'कच्चे माल और पाइप के पूर्ण भौतिक परीक्षण के लिए उन्नत लैब सेटअप किया गया।' : 'Established a fully equipped NABL-level quality control testing laboratory in-house.'
    },
    {
      year: '2021',
      title: lang === 'HI' ? 'फागी संयंत्र का विस्तार (यूनिट II)' : 'Phagi Expansion (Unit II)',
      desc: lang === 'HI' ? 'क्षमता बढ़ाने के लिए यूनिट II फागी में उच्च गति वाली नई विनिर्माण इकाइयां स्थापित कीं।' : 'Setup high-speed automated extrusion lines at Unit II, Phagi, to triple monthly output.'
    },
    {
      year: '2024',
      title: lang === 'HI' ? '500+ ग्राहकों और 12,000+ मीट्रिक टन' : '500+ Clients & 12,000+ MT',
      desc: lang === 'HI' ? 'पूरे भारत में नगरपालिका और बुनियादी ढांचा परियोजनाओं को सफलतापूर्वक आपूर्ति की।' : 'Supplied high-density piping networks to major national grids, water boards, and corporate layouts.'
    }
  ];

  const capacityData = [
    { category: 'HDPE Pipes', percentage: 60, color: '#0F52BA', value: '750 MT' },
    { category: 'PVC Pipes', percentage: 25, color: '#F37021', value: '312 MT' },
    { category: 'MDPE & Sprinklers', percentage: 15, color: '#00A86B', value: '188 MT' }
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
                loading="lazy"
                width="640"
                height="360"
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
                loading="lazy"
                width="320"
                height="176"
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
                loading="lazy"
                width="320"
                height="176"
              />
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-bold uppercase tracking-wider bg-brand-blue/90 px-3 py-1 rounded-md">
                  {galleryImages[2].label}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 1. Founder Message & 10. Walkthrough Video Embed Layout */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Leadership Card (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 flex flex-col justify-between shadow-sm relative overflow-hidden text-left"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 dark:bg-brand-blue/10 rounded-bl-full flex items-center justify-center">
              <span className="text-4xl text-brand-blue/20 select-none">“</span>
            </div>
            
            <div>
              <h4 className="text-xs font-extrabold uppercase text-brand-orange tracking-widest mb-3">
                {t('aboutLeadershipTitle')}
              </h4>
              <blockquote className="text-slate-700 dark:text-slate-350 text-base italic leading-relaxed mb-6 font-medium">
                "{t('aboutLeadershipQuote')}"
              </blockquote>
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-light leading-relaxed max-w-lg mb-8">
                {lang === 'HI' 
                  ? 'राजश्री टेक्नोप्लास्ट में, हम विनिर्माण के सभी स्तरों पर उच्चतम सुरक्षा और शून्य-दोष नीति के साथ काम करते हैं। हम गुणवत्ता, स्थायित्व और टिकाऊ पर्यावरण के माध्यम से राष्ट्र-निर्माण में योगदान देते हैं।'
                  : 'At Rajshree Technoplast, we operate with a safety-first and zero-defect quality threshold. Our dedication remains towards national development by producing polymer networks that withstand high pressures and harsh industrial environments.'}
              </p>
            </div>

            <div className="flex items-center gap-4 border-t border-slate-100 dark:border-slate-800 pt-4 mt-auto">
              <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 border-2 border-brand-blue flex items-center justify-center overflow-hidden text-brand-blue dark:text-brand-lightblue font-black text-lg select-none">
                AJ
              </div>
              <div>
                <h5 className="font-bold text-slate-800 dark:text-white text-base">
                  {t('aboutLeadershipName')}
                </h5>
                <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                  {t('aboutLeadershipRole')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Video Walkthrough (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative group overflow-hidden rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col justify-end min-h-[320px] bg-slate-900"
          >
            {/* Visual Thumbnail */}
            <img 
              src="/images/hero-factory-warehouse.jpg" 
              alt="Factory Walkthrough Thumbnail" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              width="480"
              height="320"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="w-16 h-16 rounded-full bg-white/10 dark:bg-slate-900/50 hover:bg-white text-brand-orange hover:text-brand-blue flex items-center justify-center shadow-lg backdrop-blur-md border border-white/20 transition-all cursor-pointer scale-95 group-hover:scale-100 hover:scale-110"
                title="Play Walkthrough Video"
              >
                <Play className="w-8 h-8 fill-current translate-x-0.5" />
              </button>
            </div>

            <div className="relative p-6 text-left z-10">
              <h4 className="text-white font-extrabold text-base tracking-tight">
                {t('aboutVideoTitle')}
              </h4>
              <p className="text-slate-300 text-xs mt-1.5 font-light leading-relaxed">
                {t('aboutVideoDesc')}
              </p>
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

        {/* 2. Journey Timeline & 9. Donut Chart Section */}
        <div className="mt-24 border-t border-slate-200 dark:border-slate-900 pt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Milestone Timeline (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h3 className="text-xs font-extrabold uppercase text-brand-blue dark:text-brand-lightblue tracking-widest">
                {t('aboutTimelineTitle')}
              </h3>
              <h4 className="text-2xl font-black text-slate-850 dark:text-white mt-1">
                {t('aboutTimelineSubtitle')}
              </h4>
            </div>

            <div className="relative pl-6 border-l border-slate-250 dark:border-slate-800 space-y-8 ml-2">
              {milestones.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Dot Indicator */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-brand-orange group-hover:bg-brand-orange transition-colors"></div>
                  
                  <span className="text-xs font-black text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded">
                    {item.year}
                  </span>
                  <h5 className="font-extrabold text-slate-800 dark:text-white mt-2 text-base">
                    {item.title}
                  </h5>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Monthly Capacity Donut Chart (5 cols) */}
          <div className="lg:col-span-5 space-y-8 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-brand-blue dark:text-brand-lightblue">
                <TrendingUp className="w-5 h-5" />
                <span className="text-xs font-extrabold uppercase tracking-widest">{t('aboutCapacityTitle')}</span>
              </div>
              <h4 className="text-xl font-bold text-slate-850 dark:text-white mt-1.5 leading-tight">
                {lang === 'HI' ? '1,250+ मीट्रिक टन मासिक उत्पादन' : '1,250+ Metric Tons Monthly Extrusion'}
              </h4>
            </div>

            {/* SVG Donut Chart */}
            <div className="flex items-center justify-center py-6 relative">
              <svg viewBox="0 0 100 100" className="w-48 h-48 transform -rotate-90">
                {/* Segment 1: HDPE (60%) */}
                <circle 
                  cx="50" cy="50" r="40" 
                  fill="transparent" 
                  stroke="#0F52BA" 
                  strokeWidth="12" 
                  strokeDasharray="150.8 251.2" 
                  strokeDashoffset="0"
                  className="cursor-pointer transition-all duration-300 hover:stroke-[14]"
                  onMouseEnter={() => setActiveCapacityHover(0)}
                  onMouseLeave={() => setActiveCapacityHover(null)}
                />
                {/* Segment 2: PVC (25%) */}
                <circle 
                  cx="50" cy="50" r="40" 
                  fill="transparent" 
                  stroke="#F37021" 
                  strokeWidth="12" 
                  strokeDasharray="62.8 251.2" 
                  strokeDashoffset="-150.8"
                  className="cursor-pointer transition-all duration-300 hover:stroke-[14]"
                  onMouseEnter={() => setActiveCapacityHover(1)}
                  onMouseLeave={() => setActiveCapacityHover(null)}
                />
                {/* Segment 3: MDPE & Sprinkler (15%) */}
                <circle 
                  cx="50" cy="50" r="40" 
                  fill="transparent" 
                  stroke="#00A86B" 
                  strokeWidth="12" 
                  strokeDasharray="37.68 251.2" 
                  strokeDashoffset="-213.6"
                  className="cursor-pointer transition-all duration-300 hover:stroke-[14]"
                  onMouseEnter={() => setActiveCapacityHover(2)}
                  onMouseLeave={() => setActiveCapacityHover(null)}
                />
                
                {/* Center text */}
                <circle cx="50" cy="50" r="30" fill="transparent" />
              </svg>

              {/* Absolute Central Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none">
                <span className="text-2xl font-black text-slate-800 dark:text-white">
                  {activeCapacityHover !== null ? capacityData[activeCapacityHover].percentage + '%' : '1,250'}
                </span>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-extrabold">
                  {activeCapacityHover !== null ? capacityData[activeCapacityHover].category : 'MT / Month'}
                </span>
              </div>
            </div>

            {/* Chart Legend list */}
            <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              {capacityData.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`flex justify-between items-center text-xs p-2 rounded-xl transition-colors ${
                    activeCapacityHover === idx ? 'bg-slate-50 dark:bg-slate-800/40' : ''
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: item.color }}></span>
                    <span className="font-medium text-slate-700 dark:text-slate-350">{item.category}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-slate-850 dark:text-white mr-1.5">{item.value}</span>
                    <span className="text-slate-400 dark:text-slate-500">({item.percentage}%)</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

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

      {/* Video Modal (Simulated Player) */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 max-w-4xl w-full shadow-2xl relative"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 hover:bg-brand-orange text-white cursor-pointer transition-all z-20"
                title="Close Player"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Aspect Ratio Screen Box */}
              <div className="aspect-video w-full relative flex flex-col items-center justify-center p-8 text-center bg-slate-950">
                
                {/* Simulated playback interface */}
                <div className="absolute inset-0 pointer-events-none opacity-40">
                  <img 
                    src="/images/hero-factory-warehouse.jpg" 
                    alt="Background stream mockup" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-950/70"></div>
                </div>

                <div className="z-10 max-w-md space-y-4">
                  <div className="w-16 h-16 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center mx-auto border-2 border-brand-orange animate-pulse">
                    <Play className="w-8 h-8 fill-current translate-x-0.5" />
                  </div>
                  <h3 className="text-white text-lg sm:text-xl font-bold tracking-tight">
                    {lang === 'HI' ? 'स्वचालित एक्सट्रूज़न इकाइयों का वीडियो टूर' : 'Automated Pipe Extrusion Line Video Walkthrough'}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm font-light">
                    {lang === 'HI' 
                      ? '[वीडियो स्रोत प्लेसहोल्डर - वास्तविक एमपी 4/यूट्यूब यूआरएल को इस जगह अपडेट करें]' 
                      : '[Video Source Placeholder - Feed the actual MP4/YouTube streams here]'}
                  </p>
                </div>

                {/* Video controls placeholder */}
                <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur border-t border-slate-800 p-4 flex items-center justify-between z-10 text-xs">
                  <div className="flex items-center gap-3">
                    <Play className="w-4 h-4 text-brand-orange" />
                    <span className="text-slate-350">0:00 / 1:30</span>
                  </div>
                  <div className="w-1/2 h-1 bg-slate-800 rounded-full overflow-hidden relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-brand-orange"></div>
                  </div>
                  <span className="text-slate-400">1080p HD</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
