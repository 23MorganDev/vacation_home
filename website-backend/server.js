require("dotenv").config();
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express();

// CORS middleware
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

//middleware
app.use(express.json());

//DB CONNECT

mongoose.connect(process.env.MONGO_URL)

const DB = mongoose.connection;
DB.on("error", (err) => console.error("Database connection error:", err));
DB.once("open", () => console.log("Database connected successfully!"));

mongoose.set("debug", true)

//CORS CONFIGURATION
const corsOptions = {
    origin: ["http://localhost:5173", "https://mbuyuni-vacation-home.onrender.com", "https://mbuyuni-house.onrender.com"],
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}

//routes imports
const bookingRoute = require("./routes/booking_route/booking.js")
app.use("/backend", bookingRoute)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT} in ${process.env.NODE_ENV || 'development'} mode`)
})
