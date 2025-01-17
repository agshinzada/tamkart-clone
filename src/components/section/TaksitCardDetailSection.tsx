import card from "../../assets/card3.webp";
const TaksitCardDetailSection = () => {
  return (
    <section className="max-w-[1040px] mx-auto flex flex-col items-start laptop:mt-32 tablet:mt-24 mt-32 laptop:px-0 tablet:px-10 px-4">
      <div className="flex items-center tablet:gap-8 gap-5 h-[286px] w-full laptop:flex-row flex-col">
        <div className="relative laptop:w-[75%] w-full bg-csecondary laptop:p-12 tablet:p-9 p-5 justify-between rounded-xl tablet:rounded-3xl flex items-center">
          <div className="text-white w-full tablet:w-fit mt-28 tablet:mt-0">
            <p className="text-2xl tablet:text-[32px] font-bold leading-10">
              TamKart <span className="text-cprimary">taksit</span>
              <br /> rahatlığınızı düşünür
            </p>
            <ul className="text-sm tablet:text-[16px] flex flex-col gap-2 mt-7">
              <li className="flex justify-between items-center">
                <span className="opacity-60">Hər ödənişdən</span>{" "}
                <span className="font-semibold">10%-dək kəşbek</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="opacity-60">Kredit limiti</span>{" "}
                <span className="font-semibold">300 - 30 000 AZN</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="opacity-60">Taksitlər</span>{" "}
                <span className="font-semibold">24 ayadək</span>
              </li>
            </ul>
          </div>
          <img
            src={card}
            alt="tamkart"
            width={280}
            className="absolute -top-80 tablet:hidden inset-0 m-auto"
          />
          <img
            src={card}
            alt="tamkart"
            width={280}
            className="hidden tablet:block"
          />
        </div>
        <button className="laptop:w-[25%] w-full flex flex-col gap-2 laptop:py-8 tablet:py-5 py-2 px-8 whitespace-nowrap bg-cprimary font-semibold rounded-xl tablet:rounded-2xl laptop:rounded-3xl text-cdark text-xl laptop:items-start items-center justify-start group h-full max-w-[2300px] hover:bg-caltertativ">
          <span className="text-lg tablet:text-[22px]">İndi sifariş ver</span>
          <span className="hidden laptop:block">
            <div className="w-8 h-8 rounded-full center relative">
              <span
                className="absolute top-1/2 left-4 -translate-x-1/2 -translate-y-1/2 group-hover:left-7 transition-all duration-500 z-10"
                data-test-id="span"
              >
                <svg
                  width="17"
                  height="15"
                  viewBox="0 0 17 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="z-20"
                >
                  <path
                    d="M6.264 0H9.72L16.92 7.2L9.72 14.4H6.264L12.216 8.448H0V5.952H12.216L6.264 0Z"
                    fill="#000"
                  ></path>
                </svg>
              </span>
              <div className="w-8 h-8 rounded-full center ml-3 bg-black opacity-20"></div>
            </div>
          </span>
          <p className="text-wrap font-medium text-left mt-8 text-[18px] hidden laptop:block">
            Cəmi 3 addımda TamKart kredit kartı sifariş edin
          </p>
        </button>
      </div>
    </section>
  );
};

export default TaksitCardDetailSection;
