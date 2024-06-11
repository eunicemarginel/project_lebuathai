import React from 'react';
import '../styles/FeaturedDishes.css'; // Import your custom CSS for styling
import dish1 from '../assets/dish1.jpg'; // Import background images
import dish2 from '../assets/dish2.jpg';
import dish3 from '../assets/dish3.jpg';

const FeaturedDishes = () => {
  const dishes = [
    { name: 'Steamed Curry Seafood', description: 'A delectable blend of fresh seafood simmered in a rich and aromatic curry, served inside a tender young coconut for an unforgettable culinary experience.', image: dish1 },
    { name: 'Steamed Sea Bass', description: ' perfectly steamed sea bass infused with zesty lime and fiery chilli, creating a harmonious balance of flavors that tantalize the taste buds', image: dish2 },
    { name: 'Tom Yum Seafood', description: ' classic Thai soup bursting with the vibrant flavors of lemongrass, lime, and a medley of fresh seafood, offering a delightful combination of spicy, sour, and savory notes.', image: dish3 },
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
      <a href="/menu" className="menu-button">Check Our Menu</a>
    </div>
  );
};

export default FeaturedDishes;
