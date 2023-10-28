import type { NextPage } from "next";

const QuotationForm: NextPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-[75px] px-[30px] text-center text-29xl text-white font-inter">
      <div className="w-full rounded-2xl bg-midnightblue-100 flex flex-col items-center justify-center py-[75px] px-0 box-border gap-[50px] max-w-[1065px]">
        <div className="w-full flex flex-col items-center justify-start gap-[10px]">
          <div className="w-full leading-[100%]">
            Looking for a fulfillment solution?
          </div>
          <div className="w-full text-5xl leading-[24px] text-deepskyblue">
            Get in touch with StaTwig
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-end text-left text-lg">
          <a className="[text-decoration:none] rounded-lg bg-mediumslateblue flex flex-row items-center justify-center py-[15px] px-5 text-[inherit] border-[1px] border-solid border-mediumslateblue cursor-pointer">
            <div className="leading-[16px]">Request a Quote</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuotationForm;
