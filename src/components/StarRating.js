import React from 'react';
import '../styles/StarRating.css'; // Make sure you import the CSS

const StarRating = ({ rating }) => {
  const stars = [];

  // Create an array of 5 stars, with filled or empty classes based on the rating
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={`star ${i <= rating ? 'filled' : 'empty'}`}>
        &#9733;
      </span>
    );
  }

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
