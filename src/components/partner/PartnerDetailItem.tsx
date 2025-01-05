import { PartnerDetail } from "../../types/partner";

const PartnerDetailItem = ({ data }: { data: PartnerDetail }) => {
  return (
    <div className="flex flex-col justify-between gap-9 px-8 py-6 rounded-3xl bg-csecondary w-fit min-w-[280px]">
      <div className="flex justify-between gap-8">
        <img
          src={data.logo}
          alt="partner-image"
          className="w-20 rounded-full"
        />
        <span className="text-[16px] p-1 px-3 bg-cthird text-white rounded-2xl h-fit font-[500]">
          {data.taksit}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-xl text-white font-bold">{data.name}</p>
        <p className="text-sm text-white opacity-50">{data.type}</p>
      </div>
    </div>
  );
};

export default PartnerDetailItem;
