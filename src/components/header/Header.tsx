import { useState } from "react";
import logo from "../../assets/logo.svg";
import BurgerBtn from "../BurgerBtn";
import Button from "../Button";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
const Header = () => {
  const [mobileMenuStatus, setMobileMenuStatus] = useState<boolean>(false);
  const [chooseOrderCard, setChooseOrderCard] = useState<boolean>(false);

  function handleClick(): void {
    setMobileMenuStatus(!mobileMenuStatus);
  }

  function handleOrderButtonClick() {
    setChooseOrderCard(!chooseOrderCard);
  }

  return (
    <header className="fixed h-[80px] inset-0 w-full z-30 bg-cdark tablet:border-b border-b-csecondary px-5 tablet:px-10 py-7 ">
      <div className="max-w-[1040px] mx-auto w-full h-full ">
        <div className="flex justify-between items-center h-full w-full">
          <a href="/">
            <img src={logo} alt="logo" className="" />
          </a>
          <Navbar />
          <div className="flex gap-6 laptop:gap-0 relative">
            <div className="tablet:block hidden">
              <Button
                title="Sifariş et"
                size="w-fit"
                handleClick={handleOrderButtonClick}
              />
              {chooseOrderCard ? (
                <div className="bg-csecondary absolute top-[70px] right-[20px] flex-col rounded-lg hidden tablet:flex">
                  <div className="absolute w-0 h-0 -top-3 right-5 border-l-[15px] border-l-transparent border-b-[20px] border-b-csecondary border-r-[15px] border-r-transparent"></div>
                  <a
                    href="/"
                    className="px-6 py-3.5 hover:bg-cprimary hover:text-black transition-colors duration-200 text-left min-w-[180px] font-semibold rounded-t-lg z-10"
                  >
                    Debet
                  </a>
                  <a
                    href="/"
                    className="px-6 py-3.5 hover:bg-cprimary hover:text-black transition-colors duration-200 text-left min-w-[180px] font-semibold rounded-b-lg z-10"
                  >
                    Kredit
                  </a>
                </div>
              ) : (
                ""
              )}
            </div>
            <BurgerBtn handleClick={handleClick} status={mobileMenuStatus} />
          </div>
        </div>
      </div>
      <MobileNav status={mobileMenuStatus} handleClick={handleClick} />
    </header>
  );
};

export default Header;
