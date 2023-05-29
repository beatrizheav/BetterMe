import React, { useState } from "react";
import "./SignIn.css";
import "../generalStyles/fonts.css";

import Navbar from "./Navbar";
import Input from "./Input";
import Button from "./Button";

const SignIn = ({ setEmail, setPassword }) => {
  const [camposInvalidos, setCamposInvalidos] = useState(false);
  const [message, setMessage] = useState("");
  const [message1, setMessage1] = useState("");
  const [inputValue, setInputValue] = useState({ email: "", password: "" });

  var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var validPassword = /^(?=.*\d)(?=.*[A-Z])/;

  const reemplazar = () => {
    if (inputValue.email === "" || inputValue.password === "") {
      setCamposInvalidos(true);
      setMessage("LLena todos los campos para continuar");
      setMessage1('')
    } else if (
      inputValue.email.target.value === "" ||
      inputValue.password.target.value === ""
    ) {
      setCamposInvalidos(true);
      setMessage("LLena todos los campos para continuar");
      setMessage1('')
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (
      inputValue.email.target.value.match(validEmail) &&
      inputValue.password.target.value.match(validPassword)
    ) {
      setEmail(inputValue.email.target.value)
      setPassword(inputValue.password.target.value)
    } else {
      setCamposInvalidos(true);
      setMessage(
        "Email o contraseña invalido."
      );
      setMessage1(
        "Las contraseñas deben tener al menos 6 caracteres, una mayuscula y un simbolo."
      );
    }
  };

  return (
    <>
      <Navbar />
      <div className="signInPage">
        <div className="signInContainer">
          <div id="texts">
            <label className="B25" id="title">
              Crea una cuenta:)
            </label>
            <label className="R14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </label>
          </div>
          <div id="inputs">
            <Input
              type={"email"}
              label={"Correo"}
              handleChange={(text) => {
                setInputValue({ ...inputValue, email: text });
              }}
            />
            <Input
              type={"password"}
              label={"Contraseña"}
              handleChange={(text) => {
                setInputValue({ ...inputValue, password: text });
              }}
            />
          </div>
          {camposInvalidos ? (
            <label className="Regular13" id="camposVacios">
              {message}
              <br/>
              {message1}
            </label>
          ) : (
            ""
          )}
          <Button text={"Continuar"} type={"large"} handlePress={reemplazar} />
          <img
            src={require("../assets/signIn1.png")}
            id="signIn1Image"
            alt="homeIlustration"
          />
        </div>
      </div>
    </>
  );
};

export default SignIn;
