import React from 'react';

const GalleryPage = () => {
  const images = [
    '/path/to/image1.jpg',
    '/path/to/image2.jpg',
    '/path/to/image3.jpg',
  ];

  return (
    <div>
      <h1>Gallery</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Gallery ${index + 1}`} style={{ width: '30%', margin: '1%' }} />
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
