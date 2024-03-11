import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Label from "../../atoms/labels/label";
import Input from "../../atoms/input/input";
import Button from "../../atoms/button/button";
import { ReactComponent as Google } from "../../../assets/icons/SociaIcon.svg";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../../firebase.config";
import useUserStore from "../../store/userStore";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase.config";

import "./login.css";

const LoginOrganism = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setAuth, setProfile } = useUserStore();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("Usuario logueado:", user);

      // Actualizar el estado de autenticación y perfil
      setAuth(true);
      setProfile({
        name: user.displayName || "",
        email: user.email,
        imageUrl: user.photoURL || "",
      });

      // Guardar o actualizar los datos del usuario en Firestore
      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);
      if (!userDocSnap.exists()) {
        // Si el documento no existe, crea uno nuevo
        await setDoc(userDocRef, {
          name: user.displayName || "",
          email: user.email,
          imageUrl: user.photoURL || "",
        });
      }

      navigate("/");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Usuario logueado con Google:", user);

      setAuth(true);
      setProfile({
        name: user.displayName || "",
        email: user.email,
        imageUrl: user.photoURL || "",
      });

      navigate("/");
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
    }
  };

  return (
    <section className="login">
      <div className="box">
        <div className="login--head">
          <Label text="Iniciar sesión" className="Title" />
          <Label
            text="Start selling your time with others"
            className="TitleText"
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
        <div className="actions">
          <Button
            className="button--primary"
            text="Loguearse"
            onClick={handleLogin}
          />
          <Button
            icon={Google}
            className="button--icon-text"
            text="Loguearse con Google"
            onClick={loginWithGoogle}
          />
        </div>
      </div>
    </section>
  );
};

export default LoginOrganism;
