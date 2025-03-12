const express = require("express");
const router = express.Router();
const sendBookingEmail = require("../utils/mailer.js")

router.post("/bookings/create", async (req, res) => {
  try {
    //debugging
    console.log("Received booking resuts:", req.body);
    const { name, email, check_in, check_out, guests } = req.body;

    //field checks
    if (!name || !email || !check_in || !check_out || !guests) {
      return res.status(400).json({ error: "All fields must be filled" });
    }

    //email format checker
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
      return res
        .status(400)
        .json({ error: "Check-out date must be after check-in date" });
    }

    if (!Number.isInteger(guests) || guests < 1) {
      return res
        .status(400)
        .json({ error: "Guests must be a positive integer" });
    }

    //send booking email

    await sendBookingEmail(req.body);

    res.json({
      message: "Booking was placed succesfully",
      booking: req.body,
    });
  } catch (error) {
    console.error(error);

    // Handle Mongoose validation errors
    if (error.name === "ValidationError") {
      return res.status(400).json({ error: error.message });
    }
    res.status(500).json({ error: "Booking failed due to server error!" });
  }
});

module.exports = router;
