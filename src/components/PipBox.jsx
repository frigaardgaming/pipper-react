import React from "react";

export default function PipBox({ pip }) {
  return (
    <div className="pips">
      <ul>
        <li>
          <strong>{pip.username}</strong>: {pip.content}
        </li>
      </ul>
    </div>
  );
}
