import { CardItemTypes } from "../../types/card";

const CardInfo = ({ cardData }: { cardData: CardItemTypes }) => {
  return (
    <div className="tablet:py-12 tablet:px-16 p-8 rounded-3xl bg-csecondary text-white flex flex-col gap-10 tablet:mt-16 mt-5">
      <p className="text-2xl tablet:text-[40px] font-bold">
        <span className="text-cprimary">
          {cardData?.type === "debit" ? "Debet" : "Kredit"} kart
        </span>{" "}
        üzrə imkanlar
      </p>
      <ul className="font-semibold flex flex-col gap-4 tablet:text-[16px] text-sm">
        <li className="before:content-[''] before:block before:min-w-4 before:h-0.5 before:bg-cprimary before:mr-4 flex items-center">
          <p>
            Tam DigiCard-ı həm fiziki kart, həm də rəqəmsal formada əldə edə
            bilərsiniz.
          </p>
        </li>
        <li className="before:content-[''] before:block before:min-w-4 before:h-0.5 before:bg-cprimary before:mr-4 flex items-center">
          <p>
            İkiqat "ƏDV geri al" (Fayda Max-la "Qızıl” mərhələyə çatıb "2X ƏDV
            geri al" qazanın)
          </p>
        </li>
        <li className="before:content-[''] before:block before:min-w-4 before:h-0.5 before:bg-cprimary before:mr-4 flex items-center">
          <p>“Faydalı keşbek”</p>
        </li>
        <li className="before:content-[''] before:block before:min-w-4 before:h-0.5 before:bg-cprimary before:mr-4 flex items-center">
          <p>
            ABB mobile-da qeydiyyatdan keçirilmiş kartdakı qalığa illik 7%
            hesablanıb ayın sonunda kart hesabına köçürülür.
          </p>
        </li>
        <li className="before:content-[''] before:block before:min-w-4 before:h-0.5 before:bg-cprimary before:mr-4 flex items-center">
          <p>QayğıCash klubuna üzvlük</p>
        </li>
        <li className="before:content-[''] before:block before:min-w-4 before:h-0.5 before:bg-cprimary before:mr-4 flex items-center w-full">
          <p>
            a) Tam DigiCard MasterCard Debet ilə ABB mobile-da Faydalı keşbek
            paketlərindən birini seçərək, paketdaxili kateqoriyalardan 10%-dək
            keşbek qazanacaqsınız.; b) Faydalı keşbek üçün aylıq limit 300
            AZN-dir. Topladığınız Faydalı keşbek-lər anında ABB mobile-da keşbek
            balansınıza köçürüləcək.
          </p>
        </li>
        <li className="before:content-[''] before:block before:min-w-4 before:h-0.5 before:bg-cprimary before:mr-4 flex items-center">
          <p>
            Qalığa faiz kartdakı vəsaitin minimum 200 AZN-dən maksimum 2 500
            AZN-dək hissəsinə və yalnız AZN valyutalı kartlarda hesablanır.
          </p>
        </li>
        <li className="before:content-[''] before:block before:min-w-4 before:h-0.5 before:bg-cprimary before:mr-4 flex items-center">
          <p>
            Ölkədaxili bütün ATM-lərdə nağdlaşdırma və bütün kartlara köçürmə
            limiti birlikdə aylıq 7 000 AZN-dək pulsuzdur, 7 000 AZN-dən yuxarı
            isə 1% (min. 1 AZN və ya ekv.) komissiya tutulur.
          </p>
        </li>
      </ul>
      <button
        type="button"
        className="flex gap-2 items-center mt-5 bg-cthird rounded-lg w-fit px-6 py-3 group text-lg h-fit text-white font-semibold hover:bg-cprimary hover:text-black transition-all duration-300"
      >
        <svg
          width="20"
          height="22"
          viewBox="0 0 20 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="group-hover:fill-cdark"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.7587 3.88855e-07H12.2413C13.0463 -1.15136e-05 13.7106 -2.13385e-05 14.2518 0.0441953C14.8139 0.0901205 15.3306 0.188685 15.816 0.435976C16.5686 0.819469 17.1805 1.43139 17.564 2.18404C17.8113 2.66938 17.9099 3.18608 17.9558 3.74818C18 4.28937 18 4.95372 18 5.75868V10.9742C18 11.5239 18 11.7987 17.9362 11.9126C17.8598 12.0488 17.83 12.0749 17.6849 12.1327C17.5636 12.1809 17.1753 12.1294 16.3987 12.0263C16.2682 12.0089 16.1352 12 16 12C14.3431 12 13 13.3431 13 15C12.2322 15 11.4645 15.2929 10.8787 15.8787C9.70711 17.0503 9.70711 18.9497 10.8787 20.1213L11.3968 20.6394C11.8232 21.0659 12.0364 21.2791 12.0509 21.4629C12.0635 21.6223 11.9988 21.7785 11.8773 21.8823C11.7371 22.0021 11.4359 22.0023 10.8334 22.0026C9.90034 22.003 8.96724 22.0022 8.03414 22.0013C7.27565 22.0007 6.51716 22 5.75868 22C4.95372 22 4.28937 22 3.74818 21.9558C3.18608 21.9099 2.66938 21.8113 2.18404 21.564C1.43139 21.1805 0.819469 20.5686 0.435976 19.816C0.188685 19.3306 0.0901204 18.8139 0.0441952 18.2518C-2.15396e-05 17.7106 -1.16214e-05 17.0463 3.94415e-07 16.2413V5.75869C-1.16214e-05 4.95373 -2.15396e-05 4.28936 0.0441952 3.74818C0.0901204 3.18608 0.188685 2.66938 0.435976 2.18404C0.819469 1.43139 1.43139 0.819469 2.18404 0.435976C2.66938 0.188685 3.18608 0.0901205 3.74818 0.0441953C4.28936 -2.13385e-05 4.95375 -1.15136e-05 5.7587 3.88855e-07ZM4 4C3.44772 4 3 4.44772 3 5C3 5.55229 3.44772 6 4 6H13C13.5523 6 14 5.55229 14 5C14 4.44772 13.5523 4 13 4H4ZM3 9C3 8.44771 3.44772 8 4 8H10C10.5523 8 11 8.44771 11 9C11 9.55229 10.5523 10 10 10H4C3.44772 10 3 9.55229 3 9ZM3 13C3 12.4477 3.44772 12 4 12H6C6.55229 12 7 12.4477 7 13C7 13.5523 6.55229 14 6 14H4C3.44772 14 3 13.5523 3 13Z"
            fill="currentColor"
          ></path>
          <path
            d="M16 14C16.5523 14 17 14.4477 17 15V18.5858L18.2929 17.2929C18.6834 16.9024 19.3166 16.9024 19.7071 17.2929C20.0976 17.6834 20.0976 18.3166 19.7071 18.7071L16.7071 21.7071C16.5196 21.8946 16.2652 22 16 22C15.7348 22 15.4804 21.8946 15.2929 21.7071L12.2929 18.7071C11.9024 18.3166 11.9024 17.6834 12.2929 17.2929C12.6834 16.9024 13.3166 16.9024 13.7071 17.2929L15 18.5858V15C15 14.4477 15.4477 14 16 14Z"
            fill="currentColor"
          ></path>
        </svg>
        Bütün tariflər
      </button>
    </div>
  );
};

export default CardInfo;
