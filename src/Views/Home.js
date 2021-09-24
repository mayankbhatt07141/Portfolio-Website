import React, { useState } from "react";
import Email from "../Components/Email";
import Sociallinks from "../Components/Sociallinks";
import "./Home.css";
function Home() {
  const [openprojects, setOpenprojects] = useState(false);
  return (
    <div className="home-container">
      <div className="home-page">
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
        <div className="project-section">
          <p className="project-open" onClick={() => setOpenprojects(true)}>
            See Projects
          </p>
          {openprojects ? (
            <div className="details-project">
              <h4>Shopping cart</h4>
              <a
                className="links1"
                href="https://shopping-cart-7f3emnx2l-mayankbhatt07141.vercel.app/"
                target="_blank"
              >
                Vercel link
              </a>
              <a
                className="links1"
                href="https://github.com/mayankbhatt07141/Shopping-cart"
                target="_blank"
              >
                Github Link
              </a>
            </div>
          ) : null}
        </div>
      </div>
      <Sociallinks />
      <br />
      <Email />
    </div>
  );
}

export default Home;
