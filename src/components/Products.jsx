import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Scale, ArrowRight, Info, X, Check, AlertTriangle, FileText, Download, Sparkles, Pause, Play, RotateCcw } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

export default function Products() {
  const { lang, t } = useTranslation();
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [pipeRotation, setPipeRotation] = useState(170); // Match screenshot initial rotation
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);

  // Calculator states
  const [activeCalcTab, setActiveCalcTab] = useState('size');
  const [flowRate, setFlowRate] = useState('15');
  const [velocity, setVelocity] = useState('1.5');
  const [calcResultOD, setCalcResultOD] = useState(null);
  const [calcResultWT, setCalcResultWT] = useState(null);
  
  const [weightOD, setWeightOD] = useState('110');
  const [weightWT, setWeightWT] = useState('10');
  const [weightLength, setWeightLength] = useState('6');
  const [calcResultWeight, setCalcResultWeight] = useState(null);

  // Comparison states
  const [comparePipe1, setComparePipe1] = useState('HDPE');
  const [comparePipe2, setComparePipe2] = useState('PVC');

  const standardODs = [20, 25, 32, 40, 50, 63, 75, 90, 110, 125, 140, 160, 180, 200, 225, 250, 280, 315, 355, 400, 450, 500, 560, 630, 710];

  const handleCalculateSize = () => {
    const q = parseFloat(flowRate);
    const v = parseFloat(velocity);
    if (isNaN(q) || isNaN(v) || q <= 0 || v <= 0) return;
    
    // d = sqrt( (4 * Q_m3/s) / (pi * v) )
    const qM3 = q / 1000;
    const innerD = Math.sqrt((4 * qM3) / (Math.PI * v)) * 1000; // in mm
    
    // Find closest outer diameter that is larger than innerD
    // Assuming wall thickness is roughly 10% of OD (SDR 11)
    const suggestedOD = standardODs.find(od => od > innerD * 1.15) || 710;
    const suggestedWT = (suggestedOD / 11).toFixed(1); // SDR 11 estimate
    
    setCalcResultOD(suggestedOD);
    setCalcResultWT(suggestedWT);
  };

  const handleCalculateWeight = () => {
    const od = parseFloat(weightOD);
    const wt = parseFloat(weightWT);
    const len = parseFloat(weightLength);
    if (isNaN(od) || isNaN(wt) || isNaN(len) || od <= 0 || wt <= 0 || len <= 0 || wt >= od/2) return;
    
    // PE100 Density = 0.955 g/cm3
    // Weight (kg) = pi * (OD - WT) * WT * Length * Density_g_cm3 * 0.001
    const weight = Math.PI * (od - wt) * wt * len * 0.955 * 0.001;
    setCalcResultWeight(weight.toFixed(2));
  };

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoRotating) return;
    const interval = setInterval(() => {
      setPipeRotation((prev) => (prev + 1) % 360);
    }, 45); // Smooth rotation
    return () => clearInterval(interval);
  }, [isAutoRotating]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsAutoRotating(false); // Pause auto rotation on user interaction
    setDragStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diff = e.clientX - dragStartX;
    // Keep it rotating at every angle as much as the user sets it (0-360 deg)
    setPipeRotation((prev) => (prev + diff * 0.75 + 360) % 360);
    setDragStartX(e.clientX);
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    if (e.touches.length > 0) {
      setIsDragging(true);
      setIsAutoRotating(false);
      setDragStartX(e.touches[0].clientX);
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || e.touches.length === 0) return;
    const diff = e.touches[0].clientX - dragStartX;
    setPipeRotation((prev) => (prev + diff * 0.75 + 360) % 360);
    setDragStartX(e.touches[0].clientX);
  };

  // 3D card rotation calculations
  const angleRad = (pipeRotation * Math.PI) / 180;
  const tiltX = Math.cos(angleRad) * 5;  // limits to -5 and +5 degrees
  const scale = 1 - Math.abs(Math.sin(angleRad)) * 0.06;

  // Dynamic green overlay card content
  const getTooltipContent = (angle) => {
    if (angle >= 0 && angle < 90) {
      return {
        title: t('ttStdsTitle'),
        desc: t('ttStdsDesc')
      };
    }
    if (angle >= 90 && angle < 180) {
      return {
        title: t('ttWallTitle'),
        desc: t('ttWallDesc')
      };
    }
    if (angle >= 180 && angle < 270) {
      return {
        title: t('ttResinTitle'),
        desc: t('ttResinDesc')
      };
    }
    return {
      title: t('ttButtTitle'),
      desc: t('ttButtDesc')
    };
  };

  const tooltip = getTooltipContent(pipeRotation);

  const categories = [
    'All',
    'HDPE Pipe (IS:4984:2018)',
    'HDPE Sewage Pipe (IS:14333)',
    'MDPE Pipe',
    'DWC Pipe SN4',
    'Agriculture Pipe',
    'HDPE Coil Pipe',
    'Fittings & Couplers'
  ];

  const getTranslatedCategory = (cat) => {
    switch (cat) {
      case 'All': return lang === 'HI' ? 'सभी उत्पाद' : 'All';
      case 'HDPE Pipe (IS:4984:2018)': return lang === 'HI' ? 'एचडीपीई पाइप (IS:4984)' : 'HDPE Pipe (IS:4984)';
      case 'HDPE Sewage Pipe (IS:14333)': return lang === 'HI' ? 'एचडीपीई सीवर पाइप (IS:14333)' : 'HDPE Sewage Pipe (IS:14333)';
      case 'MDPE Pipe': return lang === 'HI' ? 'एमडीपीई पाइप' : 'MDPE Pipe';
      case 'DWC Pipe SN4': return lang === 'HI' ? 'डीडबल्यूसी पाइप SN4' : 'DWC Pipe SN4';
      case 'Agriculture Pipe': return lang === 'HI' ? 'कृषि पाइप' : 'Agriculture Pipe';
      case 'HDPE Coil Pipe': return lang === 'HI' ? 'एचडीपीई कॉइल पाइप' : 'HDPE Coil Pipe';
      case 'Fittings & Couplers': return lang === 'HI' ? 'फिटिंग्स और कपलर्स' : 'Fittings & Couplers';
      default: return cat;
    }
  };

  const productsList = [
    {
      id: 'black-hdpe',
      name: lang === 'HI' ? 'हाई-डेंसिटी पॉलीथीन (HDPE) पाइप्स' : 'High-Density Polyethylene (HDPE) Pipes',
      image: '/images/products-black-hdpe-pipes.jpg',
      categories: ['HDPE Pipe (IS:4984:2018)', 'Agriculture Pipe'],
      standards: 'IS:4984:2018 | ISO 4427',
      sizes: '20mm to 1200mm OD',
      pressure: 'PN 2.5 to PN 16 (SDR 41 to SDR 9)',
      desc: lang === 'HI' ? 'प्रीमियम PE 100/PE 80 रेजिन्स से निर्मित, सिंचाई नेटवर्क और औद्योगिक पाइपलाइन के लिए सर्वोत्तम विकल्प।' : 'Engineered from premium PE 100/PE 80 resin, ideal for high-pressure water mains, industrial fluid transport, and agricultural mainlines.',
      details: {
        applications: lang === 'HI' ? 'पेयजल आपूर्ति, ड्रिप/स्प्रिंकलर सिंचाई, औद्योगिक अपशिष्ट निस्तारण और सीवर लाइनें।' : 'Potable water supply, micro-irrigation, sewer force mains, industrial effluent disposal, and fly ash slurry transport.',
        jointing: lang === 'HI' ? 'बट फ्यूजन वेल्डिंग, इलेक्ट्रोफ्यूजन जॉइंटिंग और मैकेनिकल कंप्रेशन फिटिंग्स।' : 'Butt fusion welding, electrofusion jointing, and mechanical compression fittings.',
        durability: lang === 'HI' ? 'अपक्षय, रासायनिक हमलों, यूवी विकिरण और भूकंपीय हलचलों के प्रति अत्यधिक प्रतिरोधी।' : 'Highly resistant to weathering, chemical attack, UV radiation, and seismic ground movements.'
      }
    },
    {
      id: 'blue-mdpe',
      name: lang === 'HI' ? 'ब्लू एमडीपीई (MDPE) कृषि कॉइल पाइप्स' : 'Blue MDPE / Agricultural Coil Pipes',
      image: '/images/products-blue-pipes.jpg',
      categories: ['MDPE Pipe', 'Agriculture Pipe', 'HDPE Coil Pipe'],
      standards: 'IS:14885 | IS:4984',
      sizes: '20mm to 110mm OD',
      pressure: 'SDR 11 & SDR 17.6',
      desc: lang === 'HI' ? 'उत्कृष्ट लचीलेपन और क्रैक प्रतिरोध के साथ पीने के पानी के घरेलू कनेक्शन के लिए सर्वश्रेष्ठ विकल्प।' : 'Medium-density blue polyethylene pipes with outstanding flexibility and stress-crack resistance. Ideal for drinking water connection lines and farms.',
      details: {
        applications: lang === 'HI' ? 'घरेलू पेयजल कनेक्शन, खेत में स्प्रिंकलर लाइनें और नलकूप वितरण पाइपलाइंस।' : 'House service connections, farm sprinkler lines, micro-irrigation distribution, borewell pump delivery lines.',
        jointing: lang === 'HI' ? 'कंप्रेशन फिटिंग्स, सॉकेट फ्यूजन और इलेक्ट्रोफ्यूजन कपलर्स।' : 'Compression fittings, socket fusion, and electrofusion couplers.',
        durability: lang === 'HI' ? 'उच्च लचीलापन इसे बाधाओं के चारों ओर बिछाने की अनुमति देता है; मिट्टी के रसायनों के प्रति प्रतिरोधी।' : 'High flexibility allows layout around obstacles; resistant to soil chemistry and freezing temperatures.'
      }
    },
    {
      id: 'grey-dwc',
      name: lang === 'HI' ? 'स्ट्रक्चर्ड वॉल ग्रे पीवीसी (PVC) पाइप्स' : 'Structured Wall Grey PVC Pipes',
      image: '/images/products-grey-pipes-stacked.jpg',
      categories: ['DWC Pipe SN4', 'HDPE Sewage Pipe (IS:14333)'],
      standards: 'IS:13592 | IS:4985',
      sizes: '75mm to 315mm OD',
      pressure: 'Ring-fit Class 1 & 2 (SN4 / SN8)',
      desc: 'Robust grey structured wall pipes designed for low-pressure gravity sewers, building drainage, and underground telecommunication cable protection.',
      details: {
        applications: 'Gravity storm sewers, industrial wastewater drainage, soil/waste venting, underground high-voltage cable protection ducts.',
        jointing: 'Elastomeric rubber ring joints (Ring-fit) and cold solvent cement welding.',
        durability: 'Excellent hydraulic capacity due to smooth internal bore; immune to internal scale and chemical decay.'
      }
    },
    {
      id: 'bulk-couplers',
      name: lang === 'HI' ? 'एचडीपीई कंप्रेशन कपलर्स और फिटिंग्स' : 'HDPE Compression Couplers & Fittings',
      image: '/images/products-pipe-couplers-bulk.jpg',
      categories: ['Fittings & Couplers'],
      standards: 'IS:7328 | ISO 14236',
      sizes: '20mm to 110mm OD',
      pressure: 'Up to PN 16 (16 Bar)',
      desc: 'Bulk-manufactured high-precision compression couplers, elbows, and tees ensuring watertight joints in agricultural or pipeline connection runs.',
      details: {
        applications: 'Quick-release jointing for agricultural headers, service connections, and temporary supply piping lines.',
        jointing: 'Hand-tightened mechanical compression nuts with elastomeric O-rings and split-ring grips.',
        durability: 'Molded from virgin PP/HDPE for high impact strength and UV resistance under heavy sunlight.'
      }
    },
    {
      id: 'endcap-fitting',
      name: lang === 'HI' ? 'प्रीमियम मोल्डेड एंडकैप जॉइंट फिटिंग्स' : 'Premium Molded Endcap Joint Fittings',
      image: '/images/pipe-fittings-endcap.jpg',
      categories: ['Fittings & Couplers'],
      standards: 'IS:4984 | IS:7328',
      sizes: '50mm to 250mm OD',
      pressure: 'PN 6 to PN 16',
      desc: 'High-strength butt-fusion end caps designed to safely cap off pressurized HDPE lines in industrial and municipal supply runs.',
      details: {
        applications: 'Dead-end capping in water distribution lines, testing pressure lines, and sealing empty conduits.',
        jointing: 'Thermal butt-fusion welding or electrofusion coupling.',
        durability: 'Engineered to withstand the same pressure spikes and surge loads as the main HDPE pipeline.'
      }
    },
    {
      id: 'endcap-fitting-2',
      name: lang === 'HI' ? 'भारी-भरकम थ्रेडेड फिटिंग एंड कैप्स' : 'Heavy-Duty Threaded Fitting End Caps',
      image: '/images/pipe-fitting-endcap-2.jpg',
      categories: ['Fittings & Couplers'],
      standards: 'ISO 4427 | IS:4984',
      sizes: '32mm to 160mm OD',
      pressure: 'PN 10 to PN 16',
      desc: 'Secondary molded threaded termination caps providing a secure, leak-proof seal with high mechanical resistance against tensile loads.',
      details: {
        applications: 'Service termination points in agricultural spray setups, plumbing branches, and main terminal caps.',
        jointing: 'Female/Male BSP threads or compression lock mechanism.',
        durability: 'Constructed to resist abrasive soils, fertilizer chemicals, and mechanical vibration.'
      }
    },
    {
      id: 'display-board',
      name: lang === 'HI' ? 'पूर्ण उत्पाद रेंज प्रदर्शन बोर्ड' : 'Full Range Showcase Display Board',
      image: '/images/products-display-board.jpg',
      categories: ['HDPE Pipe (IS:4984:2018)', 'Fittings & Couplers'],
      standards: 'Full RAJSHREE Product Range',
      sizes: 'Comprehensive size showcase',
      pressure: 'Variegated Class Ratings',
      desc: 'A demonstration display board showcasing our wide catalog of PE, MDPE, PVC, end caps, tees, reducers, and custom couplers.',
      details: {
        applications: 'Comprehensive specification review for distribution agencies, trade exhibits, and contractor presentations.',
        jointing: 'Inter-compatible compression and fusion systems.',
        durability: 'Certified polymer molding ensuring long life and reliable thread tolerances.'
      }
    }
  ];

  const filteredProducts = selectedFilter === 'All'
    ? productsList
    : productsList.filter(p => p.categories.includes(selectedFilter));

  const infographic = [
    { 
      feature: lang === 'HI' ? 'उत्पाद जीवनकाल' : 'Product Lifespan', 
      hdpe: lang === 'HI' ? '50+ वर्ष (अत्यधिक स्थिर)' : '50+ Years (Highly Stable)', 
      metal: lang === 'HI' ? '15 - 20 वर्ष (जंग लगने का खतरा)' : '15 - 20 Years (Subject to Rust)' 
    },
    { 
      feature: lang === 'HI' ? 'जंग प्रतिरोध (Corrosion)' : 'Corrosion Resistance', 
      hdpe: lang === 'HI' ? '100% जंग और एसिड प्रतिरोधी' : '100% Rust-proof & Acid resistant', 
      metal: lang === 'HI' ? 'जंग और पपड़ी जमने का उच्च जोखिम' : 'High risk of rust and scaling' 
    },
    { 
      feature: lang === 'HI' ? 'जोड़ की मजबूती' : 'Joint Integrity', 
      hdpe: lang === 'HI' ? 'समरूप लीक-प्रूफ बट फ्यूजन वेल्ड' : 'Homogeneous Leak-proof Butt Fusion', 
      metal: lang === 'HI' ? 'हिलने पर यांत्रिक जोड़ों में रिसाव' : 'Mechanical couplers leak under shifts' 
    },
    { 
      feature: lang === 'HI' ? 'घर्षण और प्रवाह क्षमता' : 'Friction Loss / Flow', 
      hdpe: lang === 'HI' ? 'अति-चिकनी आंतरिक सतह (शून्य पपड़ी)' : 'Ultra-smooth interior (Zero scaling)', 
      metal: lang === 'HI' ? 'जंग के कारण उच्च प्रवाह घर्षण' : 'High friction due to rust buildup' 
    },
    { 
      feature: lang === 'HI' ? 'वजन और हैंडलिंग' : 'Handling Weight', 
      hdpe: lang === 'HI' ? 'हल्का और लचीला (बिछाना आसान)' : 'Lightweight & Flexible (Easy to lay)', 
      metal: lang === 'HI' ? 'अत्यंत भारी (क्रेन की आवश्यकता)' : 'Extremely heavy (Requires cranes)' 
    },
    { 
      feature: lang === 'HI' ? 'भूकंपीय लचीलापन' : 'Seismic Resilience', 
      hdpe: lang === 'HI' ? 'उच्च लोच (भूमि हलचल को अवशोषित करे)' : 'High elasticity (Absorbs ground shifts)', 
      metal: lang === 'HI' ? 'कठोर जोड़ जमीन खिसकने से टूट जाते हैं' : 'Rigid joints crack under ground shifts' 
    }
  ];

  return (
    <section id="products" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-base text-brand-blue dark:text-brand-lightblue font-bold tracking-wide uppercase">{t('prodTitle')}</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('prodSubtitle')}
          </p>
          <div className="mt-4 h-1.5 w-24 bg-brand-orange mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-500 dark:text-slate-400 font-light text-sm sm:text-base">
            {t('prodDesc')}
          </p>
        </div>

        {/* 360° Interactive Product View Showcase - Match Screenshot Exactly */}
        <div className="mb-16 bg-white dark:bg-slate-950 border border-slate-150 dark:border-slate-850 p-6 sm:p-10 rounded-3xl shadow-sm transition-colors duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Product Info & Actions (5cols) */}
            <div className="lg:col-span-5 text-left space-y-6">
              {/* Blue Badge with Sparkle */}
              <div className="flex items-center gap-1.5 bg-blue-50/80 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400 px-3 py-1 rounded-full text-xs font-bold border border-blue-200 dark:border-blue-800 w-fit">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t('viewerFeatured')}</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-white tracking-tight leading-tight">
                {t('viewerTitle')}
              </h3>
              
              <p className="text-slate-555 dark:text-slate-400 font-light text-xs sm:text-sm leading-relaxed">
                {t('viewerDesc')}
              </p>

              {/* Checkmarks list */}
              <div className="space-y-3 font-medium text-xs sm:text-sm text-slate-700 dark:text-slate-305">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>{lang === 'HI' ? '100% सममित एक्सट्रूज़न' : '100% Symmetrical Extrusions'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>{lang === 'HI' ? 'समान दीवार मोटाई प्रोफाइल' : 'Uniform wall thickness profiles'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>{lang === 'HI' ? 'उच्च यूवी प्रतिरोध और लचीलापन' : 'High UV resistance and flexibility'}</span>
                </div>
              </div>

              {/* Play/Pause & Reset Row */}
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => setIsAutoRotating(!isAutoRotating)}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm cursor-pointer shadow-md transition-all"
                >
                  {isAutoRotating ? (
                    <>
                      <Pause className="w-4 h-4" />
                      <span>{t('pauseRot')}</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      <span>{t('resumeRot')}</span>
                    </>
                  )}
                </button>
                <button
                  onClick={() => {
                    setPipeRotation(170);
                    setIsAutoRotating(false);
                  }}
                  className="flex items-center gap-2 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-350 font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>{t('resetAngle')}</span>
                </button>
              </div>
            </div>

            {/* Right Column: Grid and Rotating Image (7cols) */}
            <div className="lg:col-span-7 flex flex-col items-center">
              {/* Grid Box */}
              <div 
                className="w-full border border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-50/50 dark:bg-slate-950/50 flex flex-col items-center relative overflow-hidden bg-grid-pattern h-[340px] select-none transition-colors duration-300"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUpOrLeave}
                onMouseLeave={handleMouseUpOrLeave}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleMouseUpOrLeave}
              >
                {/* Top Left Indicator */}
                <div className="absolute top-4 left-4 bg-slate-800 text-white px-3 py-1.5 rounded-lg text-xs font-bold font-mono shadow-sm">
                  {lang === 'HI' ? 'रोटेशन' : 'Rotation'}: {Math.floor(pipeRotation)}°
                </div>

                {/* Interactive Drag Rotating Wrapper */}
                <div className="w-full flex-1 flex items-center justify-center cursor-grab active:cursor-grabbing relative" style={{ perspective: '1000px' }}>
                  <div 
                    style={{ 
                      transform: `rotateY(${pipeRotation}deg) rotateX(${tiltX}deg) scale(${scale})`,
                      transformStyle: 'preserve-3d',
                      transition: isDragging ? 'none' : 'transform 0.3s ease-out'
                    }}
                    className="w-72 h-44 rounded-2xl relative"
                  >
                    {/* Front Face */}
                    <div 
                      style={{ backfaceVisibility: 'hidden' }}
                      className="absolute inset-0 border-4 border-white dark:border-slate-850 rounded-2xl shadow-xl overflow-visible bg-slate-100 dark:bg-slate-900"
                    >
                      <img
                        src="/images/products-black-hdpe-pipes.jpg"
                        alt="Flagship Black HDPE Pipes Stack"
                        className="w-full h-full object-cover rounded-xl pointer-events-none"
                      />

                      {/* Green Overlap Badge */}
                      <div className="absolute bottom-[-15px] left-[-15px] bg-[#059669] text-white p-3.5 rounded-xl max-w-[200px] shadow-lg text-left text-xs z-20 pointer-events-none">
                        <p className="font-extrabold uppercase tracking-wider text-[10px]">{tooltip.title}</p>
                        <p className="text-[10px] font-light mt-1 leading-snug">{tooltip.desc}</p>
                      </div>
                    </div>

                    {/* Back Face (visible when rotated 90-270 degrees) */}
                    <div 
                      style={{ 
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                      }}
                      className="absolute inset-0 border-4 border-white dark:border-slate-850 rounded-2xl shadow-xl p-4 bg-slate-900 dark:bg-slate-950 text-white flex flex-col justify-between text-left"
                    >
                      <div>
                        <div className="flex justify-between items-center border-b border-slate-700 dark:border-slate-800 pb-1.5">
                          <span className="text-[10px] uppercase font-bold text-brand-orange">HDPE PE100 Profile</span>
                          <span className="text-[9px] text-slate-400 font-mono">IS:4984:2018</span>
                        </div>
                        <ul className="mt-3 space-y-1.5 text-[10px] font-light text-slate-300">
                          <li>• <strong>Concentricity:</strong> Meets DIN 8074 standards</li>
                          <li>• <strong>Ovality Tolerance:</strong> Less than 1.2%</li>
                          <li>• <strong>Melt Flow Index (MFI):</strong> 0.2 - 1.1 g/10 min</li>
                          <li>• <strong>Density:</strong> 940 - 960 kg/m³</li>
                        </ul>
                      </div>
                      <div className="bg-slate-800 dark:bg-slate-900 p-2 rounded-lg text-center text-[9px] font-bold text-brand-lightblue tracking-wider uppercase">
                        NABL LAB AUDITED &amp; CERTIFIED
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Instruction badge */}
                <div className="absolute bottom-4 bg-slate-800 text-white px-4 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-sm">
                  {t('dragInstruct')}
                </div>
              </div>

              {/* Angle Control slider beneath grid */}
              <div className="w-full bg-slate-50 dark:bg-slate-955 border border-slate-150 dark:border-slate-850 p-4 rounded-xl flex items-center justify-between gap-4 mt-4 transition-colors duration-300">
                <span className="text-[10px] sm:text-xs font-black text-slate-400 dark:text-slate-550 uppercase tracking-widest shrink-0">
                  {t('angleCtrl')}
                </span>
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={Math.floor(pipeRotation)}
                  onChange={(e) => {
                    setPipeRotation(parseInt(e.target.value));
                    setIsAutoRotating(false);
                  }}
                  className="flex-grow h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <span className="text-xs sm:text-sm font-extrabold text-slate-800 dark:text-white shrink-0 w-10 text-right">
                  {Math.floor(pipeRotation)}°
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-200 cursor-pointer ${
                selectedFilter === cat
                  ? 'bg-brand-blue border-brand-blue text-white shadow-md'
                  : 'bg-slate-50 dark:bg-slate-955 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {getTranslatedCategory(cat)}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-150 dark:border-slate-850 overflow-hidden flex flex-col justify-between hover:shadow-xl dark:hover:shadow-slate-950/50 transition-all duration-300 hover:-translate-y-1 relative group"
              >
                <div>
                  {/* Image */}
                  <div className="relative aspect-[4/3] bg-slate-100 dark:bg-slate-900 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border border-slate-200 dark:border-slate-800 text-brand-blue dark:text-brand-lightblue font-extrabold text-[10px] sm:text-xs px-2.5 py-1 rounded-lg">
                      {getTranslatedCategory(product.categories[0])}
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 text-left space-y-3">
                    <span className="text-[10px] sm:text-xs uppercase font-extrabold text-brand-orange bg-brand-orange/10 px-2.5 py-1 rounded-md border border-brand-orange/20">
                      {product.standards}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white tracking-tight leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 font-light text-xs sm:text-sm leading-relaxed">
                      {product.desc}
                    </p>

                    {/* Specs strip */}
                    <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-3.5 rounded-xl space-y-1.5">
                      <div className="flex justify-between text-xs font-light">
                        <span className="text-slate-400 dark:text-slate-500 font-medium">{lang === 'HI' ? 'व्यास सीमा (OD):' : 'Size Range:'}</span>
                        <span className="text-slate-800 dark:text-white font-bold">{product.sizes}</span>
                      </div>
                      <div className="flex justify-between text-xs font-light">
                        <span className="text-slate-400 dark:text-slate-500 font-medium">{lang === 'HI' ? 'दबाव सीमा (PN):' : 'Pressure Class:'}</span>
                        <span className="text-slate-800 dark:text-white font-bold">{product.pressure}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action Strip */}
                <div className="p-5 bg-slate-100/50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="flex items-center gap-1 text-brand-blue dark:text-brand-lightblue font-bold text-xs hover:text-brand-darkblue transition-colors cursor-pointer"
                  >
                    <Info className="w-4 h-4" />
                    <span>{t('viewSpecs')}</span>
                  </button>
                  <a
                    href="#contact"
                    className="group flex items-center gap-1 text-brand-orange font-bold text-xs hover:text-brand-orange/80 transition-colors"
                  >
                    <span>{t('reqQuote')}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* B2B Downloadable PDF Brochure Section (Full Width Banner) */}
        <div className="bg-slate-50 dark:bg-slate-955 border border-slate-150 dark:border-slate-850 p-6 sm:p-10 rounded-3xl text-left space-y-6 flex flex-col md:flex-row justify-between items-center shadow-sm relative overflow-hidden mb-12 transition-colors duration-300">
          <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-44 h-44 bg-brand-blue/5 rounded-full pointer-events-none"></div>
          
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2 text-brand-orange">
              <FileText className="w-5 h-5" />
              <span className="text-xs uppercase font-extrabold tracking-wider">{t('b2bTitle')}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 dark:text-white tracking-tight">
              {t('b2bHeading')}
            </h3>
            <p className="text-slate-655 dark:text-slate-400 font-light text-xs sm:text-sm leading-relaxed">
              {t('b2bDesc')}
            </p>
            
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-500 dark:text-slate-400 font-light">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-brand-blue" />
                <span>{t('b2bSiz')}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-brand-blue" />
                <span>{t('b2bSdr')}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-brand-blue" />
                <span>{t('b2bBis')}</span>
              </div>
            </div>
          </div>

          <div className="pt-6 md:pt-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={() => setIsBrochureOpen(true)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-darkblue text-white font-bold py-3.5 px-6 rounded-xl text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              <FileText className="w-4.5 h-4.5" />
              <span>{t('btnPreview')}</span>
            </button>
            <button
              onClick={() => setIsBrochureOpen(true)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 border border-slate-250 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-bold py-3.5 px-6 rounded-xl text-xs sm:text-sm shadow-md transition-all hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
            >
              <Download className="w-4.5 h-4.5" />
              <span>{t('btnDownload')}</span>
            </button>
          </div>
        </div>

        {/* Infographic: Why Choose HDPE Pipes (Comparison Chart) */}
        <div className="bg-slate-50 dark:bg-slate-955 border border-slate-150 dark:border-slate-850 rounded-3xl p-6 sm:p-10 text-left transition-colors duration-300">
          <div className="max-w-2xl mb-8">
            <span className="text-xs uppercase font-extrabold text-brand-blue dark:text-brand-lightblue tracking-wider">{t('infoTitle')}</span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 dark:text-white tracking-tight mt-1">
              {t('infoHeading')}
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-550 font-extrabold uppercase text-[10px] sm:text-xs">
                  <th className="py-4 pr-4">{t('infoCol1')}</th>
                  <th className="py-4 px-4 bg-brand-blue/5 text-brand-blue dark:text-brand-lightblue">{t('infoCol2')}</th>
                  <th className="py-4 pl-4">{t('infoCol3')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150 dark:divide-slate-850 font-light text-slate-700 dark:text-slate-350">
                {infographic.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/40 dark:hover:bg-slate-900/40 transition-colors">
                    <td className="py-4 pr-4 font-bold text-slate-800 dark:text-slate-200">{row.feature}</td>
                    <td className="py-4 px-4 bg-brand-blue/5 dark:bg-brand-blue/5 font-semibold text-slate-800 dark:text-white flex items-center gap-2">
                      <Check className="w-4.5 h-4.5 text-[#25D366] shrink-0" />
                      <span>{row.hdpe}</span>
                    </td>
                    <td className="py-4 pl-4">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-4.5 h-4.5 text-brand-orange shrink-0" />
                        <span>{row.metal}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Product Spec Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25 }}
              className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto overflow-x-hidden border border-slate-200 dark:border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-950 sticky top-0 z-10">
                <div className="text-left">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 dark:text-white tracking-tight">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-xs uppercase font-extrabold text-brand-blue tracking-wide mt-1">
                    {t('specSheet')}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-700 transition-colors cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-8 space-y-6 text-left">
                <div>
                  <p className="text-slate-600 dark:text-slate-400 font-light text-sm sm:text-base leading-relaxed">
                    {selectedProduct.desc}
                  </p>
                </div>

                {/* Specs Table */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl bg-slate-50 dark:bg-slate-955">
                  <div>
                    <p className="text-xs text-slate-450 font-bold uppercase tracking-wider">{t('applicableStds')}</p>
                    <p className="text-sm font-extrabold text-slate-800 dark:text-white mt-1">{selectedProduct.standards}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-450 font-bold uppercase tracking-wider">{t('sizeRange')}</p>
                    <p className="text-sm font-extrabold text-slate-800 dark:text-white mt-1">{selectedProduct.sizes}</p>
                  </div>
                  <div className="sm:col-span-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                    <p className="text-xs text-slate-450 font-bold uppercase tracking-wider">{t('pressureClass')}</p>
                    <p className="text-sm font-extrabold text-slate-800 dark:text-white mt-1">{selectedProduct.pressure}</p>
                  </div>
                </div>

                {/* Extended Details */}
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-slate-850 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">{t('techParams')}</h4>
                  
                  <div className="space-y-3">
                    <div>
                      <span className="font-bold text-slate-700 dark:text-slate-300 text-xs sm:text-sm block">{t('coreApp')}</span>
                      <span className="text-slate-550 dark:text-slate-400 font-light text-xs sm:text-sm mt-0.5 block">{selectedProduct.details.applications}</span>
                    </div>
                    <div>
                      <span className="font-bold text-slate-700 dark:text-slate-300 text-xs sm:text-sm block">{t('jointMethod')}</span>
                      <span className="text-slate-550 dark:text-slate-400 font-light text-xs sm:text-sm mt-0.5 block">{selectedProduct.details.jointing}</span>
                    </div>
                    <div>
                      <span className="font-bold text-slate-700 dark:text-slate-300 text-xs sm:text-sm block">{t('durSafety')}</span>
                      <span className="text-slate-550 dark:text-slate-400 font-light text-xs sm:text-sm mt-0.5 block">{selectedProduct.details.durability}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-55 dark:bg-slate-955 flex flex-col sm:flex-row justify-between items-center gap-4">
                <span className="text-xs text-slate-400 font-medium">Rajshree Technoplast Pvt Ltd</span>
                <a
                  href="#contact"
                  onClick={() => setSelectedProduct(null)}
                  className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange/90 text-white font-bold text-center px-6 py-3 rounded-xl transition-all duration-200"
                >
                  {t('callbackMsg')}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Piping Tools: Size & Weight Calculators */}
      <div className="mt-24 border-t border-slate-100 dark:border-slate-800 pt-16 text-left">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-xs font-extrabold uppercase text-brand-orange tracking-widest">
            {t('calcTitle')}
          </h3>
          <h4 className="text-2xl sm:text-3xl font-black text-slate-850 dark:text-white mt-1">
            {t('calcSubtitle')}
          </h4>
          <div className="mt-4 h-1 w-16 bg-brand-orange mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-12">
          {/* Sidebar Tabs */}
          <div className="md:col-span-4 bg-slate-50 dark:bg-slate-950 p-6 border-r border-slate-200 dark:border-slate-800 flex md:flex-col gap-3">
            <button
              onClick={() => setActiveCalcTab('size')}
              className={`flex-1 md:flex-initial text-left px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2.5 cursor-pointer ${
                activeCalcTab === 'size'
                  ? 'bg-brand-blue text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
              }`}
            >
              <Calculator className="w-4.5 h-4.5" />
              <span>{t('calcSizesTab')}</span>
            </button>
            <button
              onClick={() => setActiveCalcTab('weight')}
              className={`flex-1 md:flex-initial text-left px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2.5 cursor-pointer ${
                activeCalcTab === 'weight'
                  ? 'bg-brand-blue text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
              }`}
            >
              <Scale className="w-4.5 h-4.5" />
              <span>{t('calcWeightTab')}</span>
            </button>
          </div>

          {/* Calculator Body */}
          <div className="md:col-span-8 p-8 flex flex-col justify-between">
            {activeCalcTab === 'size' ? (
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                      {t('calcFlowRate')}
                    </label>
                    <input
                      type="number"
                      value={flowRate}
                      onChange={(e) => setFlowRate(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-250 dark:border-slate-800 rounded-xl px-4 py-3 text-sm font-extrabold focus:outline-none focus:border-brand-blue text-slate-800 dark:text-white"
                      placeholder="e.g. 15"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                      {t('calcVelocity')}
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={velocity}
                      onChange={(e) => setVelocity(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-250 dark:border-slate-800 rounded-xl px-4 py-3 text-sm font-extrabold focus:outline-none focus:border-brand-blue text-slate-800 dark:text-white"
                      placeholder="e.g. 1.5"
                    />
                  </div>
                </div>

                <button
                  onClick={handleCalculateSize}
                  className="bg-brand-orange hover:bg-brand-orange/90 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                >
                  {t('calcBtn')}
                </button>

                {calcResultOD && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-5 rounded-2xl bg-brand-blue/5 dark:bg-brand-blue/15 border border-brand-blue/30 mt-4 flex flex-col sm:flex-row justify-between gap-4"
                  >
                    <div>
                      <p className="text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">
                        {t('calcResultOD')}
                      </p>
                      <p className="text-xl font-black text-slate-800 dark:text-white mt-1">
                        {calcResultOD} mm OD
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">
                        {t('calcResultSDR')}
                      </p>
                      <p className="text-xl font-black text-[#00A86B] mt-1">
                        {calcResultWT} mm (SDR 11 PN10)
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            ) : (
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                      {t('calcOD')}
                    </label>
                    <select
                      value={weightOD}
                      onChange={(e) => setWeightOD(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-250 dark:border-slate-800 rounded-xl px-4 py-3 text-sm font-extrabold focus:outline-none focus:border-brand-blue text-slate-800 dark:text-white cursor-pointer"
                    >
                      {standardODs.map(od => (
                        <option key={od} value={od}>{od} mm</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                      {t('calcWT')}
                    </label>
                    <input
                      type="number"
                      value={weightWT}
                      onChange={(e) => setWeightWT(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-250 dark:border-slate-800 rounded-xl px-4 py-3 text-sm font-extrabold focus:outline-none focus:border-brand-blue text-slate-800 dark:text-white"
                      placeholder="e.g. 10"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                      {t('calcLength')}
                    </label>
                    <input
                      type="number"
                      value={weightLength}
                      onChange={(e) => setWeightLength(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-250 dark:border-slate-800 rounded-xl px-4 py-3 text-sm font-extrabold focus:outline-none focus:border-brand-blue text-slate-800 dark:text-white"
                      placeholder="e.g. 6"
                    />
                  </div>
                </div>

                <button
                  onClick={handleCalculateWeight}
                  className="bg-brand-orange hover:bg-brand-orange/90 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                >
                  {t('calcBtnWeight')}
                </button>

                {calcResultWeight && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-5 rounded-2xl bg-brand-orange/5 dark:bg-brand-orange/15 border border-brand-orange/30 mt-4 flex items-center justify-between"
                  >
                    <div>
                      <p className="text-xs text-slate-450 font-bold uppercase tracking-wider">
                        {t('calcResultWeight')}
                      </p>
                      <p className="text-2xl font-black text-brand-orange mt-1">
                        {calcResultWeight} kg
                      </p>
                    </div>
                    <span className="text-[10px] text-slate-400 font-light max-w-xs text-right">
                      *Estimated Weight calculated using standard HDPE polymer compound density (0.955 g/cm³).
                    </span>
                  </motion.div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 8. Product Comparison Tool */}
      <div className="mt-24 border-t border-slate-100 dark:border-slate-800 pt-16 text-left">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-xs font-extrabold uppercase text-brand-blue dark:text-brand-lightblue tracking-widest">
            {t('compareTitle')}
          </h3>
          <h4 className="text-2xl sm:text-3xl font-black text-slate-855 dark:text-white mt-1">
            {t('compareSubtitle')}
          </h4>
          <div className="mt-4 h-1 w-16 bg-brand-blue mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md p-6 sm:p-8">
          {/* Comparison Selector Dropdowns */}
          <div className="flex flex-col sm:flex-row gap-6 mb-8 justify-center items-center">
            <div className="w-full sm:w-64">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Pipe 1 Category</label>
              <select
                value={comparePipe1}
                onChange={(e) => setComparePipe1(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-250 dark:border-slate-800 rounded-xl px-4 py-3 text-sm font-extrabold text-slate-800 dark:text-white cursor-pointer focus:outline-none"
              >
                <option value="HDPE">HDPE Pipe (IS:4984)</option>
                <option value="PVC">PVC Pipe (IS:4985)</option>
                <option value="MDPE">MDPE Pipe (IS:14885)</option>
                <option value="DWC">DWC Corrugated Pipe</option>
              </select>
            </div>
            
            <div className="text-slate-400 font-bold text-xs uppercase select-none shrink-0 py-2 sm:py-0">VS</div>

            <div className="w-full sm:w-64">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Pipe 2 Category</label>
              <select
                value={comparePipe2}
                onChange={(e) => setComparePipe2(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-250 dark:border-slate-800 rounded-xl px-4 py-3 text-sm font-extrabold text-slate-800 dark:text-white cursor-pointer focus:outline-none"
              >
                <option value="HDPE">HDPE Pipe (IS:4984)</option>
                <option value="PVC">PVC Pipe (IS:4985)</option>
                <option value="MDPE">MDPE Pipe (IS:14885)</option>
                <option value="DWC">DWC Corrugated Pipe</option>
              </select>
            </div>
          </div>

          {/* Comparison Side-by-side Table */}
          <div className="overflow-x-auto border border-slate-200 dark:border-slate-805 rounded-2xl">
            <table className="w-full text-xs sm:text-sm text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                  <th className="p-4 w-1/3">Feature Specification</th>
                  <th className="p-4 w-1/3 text-brand-blue">{comparePipe1} Pipe</th>
                  <th className="p-4 w-1/3 text-brand-orange">{comparePipe2} Pipe</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150 dark:divide-slate-850">
                {/* Size Range */}
                <tr>
                  <td className="p-4 font-bold text-slate-600 dark:text-slate-400">Size Range (Diameter)</td>
                  <td className="p-4 font-medium text-slate-800 dark:text-white">
                    {comparePipe1 === 'HDPE' ? '20 mm - 710 mm' : comparePipe1 === 'PVC' ? '20 mm - 315 mm' : comparePipe1 === 'MDPE' ? '20 mm - 110 mm' : '75 mm - 300 mm'}
                  </td>
                  <td className="p-4 font-medium text-slate-800 dark:text-white">
                    {comparePipe2 === 'HDPE' ? '20 mm - 710 mm' : comparePipe2 === 'PVC' ? '20 mm - 315 mm' : comparePipe2 === 'MDPE' ? '20 mm - 110 mm' : '75 mm - 300 mm'}
                  </td>
                </tr>
                {/* Standards */}
                <tr className="bg-slate-50/20 dark:bg-slate-900/10">
                  <td className="p-4 font-bold text-slate-600 dark:text-slate-400">Indian Standard Code</td>
                  <td className="p-4 font-medium text-slate-800 dark:text-white">
                    {comparePipe1 === 'HDPE' ? 'IS:4984:2018 / IS:14333' : comparePipe1 === 'PVC' ? 'IS:4985 / IS:13592' : comparePipe1 === 'MDPE' ? 'IS:14885' : 'IS:16098 (Part 2)'}
                  </td>
                  <td className="p-4 font-medium text-slate-800 dark:text-white">
                    {comparePipe2 === 'HDPE' ? 'IS:4984:2018 / IS:14333' : comparePipe2 === 'PVC' ? 'IS:4985 / IS:13592' : comparePipe2 === 'MDPE' ? 'IS:14885' : 'IS:16098 (Part 2)'}
                  </td>
                </tr>
                {/* Pressure Ratings */}
                <tr>
                  <td className="p-4 font-bold text-slate-600 dark:text-slate-400">Pressure / Stiffness Rating</td>
                  <td className="p-4 font-medium text-slate-850 dark:text-white">
                    {comparePipe1 === 'HDPE' ? 'PN 2.5 to PN 16' : comparePipe1 === 'PVC' ? 'Class 1 to Class 5' : comparePipe1 === 'MDPE' ? 'Up to 6 Bar' : 'Ring Stiffness SN 4 / SN 8'}
                  </td>
                  <td className="p-4 font-medium text-slate-850 dark:text-white">
                    {comparePipe2 === 'HDPE' ? 'PN 2.5 to PN 16' : comparePipe2 === 'PVC' ? 'Class 1 to Class 5' : comparePipe2 === 'MDPE' ? 'Up to 6 Bar' : 'Ring Stiffness SN 4 / SN 8'}
                  </td>
                </tr>
                {/* Jointing Mode */}
                <tr className="bg-slate-50/20 dark:bg-slate-900/10">
                  <td className="p-4 font-bold text-slate-600 dark:text-slate-400">Jointing System</td>
                  <td className="p-4 text-slate-655 dark:text-slate-400">
                    {comparePipe1 === 'HDPE' ? 'Butt Fusion welding, EF Jointing, Compression fittings' : comparePipe1 === 'PVC' ? 'Solvent Cement Jointing, Rubber Ring-fit' : comparePipe1 === 'MDPE' ? 'Electrofusion Jointing' : 'Slip-on Coupler with Rubber Ring seal'}
                  </td>
                  <td className="p-4 text-slate-655 dark:text-slate-400">
                    {comparePipe2 === 'HDPE' ? 'Butt Fusion welding, EF Jointing, Compression fittings' : comparePipe2 === 'PVC' ? 'Solvent Cement Jointing, Rubber Ring-fit' : comparePipe2 === 'MDPE' ? 'Electrofusion Jointing' : 'Slip-on Coupler with Rubber Ring seal'}
                  </td>
                </tr>
                {/* Working Temperature */}
                <tr>
                  <td className="p-4 font-bold text-slate-600 dark:text-slate-400">Optimal Temperature Limits</td>
                  <td className="p-4 font-medium text-slate-800 dark:text-white">
                    {comparePipe1 === 'HDPE' ? '-40°C to +45°C' : comparePipe1 === 'PVC' ? '0°C to +60°C' : comparePipe1 === 'MDPE' ? '-30°C to +50°C' : '-20°C to +60°C'}
                  </td>
                  <td className="p-4 font-medium text-slate-800 dark:text-white">
                    {comparePipe2 === 'HDPE' ? '-40°C to +45°C' : comparePipe2 === 'PVC' ? '0°C to +60°C' : comparePipe2 === 'MDPE' ? '-30°C to +50°C' : '-20°C to +60°C'}
                  </td>
                </tr>
                {/* Main Application */}
                <tr className="bg-slate-50/20 dark:bg-slate-900/10">
                  <td className="p-4 font-bold text-slate-600 dark:text-slate-400">Primary Applications</td>
                  <td className="p-4 text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                    {comparePipe1 === 'HDPE' ? 'Potable water pipelines, industrial chemical flow, sewer/drain lines, irrigation grids' : comparePipe1 === 'PVC' ? 'Agricultural irrigation networks, borewell casing, electrical conduit, sanitary lines' : comparePipe1 === 'MDPE' ? 'PNG natural gas distribution mains, domestic service lines' : 'Highway sub-surface drainage, trenchless cable duct crossings, municipal sewer drains'}
                  </td>
                  <td className="p-4 text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                    {comparePipe2 === 'HDPE' ? 'Potable water pipelines, industrial chemical flow, sewer/drain lines, irrigation grids' : comparePipe2 === 'PVC' ? 'Agricultural irrigation networks, borewell casing, electrical conduit, sanitary lines' : comparePipe2 === 'MDPE' ? 'PNG natural gas distribution mains, domestic service lines' : 'Highway sub-surface drainage, trenchless cable duct crossings, municipal sewer drains'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Brochure / Profile Modal */}
      <AnimatePresence>
        {isBrochureOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsBrochureOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto border border-slate-200 dark:border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-slate-150 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-955 sticky top-0 z-10">
                <div className="text-left">
                  <h3 className="text-xl font-extrabold text-slate-855 dark:text-white">{t('btnPreview')}</h3>
                  <p className="text-xs text-slate-400 font-medium mt-1">Rajshree Technoplast Pvt. Ltd. Official Catalog</p>
                </div>
                <button
                  onClick={() => setIsBrochureOpen(false)}
                  className="p-1.5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-700 transition-colors cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Brochure Content */}
              <div className="p-8 space-y-6 text-left text-slate-655 dark:text-slate-355 text-xs sm:text-sm font-light leading-relaxed">
                <div>
                  <h4 className="text-base font-extrabold text-slate-855 dark:text-white border-l-4 border-brand-orange pl-3 mb-2">{lang === 'HI' ? 'कंपनी का संक्षिप्त विवरण' : 'Company Overview'}</h4>
                  <p>
                    Rajshree Technoplast Pvt Ltd is an ISO 9001:2015 certified manufacturer of premium HDPE and PVC piping systems. Since 2012, we have delivered engineering-grade piping solutions to government departments, irrigation developers, and industrial operations across India.
                  </p>
                </div>

                {/* Technical Table */}
                <div>
                  <h4 className="text-base font-extrabold text-slate-855 dark:text-white border-l-4 border-brand-orange pl-3 mb-3">{lang === 'HI' ? 'एचडीपीई दीवार मोटाई संदर्भ चार्ट (IS:4984)' : 'HDPE Wall Thickness Reference Table (IS:4984:2018)'}</h4>
                  <div className="overflow-x-auto border border-slate-200 dark:border-slate-805 rounded-2xl">
                    <table className="w-full text-xs text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                          <th className="p-3">Nominal OD (mm)</th>
                          <th className="p-3">SDR 17.6 (PN 6)</th>
                          <th className="p-3">SDR 11 (PN 10)</th>
                          <th className="p-3">SDR 9 (PN 16)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-150 dark:divide-slate-850 font-mono">
                        <tr>
                          <td className="p-3 font-bold text-slate-700 dark:text-slate-300">50 mm</td>
                          <td className="p-3">2.9 mm</td>
                          <td className="p-3">4.6 mm</td>
                          <td className="p-3">5.6 mm</td>
                        </tr>
                        <tr className="bg-slate-50/50 dark:bg-slate-900/50">
                          <td className="p-3 font-bold text-slate-700 dark:text-slate-300">90 mm</td>
                          <td className="p-3">5.2 mm</td>
                          <td className="p-3">8.2 mm</td>
                          <td className="p-3">10.1 mm</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-slate-700 dark:text-slate-300">110 mm</td>
                          <td className="p-3">6.3 mm</td>
                          <td className="p-3">10.0 mm</td>
                          <td className="p-3">12.3 mm</td>
                        </tr>
                        <tr className="bg-slate-50/50 dark:bg-slate-900/50">
                          <td className="p-3 font-bold text-slate-700 dark:text-slate-300">160 mm</td>
                          <td className="p-3">9.1 mm</td>
                          <td className="p-3">14.6 mm</td>
                          <td className="p-3">17.9 mm</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-slate-700 dark:text-slate-300">200 mm</td>
                          <td className="p-3">11.4 mm</td>
                          <td className="p-3">18.2 mm</td>
                          <td className="p-3">22.4 mm</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="text-base font-extrabold text-slate-855 dark:text-white border-l-4 border-brand-orange pl-3 mb-2">{lang === 'HI' ? 'गुणवत्ता मानक और जाँच' : 'Quality Standards'}</h4>
                  <p>
                    All finished batches are subjected to Melt Flow Index (MFI) checks, density tracking, Oxidation Induction Time testing, carbon black dispersion, and 100-hour hydrostatic pressure tests. Approved for RITES, SHRI RAM, and CIPET third-party audits.
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-slate-150 dark:border-slate-800 bg-slate-55 dark:bg-slate-950 flex flex-col sm:flex-row justify-between items-center gap-4">
                <button
                  onClick={() => window.print()}
                  className="w-full sm:w-auto bg-brand-blue hover:bg-brand-darkblue text-white font-bold py-3 px-6 rounded-xl text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>{t('btnDownload')}</span>
                </button>
                <button
                  onClick={() => setIsBrochureOpen(false)}
                  className="w-full sm:w-auto border border-slate-205 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-bold py-3 px-6 rounded-xl text-xs sm:text-sm hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
                >
                  {t('closePreview')}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
