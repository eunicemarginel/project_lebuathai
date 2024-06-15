import React from 'react';
import StarRating from './StarRating'; // Import the StarRating component

const Testimonial = ({ name, review, rating }) => { // Remove 'image' from props
  return (
    <div className="testimonial">
      <div>
        <h3>{name}</h3>
        <p>{review}</p>
        <StarRating rating={rating} /> {/* Use the StarRating component for rating */}
      </div>
    </div>
  );
};

export default Testimonial;
