import React from "react";
import Label from "../../atoms/labels/label";
import Button from "../../atoms/button/button";
import Badge from "../../atoms/badge/badge";
import Search from "../../atoms/input/input";
import Creator from "../../molecules/creatorCard/creatorCard";
import { ReactComponent as SearchIcon } from "../../../assets/icons/Search.svg";
import "./discover.css";
import useBadgeStore from "./store";

const NotificationsOrganism = ({ creators }) => {
  const badges = useBadgeStore((state) => state.badges);
  const toggleBadge = useBadgeStore((state) => state.toggleBadge);

  const sortedBadges = [...badges].sort((a, b) => (b.isActive ? 1 : -1));

  const creatorsDefault = [
    {
      label: "Nombre del Creador 1",
      subTitle: "Categoría 1",
      subTitleText: "Descripción breve 1",
      badges: ["Badge 1", "Badge 2"],
      age: "Edad 1",
    },
    {
      label: "Nombre del Creador 2",
      subTitle: "Categoría 2",
      subTitleText: "Descripción breve 2",
      badges: ["Badge 3", "Badge 4"],
      age: "Edad 2",
    },
    {
      label: "Nombre del Creador 2",
      subTitle: "Categoría 2",
      subTitleText: "Descripción breve 2",
      badges: ["Badge 3", "Badge 4"],
      age: "Edad 2",
    },
    {
      label: "Nombre del Creador 2",
      subTitle: "Categoría 2",
      subTitleText: "Descripción breve 2",
      badges: ["Badge 3", "Badge 4"],
      age: "Edad 2",
    },
    {
      label: "Nombre del Creador 2",
      subTitle: "Categoría 2",
      subTitleText: "Descripción breve 2",
      badges: ["Badge 3", "Badge 4"],
      age: "Edad 2",
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
            key={index}
            label={creator.label}
            subTitle={creator.subTitle}
            subTitleText={creator.subTitleText}
            badges={creator.badges}
            age={creator.age}
          />
        ))}
      </div>
    </section>
  );
};

export default NotificationsOrganism;
