import React, { useState, useEffect } from "react";

import "./DiagnosisForms.css";
import "../generalStyles/fonts.css";

import phq9Preguntas from "../data/phq-9.json";

import QForm from "./QForm";
import Button from "./Button";

const DepresionForm = ({ setDiagnostico }) => {
  const [scorePhq9, setScorePhq9] = useState({
    1: undefined,
    2: undefined,
    3: undefined,
    4: undefined,
    5: undefined,
    6: undefined,
    7: undefined,
    8: undefined,
    9: undefined,
  });
  const [totalPhq9, setTotalPhq9] = useState(0);
  const [preguntasSinContestar, setPreguntasSinContestar] = useState(false);

  const diagnosticar = () => {
    if(totalPhq9 >= 0 && totalPhq9 <= 4){
      setDiagnostico("Ninguno")
    } else if (totalPhq9 >= 5 && totalPhq9 <= 9){
      setDiagnostico("Leve")
    } else if(totalPhq9 >= 10 && totalPhq9 <= 14) {
      setDiagnostico("Moderado")
    } else if (totalPhq9 >= 15 && totalPhq9 <= 19){
      setDiagnostico("Moderado-Severo")
    } else if (totalPhq9 >= 20 && totalPhq9 <= 27){
      setDiagnostico("Severo")
    } else {}
  }

  const sumarScore = () => {
    setTotalPhq9(
      scorePhq9[1] +
      scorePhq9[2] +
      scorePhq9[3] +
      scorePhq9[4] +
      scorePhq9[5] +
      scorePhq9[6] +
      scorePhq9[7] +
      scorePhq9[8] +
      scorePhq9[9] 
    );
  }

  useEffect(() => {
    sumarScore()
  });

  const sumarPhq9 = () => {
    if (
      scorePhq9[1] === undefined ||
      scorePhq9[2] === undefined ||
      scorePhq9[3] === undefined ||
      scorePhq9[4] === undefined ||
      scorePhq9[5] === undefined ||
      scorePhq9[6] === undefined ||
      scorePhq9[7] === undefined ||
      scorePhq9[8] === undefined ||
      scorePhq9[9] === undefined
    ) {
      setPreguntasSinContestar(true);
    } else {
      setPreguntasSinContestar(false);
      diagnosticar()
    }
  };

  return (
    <div className="nseContainer">
      <label className="Bold25">PHQ-9</label>
      <div id="infoCuestionarioContainer">
        <label className="Regular13">
         Instrumento de tamizaje para evaluar la severidad de la depresión en atención primaria.
        </label>
        <label className="Regular13">
         Validado con un Alfa de Cronbach de 0,835
        </label>
        <label className="Regular13">
        Consta de nueve preguntas de opción multiple de tipo escala de clasificación 
        </label>
        <label className="SBold13">
          Te tomara menos de 2 minutos contestarlo
        </label>
      </div>
      {phq9Preguntas.map((pregunta) => {
        return (
          <QForm
            pregunta={pregunta.pregunta}
            id={pregunta.id}
            form={"phq9"}
            score={scorePhq9}
            setScore={setScorePhq9}
          />
        );
      })}
      {preguntasSinContestar ? (
        <label className="SBold13" id="camposVacios">Contesta todas las preguntas para continuar</label>
      ) : (
        ""
      )}
      <div id="buttonForm">
        <Button text={"Continuar"} type={"short"} handlePress={sumarPhq9} />
      </div>
    </div>
  );
};

export default DepresionForm;
