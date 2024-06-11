// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css'; // Import your custom CSS for the footer
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          
          <div className="footer-column">
            <div className="social-icons">
                <a href="https://www.facebook.com/profile.php?id=61556215584916" className="social-icon"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="https://www.instagram.com/lebua_thai/" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://g.co/kgs/Ct72hTQ" className="social-icon"><FontAwesomeIcon icon={faGoogle} /></a>
            </div>
        </div>
        <div className="footer-column">
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/reservation">Reservation</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/hours">Operating Hours</Link></li>
              <li><Link to="/specials-events">Specials & Events</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/legal">Legal</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Lebua Thai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
