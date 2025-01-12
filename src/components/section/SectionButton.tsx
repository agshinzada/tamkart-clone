import { useNavigate } from "react-router-dom";

const SectionButton = ({ title, link }: { title: string; link: string }) => {
  const navigate = useNavigate();
  return (
    <button
      className="py-6 px-0 whitespace-nowrap font-semibold rounded-2xl text-white text-[22px] flex items-center justify-start group max-h-[72px] max-w-[2300px]"
      onClick={() => navigate(link)}
    >
      {title}
      <span className="">
        <div className="w-8 h-8 rounded-full center relative ">
          <span
            className="absolute top-1/2 left-4 -translate-x-1/2 -translate-y-1/2 group-hover:left-7 transition-all duration-500 z-10"
            data-test-id="span"
          >
            <svg
              width="17"
              height="15"
              viewBox="0 0 17 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="z-20 fill-cprimary"
            >
              <path
                d="M6.264 0H9.72L16.92 7.2L9.72 14.4H6.264L12.216 8.448H0V5.952H12.216L6.264 0Z"
                // fill="#000"
              ></path>
            </svg>
          </span>
          <div className="w-8 h-8 rounded-full center ml-3 bg-white/10"></div>
        </div>
      </span>
    </button>
  );
};

export default SectionButton;
