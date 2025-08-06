import React from "react";
import img1 from "../../assets/images/services-details/app-development1.jpeg";
import img2 from "../../assets/images/services-details/app-development2.jpg";
import { Link } from "react-router-dom";
import { services } from "../../data/constant";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const AppDevelopment = () => {
  const prev = services[0];
  const next = services[2];
  return (
    <div className="flex flex-col gap-10">
      <img
loading="lazy"        data-aos="fade-up"
        src={img1}
        
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="app development"
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          App Development
        </h2>
        <p data-aos="fade-up" className="description">
          In today's fast-paced digital landscape, mobile applications have
          become essential tools for businesses aiming to engage their audiences
          and enhance operational efficiency. At VIHAANG AI GLOBAL SERVICES PVT LTD, we understand that app
          development is not merely about creating software; it’s about crafting
          user-centric experiences that resonate with users and drive business
          growth. Our expertise in both native and cross-platform development
          enables us to deliver high-quality applications tailored to meet the
          unique needs of our clients.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Understanding Our Approach to App Development
        </h2>
        <p data-aos="fade-up" className="description">
          Our approach to app development encompasses the entire lifecycle, from
          ideation to deployment and beyond. We specialize in native mobile
          applications, which are specifically designed for iOS and Android
          platforms. By utilizing platform-specific languages and frameworks, we
          ensure optimal performance and responsiveness, allowing us to leverage
          the full capabilities of each device. Additionally, we offer
          cross-platform development, which enables us to build applications
          that run smoothly on multiple operating systems. This approach allows
          our clients to reach a broader audience while maintaining cost
          efficiency, ensuring their solutions are accessible to a wide range of
          users.
          <br />
          <br />
          Accessibility is another critical factor. Mobile applications provide
          users with the convenience of accessing services anytime and anywhere,
          allowing them to perform transactions and access information on the
          go. In a world that demands instant gratification, this increased
          accessibility is crucial for meeting customer expectations.
          Furthermore, our applications are equipped with analytics tools that
          gather valuable insights into user behavior. By analyzing this data,
          our clients can refine their strategies, improve user experiences, and
          make informed decisions that drive growth.
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
                Native & Hybrid App Development
              </h3>
            </div>
            <p>
              We develop both native apps for iOS and Android and hybrid apps
              that work seamlessly across platforms using React Native and
              Flutter.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Cross-Platform Development
              </h3>
            </div>
            <p>
              To cater to a broader audience while maintaining cost-efficiency,
              we also offer cross-platform app development.
            </p>
          </div>
        </div>
      </div>
      <p>
        At VIHAANG AI GLOBAL SERVICES PVT LTD, we are committed to staying ahead of technological
        advancements to provide our clients with cutting-edge app solutions. We
        embrace emerging trends that enhance both functionality and user
        experience. Our team prioritizes user interface (UI) and user experience
        (UX) design, ensuring that our applications are intuitive and easy to
        navigate. This focus on the end-user experience allows us to create
        applications that not only look great but also deliver exceptional
        usability.
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

export default AppDevelopment;
