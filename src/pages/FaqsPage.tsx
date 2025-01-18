import { useEffect, useState } from "react";
import PageTitle from "./PageTitle";
import { FaqItemType } from "../types/faq";
import search from "../assets/search.svg";
import FaqItem from "../components/faq/FaqItem";

const FaqsPage = () => {
  const [data, setData] = useState<FaqItemType[]>([]);
  const [filteredData, setFiltered] = useState<FaqItemType[]>([]);

  async function getFaqs() {
    const response = await fetch(
      "https://json-server-seven-murex.vercel.app/tamkart/"
    );
    const data = await response.json();
    const faqs: FaqItemType[] = data.faqs;
    setData(faqs);
    setFiltered(faqs);
  }

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const filtered = data.filter(
      (item) =>
        item.answer
          .toLocaleLowerCase("az")
          .includes(event.target.value.toLocaleLowerCase("az")) ||
        item.question
          .toLocaleLowerCase("az")
          .includes(event.target.value.toLocaleLowerCase("az"))
    );
    setFiltered(filtered);
  }

  useEffect(() => {
    getFaqs();
  }, []);

  return (
    <section className="max-w-[1040px] mx-auto tablet:pt-32 pt-24 tablet:px-10 px-4 laptop:px-0">
      <div className="flex laptop:justify-between laptop:items-center flex-col laptop:flex-row tablet:gap-10 gap-6 laptop:gap-0">
        <PageTitle title="FAQ" />
        <div className="relative">
          <img src={search} alt="icon" className="absolute top-4 left-5" />
          <input
            type="text"
            className="min-w-[346px] w-full laptop:w-fit bg-csecondary py-[14px] pl-14 pr-4 text-white placeholder:text-white outline-none rounded-[100px]"
            placeholder="Axtar"
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-4">
        {filteredData.map((item, index) => (
          <FaqItem item={item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default FaqsPage;
