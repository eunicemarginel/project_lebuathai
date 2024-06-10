import React from 'react';

const TestimonialsPage = () => {
  const testimonials = [
    { name: 'Customer 1', review: 'Amazing food and great service!', rating: 5 },
    { name: 'Customer 2', review: 'A wonderful dining experience.', rating: 4 },
  ];

  return (
    <div>
      <h1>Testimonials</h1>
      {testimonials.map((testimonial, index) => (
        <div key={index}>
          <h3>{testimonial.name}</h3>
          <p>{testimonial.review}</p>
          <p>Rating: {testimonial.rating} / 5</p>
        </div>
      ))}
    </div>
  );
};

export default TestimonialsPage;
