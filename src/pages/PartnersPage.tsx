import Button from "../components/Button";
import PageTitle from "./PageTitle";
import search from "../assets/search.svg";
import down from "../assets/down.svg";
import PartnerDetailItem from "../components/partner/PartnerDetailItem";
import { useEffect, useState } from "react";
import { PartnerDetail } from "../types/partner";

const PartnersPage = () => {
  const [data, setData] = useState<PartnerDetail[]>([]);

  async function getPartners() {
    const response = await fetch(
      "https://json-server-seven-murex.vercel.app/tamkart/"
    );
    const data = await response.json();
    setData(data.partners);
  }

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {}

  useEffect(() => {
    getPartners();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="max-w-[1040px] mx-auto pt-48">
      <div className="flex items-center justify-between">
        <PageTitle title="Partnyorlar" />
        <Button title="Partnyor ol" />
      </div>
      <div className="flex gap-4 items-center mt-12">
        <div className="relative">
          <img src={search} alt="icon" className="absolute top-4 left-5" />
          <input
            type="text"
            className="min-w-[346px] font-semibold bg-csecondary py-[14px] pl-14 pr-4 text-white placeholder:text-white outline-none rounded-[100px]"
            placeholder="Axtar"
            onChange={handleSearch}
          />
        </div>
        <div className="w-full flex gap-4">
          <div className="relative w-full">
            <img
              src={down}
              alt="icon"
              className="absolute top-2.5 right-5 w-8"
            />
            <select
              title="Kateqoriya"
              className="w-full min-w-[180px] font-bold bg-csecondary py-[14px]  px-5 text-white placeholder:text-white outline-none rounded-[100px] hover:bg-cprimary hover:text-black transition-all duration-150 appearance-none"
            >
              <option value="disabled" disabled selected>
                Kateqoriyalar
              </option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="relative">
            <img
              src={down}
              alt="icon"
              className="absolute top-2.5 right-4 w-8"
            />
            <select
              title="Taksitlər"
              className="w-full max-w-[180px] min-w-[180px] font-bold bg-csecondary py-[14px]  px-5 text-white placeholder:text-white outline-none rounded-[100px] hover:bg-cprimary hover:text-black transition-all duration-150 appearance-none"
            >
              <option value="disabled" disabled selected>
                Taksitlər
              </option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
        <button
          type="button"
          className=" flex items-center gap-2 px-4 py-3 text-sm h-fit w-fit group disabled:opacity-60 text-white rounded-lg font-semibold group-hover:text-black group-hover:bg-cprimary transition-all duration-300"
          // onClick={() => navigate(`${data.id}`)}
          disabled
        >
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-cprimary group-disabled:fill-cthird"
          >
            <path
              d="M4.10806 3.10679C7.36243 -0.147577 12.6388 -0.147577 15.8932 3.10679C16.5583 3.77188 17.0843 4.3287 17.5006 4.79405V2.33268C17.5006 1.87245 17.8737 1.49935 18.334 1.49935C18.7942 1.49935 19.1673 1.87245 19.1673 2.33268V7.33268C19.1673 7.79292 18.7942 8.16602 18.334 8.16602H13.334C12.8737 8.16602 12.5007 7.79292 12.5007 7.33268C12.5007 6.87245 12.8737 6.49935 13.334 6.49935H16.772C16.3452 5.98502 15.6964 5.26706 14.7147 4.2853C12.1112 1.68181 7.89007 1.68181 5.28657 4.2853C4.36325 5.20863 3.76844 6.33316 3.49982 7.51707C3.39798 7.9659 2.95158 8.2472 2.50275 8.14536C2.05392 8.04353 1.77263 7.59712 1.87446 7.14829C2.21062 5.66674 2.95593 4.25892 4.10806 3.10679Z"
              // fill="#75FA56"
            ></path>
            <path
              d="M16.5014 10.4816C16.6033 10.0328 17.0497 9.75148 17.4985 9.85332C17.9473 9.95515 18.2286 10.4016 18.1268 10.8504C17.7906 12.3319 17.0453 13.7398 15.8932 14.8919C12.6388 18.1463 7.36245 18.1463 4.10808 14.8919C3.44326 14.2271 2.91725 13.6703 2.50065 13.2047V15.666C2.50065 16.1263 2.12755 16.4993 1.66732 16.4993C1.20708 16.4993 0.833984 16.1263 0.833984 15.666V10.666C0.833984 10.2058 1.20708 9.83268 1.66732 9.83268H6.66732C7.12755 9.83268 7.50065 10.2058 7.50065 10.666C7.50065 11.1263 7.12755 11.4993 6.66732 11.4993H3.22923C3.65551 12.013 4.30416 12.7309 5.28659 13.7134C7.89008 16.3169 12.1112 16.3169 14.7147 13.7134C15.638 12.79 16.2328 11.6655 16.5014 10.4816Z"
              // fill="#75FA56"
            ></path>
          </svg>
          Təmizlə
        </button>
      </div>
      <p className="text-[28px] text-white font-bold mt-12">Top partnyorlar</p>
      <div className="grid grid-cols-4 gap-7 mt-10">
        {data.map((item, index) => (
          <PartnerDetailItem data={item} type="page" key={index} />
        ))}
      </div>
      <p className="text-[28px] text-white font-bold mt-10">
        Bütün partnyorlar
      </p>
      <div className="grid grid-cols-4 gap-7 mt-10">
        {data.map((item, index) => (
          <PartnerDetailItem data={item} type="page" key={index} />
        ))}
      </div>
    </section>
  );
};

export default PartnersPage;
