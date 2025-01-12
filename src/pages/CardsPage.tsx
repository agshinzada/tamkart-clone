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
    <section className="max-w-[1040px] mx-auto pt-36">
      <div className="flex justify-between items-center">
        <PageTitle title="Kartlar" />
        <TabButton btnStatus={btnStatus} handleBtn={handleBtn} />
      </div>
      <Cards type={cardType} />
    </section>
  );
};

export default CardsPage;
