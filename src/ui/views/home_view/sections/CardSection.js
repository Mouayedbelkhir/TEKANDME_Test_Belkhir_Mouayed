import React from 'react';
import HorizontalCard from '../../../components/HorizontalCard';
import '../../../utils/styles/views_styles/home_style/sections_styles/CardSection.css';

function CardSection(props) {
    const { title, body, image, buttonLabel, reverse, paddingTop } = props
    return <div className="main-card-section" style={{ position: "relative", background: "var(--Fond, #EDF0F3)" }}>
        <HorizontalCard title={title} body={body} image={image} buttonLabel={buttonLabel} reverse={reverse} paddingTop={paddingTop}/>
    </div>
}

export default CardSection;