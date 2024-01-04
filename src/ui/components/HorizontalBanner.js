import React from "react";
import "../utils/styles/components_styles/HorizontalBanner.css";
import fr_icon from "../assets/icons/ic_france.svg";
import mn_icon from "../assets/icons/ic_monaco.svg";
import img from "../assets/images/img_background_card.png";
import TextComponent from "./TextComponent";
import animal from "../assets/images/img_caster_standing.svg";
import ButtonComponent from "./ButtonComponent";
function HorizontalBanner(props) {
  const { height = "600px", image = img, bannerTitle = <span>
    Numéro 1 à <span style={{ color: "#F4C02F" }}>monaco</span> et en région 
    <span style={{ color: "#F4C02F" }}> PACA</span>
  </span>,
    bannerBody = "Notre engagement envers l'excellence, la précision et la qualité nous a hissés au sommet de l'industrie de la couverture à Monaco. Nous sommes fiers de notre statut de numéro 1, acquis grâce à un travail acharné, un savoir-faire inégalé et un sens de l'innovation constant. Lorsque vous choisissez notre entreprise, vous choisissez une tradition de qualité et une réputation qui ont résisté à l'épreuve du temps.",
    hasIcons = "true",
    bannerButton = "Prenons contact",
    top = "68px",
    overlay = "linear-gradient(82deg, #2B2B2B 55.06%, rgba(43, 43, 43, 0.00) 208.47%)",
  } = props;


  return (
    <div className="main-horizontal-banner" style={{ height: "auto" }}>
      <div
        style={{ zIndex: "2", height, background: overlay }}
        className="banner-img-overlay "
      ></div>
      <img
        style={{
          zIndex: "1",
          position: "relative",
          right: "-108px",
          top: "0",
        }}
        src={image}
        alt=""
      />
      <div className="horizontal-banner-content" style={{ top: top }}>
        {hasIcons === "true" && (<div className="horizontal-card-content-icons"><img src={mn_icon} alt="" />
          <img src={fr_icon} style={{ marginLeft: "16px" }} alt="" /></div>)}

        <TextComponent text={bannerTitle} color="#FCFCFC" width="624px" />
        <TextComponent
          text={bannerBody}
          className="manrope-medium manrope-18"
          color="var(--blanc-blanc-70, rgba(252, 252, 252, 0.70))"
          width="624px"
        />
        <ButtonComponent text={bannerButton} />
      </div>
      {hasIcons === "true" && <div
        style={{
          position: "absolute",
          zIndex: "4",
          right: 0,
          paddingRight: "54px",
          paddingTop: "174px",
        }}
      >
        <img src={animal} alt="" />
      </div>}
    </div>
  );
}

export default HorizontalBanner;
