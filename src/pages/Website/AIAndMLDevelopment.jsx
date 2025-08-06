import React from "react";
import img1 from "../../assets/images/services-details/ai1.jpg";
import img2 from "../../assets/images/services-details/ai2.jpg";
import { Link } from "react-router-dom";
import { services } from "../../data/constant";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const AIAndMLDevelopment = () => {
  const prev = services[1];
  const next = services[3];
  return (
    <div className="flex flex-col gap-10">
      <img
loading="lazy"        data-aos="fade-up"
        src={img1}
        
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="ai&ml development"
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          AI & ML Development
        </h2>
        <p data-aos="fade-up" className="description">
          In an era characterized by rapid technological advancement, artificial
          intelligence (AI) and machine learning (ML) have emerged as
          transformative forces driving innovation across various industries. At
          VIHAANG AI GLOBAL SERVICES PVT LTD, we are at the forefront of this revolution, leveraging AI and
          ML to develop intelligent solutions that empower businesses, enhance
          operational efficiency, and create personalized experiences for users.
          Our commitment to harnessing the power of data and advanced algorithms
          positions us as a leader in the field of AI and ML development.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Pioneering Intelligent Solutions
        </h2>
        <p data-aos="fade-up" className="description">
          Our approach to AI and ML development is grounded in a deep
          understanding of our clients’ unique challenges and goals. We
          collaborate closely with businesses to identify opportunities where AI
          and ML can deliver significant value. From predictive analytics that
          forecast trends to custom AI solutions that optimize workflows, our
          services are tailored to meet the specific needs of each client. By
          integrating AI-driven technologies into their operations, businesses
          can unlock new levels of efficiency and insight.
          <br />
          <br />
          One of the key areas where we excel is in predictive analytics. By
          utilizing sophisticated machine learning algorithms, we help clients
          analyze vast amounts of data to uncover patterns and make informed
          decisions. Whether it’s predicting customer behavior, optimizing
          supply chain processes, or enhancing marketing strategies, our
          predictive analytics solutions empower businesses to stay ahead of the
          curve. This data-driven approach not only improves decision-making but
          also fosters a culture of innovation within organizations.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-7">
        <div className="h-full w-full">
          <img
loading="lazy"            
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-cover rounded-md"
            alt="app development"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Empowerment Through Data
              </h3>
            </div>
            <p>
              Our solutions help businesses make informed decisions by
              harnessing data-driven insights.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">Future-Ready Solutions</h3>
            </div>
            <p>
              We stay ahead of emerging trends to ensure our clients benefit
              from the latest advancements in AI and ML technologies.
            </p>
          </div>
        </div>
      </div>
      <p>
        At VIHAANG AI GLOBAL SERVICES PVT LTD, we are not only focused on the
        present but also on the future of AI and ML development. We continuously
        explore emerging technologies and methodologies to stay ahead of industry
        trends. Our commitment to research and development enables us to refine
        our solutions and offer cutting-edge services that align with the
        evolving needs of businesses.
      </p>
      <hr />
      <div className="flex w-full justify-between gap-6">
        <Link to={prev.link} className="flex items-center gap-3">
          <img
loading="lazy"            src={prev.icon}
            alt=""
            className="w-[3rem] h-[3rem] hidden sm:inline-block object-contain grayscale"
          />
          <div className="flex flex-col gap-1">
            <h6 className="text-md font-semibold">{prev.title}</h6>
            <p className="flex items-center gap-2 text-sm text-secondary">
              <IoIosArrowRoundBack className="text-2xl" /> Previous
            </p>
          </div>
        </Link>
        <Link to={next.link} className="flex items-center gap-3">
          <img
loading="lazy"            src={next.icon}
            alt=""
            className="w-[3rem] h-[3rem] hidden sm:inline-block object-contain grayscale"
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

export default AIAndMLDevelopment;
