import { Link, useParams, useSearchParams } from "react-router-dom";
import circle from "../assets/circle.svg";
import Button from "../components/Button";
import serviceIcon1 from "../assets/serviceIcon1.svg";
import serviceIcon2 from "../assets/serviceIcon2.svg";
import serviceIcon3 from "../assets/serviceIcon3.svg";
import CardServiceItem from "../components/services/CardServiceItem";
import SectionTitle from "../components/section/SectionTitle";
import CardServices from "../components/services/CardServices";
import icon1 from "../assets/services/1.svg";
import icon2 from "../assets/services/2.svg";
import icon3 from "../assets/services/3.svg";
import icon4 from "../assets/services/4.svg";
import icon5 from "../assets/services/5.svg";
import { useEffect, useState } from "react";
import { CardItemTypes } from "../types/card";
import BackBtn from "../components/BackBtn";

const services = [
  {
    title: "Onlayn PIN təyin edilməsi",
    description:
      "Kartınızının PİN kodunu ABB mobile-da asanlıqla təyin edib kartınızı aktivləşdirin.",
    icon: icon1,
  },
  {
    title: "3D Secure",
    description:
      "3D Secure” ilə onlayn ödənişlərinizi təhlükəsiz həyata keçirin. Xidmət pulsuzdur.",
    icon: icon2,
  },
  {
    title: "NFC əməliyyatlar",
    description:
      "Kart, ödəniş üzükləri və Apple Pay/ Google Pay-i dəstəkləyən cihazlarınızla ATM və POS terminallarda təmassız ödənişlər edə bilərsiniz.",
    icon: icon3,
  },
  {
    title: "SMS xəbərdarlıq",
    description:
      "Kartınızla həyata keçirdiyiniz bütün əməliyyatlar üzrə SMS məlumat almaq üçün xidməti ABB mobile-da aktivləşdirin. ",
    icon: icon4,
  },
  {
    title: "Şəxsi kabinet",
    description:
      "ABB mobile-da Şəxsi kabinet bölməsindən taksit hesabınıza asanlıqla nəzarət edə, ödənişlərinizi rahatlıqla həyata keçirə bilərsiniz.",
    icon: icon5,
  },
];

