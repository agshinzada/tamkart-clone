import { useEffect, useState } from "react";
import Cards from "../components/card/Cards";
import TabButton from "../components/TabButton";
import PageTitle from "./PageTitle";
import { TabButtonTypes } from "../types/button";

const CardsPage = () => {
  const [cardType, setCardType] = useState("debit");
  const [btnStatus, setBtnStatus] = useState({
    btn1: true,
    btn2: false,
    type: cardType,
  });

  function handleBtn(params: TabButtonTypes): void {
    setBtnStatus(params);
    setCardType(params.type);
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="max-w-[1040px] mx-auto tablet:pt-36 pt-24 laptop:px-0 tablet:px-10 px-4">
      <div className="flex tablet:flex-row flex-col justify-between tablet:items-center">
        <PageTitle title="Kartlar" />
        <div className="hidden tablet:block">
          <TabButton btnStatus={btnStatus} handleBtn={handleBtn} size="large" />
        </div>
        <div className="block tablet:hidden mt-3">
          <TabButton btnStatus={btnStatus} handleBtn={handleBtn} size="small" />
        </div>
      </div>
      <Cards type={cardType} />
    </section>
  );
};

export default CardsPage;
