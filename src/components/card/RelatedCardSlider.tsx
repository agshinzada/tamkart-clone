import { CardItemTypes } from "../../types/card";
import RelatedCardItem from "./RelatedCardItem";

const RelatedCardSlider = ({ data }: { data: CardItemTypes[] }) => {
  return (
    <div className="px-3 overflow-hidden mt-8">
      <div className="flex overflow-x-auto scroll-smooth space-x-4 scrollbar-hide">
        {data.slice(0, 3).map((item, index) => (
          <RelatedCardItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default RelatedCardSlider;
