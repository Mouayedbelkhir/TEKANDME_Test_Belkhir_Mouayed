import React from "react";
import Partenaire from "../../../components/Partenaire";
import TextComponent from "../../../components/TextComponent";
import img1 from "../../../assets/logos/img_gazette.png";
import img2 from "../../../assets/logos/img_monaco-martin.png";
import img3 from "../../../assets/logos/img_monaco-tribune.png";
import ButtonComponent from "../../../components/ButtonComponent";
import iconLeft from "../../../assets/icons/ic_left.svg";
import iconRight from "../../../assets/icons/ic_right.svg";

function SectionEleven() {
    return (
        <>
            <div style={{ position: 'relative', backgroundColor: "#EDF0F3" }}>
                <div style={{ paddingTop: "265px", paddingLeft: "108px", paddingRight: "108px", paddingBottom: "152px" }}>
                    <div style={{ display: "flex", justifyContent: "center", paddingBottom: "104px" }}>
                        <div style={{ marginLeft: "300px" }}>
                            <TextComponent text="Ils parlent de nous" width="530px" className="orbitron-bold-lg text-center" />
                        </div>
                        <div style={{ display: "flex", marginLeft: "250px" }}>
                            <div style={{ zIndex: "3" }}>
                                <ButtonComponent icon={iconLeft} backdropFilter="blur(5px)" className="" padding="0px 0px 0px 0px" gap="0px" height="40px" backgroundColor="#2b2b2b" border="3px solid" borderColor="#fcfcfc" />
                            </div>
                            <div style={{ zIndex: "3", marginLeft: "12px" }}>
                                <ButtonComponent icon={iconRight} backdropFilter="blur(5px)" className="" padding="0px 0px 0px 0px" gap="0px" height="40px" backgroundColor="#2b2b2b" border="3px solid" borderColor="#fcfcfc" />
                            </div>
                        </div>

                    </div>

                    <div style={{ display: "flex", justifyContent: "center", gap: "24px" }}>
                        <Partenaire />
                        <Partenaire image={img1} />
                        <Partenaire image={img2} />
                        <Partenaire image={img3} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default SectionEleven;