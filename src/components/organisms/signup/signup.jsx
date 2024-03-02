import { ReactComponent as Google } from "../../../assets/icons/SociaIcon.svg";
import { googleProvider, auth, db } from "../../../firebase.config";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import Button from "../../atoms/button/button";
import Label from "../../atoms/labels/label";
import Input from "../../atoms/input/input";
import React, { useState } from "react";
import "./signup.css";

const signUpWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    await saveUserData(user);
  } catch (error) {
    console.error(error);
  }
};

const saveUserData = async (user, additionalData = {}) => {
  const userRef = doc(db, "users", user.uid);
  const userData = {
    name: user.displayName || additionalData.name,
    email: user.email,
    profileImageURI: user.photoURL || additionalData.profileImageURI || null,
  };

  await setDoc(userRef, userData, { merge: true });
};

const SignupOrganism = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await saveUserData(user, { name: name });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <div>
        <Label text="Registrarme" className="Title" />
        <Label
          text="Start selling your time with others"
          className="TitleText"
        />
      </div>
      <div>
        <Label text="Name" className="TitleText" />
        <Input
          placeholder="Name"
          type="name"
          className="input--container"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <Label text="Email" className="TitleText" />
        <Input
          placeholder="matthew@xengly.com"
          type="email"
          className="input--container"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <Label text="Password" className="TitleText" />
        <Input
          placeholder="- - -"
          type="password"
          className="input--container"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <Button
          className="button--primary"
          text="añadir"
          onClick={handleRegister}
        />
        <Button
          icon={Google}
          className="button--social"
          text="añadir"
          onClick={signUpWithGoogle}
        />
      </div>
    </section>
  );
};

export default SignupOrganism;
