import { ServiceItemType } from "../../types/service";
const CardServiceItem = ({
  data,
  type,
}: {
  data: ServiceItemType;
  type: string;
}) => {
  return (
    <div
      className={`bg-csecondary p-8 rounded-3xl select-none  ${
        type === "page"
          ? "text-2xl"
          : "min-h-[320px] text-xl laptop:first:ml-[410px] first:ml-0"
      } min-w-[320px] max-w-[320px] w-fit text-white flex-1`}
    >
      <img src={data.icon} alt="icon" />
      <div className="flex flex-col gap-2 mt-5">
        <h5 className="font-semibold">{data.title}</h5>
        <p className="opacity-50 text-[16px]">{data.description}</p>
      </div>
    </div>
  );
};

export default CardServiceItem;
