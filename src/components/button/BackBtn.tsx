import { useNavigate } from "react-router-dom";
import back from "../../assets/back.svg";

const BackBtn = () => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="flex gap-2 items-center bg-cdark border border-csecondary rounded-3xl px-6 py-2.5 text-[16px] h-fit text-white font-semibold hover:opacity-70 transition-all duration-300"
      onClick={() => navigate(-1)}
    >
      <img src={back} alt="back" />
      Geri
    </button>
  );
};

export default BackBtn;
