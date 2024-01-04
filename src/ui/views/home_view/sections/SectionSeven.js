import React, { useState, useEffect } from "react";
import TextComponent from "../../../components/TextComponent";

function SectionSeven() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const threshold = 10000;

            setIsSticky(scrollPosition <= threshold);
        };
        
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            style={{
                position: isSticky ? "sticky" : "static",
                top: "0px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "var(--Fond, #EDF0F3)",
                paddingTop: "216px",
                paddingBottom: "352px",
            }}
        >
            <TextComponent text="Maîtrisez l'Art de la Couverture : Notre Savoir-faire en Action" width="1224px" className="orbitron-extra-bold" />
        </div>
    );
}

export default SectionSeven;
