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
            Bienvenido a Mentalizate al 100, una plataforma de salud mental
            gratuita para afrontar los retos cotidianos de la vida diaria.
            <br />
            <br />
            Esta plataforma tiene como objetivo facilitar el acceso a la
            atención psicológica las 24 horas del día a través del diagnóstico
            oportuno, canalización mediamente un directorio de instituciones de
            salud mental y juridícas, así como, recursos audiovisuales que
            fomentan la educación en la salud mental.
            <br />
            <br />
            ¡Mentalizate al 100!, juntos por el acceso a una salud mental
            integral y gratuita.
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
