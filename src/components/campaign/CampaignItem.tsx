import { Link, useNavigate } from "react-router-dom";
import { CampaignItemType } from "../../types/campaign";

const CampaignItem = ({
  data,
  type,
}: {
  data: CampaignItemType;
  type: string;
}) => {
  const navigate = useNavigate();
  return (
    <div className="border-b border-b-csecondary pb-12">
      <Link to={`/campaigns/${data.id}`} className="group">
        <div
          className={`flex ${
            type === "section" ? "flex-col" : "flex-row gap-8"
          }`}
        >
          <div
            className={`${
              type === "section" ? "h-[300px]" : "min-w-[340px] h-[217px]"
            } rounded-[20px] overflow-hidden`}
          >
            <img
              src={data.image}
              alt="kampaniya"
              className="object-cover w-full h-full rounded-[20px] group-hover:scale-110 transition-all duration-200"
            />
          </div>
          <div className="text-white flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              {data.date.trim() === "" ? (
                ""
              ) : (
                <p className="text-[14px] bg-cthird w-fit px-3 py-1 rounded-full font-[500] opacity-50 mb-2">
                  {data.date}
                </p>
              )}
              <p className="text-2xl font-semibold">{data.name}</p>
              <p className="text-[16px] opacity-50">{data.summary}</p>
            </div>

            {type === "page" ? (
              <button
                type="button"
                className="px-6 py-3 text-sm h-fit w-fit bg-csecondary text-white rounded-xl font-semibold group-hover:text-black group-hover:bg-cprimary transition-all duration-300"
                onClick={() => navigate(`${data.id}`)}
              >
                Daha ətraflı
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CampaignItem;
