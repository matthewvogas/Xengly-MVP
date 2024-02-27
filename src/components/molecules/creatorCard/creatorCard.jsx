"use client";

import image from "../../../assets/images/exampleImage.jpg";
import Label from "../../atoms/labels/label";
import Badge from "../../atoms/badge/badge";
import "./creatorCard.css";
import React from "react";

const CreatorCard = ({
  label,
  subTitle,
  subTitleTex,
  imageUri,
  badges,
  age,
}) => {
  const badgesExample = [
    "hello",
    "bro",
    "pending",
    "hello",
  ];

  const badgesToRender = badges || badgesExample;

  return (
    <div className={`creatorCard`}>
      <img className="image" src={imageUri || image} alt="" />
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
    </div>
  );
};

export default CreatorCard;
