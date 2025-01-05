import Slider from "react-slick";
import { PartnerDetail } from "../../types/partner";
import PartnerDetailItem from "./PartnerDetailItem";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  speed: 4000,
  autoplaySpeed: 1000,
  cssEase: "linear",
  arrows: false,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
      },
    },
  ],
};
const PartnerDetails = ({ data }: { data: PartnerDetail[] }) => {
  return (
    <div className="w-full mt-12">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index}>
            <PartnerDetailItem data={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PartnerDetails;
