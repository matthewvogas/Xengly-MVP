"use client";

import Label from "../../atoms/labels/label";
import Badge from "../../atoms/badge/badge";
import { Link } from 'react-router-dom';
import "./creatorCard.css";
import React from "react";

const CreatorCard = ({
  imageUri,
  label,
  subTitle,
  subTitleTex,
  badges,
  age,
  username,
}) => {
  const badgesExample = ["hello", "bro", "pending", "hello"];

  const badgesToRender = badges || badgesExample;

  return (
    <Link to={'/xengler/' + username || '/'} className={`creatorCard`}>
      <img className="image" src={imageUri} alt="" />
      <div className="contentCreator">
        <div>
          <Label className="badgeLabel" text={label || "Developer"} />
          <p>•</p>
          <Label className="badgeLabel" text={age || 19} />
        </div>
        <Label className="SubTitle" text={subTitle || "Matthew Guillén"} />
        <Label
          className="SubTitleText"
          text={
            subTitleTex ||
            "Hola, soy ing en sistemas desde antes de graduarme de la secundaria, fundé una startup a mis 16 y ahora estoy construyendo Xengly."
          }
        />
      </div>
      <div className="badges">
        {badgesToRender.map((text, index) => (
          <Badge key={index} className="normal" text={text} />
        ))}
      </div>
    </Link>
  );
};

export default CreatorCard;
