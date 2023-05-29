import React, { useState, useEffect } from "react";

import "./DiagnosisForms.css";
import "../generalStyles/fonts.css";

import gad7Preguntas from "../data/gad-7.json";

import QForm from "./QForm";
import Button from "./Button";

const AnxietyForm = ({ setDiagnostico }) => {
  const [scoreGad7, setScoreGad7] = useState({
    1: undefined,
    2: undefined,
    3: undefined,
    4: undefined,
    5: undefined,
    6: undefined,
    7: undefined,
  });
  const [totalGad7, setTotalGad7] = useState(0);
  const [preguntasSinContestar, setPreguntasSinContestar] = useState(false);

  const diagnosticar = () => {
    if(totalGad7 >= 0 && totalGad7 <= 4){
      setDiagnostico("Ninguno")
    } else if (totalGad7 >= 5 && totalGad7 <= 9){
      setDiagnostico("Leve")
    } else if(totalGad7 >= 10 && totalGad7 <= 14) {
      setDiagnostico("Moderado")
    } else if (totalGad7 <= 21){
      setDiagnostico("Severo")
    } else {}
  }

  const sumarScore = () => {
    setTotalGad7(
      scoreGad7[1] +
      scoreGad7[2] +
      scoreGad7[3] +
      scoreGad7[4] +
      scoreGad7[5] +
      scoreGad7[6] +
      scoreGad7[7]
    );
  }

  useEffect(() => {
    sumarScore()
  });

  const sumarGad7 = () => {
    if (
      scoreGad7[1] === undefined ||
      scoreGad7[2] === undefined ||
      scoreGad7[3] === undefined ||
      scoreGad7[4] === undefined ||
      scoreGad7[5] === undefined ||
      scoreGad7[6] === undefined ||
      scoreGad7[7] === undefined 
    ) {
      setPreguntasSinContestar(true);
    } else {
      setPreguntasSinContestar(false);
      diagnosticar()
    }
  };

  return (
    <div className="nseContainer">
      <label className="Bold25">GAD-7</label>
      {gad7Preguntas.map((pregunta) => {
        return (
          <QForm
            pregunta={pregunta.pregunta}
            id={pregunta.id}
            form={"gad7"}
            score={scoreGad7}
            setScore={setScoreGad7}
          />
        );
      })}
      {preguntasSinContestar ? (
        <label className="SBold13" id="camposVacios">Contesta todas las preguntas para continuar</label>
      ) : (
        ""
      )}
      <div id="buttonForm">
        <Button text={"Continuar"} type={"short"} handlePress={sumarGad7} />
      </div>
    </div>
  );
};

export default AnxietyForm;
