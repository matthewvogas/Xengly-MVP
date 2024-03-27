import { GoogleMap, LoadScript, Marker, Circle } from "@react-google-maps/api";
import AppPicker from "../../../../components/molecules/appPicker/appPicker";
import SetSchedule from "../../../molecules/setSchedule/setSchedule";
import TextArea from "../../../atoms/textArea/textArea";
import useUserStore from "../../../store/userStore";
import Button from "../../../atoms/button/button";
import Toggle from "../../../atoms/toggle/toggle";
import Label from "../../../atoms/labels/label";
import Input from "../../../atoms/input/input";
import AddImages from "../../../atoms/addImages/addImages";
import React, { useEffect, useState } from "react";
import "./profile.css";
import useProfileStore from "./store";

//firebase
import { auth, db } from "../../../../firebase.config";
import { updateProfile as updateFirebaseProfile } from "firebase/auth";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const ProfileOrganism = () => {
  const apiKeyMaps = process.env.API_KEY_MAPS;
  const [center, setCenter] = useState({ lat: 37.774929, lng: -122.419416 });
  const [radius, setRadius] = useState(4);
  const [images, setImages] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const { profile, updateProfile } = useUserStore();
  const [name, setName] = useState(profile?.name || "");
  const [email, setEmail] = useState(profile?.email || "");
  const [biography, setBiography] = useState(profile?.biography || "");
  const {
    selectedApps,
    isOnline,
    isMap,
    setSelectedApps,
    setIsOnline,
    setIsMap,
  } = useProfileStore();

  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (auth.currentUser && isFetching) {
        const userDocRef = doc(db, "users", auth.currentUser.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          updateProfile({ ...profile, biography: userData.biography });
          setSchedules(userData.schedules || []);
        }
        setIsFetching(false);
      }
    };

    fetchUserProfile();
  }, [auth.currentUser, isFetching]);

  const handleMapClick = (e) => {
    setCenter({ lat: e.latLng.lat(), lng: e.latLng.lng() });
  };

  const handleSave = async () => {
    try {
      if (!auth.currentUser) return;

      await updateFirebaseProfile(auth.currentUser, { displayName: name });

      const userDocRef = doc(db, "users", auth.currentUser.uid);
      const storage = getStorage();

      const imageUploadPromises = images
        .filter((image) => image.file)
        .map((image, index) =>
          uploadBytes(
            ref(
              storage,
              `users/${
                auth.currentUser.uid
              }/images/image_${Date.now()}_${index}`
            ),
            image.file
          )
        );

      const imageSnapshots = await Promise.all(imageUploadPromises);
      const imageUrlPromises = imageSnapshots.map((snapshot) =>
        getDownloadURL(snapshot.ref)
      );
      const newImageUrls = await Promise.all(imageUrlPromises);

      const allImageUrls = [
        ...images.filter((image) => !image.file).map((image) => image.url),
        ...newImageUrls,
      ];

      const updateData = {
        name,
        email,
        biography,
        images: allImageUrls,
        schedules,
      };

      await updateDoc(userDocRef, updateData);
      updateProfile({
        ...profile,
        ...updateData,
      });

      alert("Perfil actualizado con éxito");
    } catch (error) {
      console.error("Error al actualizar el perfil:", error);
      alert("Error al actualizar el perfil");
    }
  };

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
    setSchedules((prevSchedules) => [...prevSchedules, newSchedule]);
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
  const handleRemoveImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
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

      <div className="profile--location ">
        <div className="location">
          <Label text="Location Meets" className="SubTitleText" />
          <Toggle onToggle={handleToggleMap} isToggled={isMap} />
        </div>

        <div className={`maps ${isMap ? "show" : "hide"}`}>
          <Input
            className="input--container"
            type="number"
            placeholder="4 KM"
            value={radius}
            onChange={(e) => setRadius(parseInt(e.target.value))}
          />
          <div className="g-map">
            <LoadScript googleMapsApiKey={apiKeyMaps}>
              <GoogleMap
                mapContainerStyle={{ height: "400px", width: "100%" }}
                zoom={10}
                center={center}
                onClick={handleMapClick}
              >
                <Marker position={center} />
                <Circle center={center} radius={radius * 1000} />
              </GoogleMap>
            </LoadScript>
          </div>
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

      <div className="profile--images">
        <div className="images">
          <Label text="Images" className="SubTitleText" />
        </div>
        <div className="image--folder">
          <AddImages
            images={images}
            setImages={setImages}
            maxImages={3}
            onRemoveImage={handleRemoveImage}
          />
        </div>
      </div>
    </section>
  );
};

export default ProfileOrganism;
