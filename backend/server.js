const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Route to handle form submission
app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;
  
    try {
      // Create a transporter object using SMTP transport
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
  
      // Setup email data
      const mailOptions = {
        from: process.env.EMAIL_USER, // sender address
        to: 'shreyakv8@gmail.com', // receiver (your email)
        subject: subject, // subject line
        text: `You have a new message from ${name} (${email}):\n\n${message}`, // email includes user's email and message
      };
  
      // Send email
      await transporter.sendMail(mailOptions);
  
      res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error); // Log error details
      res.status(500).json({ message: 'Failed to send message', error: error.message });
    }
  });
  
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
