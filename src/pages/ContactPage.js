import React from 'react';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Address: 123 Restaurant St, Food City</p>
      <p>Phone: <a href="tel:+1234567890">+1 234 567 890</a></p>
      <p>Email: <a href="mailto:info@restaurant.com">info@restaurant.com</a></p>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
