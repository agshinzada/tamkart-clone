import { Link, useParams } from "react-router-dom";
import BackBtn from "../components/BackBtn";
import { useEffect, useState } from "react";
import { CampaignItemType } from "../types/campaign";
import face from "../assets/face-share.svg";
import x from "../assets/x-share.svg";
import linke from "../assets/linke-share.svg";
import SectionTitle from "../components/section/SectionTitle";

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
    <section className="max-w-[1040px] mx-auto pt-36">
      <BackBtn />

      <img
        src={campaignData?.image}
        alt="cover"
        className="w-full rounded-3xl mt-14"
      />
      <h5 className="text-[40px] font-bold text-white mt-12">
        {campaignData?.name}
      </h5>
      <p className="text-xl text-white mt-2">
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

      <div className="flex justify-between rounded-2xl py-6 px-8 bg-csecondary mt-12">
        <p className="text-[17px] text-white">Share campaign</p>
        <div className="flex gap-5 items-center">
          <img src={face} alt="icon" width={11} />
          <img src={x} alt="icon" width={19} />
          <img src={linke} alt="icon" width={18} />
        </div>
      </div>

      <div className="mt-28">
        <SectionTitle title="Digər kampaniyalar" />
        <div className="flex gap-4 mt-10 justify-between">
          {relatedCampaigns.slice(0, 3).map((item, index) => (
            <Link to={`/campaigns/${item.id}`} key={index}>
              <div className="w-[300px]">
                <img
                  src={item.image}
                  alt="card"
                  className="w-full rounded-2xl"
                />
                <h5 className="text-xl font-semibold text-white mt-5">
                  {item.name}
                </h5>
                {item.date.trim() === "" ? (
                  ""
                ) : (
                  <p className="text-[14px] bg-cthird w-fit px-3 py-1 rounded-full font-[500] opacity-50 mt-3">
                    {item.date}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampaignDetailPage;
