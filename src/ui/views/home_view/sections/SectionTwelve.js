import React from "react";
import TextComponent from "../../../components/TextComponent";
import img1 from "../../../assets/images/img_builder.png";
import FaqClosed from "../../../components/FaqClosed";
import FaqOpen from "../../../components/FaqOpen";

function SectionTwelve() {
    return (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                backgroundColor: "#EDF0F3",
                paddingTop: "200px",
                paddingLeft: "108px",
                paddingRight: "108px",
            }}
        >
            <div style={{ flex: "1", position: "sticky", top: "-100px", height: "100%" }}>
                <img src={img1} alt="" style={{ objectFit: "cover", position: "sticky" }} />
            </div>

            <div style={{ flex: "1", display: "inline-flex", flexDirection: "column", alignItems: "flex-start", gap: "144px" }}>
                <TextComponent text="Vos Interrogations Sous le Toit de l'Humour" width="600px" className="orbitron-bold-lg" />
                <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "flex-start", gap: "56px" }} >
                    <FaqOpen content="Peut-on utiliser des tuiles de couverture pour jouer au bowling sur le toit ?" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque dignissim enim sit amet venenatis urna cursus eget nunc. " />
                    <FaqClosed content="Puis-je inviter mes amis à faire du camping sur mon toit ?" />
                    <FaqClosed content="Pouvez-vous me dire la meilleure blague de couvreur que vous connaissiez ?" />
                    <FaqClosed content="Les chats et les chiens ont-ils des cours de danse sur les toits la nuit ?" />
                    <div style={{ height: "1100px", width: "100%" }}></div>
                </div>
            </div>
            <div style={{ width: "90%", height: "504px", position: "absolute", background: "linear-gradient(0deg, #EDF0F3 0%, rgba(237, 240, 243, 0.00) 100%)", zIndex: "4", top: "1500px" }}></div>
        </div>
    );
}

export default SectionTwelve;
