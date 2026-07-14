import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

console.log('Testing SMTP connection with:');
console.log('Host:', process.env.SMTP_HOST || 'smtp-relay.brevo.com');
console.log('Port:', process.env.SMTP_PORT || 587);
console.log('User:', process.env.SMTP_USER);
console.log('Pass:', process.env.SMTP_PASS ? '********' : 'undefined');

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
    console.error('SMTP Connection Failed:');
    console.error(error);
  } else {
    console.log('SMTP Connection Success!');
  }
});
