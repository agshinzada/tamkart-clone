import { useNavigate } from "react-router-dom";
import { PartnerDetail } from "../../types/partner";

const PartnerDetailItem = ({
  data,
  type,
}: {
  data: PartnerDetail;
  type: string;
}) => {
  const navigate = useNavigate();
  return (
    <div
      className={`flex flex-col justify-between gap-9 cursor-pointer  py-6 rounded-3xl bg-csecondary w-fit ${
        type === "page" ? "w-full h-[208px] px-6" : "min-w-[280px] px-8"
      } `}
      onClick={() => navigate(`/partners/${data.id}`)}
    >
      <div className="flex justify-between gap-8">
        <img
          src={data.image}
          alt="partner-image"
          className="w-[70px] rounded-full"
        />
        <span className="text-[16px] p-1 px-3 font-semibold bg-cthird text-white rounded-2xl h-fit">
          {data.taksit}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-xl text-white font-bold">
          {data.name.slice(0, 13).concat("...")}
        </p>
        <p className="text-sm text-white opacity-50">
          {data.type.slice(0, 13).concat("...")}
        </p>
      </div>
    </div>
  );
};

export default PartnerDetailItem;
