import React from 'react';
import Toggle from './toggle.jsx';
import './toggle.css'

export default {
  title: 'Design System/Atoms/Toggle',
  component: Toggle,
};

export const ToggleNormal = () => <Toggle className="toggle"/>;

export const ToggleActive = () => <Toggle className="toggled"/>;
