import React, { useState } from "react";
import "./FinishForm.css";

import Navbar from "../components/Navbar";
import Button from "../components/Button";

const FinishForm = () => {
  return (
    <>
      <Navbar />
      <div id="startContainer">
        <label className='B25' id="title">Haz finalizado todos los cuestionarios!</label>
        <img
            src={require("../assets/finishForm.png")}
            id="startImage"
            alt="finishFormIlustration"
        />
        <label id="infoStart" className="R15">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus neque ex, semper non felis vitae, volutpat egestas nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </label>
        <Button text={"Empezar"} type={"short"} link={"/Main"} />
      </div>
    </>
  );
};

export default FinishForm;
