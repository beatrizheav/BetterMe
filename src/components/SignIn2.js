import React, { useState } from "react";
import "./SignIn.css";

import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Button from "../components/Button";

const SignIn2 = ({
  setNombre,
  setTelefono,
  setFechaNacimiento,
  setOcupacion,
}) => {
  const [inputValue, setInputValue] = useState({
    nombre: "",
    telefono: "",
    fechaNacimiento: "",
    ocupacion: "",
  });
  const [camposInvalidos, setCamposInvalidos] = useState(false);
  const [message, setMessage] = useState("");

  var validText = /^[^0-9]*$/;
  var validPhone = /^\+?\d{8,}$/;
  var validDate = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

  const reemplazar = () => {
    if (inputValue.nombre === "" || inputValue.telefono === "" || inputValue.fechaNacimiento === "" || inputValue.ocupacion === "") {
      setCamposInvalidos(true);
      setMessage("LLena todos los campos para continuar");
    } else if (
      inputValue.nombre.target.value === "" ||
      inputValue.telefono.target.value === "" ||
      inputValue.fechaNacimiento.target.value === "" ||
      inputValue.ocupacion.target.value === ""
    ) {
      setCamposInvalidos(true);
      setMessage("LLena todos los campos para continuar");
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (
      inputValue.nombre.target.value.match(validText) &&
      inputValue.telefono.target.value.match(validPhone) &&
      inputValue.ocupacion.target.value.match(validText)
    ) {
      setNombre(inputValue.nombre.target.value)
      setTelefono(inputValue.telefono.target.value)
      setFechaNacimiento(inputValue.fechaNacimiento.target.value)
      setOcupacion(inputValue.ocupacion.target.value)
      setCamposInvalidos(false);
    } else {
      setCamposInvalidos(true);
      setMessage(
        "Campos invalidos"
      );
    }
  };

  return (
    <>
      <Navbar />
      <div className="signInPage signInPage2">
        <div className="signInContainer signIn2">
          <div id="texts">
            <label className="SB25" id="title">
              ¡Queremos saber más de ti!
            </label>
            <label className="R12">
              Apoyanos a llenar con tu información los siguientes campos 
            </label>
          </div>
          <div id="inputsContainer">
            <div id="inputs">
              <Input
                type={"text"}
                label={"Nombre (A-Z)"}
                handleChange={(text) => {
                  setInputValue({ ...inputValue, nombre: text });
                }}
              />
              <Input
                type={"number"}
                label={"Telefono (10 digitos)"}
                handleChange={(text) => {
                  setInputValue({ ...inputValue, telefono: text });
                }}
              />
            </div>
            <div id="inputs">
              <Input
                type={"date"}
                label={"Fecha de nacimiento (dd/mm/yyyy)"}
                handleChange={(text) => {
                  setInputValue({ ...inputValue, fechaNacimiento: text });
                }}
              />
              <Input
                type={"text"}
                label={"Ocupación (A-Z)"}
                handleChange={(text) => {
                  setInputValue({ ...inputValue, ocupacion: text });
                }}
              />
            </div>
          </div>
          {camposInvalidos ? (
            <label className="Regular13" id="camposVacios">
              {message}
            </label>
          ) : (
            ""
          )}
          <Button text={"Continuar"} type={"large"} handlePress={reemplazar}/>
        </div>
      </div>
    </>
  );
};

export default SignIn2;
