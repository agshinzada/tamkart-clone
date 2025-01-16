const Button = ({ title, size }: { title: string; size: string }) => {
  return (
    <button
      type="button"
      className={`px-6 py-3 text-lg h-fit bg-cprimary text-cdark rounded-[10px] font-semibold hover:bg-caltertativ transition-colors duration-300 ${size}`}
    >
      {title}
    </button>
  );
};

export default Button;
