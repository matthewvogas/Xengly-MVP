import CalendarPicker from "../../../components/atoms/calendarPicker/calendarPicker";
import AppPicker from "../../../components/molecules/appPicker/appPicker";
import TimePicker from "../../../components/atoms/timePicker/timePicker";
import ImageExample from "../../../assets/images/imageProfile.jpg";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Image from "../../atoms/imageProfile/image";
import Toggle from "../../atoms/toggle/toggle";
import Button from "../../atoms/button/button";
import Label from "../../atoms/labels/label";
import Input from "../../atoms/input/input";
import useCheckoutStore from "./store";
import { useState } from "react";
import React from "react";
import "./checkout.css";

const CheckoutOrganism = ({ username }) => {

  
  const apiKeyMaps = process.env.API_KEY_MAPS;

  console.log(apiKeyMaps)
  const { isMap, selectedApp, setIsMap, setSelectedApp } = useCheckoutStore();

  const handleToggleMap = () => {
    setIsMap(!isMap);
  };

  const handleAppPickerToggle = (appName) => {
    if (selectedApp === appName) {
      setSelectedApp(null);
    } else {
      setSelectedApp(appName);
    }
  };

  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  return (
    <section>
      <section>
        <div className="head--checkout">
          <div className="head--image">
            <Image className="ImageProfile" profileImage={ImageExample} />
          </div>
          <div className="checkout--head">
            <div className="checkout--titles">
              <Label className="Title" text={`${username}, 24`} />
              <Label className="SubTitleText" text="Influencer" />
            </div>
          </div>
        </div>

        <div className="profile--location profile-bill">
          <div className="location">
            <Label text="¿Es el evento online?" className="SubTitleText" />
            <Toggle onToggle={handleToggleMap} isToggled={isMap} />
          </div>
        </div>
        <div
          className={`location--date maps--checkout ${isMap ? "hide" : "show"}`}
        >
          <div className="date">
            <CalendarPicker />
            <TimePicker />
          </div>
          <div className="g-map">

            <LoadScript googleMapsApiKey={apiKeyMaps}>
              <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={10}
                center={{ lat: 37.774929, lng: -122.419416 }}
              >
                {/* Marcadores, polígonos u otras capas pueden agregarse aquí */}
              </GoogleMap>
            </LoadScript>
          </div>
        </div>

        <div
          className={`maps--checkout--options ${
            isMap ? "show--options" : "hide--options"
          }`}
        >
          <Label text="Selecciona el medio deseado" className="SubTitleText" />
          <AppPicker
            title="Discord"
            message="Conecta con Discord"
            onToggle={() => handleAppPickerToggle("Discord")}
            isToggled={selectedApp === "Discord"}
          />
          <AppPicker
            title="Google Meet"
            message="Conecta por medio de Google Meet"
            onToggle={() => handleAppPickerToggle("Google Meet")}
            isToggled={selectedApp === "Google Meet"}
          />
          <AppPicker
            title="Zoom"
            message="Conecta con Zoom"
            onToggle={() => handleAppPickerToggle("Zoom")}
            isToggled={selectedApp === "Zoom"}
          />
          <AppPicker
            title="Zoom"
            message="Conecta con Zoom"
            onToggle={() => handleAppPickerToggle("1")}
            isToggled={selectedApp === "1"}
          />
          <AppPicker
            title="Zoom"
            message="Conecta con Zoom"
            onToggle={() => handleAppPickerToggle("2")}
            isToggled={selectedApp === "2"}
          />
          <AppPicker
            title="Zoom"
            message="Conecta con Zoom"
            onToggle={() => handleAppPickerToggle("3")}
            isToggled={selectedApp === "3"}
          />
        </div>

        <div className="pay--checkout">
          <div className="checkout--pay">
            <div className="checkout--titles">
              <Label className="Title" text="Payment" />
              <Label
                className="SubTitleText"
                text="Realiza tu pago seguro en Xengly"
              />
            </div>
          </div>
        </div>

        <div className="profile--checkout">
          <div className="titles">
            <Label text="Card Number" className="SubTitleText" />
          </div>
          <div className="actions">
            <Input
              className="input--container"
              type="email"
              placeholder="1234  5678  9101  1121"
            />
          </div>

          <div className="expiration--cvv">
            <div className="inputs">
              <div className="titles">
                <Label text="Expiration Date" className="SubTitleText" />
              </div>
              <div className="actions">
                <Input
                  className="input--container"
                  type="email"
                  placeholder="MM/YY"
                />
              </div>
            </div>

            <div className="inputs">
              <div className="titles">
                <Label text="CVV" className="SubTitleText" />
              </div>
              <div className="actions">
                <Input
                  className="input--container"
                  type="email"
                  placeholder="123"
                />
              </div>
            </div>
          </div>

          <Button className="button--primary" text="Pagar 12.00$" />
        </div>

        <div className="info--pay">
          <Label
            text="Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy."
            className="SubTitleText"
          />
        </div>
      </section>
    </section>
  );
};

export default CheckoutOrganism;
