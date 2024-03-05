import { ReactComponent as SearchIcon } from "../../../assets/icons/Search.svg";
import Creator from "../../molecules/creatorCard/creatorCard";
import image from "../../../assets/images/exampleImage.jpg";
import Button from "../../atoms/button/button";
import Label from "../../atoms/labels/label";
import Search from "../../atoms/input/input";
import Badge from "../../atoms/badge/badge";
import useBadgeStore from "./store";
import React from "react";
import "./discover.css";

const NotificationsOrganism = ({ creators }) => {
  const badges = useBadgeStore((state) => state.badges);
  const toggleBadge = useBadgeStore((state) => state.toggleBadge);

  const sortedBadges = [...badges].sort((a, b) => (b.isActive ? 1 : -1));

  const creatorsDefault = [
    {
      label: "Nombre del Creador 1",
      subTitle: "Matthew",
      subTitleText: "Descripción breve 1",
      badges: ["Badge 1", "Badge 2"],
      age: "Edad 1",
      username: "burgerqueen",
    },
    {
      label: "Nombre del Creador 2",
      subTitle: "Montero",
      subTitleText: "Descripción breve 2",
      badges: ["Badge 3", "Badge 4"],
      age: "Edad 2",
      username: "fiestasnack",
    },
    {
      label: "Nombre del Creador 2",
      subTitle: "Minor",
      subTitleText: "Descripción breve 2",
      badges: ["Badge 3", "Badge 4"],
      age: "Edad 2",
      username: "patient0",
    },
  ];

  const creatorsToRender = creators || creatorsDefault;

  return (
    <section>
      <div className="head">
        <div>
          <Label text="Descubre" className="Title" />
          <Label
            text="Filtra por interés, gustos o actividades"
            className="TitleText"
          />
        </div>
        <Button text="Ser creador" className="button--primary" />
      </div>

      <div className="badges--filter">
        {sortedBadges.map((badge, index) => (
          <Badge
            key={index}
            text={badge.text}
            className={badge.isActive ? "active" : "normal"}
            onClick={() => toggleBadge(badge.text)}
          />
        ))}
      </div>

      <div className="search--container">
        <Search
          className="input--container"
          type="search"
          placeholder="Buscar"
          icon={SearchIcon}
        />
      </div>

      <div className="creators--container">
        {creatorsToRender.map((creator, index) => (
          <Creator
            imageUri={image}
            key={index}
            label={creator.label}
            subTitle={creator.subTitle}
            subTitleText={creator.subTitleText}
            badges={creator.badges}
            age={creator.age}
            username={creator.username}
          />
        ))}
      </div>
    </section>
  );
};

export default NotificationsOrganism;
