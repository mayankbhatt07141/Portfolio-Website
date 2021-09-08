import React from "react";

function Progressbar(props) {
  console.log(props.progress);
  const baseDivForProgressbar = {
    height: props.height,
    backgroundColor: "whitesmoke",
    borderRadius: 40,
    // margin: 50,
    width: "90%",
  };
  const progressbar = {
    height: "100%",
    width: `${props.progress}%`,
    backgroundColor: props.bgcolor,
    borderRadius: 40,
    textAlign: "right",
  };
  const progressText = { padding: "5px", color: "black", fontWeight: 900 };
  return (
    <div style={baseDivForProgressbar}>
      <div style={progressbar}>
        <p style={progressText}>{props.progress}%</p>
      </div>
    </div>
  );
}

export default Progressbar;
