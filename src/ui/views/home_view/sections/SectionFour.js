import React from "react";
import StatComponent from "../../../components/StatComponent";
import '../../../utils/styles/views_styles/home_style/sections_styles/SectionFour.css'
function SectionFour() {
  return (
    <div className="main-section-four"
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        display: "inline-flex",
        padding: "152px 108px 152px 108px"
      }}
    >
        <StatComponent topText="+30" bottomText="Ans d’activité"/>
        <StatComponent topText="+100" bottomText="Projets terminés"/>
        <StatComponent topText="32" bottomText="Experts pour vous accompagner"/>
    </div>
  );
}

export default SectionFour;
