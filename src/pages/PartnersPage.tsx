import Button from "../components/Button";
import PageTitle from "./PageTitle";

import PartnerDetailItem from "../components/partner/PartnerDetailItem";
import { useEffect, useState } from "react";
import { PartnerDetail } from "../types/partner";
import PartnerFilter from "../components/PartnerFilter";
import ClearBtn from "../components/ClearBtn";

const PartnersPage = () => {
  const [data, setData] = useState<PartnerDetail[]>([]);

  async function getPartners() {
    const response = await fetch(
      "https://json-server-seven-murex.vercel.app/tamkart/"
    );
    const data = await response.json();
    setData(data.partners);
  }

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {}

  useEffect(() => {
    getPartners();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="max-w-[1040px] mx-auto laptop:pt-48 pt-36 px-10 laptop:px-0">
      <div className="flex items-center justify-between">
        <PageTitle title="Partnyorlar" />
        <div className="flex gap-3 items-center">
          <span className="block laptop:hidden">
            <ClearBtn />
          </span>
          <Button title="Partnyor ol" />
        </div>
      </div>
      <PartnerFilter />
      <p className="text-[28px] text-white font-bold mt-12">Top partnyorlar</p>
      <div className="grid laptop:grid-cols-4 grid-cols-3 gap-7 mt-10">
        {data.map((item, index) => (
          <PartnerDetailItem data={item} type="page" key={index} />
        ))}
      </div>
      <p className="text-[28px] text-white font-bold mt-10">
        Bütün partnyorlar
      </p>
      <div className="grid laptop:grid-cols-4 grid-cols-2 gap-7 mt-10">
        {data.map((item, index) => (
          <PartnerDetailItem data={item} type="page" key={index} />
        ))}
      </div>
    </section>
  );
};

export default PartnersPage;
