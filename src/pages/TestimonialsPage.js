import React from 'react';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import '../styles/TestimonialsPage.css';

const TestimonialsPage = () => {
  const testimonials = [
    { name: 'Randy', review: "A gem hidden at Pasir Panjang. One of the best Thai food in town. The food is delicious, comes in generous portions, and is not overly oily or salty; a rarity in Singapore. If you're a health conscious eater, there are also a plenty of vegetable options. The dining atmosphere is very comfortable with outdoor seating. The service is fantastic, very attentive, speedy, and always kind.  Highly recommended.", rating: 5 },

    { name: 'Wei Ken Loh', review: "One of the best Thai restaurants I have ever eaten at. The style of cooking is as flavourful as the food in Thailand, food presentation is excellent and customer service was utterly amazing. Would absolutely come back here any time for a fix!", rating: 5 },

    { name: 'Chin Zhi Hui', review: "The Thai boat noodles were very good and aromatic.  It tasted very fresh.  The milk tea was also very fragrant as well, which is rare for a usual Thai restaurant.", rating: 5 },

    { name: 'MDPHDLIFE', review: "The food here is really worth a try! One of the best Thai food I had in Singapore. We ordered basil minced pork rice and seafood tom yum soup. The basil pork was really another level, it tasted really special compared to other basil pork I had, hard to describe, come down and try it on your own. The Tom yum soup is really appetising, the right amount of tanginess plus a whole head of quality seafood. Really worth it. Their lemon grass drink was also very authentic, refreshing and not too sweet. Really a hidden gem. This place is super convenient so do come down to give it a try! I do recommend sitting on the outside because it is really windy and comfortable.", rating: 5 },

    { name: 'Panravee Yokaew (Pamie)', review: "This is my fifth time  visiting  I like all the menu. Tom yum seafood must have. Fried sea bass is superb. Very crispy.", rating: 5 },

    { name: 'Lee Junkang', review: "Whoever needs their Thai food craving fixed, Lebua Thai is the place to go to. Their ingredients are so fresh and the taste are very authentic. Very affordable and reasonable for a restaurant and usually Thai restaurant only serve beer but over at Lebua Thai, they serve good selection of wines and champagne there too! Very conducive and staff are very attentive and friendly. Thank you for the wonderful experience and I'll certainly recommend friends to dine at Lebua Thai", rating: 5 },

    { name: 'Richard Er GueSeng', review: "Delicious authentic Thai food. Ordered pad Thai and Tom yum soup and I can say is fabulous. There is 1 for 1 promo for draft beer and red wine. Discount for their Thai style fresh oyster and free drink for rice and noodle purchase. Definitely need to come down and try. Will definitely recommend my friends to this place.", rating: 5 },

    { name: 'Beom Soo', review: "I first saw this Thai restaurant near Pasir Panjang and wanted to try it out, and I'm glad I did. I ordered the Green Curry, Stir Fried Prawns with Curry Powder, Stir Fried Kale and Grilled Chicken. The Stir Fried Prawn with Curry Powder was outstanding, having tender prawns with a delicious runny egg sauce which was so addictive. The rest of the dishes were good, comparable to other thai restaurants you can find in Singapore. Also had great service from Betty, the owner of the restaurant. Food was served quickly. Would definitely come back.", rating: 5 },

    { name: 'Mei Nah Mong', review: "Real authentic Thai food in Singapore! Ordered the Thai curry prawn, cabbage omelette and Thai fish cake. Thai fish cake is home made and not those supply by third party. The prawns are fresh and cooked in similar way Song Boon in Bangkok. Cabbage with omelette is great too! The taste is not too salty and sweet like some served in Thailand. Very tasty and yet tweaked to our local palette. Beer and wine buy 1 get 1 free! What a great deal! More ppl should come and support them so that they can sustain longer and we get to enjoy the Authentic Thai food in Singapore! Sorry finished everything and forgot to take photos", rating: 5 },
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
