import React from "react";
import TextComponent from "../../../components/TextComponent";
import ButtonComponent from "../../../components/ButtonComponent";
import video from "../../../assets/videos/home_video.mp4";
import icon from "../../../assets/icons/ic_play_button.svg";
import icon2 from "../../../assets/icons/ic_youtube.svg";
import tiltedCaster from "../../../assets/images/img_tilted_caster.png";

function SectionSix() {

    const flagEmoji = "\u{1F1F2}\u{1F1E8}";

    return <div style={{ backgroundColor: "var(--Fond, #EDF0F3)", alignItems: "center", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "center", paddingTop: "152px" }}>
            <TextComponent text="Une construction unique au monde" width="808px" className="orbitron-bold-lg text-center" />
        </div>
        <div style={{ display: "flex", justifyContent: "center", paddingTop: "36px", paddingBottom: "100px", gap: "24px" }}>
            <TextComponent text={<>Découvrez la villa Carmelha à Monaco  <span style={{ fontSize: "16px" }}>{flagEmoji}</span></>} width="338px" className="manrope-medium manrope-18" color="var(--noir-noir-70, rgba(43, 43, 43, 0.70))" />
            <ButtonComponent text="Voir Le Projet" backgroundColor="#2B2B2B" color="#FCFCFC" padding="8px 12px" />
        </div>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "481px", width: "856px", position: "relative" }}>
            <video style={{ position: "static", zIndex: "2" }} src={video} width="100%" height="100%" autoPlay loop muted />
            <div style={{ position: "absolute", backgroundColor: "var(--noir-noir-50, rgba(43, 43, 43, 0.50))", top: 0, left: 0, zIndex: "3", width: "100%", height: "100%" }}></div>
            <div style={{ zIndex: "4", position: "absolute" }}>
                <img src={icon} width="64px" height="64px" alt="" />
            </div>
            <div style={{ zIndex: "1", position: "absolute", right: "-190px" }}>
                <img src={tiltedCaster} alt=""/>
            </div>
        </div>

        <div style={{ paddingTop: "104px" }}>
            <ButtonComponent text="Voir notre chaine youtube" icon={icon2} className="orbitron-extra-bold-sm" backgroundColor="var(--Fond, #EDF0F3)" />
        </div>
    </div>
}

export default SectionSix;