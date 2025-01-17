import { useNavigate } from "react-router-dom";
import { CardItemTypes } from "../../types/card";
import Button from "../Button";

const CardItem = ({ data }: { data: CardItemTypes }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-csecondary tablet:p-12 p-6 tablet:rounded-3xl rounded-xl flex gap-12">
      {/* MOBILE */}
      <div className="flex flex-col w-full tablet:gap-10 gap-6 laptop:hidden">
        <div className="laptop:hidden flex flex-col gap-5 tablet:gap-0 tablet:flex-row justify-between w-full tablet:border-b tablet:border-b-cthird tablet:pb-8">
          <div className="flex flex-col gap-2 text-white order-1 tablet:order-0 mt-9 tablet:mt-0">
            <h4 className="text-2xl tablet:text-[32px] font-bold">
              {data.name}
            </h4>
            <p className="text-sm tablet:text-lg opacity-50 max-w-[500px]">
              {data.summary}
            </p>
          </div>
          <div className="w-[288px] tablet:w-[230px] h-auto order-0 tablet:order-1 mx-auto tablet:mx-0">
            <img src={data.image} alt="card" />
          </div>
        </div>
        <div className="flex tablet:gap-4 gap-2 tablet:items-center justify-between text-white flex-col tablet:flex-row">
          <div className="flex tablet:flex-col justify-between tablet:justify-start flex-row">
            <h4 className="text-sm tablet:text-[22px] font-semibold order-1 tablet:order-0">
              10%-dək
            </h4>
            <p className="text-sm tablet:text-[16px] opacity-50 order-0 tablet:order-1">
              Keşbək
            </p>
          </div>
          <div className="flex tablet:flex-col justify-between tablet:justify-start flex-row">
            <h4 className="text-sm tablet:text-[22px] font-semibold text-cprimary order-1 tablet:order-0">
              0 AZN
            </h4>
            <p className="text-sm tablet:text-[16px] opacity-50 order-0 tablet:order-1">
              Qiymət
            </p>
          </div>
          <div className="flex tablet:flex-col justify-between tablet:justify-start flex-row">
            <h4 className="text-sm tablet:text-[22px] font-semibold order-1 tablet:order-0">
              AZN/USD/EUR
            </h4>
            <p className="text-sm tablet:text-[16px] opacity-50 order-0 tablet:order-1">
              Valyuta
            </p>
          </div>
          <div className="flex tablet:flex-col justify-between tablet:justify-start flex-row">
            <h4 className="text-sm tablet:text-[22px] font-semibold order-1 tablet:order-0">
              5 il
            </h4>
            <p className="text-sm tablet:text-[16px] opacity-50 order-0 tablet:order-1">
              Xidmət müddəti
            </p>
          </div>
        </div>
        <div className="flex justify-between tablet:justify-start">
          <a href={data.link} className="order-1 tablet:order-0">
            <Button title="İndi sifariş et" size="w-fit" />
          </a>
          <button
            type="button"
            className="order-0 tablet:order-1 tablet:px-6 py-3 text-lg h-fit text-white rounded-lg font-semibold hover:opacity-70 transition-all duration-300"
            onClick={() => navigate(`${data.id}?type=${data.type}`)}
          >
            Daha ətraflı
          </button>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="w-[300px] h-auto hidden laptop:block">
        <img src={data.image} alt="card" className="min-w-[300px]" />
      </div>
      <div className="flex-col gap-7 hidden laptop:flex">
        <div className="flex flex-col gap-2 text-white">
          <h4 className="text-[32px] font-bold">{data.name}</h4>
          <p className="text-lg opacity-50 max-w-[500px]">{data.summary}</p>
        </div>
        <div className="flex gap-4 items-center justify-between text-white">
          <div className="flex flex-col justify-start">
            <h4 className="text-[22px] font-semibold">10%-dək</h4>
            <p className="text-[16px] opacity-50">Keşbək</p>
          </div>
          <div className="flex flex-col justify-start">
            <h4 className="text-[22px] font-semibold text-cprimary">0 AZN</h4>
            <p className="text-[16px] opacity-50">Qiymət</p>
          </div>
          <div className="flex flex-col justify-start">
            <h4 className="text-[22px] font-semibold">AZN/USD/EUR</h4>
            <p className="text-[16px] opacity-50">Valyuta</p>
          </div>
          <div className="flex flex-col justify-start">
            <h4 className="text-[22px] font-semibold">5 il</h4>
            <p className="text-[16px] opacity-50">Xidmət müddəti</p>
          </div>
        </div>
        <div>
          <a href={data.link}>
            <Button title="İndi sifariş et" size="w-fit" />
          </a>
          <button
            type="button"
            className="px-6 py-3 text-lg h-fit text-white rounded-lg font-semibold hover:opacity-70 transition-all duration-300"
            onClick={() => navigate(`${data.id}?type=${data.type}`)}
          >
            Daha ətraflı
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
