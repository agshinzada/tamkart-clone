const Button = ({ title }: { title: string }) => {
  return (
    <button
      type="button"
      className="px-6 py-3 text-lg h-fit bg-cprimary text-cdark rounded-lg font-semibold hover:bg-caltertativ transition-colors duration-300"
    >
      {title}
    </button>
  );
};

export default Button;
