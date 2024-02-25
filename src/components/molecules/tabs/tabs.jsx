import React, { useState } from 'react';
import './tabs.css';

const Tabs = ({ tabs, className }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={`tabs-container ${className}`}>
      <div className='tabs-buttons'>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${index === activeTab ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title || ''}
          </button>
        ))}
      </div>
      <div className={`tab-content ${className}`}>
        {tabs[activeTab].content || ''}
      </div>
    </div>
  );
};

export default Tabs;
