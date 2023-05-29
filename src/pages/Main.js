import React from "react";
import { useLocation } from "react-router-dom";
import "./Main.css";

import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Input from '../components/Input'

const Main = () => {
  const location = useLocation();
  console.log(location.state.treatment, 'PATH ROUTES2')
  console.log('HOLAAA')
  return (
    <>
    <label>{location.state.treatment}</label>
    </>
  )
}

export default Main