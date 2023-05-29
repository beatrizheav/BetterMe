import React from "react";
import "./LogIn.css";

import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Input from '../components/Input'
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <>
    <Navbar/>
    <div className="container">
        <div id="infoContainer">
          <div className="B25 titleLogIn">
            Hola! Estamos felices de volver a verte porfavor inicia sesión:)
          </div>
          <div className="inputs">
            <Input type={'text'} label={'Correo'}/>
            <Input type={'password'} label={'Contraseña'}/>
          </div>
          <div id="button">
            <Button text={"Inicia Sesión"} type={"short"} link={"/Main"} />
          </div>
          <div id="createAccount">
            <label id="paddingCreteAccount" className="R14">¿No tienes una cuenta?</label>
            <Link to='/Forms' id='Registrate'className="B14">Registrate</Link>
          </div>
        </div>
        <div id="imageContainer">
          <img
            src={require("../assets/logIn.png")}
            id="homeImage"
            alt="homeIlustration"
          />
        </div>
      </div>
    </>
  )
}

export default LogIn