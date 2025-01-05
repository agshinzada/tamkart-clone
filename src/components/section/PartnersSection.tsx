import partnerLogo from "../../assets/partner1.jpeg";
import partnerLogo2 from "../../assets/partner2.png";
import partnerLogo3 from "../../assets/partner3.png";
import Button from "../Button";
import PartnerDetails from "../partner/PartnerDetails";
import SectionButton from "./SectionButton";

const partners = [
  {
    logo: partnerLogo,
    name: "Online Tikinti Bazarı",
    type: "Pərakəndə satış",
    taksit: "2 - 24 ay",
  },
  {
    logo: partnerLogo,
    name: "Optimal Təkər Mərkəzi",
    type: "Pərakəndə satış",
    taksit: "2 - 24 ay",
  },
  {
    logo: partnerLogo3,
    name: "Geyim mağazası",
    type: "Geyim mağazası",
    taksit: "2 - 24 ay",
  },
  {
    logo: partnerLogo2,
    name: "Zuhur Telekom",
    type: "Mobil telefon və aksessuar",
    taksit: "2 - 6 ay",
  },
  {
    logo: partnerLogo2,
    name: "Seyf mağazası",
    type: "Pərakəndə satış",
    taksit: "3 ay",
  },
  {
    logo: partnerLogo3,
    name: "Optimal Təkər Mərkəzi",
    type: "Pərakəndə satış",
    taksit: "2 - 24 ay",
  },
  {
    logo: partnerLogo,
    name: "Geyim mağazası",
    type: "Geyim mağazası",
    taksit: "2 - 24 ay",
  },
  {
    logo: partnerLogo2,
    name: "Zuhur Telekom",
    type: "Mobil telefon və aksessuar",
    taksit: "2 - 6 ay",
  },
  {
    logo: partnerLogo,
    name: "Seyf mağazası",
    type: "Pərakəndə satış",
    taksit: "3 ay",
  },
  {
    logo: partnerLogo3,
    name: "Zuhur Telekom",
    type: "Mobil telefon və aksessuar",
    taksit: "2 - 6 ay",
  },
  {
    logo: partnerLogo,
    name: "Seyf mağazası",
    type: "Pərakəndə satış",
    taksit: "3 ay",
  },
];
const PartnersSection = () => {
  return (
    <section>
      <div className="max-w-[1040px] mx-auto flex flex-col items-start mt-44">
        <div className="flex flex-col ">
          <h2 className="text-white font-bold text-5xl">
            TamKart-la xərcədikcə qazanın!
          </h2>
          <p className="text-xl font-medium opacity-50 text-white mt-8">
            Tərəfdaş mağazalarda hər alışda 20%-dək <br /> keşbek
            qazanacaqsınız.
          </p>
        </div>
        <div className="flex justify-between w-full items-center mt-12">
          <Button title="Partnyor ol" />
          <SectionButton title="Bütün partnyorlar" />
        </div>
      </div>
      <div className="px-10">
        <PartnerDetails data={partners} />
      </div>
    </section>
  );
};

export default PartnersSection;
