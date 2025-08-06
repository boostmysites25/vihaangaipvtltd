import React, { useEffect } from "react";
import bannerImg from "../../assets/images/landingpages/banner-bg.webp";
import { Link } from "react-router-dom";
import robot from "../../assets/images/landingpages/ai-robot.png";
import gsap from "gsap";

const Banner = ({ page }) => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to("#robot", {
      translateY: -80,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div
      id="banner"
      className="min-h-screen w-full relative flex justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="wrapper pt-[10rem] pb-[5rem] flex flex-col-reverse lg:grid grid-cols-[60%_40%] items-center gap-5">
        <div className="flex flex-col gap-4 items-start justify-center">
          <p
            data-aos="fade-right"
            className="bg-[#ECECF2] p-1 text-gray-900 text-sm"
          >
            {page === "web-development" && "Web Development"}
            {page === "app-development" && "App Development"}
          </p>
          <h1
            data-aos="fade-right"
            className="text-[2.5rem] md:text-5xl font-bold leading-tight"
          >
            {page === "web-development" &&
              "VIHAANG AI GLOBAL SERVICES PVT LTD - Shaping the Future with Advanced AI Solutions"}
            {page === "app-development" &&
              "VIHAANG AI GLOBAL SERVICES PVT LTD - Elevating Your Business with Cutting-Edge App Development"}
          </h1>
          <p data-aos="fade-right" className="text-sm text-gray-500">
            {page === "web-development" &&
              "Unlock the full potential of your online presence with our state-of-the-art web development services. At VIHAANG AI GLOBAL SERVICES PVT LTD, we combine creativity, innovation, and the latest technologies to build custom web solutions that captivate users, boost engagement, and drive business growth. Whether you need a dynamic website, an interactive platform, or a robust e-commerce solution, we deliver tailored digital experiences designed for the future."}
            {page === "app-development" &&
              "Harness the power of innovative app development to reach your audience anytime, anywhere. At VIHAANG AI GLOBAL SERVICES PVT LTD, we specialize in crafting custom mobile and web applications that deliver seamless user experiences, boost engagement, and drive growth. From intuitive interfaces to robust functionalities, our tailored app solutions are designed to help your business thrive in the digital age, empowering you to stay ahead of the competition."}
          </p>
          <Link data-aos="fade-right" className="primary-btn mt-10">
            Get Started
          </Link>
        </div>
        <div data-aos="fade-left" className="lg:pl-5 lg:pt-4 lg:pb-2 w-fit">
          <img
            loading="lazy"
            id="robot"
            src={robot}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
            alt="robot"
            width="600"
            height="400"
            class="h-[30vh] lg:h-[40vh] w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
