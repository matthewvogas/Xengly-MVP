import React from "react";
import { useLocation } from "react-router-dom";
import "./menu.css";
import MenuButton from "../../atoms/menuButton/menuButton";
import Image from "../../atoms/imageProfile/image";
import Logo from "../../../assets/icons/menu/menuLogo.svg";
import profileImage from "../../../assets/images/imageProfile.jpg";
import useMenuStore from "./store.js";
import useUserStore from "../../store/userStore.js";

const Menu = ({ routes, profileUri }) => {
  const { profile } = useUserStore();
  const renderedProfileImage = profileUri || profileImage;
  const location = useLocation();

  const setActivePath = useMenuStore((state) => state.setActivePath);

  React.useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname, setActivePath]);

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
            profileImage={renderedProfileImage}
          />
          <div className="profile-info">
            <p>{profile.name || "not user found"}</p>
            <span>Log Out</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
