import React from 'react';
import '../styles/PromotionPage.css'; // Import the CSS file for styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Footer from '../components/Footer';

const PromotionPage = () => {
  return (
    <div>
    <div className="promotion-page-container">
      <div className="promotion-content">
        <h1 className="promotion-title">Promotions!</h1>

        <div className="promotion-section">
            <h2>Wine Dinner Event</h2>
            <p>
            We are excited to host a Wine Dinner Event once a month, accommodating up to 40 guests. Check out our exquisite wine list on the menu page. For the latest updates, please visit our social media page. Alternatively, you can contact us directly through the information provided on our contact page.
            </p>
        </div>

        <div className="promotion-section">
            <h2>Buffet Night</h2>
            <p>
            Join us every Wednesday for a delightful Buffet selection, featuring a variety of Thailand's finest cuisine, and more. Explore our Buffet menu on our menu page. For more details and reservations, visit our social media platforms. Contact us to learn about our upcoming promotions.
            </p>
        </div>
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

export default PromotionPage;
