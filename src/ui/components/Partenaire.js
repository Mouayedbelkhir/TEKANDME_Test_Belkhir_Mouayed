import React from "react";
import img from '../assets/logos/logo_ab.png'
function Partenaire(props) {
    const { image = img } = props;
    return (
        <div style={{ backgroundColor: '#FCFCFC', width: '288px', height: '144px', position: 'relative', display: "flex", justifyContent: "center" }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img src={image} alt='' />
            </div>
        </div>
    )
}
export default Partenaire;