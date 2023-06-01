import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./FinishForm.css";

import NavbarLog from "../components/NavbarLog";
import Button from "../components/Button";

const FinishForm = () => {
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
      <div id="startContainer">
        <label className="B25" id="title">
          Haz finalizado todos los cuestionarios!
        </label>
        <img
          src={require("../assets/finishForm.png")}
          id="startImage"
          alt="finishFormIlustration"
        />
        <label id="infoStart" className="R16">
          Agradecemos tu confianza, esperamos proporcionarte la información necesaria y acompañarte en tu proceso.
        </label>
        <Button
          text={"Empezar"}
          type={"short"}
          link={{
            pathname: "/Main",
            state: {
              email: location.state.email,
              password: location.state.password,
              name: location.state.name,
              phone: location.state.phone,
              birthDate: location.state.birthDate,
              occupation: location.state.occupation,
              nse: location.state.NSE,
              anxiety: location.state.anxiety,
              depresion: location.state.depresion,
              suicide: location.state.suicide,
              treatment: location.state.treatment,
            },
          }}
        />
      </div>
    </>
  );
};

export default FinishForm;
