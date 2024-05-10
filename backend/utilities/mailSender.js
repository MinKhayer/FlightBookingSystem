const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "smtp",
  host: process.env.MAIL_HOST, // Smtp host
  port: 465,
  secure: true, // Set to true if using a secure connection (e.g., TLS/SSL)
  requireTLS: true,
  auth: {
    user: process.env.MAIL_USERNAME, // Smtp username
    pass: process.env.MAIL_PASSWORD, // Smtp Password
  },
});

module.exports.sendMail = (mailOptions) =>
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error occurred while sending email:", error);
    } else {
      console.log("Email sent successfully:", info.response);
    }
  });
