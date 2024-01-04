import React from "react";

function TextComponent(props) {
  const { text, width = "600px", color = "#2B2B2B", hasDot = false, className = "orbitron-bold-lg" } = props;

  return (
    <li className={`${hasDot ? className : ""}`} style={{ listStyleType: hasDot ? "square" : "none", width: width, color: color}}>
      {hasDot ? text : <h3 className={`${hasDot ? '' : className}`}>{text}</h3>}
    </li>
  );
}

export default TextComponent;
