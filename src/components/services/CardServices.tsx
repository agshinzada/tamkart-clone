import Slider from "react-slick";
import { ServiceItemType } from "../../types/service";
import CardServiceItem from "./CardServiceItem";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  centerMode: false,
};
const CardServices = ({ data }: { data: ServiceItemType[] }) => {
  return (
    <div className="px-10 mt-10 service-slider">
      <Slider {...settings}>
        <div
          className={`bg-transparent p-8 rounded-3xl
        text-white flex-1`}
        >
          <div className="flex flex-col gap-2 mt-5">
            <h5 className="font-semibold"></h5>
            <p className="opacity-50 text-[16px]"></p>
          </div>
        </div>
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
