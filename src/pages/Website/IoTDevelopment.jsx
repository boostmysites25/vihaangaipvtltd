import React from "react";
import img1 from "../../assets/images/services-details/iot1.webp";
import img2 from "../../assets/images/services-details/iot2.webp";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { services } from "../../data/constant";

const IoTDevelopment = () => {
  const next = services[9]; // Game Development
  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="IoT Development"
      />
      <div className="flex flex-col gap-4">
        <h2
          data-aos="fade-up"
          className="heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          IoT Development
        </h2>
        <p data-aos="fade-up" className="description">
          At VIHAANG AI GLOBAL SERVICES PVT LTD, we are at the forefront of the
          Internet of Things revolution, creating intelligent, connected
          solutions that transform how businesses operate and interact with
          their environments. Our IoT development services encompass everything
          from sensor integration to cloud-based data management, enabling
          organizations to harness the power of connected devices for enhanced
          efficiency and innovation.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Comprehensive IoT Solutions for Modern Businesses
        </h2>
        <p data-aos="fade-up" className="description">
          Our IoT development process begins with a thorough analysis of your
          business requirements and existing infrastructure. We design scalable
          IoT architectures that can accommodate current needs while providing
          room for future growth. Our team specializes in developing custom IoT
          solutions that integrate seamlessly with your existing systems,
          ensuring minimal disruption to your operations.
          <br />
          <br />
          We leverage cutting-edge technologies including edge computing,
          machine learning, and advanced analytics to create IoT ecosystems that
          not only collect data but also provide actionable insights. Our
          solutions are built with security as a top priority, implementing
          robust encryption and authentication protocols to protect sensitive
          data and ensure compliance with industry standards.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-cover object-left rounded-md"
            alt="IoT Solutions"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Smart Device Integration
              </h3>
            </div>
            <p>
              Seamless integration of sensors, actuators, and smart devices with
              custom firmware development and hardware optimization for optimal
              performance.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                IoT Platform Development
              </h3>
            </div>
            <p>
              Custom IoT platforms with real-time data processing, device
              management, and analytics capabilities for comprehensive IoT
              ecosystem control.
            </p>
          </div>
        </div>
      </div>
      <p>
        At VIHAANG AI GLOBAL SERVICES PVT LTD, we envision a future where IoT
        technology creates unprecedented opportunities for businesses to
        optimize operations, enhance customer experiences, and drive innovation.
        Our commitment to staying at the cutting edge of IoT development ensures
        that our clients benefit from the latest advancements in connected
        technology, positioning them for success in an increasingly digital and
        interconnected world.
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

export default IoTDevelopment;
