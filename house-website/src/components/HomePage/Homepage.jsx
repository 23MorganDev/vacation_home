import React from 'react';
import Homeheader from "../Homeheader/Homeheader";
import Footer from "../Footer/Footer";
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Navigation bar */}
      <Homeheader />

      {/* Main content */}
      <main className="home-main">
        <div className="content">
          <h1>Welcome to Lamu House</h1>
          <p>Your journey of tranquility and serene living starts here.</p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
