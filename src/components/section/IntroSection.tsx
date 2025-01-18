import TextSlider from "../TextSlider";
import DetailSlider from "../DetailSlider";
import RotatingImageOnScroll from "../RotatingImageOnScroll";
const IntroSection = () => {
  return (
    <section className="max-w-[1040px] mx-auto flex flex-col items-center px-4 tablet:px-10 laptop:px-0">
      <div className="tablet:hidden relative w-[270px] h-[168px] mobile:w-[510px] mobile:h-[250px] mb-10 mobile:mb-0 tablet:h-[316px]">
        <img
          src="https://tamkart.az/_next/static/media/tamdigi.988304eb.png"
          alt="card"
          className="w-[210px] mobile:w-[280px] absolute left-0 top-10 mobile:bottom-5 mobile:left-20 transition-all duration-500 z-10 laptop:hidden block"
        />
        <img
          src="https://tamkart.az/_next/static/media/tampremiumvisa.fd5fe401.png"
          alt="card"
          className="w-[210px] mobile:w-[280px] absolute right-0 top-0 mobile:top-0 mobile:right-20 transition-all duration-500 laptop:hidden block"
        />
      </div>
      <h1 className="text-[32px] tablet:text-[56px] laptop:text-[64px] font-bold text-white flex tablet:gap-5 gap-2 items-center">
        TamKart
        <TextSlider />
      </h1>
      <p className="text-lg laptop:text-3xl tablet:text-2xl mt-0 laptop:mt-3 text-white tablet:font-semibold">
        İstədiyin tam budur!
      </p>
      <div className="px-5 tablet:p-8 laptop:px-12 py-5 laptop:mt-16 mt-7 bg-csecondary rounded-xl laptop:rounded-3xl flex flex-col laptop:flex-row gap-7 items-center w-full max-w-[500px] tablet:max-w-full tablet:w-fit">
        <DetailSlider />
        <button className="tablet:py-6 py-3 px-7 whitespace-nowrap bg-cprimary font-semibold tablet:rounded-2xl rounded-xl text-cdark text-lg tablet:text-xl flex items-center laptop:justify-start justify-center group max-h-[72px] max-w-[2300px] laptop:w-fit w-full">
          İndi sifariş et
          <span className="hidden tablet:block">
            <div className="w-8 h-8 rounded-full center relative ml-3 ">
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
        </button>
      </div>
      <div className="relative w-[510px] h-[316px] mt-[80px] group hidden tablet:block">
        <RotatingImageOnScroll />
        <img
          src="https://tamkart.az/_next/static/media/tamdigi.988304eb.png"
          alt="card"
          className="w-[340px] absolute bottom-10 left-10 group-hover:-translate-y-16 group-hover:-translate-x-6 transition-all duration-500 z-10 laptop:hidden tablet:block hidden"
        />
        <img
          src="https://tamkart.az/_next/static/media/tampremiumvisa.fd5fe401.png"
          alt="card"
          className="w-[340px] absolute top-0 right-10 group-hover:translate-x-6 group-hover:translate-y-16 transition-all duration-500 laptop:hidden tablet:block hidden"
        />
      </div>
    </section>
  );
};

export default IntroSection;
