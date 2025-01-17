import { useState } from "react";
import logo from "../../assets/logo.svg";
import BurgerBtn from "../BurgerBtn";
import Button from "../Button";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
const Header = () => {
  const [mobileMenuStatus, setMobileMenuStatus] = useState<boolean>(false);

  function handleClick(): void {
    setMobileMenuStatus(!mobileMenuStatus);
  }

  return (
    <header className="fixed h-[80px] inset-0 w-full z-30 bg-cdark tablet:border-b border-b-csecondary px-5 tablet:px-10 py-7 laptop:pt-0">
      <div className="max-w-[1040px] mx-auto w-full h-full ">
        <div className="flex justify-between items-center h-full w-full">
          <a href="/">
            <img src={logo} alt="logo" className="" />
          </a>
          <Navbar />
          <div className="flex gap-6 laptop:gap-0">
            <div className="tablet:block hidden">
              <Button title="Sifariş et" size="w-fit" />
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
