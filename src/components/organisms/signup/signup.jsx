import { ReactComponent as Google } from "../../../assets/icons/SociaIcon.svg";
import { googleProvider, auth, db } from "../../../firebase.config";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import Button from "../../atoms/button/button";
import Label from "../../atoms/labels/label";
import Input from "../../atoms/input/input";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import { Link } from "react-router-dom";

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
  const navigate = useNavigate();

  const signUpWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      await saveUserData(user);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

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
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="signup">
      <div className="box">
        <div className="signup--head">
          <Label text="Registrarme" className="Title" />
          <Label
            text="Start selling your time with others"
            className="TitleText"
          />
        </div>
        <div className="input--signup">
          <Label text="Name" className="TitleText" />
          <Input
            placeholder="Name"
            type="name"
            className="input--container"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input--signup">
          <Label text="Email" className="TitleText" />
          <Input
            placeholder="matthew@xengly.com"
            type="email"
            className="input--container"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input--signup">
          <Label text="Password" className="TitleText" />
          <Input
            placeholder="- - -"
            type="password"
            className="input--container"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="actions">
          <Button
            className="button--primary"
            text="añadir"
            onClick={handleRegister}
          />
          <Button
            icon={Google}
            className="button--icon-text"
            text="añadir"
            onClick={signUpWithGoogle}
          />
        </div>
      </div>
      <Link to={'/login'}> ¿Tienes cuenta? </Link>
    </section>
  );
};

export default SignupOrganism;
