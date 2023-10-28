import type { NextPage } from "next";
import Image from "next/image";

const Footer: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-center py-0 px-[30px] text-center text-lg text-black font-inter">
      <div className="w-full flex flex-row items-center justify-between py-[25px] px-0 box-border max-w-[1280px]">
        <div className="leading-[24px]">© 2023 StaTwig</div>
        <div className="w-[168px] flex flex-row items-start justify-start pt-0 px-0 pb-0.5 box-border gap-[24px]">
          <Image
            className="w-6 h-6 overflow-hidden shrink-0 cursor-pointer"
            alt=""
            src="/svg.svg"
            width={6}
            height={6}
          />
          <Image
            className="w-6 h-6 overflow-hidden shrink-0 cursor-pointer"
            alt=""
            src="/svg1.svg"
            width={6}
            height={6}
          />
          <Image
            className="w-6 h-6 overflow-hidden shrink-0 cursor-pointer"
            alt=""
            src="/svg2.svg"
            width={6}
            height={6}
          />
          <Image
            className="w-6 h-6 overflow-hidden shrink-0 cursor-pointer"
            alt=""
            src="/svg3.svg"
            width={6}
            height={6}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
