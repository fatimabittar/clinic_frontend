import React from "react";
import logo from "../../images/logo.png";
import "../../styles/Header.css";

export const Header = () => {
<<<<<<< HEAD
  const path = window.location.pathname;
=======
const path =window.location.pathname;
>>>>>>> 6f082cbaad8734c8205f9ef6f7ca2633778bd4ea
  return (
    <header>
      <a href="/"><img src={logo} alt="logo" className="logoheader"/></a>
      <hr1 />
      <ul>
        <li>
<<<<<<< HEAD
          <a href="/" className={path === '/' ? "current" : ""}>Home</a>
        </li>
        <li>
          <a href="/about" className={path === '/about' ? "current" : ""}>About</a>
        </li>
        <li>
          <a href="/services" className={path === '/services' ? "current" : ""}>Services</a>
        </li>
        <li>
          <a href="/reviews" className={path === '/reviews' ? "current" : ""}>Reviews</a>
        </li>
        <li>
          <a href="/contact" className={path === '/contact' ? "current" : ""}>Contact</a>
=======
          <a href="/" className={path=== '/' ? "current" : ""}>Home</a>
        </li>
        <li>
          <a href="/about" className={path=== '/about' ? "current" : ""}>About</a>
        </li>
        <li>
          <a href="/services" className={path=== '/services' ? "current" : ""}>Services</a>
        </li>
        <li>
          <a href="/reviews" className={path=== '/reviews' ? "current" : ""}>Reviews</a>
        </li>
        <li>
          <a href="/contact" className={path=== '/contact' ? "current" : ""}>Contact</a>
>>>>>>> 6f082cbaad8734c8205f9ef6f7ca2633778bd4ea
        </li>
        <li><button className="primary-button">Appointment</button></li>
      </ul>

   
    </header>
    
  );
};
