import React from "react";
import { Link } from "react-router-dom";
import Email from "../Components/Email";
import Sociallinks from "../Components/Sociallinks";
import "./About.css";
function About() {
  return (
    <div className="about-container">
      <div className="path-name-container">
        <Link to="/" className="pathname">
          Home
        </Link>
        <p> / </p>
        <Link to="/about" className="pathname">
          About
        </Link>
      </div>

      <div className="about-me-container">
        <h4>About Me</h4>
        <p>
          Hi. My name is Mayank and this is my little corner on internet. I am
          Mca student at College of technology, Pantnagar.Currently Exploring
          Front End Technologies and I enjoy creating things that focus
          usefulness and elegance
        </p>

        <a
          href=" https://drive.google.com/uc?export=download&id=1E08a_GR4KyIGESswEBVPq-CG7-CRCiro"
          download
        >
          <span
            className="fas fa-download"
            style={{
              color: "white",
              fontSize: "20px",
            }}
          >
            &nbsp; download Resume
          </span>
        </a>
        <div className="social-links">
          <Sociallinks />
          <Email />
        </div>
      </div>
    </div>
  );
}
export default About;
