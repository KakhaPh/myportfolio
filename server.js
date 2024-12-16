const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config();

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use("/", router);

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log("Email Transport Error:", error);
  } else {
    console.log("Email Transport Ready");
  }
});

// Contact Form Route
router.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  
  const name = `${firstName} ${lastName}`;
  
  const mail = {
    from: email,
    to: process.env.EMAIL_RECIPIENT,
    subject: "Contact Form Submission - Portfolio",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
        <h2>New Portfolio Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not Provided'}</p>
        <p><strong>Message:</strong><br>${message}</p>
      </div>
    `,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("Email Send Error:", error);
      return res.status(500).json({ 
        code: 500, 
        status: "Message Send Failed",
        error: error.message 
      });
    } 
    
    res.json({ 
      code: 200, 
      status: "Message Sent Successfully" 
    });
  });
});

// Server Configuration
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});