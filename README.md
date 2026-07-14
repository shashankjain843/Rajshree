# Rajshree Technoplast Website - Full-Stack Documentation

This repository contains the full-stack codebase for the **Rajshree Technoplast Pvt. Ltd.** website. It includes a modern, responsive React frontend built with Vite and TailwindCSS, and a Node.js/Express backend for handling contact form inquiries and email notifications via SMTP (Brevo).

---

## 🛠️ Technology Stack (टैक स्टैक)

### Frontend (क्लाइंट-साइड)
*   **React (v19):** UI components build करने के लिए।
*   **Vite:** तेज़ डेवलपमेंट और फास्ट बंडलिंग के लिए।
*   **TailwindCSS (v4):** Modern styling, gradients, and layouts के लिए।
*   **Framer Motion:** Smooth Animations (जैसे fades, slides, hover effects) के लिए।
*   **Lucide React:** Sleek vector icons के लिए।

### Backend (सर्वर-साइड)
*   **Node.js & Express:** Lightweight REST API endpoints (`/api/contact`) बनाने के लिए।
*   **Nodemailer:** SMTP के माध्यम से ईमेल भेजने के लिए।
*   **Dotenv:** Environment variables (`.env`) को सुरक्षित रूप से लोड करने के लिए।
*   **Cors:** Frontend-Backend के बीच Cross-Origin Resource Sharing मैनेज करने के लिए।

---

## 📂 Project Directory Structure (प्रोजेक्ट फ़ाइल संरचना)

```text
rajshree-website/
├── src/                      # Frontend Sources
│   ├── assets/               # Images, SVG Logos, and Backgrounds
│   ├── components/           # Reusable React components (UI Blocks)
│   │   ├── About.jsx         # Company background, mission, and stats
│   │   ├── Certifications.jsx# ISO/ISI marks, quality test certificates
│   │   ├── Contact.jsx       # Commercial Inquiry Form with validations & SMTP Integration
│   │   ├── Footer.jsx        # Quick Links, Location map link, Copyright
│   │   ├── Gallery.jsx       # Plant machinery and product photos
│   │   ├── Hero.jsx          # Welcome Banner with animations & main CTA
│   │   ├── Navbar.jsx        # Desktop & Mobile responsive navigation menu
│   │   ├── Products.jsx      # Categorized pipes list (HDPE, PVC, etc.) with detailed specs
│   │   ├── Services.jsx      # Piping solutions and tailored customer services
│   │   └── Strengths.jsx     # Why choose us? (Key pillars/USP of the company)
│   ├── App.css               # App-level custom style overrides
│   ├── App.jsx               # Main React Application shell (combines all components)
│   ├── index.css             # TailwindCSS imports and custom design variables
│   └── main.jsx              # React mounting and initialization
├── public/                   # Static browser assets (Vite logo, etc.)
├── scratch/                  # Scripts for API/SMTP diagnostics and tests
│   ├── test_api.js           # REST API handshake test for Brevo
│   ├── test_smtp.js          # Node SMTP authentication verification script
│   └── send_real_test.js     # CLI test script to send actual test emails
├── .env                      # Environment Variables (SMTP keys, Port config) - [Git ignored]
├── .env.example              # Template showing required environment variables
├── index.html                # Main SPA entry HTML point
├── package.json              # Project dependencies and script runner configurations
├── server.js                 # Backend Node/Express Server entry point
└── vite.config.js            # Vite configurations (includes proxy settings for /api)
```

---

## 📄 Core Files & Components Description (फ़ाइलों का विवरण)

