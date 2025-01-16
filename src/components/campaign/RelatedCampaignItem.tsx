import { CampaignItemType } from "../../types/campaign";
import { Link } from "react-router-dom";

const RelatedCampaignItem = ({ item }: { item: CampaignItemType }) => {
  return (
    <Link to={`/campaigns/${item.id}`}>
      <div className="w-[300px]">
        <img src={item.image} alt="card" className="w-full rounded-2xl" />
        <h5 className="text-xl font-semibold text-white mt-5">{item.name}</h5>
        {item.date.trim() === "" ? (
          ""
        ) : (
          <p className="text-[14px] bg-cthird w-fit px-3 py-1 rounded-full font-[500] opacity-50 mt-3">
            {item.date}
          </p>
        )}
      </div>
    </Link>
  );
};

export default RelatedCampaignItem;
