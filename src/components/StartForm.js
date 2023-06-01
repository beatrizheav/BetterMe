import "./StartForm.css";

import Navbar from "./Navbar";
import Button from "./Button";

const StartForm = ({ setStartForm }) => {
  return (
    <>
      <Navbar />
      <div className="startContainer">
        <label className="B25" id="title">
          Ya casi terminas solo queremos conocerte más!
        </label>
        <img
          src={require("../assets/startForm.png")}
          id="startImage"
          alt="startFormIlustration"
        />
        <label id="infoStart" className="R15">
          A continuación se te mostrarán tres formularios relacionados con la
          ansiedad, la depresión y el riesgo suicida. Es importante que los
          contestes lo más apegado a lo que estas sintiendo para poder realizar
          una adecuada canalización a la institución que puede proporcionarte el
          apoyo requerido.
        </label>
        <label id="infoStart" className="R12">
          **Tus datos solo serán usados para fines de canalización y de
          estadísticas con las instituciones públicas. La página está regida por
          criterios de bioética, confidencialidad, respeto y trato igualitario.
        </label>
        <Button
          text={"Estoy listo:)"}
          type={"short"}
          handlePress={setStartForm}
        />
      </div>
    </>
  );
};

export default StartForm;
