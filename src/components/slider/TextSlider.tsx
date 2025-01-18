import Slider from "react-slick";

const TextSlider = () => {
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
    <Slider {...settings} className="w-[85px] tablet:w-[170px]">
      <div>
        <h2 className="text-cprimary">debit</h2>
      </div>
      <div>
        <h2 className="text-cprimary">taksit</h2>
      </div>
    </Slider>
  );
};

export default TextSlider;
