import type { NextPage } from "next";
import Image from "next/image";

const PartneredCompaniesContainer: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-center py-[75px] px-[30px] text-center text-5xl text-midnightblue-200 font-inter">
      <div className="flex flex-col items-center justify-start gap-[20px] max-w-[1065px]">
        <div className="leading-[24px]">
          Trusted by Top Industry Leaders
        </div>
        <div className="flex flex-row flex-wrap items-center justify-between mix-blend-luminosity max-w-[1165px]">
          <Image
            className="object-contain"
            alt=""
            src="/client7@2x.png"
            width={141.1}
            height={141.1}
          />
          <Image
            className="object-contain"
            alt=""
            src="/client8@2x.png"
            width={141.1}
            height={141.1}
          />
          <Image
            className="object-contain"
            alt=""
            src="/client9@2x.png"
            width={141.1}
            height={141.1}
          />
          <Image
            className="object-contain"
            alt=""
            src="/client10@2x.png"
            width={141.1}
            height={141.1}
          />
          <Image
            className="object-contain"
            alt=""
            src="/client11@2x.png"
            width={141.1}
            height={141.1}
          />
          <Image
            className="object-contain"
            alt=""
            src="/client1@2x.png"
            width={141.1}
            height={141.1}
          />
          <Image
            className="object-contain"
            alt=""
            src="/client2@2x.png"
            width={141.1}
            height={141.1}
          />
          <Image
            className="object-contain"
            alt=""
            src="/client3@2x.png"
            width={141.1}
            height={141.1}
          />
          <Image
            className="object-contain"
            alt=""
            src="/client4@2x.png"
            width={141.1}
            height={141.1}
          />
          <Image
            className="object-contain"
            alt=""
            src="/client5@2x.png"
            width={141.1}
            height={141.1}
          />
          <Image
            className="object-contain"
            alt=""
            src="/client6@2x.png"
            width={141.1}
            height={141.1}
          />
        </div>
      </div>
    </div>
  );
};

export default PartneredCompaniesContainer;
