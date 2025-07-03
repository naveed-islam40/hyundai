import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();
console.log("Customer email:", customerInfo?.email);
console.log("Dealer CC email:", dealerInfo?.emailAddress2);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});



export async function sendEmail({ to, subject, text, html }) {
  const mailOptions = {
    from: '"Your App Name" <your.email@gmail.com>',
    to:'info@northtexasag.org',
    subject,
    text,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info.response);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}
