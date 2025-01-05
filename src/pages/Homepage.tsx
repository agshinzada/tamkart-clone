import AdvantageSection from "../components/section/AdvantageSection";
import CampaignSection from "../components/section/CampaignSection";
import DebitCalculateSection from "../components/section/DebitCalculateSection";
import IntroSection from "../components/section/IntroSection";
import PartnersSection from "../components/section/PartnersSection";
import ServicesSection from "../components/section/ServicesSection";
import TaksitCardDetailSection from "../components/section/TaksitCardDetailSection";

const Homepage = () => {
  return (
    <div className="pt-36">
      <IntroSection />
      <AdvantageSection />
      <PartnersSection />
      <CampaignSection />
      <TaksitCardDetailSection />
      <DebitCalculateSection />
      <ServicesSection />
    </div>
  );
};

export default Homepage;
