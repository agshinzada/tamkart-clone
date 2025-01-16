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
  responsive: [
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};
const CardServices = ({ data }: { data: ServiceItemType[] }) => {
  return (
    <div className="mt-10">
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
