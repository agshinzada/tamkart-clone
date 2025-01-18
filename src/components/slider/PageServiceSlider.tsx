import serviceIcon1 from "../../assets/serviceIcon1.svg";
import serviceIcon2 from "../../assets/serviceIcon2.svg";
import serviceIcon3 from "../../assets/serviceIcon3.svg";
import CardServiceItem from "../services/CardServiceItem";
const PageServiceSlider = () => {
  return (
    <div className="py-10 tablet:px-3 px-0 overflow-hidden mt-8">
      <div className="flex overflow-x-auto scroll-smooth space-x-4 tablet:space-x-6 scrollbar-hide">
        <CardServiceItem
          data={{
            title: "İkiqat “ƏDV geri al”",
            description: `Fayda Max-la "Qızıl” mərhələyə çatıb "2X ƏDV geri al" qazanın`,
            icon: serviceIcon1,
          }}
          type="page"
        />
        <CardServiceItem
          data={{
            title: "10%-dək Faydalı keşbek",
            description: `Hər ay seçilmiş paket üzrə müxtəlif kateqoriyalarda 10%-dək keşbek`,
            icon: serviceIcon2,
          }}
          type="page"
        />
        <CardServiceItem
          data={{
            title: "QayğıCash klubu",
            description: `Tərəfdaş mağazalarda ödənişlər zamanı 20%-dək keşbek`,
            icon: serviceIcon3,
          }}
          type="page"
        />
      </div>
    </div>
  );
};

export default PageServiceSlider;
