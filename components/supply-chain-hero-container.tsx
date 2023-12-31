import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const SupplyChainHeroContainer: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-center py-[75px] px-[30px] text-left text-lg text-black font-inter">
      <div className="w-full flex flex-row items-center justify-between max-w-[1065px] sm:flex-col sm:gap-[15px] sm:justify-center">
        <div className="w-full flex-1 flex flex-col items-start justify-center gap-[35px]">
          <div className="w-full text-29xl leading-[100%]">
            Leading the Decentralized Supply Chain Revolution
          </div>
          <div className="w-full leading-[24px]">
            As Your Trusted Digital Supply Chain Partner, StaTwig transforms
            Operations and makes a Positive Impact
          </div>
          <div className=" flex flex-col items-start justify-end text-white cursor-pointer">
            <Link href="/contact" className="[text-decoration:none] rounded-lg bg-mediumslateblue flex flex-row items-center justify-center py-[15px] px-5 text-[inherit] border-[1px] border-solid border-mediumslateblue">
              <div className="leading-[16px]">Request a Quote</div>
            </Link>
          </div>
        </div>
        <Image
          className="w-full flex-1 max-overflow-hidden h-[454px] object-contain"
          alt=""
          src="/frame-6@2x.png"
          priority
          width={1065}
          height={908}
        />
      </div>
    </div>
  );
};

export default SupplyChainHeroContainer;
