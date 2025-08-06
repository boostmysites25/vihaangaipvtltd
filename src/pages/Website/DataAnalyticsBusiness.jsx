import React from "react";
import img1 from "../../assets/images/services-details/data-analytics1.webp";
import img2 from "../../assets/images/services-details/data-analytics2.webp";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { services } from "../../data/constant";

const DataAnalyticsBusiness = () => {
  const next = services[8]; // IoT Development
  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="Data Analytics & Business Intelligence"
      />
      <div className="flex flex-col gap-4">
        <h2
          data-aos="fade-up"
          className="heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          Data Analytics & Business Intelligence
        </h2>
        <p data-aos="fade-up" className="description">
          At VIHAANG AI GLOBAL SERVICES PVT LTD, we transform raw data into
          actionable business intelligence that drives strategic decision-making
          and operational excellence. Our data analytics services help
          organizations uncover hidden patterns, predict trends, and optimize
          performance across all aspects of their business operations.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Transforming Data into Strategic Insights
        </h2>
        <p data-aos="fade-up" className="description">
          Our data analytics approach begins with a comprehensive assessment of
          your data landscape, identifying key data sources and establishing
          robust data governance frameworks. We implement advanced data
          collection and processing pipelines that ensure data quality,
          consistency, and accessibility. Our team specializes in creating
          scalable data architectures that can handle growing data volumes while
          maintaining performance and security.
          <br />
          <br />
          We leverage cutting-edge analytics tools and machine learning
          algorithms to extract meaningful insights from complex datasets. Our
          business intelligence solutions provide real-time dashboards,
          interactive reports, and predictive analytics that enable stakeholders
          at all levels to make informed decisions quickly and confidently.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-cover object-left rounded-md"
            alt="Data Analytics Solutions"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Advanced Analytics & Reporting
              </h3>
            </div>
            <p>
              Custom analytics solutions with interactive dashboards, automated
              reporting, and real-time data visualization for comprehensive
              business insights.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Predictive Analytics & ML
              </h3>
            </div>
            <p>
              Machine learning models and predictive analytics that forecast
              trends, identify opportunities, and optimize business processes
              for better outcomes.
            </p>
          </div>
        </div>
      </div>
      <p>
        At VIHAANG AI GLOBAL SERVICES PVT LTD, we believe that data-driven
        decision making is the key to sustainable business growth and
        competitive advantage. Our analytics solutions empower organizations to
        move beyond reactive decision-making to proactive, insight-driven
        strategies that anticipate market changes and customer needs. We are
        committed to helping our clients build data cultures that foster
        innovation and continuous improvement.
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

export default DataAnalyticsBusiness;
