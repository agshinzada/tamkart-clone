import Slider from "react-slick";

const DetailSlider = () => {
  const settings = {
    vertical: true, // Dikey kaydırma
    autoplay: true, // Otomatik oynatma
    autoplaySpeed: 3500, // 2 saniyede bir geçiş
    infinite: true, // Sonsuz döngü
    speed: 500, // Geçiş hızı
    slidesToShow: 1, // Aynı anda gösterilen slayt sayısı
    slidesToScroll: 1, // Kaydırma başına slayt sayısı
    pauseOnHover: false, // Hover sırasında durmasın
    arrows: false,
  };

  return (
    <Slider {...settings} className="max-w-[580px]">
      <div className="w-fit ">
        <div className="flex gap-14 w-fit">
          <div className="flex flex-col items-start">
            <p className="text-white text-[22px] font-semibold">7%</p>
            <p className="text-base text-white opacity-50">Qalığa gəlir</p>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-white text-[22px] font-semibold">Pulsuz</p>
            <p className="text-base text-white opacity-50">
              Nağdlaşdırma və köçürmə
            </p>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-white text-[22px] font-semibold">
              10 %-dək kəşbek
            </p>
            <p className="text-base text-white opacity-50">Partnyorlardan</p>
          </div>
        </div>
      </div>
      <div className="w-fit">
        <div className="flex gap-14 w-fit">
          <div className="flex flex-col items-start">
            <p className="text-white text-[22px] font-semibold">
              10 %-dək kəşbek
            </p>
            <p className="text-base text-white opacity-50">Hər ödənişdən</p>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-white text-[22px] font-semibold">
              300 - 30 000 AZN
            </p>
            <p className="text-base text-white opacity-50">Kredit limit</p>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-white text-[22px] font-semibold">24 ayadək</p>
            <p className="text-base text-white opacity-50">Taksitlər</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default DetailSlider;
