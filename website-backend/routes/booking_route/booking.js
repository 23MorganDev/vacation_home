const express = require("express");
const cors = require("cors"); // require cors in this file
const router = express.Router();
const Booking = require("../../models/booking/booking.js");
const sendBookingEmail = require("./utils/mailer.js");

// Explicitly handle preflight (OPTIONS) requests for /bookings/create
router.options('/bookings/create', cors({
    origin: ["http://localhost:5173", "https://mbuyuni-house.onrender.com"],
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

router.post("/bookings/create", async (req, res) => {
  try {
    console.log("Received booking results:", req.body);
    const { name, email, check_in, check_out, guests } = req.body;

    // Field checks
    if (!name || !email || !check_in || !check_out || !guests) {
      return res.status(400).json({ error: "All fields must be filled" });
    }

    // Email format checker
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    const checkInDate = new Date(check_in);
    const checkOutDate = new Date(check_out);
    if (isNaN(checkInDate) || isNaN(checkOutDate)) {
      return res.status(400).json({ error: "Invalid date format" });
    }
    if (checkOutDate <= checkInDate) {
      return res.status(400).json({ error: "Check-out date must be after check-in date" });
    }

    if (!Number.isInteger(guests) || guests < 1) {
      return res.status(400).json({ error: "Guests must be a positive integer" });
    }

    const newBooking = new Booking({ name, email, check_in, check_out, guests });
    await newBooking.save();

    // Send booking email
    await sendBookingEmail(newBooking.toObject());
    
    res.json({
      message: "Booking was placed succesfully",
      booking: newBooking,
    });
  } catch (error) {
    console.error(error);
    if (error.name === "ValidationError") {
      return res.status(400).json({ error: error.message });
    }
    res.status(500).json({ error: "Booking failed due to server error!" });
  }
});

module.exports = router;
