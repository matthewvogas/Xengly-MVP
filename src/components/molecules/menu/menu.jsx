import React from "react";
import "./menu.css";
import MenuButton from "../../atoms/menuButton/menuButton";
import Image from "../../atoms/imageProfile/image";

// icons
import { ReactComponent as discover } from "../../../assets/icons/menu/home.svg";
import { ReactComponent as notifications } from "../../../assets/icons/menu/bell.svg";
import { ReactComponent as meets } from "../../../assets/icons/menu/coffee.svg";
import { ReactComponent as messages } from "../../../assets/icons/menu/message-square.svg";
import { ReactComponent as settings } from "../../../assets/icons/menu/user.svg";
import { ReactComponent as signOut } from "../../../assets/icons/menu/user.svg";
import Logo from "../../../assets/icons/menu/menuLogo.svg";

import profileImage from "../../../assets/images/imageProfile.jpg";

const Menu = ({ profileUri }) => {
  const renderedProfileImage = profileUri || profileImage;

  return (
    <div className="menu-container">
      <div>
        <div className="logo">
          <img src={Logo} alt="log" className="logo" />
        </div>

        <div className="menu-items">
          <MenuButton
            text="Discover"
            className="button--normal"
            icon={discover}
          />
          <MenuButton
            text="Encuentros"
            className="button--active"
            icon={meets}
          />
          <MenuButton text="Chats" className="button--normal" icon={messages} />
          <MenuButton
            text="Notificaciones"
            className="button--normal"
            icon={notifications}
          />
          <MenuButton
            text="Perfil"
            className="button--normal"
            icon={settings}
          />
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
            <p>Olivia Rhye</p>
            <span>Log Out</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
