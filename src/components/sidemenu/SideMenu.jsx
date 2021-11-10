import React from "react";
import "./sideMenu.scss";
import { Switch } from "@mui/material";

export const SideMenu = ({
  menuOpen,
  setMenuOpen,
  handleLengauge,
  lenguage,
}) => {
  const switchLengauge = (lenguage) => {
    let home = "";
    let tools = "";
    let about = "";
    let contact = "";

    switch (lenguage) {
      case false:
        home = "Inicio";
        tools = "Herramientas";
        about = "Sobre mí";
        contact = "Contáctame";
        break;
      case true:
        home = "Home";
        tools = "Skills";
        about = "About me";
        contact = "Contact me";
        break;

      default:
        break;
    }
    let array = [home, tools, about, contact];

    return array;
  };

  return (
    <div className={"sidemenu " + (menuOpen && "active")}>
      <ul>
        <li>
          <div className="lenguage">
            <img src="assets/spanich.png" alt="english" />
            <Switch onClick={handleLengauge} />
            <img src="assets/english.png" alt="english" />
          </div>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">
            <img src="assets/home.png" alt="inicio" />{" "}
            {switchLengauge(lenguage)[0]}
          </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">
            <img src="assets/portfolio.png" alt="portfolio" /> Portfolio
          </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#skills">
            <img src="assets/tools.png" alt="herramientas" />{" "}
            {switchLengauge(lenguage)[1]}
          </a>
        </li>
        {/* <li onClick={() => setMenuOpen(false)}>
          <a href="#works">Trabajos</a>
        </li> */}
        <li onClick={() => setMenuOpen(false)}>
          <a href="#about">
            <img src="assets/about.png" alt="aboutme" />{" "}
            {switchLengauge(lenguage)[2]}
          </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">
            <img src="assets/contact.png" alt="contacto" />{" "}
            {switchLengauge(lenguage)[3]}
          </a>
        </li>
      </ul>
    </div>
  );
};
