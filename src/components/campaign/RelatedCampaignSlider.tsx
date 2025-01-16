import { useRef } from "react";
import { CampaignItemType } from "../../types/campaign";
import RelatedCampaignItem from "./RelatedCampaignItem";

const RelatedCampaignSlider = ({ data }: { data: CampaignItemType[] }) => {
  const sliderRef = useRef(null);
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
    <div className="px-3 overflow-hidden mt-8">
      <div
        className="flex overflow-x-auto scroll-smooth space-x-10 scrollbar-hide"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        ref={sliderRef}
      >
        {data.map((item, index) => (
          <RelatedCampaignItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default RelatedCampaignSlider;
