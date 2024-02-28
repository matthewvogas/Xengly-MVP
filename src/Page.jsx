import { Route, Routes } from "react-router-dom";
import React from "react";
import "./components/molecules/menu/menu.css";
// css
import "./Page.css";

// components
import Menu from "./components/molecules/menu/menu";

// routes
import Notifications from "./pages/notifications";
import Checkout from "./pages/checkout";
import Discover from "./pages/discover";
import Settings from "./pages/settings";
import Xengler from "./pages/xengler";

// export
const App = () => (
  <div className="layout">
    <div className="sidebar">
      <Menu />
    </div>

    <div className="content">
      <div className="module">
        <Routes>
          <Route index Component={Discover} />
          <Route path="settings" Component={Settings} />
          <Route path="xengler" Component={Xengler} />
          <Route path="notifications" Component={Notifications} />
          <Route path="checkout" Component={Checkout} />
        </Routes>
      </div>
    </div>
  </div>
);

export default App;
