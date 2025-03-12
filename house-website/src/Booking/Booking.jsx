import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser"
import "./Booking.css";


const Booking = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [check_in, setCheck_in] = useState("");
    const [check_out, setCheck_out] = useState("");
    const [guests, setGuests] = useState("");
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const navigate = useNavigate();

    const handleBooking = async (e) => {
        e.preventDefault();
        setError("");
        setSuccessMessage("");


        const templateParams = {
            to_name: import.meta.env.VITE_RECIPIENT_USER_EMAIL,
            name,
            email,
            check_in,
            check_out,
            guests,
        }

        try {
            const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const userID = import.meta.env.VITE_EMAILJS_USER_ID;

            const response = await emailjs.send(serviceID, templateID, templateParams, userID);
            console.log("Email sent successfully!", response.text);

            setSuccessMessage("Booking request sent successfully!");

            // Clear form fields
            setName("");
            setEmail("");
            setCheck_in("");
            setCheck_out("");
            setGuests("");

            setTimeout(() => navigate("/"), 3000);
        } catch (error) {
            console.error("Error sending booking email:", error);
            setError("Failed to send booking. Please try again.");
        }
    };

    return (
        <div className="booking-container">
            <div className="row justify-content-center">
                <div className="col-md-6 booking-box">
                    <h2 className="text-center register-title mb-4">Place Your Booking</h2>
                    <form onSubmit={handleBooking}>
                        <div className="form-group mb-3">
                            <label htmlFor="name" className="custom-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Enter Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="email" className="custom-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="check-in" className="custom-label">Check-in Date</label>
                            <input
                                type="date"
                                className="form-control"
                                id="check-in"
                                value={check_in}
                                onChange={(e) => setCheck_in(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="check-out" className="custom-label">Check-out Date</label>
                            <input
                                type="date"
                                className="form-control"
                                id="check-out"
                                value={check_out}
                                onChange={(e) => setCheck_out(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="guests" className="custom-label">Number of Guests</label>
                            <input
                                type="number"
                                className="form-control"
                                id="guests"
                                placeholder="Enter the number of guests"
                                value={guests}
                                onChange={(e) => setGuests(e.target.value)}
                                required
                            />
                        </div>

                        {error && <p className="text-danger">{error}</p>}
                        {successMessage && <p className="text-success">{successMessage}</p>}

                        <button type="submit" className="btn booking-btn w-100">
                            Book Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;
