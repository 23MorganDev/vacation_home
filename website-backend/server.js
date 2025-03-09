require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// CORS CONFIGURATION
const corsOptions = {
    origin: ["http://localhost:5173", "https://mbuyuni-house.onrender.com"],
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
};

// CORS middleware
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

// Middleware to parse JSON
app.use(express.json());

// DB CONNECT
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tls: true,   
    ssl: true    
});

const DB = mongoose.connection;
DB.on("error", (err) => console.error("Database connection error:", err));
DB.once("open", () => console.log("Database connected successfully!"));

mongoose.set("debug", true);

// Routes imports
const bookingRoute = require("./routes/booking_route/booking.js");
app.use("/backend", bookingRoute);

// Routes
app.use("/backend", bookingRoute);

// Catch-all for unmatched routes
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.status(404).json({ error: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err);
    res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
    res.status(err.status || 500).json({ error: err.message });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
});
