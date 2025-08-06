import React from "react";
import img1 from "../../assets/images/services-details/web-development1.jpeg";
import img2 from "../../assets/images/services-details/web-development2.jpg";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { services } from "../../data/constant";

const WebDevelopment = () => {
  const next = services[1];
  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="web development"
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Web Development
        </h2>
        <p data-aos="fade-up" className="description">
          At VIHAANG AI GLOBAL SERVICES PVT LTD, we recognize that web development is more than just
          building websites; it’s about creating dynamic, interactive
          experiences that empower businesses and engage users. As a leader in
          technology solutions, we leverage cutting-edge practices in web
          development to deliver exceptional results for our clients, helping
          them thrive in an increasingly digital world.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Understanding Our Approach to Web Development
        </h2>
        <p data-aos="fade-up" className="description">
          At VIHAANG AI GLOBAL SERVICES PVT LTD, our web development services encompass both front-end and
          back-end development, ensuring a comprehensive approach to each
          project. Our front-end team specializes in creating visually stunning
          and user-friendly interfaces. Utilizing technologies such as HTML,
          CSS, and JavaScript, we design responsive layouts that adapt
          seamlessly across devices. This focus on user experience is essential
          in today’s fast-paced digital environment, where first impressions can
          significantly impact customer engagement.
          <br />
          <br />
          On the back-end, our skilled developers implement robust solutions
          using programming languages like PHP, Ruby, and Python. We prioritize
          security and efficiency in all data transactions, providing a solid
          foundation for our clients’ web applications. By ensuring that our
          back-end systems are scalable and performant, we empower businesses to
          grow without compromising on functionality or security.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-cover object-left rounded-md"
            alt="web development"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                E-Commerce Platform Development
              </h3>
            </div>
            <p>
              From simple online stores to complex e-commerce platforms, we
              develop solutions that boost sales, enhance customer experience,
              and simplify transactions.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Custom Web Application Development
              </h3>
            </div>
            <p>
              We build bespoke web applications that cater to the unique needs
              of your business, ensuring seamless user experiences, high
              performance, and security.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">Full Stack Development</h3>
            </div>
            <p>
              Our team handles both client-side and server-side development,
              ensuring fast, reliable, and scalable web solutions.
            </p>
          </div>
        </div>
      </div>
      <p>
        At VIHAANG AI GLOBAL SERVICES PVT LTD, we envision a future where technology continues to break
        barriers and create limitless possibilities for businesses. Our
        commitment to innovation drives us to explore new technologies and
        methodologies that will shape the next generation of web solutions. With
        a passionate team dedicated to excellence, we aim to deliver tailored
        web development services that not only meet our clients’ unique needs
        but also set them up for long-term success in the digital realm.
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

export default WebDevelopment;
