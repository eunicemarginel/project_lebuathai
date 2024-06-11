import React from 'react';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import '../styles/TestimonialsPage.css';

const TestimonialsPage = () => {
    const testimonials = [
      { name: 'Customer 1', review: 'Amazing food and great service!', rating: 5, image: 'customer1.jpg' },
      { name: 'Customer 2', review: 'A wonderful dining experience.', rating: 5, image: 'customer2.jpg' },
      { name: 'Customer 3', review: 'Amazing food and great service!', rating: 5, image: 'customer2.jpg' },
      { name: 'Customer 4', review: 'A wonderful dining experience.', rating: 5, image: 'customer2.jpg' },
      { name: 'Customer 5', review: 'Amazing food and great service!', rating: 5, image: 'customer2.jpg' },
      { name: 'Customer 6', review: 'A wonderful dining experience.', rating: 5, image: 'customer2.jpg' },
      { name: 'Customer 7', review: 'Amazing food and great service!', rating: 5, image: 'customer2.jpg' },
    ];
  
    return (
      <div>
        <div className="testimonials-page">
          <h1>Testimonials</h1>
          {/* Display Testimonials */}
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
        <Footer />
      </div>
    );
  };
  
  export default TestimonialsPage;