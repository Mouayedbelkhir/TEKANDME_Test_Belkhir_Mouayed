import React from "react";
import TextComponent from "./TextComponent";
import minusIcon from "../assets/icons/ic_minus.svg";
import plusIcon from "../assets/icons/ic_plus.svg";

function FaqClosed(props) {
    const { content, open = "false" } = props;

    let icon = plusIcon
    let className = "orbitron-faq-closed opacity";
    let paddingBottom = "56px";
    let borderBottom = "1px solid var(--noir-noir-12, rgba(43, 43, 43, 0.12))";

    if (open === "true") {
        icon = minusIcon
        className = "orbitron-faq-open";
        paddingBottom = "";
        borderBottom = "";
    }

    return <div style={{ display: "flex", alignItems: "flex-start", gap: "24px", width: "600px", paddingBottom: paddingBottom, borderBottom: borderBottom }}>
        <TextComponent text={content} className={className} width="536px" />
        <img src={icon} width="40px" height="40px" alt="" />
    </div>
}

export default FaqClosed;