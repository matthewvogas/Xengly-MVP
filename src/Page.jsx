import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import "./components/molecules/menu/menu.css";
import "./Page.css";
import Menu from "./components/molecules/menu/menu";
import { ReactComponent as discover } from "../src/assets/icons/menu/home.svg";
import { ReactComponent as notifications } from "../src/assets/icons/menu/bell.svg";
import { ReactComponent as settings } from "../src/assets/icons/menu/user.svg";
import Notifications from "./pages/notifications";
import Checkout from "./pages/checkout";
import Discover from "./pages/discover";
import Settings from "./pages/settings";
import Xengler from "./pages/xengler";
import Signup from "./pages/signup";
import Login from "./pages/login";
import useUserStore from "./components/store/userStore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.config";

const routes = [
  { path: "/", Component: Discover, name: "Discover", icon: discover },
  {
    path: "/notifications",
    Component: Notifications,
    name: "Notifications",
    icon: notifications,
  },
  { path: "/settings", Component: Settings, name: "Settings", icon: settings },
  { path: "/signup", Component: Signup, name: "Signup" },
  { path: "/login", Component: Login, name: "Login" },
  { path: "/xengler/:username", Component: Xengler, name: "Xengler" },
  {
    path: "/xengler/:username/checkout",
    Component: Checkout,
    name: "Checkout",
  },
];
const menu = [
  { path: "/", Component: Discover, name: "Discover", icon: discover },
  {
    path: "/notifications",
    Component: Notifications,
    name: "Notifications",
    icon: notifications,
  },
  { path: "/settings", Component: Settings, name: "Settings", icon: settings },
];

const App = () => {
  const { setAuth, setProfile } = useUserStore();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuth(true);
        setProfile({
          name: user.displayName || "",
          email: user.email,
          imageUrl: user.photoURL || "",
        });
      } else {
        setAuth(false);
        setProfile({
          name: "",
          email: "",
          imageUrl: "",
        });
        if (location.pathname !== "/" && location.pathname !== "/signup") {
          navigate("/login");
        }
      }
    });

    return () => unsubscribe();
  }, [setAuth, setProfile, navigate, location.pathname]);

  return (
    <div className="layout">
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <div className="sidebar">
          <Menu routes={menu} />
        </div>
      )}
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
