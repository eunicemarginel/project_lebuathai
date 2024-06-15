import React from 'react';
import '../styles/LegalPage.css'; // Import the CSS file for styles
import Footer from '../components/Footer';

const LegalPage = () => {
  return (
    <div>
    <div className="legal-page-container">
      <div className="legal-content">
        <h1 className="legal-title">Privacy Policy and Terms of Service</h1>

        <div className="legal-section">
          <h2>Privacy Policy</h2>
          <p>
            Your privacy is important to us. We are committed to protecting your personal information and ensuring its confidentiality. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our restaurant, make table reservations, or use our services.
          </p>
          <p>
            We may collect personal information such as your name, email address, phone number, and any other information you provide to us. This information is used solely for the purpose of managing reservations, communicating with you about your reservation, and improving our services.
          </p>
          <p>
            We do not share your information with third parties except as necessary to provide our services or as required by law.
          </p>
        </div>

        <div className="legal-section">
          <h2>Terms of Service</h2>
          <p>
            By using our website, making table reservations, or interacting with us in any way, you agree to abide by the following Terms of Service:
          </p>
          <p>
            - You agree to provide accurate and complete information when making table reservations.
          </p>
          <p>
            - We reserve the right to cancel or modify reservations as necessary.
          </p>
          <p>
            - Payment terms and cancellation policies specific to Lebua Thai apply.
          </p>
          <p>
            - You agree not to misuse our services or engage in any unlawful activities.
          </p>
          <p>
            - We reserve the right to modify or discontinue our services without prior notice.
          </p>
          <p>
            - These Terms of Service are governed by the laws of Singapore.
          </p>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default LegalPage;
