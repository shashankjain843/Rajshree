import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

console.log("SMTP User:", process.env.SMTP_USER);
console.log("SMTP Host:", process.env.SMTP_HOST);
console.log("SMTP Port:", process.env.SMTP_PORT);
console.log("SMTP Pass Length:", process.env.SMTP_PASS ? process.env.SMTP_PASS.length : 0);

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

transporter.verify((error, success) => {
  if (error) {
    console.error("Verification failed:", error);
  } else {
    console.log("Verification succeeded!");
  }
});
