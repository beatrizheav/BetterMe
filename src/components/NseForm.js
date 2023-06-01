import React, { useState, useEffect } from "react";

import "./DiagnosisForms.css";
import "../generalStyles/fonts.css";

import nseData from "../data/nse-amai.json";

import QForm from "./QForm";
import Button from "./Button";

const NseForm = ({ setDiagnostico, traslado, setTraslado, setInternet }) => {
  const [scoreNse, setScoreNse] = useState({
    1: undefined,
    2: undefined,
    3: undefined,
    4: undefined,
    5: undefined,
  });
  const [totalNse, setTotalNse] = useState(0);
  const [preguntasSinContestar, setPreguntasSinContestar] = useState(false);

  const diagnosticar = () => {
    if (totalNse > 202) {
      setDiagnostico("Clase Alta");
    } else if (totalNse >= 168 && totalNse <= 201) {
      setDiagnostico("Clase Media Alta");
    } else if (totalNse >= 141 && totalNse <= 167) {
      setDiagnostico("Clase Media");
    } else if (totalNse >= 116 && totalNse <= 140) {
      setDiagnostico("Clase Media");
    } else if (totalNse >= 95 && totalNse <= 115) {
      setDiagnostico("Clase Media-Baja");
    } else if (totalNse >= 48 && totalNse <= 94) {
      setDiagnostico("Clase Baja");
    } else if (totalNse >= 0 && totalNse <= 47) {
      setDiagnostico("Clase Más Baja");
    }
  };

  const sumarScore = () => {
    setTotalNse(
      scoreNse[1] + scoreNse[2] + scoreNse[3] + scoreNse[4] + scoreNse[5]
    );
  };

  useEffect(() => {
    sumarScore();
  });

  const sumarNse = () => {
    if (
      scoreNse[1] === undefined ||
      scoreNse[2] === undefined ||
      scoreNse[3] === undefined ||
      scoreNse[4] === undefined ||
      scoreNse[5] === undefined ||
      traslado === ""
    ) {
      setPreguntasSinContestar(true);
    } else {
      setPreguntasSinContestar(false);
      diagnosticar();
    }
  };

  return (
    <div className="nseContainer">
      <label className="Bold25">Nivel Socieconomico</label>
      <div id="infoCuestionarioContainer">
        <label className="Regular13">
          Herramienta de evaluación socioeconomica AMAI 2022
        </label>
        <label className="Regular13">
          El siguiente cuestionario consta de 6 preguntas de opción multiples
          tipo escala descriptiva
        </label>
        <label className="SBold13">
          Te tomara menos de 2 minutos contestarlo
        </label>
      </div>
      {nseData.map((pregunta) => {
        return (
          <QForm
            pregunta={pregunta.pregunta}
            id={pregunta.id}
            form={"nse"}
            score={scoreNse}
            setScore={setScoreNse}
            setTraslado={setTraslado}
            setInternet={setInternet}
          />
        );
      })}
      {preguntasSinContestar ? (
        <label className="SBold13" id="camposVacios">
          Contesta todas las preguntas para continuar
        </label>
      ) : (
        ""
      )}
      <div id="buttonForm">
        <Button text={"Continuar"} type={"short"} handlePress={sumarNse} />
      </div>
    </div>
  );
};

export default NseForm;
