import React from 'react';
import '../styles/FeaturedDishes.css'; // Import your custom CSS for styling
import dish1 from '../assets/dish1.jpg'; // Import background images
import dish2 from '../assets/dish2.jpg';
import dish3 from '../assets/dish3.jpg';

const FeaturedDishes = () => {
  const dishes = [
    { name: 'Dish 1', description: 'Description of dish 1', image: dish1 },
    { name: 'Dish 2', description: 'Description of dish 2', image: dish2 },
    { name: 'Dish 3', description: 'Description of dish 3', image: dish3 },
  ];

  return (
    <div className="featured-dishes-container">
      <h2 className="featured-dishes-title">Featured Dishes</h2>
      <div className="dishes-grid">
        {dishes.map((dish, index) => (
          <div key={index} className="dish-card">
            <img
              src={dish.image} // Use the imported image for src attribute
              alt={dish.name}
              className="dish-image"
            />
            <div className="dish-details">
              <h3 className="dish-name">{dish.name}</h3>
              <p className="dish-description">{dish.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedDishes;
