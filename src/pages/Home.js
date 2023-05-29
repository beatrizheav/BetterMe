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
          <div className="B35 titleHome">
            Comienza una nueva vida hoy
          </div>
          <p id="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            neque ex, semper non felis vitae, volutpat egestas nibh. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. 
            <br/><br/>
            Nullam blandit sem volutpat, suscipit velit ac,
            fermentum magna. Cras finibus est eget rhoncus condimentum. 
            Nullam lacinia, libero nec molestie dignissim, dolor magna blandit mi, eget
            auctor neque arcu sit amet sapien. 
            <br/><br/>
            Ut eget magna viverra justo
            vulputate facilisis.
          </p>
          <div id="button">
            <Button text={"Inicia aquí"} type={"short"} link={"/LogIn"} />
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
