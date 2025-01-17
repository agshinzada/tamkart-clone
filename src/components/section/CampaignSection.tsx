import SectionCampaignItem from "../campaign/SectionCampaignItem";
import SectionButton from "./SectionButton";
import SectionTitle from "./SectionTitle";
import { useEffect, useState } from "react";

const CampaignSection = () => {
  const [data, setData] = useState([]);

  async function getCampaigns() {
    const response = await fetch(
      "https://json-server-seven-murex.vercel.app/tamkart/"
    );
    const data = await response.json();
    setData(data.campaigns.slice(0, 2));
  }

  useEffect(() => {
    getCampaigns();
  }, []);

  return (
    <section className="px-4 tablet:px-10 laptop:px-0">
      <div className="max-w-[1040px] mx-auto flex flex-col items-start laptop:mt-36 mt-16">
        <div className="flex justify-between w-full items-center mb-7">
          <SectionTitle title="Kampaniyalar" />
          <div className="hidden tablet:block">
            <SectionButton title="Bütün kampaniyalar" link="/campaigns" />
          </div>
        </div>
        <div className="grid laptop:grid-cols-2 grid-cols-1 laptop:gap-12 tablet:gap-8 gap-3">
          {data.map((item, index) => (
            <SectionCampaignItem data={item} key={index} />
          ))}
        </div>
        <div className="flex justify-center w-full tablet:hidden">
          <SectionButton title="Bütün kampaniyalar" link="/campaigns" />
        </div>
      </div>
    </section>
  );
};

export default CampaignSection;
