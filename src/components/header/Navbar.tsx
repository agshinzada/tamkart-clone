import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="gap-8 font-semibold text-lg text-white hidden laptop:flex">
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
  );
};

export default Navbar;
