import cover from "../../assets/debitcover.svg";
const DebitCalculateSection = () => {
  return (
    <section className="max-w-[1040px] mx-auto flex flex-col items-start tablet:mt-36 mt-44 px-4 tablet:px-10 laptop:px-0">
      <div className="laptop:p-16 tablet:p-10 p-5 bg-csecondary laptop:rounded-[30px] rounded-xl tablet:rounded-3xl relative w-full">
        <h4 className="text-2xl tablet:text-[40px] font-bold tablet:mb-8 mb-3 text-white leading-normal tablet:leading-[50px]">
          Debet kartdakı qalığa <br /> gəliri hesablayın
        </h4>
        <p className="text-white opacity-50 tablet:mb-10 mb-6 tablet:text-xl text-sm">
          ABB mobile-da qeydiyyatdan keçirilmiş kartdakı <br />
          qalığa illik 7% hesablanıb ayın sonunda <br />
          kart hesabına köçürülür.
        </p>
        <div className="flex gap-6 flex-col laptop:flex-row">
          <div className="px-6 py-5 flex justify-between laptop:justify-normal items-center gap-5 text-sm tablet:text-[16px] bg-cfour laptop:w-fit w-full z-10 rounded-2xl">
            <div className="text-white ">
              <p className="opacity-50 font-[500]">Qalıq məbləği daxil edin</p>
              <p className="text-lg tablet:text-[24px] font-bold">2500</p>
            </div>
            <span className="font-bold bg-csecondary px-3 py-1 rounded-3xl">
              AZN
            </span>
          </div>
          <div className="px-6 py-5 flex flex-row tablet:flex-col laptop:flex-row justify-between laptop:justify-normal items-center laptop:gap-20 gap-3 text-sm tablet:text-[16px] bg-cfour laptop:w-fit w-full z-10 rounded-2xl">
            <div className="text-white flex flex-col tablet:flex-row laptop:justify-normal justify-between w-full">
              <p className="opacity-50 font-[500]">Faiz</p>
              <p className="text-lg tablet:text-[24px] font-bold">7,0 %</p>
            </div>
            <div className="text-white flex flex-col tablet:flex-row laptop:justify-normal justify-between items-end tablet:items-start w-full">
              <p className="opacity-50 font-[500]">Qalığa aylıq gəlir</p>
              <p className="text-lg tablet:text-[24px] font-bold text-cprimary">
                14.58 AZN{" "}
              </p>
            </div>
          </div>
        </div>

        <img
          src={cover}
          width={428}
          height={330}
          alt=""
          className="absolute top-10 right-10 hidden laptop:block"
        />
      </div>
    </section>
  );
};

export default DebitCalculateSection;
