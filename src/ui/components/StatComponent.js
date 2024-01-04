import React from "react";
import TextComponent from "./TextComponent";
function StatComponent(props) {
  const { topText, bottomText } = props;

  return (
      <div
        style={{
          flex: "1 1 0",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 24,
          display: "inline-flex",
        }}
      >
        <TextComponent text={topText} width="auto" className="orbitron-stats"/>
        <TextComponent text={bottomText} width="auto" className="manrope-medium manrope-18 text-center text-stretch" style={{ opacity: "0.7" }}/>
      </div>
  );
}

export default StatComponent;
