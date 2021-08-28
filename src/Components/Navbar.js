import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <div className="left-nav">
        <div className="links-container">
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
      </div>
      <div className="right-nav">
        <h1 className="logo">logo</h1>
      </div>
    </div>
  );
}

export default Navbar;
