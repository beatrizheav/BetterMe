import React from "react";
import { useLocation } from "react-router-dom";
import "./Main.css";
import "../generalStyles/fonts.css";

import NavbarLog from "../components/NavbarLog";

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
      <div id="infoUsuarioContainer">
        <div>
          <label className="SBold25">{location.state.name}</label>
        </div>
        <div id="description">
          <label className="Regular15">Nivel Socioecónomico:</label>
          <label className="SBold15">{location.state.nse}</label>
        </div>
        <div id="description">
          <label className="Regular15">Diagnostico Ansiedad:</label>
          <label className="SBold15">{location.state.anxiety}</label>
        </div>
        <div id="description">
          <label className="Regular15"> Diagnostico Depresion:</label>
          <label className="SBold15">{location.state.depresion}</label>
        </div>
        <div id="description">
          <label className="Regular15">Diagnostico Suicidio:</label>
          <label className="SBold15">{location.state.suicide}</label>
        </div>
        <div id="description">
          <label className="Regular15">Enfoque atención:</label>
          <label className="SBold15">{location.state.treatment}</label>
        </div>
      </div>
    </>
  );
};

export default Main;
