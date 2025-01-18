import { useRef } from "react";
import { CardItemTypes } from "../../types/card";
import RelatedCardItem from "./RelatedCardItem";

const RelatedCardSlider = ({ data }: { data: CardItemTypes[] }) => {
  const sliderRef = useRef<HTMLDivElement>(null!);
  let isDragging = false;
  let startX: number;
  let scrollLeft: number;

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging = true;
    startX = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return; // Sürükleme yapılmıyorsa çık
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Sürükleme hızını artırmak için çarpanı değiştirebilirsiniz
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    isDragging = false;
  };
  return (
    <div className="tablet:px-3 overflow-hidden tablet:mt-8 mt-4">
      <div
        className="flex overflow-x-auto scroll-smooth space-x-4 scrollbar-hide"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        ref={sliderRef}
      >
        {data.slice(0, 3).map((item, index) => (
          <RelatedCardItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default RelatedCardSlider;
