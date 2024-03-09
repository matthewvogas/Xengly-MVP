import React from 'react';
import Images from './images';
import './images.css';

export default {
  title: 'Design System/Atoms/Images',
  component: Images,
};

const Template = (args) => <Images {...args} />;

export const Default = Template.bind({});
Default.args = {
  images: [
    { url: 'https://via.placeholder.com/150' },
    { url: 'https://via.placeholder.com/150' },
    { url: 'https://via.placeholder.com/150' },
  ],
};

export const Empty = Template.bind({});
Empty.args = {
  images: [],
};
