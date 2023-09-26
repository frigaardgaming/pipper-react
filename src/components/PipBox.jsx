import React from "react";
import "../styles/pips.css";

export default function PipBox({ pip }) {
  return (
    <article className="pips">
      <label htmlFor={pip.content}>
        <strong>{pip.username}</strong>: {pip.content}
      </label>
    </article>
  );
}
