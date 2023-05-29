import React, { useState, useEffect } from "react";
import "./LogIn.css";

import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Input from '../components/Input'
import { Link } from "react-router-dom";
import axios from "axios";

const LogIn = () => {
  const [camposInvalidos, setCamposInvalidos] = useState(false);
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState("");

  // const LogInURL = "http://localhost:3001/api/v1/auth/login";
  // let posted = "";
  // let data = "";

  const handleSubmit = () => {
    if (email === "" || password === "") {
      setCamposInvalidos(true);
      setMessage("LLena todos los campos para continuar");
    } else {
      let data = JSON.stringify({
        "email": email,
        "password": password
      });
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3001/api/v1/auth/login',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error.message);
        setCamposInvalidos(true);
        setMessage(error.message);
      });      
    }
  };

  useEffect(() => {
    if(inputValue.email !== '' && inputValue.password!== ''){
      setEmail(inputValue.email.target.value)
      setPassword(inputValue.password.target.value)
    }
  });

  return (
    <>
    <Navbar/>
    <div className="container">
        <div id="infoContainer">
          <div className="B25 titleLogIn">
            Hola! Estamos felices de volver a verte porfavor inicia sesión:)
          </div>
          <div className="inputs">
            <Input type={'text'} label={'Correo'}
            handleChange={(text) => {
              setInputValue({ ...inputValue, email: text });
            }}/>
            <Input type={'password'} label={'Contraseña'}
            handleChange={(text) => {
              setInputValue({ ...inputValue, password: text });
            }}/>
          </div>
          {camposInvalidos ? (
            <label className="Regular13" id="camposVacios">
              {message}
            </label>
          ) : (
            ""
          )}
          <div id="button">
            <Button text={"Inicia Sesión"} type={"short"} handlePress={handleSubmit} />
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