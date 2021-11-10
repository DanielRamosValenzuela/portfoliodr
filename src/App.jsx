import React, { useState } from "react";
import Particles from "react-tsparticles";

import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { Intro } from "./components/intro/Intro";
import { Navbar } from "./components/navbar/Navbar";
import { Portfolio } from "./components/portfolio/Portfolio";
import { SideMenu } from "./components/sidemenu/SideMenu";
import { Skills } from "./components/skills/Skills";

import "./app.scss";
import { partcleConfigTwo } from "./config/particle-config";

export const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lenguage, setLenguage] = useState(false);

  const handleLengauge = () => {
    setLenguage(!lenguage);
  };

  return (
    <>
      <div className="app">
        <header>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <SideMenu
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            handleLengauge={handleLengauge}
            lenguage={lenguage}
          />
        </header>

        <section className="sections">
          <Intro lenguage={lenguage} />
          <Portfolio lenguage={lenguage} />
          <Skills lenguage={lenguage} />
          <About lenguage={lenguage} />
          <Contact lenguage={lenguage} />
        </section>
        <Particles
          options={partcleConfigTwo}
          width="0"
          height="0"
          style={{
            position: "fixed",
            zIndex: "-5",
            display: "inline",
          }}
        />
      </div>
    </>
  );
};
