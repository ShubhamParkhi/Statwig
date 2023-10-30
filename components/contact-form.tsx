import type { NextPage } from "next";

const ContactForm: NextPage = () => {
  return (
    <main className="self-stretch bg-ghostwhite flex flex-row flex-wrap items-start justify-center py-[86px] px-[5px]">
      <section className="flex-1 flex flex-col items-center justify-start py-0 px-2.5 box-border gap-[40px] max-w-[1065px] text-center text-primary-800 font-inter">
        <div className="self-stretch flex text-21xl flex-col items-center justify-start gap-[24px] max-w-[95%px] md:w-auto">
          <h1 className="m-0 self-stretch leading-[48px] text-21xl font-normal font-inter sm:text-left">
            Ready to Transform Your Supply Chain?
          </h1>
          <div className="self-stretch text-xl leading-[28px] text-gray-400 sm:text-left">
            Reach out to the StaTwig team today—we're eager to assist you in
            transforming your supply chain management. Fill out the form to get
            started today.
          </div>
        </div>
        <div className="self-stretch rounded-xl bg-white shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] flex flex-col items-center justify-start py-7 px-[30px] gap-[17px] text-left text-5xl text-darkslategray">
          <div className="self-stretch flex flex-col items-center justify-start">
            <h3 className="m-0 self-stretch text-5xl leading-[36px] font-normal font-inter">
              Enquiry Form
            </h3>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[10px]">
            <div className="self-stretch flex flex-row items-start justify-center gap-[10px] md:flex-col md:gap-[10px] md:items-start md:justify-center">
              <input
                className="font-inter text-lg bg-[transparent] self-stretch flex-1 rounded flex flex-col items-start justify-start py-4 px-3 border-[1px] border-solid border-gray1 md:flex-[unset] md:self-stretch"
                placeholder="First name"
                type="text"
                required={true}
              />
              <input
                className="font-inter text-lg bg-[transparent] self-stretch flex-1 rounded flex flex-col items-start justify-center py-4 px-3 border-[1px] border-solid border-gray1 md:flex-[unset] md:self-stretch"
                placeholder="Last name"
                type="text"
                required={true}
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-center gap-[10px] md:flex-col md:gap-[10px] md:items-start md:justify-center">
              <input
                className="font-inter text-lg bg-[transparent] self-stretch flex-1 rounded flex flex-col items-start justify-start py-4 px-3 border-[1px] border-solid border-gray1 md:flex-[unset] md:self-stretch"
                placeholder="Email"
                type="email"
                required={true}
              />
              <input
                className="font-inter text-lg bg-[transparent] self-stretch flex-1 rounded flex flex-col items-start justify-center py-4 px-3 border-[1px] border-solid border-gray1 md:flex-[unset] md:self-stretch"
                placeholder="Company Name"
                type="text"
                required={true}
              />
            </div>
            <input
              className="font-inter text-lg bg-[transparent] self-stretch rounded flex flex-col items-start justify-start py-4 px-3 border-[1px] border-solid border-gray1"
              placeholder="Job Title"
              type="text"
              required={true}
            />
            <textarea
              className="bg-[transparent] font-inter text-lg self-stretch rounded box-border h-[105px] flex flex-col items-start justify-start p-3 border-[1px] border-solid border-gray1"
              placeholder="Comments or questions"
              required={true}
            />
             <a className="[text-decoration:none] rounded-lg bg-mediumslateblue flex flex-row items-center justify-center py-[15px] px-5 text-lg border-[1px] border-solid border-mediumslateblue text-white">
              <div className="leading-[16px]">Submit</div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactForm;
