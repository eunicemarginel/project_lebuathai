// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import ContactPage from './pages/ContactPage';
import ReservationPage from './pages/ReservationPage';
import OperatingHoursPage from './pages/OperatingHoursPage';
import GalleryPage from './pages/GalleryPage';
import SpecialsEventsPage from './pages/SpecialsEventsPage';
import TestimonialsPage from './pages/TestimonialsPage';
import BlogPage from './pages/BlogPage';
import LegalPage from './pages/LegalPage';
import NavigationBar from './components/NavigationBar';


const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/hours" element={<OperatingHoursPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/specials-events" element={<SpecialsEventsPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/legal" element={<LegalPage />} />
      </Routes>
      
    </Router>
  );
};

export default App;
