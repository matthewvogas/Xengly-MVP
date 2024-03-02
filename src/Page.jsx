import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import "./components/molecules/menu/menu.css";
// css
import "./Page.css";

// components
import Menu from "./components/molecules/menu/menu";

// routes

// icons
import { ReactComponent as discover } from "../src/assets/icons/menu/home.svg";
import { ReactComponent as notifications } from "../src/assets/icons/menu/bell.svg";
import { ReactComponent as meets } from "../src/assets/icons/menu/coffee.svg";
import { ReactComponent as messages } from "../src/assets/icons/menu/message-square.svg";
import { ReactComponent as settings } from "../src/assets/icons/menu/user.svg";

import Notifications from "./pages/notifications";
import Checkout from "./pages/checkout";
import Discover from "./pages/discover";
import Settings from "./pages/settings";
import Xengler from "./pages/xengler";
import Signup from "./pages/signup";

// export
const routes = [
  { path: "/", Component: Discover, name: "Discover", icon: discover },
  { path: "/notifications", Component: Notifications, name: "Notifications", icon: notifications },
  { path: "/settings", Component: Settings, name: "Settings", icon: settings },
  { path: "/signup", Component: Signup, name: "Signup" },
  // { path: "/xengler", Component: Xengler, name: "Xengler", icon: meets },
  // { path: "/checkout", Component: Checkout, name: "Checkout", icon: messages },
];

const App = ({ isLoggedIn }) => {
  if (!isLoggedIn) {
    return <Signup />;
  }

  return (
    <div className="layout">
      <div className="sidebar">
        <Menu routes={routes} />
      </div>

      <div className="content">
        <div className="module">
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
