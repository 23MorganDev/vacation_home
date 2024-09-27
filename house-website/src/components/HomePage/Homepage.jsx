import React from 'react';
import Homeheader from "../Homeheader/Homeheader";
import Footer from "../Footer/Footer";
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Home div with NavLinks and Logo */}
      <div>
        <Homeheader />
      </div>

      {/* Center div with two sections */}
      <main className="home-main">
        <section className="info-section">
          <div className="info-content">
            {/* First section with text and image */}
            <div className="info-block">
              <img src="https://via.placeholder.com/150" alt="Placeholder 1" />
              <p>This is the first section with some descriptive text and an image.</p>
            </div>

            {/* Second section with text and image */}
            <div className="info-block">
              <img src="https://via.placeholder.com/150" alt="Placeholder 2" />
              <p>This is the second section with more information and another image.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer with social media and email links */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
