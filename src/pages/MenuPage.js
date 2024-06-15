import React from 'react';
import Slider from 'react-slick';
import '../styles/MenuPage.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '../components/Footer';

// Import your images
import image1 from '../assets/menu1.jpg';
import image2 from '../assets/menu2.jpg';
import image3 from '../assets/menu3.jpg';
import image4 from '../assets/menu4.jpg';
import image5 from '../assets/menu5.jpg';
import image6 from '../assets/menu6.jpg';
import image7 from '../assets/menu7.jpg';
import image8 from '../assets/menu8.jpg';
import image9 from '../assets/menu9.jpg';
import image10 from '../assets/menu10.jpg';
import image11 from '../assets/menu11.jpg';

const MenuPage = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  // Array of images
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
  ];

  return (
    <div className='menu'>
      <div className="menu-container">
        <h1>Our Menu</h1>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="slide">
              <img src={image} alt={`Menu item ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
      <Footer />
    </div>
  );
};

export default MenuPage;
