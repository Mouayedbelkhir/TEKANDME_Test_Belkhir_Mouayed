import React from "react";
import TextComponent from "./TextComponent";

function FooterNavigation(props) {

    const { title, labels } = props

    return <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <TextComponent text={title} className='orbitron-extra-bold-sm-nc' width="auto" />
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {labels.map(label => <TextComponent text={label} className="manrope-medium manrope-16 opacity" color="#171C24" width="auto" />)}
        </div>
    </div>
}

export default FooterNavigation;