import React, { useState, useEffect } from "react";

import "./QForm.css";
import "../generalStyles/fonts.css";
import gad7Opciones from "../data/gad-7_Opciones.json";
import phq9Opciones from "../data/phq-9_Opciones.json";
import modorisOpciones from "../data/asq-modoris_Opciones.json";
import nseData from "../data/nse-amaiOpciones.json";

export const QForm = ({ pregunta, id, form, score, setScore, setTraslado, setInternet }) => {
  const [opSelected, setOpSelected] = useState(false);
  const [data, setData] = useState([]);
  const [pNse, setPNse] = useState(false)

  const renderData = () => {
    if (form === "gad7") {
      setData(gad7Opciones);
    } else if (form === "phq9") {
      setData(phq9Opciones);
    } else if (form === "modoris") {
      setData(modorisOpciones);
    } else {
      setPNse(true)
      if (id === 1) {
        setData(nseData[1]);
      } else if (id === 2) {
        setData(nseData[2]);
      } else if (id === 3) {
        setData(nseData[3]);
      } else if (id === 4) {
        setData(nseData[4]);
      } else if (id === 5) {
        setData(nseData[5]);
      } else if (id === 6) {
        setData(nseData[6]);
      }
    }
  };

  useEffect(() => {
    renderData();
  });

  return (
    <div className="QFormContainer">
      <div>
        <label className="SBold13" id="preguntaText">
          {pregunta}
        </label>
        {data.map((opcion) => {
          if (id === 4 && pNse ===  true) {
            return (
              <div className="optionContainer">
                <input
                  id="checkboxOption"
                  type="checkbox"
                  checked={opcion.op === opSelected}
                  onChange={() => [
                    setOpSelected(opcion.op),
                    setScore({ ...score, [id]: opcion.value }),
                    setInternet(opcion.op),
                  ]}
                />
                <label className="Regular13" id="optionText">
                  {opcion.op}
                </label>
              </div>
            );
          } else if (id === 6 && pNse ===  true) {
            return (
              <div className="optionContainer">
                <input
                  id="checkboxOption"
                  type="checkbox"
                  checked={opcion.op === opSelected}
                  onChange={() => [
                    setOpSelected(opcion.op),
                    setTraslado(opcion.value),
                  ]}
                />
                <label className="Regular13" id="optionText">
                  {opcion.op}
                </label>
              </div>
            );
          } else {
            return (
              <div className="optionContainer">
                <input
                  id="checkboxOption"
                  type="checkbox"
                  checked={opcion.op === opSelected}
                  onChange={() => [
                    setOpSelected(opcion.op),
                    setScore({ ...score, [id]: opcion.value }),
                  ]}
                />
                <label className="Regular13" id="optionText">
                  {opcion.op}
                </label>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default QForm;
