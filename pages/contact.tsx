import type { NextPage } from "next";
import Header from "../components/header";
import Contactform from "../components/contact-form";
import Footer from "../components/footer";

const Contact: NextPage = () => {
  return (
    <div className="bg-white w-full flex flex-col items-center justify-start">
      <Header />
      <Contactform />
      <Footer />
    </div>
  );
};

export default Contact;
