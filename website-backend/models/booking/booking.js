const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },

  check_in: {
    type: Date,
    required: true,
    validate: {
      validator: function (value) {
        const today = new Date();
        today.setHours(0, 0, 0, 0); 
        return value >= today;
      },
      message: "Check-in date should be today or in the future.",
    },
  },

  check_out: {
    type: Date,
    required: true,
    validate: {
      validator: function (value) {
        return this.check_in && value > this.check_in;
      },
      message: "Check-out date must be after the check-in date.",
    },
  },

  guests: {
    type: Number,
    required: true,
    min: [1, "There must be at least one guest for a booking."],
  },
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
