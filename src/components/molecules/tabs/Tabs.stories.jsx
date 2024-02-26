import React from 'react';
import Tabs from './tabs.jsx';
import './tabs.css';

export default {
  title: 'Design System/Molecules/Tabs',
  component: Tabs,
};

const Template = (args) => <Tabs {...args} />;

export const DefaultTabs = Template.bind({});
DefaultTabs.args = {
  tabs: [
    { title: 'Tab 1', content: 'Content 1' },
    { title: 'Tab 2', content: 'Content 2' },
    { title: 'Tab 3', content: 'Content 3' },
  ],
};
