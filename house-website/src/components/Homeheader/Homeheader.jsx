import React from "react";
import {NavLink } from "react-router-dom";
import "./Homeheader.css";

const Homeheader = () => {
  return (
    <>
      <div className="logo">Lamu House</div>
      <nav>
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/overview"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Overview
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/availability"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Availability
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/rates"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Rates
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacts"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contacts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="book-button">
        <button className="book-now">BOOK NOW</button>
      </div>
    </>
  );
};

export default Homeheader;
