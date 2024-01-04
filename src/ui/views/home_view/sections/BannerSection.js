import React from 'react';
import HorizontalBanner from '../../../components/HorizontalBanner';
import '../../../utils/styles/views_styles/home_style/sections_styles/SectionTwo.css'
function BannerSection(props) {
    const { overlay, top, height, image, bannerTitle, bannerBody, bannerButton, hasIcons } = props;

    return (
        <div className='main-section-two'>
            <HorizontalBanner overlay={overlay} top={top} height={height} image={image} bannerTitle={bannerTitle} bannerBody={bannerBody} hasIcons={hasIcons} bannerButton={bannerButton} />
        </div>
    );
};

export default BannerSection;