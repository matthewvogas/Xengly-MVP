import React from 'react';
import TextArea from './textArea.jsx';
import './textArea.css'

export default {
  title: 'Design System/Atoms/TextArea',
  component: TextArea,
};

export const TextAreaPrincipal = () => <TextArea className="textArea" placeholder="Hola, Mundo!" />;
