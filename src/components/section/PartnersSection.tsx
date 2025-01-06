import { useEffect, useState } from "react";
import Button from "../Button";
import PartnerDetails from "../partner/PartnerDetails";
import SectionButton from "./SectionButton";
import { PartnerDetail } from "../../types/partner";

const PartnersSection = () => {
  const [data, setData] = useState<PartnerDetail[]>([]);

  async function getPartners() {
    const response = await fetch(
      "https://json-server-seven-murex.vercel.app/tamkart/"
    );
    const data = await response.json();
    setData(data.partners);
  }

  useEffect(() => {
    getPartners();
  }, []);
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
        <PartnerDetails data={data} />
      </div>
    </section>
  );
};

export default PartnersSection;
