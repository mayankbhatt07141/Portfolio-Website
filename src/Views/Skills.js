import React from "react";
import "./Skills.css";
import { Link } from "react-router-dom";
import Progressbar from "../Components/Progressbar";
function Skills() {
  return (
    <div className="page">
      <div className="skills-container">
        <div className="path-container">
          <Link to="/" className="pathname">
            Home
          </Link>
          <p> / </p>
          <Link to="/skills" className="pathname">
            Skills
          </Link>
          <span>/Personal skills</span>
        </div>
        <div className="mobile-head">
          <p className="heading">My skills</p>
        </div>
        <div className="progress">
          <Progressbar bgcolor="black" progress={80} height={25} name="C" />
          <Progressbar bgcolor="black" progress={70} height={25} name="java" />
          <Progressbar
            bgcolor="black"
            progress={40}
            height={25}
            name="javascript"
          />
          <Progressbar bgcolor="black" progress={40} height={25} name="React" />
          <Progressbar
            bgcolor="black"
            progress={50}
            height={25}
            name="Typescript"
          />
          <Progressbar bgcolor="black" progress={20} height={25} name="Html" />
          <Progressbar bgcolor="black" progress={25} height={25} name="Css" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
