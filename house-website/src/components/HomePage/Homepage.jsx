import React from 'react';
import Homeheader from "../Homeheader/Homeheader";
import Footer from "../Footer/Footer";
import './HomePage.css';
import ImageOne from "../../assets/images/BD image2.jpg"


const HomePage = () => {
  return (
    <div className="homepage">
      {/* Home div with NavLinks and Logo */}
      <div>
        <Homeheader />
      </div>

      {/* Center div with two sections */}
      <main className="home-main">
        <section className='bgImage'>
          <img src={ImageOne} alt='background' />
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
