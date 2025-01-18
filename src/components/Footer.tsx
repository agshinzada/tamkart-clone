import abb from "../assets/abb-logo.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import powered from "../assets/powered.svg";
const Footer = () => {
  return (
    <div className="w-full z-10 bg-cdark border-t border-t-csecondary py-4 tablet:mt-32 mt-16 tablet:px-10 px-4 laptop:px-0">
      <div className="max-w-[1040px] mx-auto w-full h-full">
        <div className="flex items-center justify-between w-full h-full">
          <a href="https://tamkart.az/">
            <img src={abb} alt="abb" />
          </a>
          <div className="tablet:flex gap-2 items-center hidden">
            <p className="opacity-50">ABB Bank ⓒ {new Date().getFullYear()} </p>
            <img src={powered} className="w-24" alt="agshin.dev" />
          </div>

          <div className="flex gap-8 items-center">
            <a
              href="https://www.facebook.com/tamkart.az/"
              target="_blank"
              rel="noopener"
            >
              <img src={facebook} alt="abb" />
            </a>
            <a
              href="https://www.instagram.com/tamkart.az/"
              target="_blank"
              rel="noopener"
            >
              <img src={instagram} alt="abb" />
            </a>
          </div>
        </div>
        <div className="flex gap-2 items-center justify-center tablet:hidden mt-3">
          <p className="opacity-50">ABB Bank ⓒ {new Date().getFullYear()} </p>
          <a href="https://agshin.dev/"></a>
          <img src={powered} className="w-24" alt="agshin.dev" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
