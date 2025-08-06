import React from "react";
import ServiceDetailsBanner from "./ServiceDetailsBanner";
import { Link, Outlet, useLocation } from "react-router-dom";
import { services, companyDetails } from "../../data/constant";
import { FaPhoneAlt } from "react-icons/fa";
import Footer from "../Footer";
import { PiCaretDoubleRightBold } from "react-icons/pi";
import Header from "./Header";
import SolveITNeeds from "./SolveITNeeds";

const ServicePageLayout = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Header />
      <ServiceDetailsBanner />
      <div className="wrapper">
        <div className="pt-[5rem] pb-[1rem] grid md:grid-cols-[30%_65%] gap-10">
          <div className="w-full hidden md:flex flex-col gap-10">
            <div
              data-aos="fade-up"
              className="bg-[#ECF8FF] p-4 lg:p-6 rounded-lg"
            >
              <h4 className="text-2xl font-medium">All Services</h4>
              <div className="mt-5 flex flex-wrap md:flex-col gap-3">
                {services.map((item) => (
                  <Link
                    className={`${
                      item.link === pathname
                        ? "bg-secondary text-white"
                        : "bg-white text-primary"
                    } flex items-center gap-2 justify-between p-3 rounded-md`}
                    to={item.link}
                  >
                    {item.title} <PiCaretDoubleRightBold className="text-md" />
                  </Link>
                ))}
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="text-center bg-[#010C2A] flex flex-col items-center gap-5 text-white px-4 lg:px-6 py-10 rounded-lg"
            >
              <div className="w-[3.5rem] h-[3.5rem] bg-white text-primary rounded-full p-3 flex justify-center items-center">
                <FaPhoneAlt className="text-3xl" />
              </div>
              <h4 className="text-2xl font-medium">Need Help? Call Here</h4>
              <p
                className="font-semibold"
              >
                {companyDetails.phone}
              </p>
              <Link to={`tel:${companyDetails.phone}`} className="bg-secondary rounded-md w-full px-5 text-sm font-medium py-3 text-white hover:-translate-y-1 hover:shadow-xl hover:bg-white hover:text-secondary border border-secondary cursor-pointer transition-all duration-300">
                Contact Now
              </Link>
            </div>
          </div>
          <div className="w-full">
            <Outlet />
          </div>
          <div
            data-aos="fade-up"
            className="text-center bg-[#010C2A] md:hidden flex flex-col items-center gap-5 text-white px-4 lg:px-6 py-10 rounded-lg"
          >
            <div className="w-[3.5rem] h-[3.5rem] bg-white text-primary rounded-full p-3 flex justify-center items-center">
              <FaPhoneAlt className="text-3xl" />
            </div>
            <h4 className="text-2xl font-medium">Need Help? Call Here</h4>
            <p className="font-semibold">
              {companyDetails.phone}
            </p>
            <Link to={`tel:${companyDetails.phone}`} className="bg-secondary rounded-md w-full px-5 text-sm font-medium py-3 text-white hover:-translate-y-1 hover:shadow-xl hover:bg-white hover:text-secondary border border-secondary cursor-pointer transition-all duration-300">
              Contact Now
            </Link>
          </div>
        </div>
      </div>
      <SolveITNeeds/>
      <Footer />
    </>
  );
};

export default ServicePageLayout;
