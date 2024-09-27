import React, { useState } from "react";
import Homeheader from "../Homeheader/Homeheader";
import Footer from "../Footer/Footer";
import "./Availability.css"; // Import CSS file for styling

const CalendarAvailability = () => {
  // State to manage the current month and year
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Array of month names for display
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Example availability data (replace this with your actual data)
  const availability = {
    "2024-09-01": true,
    "2024-09-02": false,
    "2024-09-03": true,
    "2024-09-04": true,
    "2024-09-05": false,
    // ... add more dates as needed
  };

  // Get the number of days in a specific month
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Get the starting day of the month (0-6, 0=Sunday)
  const getStartDay = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const startDay = getStartDay(currentMonth, currentYear);

  // Function to go to the next month
  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Function to go to the previous month
  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  return (
    <>
      {" "}
      <div>
        <Homeheader />
      </div>
      <section className="calendar-availability">
        <h2>Availability Calendar</h2>
        <div className="month-navigation">
          <button onClick={handlePreviousMonth}>Previous</button>
          <h3>
            {monthNames[currentMonth]} {currentYear}
          </h3>
          <button onClick={handleNextMonth}>Next</button>
        </div>
        <div className="calendar-grid">
          {/* Days of the week */}
          <div className="calendar-header">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>
          {/* Empty slots before the first day of the month */}
          {Array.from({ length: startDay }).map((_, index) => (
            <div className="calendar-day empty" key={index}></div>
          ))}
          {/* Days of the month */}
          {Array.from({ length: daysInMonth }).map((_, day) => {
            const date = new Date(currentYear, currentMonth, day + 1);
            const dateString = date.toISOString().split("T")[0]; // Format as YYYY-MM-DD
            const isAvailable =
              availability[dateString] !== undefined
                ? availability[dateString]
                : false;

            return (
              <div
                key={day}
                className={`calendar-day ${
                  isAvailable ? "available" : "unavailable"
                }`}
              >
                {day + 1}
                <span className="status">
                  {isAvailable ? "Available" : "Unavailable"}
                </span>
              </div>
            );
          })}
        </div>
      </section>
      {/*footer section*/}
      <div>
        <Footer />
      </div>
    </>
  );
};

export default CalendarAvailability;
