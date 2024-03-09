import React, { useState } from 'react';
import AddImages from './addImages';
import './addImages.css';

export default {
  title: 'Design System/Atoms/Add Images',
  component: AddImages,
  tags: ['autodocs'],
};

const Template = (args) => {
  const [images, setImages] = useState(args.images);
  return <AddImages {...args} images={images} setImages={setImages} />;
};

export const EmptyAddImage = Template.bind({});
EmptyAddImage.args = {
  images: [],
  maxImages: 5,
};

export const WithImagesAddImage = Template.bind({});
WithImagesAddImage.args = {
  images: [
    { url: 'https://via.placeholder.com/150', file: {} },
    { url: 'https://via.placeholder.com/150', file: {} },
    { url: 'https://via.placeholder.com/250', file: {} },
    { url: 'https://via.placeholder.com/250', file: {} },
    { url: 'https://via.placeholder.com/250', file: {} },
    { url: 'https://via.placeholder.com/250', file: {} },
    { url: 'https://via.placeholder.com/250', file: {} },
    { url: 'https://via.placeholder.com/250', file: {} },
    { url: 'https://via.placeholder.com/250', file: {} },
    { url: 'https://via.placeholder.com/250', file: {} },
    { url: 'https://via.placeholder.com/250', file: {} },
    { url: 'https://via.placeholder.com/250', file: {} },
    { url: 'https://via.placeholder.com/250', file: {} },
  ],
  maxImages: 5,
};
