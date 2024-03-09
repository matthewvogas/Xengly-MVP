import { ReactComponent as SearchIcon } from "../../../assets/icons/Search.svg";
import Creator from "../../molecules/creatorCard/creatorCard";
import image from "../../../assets/images/exampleImage.jpg";
import useUserStore from "../../store/userStore";
import Button from "../../atoms/button/button";
import Label from "../../atoms/labels/label";
import Search from "../../atoms/input/input";
import Badge from "../../atoms/badge/badge";
import useBadgeStore from "./store";
import React from "react";
import "./discover.css";

const NotificationsOrganism = ({ creators }) => {
  const { badges, toggleBadge, searchQuery, setSearchQuery } = useBadgeStore((state) => ({
    badges: state.badges,
    toggleBadge: state.toggleBadge,
    searchQuery: state.searchQuery,
    setSearchQuery: state.setSearchQuery,
  }));

  const sortedBadges = [...badges].sort((a, b) => (b.isActive ? 1 : -1));
  const activeBadges = badges.filter((badge) => badge.isActive).map((badge) => badge.text);

  const creatorsDefault = [
    {
      label: "Nombre del Creador 1",
      subTitle: "Matthew",
      subTitleText: "Descripción breve 1",
      badges: ["Músicos", "Badge 2"],
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
      label: "Nombre del Creador 3",
      subTitle: "Minor",
      subTitleText: "Descripción breve 3",
      badges: ["Badge 5", "Badge 6"],
      age: "Edad 3",
      username: "patient0",
    },
  ];

  const filteredCreators = creatorsDefault.filter((creator) =>
    (creator.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      creator.subTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      creator.subTitleText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      creator.age.toLowerCase().includes(searchQuery.toLowerCase()) ||
      creator.username.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (activeBadges.length === 0 || creator.badges.some((badge) => activeBadges.includes(badge)))
  );

  const creatorsToRender = creators || filteredCreators;

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
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
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
