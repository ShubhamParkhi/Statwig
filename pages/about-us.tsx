import type { NextPage } from "next";
import Header from "../components/header";
import HeroSectionAbout from "../components/hero-section-about";
import TextsAbout from "../components/texts-about";
import FeaturesAbout from "../components/features-about";
import Footer from "../components/footer";

const AboutUs: NextPage = () => {
  return (
    <div className="bg-white w-full flex flex-col items-center justify-start">
      <Header />
      <HeroSectionAbout />
      <TextsAbout />
      <FeaturesAbout />
      <Footer />
    </div>
  );
};

export default AboutUs;
