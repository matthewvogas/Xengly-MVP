import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./menu.css";
import MenuButton from "../../atoms/menuButton/menuButton";
import Image from "../../atoms/imageProfile/image";
import Logo from "../../../assets/icons/menu/menuLogo.svg";
import profileImage from "../../../assets/images/imageProfile.jpg";
import useMenuStore from "./store.js";
import useUserStore from "../../store/userStore.js";

const Menu = ({ routes, profileUri }) => {
  const { profile, isAuthenticated, logout: userLogout } = useUserStore();
  const renderedProfileImage = profileUri || profileImage;
  const location = useLocation();
  const navigate = useNavigate();
  const setActivePath = useMenuStore((state) => state.setActivePath);

  React.useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname, setActivePath]);

  const handleAuthAction = (event) => {
    event.preventDefault();
    if (isAuthenticated) {
      userLogout();
    }
    navigate(isAuthenticated ? "/login" : "/login");
  };

  return (
    <div className="menu-container">
      <div>
        <div className="logo">
          <img src={Logo} alt="logo" className="logo" />
        </div>

        <div className="menu-items">
          {routes.map(({ index, path, name, icon }) => (
            <MenuButton
              key={index}
              to={path}
              text={name}
              className={
                location.pathname === path ? "button--active" : "button--normal"
              }
              icon={icon}
            />
          ))}
        </div>
      </div>

      <div>
        <div className="cta-creator">
          <span>Se un Creador</span>
          <p>Forma parte de los creadores que se lucran de su tiempo ahora</p>
          <button>Ser creador</button>
        </div>

        <div className="divider"> </div>

        <div className="profile">
          <Image
            className="ImageProfileMenu"
            profileImage={profile.imageUrl || renderedProfileImage}
          />
          <div className="profile-info">
            <p>{isAuthenticated ? profile.name : "Not logued in yet"}</p>
            <span>
              <a href="" onClick={handleAuthAction}>
                {isAuthenticated ? "Log Out" : "Login"}
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
