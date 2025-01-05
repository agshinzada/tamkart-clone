import { ServiceItemType } from "../../types/service";
const CardServiceItem = ({ data }: { data: ServiceItemType }) => {
  return (
    <div className="bg-csecondary p-8 rounded-3xl h-full min-h-[320px] min-w-[320px] max-w-[320px] w-fit text-white">
      <img src={data.icon} alt="icon" />
      <div className="flex flex-col gap-2 mt-5">
        <h5 className="text-xl font-semibold">{data.title}</h5>
        <p className="opacity-50 text-[16px]">{data.description}</p>
      </div>
    </div>
  );
};

export default CardServiceItem;
