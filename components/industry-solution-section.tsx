import type { NextPage } from "next";
import Image from "next/image";

const IndustrySolutionSection: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-center py-[75px] px-[30px] text-left text-lg text-midnightblue-100 font-inter">
      <div className="w-full flex flex-col items-center justify-start gap-[25px] max-w-[1065px]">
        <div className="self-stretch text-29xl leading-[100%] text-center">
          Built for all kinds of Industries
        </div>
        <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-center justify-between sm:flex-col sm:gap-[20px] sm:items-start sm:justify-center">
          <div className="rounded-3xl bg-ghostwhite flex flex-row items-center justify-center py-[18px] px-[22px] border-[1px] border-solid border-whitesmoke cursor-pointer">
            <div className="leading-[20px]">Vaccine Ledger</div>
          </div>
          <div className="rounded-3xl flex flex-row items-center justify-center py-[18px] px-[22px] border-[1px] border-solid border-whitesmoke cursor-pointer">
            <div className="leading-[20px]">Food Leger</div>
          </div>
          <div className="rounded-3xl flex flex-row items-center justify-center py-[18px] px-[22px] border-[1px] border-solid border-whitesmoke cursor-pointer">
            <div className="leading-[20px]">Cargo Ledger</div>
          </div>
          <div className="rounded-3xl flex flex-row items-center justify-center py-[18px] px-[22px] border-[1px] border-solid border-whitesmoke cursor-pointer">
            <div className="leading-[20px]">Unify Aid</div>
          </div>
          <div className="rounded-3xl flex flex-row items-center justify-center py-[18px] px-[22px] border-[1px] border-solid border-whitesmoke cursor-pointer">
            <div className="leading-[20px]">Baby Boo</div>
          </div>
          <div className="rounded-3xl flex flex-row items-center justify-center py-[18px] px-[22px] border-[1px] border-solid border-whitesmoke cursor-pointer">
            <div className="leading-[20px]">ReCollect</div>
          </div>
        </div>
        <div className="self-stretch h-[339px] flex flex-row items-center justify-between sm:flex-col sm:gap-[25px] sm:items-center sm:justify-center">
          <Image
            className="self-stretch flex-1 max-w-full overflow-hidden max-h-full object-contain sm:flex-[unset] sm:self-stretch"
            alt=""
            src="/vldashboard-1@2x.png"
            
            width={1066}
            height={679}
          />
          <div className="self-stretch flex-1 flex flex-col items-center justify-center gap-[25px] sm:flex-[unset] sm:self-stretch">
            <div className="self-stretch text-5xl leading-[24px]">
              Vaccine
            </div>
            <div className="self-stretch leading-[24px] text-midnightblue-200">
              Revolutionizing Supply Chain with Blockchain Technology and
              Vaccine Ledger for Transparency and Safety
            </div>
            <div className="self-stretch leading-[24px] text-mediumslateblue cursor-pointer">
              Request Demo
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrySolutionSection;
