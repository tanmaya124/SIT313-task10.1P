const express = require('express');
const bodyParser = require('body-parser');
const mailgun = require('mailgun-js');

const app = express();
const PORT = 3000;

// Mailgun configuration
const API_KEY = 'key-8e89b9c23e4d4efb550f0f8169970ca8';
const DOMAIN = 'sandboxc944f8cf90384b10b2b8f3ab141afb0b.mailgun.org';
const mg = mailgun({ apiKey: API_KEY, domain: DOMAIN });

// Set up middlewares
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve the HTML form
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Handle form submission
app.post('/subscribe', async (req, res) => {
  const email = req.body.email;

  try {
    // Send welcome email
    const data = {
      from: 'Tanmaya <shashwatvig46@gmail.com>',
      to: email,
      subject: 'Welcome!',
      text: 'Thank you for subscribing to our newsletter. We are excited to have you on board.'
    };

    await mg.messages().send(data);
    res.status(200).send('Subscription successful!');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

