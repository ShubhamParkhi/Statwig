import type { NextPage } from "next";
import Image from "next/image";

const FeaturesAbout: NextPage = () => {
  return (
    <div className="flex flex-row items-center justify-center py-[75px] px-[30px] text-left text-29xl text-midnightblue-100 font-inter sm:flex sm:py-[20px]">
      <div className="flex-1 flex flex-row items-center justify-center gap-[30px] max-w-[1065px] md:flex-col md:items-start md:justify-start">
        <div className="flex-1 bg-white flex flex-col items-start justify-center px-0 gap-[20px] md:flex-[unset] md:self-stretch">
          <div className="tracking-[-1px] leading-[56px]">
            FEATURES
          </div>
          <div className="text-lg leading-[24px] text-midnightblue-200">
            Built on a platform that is dynamic, customisable and bulletproof.
            It is constantly evolving to ensure seamless operations while saving
            time and money.It is constantly evolving to ensure seamless
            operations while saving time and money.It is constantly evolving to
            ensure.
          </div>
        </div>
        <Image
          className="flex-1 max-w-full overflow-hidden h-[291px] object-contain md:flex-[unset] md:self-stretch"
          alt=""
          src="/download-1@2x.png"
          width={1035}
          height={582}
        />
      </div>
    </div>
  );
};

export default FeaturesAbout;
