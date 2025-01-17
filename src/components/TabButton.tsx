import { TabButtonTypes } from "../types/button";

type HandleBtnFunction = (btnStatus: {
  btn1: boolean;
  btn2: boolean;
  type: string;
}) => void;

const TabButton = ({
  btnStatus,
  handleBtn,
  size,
  maxWidth,
}: {
  btnStatus: TabButtonTypes;
  handleBtn: HandleBtnFunction;
  size: string;
  maxWidth?: string;
}) => {
  return (
    <div className={`${maxWidth} w-full`}>
      <div
        className={`bg-csecondary  ${
          size === "small" ? "p-2" : "p-2 "
        } flex justify-between rounded-xl`}
      >
        <button
          className={`${
            size === "small" ? "w-1/2 h-8 rounded-lg" : "w-fit rounded-xl"
          } h-12  font-semibold flex items-center justify-center text-lg px-7 transition-all duration-300 ${
            btnStatus.btn1
              ? "bg-cprimary text-black"
              : "text-white opacity-50 hover:opacity-80"
          }`}
          onClick={() => handleBtn({ btn1: true, btn2: false, type: "debit" })}
        >
          Debet
        </button>
        <button
          className={`${
            size === "small" ? "w-1/2 h-8 rounded-lg" : "w-fit rounded-xl"
          } h-12 font-semibold flex items-center justify-center text-lg px-7 transition-all duration-300 ${
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
