import React from "react";
import video1 from "../../../assets/videos/home_video.mp4";
import TextComponent from "../../../components/TextComponent";
import '../../../utils/styles/views_styles/home_style/sections_styles/SectionOne.css';

function SectionOne(){

  const textContent = "Aenean sed adipiscing diam donec adipiscing. Aenean euismod elementum nisi quis eleifend quam. Lacus suspendisse faucibus interdum posuere lorem.";
  return (
    <>
      <div className="video-overlay">
        <video src={video1} width="100%" height="100%" autoPlay loop muted/>
        <div style={{ top: "0", zIndex: "2", width: "100%", height: "100%", background: "rgba(43, 43, 43, 0.75)", position: "absolute" }}>
        </div>
      </div>
      <div className="section-one-text" style={{ zIndex: "3" }}>
        <TextComponent text="30 ans d’activité à monaco" className="orbitron-bold-md" color="#F4C02F" hasDot="true"/>
        <TextComponent text="L'Art de la Couverture : Notre Monde en toiture" color="#FCFCFC" />
        <TextComponent text={textContent} className="manrope-medium manrope-18 text-stretch" color="rgba(252, 252, 252, 0.70)" />
      </div>
    </>
  );
};
export default SectionOne;
