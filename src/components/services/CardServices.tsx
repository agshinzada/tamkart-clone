import Slider from "react-slick";
import { ServiceItemType } from "../../types/service";
import CardServiceItem from "./CardServiceItem";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  centerMode: false,
};
const CardServices = ({ data }: { data: ServiceItemType[] }) => {
  return (
    <div className="px-10 mt-10">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index}>
            <CardServiceItem data={item} type="section" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardServices;
