import { Route, Routes } from "react-router-dom";
import React from "react";
import "./components/molecules/menu/menu.css";
// css
import "./Page.css";

// components
import Menu from "./components/molecules/menu/menu";

// routes
import Notifications from "./app/pages/notifications";
import Checkout from "./app/pages/checkout";
import Discover from "./app/pages/discover";
import Settings from "./app/pages/settings";
import Xengler from "./app/pages/xengler";

// export
const App = () => (
  <div className="layout">
    <div className="sidebar">
      <Menu />
    </div>

    <div className="content">
      <div className="module">
        <Routes>
          <Route index element={<Discover />} />
          <Route path="settings" element={<Settings />} />
          <Route path="xengler" element={<Xengler />} />
          <Route path="Notifications" element={<Notifications />} />
          <Route path="Checkout" element={<Checkout />} />
        </Routes>
      </div>
    </div>
  </div>
);

export default App;
