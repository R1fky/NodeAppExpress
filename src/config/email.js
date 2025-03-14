const nodemailer = require("nodemailer"); //nodemailer\

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.APP_PASSWORD,
  },
});

module.exports = transporter;
