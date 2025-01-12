import { useEffect, useState } from "react";
import PageTitle from "./PageTitle";
import parse from "html-react-parser";
import { FaqItemType } from "../types/faq";
import search from "../assets/search.svg";

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
    <section className="max-w-[1040px] mx-auto pt-32">
      <div className="flex justify-between items-center">
        <PageTitle title="FAQ" />
        <div className="relative">
          <img src={search} alt="icon" className="absolute top-4 left-5" />
          <input
            type="text"
            className="min-w-[346px] bg-csecondary py-[14px] pl-14 pr-4 text-white placeholder:text-white outline-none rounded-[100px]"
            placeholder="Axtar"
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-4">
        {filteredData.map((item, index) => (
          <div
            className="p-8 rounded-3xl bg-csecondary text-white flex flex-col gap-4"
            key={index}
          >
            <h3 className="font-bold text-xl">{item.question}</h3>
            <p className="opacity-80 text-[16px]">{parse(item.answer)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqsPage;
