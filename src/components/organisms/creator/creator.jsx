import React from "react";
import ImageExample from "../../../assets/images/imageProfile.jpg";
import Image from "../../atoms/imageProfile/image";
import ImageExampleForBio from "../../../assets/images/creatorsDummy/img1.webp";
import Label from "../../atoms/labels/label";
import Button from "../../atoms/button/button";
import { useNavigate } from "react-router-dom";
import "./creator.css";
import Images from "../../atoms/Images/images";

const CreatorOrganism = ({ creator }) => {
  const navigate = useNavigate();

  const handleCheckoutRedirect = () => {
    navigate("checkout");
  };

  const items = ["Escucha Activa", "Influencer", "Fortine"];
  return (
    <section>
      <div className="head--creator">
        <div className="head--image">
          <Image className="ImageProfile" profileImage={ImageExample} />
        </div>
        <div className="creators--head">
          <div className="creator--titles">
            <Label className="Title" text={`${creator}, 27`} />
            <Label className="SubTitleText" text="Influencer" />
          </div>

          <div className="creators-cta">
            <Button
              onClick={handleCheckoutRedirect}
              text="Agendar Encuentro"
              className="button--primary"
            />
          </div>
        </div>
      </div>

      <div className="creator--content">
        <div className="creator--bio">
          <Label className="SubTitle" text="Biography" />
          <Label
            className="SubTitleText"
            text="Steve likes spending time with his friend and planning travel with them at least once every year. Steve always prepared the trip very well, from research the destination until the budget preparation. "
          />
          <div className="images">
            <Images
              images={[
                { url: "https://via.placeholder.com/150" },
                { url: "https://via.placeholder.com/150" },
                { url: "https://via.placeholder.com/150" },
              ]}
            />
          </div>
        </div>

        <div className="creator--info">
          <div className="cta">
            <img src={ImageExampleForBio} alt="" />
            <div className="info--content">
              <div className="pricing">
                <Label className="SubTitle" text="20$" />
                /
                <Label className="SubTitleText" text="hour" />
              </div>

              <ul className="items">
                {items.map((item, index) => (
                  <li key={index}>· {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="info">
            <div className="info--content">
              <div className="pricing">
                <Label className="SubTitleText" text="Historial de Interactividad" />
              </div>

              <div className="history">
                <Label className="SubTitle" text="+40" />
                <Label className="SubTitleText" text="fuera de xengly" />
              </div>

              <div className="history">
                <Label className="SubTitle" text="+20" />
                <Label className="SubTitleText" text="por medio de xengly" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorOrganism;
