import { Link, useNavigate } from "react-router-dom";
import { CampaignItemType } from "../../types/campaign";

const SectionCampaignItem = ({ data }: { data: CampaignItemType }) => {
  const navigate = useNavigate();
  return (
    <div className="laptop:pb-12 pb-8 border-b border-b-csecondary laptop:border-none">
      <Link to={`/campaigns/${data.id}`} className="group">
        <div className="flex laptop:flex-col flex-row gap-10 laptop:gap-0">
          <div className="laptop:h-[300px] h-auto min-w-[340px] laptop:w-full">
            <img
              src={data.image}
              alt="kampaniya"
              className="object-cover w-full h-full rounded-[20px] group-hover:scale-110 transition-all duration-200"
            />
          </div>
          <div className="text-white flex flex-col justify-between laptop:mt-8 mt-0">
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

            <button
              type="button"
              className="laptop:hidden px-6 py-3 text-sm h-fit w-fit bg-csecondary text-white rounded-xl font-semibold group-hover:text-black group-hover:bg-cprimary transition-all duration-300"
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

export default SectionCampaignItem;
