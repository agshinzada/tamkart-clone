import { useState } from "react";
import card1 from "../../assets/card1.png";
import SectionButton from "./SectionButton";
import TabButton from "../TabButton";
import { TabButtonTypes } from "../../types/button";
import AdvantageSlider from "../AdvantageSlider";

const AdvantageSection = () => {
  const [btnStatus, setBtnStatus] = useState({
    btn1: true,
    btn2: false,
    type: "debit",
  });

  function handleBtn(params: TabButtonTypes): void {
    console.log(params);
  }

  return (
    <section className="max-w-[1040px] mx-auto flex flex-col items-center mt-32 px-10 laptop:px-0 laptop:mt-44">
      <div className="grid grid-cols-2 justify-between">
        <div>
          <h4 className="text-white font-bold laptop:text-5xl text-[40px] leading-tight">
            Üstünlüklər <br /> saymaqla bitmir
          </h4>
          <p className="laptop:text-xl text-lg font-normal opacity-50 text-white laptop:mt-8 mt-3">
            Tam DigiCard istər fiziki kart, istərsə də rəqəmsal formada əldə edə
            biləcəyiniz debet kartıdır.
          </p>
          <AdvantageSlider />
        </div>
        <div className="ml-11 w-full">
          <TabButton btnStatus={btnStatus} handleBtn={handleBtn} />
          <div className="mt-14">
            <div className="w-[396px] h-[250px] mb-5 hidden laptop:block" />
            <img
              src={card1}
              alt="card"
              className="w-[396px] mb-5 laptop:hidden rounded-2xl"
            />
            <SectionButton title="Bütün kartlar" link="/cards" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;
