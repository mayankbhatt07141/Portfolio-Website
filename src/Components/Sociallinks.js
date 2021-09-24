import React from "react";
import "./Sociallinks.css";
function Sociallinks() {
  return (
    <div className="social-media-links">
      <a href=" https://www.facebook.com/181mb">
        <span
          className="fab fa-facebook"
          style={{
            color: "Black",
            fontSize: "23px",
            marginLeft: "35px",
          }}
        ></span>
      </a>
      <br />
      <a href="https://www.instagram.com/mayankbhatt07141/">
        <span
          className="fab fa-instagram"
          style={{
            color: "Black",
            fontSize: "23px",
            marginLeft: "35px",
          }}
        ></span>
      </a>
      <br />
      <a href="https://www.linkedin.com/in/mayankbhatt07141/">
        <span
          className="fab fa-linkedin"
          style={{
            color: "Black",
            fontSize: "23px",
            marginLeft: "35px",
          }}
        ></span>
      </a>
      <br />
      <a href="https://github.com/mayankbhatt07141">
        <span
          className="fab fa-github"
          style={{
            color: "Black",
            fontSize: "23px",
            marginLeft: "35px",
          }}
        ></span>
      </a>
    </div>
  );
}

export default Sociallinks;
