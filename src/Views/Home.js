import React from "react";
import "./Home.css";
import homephoto from "../Assets/homephoto.jpg";
function Home() {
  return (
    <div className="home-container">
      <div className="heading-and-photo">
        <div className="home-heading">
          <h1>
            Hi I’m Mayank Bhatt, Mca Student at College of technology Pantnagar
            and aspiring software developer .
          </h1>

          <p className="home-subheading">
            I am currently exploring Frontend technologies and learning
            Relational Database Management System
          </p>
        </div>
        <div className="photo">
          <img src={homephoto} className="home-photo" />
        </div>
      </div>
      <button className="viewmyskills-btn">View my Skillsets</button>
      {
        // css is in about.css
      }
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
      <a href="mailto:mayankbhatt07141@gmail.com" className="email-anchor-tag">
        Let's chat {"->"} mayankbhatt07141@gmail.com
      </a>
    </div>
  );
}

export default Home;
