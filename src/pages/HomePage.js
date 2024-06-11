// src/pages/HomePage.js
import React from 'react';
import '../styles/HomePage.css';
import Footer from '../components/Footer'; // Import the Footer component
import FeaturedDishes from '../components/FeaturedDishes';

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="content">
        <h1>Welcome to Lebua Thai</h1>
        <p>Experience the authentic taste of Thailand's best!</p>
        <a href="/reservation" className="reservation-button">Reserve a Table</a>
      </div>
      <FeaturedDishes />
      <Footer />
    </div>
  );
};

export default HomePage;
