import CardServices from "../services/CardServices";
import SectionTitle from "./SectionTitle";
import icon1 from "../../assets/services/1.svg";
import icon2 from "../../assets/services/2.svg";
import icon3 from "../../assets/services/3.svg";
import icon4 from "../../assets/services/4.svg";
import icon5 from "../../assets/services/5.svg";

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
    <section className="mt-32">
      <div className="w-full max-w-[1040px] mx-auto">
        <div className="flex items-center justify-between">
          <SectionTitle title="Kart üzrə xidmətlər" />
          <div className="flex gap-4">
            <span
              className="rounded-full p-4 bg-csecondary rotate-180 cursor-pointer"
              data-test-id="span"
            >
              <svg
                width="18"
                //   height="15"
                viewBox="0 0 18 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="z-20"
              >
                <path
                  d="M6.264 0H9.72L16.92 7.2L9.72 14.4H6.264L12.216 8.448H0V5.952H12.216L6.264 0Z"
                  fill="#76FA57"
                ></path>
              </svg>
            </span>
            <span
              className="rounded-full p-4 bg-cprimary cursor-pointer"
              data-test-id="span"
            >
              <svg
                width="18"
                //   height="15"
                viewBox="0 0 18 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="z-20"
              >
                <path
                  d="M6.264 0H9.72L16.92 7.2L9.72 14.4H6.264L12.216 8.448H0V5.952H12.216L6.264 0Z"
                  fill="#000"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
      <CardServices data={services} />
    </section>
  );
};

export default ServicesSection;
