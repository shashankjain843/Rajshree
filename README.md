# Rajshree Technoplast Website - Full-Stack Documentation

Welcome to the official repository for the **Rajshree Group / Technoplast** corporate web platform. This codebase represents a premium, responsive, industrial-grade website built for an HDPE & PVC Pipe Manufacturing Company. 

It features a fast, state-of-the-art React frontend compiled with **Vite** and styled with **TailwindCSS**, paired with a **Node.js/Express** SMTP backend that routes customer inquiries directly to the sales team with auto-replies to customers.

---

## 🚀 Key Features Implemented

### 1. 360° Interactive HDPE Pipe Viewer
*   **Simulated 3D Projection:** Renders a horizontal rotatable pipe widget at the top of the **Products Gallery** with mouse drag, touch drag, and range slider controls.
*   **Dual-Sided Flip Mechanism:** Uses CSS 3D transforms (`preserve-3d` and `backface-visibility: hidden`).
    *   **Front Face:** Displays the flagship Black HDPE Pipe photo overlayed with an emerald-green parameters tooltip. The tooltip text dynamically updates based on rotation (showcasing *ISI Markings*, *Wall Symmetry*, *Virgin PE100 Resin*, and *Butt-fusion cap readiness*).
    *   **Back Face:** Flips past 90° to show a technical blueprint specifications dashboard (concentricity, ovality, melt flow index, and density under NABL labs).
*   **Controls:** Integrates **Play/Pause Auto-Rotation** and **Reset Angle** buttons side-by-side.

