import React from 'react'
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import './Footer.css'

const Footer = () =>  {
  return (
    
    <footer className="home-footer">
    <p>© 2024 MyWebsite. All rights reserved.</p>
    <div className="social-links">
        <FaXTwitter />
        <i className="fab fa-twitter"></i> 
        <FaYoutube />
        <i className="fab fa-youtube"></i>
        <FaInstagramSquare />
        <i className="fas fa-instagram"></i>
    </div>
  </footer>
  )
}

export default Footer