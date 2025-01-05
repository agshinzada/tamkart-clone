import Slider from "react-slick";

const TextSlider = () => {
  const settings = {
    vertical: true, // Dikey kaydırma
    autoplay: true, // Otomatik oynatma
    autoplaySpeed: 4000, // 2 saniyede bir geçiş
    infinite: true, // Sonsuz döngü
    speed: 500, // Geçiş hızı
    slidesToShow: 1, // Aynı anda gösterilen slayt sayısı
    slidesToScroll: 1, // Kaydırma başına slayt sayısı
    pauseOnHover: false, // Hover sırasında durmasın
    arrows: false,
  };
  return (
    <Slider {...settings} className="w-48">
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

{
  /* <Swiper
        direction="vertical" // Dikey kaydırma
        loop={true} // Sonsuz döngü
        autoplay={{
          delay: 2000, // 2 saniyede bir geçiş
          // disableOnInteraction: false, // Kullanıcı etkileşiminden sonra da devam etsin
        }}
        className="h-fit"
        slidesPerView={1} // Tek slayt gösterimi
        modules={[Autoplay]}
        onAutoplayStart={() => console.log("Autoplay başladı")}
        onAutoplayStop={() => console.log("Autoplay durduruldu")}
      >
        <SwiperSlide>
          <h2 className="text-cprimary">debit</h2>
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="text-cprimary">taksit</h2>
        </SwiperSlide>
      </Swiper> */
}
