import React from "react";
import img1 from "../../assets/images/services-details/arvr1.jpg";
import img2 from "../../assets/images/services-details/arvr2.jpeg";
import { Link } from "react-router-dom";
import { services } from "../../data/constant";
import { IoIosArrowRoundBack } from "react-icons/io";

const VRAndAR = () => {
  const prev = services[4];
  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="vr and ar"
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          VR & AR Development
        </h2>
        <p data-aos="fade-up" className="description">
          In recent years, virtual reality (VR) and augmented reality (AR) have
          emerged as groundbreaking technologies that redefine how we interact
          with digital content and the world around us. At AI Company, we are
          dedicated to harnessing the potential of VR and AR to create immersive
          experiences that not only engage users but also transform industries.
          Our expertise in developing innovative VR and AR solutions positions
          us at the forefront of this exciting technological frontier.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Shaping Immersive Experiences
        </h2>
        <p data-aos="fade-up" className="description">
          The applications of VR and AR are vast and varied, spanning sectors
          such as healthcare, education, real estate, and entertainment. At AI
         Company, we understand that each industry has unique requirements and
          challenges. Therefore, we take a tailored approach to our VR and AR
          development projects, ensuring that our solutions are designed to meet
          the specific needs of our clients. Whether it’s creating realistic
          training simulations for healthcare professionals or developing
          interactive marketing campaigns for retail brands, our team is
          committed to delivering high-quality, engaging experiences.
          <br />
          <br />
          One of the primary advantages of VR is its ability to provide users
          with fully immersive environments. This technology is particularly
          beneficial in training and education. For instance, in the healthcare
          sector, VR simulations allow medical students to practice surgical
          procedures in a risk-free environment, enhancing their skills and
          confidence before they enter real-world scenarios.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-contain rounded-md"
            alt="vr and ar"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Tailored Immersive Solutions
              </h3>
            </div>
            <p>
              We create unique VR and AR applications that address specific
              industry needs, enhancing user engagement and satisfaction.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Future-Forward Innovation
              </h3>
            </div>
            <p>
              Our ongoing commitment to research and development ensures that
              our clients remain at the cutting edge of VR and AR technologies.
            </p>
          </div>
        </div>
      </div>
      <p>
        At AI Company, we prioritize user experience in all our VR and AR
        solutions. Our team employs cutting-edge design techniques and
        technologies to create intuitive interfaces that enhance interactivity
        and engagement. By focusing on usability, we ensure that our
        applications are not only visually stunning but also easy to navigate,
        allowing users to fully immerse themselves in the experience without
        distraction.
      </p>
      <hr />
      <div className="flex w-full justify-between gap-6">
        <Link to={prev.link} className="flex items-center gap-3">
          <img
            loading="lazy"
            src={prev.icon}
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
      </div>
    </div>
  );
};

export default VRAndAR;
