import React from "react";
import "./Progressbar.css";
function Progressbar(props) {
  // console.log(props.progress);
  const baseDivForProgressbar = {
    height: props.height,
    backgroundColor: "rgb(211, 211, 211)",
    borderRadius: 40,
    width: "90%",
  };
  const progressbar = {
    height: "100%",
    width: `${props.progress}%`,
    backgroundColor: props.bgcolor,
    borderRadius: 40,
    textAlign: "right",
  };
  const progressText = {
    padding: "5px",
    margin: 5,
    color: "rgb(211, 211, 211)",
    fontWeight: 900,
  };
  return (
    <div className="progressbar-container">
      <span className="heading-progress">{props.name}</span>
      <div style={baseDivForProgressbar}>
        <div style={progressbar}>
          <p style={progressText}>{props.progress}%</p>
        </div>
      </div>
    </div>
  );
}

export default Progressbar;
