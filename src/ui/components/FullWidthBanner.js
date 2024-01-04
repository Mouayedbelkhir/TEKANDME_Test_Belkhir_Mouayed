import React from "react";
import img1 from "../assets/images/img_full_width_banner.png";
import icon from "../assets/icons/ic_stars.png";
import TextComponent from "./TextComponent";
import ButtonComponent from "./ButtonComponent";
import FeedbackComponent from "./FeedbackComponent";
import img2 from '../assets/images/img_user2.png'
import img3 from '../assets/images/img_user3.png'
function FullWidthBanner() {
    return (
        <div style={{ position: "relative", width: "100%", height: "728px" }}>
            <img src={img1} style={{ objectFit: "cover", width: "100%", height: "728px" }} alt="" />
            <div style={{
                position: "absolute",
                zIndex: "2",
                background: "linear-gradient(104deg, #2B2B2B 19.79%, rgba(43, 43, 43, 0.00) 108.61%)",
                width: "100%",
                height: "100%",
                top: "0",
                left: "0",
                flexShrink: "0"
            }}>
            </div>
            <div style={{ display: "flex", flexDirection: "column", top: "170px", left: "108px", paddingBottom: "170px", zIndex: "4", position: "absolute" }}>
                <div>
                    <img src={icon} alt="" />
                </div>
                <div style={{ paddingTop: "21px" }}>
                    <TextComponent text="Ce que Pensent nos clients" width="600px" className="orbitron-fullwidth-banner" color="#fcfcfc" />
                </div>
                <div style={{ paddingTop: "48px" }}>
                    <ButtonComponent text="Prenons contact"  />
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", position: "absolute", zIndex: "4", right: "108px", top: "-108px" }}>
                <FeedbackComponent/>
                <FeedbackComponent image={img2} name={"françois dupuis"} content={"C'est rare de trouver une entreprise qui peut allier compétence technique et convivialité de cette manière. Je les recommande vivement à tous ceux qui ont besoin de services de couverture de premier ordre."} />
                <FeedbackComponent image={img3} name={"Aurélien lemarchand"} content={"C'est un vrai plaisir de travailler avec eux. Récemment, j'ai eu besoin d'une réparation de toit en urgence, et ils ont réagi rapidement et avec professionnalisme. Le résultat était impeccable, comme toujours. Je recommande cette entreprise à tous ceux qui recherchent des experts de la couverture avec une touche d'originalité."}/>
            </div>
        </div>
    );
}

export default FullWidthBanner;
