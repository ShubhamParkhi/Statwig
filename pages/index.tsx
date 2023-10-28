import type { NextPage } from "next";
import Header from "../components/header";
import SupplyChainHeroContainer from "../components/supply-chain-hero-container";
import PartneredCompaniesContainer from "../components/partnered-companies-container";
import IndustrySolutionSection from "../components/industry-solution-section";
import InterestedIndustries from "../components/interested-industries";
import QuotationForm from "../components/quotation-form";
import Footer from "../components/footer";

const Statwig: NextPage = () => {
  return (
    <div className="relative bg-white w-full flex flex-col items-center justify-start">
      <Header />
      <SupplyChainHeroContainer />
      <PartneredCompaniesContainer />
      <IndustrySolutionSection />
      <InterestedIndustries />
      <QuotationForm />
      <Footer />
    </div>
  );
};

export default Statwig;
