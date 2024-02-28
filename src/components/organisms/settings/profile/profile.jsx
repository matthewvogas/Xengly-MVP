import AppPicker from "../../../../components/molecules/appPicker/appPicker";
import SetSchedule from "../../../molecules/setSchedule/setSchedule";
import TextArea from "../../../atoms/textArea/textArea";
import Button from "../../../atoms/button/button";
import Toggle from "../../../atoms/toggle/toggle";
import Label from "../../../atoms/labels/label";
import Input from "../../../atoms/input/input";

import React from "react";
import "./profile.css";

const ProfileOrganism = ({}) => {
  return (
    <section>
      <div className="head--profile profile">
        <div className="titles">
          <Label text="Info Personal" className="SubTitle" />
          <Label text="Actualiza tu info aquí" className="SubTitleText" />
        </div>

        <div className="actions">
          <Button text="Cancel" className="button--cancel" />
          <Button text="Save" className="button--primary" />
        </div>
      </div>

      <div className="profile--time">
        <div className="schedule">
          <Label text="Exclude Time" className="SubTitleText" />
          <Label
            text="Todo tu calendario aparecerá disponible a menos que excluyas tiempo"
            className="LabelInput"
          />
        </div>
        <div className="schedules">
          <SetSchedule />
        </div>
      </div>

      <div className="profile--name profile">
        <div className="titles">
          <Label text="Name" className="SubTitleText" />
        </div>
        <div className="actions">
          <Input
            className="input--container"
            type="name"
            placeholder="Matthew"
          />
          <Input className="input--container" type="text" placeholder="Vogas" />
        </div>
      </div>

      <div className="profile--email profile">
        <div className="titles">
          <Label text="Email" className="SubTitleText" />
        </div>
        <div className="actions">
          <Input
            className="input--container"
            type="email"
            placeholder="matthew@xengly.com"
          />
        </div>
      </div>

      <div className="profile--img profile">
        <div className="titles">
          <Label text="Profile Image" className="SubTitleText" />
        </div>
        <div className="actions">{/* image profile */}</div>
      </div>

      <div className="profile--img profile">
        <div className="titles">
          <Label text="Biography" className="SubTitleText" />
        </div>
        <div className="bio">
          <TextArea className="textArea" placeholder="" maxLength={275} />
          <Label text="275 characters left" className="SubTitleText" />
        </div>
      </div>

      <div className="profile--location profile">
        <div className="location">
          <Label text="Location Meets" className="SubTitleText" />
          <Toggle />
        </div>
        <div className="map">{/* mapa */}</div>
      </div>

      <div className="profile--online profile">
        <div className="online">
          <Label text="Online Meets" className="SubTitleText" />
          <Toggle />
        </div>
        <div className="apps">
          <AppPicker title="Discord" message="Conecta con Discord" />
          <AppPicker
            title="Google Meet"
            message="Conecta por medio de Google Meet"
          />
          <AppPicker title="Zoom" message="Conecta con Zoom" />
        </div>
      </div>

      <div className="profile--images profile">
        <div className="images">
          <Label text="Images" className="SubTitleText" />
        </div>
        <div className="image--folder">{/* images  */}</div>
      </div>
    </section>
  );
};

export default ProfileOrganism;