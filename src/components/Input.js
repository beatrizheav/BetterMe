import React, { useState } from "react";
import "./Input.css";
import { IoIosEyeOff, IoIosEye } from "react-icons/io";

export const Input = ({ label, type, handleChange }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const changePasswordVisible = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div id="inputContainer">
      <label className="R14">{label}</label>
      {type === "text" ? (
        <div className="R12">
          <input type={"text"} className="input" onChange={handleChange} />
        </div>
      ) : type === "email" ? (
        <div className="R12">
        <input type={"email"} className="input" onChange={handleChange} />
      </div>
      ) : type === "date" ? (
        <div className="R12">
        <input type={"date"} className="input" onChange={handleChange} />
      </div>
      ): type === "password" ? (
        <div className="input password R12">
          <input
            type={passwordVisible ? "text" : "password"}
            className={"inputBox"}
            onChange={handleChange}
          />
          {!passwordVisible ? (
            <IoIosEyeOff
              onClick={changePasswordVisible}
              className="passwordIcon"
            />
          ) : (
            <IoIosEye
              onClick={changePasswordVisible}
              className="passwordIcon"
            />
          )}
        </div>
      ) : type === "number" ? (
        <div className="R12">
          <input type={"number"} className="input" onChange={handleChange}/>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Input;
