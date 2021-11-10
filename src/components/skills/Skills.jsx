import React from "react";
import "./skills.scss";
import "animate.css";

export const Skills = ({ lenguage }) => {
  const skillList = [
    {
      id: 1,
      img: "assets/HTML.png",
      title: "HTML",
    },
    {
      id: 2,
      img: "assets/CSS.png",
      title: "CSS",
    },
    {
      id: 3,
      img: "assets/Figma.png",
      title: "Figma",
    },
    {
      id: 4,
      img: "assets/SASS.png",
      title: "SASS",
    },
    {
      id: 5,
      img: "assets/Bootstrap.png",
      title: "Bootstrap 5",
    },
    {
      id: 6,
      img: "assets/JS.png",
      title: "JavaScript",
    },
    {
      id: 7,
      img: "assets/jquery.png",
      title: "jQuery",
    },
    {
      id: 8,
      img: "assets/react.png",
      title: "React",
    },
    {
      id: 9,
      img: "assets/node.png",
      title: "NodeJS",
    },
    {
      id: 10,
      img: "assets/sql.png",
      title: "SQL Server",
    },
    {
      id: 11,
      img: "assets/git.png",
      title: "Git",
    },
    {
      id: 12,
      img: "assets/json.png",
      title: "JSON",
    },
    {
      id: 13,
      img: "assets/redux.png",
      title: "Redux",
    },
  ];
  return (
    <div className="skills" id="skills">
      <div className="skillsTitle">
        {lenguage === true ? (
          <h1>
            <img src="assets/tools.png" alt="herramientas" /> Skills
          </h1>
        ) : (
          <h1>
            <img src="assets/tools.png" alt="herramientas" /> Herramientas
          </h1>
        )}
      </div>
      <div className="skillsWrap">
        {skillList.map((item, i) => {
          return (
            <div className="skillsCard" key={i}>
              <div className="skillsImg">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="skillsTitle">
                <h3>{item.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
