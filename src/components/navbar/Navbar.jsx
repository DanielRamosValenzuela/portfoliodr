import React from "react";
import {
  AccountCircle,
  AlternateEmail,
  GitHub,
  LinkedIn,
} from "@mui/icons-material";
import "./navbar.scss";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Portfolio DRV.
          </a>
          <div className="items">
            <AccountCircle className="icon" />
            <span>+56 9 54 202 618</span>
          </div>
          <div className="items">
            <AlternateEmail className="icon" />
            <span>daniel.andres.ramos.v@gmail.com</span>
          </div>
          <div className="items">
            <a href="https://www.linkedin.com/in/daniel-andres-ramos-valenzuela/">
              <LinkedIn className="icon" />
              LinkedIn
            </a>
          </div>
          <div className="items">
            <a href="https://github.com/DanielRamosValenzuela">
              <GitHub className="icon" />
              GitHub
            </a>
          </div>
        </div>
        <div className="right">
          <div
            className="hamburger-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
