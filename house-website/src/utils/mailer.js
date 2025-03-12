const nodemailer = require("nodemailer");
import emailjs from 'emailjs-com'
require("dotenv").config();

//email transporter using SMPT settings

const transporter = nodemailer.createTransport({
  service: "Yahoo",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.MAIL_APP_PASSWORD,
  },
});


const sendBookingEmail = async (bookingDetails) => {

  const templateParams = {
    to_name: process.env.EMAIL_USER,
    from_name: process.env.RECIPIENT_USER,     
    name: bookingDetails.name,           
    email: bookingDetails.email,        
    check_in: bookingDetails.check_in,   
    check_out: bookingDetails.check_out, 
    guests: bookingDetails.guests,       
  };

  try {
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userID = import.meta.env.VITE_EMAILJS_USER_ID;

    const result = await emailjs.send(serviceID, templateID, templateParams, userID);
    console.log("Email sent successfully!", result.text);
  } catch (error) {
    console.error("Error sending booking email:", error.response || error.message || error);
  }
};

module.exports = sendBookingEmail;
