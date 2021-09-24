import React from "react";
import "./Email.css";
function Email() {
  return (
    <div className="email-container">
      <a href="mailto:mayankbhatt07141@gmail.com" className="email-anchor-tag">
        Let's chat {"->"} mayankbhatt07141@gmail.com
      </a>
    </div>
  );
}

export default Email;
