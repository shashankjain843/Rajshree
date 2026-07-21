/**
 * CENTRAL SITE CONFIGURATION TEMPLATE
 * 
 * To adapt this website for any manufacturing / industrial / factory company,
 * update the configuration object below. All components dynamically pull text,
 * metrics, products, images, contact details, and FAQs from this file.
 */

export const siteConfig = {
  // --------------------------------------------------------------------------
  // Company & Brand Identification
  // --------------------------------------------------------------------------
  company: {
    name: 'Rajshree Group',
    legalName: 'Rajshree Technoplast Pvt. Ltd.',
    shortName: 'Rajshree',
    tagline: 'Engineering Superior HDPE & PVC Piping Solutions',
    subtitle: 'Rajasthan\'s Leading Pipe Manufacturer • Trusted Since 2012',
    logo: '/images/rajshree logo.png',
    logoAlt: 'Rajshree Group Logo',
    foundedYear: '2012',
    yearsOfExperience: '15+ Years',
    plantSize: '75,000+ Sq. Ft.',
    totalCapacity: '12,500+ MT',
    annualCapacity: '10,000 MT / Year',
    monthlyCapacity: '1,250+ MT',
    statesCovered: '12+ States',
    activeClients: '500+ Clients',
    kmSupplied: '25,000+ KM',
    gstin: '08AAACR9829Q1Z8',
    msmeRegistration: 'REGD. MSME / ISO',
    
    quote: '"We do not just construct pipes; we engineer durable fluid highways that feed irrigation networks and cities across the nation."',
    leadership: {
      title: 'MESSAGE FROM OUR LEADERSHIP',
      quote: '"Our vision is to build piping networks that serve generations. Quality is not just a parameter for us; it is a promise that we seal into every millimeter of polymer."',
      description: 'At Rajshree Technoplast, we operate with a safety-first and zero-defect quality threshold. Our dedication remains towards national development by producing polymer networks that withstand high pressures and harsh industrial environments.',
      name: 'Mr. Arun Jain',
      designation: 'Founder & Managing Director',
      initials: 'AJ'
    }
  },

  // --------------------------------------------------------------------------
  // Contact Information & Directory
  // --------------------------------------------------------------------------
  contact: {
    primaryPhone: '+91-9829050790',
    primaryPhoneFormatted: '+91 98290 50790',
    primaryPhoneRaw: '919829050790',
    phoneNumbers: [
      { label: 'Direct', number: '+91-9829050790', raw: '919829050790' },
      { label: 'Sales Desk', number: '+91-9829054690', raw: '919829054690' },
      { label: 'Support', number: '+91-9460004801', raw: '919460004801' }
    ],
    primaryEmail: 'rajshreearun123@gmail.com',
    corporateOffice: {
      title: 'Corporate Office',
      address: 'Plot No.51 Maliram Kheradi Marg, Hanuman Vatika-I, Near 200FT Chauraha, Ajmer Road, Jaipur-302021',
      city: 'Jaipur',
      state: 'Rajasthan',
      pincode: '302021'
    },
    factoryUnits: [
      {
        name: 'Factory Unit I',
        address: 'C-151, RIICO Industrial Area, Bagru Extn, Bagru, Jaipur-303007'
      },
      {
        name: 'Factory Unit II',
        address: '146, 147, 155 & 156, Ratan Industrial Area, Harsuliya, Phagi, Jaipur-303904'
      }
    ],
    whatsappNumber: '919829050790',
    whatsappMessage: 'Hello Rajshree Technoplast, I am interested in your pipes.',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.33230691515!2d75.6967732297831!3d26.848596645391307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c5e2d637c358f%3A0xe54e6035f8d6896e!2sAjmer%20Road%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin'
  },

  // --------------------------------------------------------------------------
  // Navigation Links
  // --------------------------------------------------------------------------
  navigation: [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Manufacturing', href: '#manufacturing' },
    { name: 'Products', href: '#products' },
    { name: 'Quality Control', href: '#quality' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ],

  // --------------------------------------------------------------------------
  // Hero Section
  // --------------------------------------------------------------------------
  hero: {
    badge: "Rajasthan's Leading Pipe Manufacturer • Trusted Since 2012",
    headingMain: 'Engineering Superior',
    headingHighlight: 'HDPE & PVC',
    headingSub: 'Piping Solutions',
    description: 'Rajshree Technoplast Pvt. Ltd. operates 75,000+ sq. ft. of automated extrusion infrastructure in Jaipur — producing BIS/ISI-certified HDPE, MDPE & PVC conduits for potable water distribution, sewerage, and agricultural irrigation nationwide.',
    ctaPrimary: 'Request Wholesale Quote',
    ctaSecondary: 'Download Product Catalogue (PDF)',
    images: [
      '/images/hero-factory-warehouse-banner-16x9.jpg',
      '/images/hero-hdpe-pipes-closeup.jpg'
    ],
    stats: [
      {
        value: '75,000+ Sq. Ft.',
        label: 'Automated Extrusion Facilities, Jaipur'
      },
      {
        value: '10,000 MT / Year',
        label: 'Annual HDPE & PVC Extrusion Capacity'
      },
      {
        value: '12+ States',
        label: 'Pan-India Government & Municipal Supply'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // About Us Section
  // --------------------------------------------------------------------------
  about: {
    sectionTag: 'About Us',
    title: 'Factory Infrastructure & Technical Standing',
    subtitle: 'Pioneering Durable Piping Infrastructure',
    paragraphs: [
      'Founded in 2012, Rajshree Technoplast Pvt. Ltd. (under the renowned Rajshree Group) has established itself as a premier manufacturer of high-density polyethylene (HDPE) and polyvinyl chloride (PVC) pipes. For over a decade, we have been a trusted partner in India\'s agricultural, urban sewerage, and industrial growth.',
      'With a commitment to zero-defect manufacturing, our state-of-the-art facilities in Bagru and Phagi, Jaipur, span over 75,000 square feet. Fully accredited with ISO 9001:2015 certification, our plant combines automated production systems with an in-house NABL-standards testing laboratory to guarantee peerless product standards.'
    ],
    bulletPoints: [
      '100% Virgin High-Grade Polymer Resins',
      'Rigorous ISI compliance and BIS licensed certification',
      'Large warehousing capabilities for immediate bulk dispatches'
    ],
    galleryImages: [
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
    ],
    stats: [
      {
        label: 'Years of Experience',
        value: '15+ Years',
        desc: 'Over a decade of manufacturing excellence'
      },
      {
        label: 'Production Capacity',
        value: '12,500+ MT',
        desc: 'Tons produced annually across our units'
      },
      {
        label: 'Active Clients',
        value: '500+ Clients',
        desc: 'Government agencies, contractors & dealers'
      },
      {
        label: 'Plant Size',
        value: '75,000+ Sq. Ft.',
        desc: 'State-of-the-art facilities in Rajasthan'
      }
    ],
    milestones: [
      {
        year: '2012',
        title: 'Company Founded (Unit I)',
        desc: 'Commenced operations at the first extrusion plant in RIICO Area, Bagru (Jaipur).'
      },
      {
        year: '2015',
        title: 'ISO 9001:2015 & BIS Licensed',
        desc: 'Achieved complete BIS (ISI) licencing and ISO Quality Management certifications.'
      },
      {
        year: '2019',
        title: 'Phagi Expansion (Unit II)',
        desc: 'Setup high-speed automated extrusion lines at Unit II, Phagi, to triple monthly output.'
      },
      {
        year: '2024',
        title: '500+ Clients & 12,000+ MT',
        desc: 'Supplied high-density piping networks to major national grids, water boards, and corporate layouts.'
      }
    ],
    capacityData: [
      { category: 'HDPE Pipes', percentage: 60, color: '#1e3a8a', value: '750 MT' },
      { category: 'PVC Pipes', percentage: 25, color: '#0284c7', value: '312 MT' },
      { category: 'MDPE & Sprinklers', percentage: 15, color: '#06b6d4', value: '188 MT' }
    ],
    accreditations: [
      { name: 'PMAR MEMBER', sub: 'Plastic Mfrs Assoc Rajasthan', code: 'PMAR' },
      { name: 'CII AFFILIATED', sub: 'Confederation of Indian Industry', code: 'CII' },
      { name: 'FICCI MEMBERSHIP', sub: 'Federation of Indian Chambers', code: 'FICCI' },
      { name: 'BIS LICENSED', sub: 'Bureau of Indian Standards', code: 'IS:4984' }
    ],
    awards: [
      {
        title: 'Excellence in Manufacturing',
        subtitle: 'Rajasthan Industrial Quality Award • 2025',
        desc: 'Recognized for zero-defect automated extrusion and NABL lab quality standards.'
      },
      {
        title: 'Best Quality Standard',
        subtitle: 'Infrastructure Excellence Award • 2024',
        desc: 'Awarded for superior HDPE pressure pipe supply to Jal Jeevan Mission projects.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // Projects & Supply Metrics Section
  // --------------------------------------------------------------------------
  projectsMetrics: [
    {
      value: '25,000+ KM',
      label: 'HDPE Pipe Supplied',
      subtext: 'Installed across Jal Jeevan Mission & municipal infrastructure',
      iconName: 'Truck'
    },
    {
      value: '12+ States',
      label: 'Pan-India Distribution',
      subtext: 'Active supply logistics in Northern & Central India',
      iconName: 'MapPin'
    },
    {
      value: '10,000 MT',
      label: 'Annual Extrusion Output',
      subtext: 'Dual-unit capacity for high-volume procurement',
      iconName: 'Factory'
    },
    {
      value: '15+ Years',
      label: 'Manufacturing Excellence',
      subtext: 'Established in 2012 in Bagru & Phagi Industrial Areas',
      iconName: 'Award'
    }
  ],

  // --------------------------------------------------------------------------
  // Manufacturing Process Section
  // --------------------------------------------------------------------------
  manufacturing: {
    sectionTag: 'Manufacturing Process',
    title: 'How We Manufacture RAJSHREE Pipes',
    description: 'From polymer resin grains to finished high-pressure conduits — our fully integrated machinery ensures zero dimensional deviation and maximum impact resilience.',
    stages: [
      {
        num: '01',
        title: 'Raw Polymer Resin Blending',
        iconName: 'Layers',
        image: '/images/manufacturing-process.jpg',
        alt: 'Raw polymer resins loaded in hopper feed',
        caption: 'High-density polyethylene (PE 100/PE 80) virgin granules are audited for purity, blended with UV-stabilized carbon black masterbatch, and gravimetrically fed into the extruder.'
      },
      {
        num: '02',
        title: 'Precision Extrusion Machine',
        iconName: 'Settings',
        image: '/images/manufacturing-extrusion-machine.jpg',
        alt: 'HDPE pipe extrusion machine die head close-up',
        caption: 'The polymer melt is homogenized under automated thermodynamic zones and forced through a high-precision die head to create flawless pipe wall uniformity.'
      },
      {
        num: '03',
        title: 'Automated Line & Vacuum Cooling',
        iconName: 'Sliders',
        image: '/images/manufacturing-production-line.jpg',
        alt: 'Automated extrusion production line overview',
        caption: 'The extruded conduit passes through high-vacuum sizing sleeves and multi-stage spray cooling tanks to achieve exact outer diameter tolerances.'
      },
      {
        num: '04',
        title: 'Planetary Cutting & Factory Handling',
        iconName: 'Scissors',
        image: '/images/manufacturing-workers-handling-pipe.jpg',
        alt: 'Plant technicians handling finished HDPE pipe coils',
        caption: 'Precision planetary cutters slice pipes to specified straight lengths (6m/12m) or coil runs up to 100m, followed by final dimensional and marking inspection.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // Products Portfolio & Data
  // --------------------------------------------------------------------------
  products: {
    sectionTag: 'PRODUCT PORTFOLIO & TECHNICAL SPECIFICATIONS',
    title: 'BIS Certified Piping Range (20mm to 1200mm OD)',
    description: 'Manufactured in strict compliance with Bureau of Indian Standards using 100% virgin PE100 & PE80 resins.',
    categories: [
      'All',
      'HDPE Pipes',
      'PVC Pipes',
      'DWC Pipes',
      'MDPE Pipes',
      'Sprinkler Systems',
      'Pipe Fittings'
    ],
    items: [
      {
        id: 'black-hdpe',
        name: 'High-Density Polyethylene (HDPE) Pressure Pipes',
        image: '/images/products-black-hdpe-pipes.jpg',
        categories: ['All', 'HDPE Pipes'],
        standards: 'IS:4984:2018 | ISO 4427',
        sizes: '20mm to 1200mm OD',
        pressure: 'PN 2.5 to PN 16 (SDR 41 to SDR 9)',
        resin: '100% Virgin PE100 & PE80',
        desc: 'Engineered from 100% virgin PE 100 / PE 80 resin, ideal for high-pressure municipal water mains, industrial chemical flow, and mainlines.',
        features: [
          '100% Leak-proof Butt Fusion Jointing',
          'High UV & Chemical Decay Resistance',
          '50+ Years Operational Lifespan'
        ],
        details: {
          applications: 'Potable water distribution, micro-irrigation grids, industrial effluent disposal, and sewer force mains.',
          jointing: 'Butt fusion welding, electrofusion jointing, and mechanical compression fittings.',
          durability: 'Highly resistant to weathering, chemical attack, UV radiation, and seismic ground movements.'
        }
      },
      {
        id: 'hdpe-coils',
        name: 'HDPE Flexible Coil Pipes',
        image: '/images/products-blue-pipes.jpg',
        categories: ['All', 'HDPE Pipes', 'MDPE Pipes'],
        standards: 'IS:4984 | IS:14885',
        sizes: '20mm to 110mm OD (50m to 500m coils)',
        pressure: 'PN 6 to PN 16 (SDR 17.6 / SDR 11)',
        resin: 'PE100 / PE80 Grade Polymer',
        desc: 'Seamless continuous coil pipes designed for long-run agricultural irrigation and rural drinking water pipelines.',
        features: [
          'Minimal Joints & Fast Trench Laying',
          'Highly Flexible Around Ground Curves',
          'Zero Internal Scaling'
        ],
        details: {
          applications: 'Rural water supply schemes, agricultural drip/sprinkler networks, and borewell delivery.',
          jointing: 'Compression quick-connect fittings or socket fusion.',
          durability: 'High flexibility prevents cracking under ground settlement or freeze cycles.'
        }
      },
      {
        id: 'grey-dwc',
        name: 'Double Wall Corrugated (DWC) Drainage Pipes',
        image: '/images/products-grey-pipes-stacked.jpg',
        categories: ['All', 'DWC Pipes'],
        standards: 'IS:16098 (Part 2) | IS:14333',
        sizes: '75mm to 500mm ID',
        pressure: 'Ring Stiffness SN4 / SN8',
        resin: 'High-Density Polyethylene Structured Resin',
        desc: 'Corrugated outer wall for high ring stiffness with smooth interior bore for gravity sewers and cable ducting.',
        features: [
          'Superior Ring Stiffness (SN4 & SN8)',
          'Extremely Lightweight vs Concrete Pipes',
          'Smooth Inner Surface for Maximum Flow'
        ],
        details: {
          applications: 'Gravity storm sewers, highway culverts, municipal drainage, and underground optical fiber/power cable protection.',
          jointing: 'Snap-fit couplers with rubber sealing rings.',
          durability: 'Immune to chemical corrosion from sewage fluids and heavy soil loads.'
        }
      },
      {
        id: 'pvc-agri',
        name: 'PVC Agricultural & Pressure Pipes',
        image: '/images/products-display-board.jpg',
        categories: ['All', 'PVC Pipes'],
        standards: 'IS:4985:2021',
        sizes: '40mm to 315mm OD',
        pressure: 'Class 1 to Class 6 (2.5 to 10 kg/cm²)',
        resin: 'Unplasticized Polyvinyl Chloride (uPVC)',
        desc: 'Precision extruded uPVC pressure pipes engineered for agricultural irrigation, potable water supply, and building plumbing.',
        features: [
          'High Hydraulic Efficiency',
          'Corrosion & Termite Proof Compound',
          'Solvent Cement / Ring-Fit Socketing'
        ],
        details: {
          applications: 'Farm irrigation grids, canal lift irrigation, borewell casing, and potable water distribution.',
          jointing: 'Solvent cement jointing and rubber ring-fit sockets.',
          durability: 'Rigid construction with smooth interior to prevent scale accumulation.'
        }
      },
      {
        id: 'mdpe-gas',
        name: 'MDPE Natural Gas Distribution Pipes',
        image: '/images/hero-factory-warehouse.jpg',
        categories: ['All', 'MDPE Pipes'],
        standards: 'IS:14885 | ISO 4437',
        sizes: '20mm to 125mm OD',
        pressure: 'SDR 11 & SDR 17.6 (SDR Gas Rating)',
        resin: 'PE80 / PE100 Medium Density Polyethylene',
        desc: 'Specialized yellow/blue medium density polyethylene pipes manufactured for city gas distribution networks.',
        features: [
          'Outstanding Slow Crack Growth Resistance',
          'High Crack Arrest Capacity',
          'Electrofusion Leak-Proof Jointing'
        ],
        details: {
          applications: 'PNG natural gas distribution mains, industrial gas flow, and house service connections.',
          jointing: 'Electrofusion fittings and socket welding.',
          durability: 'Immune to environmental stress cracking and underground soil chemicals.'
        }
      },
      {
        id: 'sprinkler-sys',
        name: 'Quick-Coupling HDPE Sprinkler Systems',
        image: '/images/hero-hdpe-pipes-closeup.jpg',
        categories: ['All', 'Sprinkler Systems', 'HDPE Pipes'],
        standards: 'IS:14151 (Part 1 & 2)',
        sizes: '63mm, 75mm, 90mm, 110mm OD',
        pressure: 'PN 2.5 & PN 3.2 (6m length with latch couplers)',
        resin: 'HDPE PE63 / PE80 Resin',
        desc: 'Complete quick-lock sprinkler irrigation system designed for uniform crop watering and water conservation.',
        features: [
          'Quick Latch Release Couplers',
          'Easy Portable Assembly Across Fields',
          'High UV Stabilization for Field Sun Exposure'
        ],
        details: {
          applications: 'Overhead crop spraying, wheat/mustard irrigation, dust suppression, and temporary field supply.',
          jointing: 'C-clamp quick action latching couplers with rubber ring seals.',
          durability: 'Lightweight for quick dismantling and shifting across farming plots.'
        }
      },
      {
        id: 'submersible-pvc',
        name: 'uPVC Submersible Column Pipes',
        image: '/images/pipe-fitting-endcap-2.jpg',
        categories: ['All', 'PVC Pipes'],
        standards: 'IS:12818 Approved Specs',
        sizes: '1" to 4" Nominal Diameter',
        pressure: 'Up to 35 kg/cm² (Deep Borewell Rating)',
        resin: 'High Tensile uPVC Compound',
        desc: 'High tensile strength uPVC column pipes with square threads designed for deep borewell submersible pump installations.',
        features: [
          'Patent Wire-Locking Threaded Joints',
          'High Load Capacity (Supports Heavy Pumps)',
          '100% Corrosion-Free Water Output'
        ],
        details: {
          applications: 'Borewell pump rising mains, deep well water extraction, and agricultural tube wells.',
          jointing: 'Square threaded male/female ends with rubber O-rings and locking pins.',
          durability: 'Zero rust, high torque resistance during pump start/stop cycles.'
        }
      },
      {
        id: 'hdpe-fittings',
        name: 'Polyethylene Pipe Fittings & Electrofusion Couplers',
        image: '/images/products-pipe-couplers-bulk.jpg',
        categories: ['All', 'Pipe Fittings'],
        standards: 'IS:7328 | ISO 14236 | IS:8360',
        sizes: '20mm to 315mm OD',
        pressure: 'Up to PN 16 (16 Bar)',
        resin: 'Virgin Polypropylene / HDPE PE100',
        desc: 'Precision molded compression couplers, elbows, tees, end caps, and electrofusion fittings for HDPE pipelines.',
        features: [
          'Watertight Pressure Sealing',
          'High Tensile & Impact Resistance',
          'Tool-Free Quick Compression Assembly'
        ],
        details: {
          applications: 'Agricultural headers, branch lines, pipeline repairs, and service line connections.',
          jointing: 'Mechanical compression nuts or thermal electrofusion.',
          durability: 'UV stabilized molded body ensuring long life under direct sun.'
        }
      }
    ]
  },

  // --------------------------------------------------------------------------
  // Quality Control Section
  // --------------------------------------------------------------------------
  quality: {
    sectionTag: 'Quality Control',
    title: 'NABL-Accredited Lab & Multi-Stage Auditing',
    description: 'We enforce strict quality control at every phase — from auditing raw polymer resins to conducting hydrostatic stress tests on finished pipes.',
    heading: 'Third-Party Approved In-House Quality Assurance',
    paragraphs: [
      'Rajshree Group / Technoplast operates a fully equipped, modern testing laboratory complying with National Accreditation Board for Testing and Calibration Laboratories (NABL) guidelines.',
      'Our pipes are regularly audited and cleared by leading third-party inspection agencies including RITES, SHRI RAM Institute, and CIPET, satisfying strict government project mandates.'
    ],
    bisLicence: 'BIS LICENCE CM/L - 7800045812',
    standardsText: 'BIS IS:4984 | IS:14333 | IS:4985 Certified Manufacturer',
    clearances: ['CIPET Cleared', 'RITES Inspected', 'NABL Tested'],
    image: '/images/quality-testing-lab.jpg',
    imageAlt: 'NABL quality control testing laboratory with Oxidation Induction Tester equipment',
    imageCaption: 'In-House Testing Facility Unit I — Oxidation Induction Tester verifying thermal endurance.',
    tests: [
      {
        iconName: 'Cpu',
        title: 'Oxidation Induction Test',
        desc: 'Conducted in our lab to test thermodynamic stability and polymer aging characteristics, ensuring a 50+ year lifespan.'
      },
      {
        iconName: 'Settings',
        title: 'Tensile & Elongation Audits',
        desc: 'Verifies the physical yield stress, elasticity, and elongation break points under high-pressure conditions.'
      },
      {
        iconName: 'ShieldAlert',
        title: 'Hydrostatic Pressure Test',
        desc: 'Pipes are subjected to high internal pressures for extended durations to verify hoop stress resistance.'
      },
      {
        iconName: 'Ruler',
        title: 'Dimensional & Ovality Check',
        desc: 'Continuous caliper audits on wall thickness, concentricity, and outer diameter metrics at regular extrusion intervals.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // Frequently Asked Questions (Header Popup)
  // --------------------------------------------------------------------------
  faq: {
    title: 'Frequently Asked Questions',
    subtitle: 'Quick answers about our pipes, certifications, plant facilities, and orders.',
    items: [
      {
        id: 1,
        question: 'What types and sizes of pipes do you manufacture?',
        answer: 'We manufacture HDPE pressure pipes (20mm to 1200mm OD), PVC conduit/pressure pipes (40mm to 315mm OD), and MDPE service lines for irrigation, borewells, and municipal water networks.'
      },
      {
        id: 2,
        question: 'What raw material quality do you use in manufacturing?',
        answer: 'We use 100% virgin PE100 and PE80 grade polymer resins with carbon black UV stabilization. We enforce a zero-regrind policy to ensure a 50+ year operational lifespan.'
      },
      {
        id: 3,
        question: 'Are your pipes government approved and BIS (ISI) certified?',
        answer: 'Yes, our products are BIS / ISI certified (IS:4984, IS:14333, IS:4985) and ISO 9001:2015 accredited, fully approved for Jal Jeevan Mission and municipal utility tenders.'
      },
      {
        id: 4,
        question: 'Where are your manufacturing units located?',
        answer: 'Our state-of-the-art dual extrusion facilities span 75,000+ sq. ft. across Bagru RIICO Industrial Area (Unit I) and Phagi Ratan Industrial Area (Unit II) in Jaipur, Rajasthan.'
      },
      {
        id: 5,
        question: 'What is your production capacity and delivery lead time?',
        answer: 'We produce over 1,250 tons (10,000+ MT annually) of pipes monthly. Standard pipe sizes are maintained in ready stock and dispatched within 24 to 48 hours.'
      },
      {
        id: 6,
        question: 'How can I request a commercial price quotation or proforma invoice?',
        answer: 'Click "Request Quote" in the header or contact our sales team via WhatsApp/phone with your required sizes and quantity to receive an official proforma quote within 24 hours.'
      },
      {
        id: 7,
        question: 'What jointing methods are recommended for installing your pipes?',
        answer: 'HDPE pipes are joined using 100% leak-proof Butt Fusion heat welding or Electrofusion couplers, while PVC pipes utilize solvent cement socketing or rubber ring joints.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // Footer Social Marquee Tiles
  // --------------------------------------------------------------------------
  footerSocialTiles: [
    { label: 'Factory Tour', bg: 'bg-blue-500/15', icon: '🏭' },
    { label: 'Quality Lab', bg: 'bg-amber-500/15', icon: '🔬' },
    { label: 'Pipe Extrusion', bg: 'bg-emerald-500/15', icon: '⚙️' },
    { label: 'Team Rajshree', bg: 'bg-purple-500/15', icon: '👷' },
    { label: 'Jaipur Extrusion Plant', bg: 'bg-amber-500/15', icon: '🏢' },
    { label: 'PE100 Virgin Polymer', bg: 'bg-blue-500/15', icon: '🧪' },
    { label: 'IS Certification', bg: 'bg-emerald-500/15', icon: '📋' },
    { label: 'Water Projects', bg: 'bg-sky-500/15', icon: '💧' }
  ]
};
