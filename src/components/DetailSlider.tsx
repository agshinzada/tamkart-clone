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
    <Slider {...settings} className="tablet:max-w-[580px] w-full">
      <div className="laptop:w-fit w-full">
        <div className="flex tablet:flex-row flex-col tablet:justify-normal justify-center gap-3 tablet:gap-14 w-full laptop:w-fit">
          <div className="flex tablet:flex-col items-start flex-row justify-between">
            <p className="text-white text-sm tablet:text-[22px] font-semibold order-1 tablet:order-0">
              7%
            </p>
            <p className="text-base text-white opacity-50 order-0 tablet:order-1">
              Qalığa gəlir
            </p>
          </div>
          <div className="flex tablet:flex-col flex-row items-start justify-between">
            <p className="text-white text-sm tablet:text-[22px] font-semibold order-1 tablet:order-0">
              Pulsuz
            </p>
            <p className="text-base text-white opacity-50 order-0 tablet:order-1">
              Nağdlaşdırma və köçürmə
            </p>
          </div>
          <div className="flex tablet:flex-col flex-row items-start justify-between">
            <p className="text-white text-sm tablet:text-[22px] font-semibold order-1 tablet:order-0">
              10 %-dək kəşbek
            </p>
            <p className="text-base text-white opacity-50 order-0 tablet:order-1">
              Partnyorlardan
            </p>
          </div>
        </div>
      </div>
      <div className="laptop:w-fit w-full">
        <div className="flex tablet:gap-14 gap-3 tablet:flex-row flex-col tablet:justify-normal justify-center w-full laptop:w-fit">
          <div className="flex tablet:flex-col flex-row items-start justify-between">
            <p className="text-white text-sm tablet:text-[22px] font-semibold order-1 tablet:order-0">
              10 %-dək kəşbek
            </p>
            <p className="text-base text-white opacity-50 order-0 tablet:order-1">
              Hər ödənişdən
            </p>
          </div>
          <div className="flex tablet:flex-col flex-row items-start justify-between">
            <p className="text-white text-sm tablet:text-[22px] font-semibold order-1 tablet:order-0">
              300 - 30 000 AZN
            </p>
            <p className="text-base text-white opacity-50 order-0 tablet:order-1">
              Kredit limit
            </p>
          </div>
          <div className="flex tablet:flex-col flex-row items-start justify-between">
            <p className="text-white text-sm tablet:text-[22px] font-semibold order-1 tablet:order-0">
              24 ayadək
            </p>
            <p className="text-base text-white opacity-50 order-0 tablet:order-1">
              Taksitlər
            </p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default DetailSlider;
