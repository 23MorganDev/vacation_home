const nodemailer = require("nodemailer");
require("dotenv").config();

//email transporter using SMPT settings

const transporter = nodemailer.createTransport({
  service: "Yahoo",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

//function to send the booking to the email

const sendBookingEmail = async (bookingDetails) => {
  const { name, email, check_in, check_out, guests } = bookingDetails;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECIPIENT_USER,
    subject: "New Booking Received",
    text: `Booking from ${name} (${email}).`,

    html: `
    <h2>New Reservation Information</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email To Reply To:</strong> ${email}</p>
      <p><strong>Check-in Date:</strong> ${check_in}</p>
      <p><strong>Check-out Date:</strong> ${check_out}</p>
      <p><strong>Guests:</strong> ${guests}</p>
      <br>
      <p>Check your admin dashboard for more details.</p>
        `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Booking email sent successfully!");
  } catch (error) {
    console.error(
      "Error sending booking email:",
      error.response || error.message || error
    );
  }
};

module.exports = sendBookingEmail;
