import Campaigns from "../campaign/Campaigns";
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
    <section>
      <div className="max-w-[1040px] mx-auto flex flex-col items-start mt-36">
        <div className="flex justify-between w-full items-center">
          <SectionTitle title="Kampaniyalar" />
          <SectionButton title="Bütün kampaniyalar" link="/campaigns" />
        </div>
        <Campaigns data={data} type="section" />
      </div>
    </section>
  );
};

export default CampaignSection;
