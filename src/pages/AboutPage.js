import React from 'react';
import '../styles/AboutPage.css';
import Footer from '../components/Footer';
import aboutImage from '../assets/logo.png'; // Import your image file

const AboutPage = () => {
  return (
    <div>
      <div className="about-container">
        <div className="about-content">
          <h1>About Lebua Thai</h1>
          <p>Welcome to Lebua Thai, where the vibrant flavors of Thailand come to life in the heart of Singapore. At Lebua Thai, we are passionate about bringing you an authentic Thai dining experience that combines traditional culinary techniques with fresh, high-quality ingredients. <br/><br/>

            Our journey began with a simple yet profound love for Thai cuisine and culture. We believe that food is more than just sustenance; it is a bridge that connects people, traditions, and stories. Our menu is thoughtfully curated to offer a diverse range of classic Thai dishes, each prepared with meticulous attention to detail and a deep respect for our heritage.<br/><br/>

            Step into Lebua Thai and be transported to a world of aromatic spices, bold flavors, and vibrant colors. From our signature Pad Thai and Green Curry to our refreshing Som Tum and decadent Mango Sticky Rice, every dish is crafted to delight your senses and provide a true taste of Thailand.<br/><br/>

            Our chefs, trained in the art of Thai cooking, bring a wealth of experience and a passion for excellence to every plate. We source the finest ingredients, including fresh herbs and spices imported directly from Thailand, to ensure that every bite is as authentic as it is delicious.<br/><br/>

            At Lebua Thai, we are committed to providing not only exceptional food but also a warm and welcoming atmosphere. Whether you are joining us for a casual meal with friends, a family celebration, or a romantic dinner, our friendly staff is here to make your dining experience memorable.</p>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="About Us" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
