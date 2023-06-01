import React from "react";
import "../App.css";
import "./Home.css";

import Navbar from "../components/Navbar";
import Button from "../components/Button";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div id="infoContainer">
          <div className="B35 titleHome">Comienza una nueva vida hoy</div>
          <p id="paragraph">
            ¡Bienvenido a Mentalizate al 100! Una plataforma de salud
            psicológica gratuita en la que podrás encontrar apoyo, atención y
            recursos para atravesar síntomas relacionados con la depresión,
            ansiedad y el riesgo de suicidio. 
            <br />
            <br />
            Este proyecto tiene como objetivo
            brindar acceso a la atención psicológica gratuita las 24 horas del día brindando acceso a
            recursos en línea que fomenten la psicoeducación y proporcionando el contacto
            entre la población y los sistemas de atención directa a la salud
            mental proporcionados por el gobierno.
            <br />
            <br />
            Únetenos, juntos por una salud mental accesible e integra.
          </p>
          <div id="button">
            <Button text={"Inicia aquí"} type={"short"} link={"/Forms"} />
          </div>
        </div>
        <div id="imageContainer">
          <img
            src={require("../assets/home.png")}
            id="homeImage"
            alt="homeIlustration"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