const CardDetailPage = () => {
  const params = useParams();
  const [searchParam] = useSearchParams();
  const [cardData, setCardData] = useState<CardItemTypes>();
  const [relatedCards, setRelatedCards] = useState<CardItemTypes[]>([]);

  async function getCard() {
    const response = await fetch(
      "https://json-server-seven-murex.vercel.app/tamkart/"
    );
    const data = await response.json();
    const findCard = data.cards.find(
      (item: CardItemTypes) => item.id === parseInt(params.id!)
    );
    const related = data.cards.filter(
      (item: CardItemTypes) =>
        item.type === searchParam.get("type") &&
        item.id !== parseInt(params.id!)
    );
    setRelatedCards(related);
    setCardData(findCard);
  }

  useEffect(() => {
    getCard();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [params]);

  return (
    <section className="pt-36">
      <div className="max-w-[1040px] mx-auto ">
        <BackBtn />
        <div className="flex justify-between mt-24 items-center">
          <div className="w-[62%] flex flex-col gap-7">
            <div className="flex flex-col gap-2">
              <h4 className="text-[48px] text-white font-bold">
                {cardData?.name}
              </h4>
              <p className="text-lg text-white opacity-60">
                {cardData?.summary}
              </p>
            </div>
            <div className="flex gap-10 items-center text-white">
              <div className="flex flex-col justify-start">
                <h4 className="text-[22px] font-semibold">10%-dək</h4>
                <p className="text-[16px] opacity-50">Keşbək</p>
              </div>
              <div className="flex flex-col justify-start">
                <h4 className="text-[22px] font-semibold text-cprimary">
                  0 AZN
                </h4>
                <p className="text-[16px] opacity-50">Qiymət</p>
              </div>
              <div className="flex flex-col justify-start">
                <h4 className="text-[22px] font-semibold">AZN/USD/EUR</h4>
                <p className="text-[16px] opacity-50">Valyuta</p>
              </div>
              <div className="flex flex-col justify-start">
                <h4 className="text-[22px] font-semibold">5 il</h4>
                <p className="text-[16px] opacity-50">Xidmət müddəti</p>
              </div>
            </div>
            <div className="w-fit">
              <Button title="İndi sifariş et" />
            </div>
          </div>
          <div className="w-[380px] relative">
            <img src={circle} alt="circle" />
            <img
              src={cardData?.image}
              alt="card"
              className="absolute -top-12 right-0 w-[309px]"
            />
          </div>
        </div>
        <div className="flex justify-between mt-28 items-stretch">
          <CardServiceItem
            data={{
              title: "İkiqat “ƏDV geri al”",
              description: `Fayda Max-la "Qızıl” mərhələyə çatıb "2X ƏDV geri al" qazanın`,
              icon: serviceIcon1,
            }}
            type="page"
          />
          <CardServiceItem
            data={{
              title: "10%-dək Faydalı keşbek",
              description: `Hər ay seçilmiş paket üzrə müxtəlif kateqoriyalarda 10%-dək keşbek`,
              icon: serviceIcon2,
            }}
            type="page"
          />
          <CardServiceItem
            data={{
              title: "QayğıCash klubu",
              description: `Tərəfdaş mağazalarda ödənişlər zamanı 20%-dək keşbek`,
              icon: serviceIcon3,
            }}
            type="page"
          />
        </div>
        <div className="py-12 px-16 rounded-3xl bg-csecondary text-white flex flex-col gap-10 mt-24">
          <p className="text-[40px] font-bold">
            <span className="text-cprimary">
              {cardData?.type === "debit" ? "Debet" : "Kredit"} kart
            </span>{" "}
            üzrə imkanlar
          </p>
          <ul className="font-semibold flex flex-col gap-4">
            <li className="before:content-[''] before:block before:min-w-4 before:h-0.5 before:bg-cprimary before:mr-4 flex items-center">
              <p>
                Tam DigiCard-ı həm fiziki kart, həm də rəqəmsal formada əldə edə
                bilərsiniz.
              </p>
            </li>
            <li className="before:content-[''] before:block before:min-w-4 before:h-0.5 before:bg-cprimary before:mr-4 flex items-center">
              <p>
                İkiqat "ƏDV geri al" (Fayda Max-la "Qızıl” mərhələyə çatıb "2X
                ƏDV geri al" qazanın)
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
                a) Tam DigiCard MasterCard Debet ilə ABB mobile-da Faydalı
                keşbek paketlərindən birini seçərək, paketdaxili
                kateqoriyalardan 10%-dək keşbek qazanacaqsınız.; b) Faydalı
                keşbek üçün aylıq limit 300 AZN-dir. Topladığınız Faydalı
                keşbek-lər anında ABB mobile-da keşbek balansınıza köçürüləcək.
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
                Ölkədaxili bütün ATM-lərdə nağdlaşdırma və bütün kartlara
                köçürmə limiti birlikdə aylıq 7 000 AZN-dək pulsuzdur, 7 000
                AZN-dən yuxarı isə 1% (min. 1 AZN və ya ekv.) komissiya tutulur.
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
        <div className="mt-24">
          <div className="flex items-center justify-between">
            <SectionTitle title="Kart üzrə xidmətlər" />
            <div className="flex gap-4">
              <span
                className="rounded-full p-4 bg-csecondary rotate-180 cursor-pointer"
                data-test-id="span"
              >
                <svg
                  width="18"
                  //   height="15"
                  viewBox="0 0 18 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="z-20"
                >
                  <path
                    d="M6.264 0H9.72L16.92 7.2L9.72 14.4H6.264L12.216 8.448H0V5.952H12.216L6.264 0Z"
                    fill="#76FA57"
                  ></path>
                </svg>
              </span>
              <span
                className="rounded-full p-4 bg-cprimary cursor-pointer"
                data-test-id="span"
              >
                <svg
                  width="18"
                  //   height="15"
                  viewBox="0 0 18 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="z-20"
                >
                  <path
                    d="M6.264 0H9.72L16.92 7.2L9.72 14.4H6.264L12.216 8.448H0V5.952H12.216L6.264 0Z"
                    fill="#000"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <CardServices data={services} />
      <div className="max-w-[1040px] mx-auto mt-24">
        <SectionTitle
          title={`Digər ${
            cardData?.type === "debit" ? "debet" : "kredit"
          }  kartlar`}
        />
        <div className="flex gap-4 items-center mt-10">
          {relatedCards.slice(0, 3).map((item, index) => (
            <Link to={`/cards/${item.id}?type=${item.type}`} key={index}>
              <div>
                <img src={item.image} alt="card" className="h-[186px]" />
                <h5 className="text-2xl font-semibold text-white mt-5">
                  {item.name}
                </h5>
                <p className="text-lg mt-2 opacity-50 text-white">
                  {item.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardDetailPage;
