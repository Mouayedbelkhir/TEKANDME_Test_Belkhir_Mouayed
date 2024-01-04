import React from 'react';
import '../../../utils/styles/views_styles/home_style/sections_styles/SectionFive.css';
import CardComponent from '../../../components/CardComponent';
import icon1 from '../../../assets/icons/ic_house.svg';
import icon2 from '../../../assets/icons/ic_garage.svg';
import icon3 from '../../../assets/icons/ic_skyscraper.svg';
import image1 from '../../../assets/images/img_card2.png';
import image2 from '../../../assets/images/img_card3.png';
import image3 from '../../../assets/images/img_card4.png';
import TextComponent from '../../../components/TextComponent';
import ButtonComponent from '../../../components/ButtonComponent';
import iconLeft from '../../../assets/icons/ic_left.svg';
import iconRight from '../../../assets/icons/ic_right.svg';


function SectionFive() {

    return <div>
        <div style={{ display: "flex", justifyContent: "center", paddingTop: "104px", backgroundColor: "var(--Blanc-Blanc, #FCFCFC)" }}>
            <TextComponent text="Des Toits Qui Font la pluie et le beau temps" width="808px" className="orbitron-bold-lg text-center" />
        </div>
        <div className='cards-main' style={{ padding: "104px 108px 98px 108px", gap: "24px" }}>
            <div style={{ position: "absolute", left: "130px", zIndex: "3", paddingTop: "216px" }}>
                <ButtonComponent icon={iconLeft} backdropFilter="blur(5px)" className="" padding="0px 0px 0px 0px" gap="0px" height="40px" backgroundColor="var(--noir-noir-50, rgba(43, 43, 43, 0.50)" border="3px solid" borderColor="#fcfcfc" />
            </div>
            <CardComponent icon={icon1} image={image1} />
            <CardComponent icon={icon2} image={image2} title="zinguerie" />
            <CardComponent icon={icon3} image={image3} title="Façades" />
            <div style={{ position: "absolute", right: "130px", zIndex: "3", paddingTop: "216px" }}>
                <ButtonComponent icon={iconRight} backdropFilter="blur(5px)" className="" padding="0px 0px 0px 0px" gap="0px" height="40px" backgroundColor="var(--noir-noir-50, rgba(43, 43, 43, 0.50)" border="3px solid" borderColor="#fcfcfc" />
            </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", paddingBottom: "104px" }}>
            <ButtonComponent text="Voir Tous Nos Service" height="48px" backgroundColor="#2B2B2B" color="#FCFCFC" padding="12px 16px" />
        </div>
    </div>
}

export default SectionFive;