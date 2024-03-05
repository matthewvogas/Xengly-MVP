import React from "react";
import ImageExample from "../../../assets/images/imageProfile.jpg";
import Image from "../../atoms/imageProfile/image";
import Label from "../../atoms/labels/label";
import "./checkout.css";
import Toggle from "../../atoms/toggle/toggle";
import AppPicker from "../../../components/molecules/appPicker/appPicker";
import TimePicker from "../../../components/atoms/timePicker/timePicker";
import CalendarPicker from "../../../components/atoms/calendarPicker/calendarPicker";
import Input from "../../atoms/input/input";
import Button from "../../atoms/button/button";

const CheckoutOrganism = ({ username }) => {
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

        <div className="profile--location profile">
          <div className="location">
            <Label text="Es el evento online?" className="SubTitleText" />
            <Toggle />
          </div>
          <div className="location--date">
            <div className="date">
              <CalendarPicker />
              <TimePicker />
            </div>

            <div className="location">{/* mapa */}</div>
          </div>
          <div className="map">{/* mapa */}</div>
        </div>

        <div className="profile--online profile">
          <div className="online">
            <Label
              text="Selecciona el medio deseado"
              className="SubTitleText"
            />
          </div>
          <div className="apps">
            <div className="date">
              <CalendarPicker />
              <TimePicker />
            </div>
            <AppPicker title="Discord" message="Conecta con Discord" />
            <AppPicker
              title="Google Meet"
              message="Conecta por medio de Google Meet"
            />
            <AppPicker title="Zoom" message="Conecta con Zoom" />
          </div>
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

        <div className="profile--checkout profile">
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
          <Label text="Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy." className="SubTitleText" />
        </div>
      </section>
    </section>
  );
};

export default CheckoutOrganism;