### 2. Multi-Language Switcher (Bilingual EN / HI)
*   **Central Translation Context ([LanguageContext.jsx](file:///c:/Users/Shashank/Downloads/manufactperfex-105/rajshree-website/src/context/LanguageContext.jsx)):** Governs translation dictionaries for English (`EN`) and Hindi (`HI`).
*   **Bilingual Adaptation:** Translates all navigation headers, paragraph text, buttons, comparison tables, plant addresses, contact forms, error messages, and chatbot bubbles.
*   **Dynamic Counter Units:** Automatically translates the numerical counter suffixes in the About Us stats (e.g. converting "Years" to "वर्ष" and "Clients" to "ग्राहक").

### 3. Double-Theme Switcher (Dark & Light Mode)
*   **Vite-Compatible Dark Mode:** Configured class-based dark mode toggling alongside transition utilities via `@variant dark` in `index.css`.
*   **Clean Header Layout:** Placed the Theme toggle directly next to the Language switcher on both desktop and mobile headers.

### 4. Interactive FAQ AI Chatbot
*   **Floating Widget:** Located at the bottom-right corner of all viewport sizes.
*   **Bilingual Q&A:** Allows users to choose standard FAQs (sizes, certificates, plant locations, bulk pricing) in their selected language with an animated typing delay simulation.
*   **Auto-Translation:** Greetings and answers update instantly if the header language is switched mid-session.

### 5. Mobile Status Bar & Sticky Access
*   **Bottom Navigation Bar:** Appears only on mobile screens, providing one-click shortcut buttons to start a WhatsApp chat or open the quote form.

### 6. B2B Distributor Brochure Dashboard
*   **Technical Modal Drawer:** Enables distributors to preview wall thickness tables across all SDR classes (SDR 9, SDR 11, SDR 17.6) and download the official company catalog PDF.

### 7. SMTP Express Mail Server
*   **Secure API Endpoint (`/api/contact`):** Validates and routes customer inquiries to the sales directory email using Nodemailer.
*   **Dual Email Routing:**
    *   **Admin Notification:** Sends complete lead metrics (Name, Phone, Email, Product Interest, Message) to `rajshreearun123@gmail.com`.
    *   **Customer Auto-Acknowledgement:** Sends an immediate professional response greeting the customer and confirming receipt of their request.

### 8. SEO & Crawler Optimization
*   **Sitemap & Crawl Control:** Added a configured `sitemap.xml` and `robots.txt` in the public directory to optimize search engine crawlers.

---

## 📂 Project Directory Structure

```text
rajshree-website/
├── api/                      # Vercel Serverless Functions
│   └── contact.js            # Node API Serverless entry (uses Nodemailer)
├── public/                   # Static Browser Assets
│   ├── images/               # High-Quality Real Factory/Product Photos
│   │   ├── rajshree logo.png
│   │   ├── products-black-hdpe-pipes.jpg
│   │   ├── quality-testing-lab.jpg
│   │   └── ...
│   ├── robots.txt            # Search engine crawl control file
│   └── sitemap.xml           # Structured sitemap configuration
├── scratch/                  # Backend Diagnostics & Tests
│   ├── test_smtp.js          # CLI script to test transporter connection
│   └── test_api.js           # REST API endpoint tester
├── src/                      # React Frontend Source files
│   ├── assets/               # Local icons and SVGs
│   ├── components/           # UI Layout Components
│   │   ├── About.jsx         # Certifications, Stats, Memberships, & Awards
│   │   ├── Chatbot.jsx       # Floating bilingual Q&A chat widget
│   │   ├── Contact.jsx       # Form validations & API post submit
│   │   ├── Exhibitions.jsx   # Trade show gallery with slider lightbox
│   │   ├── Footer.jsx        # 3-column layout matching design wireframe
│   │   ├── Hero.jsx          # Carousel banner with transition slides
│   │   ├── Logistics.jsx     # Supply chain and distribution yard details
│   │   ├── ManufacturingProcess.jsx # 6-step timeline for pipe extrusion
│   │   ├── MobileStatusBar.jsx # Sticky mobile bottom links
│   │   ├── Navbar.jsx        # Responsive navigation with dark/language toggles
│   │   ├── Products.jsx      # 360 viewer, specifications modal & brochures
│   │   └── QualityControl.jsx# NABL lab testing details
│   ├── context/
│   │   └── LanguageContext.jsx # Bilingual translations state provider
│   ├── App.jsx               # Application Shell
│   ├── index.css             # Styling entry & Dark mode variables
│   └── main.jsx              # React DOM mounting
├── .env                      # Production & SMTP configuration keys (Git ignored)
├── .env.example              # Example file template showing required variables
├── server.js                 # Local Express server for SMTP routing
├── package.json              # Script runs & npm packages
└── vite.config.js            # Compiler & proxy configurations
```

---

## 📄 Core Files Description

### 1. Backend Server & Mail Routing
*   **[server.js](file:///c:/Users/Shashank/Downloads/manufactperfex-105/rajshree-website/server.js):** Runs local backend server on port `5000`. Configures CORS, parses JSON, and provides the `/api/contact` endpoint. Performs Nodemailer validation on startup.
*   **[api/contact.js](file:///c:/Users/Shashank/Downloads/manufactperfex-105/rajshree-website/api/contact.js):** Serverless entry function configured to route contact forms on cloud environments like Vercel.

### 2. Styling System
*   **[src/index.css](file:///c:/Users/Shashank/Downloads/manufactperfex-105/rajshree-website/src/index.css):** Integrates Tailwind variables, registers custom dark mode selectors (`@variant dark`), and configures the background grid pattern (`bg-grid-pattern`) for the 360° viewer box.

---

## 🚀 How to Run Locally

Follow these instructions to start the development environments:

### Step 1: Install Dependencies
Open a command prompt in the `rajshree-website` folder and run:
```bash
npm install
```

### Step 2: Configure Environment Variables
Create a `.env` file in the root folder (use `.env.example` as a reference):
```ini
PORT=5000
SMTP_HOST="smtp-relay.brevo.com"
SMTP_PORT=587
SMTP_USER="your-registered-smtp-username"
SMTP_PASS="your-authorized-smtp-key"
SENDER_EMAIL="realshashankjain@gmail.com"
RECEIVER_EMAIL="rajshreearun123@gmail.com"
```

### Step 3: Run the Backend Server
To start the Express server which manages email submissions:
```bash
npm run server
```
*Note: If the server connects successfully, it will log:*
`[SMTP Transporter Success]: Server is ready to route emails.`

### Step 4: Run the React Frontend
In a separate terminal window, start the local development server:
```bash
npm run dev
```
Open your browser at `http://localhost:5173/` to view and test the website.

---

## 🧪 Testing Email Deliverability (SMTP)
You can test the SMTP connection independently using the scripts inside the `scratch/` directory:
1.  Verify connection settings:
    ```bash
    node scratch/test_smtp.js
    ```
2.  Send a real test email through the server endpoint:
    ```bash
    node scratch/test_api.js
    ```

---

## 📋 Quality & Build Verification
*   **Linter Check:** Tested with `oxlint` via `npm run lint` -> **0 errors**.
*   **Production Bundling:** Compiles via `npm run build` in under **1 second** -> **All chunks render successfully**.