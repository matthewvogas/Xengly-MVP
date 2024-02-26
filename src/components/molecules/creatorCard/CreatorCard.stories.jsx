import React from 'react';
import CreatorCard from './creatorCard.jsx';
import './creatorCard.css';

export default {
  title: 'Design System/Molecules/Creator Card',
  component: CreatorCard,
  argTypes: {
    label: { control: 'text' },
    age: { control: 'number' },
    subTitle: { control: 'text' },
    subTitleTex: { control: 'text' },
    imageUri: { control: 'text' },
    badges: { control: 'array' },
  },
};

const Template = (args) => <CreatorCard {...args} />;

export const Card = Template.bind({});
Card.args = {
  label: 'Developer',
  age: 19,
  subTitle: 'Matthew Guillén',
  subTitleTex:
    'Hola, soy ing en sistemas desde antes de graduarme de la secundaria, fundé una startup a mis 16 y ahora estoy construyendo Xengly.',
  badges: ['hello', 'bro', 'pending'],
};
