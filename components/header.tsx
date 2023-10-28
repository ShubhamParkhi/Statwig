import type { NextPage } from "next";
import Image from "next/image";

const Header: NextPage = () => {
  return (
    <header className="bg-white shadow-[0px_4px_20px_rgba(0,_0,_0,_0.1)] box-border h-[98px] flex flex-row items-center justify-center py-[22px] px-[30px] sticky w-full top-[0] [background:white] z-[2] border-b-[1px] border-solid border-gray-100 lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
      <header className="flex-1 flex flex-row items-center justify-between max-w-[1280px] text-center text-xl text-black font-inter">
        <div className="tracking-[0.25em] leading-[22px] font-medium cursor-pointer">
          <span>STA</span>
          <span className="text-mediumseagreen">TWIG</span>
        </div>
        <div className="flex flex-row items-center justify-end gap-[36px] text-lg text-primary-900 sm:flex">
          <div className="flex flex-row items-center justify-start gap-[30px] lg:hidden">
            <a className="[text-decoration:none] leading-[22px] text-[inherit] cursor-pointer">
              ABOUT US
            </a>
            <a className="[text-decoration:none] rounded-lg bg-mediumslateblue flex flex-row items-center justify-center py-[15px] px-5 text-white border-[1px] border-solid border-mediumslateblue cursor-pointer">
              <div className="leading-[22px]">CONTACT US</div>
            </a>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] hidden flex-row items-center justify-center lg:flex">
            <Image
              className="w-6 h-6 overflow-hidden shrink-0 md:flex"
              alt=""
              src="/notification.svg"
              width={6}
              height={6}
            />
          </button>
        </div>
      </header>
    </header>
  );
};

export default Header;
