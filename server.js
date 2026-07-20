import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Create SMTP Transporter using Brevo Credentials
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp-relay.brevo.com',
  port: parseInt(process.env.SMTP_PORT) || 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  debug: true, // enable SMTP debug output in console logs
  logger: true // log SMTP traffic to console
});

// Verify SMTP connection config on startup
transporter.verify((error) => {
  if (error) {
    console.error('[SMTP Connection Error]: Failed to authenticate with Brevo.');
    console.error(error);
  } else {
    console.log('[SMTP Transporter Success]: Server is ready to route emails.');
  }
});

// 1. POST API: Handle Contact Form Submission & Email Routing
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, product, message } = req.body;

  // Basic Server-Side Validation
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ success: false, message: 'Please fill out all required fields.' });
  }

  const receiverEmail = process.env.RECEIVER_EMAIL || 'realshashankjain@gmail.com';
  const senderEmail = process.env.SENDER_EMAIL || 'realshashankjain@gmail.com';

  // Email template for Rajshree Admin
  const adminMailOptions = {
    from: `"Rajshree Inquiry Portal" <${senderEmail}>`,
    to: receiverEmail,
    replyTo: email,
    subject: `New Commercial Pipe Inquiry: ${name} (${product.toUpperCase()})`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #f8fafc;">
        <h2 style="color: #0F52BA; border-bottom: 2px solid #EA580C; padding-pb: 10px; margin-top: 0;">New inquiry Received</h2>
        <p style="font-size: 16px; color: #1E293B;">A new lead has been submitted via the Rajshree Technoplast website contact form. Details are listed below:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr style="background-color: #ffffff; border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 12px; font-weight: bold; color: #475569; width: 140px;">Client Name:</td>
            <td style="padding: 12px; color: #1E293B;">${name}</td>
          </tr>
          <tr style="background-color: #f1f5f9; border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 12px; font-weight: bold; color: #475569;">Email Address:</td>
            <td style="padding: 12px; color: #1E293B;"><a href="mailto:${email}" style="color: #0F52BA;">${email}</a></td>
          </tr>
          <tr style="background-color: #ffffff; border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 12px; font-weight: bold; color: #475569;">Phone Number:</td>
            <td style="padding: 12px; color: #1E293B;"><a href="tel:${phone}" style="color: #0F52BA;">${phone}</a></td>
          </tr>
          <tr style="background-color: #f1f5f9; border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 12px; font-weight: bold; color: #475569;">Product Interest:</td>
            <td style="padding: 12px; color: #1E293B; font-weight: bold; text-transform: uppercase;">${product} Pipes</td>
          </tr>
          <tr style="background-color: #ffffff;">
            <td style="padding: 12px; font-weight: bold; color: #475569; vertical-align: top;">Requirement Notes:</td>
            <td style="padding: 12px; color: #1E293B; line-height: 1.5;">${message}</td>
          </tr>
        </table>
        
        <div style="margin-top: 30px; padding-top: 15px; border-t: 1px solid #e2e8f0; font-size: 11px; color: #94a3b8; text-align: center;">
          This inquiry was securely processed and sent via Nodemailer on Rajshree Group Server.
        </div>
      </div>
    `
  };

  // Auto-Reply template sent to the Customer
  const customerMailOptions = {
    from: `"Rajshree Technoplast" <${senderEmail}>`,
    to: email,
    subject: 'We Have Received Your Inquiry - Rajshree Technoplast Pvt Ltd',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
        <div style="text-align: center; margin-bottom: 20px;">
          <h1 style="color: #0F52BA; margin: 0; font-size: 26px;">RAJSHREE TECHNOPLAST</h1>
          <p style="color: #EA580C; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; margin-top: 5px;">Empowering Progress Through Liquid Network</p>
        </div>
        
        <p style="font-size: 15px; color: #334155; line-height: 1.5;">Dear <strong>${name}</strong>,</p>
        <p style="font-size: 15px; color: #334155; line-height: 1.5;">Thank you for contacting Rajshree Technoplast Pvt Ltd. We have successfully received your inquiry regarding our <strong>${product.toUpperCase()} Piping Systems</strong>.</p>
        <p style="font-size: 15px; color: #334155; line-height: 1.5;">Our engineering estimation and sales department is reviewing your requirements. We will compile the price list and technical catalog and contact you at <strong>${phone}</strong> within the next 24 business hours.</p>
        
        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h4 style="margin-top: 0; color: #475569; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px;">Your Inquiry Summary:</h4>
          <p style="margin: 5px 0; font-size: 13px; color: #475569;"><strong>Interest:</strong> ${product.toUpperCase()} Pipes</p>
          <p style="margin: 5px 0; font-size: 13px; color: #475569;"><strong>Message:</strong> ${message}</p>
        </div>

        <p style="font-size: 15px; color: #334155; line-height: 1.5;">If you need urgent assistance, feel free to call our direct customer helpline at <a href="tel:+919829050790" style="color: #0F52BA; font-weight: bold;">+91-9829050790</a> or chat with us on WhatsApp.</p>
        
        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 30px 0;" />
        
        <div style="font-size: 12px; color: #64748b; line-height: 1.5;">
          <strong>Rajshree Technoplast Pvt Ltd</strong><br />
          Ajmer Road, Jaipur-302021, Rajasthan, India<br />
          Email: <a href="mailto:rajshreearun123@gmail.com" style="color: #0F52BA;">rajshreearun123@gmail.com</a>
        </div>
      </div>
    `
  };

  try {
    // 1. Send inquiry to company Admin
    const infoAdmin = await transporter.sendMail(adminMailOptions);
    console.log('[SMTP Admin Inquiry Sent]:', infoAdmin.messageId);

    // 2. Send receipt auto-reply to customer
    const infoCustomer = await transporter.sendMail(customerMailOptions);
    console.log('[SMTP Customer Auto-Reply Sent]:', infoCustomer.messageId);

    res.status(200).json({ success: true, message: 'Your inquiry has been successfully sent!' });
  } catch (error) {
    console.error('[SMTP Sending Error]: Failed to transmit emails.');
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to send inquiry. Please try again later or call support.', error: error.message });
  }
});

