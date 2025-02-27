import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import configPath from "../components/Paths/configPaths";
import "./Booking.css"

const Booking = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [check_in, setCheck_in] = useState("");
    const [check_out, setCheck_out] = useState("");
    const [guests, setGuests] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleBooking = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${BACKEND_BASE_URL}${configPath.ENDPOINTS.BOOKING}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    check_in: new Date(check_in).toISOString(),
                    check_out: new Date(check_out).toISOString(),
                    guests:Number(guests),
                }),
            });

            if (!response.ok) {
                throw new Error("Booking failed! Please try again.");
            }

            console.log("Booking placed successfully");
            navigate("/");
        } catch (error) {
            console.error("Server error occurred when trying to book:", error);
            setError(error.message);
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
