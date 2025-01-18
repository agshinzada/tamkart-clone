import { CampaignItemType } from "../../types/campaign";
import CampaignItem from "./CampaignItem";

const Campaigns = ({ data }: { data: CampaignItemType[]; type: string }) => {
  return (
    <div className="flex flex-col gap-10 w-full mt-9">
      {data.map((item, index) => (
        <CampaignItem key={index} data={item} />
      ))}
    </div>
  );
};

export default Campaigns;
