import React from "react";
import Label from "../../atoms/labels/label";
import Badge from "../../atoms/badge/badge";
import { Link } from "react-router-dom";
import "./creatorCard.css";

const getAge = (birthDateString) => {
  if (!birthDateString || isNaN(Date.parse(birthDateString))) {
    return "Fecha inválida";
  }

  const birthDate = new Date(birthDateString);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};
const CreatorCard = ({ imageUri, name, biography, badges, birthDate, id }) => {
  const age = birthDate ? `${getAge(birthDate)} años` : "Edad no disponible";

  return (
    <Link to={`/xengler/${id || ""}`} className="creatorCard">
      <img className="image" src={imageUri} alt={name || "Creator"} />
      <div className="contentCreator">
        <div className="nameAge">
          <Label className="badgeLabel" text={name || "Nombre no disponible"} />
          <p>•</p>
          <Label className="badgeLabel" text={age} />
        </div>
        <Label
          className="SubTitle"
          text={biography || "Biografía no disponible"}
        />
        <div className="badges">
          {badges &&
            badges.map((text, index) => (
              <Badge key={index} className="normal" text={text} />
            ))}
        </div>
      </div>
    </Link>
  );
};

export default CreatorCard;
