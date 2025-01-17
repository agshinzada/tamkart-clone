import { useEffect, useRef } from "react";
import { PartnerDetail } from "../../types/partner";
import PartnerDetailItem from "./PartnerDetailItem";

const PartnersSlider = ({ data }: { data: PartnerDetail[] }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const cloneData = [...data, ...data]; // Sonsuz döngü için data'yı ikiye katla

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    // Scroll sürekli hareket etsin
    const interval = setInterval(() => {
      slider.scrollLeft += 1; // Hızı ayarlamak için artırabilirsiniz

      // Eğer son konuma ulaşırsa başa sar
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      }
    }, 16); // ~60fps

    return () => {
      clearInterval(interval); // Bileşen unmount olduğunda interval'i temizle
    };
  }, []);

  return (
    <div className="tablet:px-3 overflow-hidden mt-8">
      <div
        ref={sliderRef}
        className="flex overflow-x-auto space-x-4 scrollbar-hide"
        style={{ willChange: "scroll-position" }} // Performans için
      >
        {cloneData.map((item, index) => (
          <PartnerDetailItem data={item} type="section" key={index} />
        ))}
      </div>
    </div>
  );
};

export default PartnersSlider;
