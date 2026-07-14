import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp-relay.brevo.com',
  port: parseInt(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  }
});

const mailOptions = {
  from: `"Rajshree Inquiry Portal" <${process.env.SENDER_EMAIL || 'realshashankjain@gmail.com'}>`,
  to: process.env.RECEIVER_EMAIL || 'realshashankjain@gmail.com',
  subject: 'Test email from Antigravity Agent',
  text: 'Hello, this is a test email to verify that mail delivery is working.',
  html: '<b>Hello, this is a test email to verify that mail delivery is working.</b>'
};

console.log('Attempting to send email...');
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('Response:', info.response);
  }
});
