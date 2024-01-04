import React from "react";
import img1 from "../assets/images/img_card2.png";
import icon1 from "../assets/icons/ic_house.svg";
import "../utils/styles/components_styles/CardComponent.css";
import TextComponent from "./TextComponent";

function CardComponent(props) {
  const {
    image = img1,
    title = "Charpente",
    content = "Morbi tristique senectus et netus et malesuada fames ac turpis. Nisl rhoncus mattis rhoncus urna neque viverra. Ac orci p...",
    icon = icon1,
  } = props;

  return (
    <div
      className="main-card"
      style={{
        position: "relative",
        width: "392px",
        height: "472px",
        overflow: "hidden",
      }}
    >
      <img
        className="card-image"
        style={{ objectFit: "cover" }}
        width="100%"
        height="100%"
        src={image}
        alt=""
      />
      <div className="card-overlay"></div>
      <div
        className="card-icon-div"
        style={{
          top: "28px",
          left: "28px",
          display: "flex",
          width: "40px",
          height: "40px",
          padding: "4px",
          justifyContent: "center",
          alignItems: "center",
          flexShrink: "0",
          zIndex: "3",
          position: "absolute",
        }}
      >
        <img
          className="card-icon"
          src={icon}
          width="32px"
          height="32px"
          alt=""
        />
      </div>
      <div
        className="card-text"
        style={{ top: "320px", position: "absolute", zIndex: "3" }}
      >
        <div style={{ paddingLeft: "32px" }}>
          <TextComponent
            text={title}
            width="auto"
            color="#FCFCFC"
            className="orbitron-bold-md"
          />
          <div style={{ paddingBottom: "32px", paddingRight: "32px" }}>
            <TextComponent
              text={content}
              width="auto"
              color="var(--blanc-blanc-70, rgba(252, 252, 252, 0.70))"
              className="manrope-16 manrope-medium text-card card-content"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
