import { TabButtonTypes } from "../types/button";

type HandleBtnFunction = (btnStatus: {
  btn1: boolean;
  btn2: boolean;
  type: string;
}) => void;

const TabButton = ({
  btnStatus,
  handleBtn,
}: {
  btnStatus: TabButtonTypes;
  handleBtn: HandleBtnFunction;
}) => {
  return (
    <div className="max-w-[232px]">
      <div className="bg-csecondary rounded-xl p-2 flex justify-between">
        <button
          className={`h-12 rounded-xl font-semibold flex items-center justify-center text-lg px-7 transition-all duration-300 ${
            btnStatus.btn1
              ? "bg-cprimary text-black"
              : "text-white opacity-50 hover:opacity-80"
          }`}
          onClick={() => handleBtn({ btn1: true, btn2: false, type: "debit" })}
        >
          Debet
        </button>
        <button
          className={`h-12 rounded-xl font-semibold flex items-center justify-center text-lg px-7 transition-all duration-300 ${
            btnStatus.btn2
              ? "bg-cprimary text-black"
              : "text-white opacity-50 hover:opacity-80"
          }`}
          onClick={() => handleBtn({ btn1: false, btn2: true, type: "credit" })}
        >
          Kredit
        </button>
      </div>
    </div>
  );
};

export default TabButton;
