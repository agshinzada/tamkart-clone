import { useEffect, useState } from "react";
import Button from "../Button";
import SectionButton from "./SectionButton";
import { PartnerDetail } from "../../types/partner";
import PartnersSlider from "../partner/PartnersSlider";

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
    <section className="">
      <div className="max-w-[1040px] mx-auto flex flex-col items-start laptop:mt-44 mt-32 px-10 laptop:px-0">
        <div className="flex flex-col ">
          <h2 className="text-white font-bold laptop:text-5xl text-[40px]">
            TamKart-la xərcədikcə qazanın!
          </h2>
          <p className="laptop:text-xl text-[16px] font-medium opacity-50 text-white mt-3 laptop:mt-8">
            Tərəfdaş mağazalarda hər alışda 20%-dək <br /> keşbek
            qazanacaqsınız.
          </p>
        </div>
        <div className="flex justify-between w-full items-center laptop:mt-12 mt-5">
          <Button title="Partnyor ol" />
          <SectionButton title="Bütün partnyorlar" link="/partners" />
        </div>
      </div>
      <div className="laptop:px-10 px-0">
        <PartnersSlider data={data} />
      </div>
    </section>
  );
};

export default PartnersSection;
