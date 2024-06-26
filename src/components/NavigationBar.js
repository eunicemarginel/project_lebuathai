// src/components/NavigationBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../styles/NavigationBar.css';
import logo from '../assets/logo.png'; // Import the logo image

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-menu-container">
        <Link to="/">
          <img src={logo} alt="Lebua Thai" className="logo" />
        </Link>
        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/">🇹🇭</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservation">Reservation</Link></li>
        <li><Link to="/promotion">Promotions</Link></li>
        <li><Link to="/testimonials">Reviews</Link></li>
        <li><a href="https://wa.me/90079953" className="whatsapp-link"><FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" /></a></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
