import { Link, useNavigate } from "react-router-dom";
import { CampaignItemType } from "../../types/campaign";

const CampaignItem = ({ data }: { data: CampaignItemType }) => {
  const navigate = useNavigate();
  return (
    <div className="tablet:border-b tablet:border-b-csecondary tablet:pb-12 pb-0">
      <Link to={`/campaigns/${data.id}`} className="group">
        <div className="flex tablet:flex-row flex-col tablet:gap-8 gap-4">
          <div className="min-w-[340px] tablet:h-[217px] rounded-[20px] overflow-hidden">
            <img
              src={data.image}
              alt="kampaniya"
              className="object-cover w-full h-full rounded-[20px] group-hover:scale-110 transition-all duration-200"
            />
          </div>
          <div className="text-white flex flex-col justify-between ">
            <div className="flex flex-col gap-3">
              {data.date.trim() === "" ? (
                ""
              ) : (
                <p className="text-[14px] bg-cthird w-fit px-3 tablet:py-1 py-2 rounded-full font-[500] opacity-50 mb-2">
                  {data.date}
                </p>
              )}
              <p className="text-xl tablet:text-2xl font-semibold">
                {data.name}
              </p>
              <p className="text-sm tablet:text-[16px] opacity-50">
                {data.summary}
              </p>
            </div>
            <button
              type="button"
              className="hidden tablet:block px-6 py-3 text-sm h-fit w-fit bg-csecondary text-white rounded-xl font-semibold group-hover:text-black group-hover:bg-cprimary transition-all duration-300"
              onClick={() => navigate(`${data.id}`)}
            >
              Daha ətraflı
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CampaignItem;
