import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "./Homeheader.css";

const Homeheader = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }


  return (
    <>
      <header className="header">
        <div className="logo">Mbuyuni House</div>
        <div className="menu-icon" onClick={toggleDrawer}>
          {isDrawerOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>
        <nav className={`nav-links ${isDrawerOpen ? "open" : ""}`}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={toggleDrawer}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/overview"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={toggleDrawer}
              >
                Overview
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={toggleDrawer}
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/availability"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={toggleDrawer}
              >
                Availability
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/rates"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={toggleDrawer}
              >
                Rates
              </NavLink>
            </li>
          </ul>
          <div className="book-button">
            <NavLink to="/booking">
              <button className="book-now" onClick={toggleDrawer}>
                BOOK NOW
              </button>
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Homeheader;
