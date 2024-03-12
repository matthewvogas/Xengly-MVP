import { ReactComponent as SearchIcon } from "../../../assets/icons/Search.svg";
import Creator from "../../molecules/creatorCard/creatorCard";
import Menu from "../../../components/molecules/menu/menu";
import useUserStore from "../../store/userStore";
import Button from "../../atoms/button/button";
import Label from "../../atoms/labels/label";
import Search from "../../atoms/input/input";
import Badge from "../../atoms/badge/badge";
import useBadgeStore from "./store";
import React from "react";
import "./discover.css";

import image1 from "../../../assets/images/creatorsDummy/img1.webp";
import image2 from "../../../assets/images/creatorsDummy/img2.webp";
import image3 from "../../../assets/images/creatorsDummy/img3.webp";
import image4 from "../../../assets/images/creatorsDummy/img4.webp";
import image5 from "../../../assets/images/creatorsDummy/img5.webp";

const NotificationsOrganism = ({ creators }) => {
  const { badges, toggleBadge, searchQuery, setSearchQuery } = useBadgeStore(
    (state) => ({
      badges: state.badges,
      toggleBadge: state.toggleBadge,
      searchQuery: state.searchQuery,
      setSearchQuery: state.setSearchQuery,
    })
    );
    
    const sortedBadges = [...badges].sort((a, b) => (b.isActive ? 1 : -1));
    const activeBadges = badges
    .filter((badge) => badge.isActive)
    .map((badge) => badge.text);
    
  const creatorsDefault = [
    {
      label: "Influencer",
      subTitle: "Pedro",
      subTitleText: " ¡Hola! Soy Pedro, un apasionado de los juegos online con más de 1 millón de seguidores. Juguemos juntos Fortnite!",
      badges: ["influencer", "1M", "juegos online", "gamer"],
      age: "22",
      username: "burgerqueen",
      image: image1
    },
    {
      label: "Gurú",
      subTitle: "Isaac",
      subTitleText: "Hola, soy Isaac, un empresario y gurú en negocios con experiencia de vida. ¡Conversemos sobre cómo alcanzar el éxito en los negocios!",
      badges: ["guru", "empresario", "negocios"],
      age: "38",
      username: "fiestasnack",
      image: image2
    },
    {
      label: "Joven",
      subTitle: "Melisa",
      subTitleText: "¡Hola! Soy Melisa, una joven con habilidades de escucha activa. Me encanta conversar y salir. ¡Hablemos sobre cualquier tema que te interese!",
      badges: ["escucha activa", "conversar", "salir"],
      age: "23",
      username: "patient0",
      image: image3
    },
    {
      label: "Couch",
      subTitle: "Michael",
      subTitleText: "¡Hola! Soy Michael, un couch experto en negocios online y motivación personal. ¡Vamos a descubrir juntos cómo alcanzar tus metas!",
      badges: ["couch", "negocios online", "motivacion"],
      age: "43",
      username: "patient0",
      image: image4
    },
    {
      label: "Empresaria",
      subTitle: "Meilyn",
      subTitleText: " ¡Hola! Soy Meilyn, una empresaria apasionada por el dinero, salir y conversar. ¡Únete a mí para aprender y compartir experiencias empresariales!",
      badges: ["dinero", "salir", "conversar"],
      age: "27",
      username: "patient0",
      image: image5
    },
  ];

  const filteredCreators = creatorsDefault.filter(
    (creator) =>
      (creator.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        creator.subTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        creator.subTitleText
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        creator.age.toLowerCase().includes(searchQuery.toLowerCase()) ||
        creator.username.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (activeBadges.length === 0 ||
        creator.badges.some((badge) => activeBadges.includes(badge)))
  );

  const creatorsToRender = creators || filteredCreators;
  const formUrl = "https://forms.gle/7DXSD7LUdnFJPhAZ7";

  return (
    <section>
      <div className="sidebar"></div>
      <div className="head">
        <div>
          <Label text="Descubre" className="Title" />
          <Label
            text="Filtra por interés, gustos o actividades"
            className="TitleText"
          />
        </div>
        <a href={formUrl} target="_blank" rel="noopener noreferrer">
          <Button text="Ser creador" className="button--primary" />
        </a>
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
            imageUri={creator.image}
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
