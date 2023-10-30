import type { NextPage } from "next";
import Image from "next/image";

const HeroSectionAbout: NextPage = () => {
  return (
    <div className="h-[576px] flex flex-col items-center justify-center py-[75px] px-[30px] box-border text-center text-29xl text-black font-inter sm:py-[20px]">
      <div className="w-full flex flex-col items-center justify-start gap-[10px] max-w-[1065px]">
        <h1 className="m-0 text-inherit tracking-[-0.01em] leading-[110%] font-normal font-inherit">
          Leading the Decentralized Supply Chain Revolution
        </h1>
        <p className="m-0 text-lg leading-[100%]">
          Leveraging Supply Chain data to generate actionable insights
        </p>
      </div>
      <Image
        className="w-full max-w-[1065px] overflow-hidden h-[342px] shrink-0 object-contain mt-[-50px] sm:flex-1"
        alt=""
        src="/image-2@2x.png"
        width={2131}
        height={684}
      />
    </div>
  );
};

export default HeroSectionAbout;
