import { useState } from "react";
import SectionButton from "./SectionButton";
import TabButton from "../TabButton";
import { TabButtonTypes } from "../../types/button";
import AdvantageSlider, { CardAdvantagesType } from "../AdvantageSlider";

const advancedCardDetails: {
  [key: string]: {
    summary: string;
    image: string;
    advantages: string[];
  };
} = {
  debit: {
    summary:
      "Tam DigiCard istər fiziki kart, istərsə də rəqəmsal formada əldə edə biləcəyiniz debet kartıdır.",
    image: "https://tamkart.az/_next/static/media/tamdigi.988304eb.png",
    advantages: [
      "Pulsuz kart",
      "10-dək Faydalı kəşbek",
      "Kartdakı qalığa 7% illik gəlir",
      "İstənilən bank kartına pulsuz köçürmə",
      "Ölkədaxili istənilən ATM-də pulsuz nağdlaşdırma",
      "Qayğıcash klubuna üzvlük",
      "Digər bank kartlarından pulsuz mədaxil",
    ],
  },
  credit: {
    summary:
      "Tamkart taksitlə 60 günədək güzəşt müddəti, 24 ayadək taksit imkanı, partnyor mağazalarda keşbek və digər üstünlüklər qazanacaqsınız.",
    image: "https://tamkart.az/_next/static/media/tamkartvisa.7514d8fe.png",
    advantages: [
      "Hər iki ödəniş sistemindəI Visa, MC",
      "Pulsuz kart",
      "60 günədək güzəşt müddəti",
      "100% nağdlaşdırma limiti",
      "24 ayadək taksit imkanı",
      "300 - 30000 AZN",
      "Müddət: 5 il",
    ],
  },
};

const AdvantageSection = () => {
  const [btnStatus, setBtnStatus] = useState<TabButtonTypes>({
    btn1: true,
    btn2: false,
    type: "debit",
  });
  const [cardAdvantagesData, setCardAdvantagesData] =
    useState<CardAdvantagesType>(advancedCardDetails.debit);

  function handleBtn(params: TabButtonTypes): void {
    setBtnStatus(params);
    setCardAdvantagesData(advancedCardDetails[params.type]);
  }

  return (
    <section className="max-w-[1040px] mx-auto flex flex-col tablet:items-center mt-20 tablet:mt-32 px-4 tablet:px-10 laptop:px-0 laptop:mt-44">
      <div className="grid grid-cols-1 tablet:grid-cols-2 tablet:justify-between">
        <div>
          <h4 className="text-white font-bold laptop:text-5xl text-2xl tablet:text-[40px] leading-tight">
            Üstünlüklər <br className="hidden tablet:block" /> saymaqla bitmir
          </h4>
          <div className="tablet:hidden flex justify-center mt-4">
            <TabButton
              btnStatus={btnStatus}
              handleBtn={handleBtn}
              size="small"
              maxWidth="max-w-[500px]"
            />
          </div>
          <div className="mx-auto py-10 w-[280px] tablet:hidden">
            <img
              src={cardAdvantagesData.image}
              alt="card"
              className="rounded-xl"
            />
          </div>
          <p className="laptop:text-xl text-[16px] tablet:text-lg font-normal opacity-50 text-white laptop:mt-8 mt-3">
            {cardAdvantagesData.summary}
          </p>
          <AdvantageSlider data={cardAdvantagesData} />
        </div>
        <div className="tablet:ml-11 w-full">
          <div className="hidden tablet:block">
            <TabButton
              btnStatus={btnStatus}
              handleBtn={handleBtn}
              size="large"
              maxWidth="max-w-[252px]"
            />
          </div>
          <div className="tablet:mt-14 mt-5">
            <div className="w-[396px] h-[250px] tablet:mb-5 hidden laptop:block" />
            <img
              src={cardAdvantagesData.image}
              alt="card"
              className="w-[396px] tablet:mb-5 laptop:hidden rounded-2xl hidden tablet:block"
            />
            <div className="flex justify-center">
              <SectionButton title="Bütün kartlar" link="/cards" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;
