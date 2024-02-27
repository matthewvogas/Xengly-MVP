import React from "react";
import SetSchedule from "./setSchedule"; 
import Image from "../../../assets/images/exampleImage.jpg";

export default {
  title: "Design System/Molecules/Set Schedule",
  component: SetSchedule,
  args: {
    title: "Monday",
    icon: null, 
  },
};

const Template = (args) => <SetSchedule {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Monday",
  icon: Image, 
};
