import React, { useState, useEffect } from "react";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(true);
    } else {
      setButton(false);
      setClick(false);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-title">
          <img
            src={require("../assets/Logo100.png")}
            className="logo"
            alt="logoBetterMe"
          />
        </div>
        <div className={click ? "nav-menu active" : "nav-menu"}>
          <ul className={click ? "nav-pages active" : "nav-pages"}>
            <li>
              <Link to="/" className="nav-links R14" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
          </ul>
          <ul className={click ? "nav-buttons active" : "nav-buttons"}>
            <li>
              <Link
                to="/logIn"
                className="nav-links log R14"
                onClick={closeMobileMenu}
              >
                Inicia Sesión
              </Link>
            </li>
            <li>
              <Link
                to="/Forms"
                className="nav-links log R14"
                onClick={closeMobileMenu}
              >
                Registrate
              </Link>
            </li>
          </ul>
        </div>
        {button ? (
          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <IoIosClose className="icons-menu" />
            ) : (
              <IoIosMenu className="icons-menu" />
            )}
          </div>
        ) : (
          ""
        )}
      </nav>
    </>
  );
};

export default Navbar;
