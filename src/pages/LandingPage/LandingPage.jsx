import React from "react";
import Header from "../../components/LandingPages/Header";
import Banner from "../../components/LandingPages/Banner";
import Services from "../../components/LandingPages/Services";
import Development from "../../components/LandingPages/Development";
import Experience from "../../components/Experience";
import Testimonials from "../../components/Testimonials";
import AssociatedWith from "../../components/AssociatedWith";
import Footer from "../../components/Footer";
import LeadForm from "../../components/LeadForm";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { industriesCompanyServe } from "../../data/constant";
import WorkFlow from "../../components/WorkFlow";
import InquiryForm from "../../components/InquiryForm";
import Portfolio from "../../components/Portfolio";

const LandingPage = ({ page }) => {
  return (
    <div className="landing-bg">
      <WhatsAppIcon />
      <Header />
      <Banner page={page} />
      <div className="pt-[2rem]">
        <InquiryForm />
      </div>
      <Services page={page} />
      <Development page={page} />
      <Portfolio page={page} />
      <div className="wrapper py-[2rem] flex flex-col gap-3">
        <div className="flex flex-col gap-3">
          <h2
            data-aos="fade-up"
            className="text-[2rem] md:text-4xl leading-tight font-semibold text-center"
          >
            Industries We Serve
          </h2>
          <p data-aos="fade-up" className="mt-2 text-center mb-3">
            We cater to a wide range of industries, delivering tailored AI and
            tech solutions to meet specific needs:
          </p>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-7">
          {industriesCompanyServe.map((item) => (
            <div
              key={item.id}
              data-aos="fade-up"
              className="p-5 rounded-lg shadow-lg relative group overflow-hidden min-h-[12rem]"
            >
              <img
                loading="lazy"
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover absolute top-0 left-0 rounded group-hover:scale-110 transition-all duration-300"
              />
              <div className="w-full h-full absolute top-0 left-0 bg-white/70 group-hover:bg-black/60 transition-all duration-300"></div>
              <p className="text-center text-[1.3rem] font-medium relative z-10 group-hover:text-white transition-all duration-300">
                {item.title}
              </p>
              <p className="text-gray-800 text-md mt-2 relative z-10 group-hover:text-white transition-all duration-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <WorkFlow page={page} />
      <Experience />
      <Testimonials />
      <LeadForm />
      <AssociatedWith />
      <Footer />
    </div>
  );
};

export default LandingPage;
