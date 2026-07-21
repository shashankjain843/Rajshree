import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  EN: {
    // Navigation
    navHome: 'Home',
    navAbout: 'About Us',
    navMfg: 'Manufacturing',
    navProducts: 'Products',
    navQuality: 'Quality Control',
    navExhibitions: 'Exhibitions',
    navContact: 'Contact',
    getQuote: 'Request Quote',
    callSupport: 'Call +91-9829050790',
    changeLang: 'हिंदी में बदलें',

    // Hero Section
    heroTitle: 'Rajasthan\'s Leading Pipe Manufacturer',
    heroTagline: 'Engineering Superior Polyethylene & PVC Piping Solutions Since 2012',
    heroDesc: 'ISO 9001:2015 certified manufacturer of high-grade HDPE, MDPE, PVC, and DWC pipes engineered for potable water, irrigation, sewerage, and gas distribution networks.',
    ctaBrochure: 'Download Catalog',

    // Products Section
    prodTitle: 'Our Product Range',
    prodSubtitle: 'BIS Certified Industrial & Agricultural Pipes',
    prodDesc: 'Manufactured with 100% virgin resin conforming to Indian and International Standards (IS 4984, IS 14333, IS 4985, IS 14885).',
    specSheet: 'Technical Specification Sheet',
    viewSpecs: 'Technical Specs',
    reqQuote: 'Request Quote',
    closePreview: 'Close Catalog',
    btnPreview: 'Preview Catalog & Technical Tables',
    btnDownload: 'Download Product Catalogue (PDF)',

    // 360 Viewer
    viewerFeatured: 'Flagship Manufacturing Standard',
    viewerTitle: 'High-Density Polyethylene (HDPE) Pipes',
    viewerDesc: 'Engineered for extreme pressure applications, chemical transport, and municipal water mains. Precision-extruded in SDR 41 to SDR 9 classes.',
    pauseRot: 'Pause Rotation',
    resumeRot: 'Auto-Rotate',
    resetAngle: 'Reset View (170°)',
    dragInstruct: 'Click & Drag to Inspect Pipe Structure (360°)',
    angleCtrl: 'Interactive View Angle',
    ttStdsTitle: 'BIS Approved Quality',
    ttStdsDesc: 'Fully compliant with IS 4984:2018 & ISO 4427 guidelines.',
    ttWallTitle: 'Concentric Wall Uniformity',
    ttWallDesc: 'Ultrasonic wall thickness control prevents weak stress points.',
    ttResinTitle: '100% Virgin PE 100/PE 80',
    ttResinDesc: 'No recycled filler material ensures maximum tensile strength.',
    ttButtTitle: 'Homogeneous Fusion Joints',
    ttButtDesc: 'Seamless thermal butt-welding eliminates pipe separation risk.',

    // B2B Catalogue Strip
    b2bTitle: 'Technical Documentation & Data Sheets',
    b2bHeading: 'Comprehensive Engineering Catalog & Wall Thickness Reference',
    b2bDesc: 'Download our detailed technical catalog featuring wall thickness tables (SDR 9 to SDR 41), pressure rating charts (PN 2.5 to PN 16), chemical compatibility matrix, and installation guidelines.',
    b2bSiz: 'Complete Size Matrix (20mm - 1200mm)',
    b2bSdr: 'SDR & PN Pressure Class Tables',
    b2bBis: 'BIS & ISO Test Specifications',

    // Infographic
    infoTitle: 'Performance Comparison',
    infoHeading: 'Why HDPE Pipes Outperform Traditional Ductile & GI Pipes',
    infoCol1: 'Engineering Parameter',
    infoCol2: 'Rajshree HDPE Piping',
    infoCol3: 'Conventional GI / Concrete Pipes',

    // Modal
    applicableStds: 'Applicable Standards',
    sizeRange: 'Available Sizes (OD)',
    pressureClass: 'Pressure / SDR Class',
    techParams: 'Technical Specifications & Performance',
    coreApp: 'Core Applications',
    jointMethod: 'Jointing Methodology',
    durSafety: 'Durability & Chemical Resistance',
    callbackMsg: 'Request Price Quote for Pipe',

    // About Section
    aboutBadge: 'Manufacturing Facility Showcase',
    aboutHeading: 'Over a Decade of Excellence in Polymer Extrusion',
    aboutStoryTitle: 'Our Manufacturing Heritage',
    aboutStoryP1: 'Founded in 2012 in Jaipur, Rajasthan, Rajshree Technoplast Pvt. Ltd. has grown into one of North India\'s most trusted manufacturers of HDPE, MDPE, PVC, and DWC piping systems.',
    aboutStoryP2: 'Operating out of 75,000+ sq. ft. across two automated extrusion facilities in Bagru and Phagi (Jaipur), we produce over 1,250 Metric Tons of high-performance piping monthly for government water boards, irrigation contractors, and infrastructure developers.',
    aboutVideoDesc: 'Take a live 60-second tour of our automated production floor and NABL-equipped quality testing laboratory.',
    aboutTimelineTitle: 'Our Growth Journey',
    aboutTimelineSubtitle: 'A Decade of Infrastructure Excellence',
    aboutCapacityTitle: 'Monthly Manufacturing Capacity',

    // Sustainability & Safety
    susTitle: 'Sustainability & Compliance',
    susSubtitle: 'Responsible Manufacturing & HSE Protocols',
    susDesc: 'Committed to eco-friendly production, zero wastewater discharge, and strict compliance with workplace health and environmental standards.',
    susCompliance: 'RSPCB Compliance',
    susComplianceDesc: 'Full adherence to Rajasthan State Pollution Control Board environmental norms.',
    susEfficiency: 'Energy & Water Efficiency',
    susEfficiencyDesc: 'Closed-loop cooling towers recycle 98% of industrial process water.',
    susResin: 'Responsible Resin Loop',
    susResinDesc: 'Zero-waste polymer extrusion process minimizes environmental footprint.',
    susSafetyTitle: 'Safety First (HSE)',
    susSafetyDesc: 'Mandatory PPE protocols, regular operator training, and zero-accident target safety culture.',

    // Calculators & Comparison
    calcTitle: 'Interactive Piping Tools',
    calcSubtitle: 'Flow Rate & Pipe Weight Calculator',
    calcSizesTab: 'Pipe Size Calculator',
    calcWeightTab: 'Pipe Weight Calculator',
    calcFlowRate: 'Design Flow Rate (Liters / Second)',
    calcVelocity: 'Fluid Velocity (m/s) [Recommended: 1.0 - 2.0]',
    calcLength: 'Pipe Length (Meters)',
    calcOD: 'Outer Diameter (mm)',
    calcWT: 'Wall Thickness (mm)',
    calcBtn: 'Calculate Recommended Size',
    calcBtnWeight: 'Calculate Estimated Weight',
    calcResultOD: 'Recommended Outer Diameter:',
    calcResultSDR: 'Suggested Wall Thickness:',
    calcResultWeight: 'Estimated Pipe Weight:',
    compareTitle: 'Compare Piping Materials',
    compareSubtitle: 'Select 2 pipe categories to evaluate engineering properties',

    // Dealer Locator
    dealerTitle: 'Authorized Dealer Network',
    dealerSubtitle: 'Locate Your Nearest Rajshree Distributor',
    dealerSearchPlaceholder: 'Search by city, state or pincode...',
    dealerPhone: 'Contact:',
    dealerLocation: 'Location:',

    // Warranty Form
    warrantyTabQuote: 'Quotative Request',
    warrantyTabReg: 'Warranty Registration',
    warrantyInvoiceNum: 'Invoice Number',
    warrantyPurchaseDate: 'Date of Purchase',
    warrantyProductPurchased: 'Product Category Purchased',
    warrantyDocUpload: 'Invoice File Attachment (Mock)',
    warrantyBtn: 'Submit Warranty Registration',

    // Chatbot
    botGreeting: 'Hello! Welcome to Rajshree Technoplast FAQ portal. How can I assist you with pipe specifications today?',
    botOnline: 'Online • Instant Answers',
    botAssistant: 'Rajshree FAQ Assistant',
    botFaqsLabel: 'Frequently Asked Questions:',
    botSizesQ: 'What pipe sizes do you manufacture?',
    botCertsQ: 'Are your pipes ISI/BIS certified?',
    botLocQ: 'Where are your factories located?',
    botPriceQ: 'How do I request a wholesale price list?',
    botSizesA: 'We manufacture HDPE pipes from 20mm outer diameter up to 1200mm OD (pressure ratings PN 2.5 to PN 16, SDR 41 to SDR 9). We also manufacture PVC pipes (50mm to 315mm).',
    botCertsA: 'Yes, absolutely! All our pipes carry Bureau of Indian Standards ISI marking: IS:4984:2018 for water supply, IS:14333 for sewerage, and IS:4985 for PVC. Our plant is ISO 9001:2015 certified.',
    botLocA: 'We have two manufacturing units in Jaipur, Rajasthan: Unit I in RIICO Industrial Area, Bagru, and Unit II in Ratan Industrial Area, Phagi (Jaipur).',
    botPriceA: 'To get the latest commercial price list, technical charts, or dealer rates, please fill out the Inquiry form on the website or call our direct helpline +91-9829050790.'
  },
  HI: {
    // Navigation
    navHome: 'होम',
    navAbout: 'हमारे बारे में',
    navMfg: 'विनिर्माण (मैन्युफैक्चरिंग)',
    navProducts: 'उत्पाद (प्रॉडक्ट्स)',
    navQuality: 'गुणवत्ता नियंत्रण',
    navExhibitions: 'प्रदर्शनी',
    navContact: 'संपर्क करें',
    getQuote: 'कोटेशन का अनुरोध करें',
    callSupport: 'कॉल करें +91-9829050790',
    changeLang: 'Switch to English',

    // Hero Section
    heroTitle: 'राजस्थान की प्रमुख पाइप निर्माण इकाई',
    heroTagline: '2012 से पॉलीथीन और पीवीसी पाइपिंग समाधानों का भरोसेमंद निर्माण',
    heroDesc: 'पेयजल, सिंचाई, सीवरेज और गैस वितरण नेटवर्क के लिए आईएसओ 9001:2015 प्रमाणित उच्च श्रेणी के एचडीपीई, एमडीपीई, पीवीसी और डीडब्ल्यूसी पाइपों का निर्माण।',
    ctaBrochure: 'कैटलॉग डाउनलोड करें',

    // Products Section
    prodTitle: 'हमारी उत्पाद श्रृंखला',
    prodSubtitle: 'बीआईएस प्रमाणित औद्योगिक और कृषि पाइप्स',
    prodDesc: 'भारतीय और अंतर्राष्ट्रीय मानकों (IS 4984, IS 14333, IS 4985, IS 14885) के अनुरूप 100% वर्जिन रेजिन से निर्मित।',
    specSheet: 'तकनीकी विशिष्टता विवरण पत्र',
    viewSpecs: 'तकनीकी विवरण देखें',
    reqQuote: 'तुरंत कोटेशन प्राप्त करें',
    closePreview: 'कैटलॉग बंद करें',
    btnPreview: 'कैटलॉग और तकनीकी तालिकाएं देखें',
    btnDownload: 'उत्पाद कैटलॉग डाउनलोड करें (PDF)',

    // 360 Viewer
    viewerFeatured: 'प्रमुख विनिर्माण मानक',
    viewerTitle: 'हाई-डेंसिटी पॉलीथीन (HDPE) पाइप्स',
    viewerDesc: 'अत्यधिक दबाव अनुप्रयोगों, रासायनिक परिवहन और नगर निगम के पानी के मुख्य पाइपलाइनों के लिए डिज़ाइन किया गया। SDR 41 से SDR 9 श्रेणियों में उपलब्ध।',
    pauseRot: 'घूर्णन रोकें',
    resumeRot: 'ऑटो-रोटेट',
    resetAngle: 'दृश्य रीसेट करें (170°)',
    dragInstruct: '360° पाइप संरचना का निरीक्षण करने के लिए क्लिक करके खींचें',
    angleCtrl: 'इंटरएक्टिव दृश्य कोण',
    ttStdsTitle: 'बीआईएस स्वीकृत गुणवत्ता',
    ttStdsDesc: 'IS 4984:2018 और ISO 4427 दिशानिर्देशों का पूर्ण अनुपालन।',
    ttWallTitle: 'समान दीवार मोटाई',
    ttWallDesc: 'अल्ट्रासोनिक दीवार मोटाई नियंत्रण कमजोर तनाव बिंदुओं को रोकता है।',
    ttResinTitle: '100% वर्जिन PE 100/PE 80',
    ttResinDesc: 'बिना किसी रीसाइक्लिंग सामग्री के अधिकतम तन्यता शक्ति सुनिश्चित करता है।',
    ttButtTitle: 'समरूप फ्यूजन जोड़े',
    ttButtDesc: 'निर्बाध थर्मल बट-वेल्डिंग पाइप अलग होने के जोखिम को समाप्त करती है।',

    // B2B Catalogue Strip
    b2bTitle: 'तकनीकी दस्तावेज और डेटा शीट्स',
    b2bHeading: 'व्यापक इंजीनियरिंग कैटलॉग और दीवार मोटाई संदर्भ',
    b2bDesc: 'दीवार मोटाई तालिकाओं (SDR 9 से SDR 41), दबाव रेटिंग चार्ट (PN 2.5 से PN 16), रासायनिक संगतता मैट्रिक्स, और स्थापना दिशानिर्देशों वाला विस्तृत कैटलॉग डाउनलोड करें।',
    b2bSiz: 'संपूर्ण आकार मैट्रिक्स (20mm - 1200mm)',
    b2bSdr: 'SDR और PN दबाव वर्ग तालिकाएं',
    b2bBis: 'BIS और ISO परीक्षण विशिष्टताएं',

    // Infographic
    infoTitle: 'प्रदर्शन तुलना',
    infoHeading: 'एचडीपीई पाइप पारंपरिक लोहे और कंक्रीट पाइपों से बेहतर क्यों हैं',
    infoCol1: 'इंजीनियरिंग पैरामीटर',
    infoCol2: 'राजश्री एचडीपीई पाइपिंग',
    infoCol3: 'पारंपरिक जीआई / कंक्रीट पाइप्स',

    // Modal
    applicableStds: 'लागू मानक',
    sizeRange: 'उपलब्ध आकार (OD)',
    pressureClass: 'दबाव / SDR श्रेणी',
    techParams: 'तकनीकी विशेषताएं और प्रदर्शन',
    coreApp: 'मुख्य अनुप्रयोग',
    jointMethod: 'जोड़ने की विधि',
    durSafety: 'स्थायित्व और रासायनिक प्रतिरोध',
    callbackMsg: 'पाइप कोटेशन के लिए अनुरोध करें',

    // About Section
    aboutBadge: 'विनिर्माण सुविधा प्रदर्शनी',
    aboutHeading: 'पॉलिमर एक्सट्रूज़न में एक दशक से अधिक का उत्कृष्ट प्रदर्शन',
    aboutStoryTitle: 'हमारी विनिर्माण विरासत',
    aboutStoryP1: '2012 में जयपुर, राजस्थान में स्थापित, राजश्री टेक्नोप्लास्ट प्राइवेट लिमिटेड उत्तर भारत के सबसे भरोसेमंद एचडीपीई, एमडीपीई, पीवीसी और डीडब्ल्यूसी पाइपिंग निर्माताओं में से एक बन गया है।',
    aboutStoryP2: 'बगरू और फागी (जयपुर) में दो स्वचालित एक्सट्रूज़न सुविधाओं में 75,000+ वर्ग फीट में फैले हमारे प्लांट हर महीने 1,250 मीट्रिक टन से अधिक उच्च प्रदर्शन वाले पाइप का उत्पादन करते हैं।',
    aboutVideoDesc: 'हमारे स्वचालित उत्पादन फर्श और एनएबीएल लैब का लाइव 60-सेकंड का टूर देखें।',
    aboutTimelineTitle: 'हमारी यात्रा',
    aboutTimelineSubtitle: 'उत्कृष्ट बुनियादी ढांचे का एक दशक',
    aboutCapacityTitle: 'मासिक उत्पादन क्षमता',

    // Sustainability & Safety
    susTitle: 'सस्टेनेबिलिटी और अनुपालन',
    susSubtitle: 'जिम्मेदार विनिर्माण और एचएसई (HSE) प्रोटोकॉल',
    susDesc: 'हम पर्यावरण के अनुकूल उत्पादन, शून्य अपशिष्ट जल निर्वहन, और सख्त सुरक्षा मानकों के अनुपालन के लिए प्रतिबद्ध हैं।',
    susCompliance: 'RSPCB अनुपालन',
    susComplianceDesc: 'राजस्थान राज्य प्रदूषण नियंत्रण बोर्ड के दिशानिर्देशों का पूर्ण अनुपालन।',
    susEfficiency: 'ऊर्जा और जल दक्षता',
    susEfficiencyDesc: 'बंद लूप कूलिंग टॉवर प्रक्रिया जल के 98% हिस्से को रीसायकल करते हैं।',
    susResin: 'जिम्मेदार रीसायकल लूप',
    susResinDesc: 'शून्य-अपशिष्ट पॉलिमर विनिर्माण प्रक्रिया स्क्रैप पैरों के निशान को कम करती है।',
    susSafetyTitle: 'सुरक्षा सर्वोपरि (HSE)',
    susSafetyDesc: 'कर्मचारियों की सुरक्षा के लिए सुरक्षा उपकरणों (PPE) का अनिवार्य उपयोग और नियमित अभ्यास सुरक्षा सुनिश्चित करता है।',

    // Calculators & Comparison
    calcTitle: 'इंटरएक्टिव पाइपिंग टूल्स',
    calcSubtitle: 'प्रवाह दर और पाइप वजन कैलकुलेटर',
    calcSizesTab: 'पाइप आकार कैलकुलेटर',
    calcWeightTab: 'पाइप वजन कैलकुलेटर',
    calcFlowRate: 'डिजाइन प्रवाह दर (लीटर/सेकंड)',
    calcVelocity: 'तरल वेग (मीटर/सेकंड) [अनुशंसित: 1.0 - 2.0]',
    calcLength: 'पाइप की लंबाई (मीटर)',
    calcOD: 'बाहरी व्यास (mm)',
    calcWT: 'दीवार की मोटाई (mm)',
    calcBtn: 'अनुशंसित आकार की गणना करें',
    calcBtnWeight: 'अनुमानित वजन की गणना करें',
    calcResultOD: 'अनुशंसित बाहरी व्यास:',
    calcResultSDR: 'अनुशंसित दीवार मोटाई:',
    calcResultWeight: 'अनुमानित वजन:',
    compareTitle: 'पाइपलाइनों की तुलना करें',
    compareSubtitle: '2-3 पाइप प्रकारों का चयन करें और तुलना देखें',

    // Dealer Locator
    dealerTitle: 'अधिकृत डीलर नेटवर्क',
    dealerSubtitle: 'अपने नजदीकी राजश्री वितरक खोजें',
    dealerSearchPlaceholder: 'शहर, राज्य या क्षेत्र से खोजें…',
    dealerPhone: 'संपर्क:',
    dealerLocation: 'स्थान:',

    // Warranty Form
    warrantyTabQuote: 'कोटेशन अनुरोध',
    warrantyTabReg: 'वारंटी पंजीकरण',
    warrantyInvoiceNum: 'चालान संख्या (Invoice Number)',
    warrantyPurchaseDate: 'खरीद की तारीख',
    warrantyProductPurchased: 'खरीदे गए उत्पाद की श्रेणी',
    warrantyDocUpload: 'चालान फ़ाइल अनुलग्नक (पंजीकरण मॉक)',
    warrantyBtn: 'वारंटी पंजीकरण जमा करें',

    // Chatbot
    botGreeting: 'नमस्ते! राजश्री टेक्नोप्लास्ट FAQ पोर्टल में आपका स्वागत है। आज मैं आपकी क्या सहायता कर सकता हूँ?',
    botOnline: 'ऑनलाइन • तुरंत उत्तर',
    botAssistant: 'राजश्री FAQ सहायक',
    botFaqsLabel: 'अक्सर पूछे जाने वाले प्रश्न:',
    botSizesQ: 'आप किस आकार के पाइप बनाते हैं?',
    botCertsQ: 'क्या आपके पाइप आईएसआई/बीआईएस प्रमाणित हैं?',
    botLocQ: 'आपकी फैक्ट्रियां कहां स्थित हैं?',
    botPriceQ: 'मैं थोक मूल्य सूची के लिए कैसे अनुरोध करूं?',
    botSizesA: 'हम 20mm बाहरी व्यास से लेकर 1200mm तक के एचडीपीई पाइप बनाते हैं (दबाव रेटिंग PN 2.5 से PN 16, SDR 41 से SDR 9)। हम पीवीसी पाइप (50mm से 315mm) भी बनाते हैं।',
    botCertsA: 'हाँ, बिल्कुल! हमारे सभी पाइपों पर भारतीय मानक ब्यूरो का आईएसआई मार्क होता है: पानी की आपूर्ति के लिए IS:4984:2018, सीवरेज के लिए IS:14333, और पीवीसी के लिए IS:4985। हमारा उत्पादन आईएसओ 9001:2015 प्रमाणित है।',
    botLocA: 'जयपुर, राजस्थान में हमारी दो निर्माण इकाइयां हैं: यूनिट I रीको इंडस्ट्रियल एरिया, बगरू में, और यूनिट II रतन इंडस्ट्रियल एरिया, फागी (जयपुर) में।',
    botPriceA: 'नवीनतम वाणिज्यिक मूल्य सूची, तकनीकी चार्ट या डीलर दरों को प्राप्त करने के लिए कृपया वेबसाइट पर पूछताछ फॉर्म भरें, या हमारे सीधे हेल्पलाइन +91-9829050790 पर कॉल करें।'
  }
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('lang') || 'EN';
    }
    return 'EN';
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const t = (key) => {
    return translations[lang]?.[key] || key;
  };

  const toggleLang = () => {
    setLang((prev) => (prev === 'EN' ? 'HI' : 'EN'));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}
