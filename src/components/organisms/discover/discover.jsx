import React, { useEffect, useState } from "react";
import { ReactComponent as SearchIcon } from "../../../assets/icons/Search.svg";
import Creator from "../../molecules/creatorCard/creatorCard";
import Menu from "../../../components/molecules/menu/menu";
import useUserStore from "../../store/userStore";
import Button from "../../atoms/button/button";
import Label from "../../atoms/labels/label";
import Search from "../../atoms/input/input";
import Badge from "../../atoms/badge/badge";
import useBadgeStore from "./store";
import { getCreators } from "../../../services/creatorService";
import "./discover.css";

const NotificationsOrganism = () => {
  const [creators, setCreators] = useState([]);
  const { badges, toggleBadge, searchQuery, setSearchQuery } = useBadgeStore(
    (state) => ({
      badges: state.badges,
      toggleBadge: state.toggleBadge,
      searchQuery: state.searchQuery,
      setSearchQuery: state.setSearchQuery,
    })
  );

  useEffect(() => {
    const fetchCreators = async () => {
      const creatorsFromService = await getCreators();
      setCreators(creatorsFromService);
    };
    fetchCreators();
  }, []);

  const sortedBadges = [...badges].sort((a, b) => (b.isActive ? 1 : -1));
  const activeBadges = badges
    .filter((badge) => badge.isActive)
    .map((badge) => badge.text);

  const filteredCreators = creators.filter(
    (creator) =>
      (creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        creator.biography.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (activeBadges.length === 0 ||
        creator.badges?.some((badge) => activeBadges.includes(badge)))
  );

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
        {filteredCreators.map((creator, index) => (
          <Creator
            key={creator.id}
            imageUri={creator.profileImageURI}
            name={creator.name}
            biography={creator.biography}
            badges={creator.badges}
            username={creator.username}
            birthDate={creator.birthDate.toDate()}
            id={creator.id}
          />
        ))}
      </div>
    </section>
  );
};

export default NotificationsOrganism;