### 1. Root & Configuration Files:
*   **[server.js](file:///c:/Users/Shashank/Downloads/manufactperfex-105/rajshree-website/server.js):** 
    यह आपका Express backend सर्वर है। यह पोर्ट 5000 (या `.env` में दिए गए पोर्ट) पर चलता है। यह `/api/contact` API endpoint प्रदान करता है। जब भी यूजर कांटेक्ट फॉर्म भरता है, यह फ़ाइल Nodemailer का उपयोग करके:
    *   **Admin को** नया लीड ईमेल भेजती है।
    *   **Customer को** ऑटो-रिप्लाई ईमेल भेजती है।
*   **[.env](file:///c:/Users/Shashank/Downloads/manufactperfex-105/rajshree-website/.env):**
    सभी गुप्त क्रेडेंशियल्स (जैसे SMTP Host, SMTP User, SMTP Password, Receiver Email) को स्टोर करने की फाइल।
*   **[vite.config.js](file:///c:/Users/Shashank/Downloads/manufactperfex-105/rajshree-website/vite.config.js):**
    Vite कंपाइलर कॉन्फ़िगरेशन। इसमें एक `proxy` सेट है, जो frontend से जाने वाली `/api/...` रिक्वेस्ट को automatically backend (`http://localhost:5000`) पर फॉरवर्ड करता है।

### 2. Frontend React Components ([src/components/](file:///c:/Users/Shashank/Downloads/manufactperfex-105/rajshree-website/src/components)):
*   **[Navbar.jsx](file:///c:/Users/Shashank/Downloads/manufactperfex-105/rajshree-website/src/components/Navbar.jsx):** Sticky navigation bar जो स्क्रॉल करने पर बैकग्राउंड बदलती है। इसमें मोबाइल के लिए हैंबर्गर मेनू भी है।
*   **[Hero.jsx](file:///c:/Users/Shashank/Downloads/manufactperfex-105/rajshree-website/src/components/Hero.jsx):** वेबसाइट का मुख्य बैनर जिसमें कंपनी का मोटिव, आकर्षक बैकग्राउंड इमेज और एक "Explore Products" बटन है।
*   **[About.jsx](file:///c:/Users/Shashank/Downloads/manufactperfex-105/rajshree-website/src/components/About.jsx):** कंपनी का परिचय, इतिहास और उनके मुख्य स्टेटिस्टिक्स (जैसे 15+ years experience, 500+ projects)।
*   **[Products.jsx](file:///c:/Users/Shashank/Downloads/manufactperfex-105/rajshree-website/src/components/Products.jsx):** राजश्री द्वारा बनाए जाने वाले विभिन्न पाइप्स (HDPE Pipes, PVC Pipes, Sprinkler System, MDPE, Column Pipes) की पूरी जानकारी, विशेषताएं, और उनके उपयोग।
*   **[Certifications.jsx](file:///c:/Users/Shashank/Downloads/manufactperfex-105/rajshree-website/src/components/Certifications.jsx):** ISI Mark, ISO Certifications और क्वालिटी टेस्ट (जैसे Density, Tensile, Hydrostatic pressure test) की जानकारी।
*   **[Contact.jsx](file:///c:/Users/Shashank/Downloads/manufactperfex-105/rajshree-website/src/components/Contact.jsx):** यह फॉर्म है। इसमें क्लाइंट-साइडैलिडेशन है (नाम, ईमेल, फोन नंबर, विषय)। यह API (`/api/contact`) को डेटा भेजता है और ईमेल डिलीवरी की सफलता/असफलता का मैसेज स्क्रीन पर दिखाता है।

---

## 🚀 How to Run the Project (प्रोजेक्ट कैसे चलाएं)

प्रोजेक्ट को पूरी तरह चलाने के लिए आपको **Frontend** और **Backend** दोनों को स्टार्ट करना होगा:

### Step 1: Install Dependencies (निर्भरताएँ स्थापित करें)
अगर आपने अभी तक पैकेजेस इनस्टॉल नहीं किये हैं:
```bash
npm install
```

### Step 2: Set Environment Variables (पर्यावरण चर सेट करें)
प्रोजेक्ट की जड़ (root directory) में `.env` नाम की फ़ाइल बनाएं (या `.env.example` को कॉपी करके एडिट करें) और उसमें अपने SMTP क्रेडेंशियल्स दर्ज करें:
```ini
PORT=5000
SMTP_HOST="smtp-relay.brevo.com"
SMTP_PORT=587
SMTP_USER="आपका-brevo-smtp-ईमेल"
SMTP_PASS="आपका-brevo-smtp-पासवर्ड"
RECEIVER_EMAIL="वह-ईमेल-जहां-लीड्स-प्राप्त-करनी-हैं"
```

### Step 3: Run the Backend Server (बैकएंड सर्वर शुरू करें)
एक टर्मिनल खोलें और रन करें:
```bash
npm run server
```
यह सर्वर को `http://localhost:5000` पर एक्टिव कर देगा।

### Step 4: Run the Frontend App (फ्रंटएंड शुरू करें)
एक दूसरा (नया) टर्मिनल खोलें और रन करें:
```bash
npm run dev
```
(या अन्य डिवाइसेस पर IP देखने के लिए `npm run dev -- --host` रन करें)। यह आपकी वेबसाइट को `http://localhost:5173` पर होस्ट कर देगा।
#   R a j s h r e e  
 