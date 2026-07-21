import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ShieldCheck, Factory, Calendar, CheckCircle, Trophy, Medal, Play, X, TrendingUp } from 'lucide-react';

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
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeCapacityHover, setActiveCapacityHover] = useState(null);

  const stats = [
    { 
      icon: <Calendar className="w-6 h-6 text-amber-500" />, 
      label: 'Years of Experience', 
      value: '15+ Years', 
      desc: 'Over a decade of manufacturing excellence' 
    },
    { 
      icon: <Factory className="w-6 h-6 text-amber-500" />, 
      label: 'Production Capacity', 
      value: '12,500+ MT', 
      desc: 'Tons produced annually across our units' 
    },
    { 
      icon: <Award className="w-6 h-6 text-amber-500" />, 
      label: 'Active Clients', 
      value: '500+ Clients', 
      desc: 'Government agencies, contractors & dealers' 
    },
    { 
      icon: <ShieldCheck className="w-6 h-6 text-amber-500" />, 
      label: 'Plant Size', 
      value: '75,000+ Sq. Ft.', 
      desc: 'State-of-the-art facilities in Rajasthan' 
    },
  ];

  const galleryImages = [
    {
      src: '/images/hero-factory-warehouse.jpg',
      alt: 'Rajshree Group state-of-the-art plant warehouse',
      label: '75,000+ Sq. Ft. Factory Plant'
    },
    {
      src: '/images/products-display-board.jpg',
      alt: 'Rajshree product display showcase',
      label: 'Certified Polymer Range'
    }
  ];

  const milestones = [
    {
      year: '2012',
      title: 'Company Founded (Unit I)',
      desc: 'Commenced operations at the first extrusion plant in RIICO Area, Bagru (Jaipur).'
    },
    {
      year: '2015',
      title: 'ISO 9001:2015 & BIS Licensed',
      desc: 'Acquired formal ISO certifications and BIS ISI marking approval for water supply pipes.'
    },
    {
      year: '2018',
      title: 'NABL Lab Commissioned',
      desc: 'Established a fully equipped NABL-level quality control testing laboratory in-house.'
    },
    {
      year: '2021',
      title: 'Phagi Expansion (Unit II)',
      desc: 'Setup high-speed automated extrusion lines at Unit II, Phagi, to triple monthly output.'
    },
    {
      year: '2024',
      title: '500+ Clients & 12,000+ MT',
      desc: 'Supplied high-density piping networks to major national grids, water boards, and corporate layouts.'
    }
  ];

  const capacityData = [
    { category: 'HDPE Pipes', percentage: 60, color: '#0F52BA', value: '750 MT' },
    { category: 'PVC Pipes', percentage: 25, color: '#F37021', value: '312 MT' },
    { category: 'MDPE & Sprinklers', percentage: 15, color: '#00A86B', value: '188 MT' }
  ];

  return (
    <section id="about" className="py-12 bg-slate-50 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-base text-blue-600 font-bold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Factory Infrastructure &amp; Technical Standing
          </p>
          <div className="mt-4 h-1.5 w-24 bg-amber-500 mx-auto rounded-full"></div>
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
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 leading-tight">
              Pioneering Durable Piping Infrastructure
            </h3>
            <p className="text-slate-600 leading-relaxed font-light text-base">
              Founded in 2012, Rajshree Technoplast Pvt. Ltd. (under the renowned Rajshree Group) has established itself as a premier manufacturer of high-density polyethylene (HDPE) and polyvinyl chloride (PVC) pipes. For over a decade, we have been a trusted partner in India's agricultural, urban sewerage, and industrial growth.
            </p>
            <p className="text-slate-600 leading-relaxed font-light text-base">
              With a commitment to zero-defect manufacturing, our state-of-the-art facilities in Bagru and Phagi, Jaipur, span over 75,000 square feet. Fully accredited with ISO 9001:2015 certification, our plant combines automated production systems with an in-house NABL-standards testing laboratory to guarantee peerless product standards.
            </p>
            
            <ul className="space-y-3 pt-2">
              <li className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle className="w-5 h-5 text-amber-500 shrink-0" />
                <span>100% Virgin High-Grade Polymer Resins</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle className="w-5 h-5 text-amber-500 shrink-0" />
                <span>Rigorous ISI compliance and BIS licensed certification</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle className="w-5 h-5 text-amber-500 shrink-0" />
                <span>Large warehousing capabilities for immediate bulk dispatches</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-slate-200">
              <blockquote className="border-l-4 border-blue-600 pl-4 italic text-slate-600 font-medium">
                "We do not just construct pipes; we engineer durable fluid highways that feed irrigation networks and cities across the nation."
              </blockquote>
            </div>
          </motion.div>

          {/* Right Image Grid describing Manufacturing Facility */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {/* Main Plant Image */}
            <div className="relative group overflow-hidden rounded-3xl shadow-lg border border-slate-200">
              <img
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width="640"
                height="360"
              />
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-bold uppercase tracking-wider bg-blue-700/90 px-3 py-1 rounded-md">
                  {galleryImages[0].label}
                </span>
              </div>
            </div>
            
            {/* Product Range Image */}
            <div className="relative group overflow-hidden rounded-3xl shadow-lg border border-slate-200">
              <img
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width="640"
                height="200"
              />
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-bold uppercase tracking-wider bg-blue-700/90 px-3 py-1 rounded-md">
                  {galleryImages[1].label}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Founder Message & Walkthrough Video */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Leadership Card (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 flex flex-col justify-between shadow-sm relative overflow-hidden text-left"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/5 rounded-bl-full flex items-center justify-center">
              <span className="text-4xl text-blue-600/20 select-none">“</span>
            </div>
            
            <div>
              <h4 className="text-xs font-extrabold uppercase text-amber-600 tracking-widest mb-3">
                MESSAGE FROM OUR LEADERSHIP
              </h4>
              <blockquote className="text-slate-700 text-base italic leading-relaxed mb-6 font-medium">
                "Our vision is to build piping networks that serve generations. Quality is not just a parameter for us; it is a promise that we seal into every millimeter of polymer."
              </blockquote>
              <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed max-w-lg mb-8">
                At Rajshree Technoplast, we operate with a safety-first and zero-defect quality threshold. Our dedication remains towards national development by producing polymer networks that withstand high pressures and harsh industrial environments.
              </p>
            </div>

            <div className="flex items-center gap-4 border-t border-slate-100 pt-4 mt-auto">
              <div className="w-12 h-12 rounded-full bg-slate-100 border-2 border-blue-600 flex items-center justify-center overflow-hidden text-blue-600 font-black text-lg select-none">
                AJ
              </div>
              <div>
                <h5 className="font-bold text-slate-800 text-base">
                  Mr. Arun Jain
                </h5>
                <p className="text-xs text-slate-400 font-medium">
                  Founder &amp; Managing Director
                </p>
              </div>
            </div>
          </motion.div>

          {/* Video Walkthrough (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative group overflow-hidden rounded-3xl shadow-sm border border-slate-200 flex flex-col justify-end min-h-[320px] bg-slate-900"
          >
            {/* Industrial Background Pattern Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950/80 to-slate-950"></div>
            <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px] opacity-25"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="w-16 h-16 rounded-full bg-white/10 hover:bg-white text-amber-500 hover:text-blue-700 flex items-center justify-center shadow-lg backdrop-blur-md border border-white/20 transition-all cursor-pointer scale-95 group-hover:scale-100 hover:scale-110"
                title="Play Walkthrough Video"
              >
                <Play className="w-8 h-8 fill-current translate-x-0.5" />
              </button>
            </div>

            <div className="relative p-6 text-left z-10">
              <h4 className="text-white font-extrabold text-base tracking-tight">
                Take a Tour of Jaipur Extrusion Units
              </h4>
              <p className="text-slate-300 text-xs mt-1.5 font-light leading-relaxed">
                Watch the live 60-second walkthrough of our automated production floors and NABL lab systems.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Stats Grid with Animated Counters */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col text-left group hover:-translate-y-1"
            >
              <div className="p-3 rounded-xl bg-amber-500/10 w-fit mb-4 group-hover:bg-amber-500/20 transition-colors">
                {stat.icon}
              </div>
              <h4 className="text-3xl font-extrabold text-slate-800 tracking-tight">
                <AnimatedCounter value={stat.value} />
              </h4>
              <p className="text-sm font-bold text-slate-500 mt-1 uppercase tracking-wider">{stat.label}</p>
              <p className="text-xs text-slate-400 mt-2 font-medium">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Journey Timeline & Donut Chart Section */}
        <div className="mt-12 border-t border-slate-200 pt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 text-left">
          
          {/* Milestone Timeline (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h3 className="text-xs font-extrabold uppercase text-blue-600 tracking-widest">
                OUR JOURNEY
              </h3>
              <h4 className="text-2xl font-black text-slate-800 mt-1">
                A Decade of Infrastructure Excellence
              </h4>
            </div>

            <div className="relative pl-6 border-l border-slate-200 space-y-8 ml-2">
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
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-amber-500 group-hover:bg-amber-500 transition-colors"></div>
                  
                  <span className="text-xs font-black text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded">
                    {item.year}
                  </span>
                  <h5 className="font-extrabold text-slate-800 mt-2 text-base">
                    {item.title}
                  </h5>
                  <p className="text-xs text-slate-500 mt-1 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Monthly Capacity Donut Chart (5 cols) */}
          <div className="lg:col-span-5 space-y-8 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-blue-600">
                <TrendingUp className="w-5 h-5" />
                <span className="text-xs font-extrabold uppercase tracking-widest">MONTHLY PRODUCTION CAPACITY</span>
              </div>
              <h4 className="text-xl font-bold text-slate-800 mt-1.5 leading-tight">
                1,250+ Metric Tons Monthly Extrusion
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
                <span className="text-2xl font-black text-slate-800">
                  {activeCapacityHover !== null ? capacityData[activeCapacityHover].percentage + '%' : '1,250'}
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-extrabold">
                  {activeCapacityHover !== null ? capacityData[activeCapacityHover].category : 'MT / Month'}
                </span>
              </div>
            </div>

            {/* Chart Legend list */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              {capacityData.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`flex justify-between items-center text-xs p-2 rounded-xl transition-colors ${
                    activeCapacityHover === idx ? 'bg-slate-50' : ''
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: item.color }}></span>
                    <span className="font-medium text-slate-700">{item.category}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-slate-800 mr-1.5">{item.value}</span>
                    <span className="text-slate-400">({item.percentage}%)</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Association/Membership Logos */}
        <div className="mt-12 border-t border-slate-200 pt-10">
          <p className="text-center text-xs uppercase font-extrabold tracking-widest text-slate-400 mb-8">
            Memberships &amp; Industry accreditations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-75">
            {/* PMAR Logo */}
            <div className="flex items-center gap-2 group grayscale hover:grayscale-0 transition-all duration-350 cursor-pointer">
              <svg viewBox="0 0 100 100" className="w-10 h-10 text-blue-600 fill-none stroke-current" strokeWidth="4">
                <circle cx="50" cy="50" r="45" />
                <path d="M40,25 C45,30 55,20 60,35 C65,50 35,60 50,75 L45,75" strokeWidth="3" />
                <text x="50" y="85" fontSize="10" fontWeight="bold" textAnchor="middle" fill="currentColor">PMAR</text>
              </svg>
              <div className="text-left leading-tight hidden sm:block">
                <p className="text-xs font-black text-slate-700">PMAR MEMBER</p>
                <p className="text-[10px] text-slate-400">Plastic Mfrs Assoc Rajasthan</p>
              </div>
            </div>

            {/* CII Logo */}
            <div className="flex items-center gap-2 group grayscale hover:grayscale-0 transition-all duration-350 cursor-pointer">
              <svg viewBox="0 0 100 100" className="w-10 h-10 text-blue-600 fill-none stroke-current" strokeWidth="4">
                <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" />
                <path d="M30,35 H70 M30,50 H70 M30,65 H70" strokeWidth="3" />
                <text x="50" y="55" fontSize="20" fontWeight="black" textAnchor="middle" fill="currentColor" stroke="none">CII</text>
              </svg>
              <div className="text-left leading-tight hidden sm:block">
                <p className="text-xs font-black text-slate-700">CII AFFILIATED</p>
                <p className="text-[10px] text-slate-400">Confederation of Indian Industry</p>
              </div>
            </div>

            {/* FICCI Logo */}
            <div className="flex items-center gap-2 group grayscale hover:grayscale-0 transition-all duration-350 cursor-pointer">
              <svg viewBox="0 0 100 100" className="w-10 h-10 text-blue-600 fill-none stroke-current" strokeWidth="4">
                <circle cx="50" cy="50" r="45" strokeDasharray="5 3" />
                <circle cx="50" cy="50" r="32" />
                <text x="50" y="56" fontSize="13" fontWeight="black" textAnchor="middle" fill="currentColor" stroke="none">FICCI</text>
              </svg>
              <div className="text-left leading-tight hidden sm:block">
                <p className="text-xs font-black text-slate-700">FICCI MEMBERSHIP</p>
                <p className="text-[10px] text-slate-400">Federation of Indian Chambers</p>
              </div>
            </div>

            {/* BIS/ISI Logo */}
            <div className="flex items-center gap-2 group grayscale hover:grayscale-0 transition-all duration-350 cursor-pointer">
              <svg viewBox="0 0 100 120" className="w-10 h-12 text-amber-500 fill-none stroke-current" strokeWidth="4">
                <rect x="5" y="5" width="90" height="90" rx="8" />
                <circle cx="50" cy="50" r="28" />
                <text x="50" y="58" fontSize="22" fontWeight="black" textAnchor="middle" fill="currentColor" stroke="none">ISI</text>
                <text x="50" y="112" fontSize="11" fontWeight="bold" textAnchor="middle" fill="currentColor" stroke="none">IS:4984</text>
              </svg>
              <div className="text-left leading-tight hidden sm:block">
                <p className="text-xs font-black text-slate-700">BIS LICENSED</p>
                <p className="text-[10px] text-slate-400">Bureau of Indian Standards</p>
              </div>
            </div>
          </div>
        </div>

        {/* Awards & Recognition Section */}
        <div className="mt-10 border-t border-slate-200 pt-10">
          <p className="text-center text-xs uppercase font-extrabold tracking-widest text-slate-400 mb-8">
            Awards &amp; Recognition
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Award 1 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow text-left">
              <div className="p-3 bg-amber-500/10 text-amber-500 rounded-xl shrink-0">
                <Trophy className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-800 text-base">Excellence in Manufacturing</h4>
                <p className="text-slate-400 text-xs mt-1">Rajasthan Industrial Quality Award • 2025</p>
                <p className="text-slate-500 text-xs mt-1.5 font-light italic">
                  Recognized for zero-defect automated extrusion and NABL lab quality standards.
                </p>
              </div>
            </div>

            {/* Award 2 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow text-left">
              <div className="p-3 bg-amber-500/10 text-amber-500 rounded-xl shrink-0">
                <Medal className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-800 text-base">Best Quality Standard</h4>
                <p className="text-slate-400 text-xs mt-1">Infrastructure Excellence Award • 2024</p>
                <p className="text-slate-500 text-xs mt-1.5 font-light italic">
                  Awarded for superior HDPE pressure pipe supply to Jal Jeevan Mission projects.
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
            className="fixed inset-0 z-50 bg-slate-900/90 backdrop-blur-md flex items-center justify-center p-4"
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
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 hover:bg-amber-600 text-white cursor-pointer transition-all z-20"
                title="Close Player"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Aspect Ratio Screen Box */}
              <div className="aspect-video w-full relative flex flex-col items-center justify-center p-8 text-center bg-slate-900">
                
                {/* Simulated playback interface */}
                <div className="absolute inset-0 pointer-events-none opacity-40 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950">
                  <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
                </div>

                <div className="z-10 max-w-md space-y-4">
                  <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center mx-auto border-2 border-amber-500 animate-pulse">
                    <Play className="w-8 h-8 fill-current translate-x-0.5" />
                  </div>
                  <h3 className="text-white text-lg sm:text-xl font-bold tracking-tight">
                    Automated Pipe Extrusion Line Video Walkthrough
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm font-light">
                    Take a live tour of our automated production floors and NABL lab systems.
                  </p>
                </div>

                {/* Video controls placeholder */}
                <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur border-t border-slate-800 p-4 flex items-center justify-between z-10 text-xs">
                  <div className="flex items-center gap-3">
                    <Play className="w-4 h-4 text-amber-500" />
                    <span className="text-slate-300">0:00 / 1:30</span>
                  </div>
                  <div className="w-1/2 h-1 bg-slate-800 rounded-full overflow-hidden relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-amber-500"></div>
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
