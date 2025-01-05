import cover from "../../assets/debitcover.svg";
const DebitCalculateSection = () => {
  return (
    <section className="max-w-[1040px] mx-auto flex flex-col items-start mt-36">
      <div className="p-16 bg-csecondary rounded-3xl relative w-full">
        <h4 className="text-[40px] font-bold mb-8 text-white leading-[50px]">
          Debet kartdakı qalığa <br /> gəliri hesablayın
        </h4>
        <p className="text-white opacity-50 mb-10 text-xl">
          ABB mobile-da qeydiyyatdan keçirilmiş kartdakı <br />
          qalığa illik 7% hesablanıb ayın sonunda <br />
          kart hesabına köçürülür.
        </p>
        <div className="flex gap-6">
          <div className="px-6 py-5 flex items-center gap-5 text-[16px] bg-cfour w-fit z-10 rounded-2xl">
            <div className="text-white ">
              <p className="opacity-50 font-[500]">Qalıq məbləği daxil edin</p>
              <p className="text-[24px] font-bold">2500</p>
            </div>
            <span className="font-bold bg-csecondary px-3 py-1 rounded-3xl">
              AZN
            </span>
          </div>
          <div className="px-6 py-5 flex items-center gap-24 text-[16px] bg-cfour w-fit z-10 rounded-2xl">
            <div className="text-white ">
              <p className="opacity-50 font-[500]">Faiz</p>
              <p className="text-[24px] font-bold">7,0 %</p>
            </div>

            <div className="text-white ">
              <p className="opacity-50 font-[500]">Qalığa aylıq gəlir</p>
              <p className="text-[24px] font-bold text-cprimary">14.58 </p>
            </div>
          </div>
        </div>

        <img
          src={cover}
          width={428}
          height={330}
          alt=""
          className="absolute top-10 right-10"
        />
      </div>
    </section>
  );
};

export default DebitCalculateSection;
