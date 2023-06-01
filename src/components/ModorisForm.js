import React, { useState, useEffect } from "react";

import "./DiagnosisForms.css";
import "../generalStyles/fonts.css";

import modorisPreguntas from "../data/asq-modoris.json";

import QForm from "./QForm";
import Button from "./Button";

const ModorisForm = ({ setDiagnostico }) => {
  const [scoreModoris, setScoreModoris] = useState({
    1: undefined,
    2: undefined,
    3: undefined,
    4: undefined,
  });
  const [totalModoris, setTotalModoris] = useState(0);
  const [preguntasSinContestar, setPreguntasSinContestar] = useState(false);

  const diagnosticar = () => {
    if (scoreModoris[3] === 1 && scoreModoris[4] === 1) {
      setDiagnostico("Riesgo Alto");
    } else if (totalModoris > 0 && totalModoris <= 2) {
      setDiagnostico("Riesgo Bajo");
    } else if (totalModoris === 3) {
      setDiagnostico("Riesgo Medio");
    } else if (totalModoris >= 4 && totalModoris <= 5) {
      setDiagnostico("Riesgo Alto");
    } else {
      setDiagnostico("Riesgo Nulo");
    }
  };

  const sumarScore = () => {
    setTotalModoris(
      scoreModoris[1] + scoreModoris[2] + scoreModoris[3] + scoreModoris[4]
    );
  };

  useEffect(() => {
    sumarScore();
  });

  const sumarModoris = () => {
    if (
      scoreModoris[1] === undefined ||
      scoreModoris[2] === undefined ||
      scoreModoris[3] === undefined ||
      scoreModoris[4] === undefined
    ) {
      setPreguntasSinContestar(true);
    } else {
      setPreguntasSinContestar(false);
      diagnosticar();
    }
  };

  return (
    <div className="nseContainer">
      <label className="Bold25">ASQ-MODORIS</label>
      <div id="infoCuestionarioContainer">
        <label className="Regular13">
          Instrumento de tamizaje para la evaluación de la prevención del
          suicidio.
        </label>
        <label className="Regular13">
          El siguiente cuestionario consta de cuatro preguntas de opción
          múltiple tipo escala de clasificación.
        </label>
        <label className="SBold13">
          Te tomara menos de 2 minutos contestarlo
        </label>
        <label className="Regular13" id="modoris">
          La intención de este cuestionario es apoyar y brindar la mejor
          atención posible, por lo tanto, es importante que conteste con
          sinceridad a las siguientes preguntas. Su información será tratada con
          absoluta confidencialidad.
        </label>
      </div>
      {modorisPreguntas.map((pregunta) => {
        return (
          <QForm
            pregunta={pregunta.pregunta}
            id={pregunta.id}
            form={"modoris"}
            score={scoreModoris}
            setScore={setScoreModoris}
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
        <Button text={"Continuar"} type={"short"} handlePress={sumarModoris} />
      </div>
    </div>
  );
};

export default ModorisForm;
