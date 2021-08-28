import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import linksbutton from "../Assets/hamburger.png";
function Navbar() {
  const [showlinks, setShowlinks] = useState(false);
  return (
    <div className="navbar">
      //{" "}
      <div className="left-nav">
        <div className="links-container" id={showlinks ? "open-links" : ""}>
          <Link to="/" className="links">
            Home
          </Link>
          <Link to="/skills" className="links">
            Skills
          </Link>
          <Link to="/about" className="links">
            About
          </Link>
          <Link to="/feedback" className="links">
            Feedback
          </Link>
        </div>
        <button
          className="links-button"
          onClick={() => {
            setShowlinks(!showlinks);
          }}
        >
          <img src={linksbutton} />
        </button>
      </div>
      <div className="right-nav">
        <h1 className="logo">logo</h1>
      </div>
    </div>
  );
}

export default Navbar;
