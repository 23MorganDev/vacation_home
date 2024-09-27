import React from "react";
import "./Overview.css";
import Homeheader from "../Homeheader/Homeheader.jsx";
import Footer from "../Footer/Footer.jsx";

const Overview = () => {
  return (
    <>
      {" "}
      <div>
        <Homeheader />
      </div>
      <div className="overview">
        {/* Top Div with Image and Header */}
        <header className="overview-header">
          <img
            src="https://via.placeholder.com/1920x400"
            alt="Vacation Home"
            className="header-image"
          />
        </header>
        {/* Description of the Vacation Place */}
        <section className="description">
          <h2>Welcome to Our Vacation Home</h2>
          <p>
            This is a beautiful vacation home located in a serene environment.
            Enjoy your stay with all the modern amenities and a peaceful
            atmosphere.
          </p>
          <h3>House Rules</h3>
          <ul>
            <li>No smoking indoors.</li>
            <li>Check-in after 3 PM.</li>
            <li>Check-out by 11 AM.</li>
          </ul>
        </section>
        {/* Pictures Catalogue */}
        <section className="picture-catalogue">
          <h2>Picture Catalogue</h2>
          <div className="pictures">
            <img src="https://via.placeholder.com/300" alt="Room 1" />
            <img src="https://via.placeholder.com/300" alt="Room 2" />
            <img src="https://via.placeholder.com/300" alt="Living Room" />
          </div>
        </section>
        {/* Sleeping Arrangements */}
        <section className="sleeping-arrangements">
          <h2>Sleeping Arrangements</h2>
          <p>
            The vacation home includes 3 bedrooms:
            <ul>
              <li>Bedroom 1: King size bed</li>
              <li>Bedroom 2: Queen size bed</li>
              <li>Bedroom 3: Two single beds</li>
            </ul>
          </p>
        </section>
        {/* Amenities Section */}
        <section className="amenities">
          <h2>Amenities</h2>
          <ul>
            <li>Free Wi-Fi</li>
            <li>Swimming Pool</li>
            <li>Air Conditioning</li>
            <li>Kitchen with appliances</li>
            <li>BBQ Grill</li>
          </ul>
        </section>
        {/* House Rules */}
        <section className="house-rules">
          <h2>House Rules</h2>
          <ul>
            <li>Respect the neighbors.</li>
            <li>Keep noise to a minimum after 10 PM.</li>
            <li>Dispose of trash properly.</li>
          </ul>
        </section>
        {/* House Policy and Notes */}
        <section className="house-policy">
          <h2>House Policy & Notes</h2>
          <p>
            Please ensure to read the full policy document available in the
            house and feel free to contact us for any queries during your stay.
          </p>
        </section>
        {/* Footer with Social Media Links */}
        <Footer /> {/* Use theFooter component */}
      </div>
    </>
  );
};

export default Overview;
