import TextSlider from "../TextSlider";
import DetailSlider from "../DetailSlider";
import RotatingImageOnScroll from "../RotatingImageOnScroll";
const IntroSection = () => {
  return (
    <section className="max-w-[1040px] mx-auto flex flex-col items-center">
      <h1 className="text-[64px] font-bold text-white flex gap-5">
        TamKart
        <TextSlider />
      </h1>
      <p className="text-3xl mt-3 text-white font-semibold">
        İstədiyin tam budur!
      </p>
      <div className="px-12 py-8 mt-16 bg-csecondary rounded-3xl flex gap-7 items-center">
        <DetailSlider />
        <div>
          <button className="py-6 px-7 whitespace-nowrap bg-cprimary font-semibold rounded-2xl text-cdark text-xl flex items-center justify-start group max-h-[72px] max-w-[2300px]">
            İndi sifariş et
            <span className="tablet:hidden tablet-large:block">
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
      </div>
      <div className="relative w-[510px] h-[316px] mt-[80px] group">
        <RotatingImageOnScroll />
        {/* <img
          src="https://tamkart.az/_next/static/media/tamdigi.988304eb.png"
          alt="card"
          className="w-[396px] absolute bottom-0 group-hover:-translate-y-16 group-hover:-translate-x-6 transition-all duration-500 z-10"
        /> */}
        {/* <img
          src="https://tamkart.az/_next/static/media/tampremiumvisa.fd5fe401.png"
          alt="card"
          className="w-[396px] absolute top-0 right-0 group-hover:translate-x-6 group-hover:translate-y-16 transition-all duration-500"
        /> */}
      </div>
    </section>
  );
};

export default IntroSection;
