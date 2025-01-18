import parse from "html-react-parser";
import { useEffect, useState } from "react";
import down from "../../assets/down.svg";
const FaqItem = ({ item }: { item: { question: string; answer: string } }) => {
  const [open, setOpen] = useState(false);
  const [detailStatus, setDetailStatus] = useState(false);
  function handleFaq() {
    if (open) {
      return;
    } else {
      setDetailStatus(!detailStatus);
    }
  }

  useEffect(() => {
    if (window.innerWidth > 768) {
      setOpen(true);
    }
  }, []);
  return (
    <div
      className="tablet:p-8 p-4 tablet:rounded-3xl rounded-xl bg-csecondary text-white flex flex-col gap-4 relative"
      onClick={handleFaq}
    >
      <h3 className="font-bold tablet:text-xl text-[16px]">{item.question}</h3>
      {detailStatus ? (
        <p className="opacity-80 text-[16px]">{parse(item.answer)}</p>
      ) : (
        ""
      )}
      {open ? (
        <p className="opacity-80 text-[16px]">{parse(item.answer)}</p>
      ) : (
        ""
      )}
      <img
        src={down}
        alt="down"
        className={`tablet:hidden w-6 absolute right-2 ${
          detailStatus ? "rotate-180" : ""
        }`}
      />
    </div>
  );
};

export default FaqItem;
