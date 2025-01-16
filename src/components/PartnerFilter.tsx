import search from "../assets/search.svg";
import down from "../assets/down.svg";
import ClearBtn from "./ClearBtn";

const PartnerFilter = () => {
  return (
    <div className="flex laptop:gap-4 gap-6 laptop:items-center mt-12 flex-col laptop:flex-row">
      <div className="relative">
        <img src={search} alt="icon" className="absolute top-4 left-5" />
        <input
          type="text"
          className="min-w-[346px] laptop:w-fit w-full font-semibold bg-csecondary py-[14px] pl-14 pr-4 text-white placeholder:text-white outline-none rounded-[100px]"
          placeholder="Axtar"
          // onChange={handleSearch}
        />
      </div>
      <div className="w-full flex gap-4">
        <div className="relative w-1/2 laptop:w-full">
          <img src={down} alt="icon" className="absolute top-2.5 right-5 w-8" />
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
        <div className="relative w-1/2 laptop:w-fit">
          <img src={down} alt="icon" className="absolute top-2.5 right-4 w-8" />
          <select
            title="Taksitlər"
            className="w-full laptop:max-w-[180px] laptop:min-w-[180px] font-bold bg-csecondary py-[14px]  px-5 text-white placeholder:text-white outline-none rounded-[100px] hover:bg-cprimary hover:text-black transition-all duration-150 appearance-none"
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
      <span className="hidden laptop:block">
        <ClearBtn />
      </span>
    </div>
  );
};

export default PartnerFilter;
