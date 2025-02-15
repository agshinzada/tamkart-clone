import { Link } from "react-router-dom";
import { CardItemTypes } from "../../types/card";

const RelatedCardItem = ({ item }: { item: CardItemTypes }) => {
  return (
    <Link
      to={`/cards/${item.id}?type=${item.type}`}
      className="w-full tablet:min-w-[190px] min-w-[300px]"
    >
      <img src={item.image} alt="card" className="w-full tablet:w-[280px]" />
      <h5 className="text-2xl font-semibold text-white mt-5">{item.name}</h5>
      <p className="text-lg mt-2 opacity-50 text-white">
        {item.summary.slice(0, 110).concat("...")}
      </p>
    </Link>
  );
};

export default RelatedCardItem;
