import React, { useState } from "react";
import { IoIosClose, IoIosMenu, IoIosLogOut } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./NavbarLog.css";
import "../generalStyles/fonts.css";

const NavbarLog = ({
  nombre,
  correo,
  telefono,
  fechaNacimiento,
  ocupacion,
}) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const history = useHistory();

  return (
    <>
      <nav className="navbarLog">
        <div className="navbarTitleLog">
          <img
            src={require("../assets/Logo.png")}
            className="logoLog"
            alt="logoBetterMe"
          />
          <div className="titleLog">
            <div className="B14">BetterMe</div>
            <div className="L14">MentalHealth</div>
          </div>
        </div>
        <div className="menu-iconLog" onClick={handleClick}>
          <IoIosMenu className="icons-menuLog" />
        </div>
        {click ? (
          <div className="profileMenu">
            <div className="profile-iconLog" onClick={handleClick}>
              <IoIosClose className="icons-menuLog" />
            </div>
            <img
              src={require("../assets/profile.png")}
              className="profileIlustration"
              alt="profileIlustration"
            />
            <div className="profileText profileName">
              <label className="Bold20">{nombre}</label>
              <label className="Regular13">{correo}</label>
            </div>
            <div className="profileText profilePhone">
              <BsFillTelephoneFill className="phoneIcon" />
              <label className="Regular15">{":     " + telefono}</label>
            </div>
            <div className="profileText profileDate">
              <label className="Regular13">Fecha de nacimiento:</label>
              <label className="Regular15">{fechaNacimiento}</label>
            </div>
            <div className="profileText profileOccupation">
              <label className="Regular13">Ocupacion:</label>
              <label className="Regular15">{ocupacion}</label>
            </div>
            <div
              className="profileText profileLogOut"
              onClick={()=>history.push({
                pathname: "/LogIn",
              })}
            >
              <label className="Regular13 cerrarSesionText">
                Cerrar Sesión
              </label>
              <IoIosLogOut className="logOutIcon" />
            </div>
          </div>
        ) : (
          ""
        )}
      </nav>
    </>
  );
};

export default NavbarLog;
