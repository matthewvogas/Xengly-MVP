import React, { useState } from 'react';
import './addImages.css';

const AddImages = ({ images, setImages, maxImages, text }) => {
  const [dragging, setDragging] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    if (images.length >= maxImages) {
      alert(`Máximo de ${maxImages} imágenes permitidas`);
      return;
    }
    const files = Array.from(e.dataTransfer.files).filter(file =>
      file.type.startsWith('image/')
    );
    const newImages = files.map(file => ({
      url: URL.createObjectURL(file),
      file,
    }));
    setImages([...images, ...newImages].slice(0, maxImages));
  };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  return (
    <div
      className={`drop-zone ${dragging ? 'dragging' : ''}`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {images.length > 0 ? (
        <div className="images-preview">
          {images.map((image, index) => (
            <div key={index} className="image-container">
              <img src={image.url} alt="Preview" onClick={() => handleRemoveImage(index)} />
            </div>
          ))}
        </div>
      ) : (
         <p>{'Arrastra o toca para importar' || text}</p> 
      )}
    </div>
  );
};

export default AddImages;




