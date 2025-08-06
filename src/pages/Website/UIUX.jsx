import React from "react";
import img1 from "../../assets/images/services-details/uiux1.webp";
import img2 from "../../assets/images/services-details/uiux2.webp";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { services } from "../../data/constant";

const UIUX = () => {
  const next = services[6]; // Chatbot Development
  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="UI/UX Design"
      />
      <div className="flex flex-col gap-4">
        <h2
          data-aos="fade-up"
          className="heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          UI/UX Design
        </h2>
        <p data-aos="fade-up" className="description">
          At VIHAANG AI GLOBAL SERVICES PVT LTD, we believe that exceptional
          user experience design is the cornerstone of successful digital
          products. Our UI/UX design services combine creativity with
          user-centered methodology to create interfaces that not only look
          stunning but also provide intuitive, engaging experiences that drive
          user satisfaction and business growth.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Our Comprehensive UI/UX Design Approach
        </h2>
        <p data-aos="fade-up" className="description">
          Our design process begins with thorough user research and market
          analysis to understand your target audience's needs, behaviors, and
          pain points. We employ design thinking methodologies to create user
          personas, journey maps, and information architecture that form the
          foundation of our design strategy. This research-driven approach
          ensures that every design decision is backed by data and user
          insights.
          <br />
          <br />
          In the design phase, our team creates wireframes and prototypes that
          focus on functionality and user flow before moving to high-fidelity
          designs. We utilize modern design tools and follow industry best
          practices to create responsive, accessible, and visually appealing
          interfaces. Our designs are built with scalability in mind, ensuring
          they can evolve with your business needs while maintaining consistency
          across all touchpoints.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-cover object-left rounded-md"
            alt="UI/UX Design Process"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                User Research & Strategy
              </h3>
            </div>
            <p>
              Comprehensive user research, persona development, and competitive
              analysis to create data-driven design strategies that align with
              business objectives.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Wireframing & Prototyping
              </h3>
            </div>
            <p>
              Interactive wireframes and prototypes that allow for early user
              testing and iteration, ensuring optimal user flows and information
              architecture.
            </p>
          </div>
        </div>
      </div>
      <p>
        At VIHAANG AI GLOBAL SERVICES PVT LTD, we are committed to creating user
        experiences that not only meet current user expectations but anticipate
        future needs. Our design philosophy centers around creating meaningful
        connections between users and products through thoughtful, accessible,
        and engaging interfaces. We believe that great design has the power to
        transform businesses by creating loyal users who become brand advocates.
      </p>
      <hr />
      <div className="flex flex-col sm:flex-row w-full justify-end gap-6">
        <Link to={next.link} className="flex items-center self-end gap-3">
          <img
            loading="lazy"
            src={next.icon}
            alt=""
            className="w-[3rem] h-[3rem] object-contain grayscale"
          />
          <div className="flex flex-col gap-1">
            <h6 className="text-md font-semibold">{next.title}</h6>
            <p className="flex items-center gap-2 text-sm text-secondary">
              Next <IoIosArrowRoundForward className="text-2xl" />
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default UIUX;
