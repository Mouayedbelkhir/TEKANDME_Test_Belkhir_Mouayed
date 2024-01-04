import React from "react";
import img1 from "../assets/images/img_feature1.png";
import TextComponent from "./TextComponent";
import ButtonComponent from "./ButtonComponent";
import '../utils/styles/components_styles/FeatureCard.css';

function FeatureCard(props) {
    const { image = img1, title = "Nom de la réalisation", content = "Morbi tristique senectus et netus et malesuada fames ac turpis. Nisl rhoncus ma..." } = props

    return <div className="feature-card" style={{ overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "flex-start", flexShrink: "0", gap: "8px", width: "392px", height: "528px", zIndex: "3", backgroundColor: "#FCFCFC" }}>
        <div style={{ padding: "8px" }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
                <img className="feature-card-image" src={image} alt="" />
            </div>
            <div>
                <div style={{ padding: "16px", display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "flex-end", gap: "16px", alignSelf: "stretch" }}>
                    <TextComponent text={title} width="344px" color="var(--Noir, #171C24)" className="orbitron-feature-card" />
                    <TextComponent text={content} className="manrope-16 manrope-medium feature-card-content" color="var(--noir-noir-70, rgba(43, 43, 43, 0.70))" width="100%" height="48px" />
                    <ButtonComponent text="Plus d’infos" backgroundColor="" className="feature-btn" />
                </div>
            </div>
        </div>
    </div>
}

export default FeatureCard;