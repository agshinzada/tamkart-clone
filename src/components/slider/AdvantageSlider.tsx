import Slider from "react-slick";

export interface CardAdvantagesType {
  summary: string;
  image: string;
  advantages: string[];
}

const AdvantageSlider = ({ data }: { data: CardAdvantagesType }) => {
  const settings = {
    vertical: true, // Dikey kaydırma
    autoplay: true, // Otomatik oynatma
    autoplaySpeed: 3500, // 2 saniyede bir geçiş
    infinite: true, // Sonsuz döngü
    speed: 500, // Geçiş hızı
    slidesToShow: 6, // Aynı anda gösterilen slayt sayısı
    slidesToScroll: 1, // Kaydırma başına slayt sayısı
    pauseOnHover: false, // Hover sırasında durmasın
    arrows: false,
  };

  return (
    <div className="relative">
      <Slider {...settings} className="h-full w-full mobile:w-[470px] mt-10">
        {data.advantages.map((item, index) => (
          <div key={index}>
            <h5 className="text-white text-lg flex gap-3 font-semibold items-center">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12.6111L8.92308 17.5L20 6.5"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {item}
            </h5>
          </div>
        ))}
      </Slider>
      <div className="absolute w-full tablet:h-[95px] h-[170px]  bottom-0 bg-gradient-to-b from-cdark/0 to-cdark/100 z-10 pointer-events-none"></div>
    </div>
  );
};

export default AdvantageSlider;
