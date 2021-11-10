import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import "./intro.scss";

export const Intro = ({ lenguage }) => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Full-stack", "Front-end", "Back-end"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/monito.jpg" alt="Danie lRamos" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          {lenguage === true ? (
            <h2>Welcome to my portfolio, I'am</h2>
          ) : (
            <h2>Bienvenido a mi portfolio, soy</h2>
          )}

          <h1>Daniel Ramos</h1>
          <h3>
            <span ref={textRef}></span>Developer Junior
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="Flecha Abajo" />
        </a>
      </div>
    </div>
  );
};
