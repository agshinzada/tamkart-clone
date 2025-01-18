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
      className={`bg-csecondary tablet:p-8 p-5 rounded-3xl select-none  ${
        type === "page"
          ? "tablet:text-2xl text-xl"
          : "tablet:min-h-[320px] text-xl laptop:first:ml-[310px] first:ml-3"
      } min-w-[250px] tablet:min-w-[320px] tablet:max-w-[320px] w-fit text-white flex-1`}
    >
      <img src={data.icon} alt="icon" />
      <div className="flex flex-col gap-2 mt-5">
        <h5 className="font-semibold">{data.title}</h5>
        <p className="opacity-50 tablet:text-[16px] text-sm">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default CardServiceItem;
