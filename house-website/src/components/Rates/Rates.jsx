import React from "react";
import Homeheader from "../Homeheader/Homeheader";
import Footer from "../Footer/Footer";
import "./Rates.css"; // Import CSS for styling

const Rates = () => {
  return (
    <>
      {" "}
      <header>
        <Homeheader />
      </header>
      <section className="rates-section">
        <h2>Rates</h2>
        <p>
          Our rates may vary day-by-day. Please select a period to see the exact
          price for your stay.
        </p>

        <h3>Policy and Notes</h3>
        <div className="policy-section">
          <h4>Payment Schedule</h4>
          <ul>
            <li>50% of the total amount is due at the time of booking.</li>
            <li>The remaining amount is to be paid 7 days before arrival.</li>
          </ul>

          <h4>Cancellation Policy</h4>
          <ul>
            <li>
              100% of paid prepayments refundable when canceled 7 days before
              arrival or earlier.
            </li>
            <li>0% refundable if canceled after.</li>
          </ul>

          <h4>Security Deposit</h4>
          <p>
            A pre-authorization of <strong>KSh64,372</strong> is held 1 day
            before arrival and voided 1 day after departure.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Rates;
