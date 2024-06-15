import React from 'react';
import ContactForm from '../components/ContactForm';
import '../styles/ContactPage.css';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div>
    <div className="contact-page">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <p><strong>Address:</strong> 4 Jalan Mat Jambol, #01-01 Bijou Singapore 119555</p>
        <p><strong>Phone:</strong> <a href="tel:+6590079953">+65 90079953</a></p>
        <p><strong>Email:</strong> <a href="mailto:lebua.thai@gmail.com">lebua.thai@gmail.com</a></p>
      </div>
      <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
