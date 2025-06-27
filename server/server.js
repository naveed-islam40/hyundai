import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST, // smtp.office365.com
  port: process.env.EMAIL_PORT, // 587
  secure: false, // true for port 465, false for 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    ciphers: 'SSLv3',
    rejectUnauthorized: false, // optional if facing TLS errors
  },
});


app.post('/api/send-email', async (req, res) => {
  console.log("POST /api/send-email called");

  const {
    dealerInfo,
    customerInfo,
    scheduleDate,
    selectedPanels: rawSelectedPanels,
    paintServiceInfo,
    totalCost,
    panelDetails
  } = req.body;

  const selectedPanels = Array.isArray(rawSelectedPanels)
    ? rawSelectedPanels
    : [rawSelectedPanels];
//  const panelDetails = selectedPanels?.map((panel, index) => {
//       return `Panel ${index + 1}: ${panel.name} - ${panel.status}`;
//     }).join('\n') || 'No panel data provided.';

  if (!Array.isArray(selectedPanels)) {
    return res.status(400).json({ success: false, error: "selectedPanels must be an array" });
  }

  const htmlContent = `
    <h2>Paint Service Submission</h2>
    <p><strong>Dealer/Shop Name:</strong> ${dealerInfo?.serviceAdvisorFirstName}</p>
    <p><strong>Transaction Date:</strong> ${new Date().toLocaleString()}</p>

    <h3>Customer Info</h3>
    <p><strong>Name:</strong> ${customerInfo?.firstName} ${customerInfo?.lastName}</p>
    <p><strong>Email:</strong> ${customerInfo?.email}</p>
    <p><strong>Phone:</strong> ${customerInfo?.phone || "(972) 123-4567"}</p>
    <p><strong>Zip Code:</strong> ${customerInfo?.zipCode}</p>

    <h3>Dealer Info</h3>
    <p><strong>First Name:</strong> ${dealerInfo?.serviceAdvisorFirstName}</p>
    <p><strong>Email:</strong> ${dealerInfo?.emailAddress2}</p>
    <p><strong>Phone:</strong> ${dealerInfo?.telephone2}</p>
    <p><strong>PO Number:</strong> ${dealerInfo?.poNumber}</p>
    <p><strong>CBSA:</strong> ${paintServiceInfo?.cbsa}</p>

    <h3>Vehicle Info</h3>
    <p><strong>Year/Make/Model:</strong> ${paintServiceInfo?.year} ${paintServiceInfo?.make} ${paintServiceInfo?.model}</p>
    <p><strong>VIN:</strong> ${paintServiceInfo?.vin}</p>
    <p><strong>Paint Color:</strong> ${paintServiceInfo?.paintMaterials}</p>

    <h3>Schedule</h3>
    <p><strong>Date:</strong> ${scheduleDate?.date}</p>
    <p><strong>Time:</strong> ${scheduleDate?.time}</p>

    <h3>Panels</h3>
    <p> ${panelDetails}</p>
   

    <h3>Total Price</h3>
    <p><strong>${totalCost|| '$0.00'}</strong></p>
  `;

  try {
   await transporter.sendMail({
  from: `"Crash Champion" <${process.env.EMAIL_USER}>`,
  to: [
    'darrian.r.kendall@gmail.com',
    'info@northtexasag.org',
    'darrian.kendall@northtexasag.org'
  ],
  cc: ['darrian.kendall@northtexasag.org'],
  bcc:'info@northtexasag.org',
  subject: 'Your Paint Service Request Summary',
  html: htmlContent,
});


    res.status(200).send({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).send({ success: false, error: 'Failed to send email' });
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on http://localhost:5000}`);
});
