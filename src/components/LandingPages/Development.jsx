import React from "react";
import line from "../../assets/images/line.png";
import developmentImg from "../../assets/images/landingpages/development-1.webp";

const Development = ({page}) => {
  return (
    <div className="w-screen min-h-[70vh] flex justify-center relative">
      <div className="blurred-blue right-[-10%] bottom-[-10%]"></div>
      <div className="wrapper py-10 flex flex-col items-center gap-5 z-10">
        <div data-aos="fade-right" className="flex items-center gap-3">
          <img src={line} alt="line" className="w-[3rem]" />
          <h6 className="font-medium text-secondary">
            {page==="web-development" && "Web Development"}
            {page==="app-development" && "App Development"}
          </h6>
        </div>
        <div className="grid md:grid-cols-[50%_40%] items-center gap-10 mt-4">
          <img
loading="lazy"            data-aos="fade-right"
            src={developmentImg}
            alt="development"
            className="md:h-[50vh] w-full object-cover rounded"
          />
          <div data-aos="fade-left" className="flex flex-col gap-4">
            <h2 className="text-[2rem] md:text-4xl leading-tight font-semibold">
              {/* We provide the Best IT solution services */}
              VIHAANG AI GLOBAL SERVICES PVT LTD – Crafting Exceptional Digital Experiences
            </h2>
            <p className="">
              {page==="web-development" &&
                "Our web development services bring your ideas to life with custom-built websites designed to engage users and drive results. From sleek design to seamless functionality, we create digital experiences that captivate and convert, helping your business stand out online."}
              {page==="app-development" &&
                "Craft innovative mobile apps tailored to your business needs, with designs that captivate users and deliver results. Our apps are meticulously developed to ensure high quality, seamless functionality, and exceptional user experiences across all platforms."}
              {/* Unlock the full potential of your online presence with our
              state-of-the-art web development services. At VIHAANG AI GLOBAL SERVICES PVT LTD, we combine
              creativity, innovation, and the latest technologies to build
              custom web solutions that captivate users, boost engagement, and
              drive business growth. Whether you need a dynamic website, an
              interactive platform, or a robust e-commerce solution, we deliver
              tailored digital experiences designed for the future. */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Development;
