import { useNavigate } from "react-router-dom";
import { CardItemTypes } from "../../types/card";
import Button from "../Button";

const CardItem = ({ data }: { data: CardItemTypes }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-csecondary p-12 rounded-3xl flex gap-12">
      <div className="w-[300px] h-auto">
        <img src={data.image} alt="card" className="min-w-[300px]" />
      </div>
      <div className="flex flex-col gap-9">
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
            <Button title="İndi sifariş et" />
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
