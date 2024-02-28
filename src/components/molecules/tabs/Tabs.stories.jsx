import React from 'react';
import Tabs from './tabs.jsx';
import './tabs.css';

export default {
  title: 'Design System/Molecules/Tabs',
  component: Tabs,
};

const TabContent1 = () => <div>Content 1</div>;
const TabContent2 = () => <div>Content 2</div>;
const TabContent3 = () => <div>Content 3</div>;

const Template = (args) => <Tabs {...args} />;

export const DefaultTabs = Template.bind({});
DefaultTabs.args = {
  tabs: [
    { title: 'Tab 1', content: () => TabContent1 },
    { title: 'Tab 2', content: () => TabContent2 },
    { title: 'Tab 3', content: () => TabContent3 },
  ],
};
