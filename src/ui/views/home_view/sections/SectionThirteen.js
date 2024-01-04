import React from "react";
import TextComponent from "../../../components/TextComponent";
import icon from "../../../assets/icons/ic_instagram_black.svg";
import img1 from "../../../assets/images/img_insta_card1.png";
import img2 from "../../../assets/images/img_insta_card2.png";
import img3 from "../../../assets/images/img_insta_card3.png";
import img4 from "../../../assets/images/img_insta_card4.png";
import ButtonComponent from "../../../components/ButtonComponent";
import iconLeft from "../../../assets/icons/ic_left.svg";
import iconRight from "../../../assets/icons/ic_right.svg";

function SectionThirteen() {

    return <div style={{ width: "100%", height: "100%", top: "-643px", background: "#EDF0F3", position: "relative" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "104px", padding: "144px 108px 200px 108px" }}>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
                <TextComponent text="Ce qu’il se passe sur insta" className="orbitron-bold-lg" width="705px" />
                <img style={{ marginTop: "12px" }} src={icon} width="32px" height="32px" alt="instagram icon" />
            </div>

            <div style={{ display: "flex", gap: "24px" }}>
                <div style={{ position: "absolute", left: "130px", zIndex: "3", paddingTop: "124px" }}>
                    <ButtonComponent icon={iconLeft} backdropFilter="blur(5px)" className="" padding="0px 0px 0px 0px" gap="0px" height="40px" backgroundColor="var(--noir-noir-50, rgba(43, 43, 43, 0.50)" border="3px solid" borderColor="#fcfcfc" />
                </div>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <div style={{ position: "absolute", right: "130px", zIndex: "3", paddingTop: "124px" }}>
                    <ButtonComponent icon={iconRight} backdropFilter="blur(5px)" className="" padding="0px 0px 0px 0px" gap="0px" height="40px" backgroundColor="var(--noir-noir-50, rgba(43, 43, 43, 0.50)" border="3px solid" borderColor="#fcfcfc" />
                </div>
            </div>

            <div>
                <ButtonComponent text="Rejoignez-nous sur instagram" backgroundColor="#EDF0F3" height="48px" />
            </div>
        </div>
    </div>
}

export default SectionThirteen;