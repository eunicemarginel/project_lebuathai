import React from 'react';
import StarRating from './StarRating'; // Import the StarRating component

const Testimonial = ({ name, review, rating, image }) => {
  return (
    <div className="testimonial">
      {image && <img src={image} alt={name} className="testimonial-image" />}
      <div>
        <h3>{name}</h3>
        <p>{review}</p>
        <StarRating rating={rating} /> {/* Use the StarRating component for rating */}
      </div>
    </div>
  );
};

export default Testimonial;
