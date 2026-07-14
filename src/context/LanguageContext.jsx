import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  EN: {
    // Navbar
    navHome: 'Home',
    navAbout: 'About',
    navTeam: 'Team',
    navMfg: 'Manufacturing',
    navProducts: 'Products',
    navQuality: 'Quality',
    navExhibitions: 'Exhibitions',
    navContact: 'Contact',
    callSupport: 'Call Support',
    getQuote: 'Get a Quote',
    changeLang: 'Change Language / भाषा बदलें',

    // Hero
    heroTitle: 'Rajshree Group / Technoplast',
    heroTagline: 'Leading Manufacturer of HDPE & PVC Pipes',
    heroDesc: 'ISO 9001:2015 Certified High-Performance Piping Systems conforming to BIS standards. Serving India\'s agriculture, sewer, and industrial sectors since 2012.',
    ctaContact: 'Contact Our Plants',
    ctaBrochure: 'Download Catalog',

    // About
    aboutTitle: 'About Us',
    aboutSubtitle: 'Factory Infrastructure & Technical Standing',
    aboutHeading: 'Pioneering Durable Piping Infrastructure',
    aboutPara1: 'Founded in 2012, Rajshree Technoplast Pvt. Ltd. (under the renowned Rajshree Group) has established itself as a premier manufacturer of high-density polyethylene (HDPE) and polyvinyl chloride (PVC) pipes. For over a decade, we have been a trusted partner in India\'s agricultural, urban sewerage, and industrial growth.',
    aboutPara2: 'With a commitment to zero-defect manufacturing, our state-of-the-art facilities in Bagru and Phagi, Jaipur, span over 75,000 square feet. Fully accredited with ISO 9001:2015 certification, our plant combines automated production systems with an in-house NABL-standards testing laboratory to guarantee peerless product standards.',
    check1: '100% Virgin High-Grade Polymer Resins',
    check2: 'Rigorous ISI compliance and BIS licensed certification',
    check3: 'Large warehousing capabilities for immediate bulk dispatches',
    aboutQuote: 'We do not just construct pipes; we engineer durable fluid highways that feed irrigation networks and cities across the nation.',
    statYears: 'Years of Experience',
    statCapacity: 'Production Capacity',
    statClients: 'Active Clients',
    statPlant: 'Plant Size',
    statYearsDesc: 'Over a decade of manufacturing excellence',
    statCapacityDesc: 'Tons produced annually across our units',
    statClientsDesc: 'Government agencies, contractors & dealers',
    statPlantDesc: 'State-of-the-art facilities in Rajasthan',
    membershipTitle: 'Memberships & Industry accreditations',
    awardsTitle: '🏆 Awards & Recognition (Editable Placeholder)',
    award1Title: 'Excellence in Manufacturing',
    award1Desc: 'Placeholder Award • 2025',
    award1Edit: '[Click to edit: Add description of your manufacturing excellence award here]',
    award2Title: 'Best Quality Award',
    award2Desc: 'Placeholder Award • 2024',
    award2Edit: '[Click to edit: Add description of your quality standard and project recognition award here]',

    // Team
    teamTitle: 'Our Team',
    teamSubtitle: 'Industrial Leadership & Technical Personnel',
    teamDesc: 'Our administrative executives and skilled plant operators bring decades of combined polymer extrusion experience to ensure zero-defect standards.',
    teamCaption: 'Rajshree Group senior executives and technical plant operations team.',

    // Manufacturing Process
    mfgTitle: 'Manufacturing Process',
    mfgSubtitle: '6-Step Precision Extrusion Timeline',
    mfgDesc: 'We follow a fully controlled thermomechanical sequence to extrude our high-density polyethylene pipelines.',
    step1Title: 'Raw Material Feeding',
    step1Desc: 'High-density polyethylene (PE 100/PE 80) virgin granules are audited for purity, blended with UV-resistant carbon black masterbatch, and fed into the extruder hopper.',
    step2Title: 'Precision Extrusion',
    step2Desc: 'The polymer blend is melted under strict thermodynamic controls and forced through a precision die head to form uniform pipe walls.',
    step3Title: 'Process Control',
    step3Desc: 'Technicians utilize the centralized control panel to monitor extrusion speed, vacuum calibration pressure, and water cooling temperatures to eliminate dimensional drift.',
    step4Title: 'Vacuum Cooling & Shaping',
    step4Desc: 'The pipe passes through automated vacuum sizing sleeves and progressive water spray cooling chambers to solidify its perfect circular shape.',
    step5Title: 'Cutting & Handling',
    step5Desc: 'Fully automated planetary cutting units slice the pipe to required standard lengths. Plant workers stack and sort them in specialized handling racks.',
    step6Title: 'Measurement & Marking',
    step6Desc: 'Quality control inspectors audit wall thickness tolerances and outer diameters, applying indelible laser marking showing BIS codes, batch numbers, and the RAJSHREE trademark.',

    // Products
    prodTitle: 'Our Products',
    prodSubtitle: 'High-Performance Piping & Fittings',
    prodDesc: 'Manufactured from high-grade polymer resins under strict dimensional checks. Fully compliant with Bureau of Indian Standards (BIS) specifications.',
    viewSpecs: 'View Specifications',
    reqQuote: 'Request Quote',
    specSheet: 'Technical Spec Sheet',
    closePreview: 'Close Preview',
    callbackMsg: 'Request Callback for this Product',
    applicableStds: 'Applicable Standards',
    sizeRange: 'Size Range (Outer Diameter)',
    pressureClass: 'Pressure / Class Rating',
    techParams: 'Technical Parameters',
    coreApp: 'Core Applications:',
    jointMethod: 'Jointing Methodologies:',
    durSafety: 'Durability & Safety:',
    
    // 360 Viewer
    viewerFeatured: 'FEATURED SHOWCASE',
    viewerTitle: '360° Interactive HDPE Pipe Viewer',
    viewerDesc: 'Interact with our flagship Black HDPE Pipe (SDR-11 / PN-16) directly. Drag, rotate, or slide to inspect key parameters, wall profile symmetry, and co-extruded markings from any perspective.',
    dragInstruct: 'Drag horizontally to spin pipe',
    angleCtrl: 'Angle Control:',
    pauseRot: 'Pause Auto-Rotation',
    resumeRot: 'Resume Auto-Rotation',
    resetAngle: 'Reset Angle',
    
    // Tooltips
    ttStdsTitle: 'ISI MARK MARKINGS',
    ttStdsDesc: 'Indelible co-extruded stripe coding showing standard ISI IS:4984 markings.',
    ttWallTitle: 'WALL SYMMETRY',
    ttWallDesc: 'Strict thickness control guarantees consistent pressure handling and avoids burst risk.',
    ttResinTitle: 'VIRGIN PE100 RESIN',
    ttResinDesc: 'Conducted in-house testing ensures premium raw material thermodynamic stability.',
    ttButtTitle: 'BUTT-FUSION READY',
    ttButtDesc: 'Smooth jointing surface guarantees homogeneous, leak-proof thermal connections.',

    // Brochure
    b2bTitle: 'B2B Distributor Assets',
    b2bHeading: 'Download Official Company Catalog & Profile (PDF)',
    b2bDesc: 'Access our engineering documentation, complete wall-thickness tables across all SDR classifications (SDR 9, SDR 11, SDR 17.6), pressure ratings, and certified BIS code certifications in one downloadable PDF dossier.',
    b2bSiz: 'Sizes (20mm to 1200mm)',
    b2bSdr: 'SDR & Pressure Charts',
    b2bBis: 'BIS / ISO Certifications',
    btnPreview: 'Preview Technical Sheets',
    btnDownload: 'Download Brochure (PDF)',
    
    // Infographic
    infoTitle: 'Material Comparison',
    infoHeading: 'Why Choose HDPE Pipes over Conventional Pipelines?',
    infoCol1: 'Operational Feature',
    infoCol2: 'RAJSHREE HDPE PIPES',
    infoCol3: 'CONVENTIONAL METAL / CONCRETE',

    // Quality Control
    qcTitle: 'Quality Control',
    qcSubtitle: 'NABL-Accredited Lab & Multi-Stage Auditing',
    qcDesc: 'We enforce strict quality control at every phase — from auditing raw polymer resins to conducting hydrostatic stress tests on finished pipes.',
    qcHeading: 'Third-Party Approved In-House Quality Assurance',
    qcPara1: 'Rajshree Group / Technoplast operates a fully equipped, modern testing laboratory complying with National Accreditation Board for Testing and Calibration Laboratories (NABL) guidelines.',
    qcPara2: 'Our pipes are regularly audited and cleared by leading third-party inspection agencies including RITES, SHRI RAM Institute, and CIPET, satisfying strict government project mandates.',
    qcTest1Title: 'Oxidation Induction Test',
    qcTest1Desc: 'Conducted in our lab to test thermodynamic stability and polymer aging characteristics, ensuring a 50+ year lifespan.',
    qcTest2Title: 'Tensile & Elongation Audits',
    qcTest2Desc: 'Verifies the physical yield stress, elasticity, and elongation break points under high-pressure conditions.',
    qcTest3Title: 'Hydrostatic Pressure Test',
    qcTest3Desc: 'Pipes are subjected to high internal pressures for extended durations to verify hoop stress resistance.',
    qcTest4Title: 'Dimensional & Ovality Check',
    qcTest4Desc: 'Continuous caliper audits on wall thickness, concentricity, and outer diameter metrics at regular extrusion intervals.',
    qcLabLabel: 'In-House Testing Facility Unit I',
    qcLabCaption: 'Oxidation Induction Tester verifying thermal endurance.',

    // Logistics
    logTitle: 'Logistics & Dispatch',
    logSubtitle: 'Nationwide Distribution Yard & Logistics Fleet',
    logDesc: 'Equipped with a spacious dispatch yard and reliable transit network to ensure bulk delivery for infrastructure projects.',
    logHeading: 'Streamlined Heavy-Duty Dispatch Operations',
    logPara1: 'Our dispatch facilities in Bagru Industrial Area are engineered to handle continuous multi-ton outbound shipments. Utilizing high-capacity loading crane corridors and automated flatbed tie-down docks, we guarantee safe handling of pipes from size 20mm up to 1200mm OD.',
    logPara2: 'With our strategic highway connectivity in Jaipur, Rajasthan, we coordinate direct, GPS-tracked transportation shipments to projects in UP, Madhya Pradesh, Gujarat, Haryana, NCR, and PAN-India locations.',
    logPoint1Title: '75,000+ Sq. Ft. Logistics Yard',
    logPoint1Desc: 'Dedicated stacking arrays partitioned by pressure rating (SDR) and diameter class for swift material picking.',
    logPoint2Title: 'Flexible Coiling & Packaging',
    logPoint2Desc: 'Pipes up to 110mm OD are neatly packed in high-tensile custom coiling drums to save transport volume and cost.',
    logPoint3Title: 'Priority Transit Networks',
    logPoint3Desc: 'Contractual partnerships with heavy-duty carriers ensure reliable transport times even during monsoons.',
    logLabel: 'Loading and Dispatch Operations Jaipur Yard',
    logCaption: 'Heavy-duty transport flatbeds being stacked and prepared for PAN-India distribution.',

    // Exhibitions
    exhTitle: 'Trade Shows & Exhibitions',
    exhSubtitle: 'RAJPLASTE Exhibitions & Client Meets',
    exhDesc: 'We actively showcase our latest piping technologies, BIS-compliant designs, and custom flange weld options at regional and national industrial trade shows.',
    exhEvent1Title: 'RAJPLASTE Exhibition Jaipur',
    exhEvent1Desc: 'Showcasing our 1200mm large-diameter water mains and double wall corrugated duct options to contractors and utility planners.',
    exhEvent2Title: 'B2B Client Discussion Meet',
    exhEvent2Desc: 'Engaging with government engineers to showcase structural HDPE standards for under-road culverts.',
    exhEvent3Title: 'Industry Stakeholder Panel',
    exhEvent3Desc: 'Representing polymer extrusion innovation and ISO standards at local plastic association circles.',
    exhEvent4Title: 'Live Welding Demos',
    exhEvent4Desc: 'Performing thermal butt fusion welding demos for rural water supply supervisors.',
    exhEvent5Title: 'Exhibition Stall Showcase',
    exhEvent5Desc: 'Displaying our comprehensive range of tees, bends, couplers, and heavy-duty threaded fittings.',

    // Contact
    conTitle: 'Contact Us',
    conSubtitle: 'Connect with Rajshree Sales & Plant Units',
    conDesc: 'For dealer pricing, custom flanged layouts, or government project tenders, submit the form below. Our response team will revert within 24 business hours.',
    conOffice: 'Registered Office & Plant Unit I',
    conOfficeAddr: 'F-105, RIICO Industrial Area, Bagru (Extension), Jaipur, Rajasthan - 303007',
    conPlant: 'Manufacturing Plant Unit II',
    conPlantAddr: 'Ratan Industrial Area, Harsuliya, Phagi, Jaipur, Rajasthan - 303005',
    conEmail: 'Email Address',
    conPhone: 'Helpline Number',
    formHeading: 'Request a Quote / Technical consultation',
    formName: 'Full Name',
    formPhone: 'Contact Number',
    formEmail: 'Email Address',
    formSubject: 'Subject / Tenders / Bulk Orders',
    formMsg: 'Message / Pipe Specifications & Quantity',
    btnSending: 'Sending Inquiry...',
    btnSent: 'Inquiry Sent Successfully!',
    btnSendMsg: 'Send Inquiry Message',

    // Footer
    footDesc: 'Established in 2012, Rajshree Technoplast is a leading manufacturer of premium HDPE and PVC piping systems. We power municipalities, industrial networks, and agricultural layouts across India.',
    footTagline: '"Empowering Progress Through Liquid Network"',
    footQuickLinks: 'QUICK LINKS',
    footHomeOverview: 'Home Overview',
    footAboutRajshree: 'About Rajshree Group',
    footMfgProcess: 'Manufacturing Process',
    footProductsCatalog: 'Products Catalog',
    footQualityCerts: 'Quality & Certifications',
    footLogisticsDispatch: 'Logistics & Dispatch',
    footExhibitionsEvents: 'Exhibitions & Events',
    footGetInTouch: 'GET IN TOUCH',
    footRegdOffice: 'REGD OFFICE',
    footRegdOfficeAddr: 'Hanuman Vatika-I, Near 200FT Chauraha, Ajmer Road, Jaipur-302021, Rajasthan',
    footRights: 'All rights reserved.',

    // Chatbot
    botGreeting: 'Namaste! Welcome to Rajshree Technoplast FAQ Portal. How can I help you today?',
    botOnline: 'Online • Responds Instantly',
    botAssistant: 'Rajshree FAQ Assistant',
    botFaqsLabel: 'Frequently Asked Questions:',
    botSizesQ: 'What pipe sizes do you manufacture?',
    botCertsQ: 'Are your pipes ISI/BIS certified?',
    botLocQ: 'Where are your factories located?',
    botPriceQ: 'How do I request a bulk price list?',
    botSizesA: 'We manufacture High-Density Polyethylene (HDPE) pipes from 20mm OD to 1200mm OD (Pressure ratings PN 2.5 to PN 16, SDR 41 to SDR 9). We also manufacture blue MDPE service lines and PVC pipes (50mm to 315mm OD).',
    botCertsA: 'Yes, absolutely! All our pipes carry the Bureau of Indian Standards (ISI mark): IS:4984:2018 (HDPE Water Supply), IS:14333 (HDPE Sewerage), and IS:4985 (PVC). Our production is ISO 9001:2015 accredited.',
    botLocA: 'We have two fully integrated production units in Jaipur, Rajasthan: Unit I at RIICO Industrial Area, Bagru (Jaipur), and Unit II at Ratan Industrial Area, Harsuliya, Phagi (Jaipur).',
    botPriceA: 'To get our latest commercial price lists, dimensional charts, or dealer pricing, please submit the inquiry form on our webpage, or call our direct helpline at +91-9829050790.'
  },
  HI: {
    // Navbar
    navHome: 'होम',
    navAbout: 'हमारे बारे में',
    navTeam: 'हमारी टीम',
    navMfg: 'उत्पादन प्रक्रिया',
    navProducts: 'उत्पाद',
    navQuality: 'गुणवत्ता नियंत्रण',
    navExhibitions: 'प्रदर्शनियां',
    navContact: 'संपर्क करें',
    callSupport: 'कॉल सपोर्ट',
    getQuote: 'कोटेशन लें',
    changeLang: 'भाषा बदलें / Change Language',

    // Hero
    heroTitle: 'राजश्री ग्रुप / टेक्नोप्लास्ट',
    heroTagline: 'एचडीपीई (HDPE) और पीवीसी (PVC) पाइप्स के अग्रणी निर्माता',
    heroDesc: 'बीआईएस (BIS) मानकों के अनुरूप आईएसओ 9001:2015 प्रमाणित उच्च प्रदर्शन वाली पाइपिंग प्रणाली। 2012 से भारत के कृषि, सीवर और औद्योगिक क्षेत्रों की सेवा में समर्पित।',
    ctaContact: 'हमारे प्लांट से संपर्क करें',
    ctaBrochure: 'कैटलॉग डाउनलोड करें',

    // About
    aboutTitle: 'हमारे बारे में',
    aboutSubtitle: 'फैक्ट्री इन्फ्रास्ट्रक्चर और तकनीकी स्थिति',
    aboutHeading: 'टिकाऊ पाइपिंग इन्फ्रास्ट्रक्चर का निर्माण',
    aboutPara1: '2012 में स्थापित, राजश्री टेक्नोप्लास्ट प्राइवेट लिमिटेड (प्रसिद्ध राजश्री ग्रुप के अंतर्गत) ने हाई-डेंसिटी पॉलीथीन (HDPE) और पॉलीविनाइल क्लोराइड (PVC) पाइप्स के एक अग्रणी निर्माता के रूप में अपनी पहचान बनाई है। एक दशक से अधिक समय से, हम भारत के कृषि, शहरी सीवरेज और औद्योगिक विकास में एक विश्वसनीय भागीदार रहे हैं।',
    aboutPara2: 'शून्य-दोष उत्पादन के प्रति प्रतिबद्धता के साथ, बगरू और फागी, जयपुर में हमारी अत्याधुनिक निर्माण इकाइयां 75,000 वर्ग फुट से अधिक क्षेत्र में फैली हुई हैं। आईएसओ 9001:2015 प्रमाणन के साथ, हमारा प्लांट बेजोड़ उत्पाद मानकों की गारंटी देने के लिए स्वचालित उत्पादन प्रणालियों और एक इन-हाउस एनएबीएल-मानक परीक्षण प्रयोगशाला को जोड़ता है।',
    check1: '100% वर्जिन हाई-ग्रेड पॉलीमर रेजिन्स',
    check2: 'सख्त आईएसआई अनुपालन और बीआईएस लाइसेंस प्राप्त प्रमाणन',
    check3: 'तत्काल थोक आपूर्ति के लिए विशाल भंडारण क्षमता',
    aboutQuote: 'हम केवल पाइप नहीं बनाते हैं; हम टिकाऊ तरल राजमार्गों का निर्माण करते हैं जो देश भर में सिंचाई नेटवर्क और शहरों को सींचते हैं।',
    statYears: 'वर्षों का अनुभव',
    statCapacity: 'उत्पादन क्षमता',
    statClients: 'सक्रिय ग्राहक',
    statPlant: 'प्लांट का आकार',
    statYearsDesc: 'विनिर्माण उत्कृष्टता का एक दशक से अधिक',
    statCapacityDesc: 'हमारी इकाइयों में सालाना उत्पादित टन क्षमता',
    statClientsDesc: 'सरकारी एजेंसियां, ठेकेदार और डीलर',
    statPlantDesc: 'राजस्थान में अत्याधुनिक विनिर्माण सुविधाएं',
    membershipTitle: 'सदस्यता और औद्योगिक मान्यताएं',
    awardsTitle: '🏆 पुरस्कार और मान्यता (संपादन योग्य)',
    award1Title: 'विनिर्माण में उत्कृष्टता',
    award1Desc: 'प्लेसहोल्डर पुरस्कार • 2025',
    award1Edit: '[संपादन करने के लिए क्लिक करें: यहां अपने विनिर्माण उत्कृष्टता पुरस्कार का विवरण जोड़ें]',
    award2Title: 'सर्वश्रेष्ठ गुणवत्ता पुरस्कार',
    award2Desc: 'प्लेसहोल्डर पुरस्कार • 2024',
    award2Edit: '[संपादन करने के लिए क्लिक करें: यहां अपने गुणवत्ता मानक और परियोजना मान्यता पुरस्कार का विवरण जोड़ें]',

    // Team
    teamTitle: 'हमारी टीम',
    teamSubtitle: 'औद्योगिक नेतृत्व और तकनीकी कर्मचारी',
    teamDesc: 'हमारे प्रशासनिक अधिकारी और कुशल प्लांट ऑपरेटर शून्य-दोष मानकों को सुनिश्चित करने के लिए पॉलीमर एक्सट्रूज़न में दशकों का अनुभव लाते हैं।',
    teamCaption: 'राजश्री ग्रुप के वरिष्ठ अधिकारी और तकनीकी प्लांट संचालन टीम।',

    // Manufacturing Process
    mfgTitle: 'उत्पादन प्रक्रिया',
    mfgSubtitle: '6-चरणीय सटीक एक्सट्रूज़न समयरेखा',
    mfgDesc: 'हम अपने हाई-डेंसिटी पॉलीथीन पाइपलाइनों के निर्माण के लिए पूरी तरह से नियंत्रित थर्मोमैकेनिकल अनुक्रम का पालन करते हैं।',
    step1Title: 'कच्चे माल की फीडिंग',
    step1Desc: 'हाई-डेंसिटी पॉलीथीन (PE 100/PE 80) के वर्जिन दानों की शुद्धता जांची जाती है, उन्हें यूवी-प्रतिरोधी कार्बन ब्लैक मास्टरबैच के साथ मिश्रित किया जाता है और एक्सट्रूडर हॉपर में डाला जाता है।',
    step2Title: 'सटीक एक्सट्रूज़न',
    step2Desc: 'पॉलीमर मिश्रण को सख्त थर्मोडायनामिक नियंत्रण में पिघलाया जाता है और समान पाइप दीवारें बनाने के लिए एक सटीक डाई हेड के माध्यम से निकाला जाता है।',
    step3Title: 'प्रक्रिया नियंत्रण',
    step3Desc: 'तकनीशियन विनिर्माण गति, वैक्यूम अंशांकन दबाव, और जल शीतलन तापमान की निगरानी के लिए केंद्रीकृत नियंत्रण कक्ष का उपयोग करते हैं ताकि आयामी विचलन न हो।',
    step4Title: 'वैक्यूम कूलिंग और शेपिंग',
    step4Desc: 'पाइप अपने सटीक गोल आकार को ठोस बनाने के लिए स्वचालित वैक्यूम साइजिंग स्लीव्स और क्रमिक वॉटर स्प्रे कूलिंग चैंबर से होकर गुजरता है।',
    step5Title: 'कटिंग और हैंडलिंग',
    step5Desc: 'पूरी तरह से स्वचालित प्लैनेटरी कटिंग इकाइयां पाइप को आवश्यक मानक लंबाई में काटती हैं। प्लांट कर्मचारी उन्हें विशिष्ट हैंडलिंग रैक में व्यवस्थित करते हैं।',
    step6Title: 'माप और मार्किंग',
    step6Desc: 'गुणवत्ता नियंत्रण निरीक्षक दीवार की मोटाई और बाहरी व्यास की जांच करते हैं, और बीआईएस कोड, बैच संख्या और राजश्री ट्रेडमार्क दिखाते हुए लेजर मार्किंग लगाते हैं।',

    // Products
    prodTitle: 'हमारे उत्पाद',
    prodSubtitle: 'उच्च प्रदर्शन वाले पाइप और फिटिंग्स',
    prodDesc: 'सख्त आयामी जांच के तहत उच्च श्रेणी के पॉलीमर रेजिन्स से निर्मित। भारतीय मानक ब्यूरो (BIS) के विनिर्देशों के पूर्णतः अनुरूप।',
    viewSpecs: 'विवरण देखें',
    reqQuote: 'कोटेशन अनुरोध',
    specSheet: 'तकनीकी विशिष्टता पत्रक',
    closePreview: 'पूर्वावलोकन बंद करें',
    callbackMsg: 'इस उत्पाद के लिए कॉल बैक का अनुरोध करें',
    applicableStds: 'लागू मानक',
    sizeRange: 'आकार सीमा (बाहरी व्यास)',
    pressureClass: 'दबाव / वर्ग रेटिंग',
    techParams: 'तकनीकी मापदंड',
    coreApp: 'मुख्य अनुप्रयोग:',
    jointMethod: 'जोड़ने के तरीके:',
    durSafety: 'सहनशीलता और सुरक्षा:',
    
    // 360 Viewer
    viewerFeatured: 'विशेष प्रदर्शन',
    viewerTitle: '360° इंटरएक्टिव एचडीपीई पाइप व्यूअर',
    viewerDesc: 'हमारे प्रमुख ब्लैक एचडीपीई पाइप (SDR-11 / PN-16) के साथ सीधे जुड़ें। किसी भी कोण से दीवार प्रोफाइल समरूपता, और मार्किंग का निरीक्षण करने के लिए ड्रैग करें, घुमाएं या स्लाइड करें।',
    dragInstruct: 'पाइप को घुमाने के लिए क्षैतिज रूप से ड्रैग करें',
    angleCtrl: 'कोण नियंत्रण:',
    pauseRot: 'ऑटो-रोटेशन रोकें',
    resumeRot: 'ऑटो-रोटेशन शुरू करें',
    resetAngle: 'कोण रीसेट करें',
    
    // Tooltips
    ttStdsTitle: 'आईएसआई मार्क मार्किंग',
    ttStdsDesc: 'मानक आईएसआई आईएस: 4984 मार्किंग दिखाने वाली अमिट को-एक्सट्रूडेड पट्टी कोडिंग।',
    ttWallTitle: 'दीवार समरूपता',
    ttWallDesc: 'सख्त मोटाई नियंत्रण लगातार दबाव प्रबंधन की गारंटी देता है और फटने के जोखिम से बचाता है।',
    ttResinTitle: 'वर्जिन PE100 सामग्री',
    ttResinDesc: 'इन-हाउस परीक्षण कच्चे माल की उत्कृष्ट थर्मोडायनामिक स्थिरता सुनिश्चित करता है।',
    ttButtTitle: 'बट-फ्यूजन के लिए तैयार',
    ttButtDesc: 'चिकनी जोड़ सतह रिसाव-मुक्त थर्मल कनेक्शन की गारंटी देती है।',

    // Brochure
    b2bTitle: 'बी2बी वितरक सामग्री',
    b2bHeading: 'आधिकारिक कंपनी कैटलॉग और प्रोफाइल (PDF) डाउनलोड करें',
    b2bDesc: 'एक ही डाउनलोड करने योग्य पीडीएफ डोजियर में हमारे इंजीनियरिंग दस्तावेज, सभी एसडीआर वर्गीकरण (SDR 9, SDR 11, SDR 17.6) में दीवार की मोटाई की तालिकाएं और बीआईएस कोड प्रमाणन प्राप्त करें।',
    b2bSiz: 'आकार (20mm से 1200mm)',
    b2bSdr: 'एसडीआर और दबाव चार्ट',
    b2bBis: 'बीआईएस / आईएसओ प्रमाणन',
    btnPreview: 'तकनीकी शीट पूर्वावलोकन',
    btnDownload: 'कैटलॉग डाउनलोड करें (PDF)',
    
    // Infographic
    infoTitle: 'सामग्री तुलना',
    infoHeading: 'पारंपरिक पाइपलाइनों की तुलना में एचडीपीई पाइप क्यों चुनें?',
    infoCol1: 'परिचालन विशेषता',
    infoCol2: 'राजश्री एचडीपीई पाइप्स',
    infoCol3: 'पारंपरिक धातु / कंक्रीट',

    // Quality Control
    qcTitle: 'गुणवत्ता नियंत्रण',
    qcSubtitle: 'एनएबीएल-प्रमाणित लैब और बहु-चरणीय ऑडिटिंग',
    qcDesc: 'हम कच्चे पॉलीमर रेजिन्स की जांच से लेकर तैयार पाइपों पर हाइड्रोस्टेटिक दबाव परीक्षणों तक - हर चरण में सख्त गुणवत्ता नियंत्रण लागू करते हैं।',
    qcHeading: 'तृतीय-पक्ष स्वीकृत इन-हाउस गुणवत्ता आश्वासन',
    qcPara1: 'राजश्री ग्रुप / टेक्नोप्लास्ट राष्ट्रीय परीक्षण और अंशशोधन प्रयोगशाला प्रत्यायन बोर्ड (NABL) के दिशानिर्देशों के अनुरूप एक पूर्ण सुसज्जित, आधुनिक परीक्षण प्रयोगशाला संचालित करता है।',
    qcPara2: 'हमारे पाइपों का नियमित रूप से प्रमुख तृतीय-पक्ष निरीक्षण एजेंसियों जैसे RITES, श्री राम संस्थान, और CIPET द्वारा ऑडिट और निरीक्षण किया जाता है, जो सरकारी परियोजना आवश्यकताओं को पूरा करते हैं।',
    qcTest1Title: 'ऑक्सीकरण प्रेरण परीक्षण (OIT)',
    qcTest1Desc: 'हमारे लैब में थर्मोडायनामिक स्थिरता और पॉलीमर के जीवनकाल की जांच के लिए आयोजित किया जाता है, जो 50+ वर्षों की लंबी आयु सुनिश्चित करता है।',
    qcTest2Title: 'तनाव और बढ़ाव ऑडिट',
    qcTest2Desc: 'उच्च दबाव की स्थिति में भौतिक उपज तनाव, लोच और बढ़ाव के बिंदुओं की जांच करता है।',
    qcTest3Title: 'हाइड्रोस्टेटिक दबाव परीक्षण',
    qcTest3Desc: 'दबाव प्रतिरोध को सत्यापित करने के लिए पाइपों को लंबी अवधि के लिए उच्च आंतरिक दबाव के अधीन किया जाता है।',
    qcTest4Title: 'आयामी और गोलाई की जांच',
    qcTest4Desc: 'नियमित उत्पादन अंतराल पर दीवार की मोटाई, संकेंद्रितता और बाहरी व्यास पर निरंतर कैलिपर ऑडिट।',
    qcLabLabel: 'इन-हाउस परीक्षण प्रयोगशाला इकाई I',
    qcLabCaption: 'थर्मल धीरज की जांच करता ऑक्सीकरण प्रेरण परीक्षक।',

    // Logistics
    logTitle: 'लॉजिस्टिक्स और प्रेषण',
    logSubtitle: 'देशव्यापी वितरण यार्ड और लॉजिस्टिक्स बेड़ा',
    logDesc: 'बुनियादी ढांचा परियोजनाओं के लिए थोक आपूर्ति सुनिश्चित करने के लिए एक विशाल प्रेषण यार्ड और विश्वसनीय पारगमन नेटवर्क से लैस।',
    logHeading: 'व्यवस्थित भारी-भरकम प्रेषण संचालन',
    logPara1: 'बगरू औद्योगिक क्षेत्र में हमारी प्रेषण सुविधाएं निरंतर बहु-टन जावक लदान को संभालने के लिए तैयार की गई हैं। उच्च क्षमता वाले लोडिंग क्रेन कॉरिडोर और स्वचालित फ्लैटबेड डॉक का उपयोग करके, हम 20mm से 1200mm तक के पाइपों के सुरक्षित प्रेषण की गारंटी देते हैं।',
    logPara2: 'जयपुर, राजस्थान में हमारे रणनीतिक राजमार्ग संपर्क के साथ, हम उत्तर प्रदेश, मध्य प्रदेश, गुजरात, हरियाणा, एनसीआर और पूरे भारत में परियोजनाओं के लिए जीपीएस-ट्रैक वाहनों के माध्यम से सीधी आपूर्ति का प्रबंधन करते हैं।',
    logPoint1Title: '75,000+ वर्ग फुट लॉजिस्टिक्स यार्ड',
    logPoint1Desc: 'त्वरित सामग्री चयन के लिए दबाव रेटिंग (SDR) और व्यास वर्ग द्वारा विभाजित समर्पित भंडारण क्षेत्र।',
    logPoint2Title: 'लचीला कोइलिंग और पैकेजिंग',
    logPoint2Desc: 'परिवहन लागत और स्थान बचाने के लिए 110mm तक के पाइपों को उच्च-तनाव वाले कोइलिंग ड्रमों में बड़े रोल में पैक किया जाता है।',
    logPoint3Title: 'प्राथमिकता पारगमन नेटवर्क',
    logPoint3Desc: 'भारी वाहनों के साथ अनुबंधित साझेदारी मानसून के दौरान भी विश्वसनीय वितरण समय सुनिश्चित करती है।',
    logLabel: 'लोडिंग और प्रेषण संचालन जयपुर यार्ड',
    logCaption: 'अखिल भारतीय वितरण के लिए तैयार किए जा रहे भारी-भरकम परिवहन ट्रक।',

    // Exhibitions
    exhTitle: 'व्यापार शो और प्रदर्शनियां',
    exhSubtitle: 'राजप्लास्ट प्रदर्शनियां और ग्राहक बैठकें',
    exhDesc: 'हम सक्रिय रूप से क्षेत्रीय और राष्ट्रीय औद्योगिक व्यापार शो में हमारी नवीनतम पाइपिंग तकनीकों, बीआईएस-अनुरूप डिजाइनों का प्रदर्शन करते हैं।',
    exhEvent1Title: 'राजप्लास्ट प्रदर्शनी जयपुर',
    exhEvent1Desc: 'ठेकेदारों और योजनाकारों को हमारी 1200mm व्यास की जल मुख्य पाइपलाइनों और डबल वॉल कोरुगेटेड डक्ट विकल्पों का प्रदर्शन।',
    exhEvent2Title: 'बी2बी ग्राहक बैठक',
    exhEvent2Desc: 'सड़क के नीचे बिछाई जाने वाली सीवर लाइनों के लिए सरकारी इंजीनियरों के साथ तकनीकी मानकों पर संवाद।',
    exhEvent3Title: 'औद्योगिक हितधारक मंच',
    exhEvent3Desc: 'स्थानीय प्लास्टिक संघ सर्किलों में पॉलीमर एक्सट्रूज़न नवाचार और आईएसओ मानकों का प्रतिनिधित्व।',
    exhEvent4Title: 'लाइव वेल्डिंग प्रदर्शन',
    exhEvent4Desc: 'ग्रामीण जल आपूर्ति पर्यवेक्षकों के लिए बट फ्यूजन वेल्डिंग का लाइव प्रदर्शन।',
    exhEvent5Title: 'प्रदर्शनी स्टॉल प्रदर्शन',
    exhEvent5Desc: 'हमारे टीज़, बेंड्स, कपलर्स और भारी-भरकम थ्रेडेड फिटिंग्स की विस्तृत श्रृंखला का प्रदर्शन।',

    // Contact
    conTitle: 'संपर्क करें',
    conSubtitle: 'राजश्री सेल्स और प्लांट इकाइयों से जुड़ें',
    conDesc: 'डीलर मूल्य निर्धारण, अनुकूलित फ्लैंग्ड पाइप लेआउट या सरकारी निविदाओं के लिए, नीचे दिया गया फॉर्म भरें। हमारी टीम 24 घंटे के भीतर आपसे संपर्क करेगी।',
    conOffice: 'पंजीकृत कार्यालय और प्लांट इकाई I',
    conOfficeAddr: 'एफ-105, रीको औद्योगिक क्षेत्र, बगरू (विस्तार), जयपुर, राजस्थान - 303007',
    conPlant: 'मैन्युफैक्चरिंग प्लांट इकाई II',
    conPlantAddr: 'रतन औद्योगिक क्षेत्र, हरसुलिया, फागी, जयपुर, राजस्थान - 303005',
    conEmail: 'ईमेल पता',
    conPhone: 'हेल्पलाइन नंबर',
    formHeading: 'कोटेशन / तकनीकी परामर्श का अनुरोध करें',
    formName: 'पूरा नाम',
    formPhone: 'संपर्क नंबर',
    formEmail: 'ईमेल पता',
    formSubject: 'विषय / निविदाएं / थोक आदेश',
    formMsg: 'संदेश / पाइप विशिष्टता और मात्रा',
    btnSending: 'पूछताछ भेजी जा रही है...',
    btnSent: 'पूछताछ सफलतापूर्वक भेजी गई!',
    btnSendMsg: 'पूछताछ संदेश भेजें',

    // Footer
    footDesc: '2012 में स्थापित, राजश्री टेक्नोप्लास्ट प्रीमियम एचडीपीई और पीवीसी पाइपिंग सिस्टम का एक अग्रणी निर्माता है। हम पूरे भारत में नगर पालिकाओं, औद्योगिक नेटवर्क और कृषि लेआउट को शक्ति प्रदान करते हैं।',
    footTagline: '"द्रव नेटवर्क के माध्यम से प्रगति को सशक्त बनाना"',
    footQuickLinks: 'त्वरित लिंक',
    footHomeOverview: 'होम ओवरव्यू',
    footAboutRajshree: 'राजश्री ग्रुप के बारे में',
    footMfgProcess: 'उत्पादन प्रक्रिया',
    footProductsCatalog: 'उत्पाद कैटलॉग',
    footQualityCerts: 'गुणवत्ता और प्रमाणन',
    footLogisticsDispatch: 'लॉजिस्टिक्स और प्रेषण',
    footExhibitionsEvents: 'प्रदर्शनियां और कार्यक्रम',
    footGetInTouch: 'संपर्क करें',
    footRegdOffice: 'पंजीकृत कार्यालय',
    footRegdOfficeAddr: 'हनुमान वाटिका-I, 200 फीट चौराहे के पास, अजमेर रोड, जयपुर-302021, राजस्थान',
    footRights: 'सर्वाधिकार सुरक्षित।',

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
    return translations[lang][key] || key;
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
