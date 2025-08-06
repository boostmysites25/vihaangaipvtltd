import React from "react";
import { Link, useLocation } from "react-router-dom";
import { services } from "../../data/constant";
import bannerImg from "../../assets/images/services-details/services-details-page-banner.jpg";

const ServiceDetailsBanner = () => {
  const { pathname } = useLocation();
  const title = services.find((item) => item.link === pathname)?.title;
  return (
    <div className="min-h-[45vh] md:min-h-[70vh] w-full page-banner relative">
      <img
loading="lazy"        src={bannerImg}
        
        className="absolute h-full w-full object-cover z-0"
        alt=""
      />
      <div className="absolute h-full w-full bg-black/20"></div>
      <div className="absolute z-10 py-2 top-[50%] left-1/2 -translate-x-1/2 w-full flex flex-col items-center px-3">
        <h1 data-aos="fade-up" className="heading text-white text-center">
          {title}
        </h1>
        <div
          data-aos="fade-up"
          className="mt-3 text-base sm:text-xl font-medium px-3 py-2 w-fit flex flex-wrap justify-center text-white items-center gap-1 sm:gap-2"
        >
          <Link to="/">Home</Link>/<Link to="/services">Services</Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsBanner;
