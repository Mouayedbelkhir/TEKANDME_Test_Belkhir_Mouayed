import React from "react";
import "../utils/styles/components_styles/FeedbackComponent.css";
import TextComponent from "./TextComponent";
import img1 from "../assets/images/img_user1.png";

function FeedbackComponent(props) {
    const { image = img1, name = "Clara dupont", content = "J'ai fait appel à l'Entreprise Monégasque de Couverture pour une réparation de toit et je suis ravi du résultat. Leur équipe est compétente, efficace, et l'humour qu'ils apportent à leur travail est un vrai plus. Je les recommande vivement !" } = props;

    return (
        <div
            style={{
                display: 'flex',
                width: '392px',
                backgroundColor: "var(--Blanc-Blanc, #FCFCFC)"
            }}
        >
            <div style={{
                display: 'flex',
                padding: '24px',
                gap: '16px',
                flexDirection: 'column',
                alignItems: 'flex-start',
            }}>
                <img src={image} alt={name} />
                <TextComponent text={name} width="344px" className="orbitron-extra-bold-sm-nc text-stretch" color="var(--Noir, #171C24)" />
                <TextComponent text={content} width="344px" className="manrope-medium manrope-16 text-stretch opacity" color="var(--Noir, #171C24)" />
            </div>

        </div>
    );
}

export default FeedbackComponent;
