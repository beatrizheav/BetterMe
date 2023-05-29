import "./StartForm.css";

import Navbar from "../components/Navbar";
import Button from "../components/Button";

const StartForm = () => {
  return (
    <>
      <Navbar />
      <div className="startContainer">
        <label className='B25' id="title">Ya casi terminas solo queremos conocerte más!</label>
        <img
            src={require("../assets/startForm.png")}
            id="startImage"
            alt="startFormIlustration"
        />
        <label id="infoStart" className="R15">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus neque ex, semper non felis vitae, volutpat egestas nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </label>
        <Button text={"Estoy listo:)"} type={"short"} link={"/Forms"} />
      </div>
    </>
  );
};

export default StartForm;
