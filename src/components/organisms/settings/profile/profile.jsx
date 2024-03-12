import AppPicker from "../../../../components/molecules/appPicker/appPicker";
import SetSchedule from "../../../molecules/setSchedule/setSchedule";
import TextArea from "../../../atoms/textArea/textArea";
import useUserStore from "../../../store/userStore";
import Button from "../../../atoms/button/button";
import Toggle from "../../../atoms/toggle/toggle";
import Label from "../../../atoms/labels/label";
import Input from "../../../atoms/input/input";
import React, { useEffect, useState } from "react";
import "./profile.css";
import useProfileStore from "./store";

//firebase
import { auth, db } from "../../../../firebase.config";
import { updateProfile as updateFirebaseProfile } from "firebase/auth";
import { doc, updateDoc, getDoc } from "firebase/firestore";

const ProfileOrganism = () => {
  const { profile, updateProfile } = useUserStore();
  const [name, setName] = useState(profile?.name || "");
  const [email, setEmail] = useState(profile?.email || "");
  const [biography, setBiography] = useState(profile?.biography || "");

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (auth.currentUser) {
        const userDocRef = doc(db, "users", auth.currentUser.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          console.log("Biography updated:", userData.biography);
          updateProfile({ ...profile, biography: userData.biography });
        }
      }
    };

    fetchUserProfile();
  }, []);

  useEffect(() => {
    setName(profile?.name || "");
    setEmail(profile?.email || "");
    setBiography(profile?.biography || "");
  }, [profile]);

  const handleSave = async () => {
    try {
      await updateFirebaseProfile(auth.currentUser, {
        displayName: name,
      });

      const userDocRef = doc(db, "users", auth.currentUser.uid);
      await updateDoc(userDocRef, {
        name,
        email,
        biography,
      });

      updateProfile({ name, email, biography });

      alert("Perfil actualizado con éxito");
    } catch (error) {
      console.error("Error al actualizar el perfil:", error);
      alert("Error al actualizar el perfil");
    }
  };

  const {
    schedules,
    selectedApps,
    isOnline,
    isMap,
    setSchedules,
    setSelectedApps,
    setIsOnline,
    setIsMap,
  } = useProfileStore();

  const handleAppPickerToggle = (appName) => {
    if (selectedApps.includes(appName)) {
      setSelectedApps(selectedApps.filter((app) => app !== appName));
    } else {
      setSelectedApps([...selectedApps, appName]);
    }
  };

  const addSchedule = (day, startTime, endTime) => {
    const scheduleExists = schedules.some(
      (schedule) => schedule.day === day && schedule.startTime === startTime
    );

    if (scheduleExists) {
      alert("A schedule with the same start time already exists for this day.");
      return;
    }

    const isOverlapping = schedules.some((schedule) => {
      return (
        schedule.day === day &&
        ((startTime >= schedule.startTime && startTime < schedule.endTime) ||
          (endTime > schedule.startTime && endTime <= schedule.endTime) ||
          (startTime <= schedule.startTime && endTime >= schedule.endTime))
      );
    });

    if (isOverlapping) {
      alert("The selected time overlaps with an existing schedule.");
      return;
    }

    const newSchedule = { day, startTime, endTime };
    setSchedules([...schedules, newSchedule]);
  };

  const removeSchedule = (indexToRemove) => {
    setSchedules(schedules.filter((_, index) => index !== indexToRemove));
  };

  const handleToggleOnline = () => {
    setIsOnline(!isOnline);
  };

  const handleToggleMap = () => {
    setIsMap(!isMap);
  };

  return (
    <section>
      <div className="head--profile profile">
        <div className="titles">
          <Label text="Info Personal" className="SubTitle" />
          <Label text="Actualiza tu info aquí" className="SubTitleText" />
        </div>

        <div className="actions">
          <Button text="Cancel" className="button--secondary" />
          <Button
            text="Save"
            className="button--primary"
            onClick={handleSave}
          />
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
          <SetSchedule addSchedule={addSchedule} />
        </div>

        <div className="schedules-list">
          {schedules.map((schedule, index) => (
            <div
              key={index}
              className="schedule-item"
              onClick={() => removeSchedule(index)}
            >
              <span className="schedule-day">Día: {schedule.day}</span>
              <span className="schedule-time">
                Inicio: {schedule.startTime}
              </span>
              <span className="schedule-time">Fin: {schedule.endTime}</span>
            </div>
          ))}
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
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <TextArea
            className="textArea"
            placeholder="Describe yourself"
            maxLength={275}
            value={biography}
            onChange={(e) => setBiography(e.target.value)}
          />

          <Label text="275 characters left" className="SubTitleText" />
        </div>
      </div>

      <div className="profile--location profile">
        <div className="location">
          <Label text="Location Meets" className="SubTitleText" />
          <Toggle onToggle={handleToggleMap} isToggled={isMap} />
        </div>
        <div className={`maps ${isMap ? "show" : "hide"}`}>
          <p>map</p>
        </div>
      </div>

      <div className="profile--online profile">
        <div className="online">
          <Label text="Online Meets" className="SubTitleText" />
          <Toggle onToggle={handleToggleOnline} isToggled={isOnline} />
        </div>
        <div className={`apps ${isOnline ? "show" : "hide"}`}>
          <div className={`apps ${isOnline ? "show" : "hide"}`}>
            <AppPicker
              title="Discord"
              message="Conecta con Discord"
              onToggle={() => handleAppPickerToggle("Discord")}
              isToggled={selectedApps.includes("Discord")}
            />
            <AppPicker
              title="Google Meet"
              message="Conecta por medio de Google Meet"
              onToggle={() => handleAppPickerToggle("Google Meet")}
              isToggled={selectedApps.includes("Google Meet")}
            />
            <AppPicker
              title="Zoom"
              message="Conecta con Zoom"
              onToggle={() => handleAppPickerToggle("Zoom")}
              isToggled={selectedApps.includes("Zoom")}
            />
          </div>
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
