import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import Button from "./Button";
const Header = () => {
  return (
    <header className="fixed h-[80px] inset-0 w-full z-30 bg-cdark border-b border-b-csecondary">
      <div className="max-w-[1040px] mx-auto w-full h-full ">
        <div className="flex justify-between items-center h-full w-full">
          <a href="/">
            <img src={logo} alt="logo" className="" />
          </a>
          <ul className="flex gap-8 font-semibold text-lg text-white">
            <li>
              <NavLink
                to={"/cards"}
                className="hover:text-cprimary transition-colors duration-300"
              >
                Kartlar
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/partners"}
                className="hover:text-cprimary transition-colors duration-300"
              >
                Partnyorlar
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/campaigns"}
                className="hover:text-cprimary transition-colors duration-300"
              >
                Kampaniyalar
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/faq"}
                className="hover:text-cprimary transition-colors duration-300"
              >
                FAQ
              </NavLink>
            </li>
          </ul>
          <Button title="Sifariş et" />
        </div>
      </div>
    </header>
  );
};

export default Header;
