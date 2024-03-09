import React from "react";
import Label from "../../atoms/labels/label";
import Tabs from "../../molecules/tabs/tabs";

// Organims
import ProfileOrganism from "./profile/profile";
import BillingOrganism from "./billing/billing";

const SettingsOrganism = ({}) => {
  const tabs = [
    { title: "Profile", content: () => <ProfileOrganism /> },
    { title: "Billing", content: () => <BillingOrganism /> },
  ];

  return (
    <section>
      <div className="head">
        <div>
          <Label text="Settings" className="Title" />
        </div>
      </div>

      <Tabs tabs={tabs} />
    </section>
  );
};

export default SettingsOrganism;
