import React from 'react';
import './images.css';

const Images = ({ images }) => {
  return (
    <div className="images-container">
      {images.map((image, index) => (
        <div key={index} className="image-wrapper">
          <img src={image.url} alt={`Preview ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Images;
 