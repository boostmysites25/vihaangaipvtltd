import React from "react";
import line from "../../assets/images/line.png";
import {
  appDevelopmentServices,
  webDevelopmentServices,
} from "../../data/constant";

const Services = ({ page }) => {
  return (
    <div
      id="services"
      className="w-screen min-h-[70vh] flex justify-center relative pt-[3rem]"
    >
      <div className="blurred-blue left-[-10%] top-[-10%]"></div>
      <div className="wrapper py-10 flex flex-col items-center gap-5 z-10">
        <div data-aos="fade-up" className="flex items-center gap-3">
          <img src={line} alt="line" className="w-[3rem]" />
          <h6 className="font-medium text-secondary">
            {/* Popular Services */}
            {page === "web-development" && "Web Development Services"}
            {page === "app-development" && "App Development Services"}
          </h6>
        </div>
        <h1
          data-aos="fade-up"
          className="text-[2rem] md:text-4xl leading-tight font-semibold text-center max-w-2xl"
        >
          {/* We provide the Best IT solution services */}
          {page === "web-development" &&
            "High-Quality Web Development to Transform Your Online Identity"}
          {page === "app-development" &&
            "Cutting-Edge App Development Services for Powerful Mobile Solutions"}
        </h1>
        <p data-aos="fade-up" className="text-center max-w-2xl">
          {page === "web-development" &&
            "High-performance web development services designed to create secure, scalable, and user-friendly websites that enhance your business's digital presence."}
          {page === "app-development" &&
            "High-performance app development services designed to deliver secure, scalable, and user-friendly applications that elevate your business's digital reach and engage your audience."}
        </p>
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 mx-auto max-w-6xl"
        >
          {page === "web-development" &&
            webDevelopmentServices.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-2 items-start bg-[#F6F6F6] shadow-2xl transition-all duration-300 hover:bg-gradient-to-tr from-white to-primary/10 rounded-lg border border-black p-5"
              >
                <div className="w-[4rem] h-[4rem] p-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <img
loading="lazy"                    src={item.icon}
                    alt="icon"
                    className="w-[3rem] grayscale"
                  />
                </div>
                <h6 className="font-medium text-lg">{item.title}</h6>
                <p className="text-gray-700 text-md">{item.description}</p>
              </div>
            ))}

          {page === "app-development" &&
            appDevelopmentServices.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-2 items-start bg-[#F6F6F6] shadow-2xl transition-all duration-300 hover:bg-gradient-to-tr from-white to-primary/10 rounded-lg border border-black p-5"
              >
                <div className="w-[4rem] h-[4rem] p-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <img
loading="lazy"                    src={item.icon}
                    alt="icon"
                    className="w-[3rem] grayscale"
                  />
                </div>
                <h6 className="font-medium text-lg">{item.title}</h6>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