// 2. GET API: Test SMTP connection and send a test email on demand
app.get('/api/test-email', async (req, res) => {
  const senderEmail = process.env.SENDER_EMAIL || 'realshashankjain@gmail.com';
  const receiverEmail = process.env.RECEIVER_EMAIL || 'realshashankjain@gmail.com';

  const testMailOptions = {
    from: `"SMTP Test Handshake" <${senderEmail}>`,
    to: receiverEmail,
    subject: 'Rajshree Website SMTP Diagnostics - Handshake Successful',
    text: `Hello, this is a test diagnostics email triggered from the Rajshree Technoplast server to verify that the Brevo SMTP server is authenticating correctly. Connection verified on ${new Date().toISOString()}`,
    html: `
      <div style="font-family: monospace; padding: 20px; border: 1px solid #3b82f6; border-radius: 8px; background-color: #eff6ff; max-width: 500px;">
        <h3 style="color: #1d4ed8; margin-top: 0;">Brevo SMTP Connection Verified!</h3>
        <p>Your SMTP handshake is working correctly. Emails can now be sent via <strong>Nodemailer</strong>.</p>
        <ul>
          <li><strong>Host:</strong> smtp-relay.brevo.com</li>
          <li><strong>Auth User:</strong> ${senderEmail}</li>
          <li><strong>Target Destination:</strong> ${receiverEmail}</li>
          <li><strong>Verified Time:</strong> ${new Date().toLocaleString()}</li>
        </ul>
      </div>
    `
  };

  try {
    const info = await transporter.sendMail(testMailOptions);
    console.log('[SMTP Test Diagnostics Sent]:', info.messageId);
    res.status(200).json({ success: true, message: 'SMTP test email sent successfully!', messageId: info.messageId });
  } catch (error) {
    console.error('[SMTP Test Diagnostics Failure]:');
    console.error(error);
    res.status(500).json({ success: false, message: 'SMTP diagnostics handshake failed.', error: error.message });
  }
});

// Serve Frontend Static build in production (only when running locally, Vercel serves static files via its CDN)
if (!process.env.VERCEL) {
  app.use(express.static(path.join(__dirname, 'dist')));

  app.get(/.*/, (req, res) => {
    // If request doesn't match an API route, serve the index.html
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  });
}

// Start Server (only if not running as a Vercel Serverless Function)
if (!process.env.VERCEL) {
  app.use(express.static(path.join(__dirname, 'dist')));
  app.listen(PORT, () => {
    console.log(`[Full-Stack Server Running]: Express server active on http://localhost:${PORT}`);
  });
}

export default app;
