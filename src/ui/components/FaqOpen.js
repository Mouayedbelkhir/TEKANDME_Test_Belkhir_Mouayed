import React from "react";
import FaqClosed from "./FaqClosed";
import TextComponent from "./TextComponent";

function FaqOpen(props) {
  const { content, body } = props;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "24px",
        borderBottom: "1px solid var(--noir-noir-12, rgba(43, 43, 43, 0.12))",
        paddingBottom: "56px",
      }}
    >
      <FaqClosed content={content} open="true" />
      <TextComponent text={body} className="manrope-medium manrope-18" />
    </div>
  );
}

export default FaqOpen;
