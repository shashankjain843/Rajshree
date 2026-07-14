import dotenv from 'dotenv';
dotenv.config();

async function testBrevoAPI() {
  console.log('--- Testing Brevo REST API ---');
  
  const apiKey = process.env.SMTP_PASS;
  if (!apiKey) {
    console.error('Error: SMTP_PASS / Brevo API Key not found in environment variables.');
    return;
  }
  const payload = {
    sender: { name: 'Rajshree Website Test', email: 'realshashankjain@gmail.com' },
    to: [{ email: 'realshashankjain@gmail.com', name: 'Shashank Jain' }],
    subject: 'Brevo API Test Handshake',
    htmlContent: '<html><body><h3>Brevo HTTP API works!</h3><p>This email was successfully routed via HTTPS.</p></body></html>'
  };

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    console.log('[API Response Status]:', response.status);
    console.log('[API Response Body]:', result);
  } catch (error) {
    console.error('[API Connection Error]:', error.message);
  }
}

testBrevoAPI();
