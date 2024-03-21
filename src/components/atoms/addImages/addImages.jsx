import React, { useEffect, useState } from "react";
import "./addImages.css";

const AddImages = ({ images, setImages, maxImages, text }) => {
  const [dragging, setDragging] = useState(false);
  const [localImages, setLocalImages] = useState(images);

  useEffect(() => {
    setLocalImages(images);
  }, [images]);

  const handleRemoveImage = (index) => {
    const newImages = [...localImages];
    newImages.splice(index, 1);
    setImages(newImages);
  };

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
    const files = Array.from(e.dataTransfer.files).filter((file) =>
      file.type.startsWith("image/")
    );
    const newImages = files.map((file) => ({
      url: URL.createObjectURL(file),
      file,
    }));
    const totalImages = [...localImages, ...newImages];
    if (totalImages.length > maxImages) {
      alert(`Máximo de ${maxImages} imágenes permitidas`);
      return;
    }
    setImages(totalImages.slice(0, maxImages));
  };

  return (
    <div
      className={`drop-zone ${dragging ? "dragging" : ""}`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {localImages && localImages.length > 0 ? (
        <div className="images-preview">
          {localImages.map((image, index) => (
            <div key={index} className="image-container">
              <img
                src={image.url}
                alt="Preview"
                onClick={() => handleRemoveImage(index)}
              />
            </div>
          ))}
        </div>
      ) : (
        <p>{text || "Arrastra o toca para importar"}</p>
      )}
    </div>
  );
};

export default AddImages;
