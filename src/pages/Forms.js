import React, { useState, useEffect } from "react";

import axios from "axios";
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';

import "./Forms.css";

import Navbar from "../components/Navbar";
import SignIn from "../components/SignIn";
import SignIn2 from "../components/SignIn2";
import StartForms from '../components/StartForm'
import AnxietyForm from "../components/AnxietyForm";
import DepresionForm from "../components/DepresionForm";
import ModorisForm from "../components/ModorisForm";
import NseForm from "../components/NseForm";

const Forms = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [ocupacion, setOcupacion] = useState("");
  const [nse, setNse] = useState("");
  const [accesoInternet, setAccesoInternet] = useState("");
  const [posibilidadTraslado, setPosibilidadTraslado] = useState("");
  const [diagnosticoAnsiedad, setDiagnosticoAnsiedad] = useState("");
  const [diagnosticoDepresión, setDiagnosticoDepresión] = useState("");
  const [diagnosticoSuicidio, setDiagnosticoSuicidio] = useState("");
  const [atencion, setAtencion] = useState("");
  const [enfoque, setEnfoque] = useState("");

  const [startForm, setStartForm] = useState(false)

  const SignInURL = "http://localhost:3001/api/v1/auth/signup";
  let posted = "";
  let data = "";

  const sacarAtencion = () => {
    if (diagnosticoSuicidio === "Riesgo Alto") {
      setAtencion("Urgente");
    } else {
      if (
        diagnosticoAnsiedad === "Severo" ||
        diagnosticoDepresión === "Moderado-Severo" ||
        diagnosticoDepresión === "Severo" ||
        diagnosticoSuicidio === "Riesgo Medio"
      ) {
        setAtencion("Directo");
      } else if (
        diagnosticoAnsiedad === "Moderado" ||
        diagnosticoDepresión === "Moderado" ||
        diagnosticoSuicidio === "Riesgo Medio"
      ) {
        setAtencion("Mixto");
      } else if (
        diagnosticoAnsiedad === "Leve" ||
        diagnosticoAnsiedad === "Ninguno" ||
        diagnosticoDepresión === "Leve" ||
        diagnosticoDepresión === "Ninguno" ||
        diagnosticoSuicidio == "Riesgo Bajo" ||
        diagnosticoSuicidio === "Riesgo Nulo"
      ) {
        setAtencion("MaterialApoyo");
      } else {
      }
    }
    sacarEnfoque();
  };

  const sacarEnfoque = () => {
    if (atencion !== "") {
      if (atencion === "Urgente" && posibilidadTraslado === "No") {
        setEnfoque("LineaAyuda-LLamada");
      } else if (atencion === "Urgente" && posibilidadTraslado === "Si") {
        setEnfoque("LineaAyuda-Lllamada-Presencial");
      } else if (atencion === "Directo" && posibilidadTraslado === "No") {
        setEnfoque("LLamada");
      } else if (atencion === "Directo" && posibilidadTraslado === "Si") {
        setEnfoque("Llamada-Presencial");
      } else if (atencion === "Mixto" && posibilidadTraslado === "No") {
        setEnfoque("Linea-Llamada");
      } else if (atencion === "Mixto" && posibilidadTraslado === "Si") {
        setEnfoque("Linea-Presencial-Llamada");
      } else if (atencion === "MaterialApoyo") {
        setEnfoque("Linea");
      } else {
      }
      sendData();
    }
  };

  const sendData = () => {
    data = JSON.stringify({
      email: email,
      password: password,
      name: nombre,
      phone: telefono,
      birthDate: fechaNacimiento,
      occupation: ocupacion,
      NSE: nse,
      anxiety: diagnosticoAnsiedad,
      depresion: diagnosticoDepresión,
      suicide: diagnosticoSuicidio,
      treatment: enfoque,
    });
    
    if (enfoque !== "") {
      axios
        .post(SignInURL, data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          posted = response.data;
          console.log(posted);
          history.push({
            pathname: "/FinishForm",
            state: {
              email: email,
              password: password,
              name: nombre,
              phone: telefono,
              birthDate: fechaNacimiento,
              occupation: ocupacion,
              NSE: nse,
              anxiety: diagnosticoAnsiedad,
              depresion: diagnosticoDepresión,
              suicide: diagnosticoSuicidio,
              treatment: enfoque,
            },
          });
        })
        .catch((ex) => {
          if (ex && ex !== undefined && ex.toString && ex.toString !== undefined) {
            // print the general exception
            console.log(ex.toString(), 'ERROR 1');
            history.push({
              pathname: "/Forms",
            });
            swal( {
              title: "Lo siento ocurrio un error en la red",
              text: "Revisa tu conexión a internet e intenta de nuevo",
              confirmButtonText: "Okay",
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
            swal( {
              title: "Lo siento ocurrio un error, intenta de nuevo",
              text: ex.response.data.msg,
              confirmButtonText: "Okay",
            })
            history.push({
              pathname: "/Forms",
            });
          }
        });   
    } else {
    }
  };

  useEffect(() => {
    if (diagnosticoSuicidio !== "") {
      sacarAtencion();
    } else {
    }
  });

  return (
    <>
      <Navbar />
      {email === "" || password === "" ? (
        <SignIn setEmail={setEmail} setPassword={setPassword} />
      ) : nombre === "" ||
        telefono === "" ||
        fechaNacimiento === "" ||
        ocupacion === "" ? (
        <SignIn2
          setNombre={setNombre}
          setTelefono={setTelefono}
          setFechaNacimiento={setFechaNacimiento}
          setOcupacion={setOcupacion}
        />
      ) : startForm === false ? (
        <StartForms setStartForm={()=> setStartForm(true)}/>
      ) : nse === "" ? (
        <NseForm
          setDiagnostico={setNse}
          setTraslado={setPosibilidadTraslado}
          setInternet={setAccesoInternet}
        />
      ) : diagnosticoAnsiedad === "" ? (
        <AnxietyForm setDiagnostico={setDiagnosticoAnsiedad} />
      ) : diagnosticoDepresión === "" ? (
        <DepresionForm setDiagnostico={setDiagnosticoDepresión} />
      ) : diagnosticoSuicidio === "" ? (
        <ModorisForm setDiagnostico={setDiagnosticoSuicidio} />
      ) : (
        <h1 className="Bold25" id="cargandoMessage">Cargando...</h1>
      )}
    </>
  );
};

export default Forms;
