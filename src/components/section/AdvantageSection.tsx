import { useState } from "react";
import card1 from "../../assets/card1.png";
import SectionButton from "./SectionButton";
import TabButton from "../TabButton";
import { TabButtonTypes } from "../../types/button";

const AdvantageSection = () => {
  const [btnStatus, setBtnStatus] = useState({
    btn1: true,
    btn2: false,
    type: "debit",
  });

  function handleBtn(params: TabButtonTypes): void {}

  return (
    <section className="max-w-[1040px] mx-auto flex flex-col items-center mt-44">
      <div className="grid grid-cols-2 gap-14 justify-between">
        <div>
          <h4 className="text-white font-bold text-5xl">
            Üstünlüklər <br /> saymaqla bitmir
          </h4>
          <p className="text-xl font-medium opacity-50 text-white mt-8">
            Tam DigiCard istər fiziki kart, istərsə də rəqəmsal formada əldə edə
            biləcəyiniz debet kartıdır.
          </p>
        </div>
        <div>
          <TabButton btnStatus={btnStatus} handleBtn={handleBtn} />
          <div className="mt-14">
            <div className="w-[396px] h-[250px] mb-5" />
            {/* <img src={card1} alt="card" className="w-[396px] mb-5" /> */}
            <SectionButton title="Bütün kartlar" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;
