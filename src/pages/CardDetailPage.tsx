import { useParams, useSearchParams } from "react-router-dom";
import circle from "../assets/circle.svg";
import Button from "../components/Button";
import SectionTitle from "../components/section/SectionTitle";
import icon1 from "../assets/services/1.svg";
import icon2 from "../assets/services/2.svg";
import icon3 from "../assets/services/3.svg";
import icon4 from "../assets/services/4.svg";
import icon5 from "../assets/services/5.svg";
import { useEffect, useState } from "react";
import { CardItemTypes } from "../types/card";
import BackBtn from "../components/BackBtn";
import PageServiceSlider from "../components/PageServiceSlider";
import CardInfo from "../components/card/CardInfo";
import SlideControlBtn from "../components/SlideControlBtn";
import CardServiceSlider from "../components/services/CardServiceSlider";
import RelatedCardSlider from "../components/card/RelatedCardSlider";

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
    <section className="pt-36 tablet:px-10 px-4 laptop:px-0">
      <div className="max-w-[1040px] mx-auto ">
        <div className="hidden tablet:block">
          <BackBtn />
        </div>
        <div className="flex justify-between tablet:mt-14 items-center tablet:flex-row flex-col">
          <div className="tablet:w-[62%] w-full flex flex-col gap-7 order-1 tablet:order-0 mt-[250px] tablet:mt-0">
            <div className="flex flex-col gap-2">
              <h4 className="laptop:text-[48px] tablet:text-[40px] text-[32px] text-white font-bold">
                {cardData?.name}
              </h4>
              <p className="laptop:text-lg tablet:text-[16px] text-sm text-white opacity-60">
                {cardData?.summary}
              </p>
            </div>
            <div className="tablet:grid tablet:grid-cols-2 flex flex-col laptop:flex-row laptop:flex tablet:gap-10 gap-2 laptop:items-center text-white">
              <div className="flex tablet:flex-col flex-row justify-between tablet:justify-start">
                <h4 className="laptop:text-[22px] tablet:text-lg text-[16px] font-semibold order-1 tablet:order-0">
                  10%-dək
                </h4>
                <p className="text-[16px] opacity-50 order-0 tablet:order-1">
                  Keşbək
                </p>
              </div>
              <div className="flex tablet:flex-col flex-row justify-between tablet:justify-start">
                <h4 className="laptop:text-[22px] tablet:text-lg text-[16px] font-semibold text-cprimary order-1 tablet:order-0">
                  0 AZN
                </h4>
                <p className="text-[16px] opacity-50 order-0 tablet:order-1">
                  Qiymət
                </p>
              </div>
              <div className="flex tablet:flex-col flex-row justify-between tablet:justify-start">
                <h4 className="laptop:text-[22px] tablet:text-lg text-[16px] font-semibold order-1 tablet:order-0">
                  AZN/USD/EUR
                </h4>
                <p className="text-[16px] opacity-50 order-0 tablet:order-1">
                  Valyuta
                </p>
              </div>
              <div className="flex tablet:flex-col flex-row justify-between tablet:justify-start">
                <h4 className="laptop:text-[22px] tablet:text-lg text-[16px] font-semibold order-1 tablet:order-0">
                  5 il
                </h4>
                <p className="text-[16px] opacity-50 order-0 tablet:order-1">
                  Xidmət müddəti
                </p>
              </div>
            </div>
            <div className="w-fit hidden laptop:block">
              <Button title="İndi sifariş et" size="w-fit" />
            </div>
          </div>
          <div className="w-[309px] tablet:w-[380px] relative order-0 tablet:order-1">
            <img
              src={circle}
              alt="circle"
              className="absolute mx-auto tablet:static tablet:hidden laptop:block z-10 -top-[15px] left-[42px] tablet:mx-0"
            />
            <img
              src={cardData?.image}
              alt="card"
              className="absolute block z-20 tablet:static laptop:hidden mb-8 w-full"
            />
            <img
              src={cardData?.image}
              alt="card"
              className="hidden laptop:block absolute -top-12 right-0 w-[309px]"
            />
            <div className="fixed tablet:static tablet:w-full w-fit bottom-2 left-[37%] laptop:hidden">
              <Button title="İndi sifariş et" size="w-full" />
            </div>
          </div>
        </div>
        <PageServiceSlider />
        <CardInfo cardData={cardData!} />
        <div className="tablet:mt-24 mt-16">
          <div className="flex items-center justify-between">
            <SectionTitle title="Kart üzrə xidmətlər" />
            <div className="hidden tablet:block">
              <SlideControlBtn />
            </div>
          </div>
        </div>
      </div>
      <CardServiceSlider data={services} />
      <div className="max-w-[1040px] mx-auto mt-24">
        <SectionTitle
          title={`Digər ${
            cardData?.type === "debit" ? "debet" : "kredit"
          }  kartlar`}
        />
        <RelatedCardSlider data={relatedCards} />
      </div>
    </section>
  );
};

export default CardDetailPage;
