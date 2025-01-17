import SectionTitle from "./SectionTitle";
import icon1 from "../../assets/services/1.svg";
import icon2 from "../../assets/services/2.svg";
import icon3 from "../../assets/services/3.svg";
import icon4 from "../../assets/services/4.svg";
import icon5 from "../../assets/services/5.svg";
import CardServiceSlider from "../services/CardServiceSlider";
import SlideControlBtn from "../SlideControlBtn";

const services = [
  {
    title: "Onlayn PIN təyin edilməsi",
    description:
      "Kartınızının PİN kodunu ABB mobile-da asanlıqla təyin edib kartınızı aktivləşdirin.",
    icon: icon1,
  },
  {
    title: "3D Secure",
    description:
      "3D Secure” ilə onlayn ödənişlərinizi təhlükəsiz həyata keçirin. Xidmət pulsuzdur.",
    icon: icon2,
  },
  {
    title: "NFC əməliyyatlar",
    description:
      "Kart, ödəniş üzükləri və Apple Pay/ Google Pay-i dəstəkləyən cihazlarınızla ATM və POS terminallarda təmassız ödənişlər edə bilərsiniz.",
    icon: icon3,
  },
  {
    title: "SMS xəbərdarlıq",
    description:
      "Kartınızla həyata keçirdiyiniz bütün əməliyyatlar üzrə SMS məlumat almaq üçün xidməti ABB mobile-da aktivləşdirin. ",
    icon: icon4,
  },
  {
    title: "Şəxsi kabinet",
    description:
      "ABB mobile-da Şəxsi kabinet bölməsindən taksit hesabınıza asanlıqla nəzarət edə, ödənişlərinizi rahatlıqla həyata keçirə bilərsiniz.",
    icon: icon5,
  },
];

const ServicesSection = () => {
  return (
    <section className="tablet:mt-32 mt-16">
      <div className="w-full max-w-[1040px] mx-auto px-4 tablet:px-10 laptop:px-0">
        <div className="flex items-center justify-between">
          <SectionTitle title="Kart üzrə xidmətlər" />
          <div className="hidden tablet:block">
            <SlideControlBtn />
          </div>
        </div>
      </div>
      <CardServiceSlider data={services} />
      {/* <CardServices data={services} /> */}
    </section>
  );
};

export default ServicesSection;
