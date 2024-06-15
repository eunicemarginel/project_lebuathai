import React from 'react';
import '../styles/GalleryPage.css'; // Import the CSS file for styles
import dish1 from '../assets/dish1.1.jpg';
import dish2 from '../assets/dish2.jpg';
import dish3 from '../assets/dish3.jpg';
import dish4 from '../assets/dish1.2.jpg';
import dish5 from '../assets/bg2.jpg';
import dish6 from '../assets/dish4.jpg';
import dish7 from '../assets/dish5.jpg';
import dish8 from '../assets/dish6.jpg';
import dish9 from '../assets/dish7.jpg';
import dish10 from '../assets/dish8.jpg';
import dish11 from '../assets/dish9.jpg';
import dish12 from '../assets/dish11.jpg';
import Footer from '../components/Footer';

const GalleryPage = () => {
  const images = [
    dish1,
    dish2,
    dish3,
    dish4,
    dish5,
    dish6,
    dish7,
    dish8,
    dish9,
    dish10,
    dish11,
    dish12,
    // Add more images from assets folder as needed
  ];

  return (
    <div>
    <div className="gallery-container">
      <h1>Gallery</h1>
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="image-wrapper">
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="gallery-image"
            />
            {/* Optional: Add a caption or overlay on hover */}
            {/* <div className="image-overlay">
              Caption or overlay content
            </div> */}
          </div>
        ))}
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default GalleryPage;
