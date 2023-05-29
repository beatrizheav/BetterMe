import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

export const Button = ({ text, link, type, handlePress }) => {
  return (
    link === undefined ? (
      <button
        className={type === "short" ? "btn btn-short" : "btn btn-large"}
        onClick = {handlePress}
      >
        {text}
      </button>
    ) :
      <Link to={link} >
        <button
          className={type === "short" ? "btn btn-short" : "btn btn-large"}
        >
          {text}
        </button>
      </Link>
  );
};

export default Button;
