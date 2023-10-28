import type { NextPage } from "next";

const InterestedIndustries: NextPage = () => {
  return (
    <div className="self-stretch bg-mediumseagreen flex flex-col items-center justify-center py-[75px] px-[30px] text-center text-29xl text-midnightblue-100 font-inter">
      <div className="w-full flex flex-col items-center justify-center gap-[50px] max-w-[1065px]">
        <div className="w-full relative leading-[100%] inline-block max-w-[700px]">
          Industries we’re interested in, but not limited to
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-[25px] px-px gap-[15px] text-5xl">
          <div className="rounded-xl bg-gray-200 w-[254.5px] flex flex-row items-center justify-between py-[54px] px-[61px] box-border">
            <div className="flex-1 relative tracking-[-1px] leading-[56px]">
              Life Science
            </div>
          </div>
          <div className="rounded-xl bg-gray-200 w-[254.5px] flex flex-row items-center justify-between py-[54px] px-9 box-border">
            <div className="flex-1 relative tracking-[-1px] leading-[56px]">{`Food & Beverage`}</div>
          </div>
          <div className="rounded-xl bg-gray-200 w-[254.5px] flex flex-row items-center justify-between py-[54px] px-[93px] box-border">
            <div className="flex-1 relative tracking-[-1px] leading-[56px]">
              Cargo
            </div>
          </div>
          <div className="rounded-xl bg-gray-200 w-[254.5px] flex flex-row items-center justify-between py-[54px] px-[63px] box-border">
            <div className="flex-1 relative tracking-[-1px] leading-[56px]">
              Automobile
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestedIndustries;
