import React from "react";
import "./about.scss";

export const About = ({ lenguage }) => {
  const switchLengauge = () => {
    let aboutMe = "";
    if (lenguage === true) {
      aboutMe =
        "In 2012, at the age of 18, I entered the Air Force, motivated by military technology. I graduated after 4 years as an Engineer Officer in Telecommunications and IT. I chose this specialty because of my interest in technology. Then I entered the Polytechnic Aeronautical Academy to study electronic engineering, there were some courses of computer science, which caught my attention. It was there that I fell in love with this profession, creating my first applications in C# taking first place in Technology Fairs. In 2019 I graduated as an Electronic Engineer to later work two years at the institution. In 2021 I retired from the Air Force. I started studying and programming in JavaScript, React, NodeJS and SQL Server to create Full Stack applications. I hope to have the opportunity to work as a Developer and continue learning about new technologies.";
    } else {
      aboutMe =
        "En el año 2012, con 18 años, entré a la Fuerza Aérea, motivado por la tecnología militar. Egresé después de 4 Años como Oficial Ingeniero en Telecomunicaciones e informática. Elegí esta especialidad por mi interés en la tecnología. Seguidamente entré a la Academia Politécnica Aeronáutica para estudiar Ingeniería electrónica, y dentro de la carrera había algunos ramos de informática, de los cuales me llamó la atención el mundo de la programación. Fue ahí donde me enamoré de este rubro, creando mis primeras aplicaciones en C# para Ferias Tecnológicas dentro de la misma institución, sacando el primer lugar en algunas. En el 2019 me licencié como Ingeniero electrónico para después trabajar dos años en la institución. En el 2021 me retiré de la Fuerza Aérea. Empecé a estudiar y programar en JavaScript, React , NodeJS y SQL Server para crear aplicaciones Full Stack. Espero tener la oportunidad para trabajar como Desarrollador y continuar aprendiendo de nuevas tecnologías.";
    }

    return aboutMe;
  };
  return (
    <div className="about" id="about">
      <div className="title">
        {lenguage === true ? (
          <h1>
            <img src="assets/about.png" alt="herramientas" /> About me
          </h1>
        ) : (
          <h1>
            <img src="assets/about.png" alt="herramientas" /> Sobre mí
          </h1>
        )}
      </div>
      <div className="aboutContainer">
        <div className="gift">
          <img src="assets/coding.gif" alt="coding" />
        </div>
        <div className="description">
          <p>{switchLengauge()}</p>
        </div>
      </div>
    </div>
  );
};
