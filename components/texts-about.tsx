import type { NextPage } from "next";

const TextsAbout: NextPage = () => {
  return (
    <div className="flex flex-row items-center justify-center py-[75px] px-[30px] text-left text-29xl text-midnightblue-100 font-inter sm:py-[20px]">
      <div className="flex-1 flex flex-row items-center justify-center gap-[30px] max-w-[1065px] sm:flex-col sm:gap-[30px] sm:items-center sm:justify-center">
        <div className="flex-1 tracking-[-1px] leading-[56px] flex items-center sm:flex-[unset] sm:self-stretch">
          Blockchain-Powered Supply Chain Solutions, Leveraging supply chain
          with Modern technology
        </div>
        <div className="flex-1 flex flex-col items-end justify-start gap-[30px] sm:flex-[unset] sm:self-stretch">
          <div className="flex flex-col items-start justify-start gap-[10px]">
            <div className="tracking-[-1px] leading-[56px]">
              MISSION
            </div>
            <div className="text-lg leading-[24px] text-midnightblue-200">
              Statwig's mission is to collect and leverage supply chain data to
              generate actionable insights. These insights help our
              manufacturing clients generate new or additional revenue while
              improving the quality and safety of their products.
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[10px]">
            <div className="tracking-[-1px] leading-[56px] flex items-center h-[52px] shrink-0">
              VISION
            </div>
            <div className="text-lg leading-[24px] text-midnightblue-200 flex items-center h-[52px] shrink-0">
              To make global supply chains resilient and sustainable by
              connecting data silos.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextsAbout;
