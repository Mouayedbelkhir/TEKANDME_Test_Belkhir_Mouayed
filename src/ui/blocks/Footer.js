import React from "react";
import logo from '../assets/logos/logo_footer.png';
import TextComponent from '../components/TextComponent';
import adresse_logo from '../assets/icons/ic_adresse.svg';
import ButtonComponent from '../components/ButtonComponent';
import icon from '../assets/icons/ic_phone.svg';
import FooterNavigation from "../components/FooterNavigation";
import icon_facebook from '../assets/icons/ic_facebook.svg';
import icon_instagram from '../assets/icons/ic_instagram.svg';
import icon_linkdin from '../assets/icons/ic_linkdin.svg';
import icon_youtube from '../assets/icons/ic_youtube_footer.svg';
import caster from '../assets/images/img_caster_footer.png';

function Footer() {

  const labelNumber = <><span style={{ color: "var(--noir-noir-50, rgba(43, 43, 43, 0.50))" }}>+377</span> 93 50 20 22</>
  const navigationLabels = ["Accueil", "A propos", "Bureau d’études", "Travaux", "Actualités"];
  const serviceLables = ["Charpente", "Couverture", "Zinguerie", "Façades"];

  return <div style={{ top: "-643px", display: "flex", backgroundColor: "#FCFCFC", position: "relative", width: "100%", height: "100%" }}>
    <div style={{ display: "flex", flexDirection: "column", paddingTop: "80px", paddingLeft: "107px" }}>
      <img style={{ marginBottom: "40px" }} src={logo} width="104px" height="54px" alt="" />
      <div style={{ marginBottom: "32px" }}>
        <TextComponent text="prenez rendez-vous dès maintenant" width="703px" />
      </div>
      <div style={{ display: "flex", gap: "12px", marginBottom: '32px' }}>
        <img src={adresse_logo} width="24px" height="24px" alt='Logo Adresse' />
        <TextComponent text='1 rue Bel Respiro - 98000 Monaco' className='manrope-medium manrope-16' color='var(--noir-noir-70, rgba(43, 43, 43, 0.70))' />
      </div>
      <div style={{ display: 'flex', gap: '16px', marginBottom: '104px' }}>
        <ButtonComponent text={labelNumber} backgroundColor="#FCFCFC" icon={icon} height='48px' />
        <ButtonComponent text="Être contacté" height='48px' />
      </div>

      <div style={{ marginBottom: "48px" }}>
        <TextComponent text='© 2023, tous droits réservés. Développé par Tendances.Group' className='manrope-medium manrope-16' color="rgba(43, 43, 43, 0.70)" />
      </div>
    </div>


    <div style={{ marginLeft: "129px", marginTop: "80px", height: "300px" }}>
      <FooterNavigation title="Navigation" labels={navigationLabels} />
    </div>

    <div style={{ marginLeft: "84px", marginTop: "80px", height: "300px" }}>
      <FooterNavigation title="Services" labels={serviceLables} />
    </div>

    <div style={{ display: "flex", gap: "24px", marginTop: "550px", marginRight: "70px" }} >
      <img src={icon_facebook} width="24px" height="24px" alt="facebook" />
      <img src={icon_instagram} width="24px" height="24px" alt="instagram" />
      <img src={icon_linkdin} width="24px" height="24px" alt="linkdin" />
      <img src={icon_youtube} width="24px" height="24px" alt="youtube" />
    </div>

    <img style={{ position: "absolute", top: "410px", left: "675px" }} src={caster} alt='caster' />
  </div>
}

export default Footer;
