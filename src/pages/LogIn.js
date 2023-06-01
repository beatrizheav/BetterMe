import React, { useState, useEffect } from "react";

import swal from 'sweetalert';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Input from '../components/Input'
import "./LogIn.css";

const LogIn = () => {
  const [camposInvalidos, setCamposInvalidos] = useState(false);
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState("");
  const history = useHistory();

  const handleSubmit = () => {
    if (email === "" || password === "") {
      setCamposInvalidos(true);
      setMessage('Llena todos los campos para continuar')
    } else {
      setCamposInvalidos(false);
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
        history.push({
          pathname: "/Main",
          state: {
            email: response.data.userExists.email,
            password: response.data.userExists.password,
            name: response.data.userExists.name,
            phone: response.data.userExists.phone,
            birthDate: response.data.userExists.birthDate,
            occupation: response.data.userExists.occupation,
            NSE: response.data.userExists.NSE,
            anxiety: response.data.userExists.anxiety,
            depresion: response.data.userExists.depresion,
            suicide: response.data.userExists.suicide,
            treatment: response.data.userExists.treatment,
          },
        });
      })
      .catch((ex) => {
        // console.log(error.message);
        if (ex && ex !== undefined && ex.toString && ex.toString !== undefined) {
          // print the general exception
          console.log(ex.toString(), 'ERROR 1');
          swal( {
            title: "Lo siento no pudimos realizar tu conexión",
            text: "Verifica tu conexión en la red",
            confirmButtonText: "Okay",
            className:"swal2-popup"
          })
        }     
        if (
          ex.response &&
          ex.response !== undefined &&
          ex.response.data &&
          ex.response.data !== undefined
        ) {
          // print the exception message from axios response
          console.log(ex.response.data, 'ERROR 2');
          // swal("Lo siento este usuario no existe", "¿Aún no tienes una cuenta? Registrate!:)")
          swal( {
            title: "Lo siento este usuario no existe",
            text: "¿Aún no tienes una cuenta? Registrate!:)",
            confirmButtonText: "Okay",
            className:"swal2-popup"
          })
        }
      });   
      return(
        <h1 className="Bold25" id="cargandoMessage">Cargando...</h1>
      )
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