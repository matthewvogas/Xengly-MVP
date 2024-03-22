import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Image from "../../atoms/imageProfile/image";
import Label from "../../atoms/labels/label";
import Button from "../../atoms/button/button";
import Images from "../../atoms/Images/images";
import { getCreatorById } from "../../../services/creatorService";
import ImageExample from "../../../assets/images/imageProfile.jpg";
import ImageExampleForBio from "../../../assets/images/creatorsDummy/img1.webp";
import "./creator.css";

const CreatorOrganism = () => {
  const { id } = useParams();
  const [creatorDetails, setCreatorDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCreatorDetails = async () => {
      const details = await getCreatorById(id);
      setCreatorDetails(details);
    };

    fetchCreatorDetails();
  }, [id]);

  const handleCheckoutRedirect = () => {
    navigate("checkout");
  };

  if (!creatorDetails) {
    return <div>Cargando...</div>;
  }

  const getAge = (birthDateTimestamp) => {
    if (!birthDateTimestamp) {
      return "Edad no disponible";
    }

    const birthDate = new Date(birthDateTimestamp.seconds * 1000);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const age = getAge(creatorDetails.birthDate);

  const items = ["Escucha Activa", "Influencer", "Fortnite"];

  return (
    <section>
      <div className="head--creator">
        <div className="head--image">
          <Image
            className="ImageProfile"
            profileImage={creatorDetails.profileImageURI || ImageExample}
          />
        </div>
        <div className="creators--head">
          <div className="creator--titles">
            <Label
              className="Title"
              text={`${creatorDetails.name}, ${age} años`}
            />
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
            text={creatorDetails.biography || "Biografía no disponible"}
          />
          <div className="images">
            <Images images={creatorDetails.images.map((url) => ({ url }))} />
          </div>
        </div>

        <div className="creator--info">
          <div className="cta">
            <img src={creatorDetails.profileImageURI} alt="" />
            <div className="info--content">
              <div className="pricing">
                <Label className="SubTitle" text="20$" />
                <Label className="SubTitleText" text="/hour" />
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
                <Label
                  className="SubTitleText"
                  text="Historial de Interactividad"
                />
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
