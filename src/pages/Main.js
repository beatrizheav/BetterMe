import React from "react";
import { useLocation } from "react-router-dom";
import "./Main.css";

import NavbarLog from "../components/NavbarLog";
import Button from "../components/Button";
import Input from "../components/Input";

const Main = () => {
  const location = useLocation();
  return (
    <>
      <NavbarLog
        nombre={location.state.name}
        correo={location.state.email}
        telefono={location.state.phone}
        fechaNacimiento={location.state.birthDate}
        ocupacion={location.state.occupation}
      />
      <label>{location.state.treatment}</label>
    </>
  );
};

export default Main;
