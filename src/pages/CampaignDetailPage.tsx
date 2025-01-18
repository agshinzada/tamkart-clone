import { useParams } from "react-router-dom";
import BackBtn from "../components/button/BackBtn";
import { useEffect, useState } from "react";
import { CampaignItemType } from "../types/campaign";
import face from "../assets/face-share.svg";
import x from "../assets/x-share.svg";
import linke from "../assets/linke-share.svg";
import SectionTitle from "../components/section/SectionTitle";
import RelatedCampaignSlider from "../components/campaign/RelatedCampaignSlider";

const CampaignDetailPage = () => {
  const params = useParams();
  const [campaignData, setCampaignData] = useState<CampaignItemType>();
  const [relatedCampaigns, setRelatedCampaigns] = useState<CampaignItemType[]>(
    []
  );

  async function getCampaign() {
    const response = await fetch(
      "https://json-server-seven-murex.vercel.app/tamkart/"
    );
    const data = await response.json();
    const findCam = data.campaigns.find(
      (item: CampaignItemType) => item.id === parseInt(params.id!)
    );
    const related = data.campaigns.filter(
      (item: CampaignItemType) => item.id !== parseInt(params.id!)
    );
    setCampaignData(findCam);
    setRelatedCampaigns(related);
  }

  useEffect(() => {
    getCampaign();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [params]);

  return (
    <section className="max-w-[1040px] mx-auto tablet:pt-36 pt-14 tablet:px-10 px-4 laptop:px-0">
      <div className="hidden tablet:block">
        <BackBtn />
      </div>
      <img
        src={campaignData?.image}
        alt="cover"
        className="w-full rounded-3xl mt-14"
      />
      <h5 className="text-2xl tablet:text-[40px] font-bold text-white tablet:mt-12 mt-7">
        {campaignData?.name}
      </h5>
      <p className="text-sm tablet:text-xl text-white tablet:mt-2 mt-4">
        TamGənc-li olmaq istəyənlər üçün əsl vaxtdır. TamGənc Visa debet kartı
        sahibi olmaq üçün yaş həddi 25-dən 29 yaşadək qaldırılıb. <br /> TamGənc
        sahibləri hansı üstünlüklər əldə edir? <br />
        Seçdiyi "Faydalı keşbek" paketinə özəl 10%-dək keşbek qazanır. <br />{" "}
        İkiqat "ƏDV geri al"-ır. <br />
        Pulsuz nağdlaşdırır və köçürür. <br />
        Kartdakı qalığa illik 7%-dək gəlir qazanır. <br /> Üstəlik kart tam
        pulsuzdur! Kartı onlayn kanallardan, həmçinin filial və stendlərdən AZN,
        USD, EUR valyutaları üzrə sifariş edə bilərsən. <br />
        TamGənc ilə gəncliyini tam yaşa!
      </p>

      <div className="flex justify-between rounded-2xl py-6 px-8 bg-csecondary tablet:mt-12 mt-6">
        <p className="text-[17px] text-white">Share campaign</p>
        <div className="flex gap-5 items-center">
          <img src={face} alt="icon" width={11} />
          <img src={x} alt="icon" width={19} />
          <img src={linke} alt="icon" width={18} />
        </div>
      </div>

      <div className="tablet:mt-28 mt-14">
        <SectionTitle title="Digər kampaniyalar" />
        <RelatedCampaignSlider data={relatedCampaigns} />
      </div>
    </section>
  );
};

export default CampaignDetailPage;
