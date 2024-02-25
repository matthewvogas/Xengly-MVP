import React from "react";
import Badge from "./badge.jsx";
import "./badge.css";
import { ReactComponent as ex } from "../../../assets/icons/X.svg";

export default {
  title: "Badge",
  component: Badge,
};

export const ActiveBadge = () => (
  <Badge text="badge text" icon={ex} className="active" />
);

export const DisabledBadge = () => (
  <Badge text="badge text" className="normal-disabled" />
);

export const NormalBadge = () => (
  <Badge
    text="badge text"
    className="normal"
  />
);
