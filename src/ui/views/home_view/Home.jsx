import React from "react";
import SectionOne from "./sections/SectionOne";
import CardSection from "./sections/CardSection";
import SectionFour from "./sections/SectionFour";
import SectionFive from "./sections/SectionFive";
import SectionSix from "./sections/SectionSix";
import SectionSeven from "./sections/SectionSeven";
import SectionEight from "./sections/SectionEight";
import img1 from "../../assets/images/img_card5.png";
import img2 from "../../assets/images/img_card6.png";
import SectionTen from "./sections/SectionTen";
import SectionEleven from "./sections/SectionEleven";
import BannerSection from "./sections/BannerSection";
import img3 from "../../assets/images/img_background_card2.png";
import SectionTwelve from "./sections/SectionTwelve";
import SectionThirteen from "./sections/SectionThirteen";
function Home() {
  return (
    <>
      <SectionOne />
      <CardSection />
      <BannerSection />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <CardSection paddingTop="0px" title="Un bureau d’études innovant" body="Derrière chaque toit exceptionnel se cache une équipe de cerveaux brillants. Notre bureau d'études est l'endroit où l'innovation et la précision se marient pour créer des toits qui défient les conventions. Nous faisons des calculs pour que vous n'ayez pas à le faire !" image={img1} reverse="true" />
      <CardSection paddingTop="0px" title="Inline sécurité" body="Massa eget egestas purus viverra. Nisi scelerisque eu ultrices vitae. Orci eu lobortis elementum nibh tellus molestie nunc non. Ultrices in iaculis nunc sed augue lacus viverra. Consequat semper viverra nam libero justo laoreet sit. Nibh praesent tristique magna sit amet. Vulputate enim nulla aliquet porttitor. Dui nunc mattis enim ut tellus elementum sagittis." buttonLabel="Voir sur facebook" image={img2} />
      <SectionTen />
      <SectionEleven />
      <BannerSection overlay="linear-gradient(94deg, #2B2B2B 38.03%, rgba(43, 43, 43, 0.00) 107.1%)" image={img3} height="504px" top="124px" hasIcons="false" bannerTitle="evaluez votre projet" bannerBody={"Vous envisagez des travaux de couverture ou de toiture ? Ne cherchez pas plus loin. Remplissez quelques détails, cliquez, et nous vous enverrons rapidement un devis personnalisé pour votre projet."} bannerButton="Demande de devis en ligne" />
      <SectionTwelve />
      <SectionThirteen/>
    </>
  );
}
export default Home;
