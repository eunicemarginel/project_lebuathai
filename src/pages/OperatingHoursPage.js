import React from 'react';
import '../styles/OperatingHoursPage.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Footer from '../components/Footer'; 

const OperatingHoursPage = () => {
  return (
    
    <div>
    <div className="operating-hours-page">
      <h1>Operating Hours</h1>
      <div className="hours">
        <div className="weekday-hours">
          <h2>Monday - Friday</h2>
          <p>11:00 AM - 10:00 PM</p>
        </div>
        <div className="weekend-hours">
          <h2>Saturday - Sunday</h2>
          <p>9:00 AM - 11:00 PM</p>
        </div>
      </div>
      <div className="holiday-hours">
        <h2>Holiday Hours</h2>
        <p>Check our social media for updates on holiday hours.</p>
      </div>
      <div className="social-media">
        <h2>Follow Us</h2>
        <a href="https://www.facebook.com/profile.php?id=61556215584916" className="social-icon" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://www.instagram.com/lebua_thai/" className="social-icon" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://g.co/kgs/Ct72hTQ" className="social-icon" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGoogle} />
        </a>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default OperatingHoursPage;
