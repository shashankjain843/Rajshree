import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

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
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  debug: true,
  logger: true
});

transporter.verify((error) => {
  if (error) {
    console.error('[SMTP Connection Error]: Failed to authenticate with Brevo.');
    console.error(error);
  } else {
    console.log('[SMTP Transporter Success]: Server is ready to route emails.');
  }
});

app.post('/api/contact', async (req, res) => {
  const { 
    name, 
    email, 
    phone, 
    companyName, 
    product, 
    diameter, 
    pressure, 
    quantity, 
    deliveryLocation, 
    notes, 
    message 
  } = req.body;

  if (!name || (!email && !phone)) {
    return res.status(400).json({ success: false, message: 'Please fill out all required fields.' });
  }

  const receiverEmail = process.env.RECEIVER_EMAIL || 'realshashankjain@gmail.com';
  const senderEmail = process.env.SENDER_EMAIL || 'realshashankjain@gmail.com';

  // Fix "PIPES PIPES" Duplicate Bug
  let rawProduct = product ? product.trim() : 'General Piping';
  let selectedProduct = rawProduct;
  if (!rawProduct.toUpperCase().includes('PIPE')) {
    selectedProduct = `${rawProduct} Pipes`;
  }

  const cleanCompanyName = companyName && companyName !== 'N/A' ? companyName : null;
  const cleanNotes = (notes && notes !== 'N/A') ? notes : (message && message !== 'N/A' ? message : null);

  // Exact Admin Inquiry Email Template (Strict Specification Parity)
  const adminMailOptions = {
    from: `"Rajshree Inquiry Portal" <${senderEmail}>`,
    to: receiverEmail,
    replyTo: email || senderEmail,
    subject: `New RFQ: ${name} - ${selectedProduct}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; border: 1px solid #E7EAEE; overflow: hidden;">

        <!-- 1. HEADER -->
        <div style="background: linear-gradient(135deg, #0F1E3D 0%, #12294F 100%); padding: 22px 24px; border-top-left-radius: 12px; border-top-right-radius: 12px; text-align: left;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="width: 42px; vertical-align: middle;">
                <div style="width: 38px; height: 38px; background-color: #ffffff; border-radius: 8px; text-align: center; line-height: 38px; font-weight: bold; font-size: 16px; color: #0F1E3D;">
                  RT
                </div>
              </td>
              <td style="padding-left: 12px; vertical-align: middle;">
                <div style="color: #ffffff; font-size: 18px; font-weight: bold; line-height: 1.2;">
                  Rajshree Technoplast
                </div>
                <div style="color: #8FB8E8; font-size: 10px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px; margin-top: 3px;">
                  B2B Inquiry Notification
                </div>
              </td>
            </tr>
          </table>
        </div>

        <!-- 2. BODY -->
        <div style="padding: 24px; text-align: left;">

          <!-- Product Sub-header & Main Heading -->
          <div style="color: #185FA5; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">
            ${selectedProduct.toUpperCase()}
          </div>
          <h2 style="margin: 0 0 6px 0; font-size: 19px; font-weight: bold; color: #0F172A;">
            New lead received
          </h2>
          <p style="margin: 0 0 24px 0; font-size: 13px; color: #64748B; line-height: 1.5;">
            A commercial pipe quote request has been submitted via the website. Full requirement details are below.
          </p>

          <!-- SECTION: CLIENT DETAILS -->
          <div style="font-size: 11px; font-weight: bold; color: #94A3B8; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">
            CLIENT DETAILS
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 13px;">
            <tr style="border-bottom: 1px solid #F1F5F9;">
              <td style="padding: 9px 0; color: #64748B; width: 130px;">Name</td>
              <td style="padding: 9px 0; color: #0F172A; font-weight: bold;">${name}</td>
            </tr>
            ${cleanCompanyName ? `
            <tr style="border-bottom: 1px solid #F1F5F9;">
              <td style="padding: 9px 0; color: #64748B;">Company</td>
              <td style="padding: 9px 0; color: #0F172A;">${cleanCompanyName}</td>
            </tr>` : ''}
            <tr style="border-bottom: 1px solid #F1F5F9;">
              <td style="padding: 9px 0; color: #64748B;">Email</td>
              <td style="padding: 9px 0;">
                <a href="mailto:${email}" style="color: #185FA5; text-decoration: none;">${email || 'Not provided'}</a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #F1F5F9;">
              <td style="padding: 9px 0; color: #64748B;">Phone</td>
              <td style="padding: 9px 0;">
                <a href="tel:${phone}" style="color: #185FA5; text-decoration: none;">${phone}</a>
              </td>
            </tr>
          </table>

          <!-- SECTION: ORDER SPECIFICATIONS (2x2 Grid) -->
          <div style="font-size: 11px; font-weight: bold; color: #94A3B8; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">
            ORDER SPECIFICATIONS
          </div>

          <table style="width: 100%; border-collapse: separate; border-spacing: 8px; margin-left: -8px; margin-right: -8px; margin-bottom: 24px;">
            <tr>
              <td style="width: 50%; background-color: #F8FAFC; border-radius: 8px; padding: 12px; vertical-align: top;">
                <div style="font-size: 11px; color: #94A3B8; margin-bottom: 4px;">Size/OD</div>
                <div style="font-size: 14px; font-weight: bold; color: #0F172A;">${diameter || 'Standard'}</div>
              </td>
              <td style="width: 50%; background-color: #F8FAFC; border-radius: 8px; padding: 12px; vertical-align: top;">
                <div style="font-size: 11px; color: #94A3B8; margin-bottom: 4px;">Pressure Rating</div>
                <div style="font-size: 14px; font-weight: bold; color: #0F172A;">${pressure || 'Standard'}</div>
              </td>
            </tr>
            <tr>
              <td style="width: 50%; background-color: #F8FAFC; border-radius: 8px; padding: 12px; vertical-align: top;">
                <div style="font-size: 11px; color: #94A3B8; margin-bottom: 4px;">Quantity</div>
                <div style="font-size: 14px; font-weight: bold; color: #0F172A;">${quantity || 'Custom'}</div>
              </td>
              <td style="width: 50%; background-color: #F8FAFC; border-radius: 8px; padding: 12px; vertical-align: top;">
                <div style="font-size: 11px; color: #94A3B8; margin-bottom: 4px;">Delivery Location</div>
                <div style="font-size: 14px; font-weight: bold; color: #0F172A;">${deliveryLocation || 'Plant / PAN India'}</div>
              </td>
            </tr>
          </table>

          <!-- SECTION: NOTES -->
          ${cleanNotes ? `
          <div style="font-size: 11px; font-weight: bold; color: #94A3B8; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">
            NOTES
          </div>
          <div style="font-size: 13px; color: #334155; line-height: 1.5; margin-bottom: 24px;">
            ${cleanNotes}
          </div>` : ''}

          <!-- ACTION BUTTONS -->
          <table style="width: 100%; border-collapse: separate; border-spacing: 8px; margin-left: -8px; margin-right: -8px;">
            <tr>
              <td style="width: 50%;">
                <a href="tel:${phone}" style="display: block; background-color: #185FA5; color: #ffffff; font-size: 13px; font-weight: bold; text-align: center; text-decoration: none; padding: 11px 16px; border-radius: 8px;">
                  Call client
                </a>
              </td>
              <td style="width: 50%;">
                <a href="mailto:${email}" style="display: block; background-color: #F1F5F9; color: #1E293B; font-size: 13px; font-weight: bold; text-align: center; text-decoration: none; padding: 11px 16px; border-radius: 8px;">
                  Reply by email
                </a>
              </td>
            </tr>
          </table>

        </div>

        <!-- 3. FOOTER -->
        <div style="background-color: #F8FAFC; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; padding: 14px 20px; text-align: center; font-size: 11px; color: #94A3B8; border-top: 1px solid #E7EAEE;">
          Rajshree Technoplast Pvt Ltd · Ajmer Road, Jaipur, Rajasthan · Processed via secure inquiry portal
        </div>

      </div>
    `
  };

  // Customer Auto-Reply Email (Matching Header & Footer Branding)
  const customerMailOptions = email ? {
    from: `"Rajshree Technoplast" <${senderEmail}>`,
    to: email,
    subject: 'We Have Received Your Inquiry - Rajshree Technoplast Pvt Ltd',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; border: 1px solid #E7EAEE; overflow: hidden;">

        <!-- HEADER (Matching Dark Navy Gradient) -->
        <div style="background: linear-gradient(135deg, #0F1E3D 0%, #12294F 100%); padding: 22px 24px; border-top-left-radius: 12px; border-top-right-radius: 12px; text-align: left;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="width: 42px; vertical-align: middle;">
                <div style="width: 38px; height: 38px; background-color: #ffffff; border-radius: 8px; text-align: center; line-height: 38px; font-weight: bold; font-size: 16px; color: #0F1E3D;">
                  RT
                </div>
              </td>
              <td style="padding-left: 12px; vertical-align: middle;">
                <div style="color: #ffffff; font-size: 18px; font-weight: bold; line-height: 1.2;">
                  Rajshree Technoplast
                </div>
                <div style="color: #8FB8E8; font-size: 10px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px; margin-top: 3px;">
                  Inquiry Acknowledgement
                </div>
              </td>
            </tr>
          </table>
        </div>

        <!-- BODY -->
        <div style="padding: 24px; text-align: left;">
          <h2 style="margin: 0 0 10px 0; font-size: 18px; font-weight: bold; color: #0F172A;">
            Inquiry Received
          </h2>
          <p style="font-size: 14px; color: #334155; line-height: 1.5; margin: 0 0 14px 0;">
            Dear <strong>${name}</strong>,
          </p>
          <p style="font-size: 14px; color: #334155; line-height: 1.5; margin: 0 0 14px 0;">
            Thank you for contacting Rajshree Technoplast Pvt Ltd. We have received your RFQ for <strong>${selectedProduct}</strong>.
          </p>
          <p style="font-size: 14px; color: #334155; line-height: 1.5; margin: 0 0 18px 0;">
            Our commercial sales desk is reviewing your specifications. We will compile your official Proforma Invoice and call you at <strong>${phone}</strong> within 24 business hours.
          </p>

          <div style="background-color: #F8FAFC; border-radius: 8px; padding: 14px; margin-bottom: 18px;">
            <div style="font-size: 11px; font-weight: bold; color: #185FA5; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px;">
              LOGGED SPECIFICATIONS SUMMARY
            </div>
            <div style="font-size: 13px; color: #475569; margin-bottom: 3px;"><strong>Product:</strong> ${selectedProduct}</div>
            ${diameter ? `<div style="font-size: 13px; color: #475569; margin-bottom: 3px;"><strong>Size/OD:</strong> ${diameter}</div>` : ''}
            ${pressure ? `<div style="font-size: 13px; color: #475569; margin-bottom: 3px;"><strong>Pressure Rating:</strong> ${pressure}</div>` : ''}
            ${quantity ? `<div style="font-size: 13px; color: #475569; margin-bottom: 3px;"><strong>Quantity:</strong> ${quantity}</div>` : ''}
          </div>

          <p style="font-size: 13px; color: #334155; line-height: 1.5; margin: 0;">
            For immediate assistance, call our helpline at <a href="tel:+919829050790" style="color: #185FA5; font-weight: bold; text-decoration: none;">+91-9829050790</a>.
          </p>
        </div>

        <!-- FOOTER -->
        <div style="background-color: #F8FAFC; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; padding: 14px 20px; text-align: center; font-size: 11px; color: #94A3B8; border-top: 1px solid #E7EAEE;">
          Rajshree Technoplast Pvt Ltd · Ajmer Road, Jaipur, Rajasthan · Processed via secure inquiry portal
        </div>

      </div>
    `
  } : null;

  try {
    const promises = [transporter.sendMail(adminMailOptions)];
    if (customerMailOptions) {
      promises.push(transporter.sendMail(customerMailOptions));
    }

    const results = await Promise.all(promises);
    console.log('[SMTP Admin Inquiry Sent]:', results[0].messageId);
    if (results[1]) {
      console.log('[SMTP Customer Auto-Reply Sent]:', results[1].messageId);
    }

    res.status(200).json({ success: true, message: 'Your inquiry has been successfully sent!' });
  } catch (error) {
    console.error('[SMTP Transport Failed]:', error);
    res.status(500).json({ success: false, message: 'Failed to send email. Please try again later.' });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Rajshree Technoplast API Server' });
});

app.listen(PORT, () => {
  console.log(`[Server Ready]: Rajshree Express server listening on http://localhost:${PORT}`);
});
