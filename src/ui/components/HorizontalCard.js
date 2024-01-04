import React from 'react';
import img from '../assets/images/img_card1.png';
import '../utils/styles/components_styles/HorizontalCard.css';
import TextComponent from './TextComponent';
import ButtonComponent from './ButtonComponent';

function HorizontalCard(props) {
  const { paddingTop = "152px", title = "Notre Histoire en Quelques Tuiles", body = "Depuis 30 ans, EM Couverture s'est taillé une réputation impeccable dans le monde des toits à Monaco. Nous avons réinventé la couverture, tout en gardant nos pieds (et nos tuiles) sur terre. Découvrez notre parcours unique et notre engagement envers l'excellence.", image = img, buttonLabel = "en savoir plus", reverse = "false" } = props

  var left = <div><img src={image} width="100%" height="100%" alt='' /></div>

  const cardBody = body

  var right = <div className='horizontal-card-content'>
    <TextComponent text={title} width="596px" className="orbitron-bold-lg text-stretch" />
    <TextComponent text={cardBody} className="manrope-medium manrope-18 text-stretch" width="596px" color="rgba(43, 43, 43, 0.70)" />
    <ButtonComponent text={buttonLabel} height="48px" padding="12px 16px 12px 16px" backgroundColor="rgba(0, 0, 0, 0)" />
  </div>

  if (reverse === "true") {
    left = <div className='horizontal-card-content'>
      <TextComponent text={title} width="596px" className="orbitron-bold-lg text-stretch" />
      <TextComponent text={cardBody} className="manrope-medium manrope-18 text-stretch" width="596px" color="rgba(43, 43, 43, 0.70)" />
      <ButtonComponent text={buttonLabel} height="48px" padding="12px 16px 12px 16px" backgroundColor="rgba(0, 0, 0, 0)" />
    </div>
    right = <div><img src={image} width="100%" height="100%" alt='' /></div>
  }

  return <div className="horizontal-card" style={{ paddingTop: paddingTop }}>
    {left}
    {right}
  </div>
}

export default HorizontalCard;
