import React, { useState } from "react";
import "./Llamada.css";
import "../generalStyles/fonts.css";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Llamada = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div id="LlamadaContainer">
      <div id="CalendarContainerLlamada">
        <label className="SBold25" >Citas</label>
        <div id="Calendar">
        <Calendar onChange={onChange} value={value} />
        </div>
      </div>
      <div id="PsicContainerLlamada">
        <img
              src={require("../assets/avatarPsic.png")}
              id="profilePsic"
              alt="profilePsic"
        />
        <div id="psicLlamada">
            <label className="SBold13" >Karla Elizabeth Montes</label>
            <label className="Regular15">Psicologa General</label>
            <label className="Regular15">Tel. 312 299 9497</label>
        </div>
      </div>
    </div>
  );
};

export default Llamada;
