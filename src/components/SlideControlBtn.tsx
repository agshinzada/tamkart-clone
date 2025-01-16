const SlideControlBtn = () => {
  return (
    <div className="flex gap-4">
      <span
        className="rounded-full p-4 bg-csecondary rotate-180 cursor-pointer group"
        data-test-id="span"
      >
        <svg
          width="18"
          //   height="15"
          viewBox="0 0 18 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="z-20 group-hover:translate-x-2 transition-all duration-150"
        >
          <path
            d="M6.264 0H9.72L16.92 7.2L9.72 14.4H6.264L12.216 8.448H0V5.952H12.216L6.264 0Z"
            fill="#76FA57"
          ></path>
        </svg>
      </span>
      <span
        className="rounded-full p-4 bg-cprimary cursor-pointer group"
        data-test-id="span"
      >
        <svg
          width="18"
          //   height="15"
          viewBox="0 0 18 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="z-20 group-hover:translate-x-2 transition-all duration-150"
        >
          <path
            d="M6.264 0H9.72L16.92 7.2L9.72 14.4H6.264L12.216 8.448H0V5.952H12.216L6.264 0Z"
            fill="#000"
          ></path>
        </svg>
      </span>
    </div>
  );
};

export default SlideControlBtn;
