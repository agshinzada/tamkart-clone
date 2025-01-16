import { Link } from "react-router-dom";

const MobileNav = ({
  status,
  handleClick,
}: {
  status: boolean;
  handleClick: () => void;
}) => {
  return (
    <div
      className={`absolute w-full min-h-screen bg-cdark top-20 left-0 ${
        status ? "block" : "hidden"
      }`}
    >
      <div className="text-[16px] text-white flex flex-col gap-4 items-center mt-9 tablet:hidden">
        <p>Özünə uyğun tamkartı sifariş et:</p>
        <div className="px-10 py-4 text-cprimary flex justify-between w-fit gap-12 border border-cthird rounded-xl font-semibold">
          <Link
            to={"/"}
            className="relative after:content-[''] after:absolute after:right-[-25px] after:top-1/2 after:-translate-y-1/2 after:w-[2px] after:h-[25px] after:bg-cthird"
          >
            Debet kart
          </Link>

          <Link to={"/"}>Kredit kart</Link>
        </div>
      </div>
      <ul className="flex flex-col gap-7 font-semibold text-3xl items-center mt-16 w-full text-white">
        <li>
          <Link
            to={"/cards"}
            className="hover:text-cprimary transition-colors duration-300"
            onClick={handleClick}
          >
            Kartlar
          </Link>
        </li>
        <li>
          <Link
            to={"/partners"}
            className="hover:text-cprimary transition-colors duration-300"
            onClick={handleClick}
          >
            Partnyorlar
          </Link>
        </li>
        <li>
          <Link
            to={"/campaigns"}
            className="hover:text-cprimary transition-colors duration-300"
            onClick={handleClick}
          >
            Kampaniyalar
          </Link>
        </li>
        <li>
          <Link
            to={"/faq"}
            className="hover:text-cprimary transition-colors duration-300"
            onClick={handleClick}
          >
            FAQ
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
