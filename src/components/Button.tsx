const Button = ({
  title,
  size,
  handleClick,
}: {
  title: string;
  size: string;
  handleClick?: () => void;
}) => {
  return (
    <button
      type="button"
      className={`px-6 py-3 text-lg h-fit bg-cprimary text-cdark rounded-[10px] font-semibold hover:bg-caltertativ transition-colors duration-300 ${size}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default Button;
