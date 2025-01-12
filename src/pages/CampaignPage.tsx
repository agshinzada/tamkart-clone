import { useEffect, useState } from "react";
import Campaigns from "../components/campaign/Campaigns";
import PageTitle from "./PageTitle";

const CampaignPage = () => {
  const [data, setData] = useState([]);

  async function getCampaigns() {
    const response = await fetch(
      "https://json-server-seven-murex.vercel.app/tamkart/"
    );
    const data = await response.json();
    setData(data.campaigns);
  }

  useEffect(() => {
    getCampaigns();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="max-w-[1040px] mx-auto pt-36">
      <PageTitle title="Kampaniyalar" />
      <div>
        <Campaigns data={data} type="page" />
      </div>
    </section>
  );
};

export default CampaignPage;
