import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./FinishForm.css";

import Navbar from "../components/Navbar";
import Button from "../components/Button";

const FinishForm = () => {
  const location = useLocation();
  console.log(location.state.treatment, "PATH ROUTES");

  return (
    <>
      <Navbar />
      <div id="startContainer">
        <label className="B25" id="title">
          Haz finalizado todos los cuestionarios!
        </label>
        <img
          src={require("../assets/finishForm.png")}
          id="startImage"
          alt="finishFormIlustration"
        />
        <label id="infoStart" className="R15">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus neque
          ex, semper non felis vitae, volutpat egestas nibh. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.{" "}
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
              NSE: location.state.nse,
              anxiety: location.state.anxiety,
              depresion: location.state.depresion,
              suicide: location.state.suicide,
              treatment: location.state.treatment },
          }}
        />
      </div>
    </>
  );
};

export default FinishForm;
