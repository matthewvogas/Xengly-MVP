import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import './Page.css'


import Menu from './components/molecules/menu/menu'

// routes
import Discover from './app/pages/discover';
import Settings from './app/pages/settings';
import Xengler from './app/pages/xengler';
import Notifications from './app/pages/notifications';
import Checkout from './app/pages/checkout';

const App = () => (
  <div className='layout'>
   <Menu/>
    <div className='layout'>
      <Routes>
        <Route index element={<Discover />} />
        <Route path="settings" element={<Settings />} />
        <Route path="xengler" element={<Xengler />} />
        <Route path="Notifications" element={<Notifications />} />
        <Route path="Checkout" element={<Checkout />} />
      </Routes>
    </div>
  </div>
);

export default App;
