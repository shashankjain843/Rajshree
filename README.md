# Rajshree Technoplast Website - Full-Stack Documentation

This repository contains the full-stack codebase for the **Rajshree Technoplast Pvt. Ltd.** website. It includes a modern, responsive React frontend built with Vite and TailwindCSS, and a Node.js/Express backend for handling contact form inquiries and email notifications via SMTP (Brevo).

---

## 🛠️ Technology Stack

### Frontend (Client-side)
*   **React (v19):** For building UI components.
*   **Vite:** For fast development and bundling.
*   **TailwindCSS (v4):** For modern styling, gradients, and layouts.
*   **Framer Motion:** For smooth animations (e.g., fades, slides, hover effects).
*   **Lucide React:** For sleek vector icons.

### Backend (Server-side)
*   **Node.js & Express:** For lightweight REST API endpoints (`/api/contact`).
*   **Nodemailer:** For sending emails via SMTP.
*   **Dotenv:** For loading environment variables (`.env`) securely.
*   **Cors:** For managing Cross-Origin Resource Sharing between frontend and backend.

---

## 📂 Project Directory Structure

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

## 📄 Core Files & Components Description

### 1. Root & Configuration Files:
*   **[server.js](file:///c:/Users/Shashank/Downloads/manufactperfex-105/rajshree-website/server.js):** 
    This is your Express backend server. It runs on port 5000 (or the port specified in `.env`). It provides the `/api/contact` API endpoint. Whenever a user submits the contact form, this file uses Nodemailer to:
    *   Send a new lead notification email to the **Admin**.
    *   Send an auto-reply confirmation email to the **Customer**.
*   **[.env](file:///c:/Users/Shashank/Downloads/manufactperfex-105/rajshree-website/.env):**
    A file to store sensitive credentials (e.g., SMTP Host, SMTP User, SMTP Password, Receiver Email).
*   **[vite.config.js](file:///c:/Users/Shashank/Downloads/manufactperfex-105/rajshree-website/vite.config.js):**
    Vite compiler configuration. It has a `proxy` set up to automatically forward `/api/...` requests from the frontend to the backend (`http://localhost:5000`).

### 2. Frontend React Components ([src/components/](file:///c:/Users/Shashank/Downloads/manufactperfex-105/rajshree-website/src/components)):
*   **[Navbar.jsx](file:///c:/Users/Shashank/Downloads/manufactperfex-105/rajshree-website/src/components/Navbar.jsx):** A sticky navigation bar that changes its background on scroll. It includes a responsive hamburger menu for mobile devices.
*   **[Hero.jsx](file:///c:/Users/Shashank/Downloads/manufactperfex-105/rajshree-website/src/components/Hero.jsx):** The main website banner containing the company's objective, an attractive background image, and an "Explore Products" call-to-action button.
*   **[About.jsx](file:///c:/Users/Shashank/Downloads/manufactperfex-105/rajshree-website/src/components/About.jsx):** Company profile, history, and key statistics (e.g., 15+ years of experience, 500+ projects).
*   **[Products.jsx](file:///c:/Users/Shashank/Downloads/manufactperfex-105/rajshree-website/src/components/Products.jsx):** Detailed information, features, and applications of various pipes manufactured by Rajshree (such as HDPE Pipes, PVC Pipes, Sprinkler Systems, MDPE, and Column Pipes).
*   **[Certifications.jsx](file:///c:/Users/Shashank/Downloads/manufactperfex-105/rajshree-website/src/components/Certifications.jsx):** Information regarding ISI Mark, ISO Certifications, and quality testing standards (e.g., Density, Tensile, Hydrostatic pressure test).
*   **[Contact.jsx](file:///c:/Users/Shashank/Downloads/manufactperfex-105/rajshree-website/src/components/Contact.jsx):** The contact form component. It includes client-side validation (Name, Email, Phone Number, Subject) and sends data to the API (`/api/contact`), displaying success or error alerts to the user.

---

## 🚀 How to Run the Project

To run the project fully, you need to start both the **Frontend** and the **Backend**:

### Step 1: Install Dependencies
If you haven't installed the packages yet, run:
```bash
npm install
```

### Step 2: Set Environment Variables
Create a `.env` file in the root directory (or copy and edit `.env.example`) and fill in your SMTP credentials:
```ini
PORT=5000
SMTP_HOST="smtp-relay.brevo.com"
SMTP_PORT=587
SMTP_USER="your-brevo-smtp-email"
SMTP_PASS="your-brevo-smtp-password"
RECEIVER_EMAIL="email-where-leads-should-be-received"
```

### Step 3: Run the Backend Server
Open a terminal and run:
```bash
npm run server
```
This will start the backend server at `http://localhost:5000`.

### Step 4: Run the Frontend App
Open another terminal window and run:
```bash
npm run dev
```
(Or run `npm run dev -- --host` to expose the server to your local network). This will host your website at `http://localhost:5173`.