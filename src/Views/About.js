import React from "react";
import { Link } from "react-router-dom";
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
          Hi. My name is Mayank , I am Mca student at College of technology,
          Pantnagar and Currently Exploring Front End Technologies
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

        <a
          href="mailto:mayankbhatt07141@gmail.com"
          className="email-anchor-tag"
        >
          Let's chat {"->"} mayankbhatt07141@gmail.com
        </a>
      </div>
      <div className="left-container">
        <div className="social-media-links">
          <a href=" https://www.facebook.com/181mb">
            <span
              className="fab fa-facebook"
              style={{
                color: "white",
                fontSize: "23px",
              }}
            ></span>
          </a>
          <br />
          <a href="https://www.instagram.com/mayankbhatt07141/">
            <span
              className="fab fa-instagram"
              style={{
                color: "white",

                fontSize: "23px",
              }}
            ></span>
          </a>
          <br />
          <a href="https://www.linkedin.com/in/mayankbhatt07141/">
            <span
              className="fab fa-linkedin"
              style={{
                color: "white",

                fontSize: "23px",
              }}
            ></span>
          </a>
          <br />
          <a href="https://github.com/mayankbhatt07141">
            <span
              className="fab fa-github"
              style={{
                color: "white",
                fontSize: "23px",
              }}
            ></span>
          </a>
        </div>
      </div>
    </div>
  );
}
export default About;
