import { useEffect, useState } from "react";
import BackBtn from "../components/BackBtn";
import { PartnerDetail } from "../types/partner";
import { useParams } from "react-router-dom";

const PartnerDetailPage = () => {
  const [partnerData, setPartnerData] = useState<PartnerDetail>();
  const params = useParams();

  async function getPartner() {
    const response = await fetch(
      "https://json-server-seven-murex.vercel.app/tamkart/"
    );
    const data = await response.json();
    const filtered = data.partners.find(
      (item: PartnerDetail) => item.id === parseInt(params.id!)
    );
    setPartnerData(filtered);
  }

  useEffect(() => {
    getPartner();
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
      <div className="flex gap-6 items-center mt-14 flex-col tablet:flex-row justify-center tablet:justify-normal">
        <div className="w-[88px] h-[88px]">
          <img
            src={partnerData?.image}
            alt="cover"
            className="object-cover w-full h-full rounded-full"
          />
        </div>
        <div className="text-white leading-10 text-center tablet:text-left">
          <h5 className="text-2xl tablet:text-[40px] font-bold">
            {partnerData?.name}
          </h5>
          <p className="text-sm tablet:text-lg opacity-50">
            {partnerData?.type}
          </p>
        </div>
      </div>
      <div className="tablet:py-10 tablet:px-12 p-7 bg-csecondary rounded-3xl tablet:mt-12 mt-5">
        <h5 className="font-semibold text-white text-2xl tablet:text-[36px]">
          Taksit şərtləri
        </h5>
        <div className="flex gap-2 my-3">
          <span className="text-[16px] text-cprimary border border-cprimary px-4 py-2 rounded-full font-semibold">
            3 ay
          </span>
          <span className="text-[16px] text-cprimary border border-cprimary px-4 py-2 rounded-full font-semibold">
            6 ay
          </span>
        </div>
        <p className="text-white opacity-50 text-xs tablet:text-lg mt-6">
          Taksit əməliyyatları zamanı əlavə heç bir komissiya tətbiq olunmur.{" "}
          <br />* Məhsul və kampaniyalardan asılı olaraq Taksit və Cashback
          şərtləri dəyişə bilər.
        </p>
        <p className="text-lg text-white font-semibold flex items-center gap-3 tablet:mt-16 mt-5">
          <svg
            width="18"
            height="22"
            viewBox="0 0 18 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 11.5262 16.8532 13.7402 15.2923 15.767C13.988 17.4606 12.3183 19.1158 10.6506 20.769L10.6495 20.7702C10.3345 21.0825 10.0195 21.3947 9.70711 21.7071C9.31658 22.0976 8.68342 22.0976 8.29289 21.7071C7.98026 21.3945 7.6644 21.0813 7.34916 20.7688C5.68146 19.1156 4.01205 17.4606 2.70772 15.767C1.14683 13.7402 0 11.5262 0 9ZM12 9C12 10.6569 10.6569 12 9 12C7.34315 12 6 10.6569 6 9C6 7.34315 7.34315 6 9 6C10.6569 6 12 7.34315 12 9Z"
              fill="#75FA56"
            ></path>
          </svg>
          {partnerData?.address}
        </p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3945.260854746068!2d49.849932125669326!3d40.39335568293951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2saz!4v1736277396838!5m2!1sen!2saz"
        width="100%"
        height="450"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-2xl tablet:mt-12 mt-6"
      ></iframe>
    </section>
  );
};

export default PartnerDetailPage;
