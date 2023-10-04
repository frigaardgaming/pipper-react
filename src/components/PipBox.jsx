import React from "react";
import "../styles/PipBox.css";

export default function PipBox({ pip }) {
  return (
    <div className="pips">
      <ul>
        <li>
          <img src={"https://api.multiavatar.com/" + pip.username + ".png"} alt="" className="icon" />
          <strong>{pip.username}</strong>
          <p>{pip.content}</p>
        </li>
      </ul>
    </div>
  );
}
