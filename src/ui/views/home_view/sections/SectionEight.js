import React from "react";
import FeatureCard from "../../../components/FeatureCard";
import img2 from "../../../assets/images/img_feature2.png";
import img3 from "../../../assets/images/img_feature3.png";

function SectionEight() {
    return <div style={{ height: "2710px", paddingLeft: "108px", paddingRight: "212px", backgroundColor: "var(--Fond, #EDF0F3)" }}>
        <div style={{ position: "absolute", paddingBottom: "200px", zIndex: "4"}}>
            <FeatureCard />
        </div>
        <div style={{ position: "absolute", paddingLeft: "55%", paddingTop: "776px" }}>
            <FeatureCard image={img2} title="roca team monaco"/>
        </div>
        <div style={{ position: "absolute", paddingTop: "1552px", paddingLeft: "25%" }}>
            <FeatureCard image={img3} title="Carmelha"/>
        </div>
        <div style={{ position: "relative", height: "631px", width: "110%", top: "2080px", background: "linear-gradient(0deg, #EDF0F3 0%, rgba(237, 240, 243, 0.00) 100%)", zIndex: "3" }}>
        </div>
    </div>
}

export default SectionEight;