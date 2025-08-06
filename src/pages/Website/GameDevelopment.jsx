import React from "react";
import img1 from "../../assets/images/services-details/gaming1.webp";
import img2 from "../../assets/images/services-details/gaming2.webp";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { services } from "../../data/constant";

const GameDevelopment = () => {
  const next = services[0]; // Web Development (Full Stack) - loop back to first service
  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="Game Development"
      />
      <div className="flex flex-col gap-4">
        <h2
          data-aos="fade-up"
          className="heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          Game Development
        </h2>
        <p data-aos="fade-up" className="description">
          At VIHAANG AI GLOBAL SERVICES PVT LTD, we bring creative visions to
          life through cutting-edge game development that captivates players and
          delivers exceptional gaming experiences. Our game development services
          span from concept to launch, creating immersive worlds that engage
          users across multiple platforms and genres.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Creating Immersive Gaming Experiences
        </h2>
        <p data-aos="fade-up" className="description">
          Our game development process begins with creative ideation and market
          research to ensure your game concept resonates with target audiences.
          We specialize in developing games across multiple platforms including
          mobile, PC, and web-based gaming experiences. Our team combines
          artistic creativity with technical expertise to create games that are
          not only visually stunning but also provide smooth, engaging gameplay
          mechanics.
          <br />
          <br />
          We utilize industry-leading game engines and development frameworks to
          build scalable, high-performance games that can handle complex
          graphics, physics, and multiplayer functionality. Our development
          approach includes rigorous testing and optimization to ensure games
          run smoothly across different devices and platforms while maintaining
          the highest quality standards.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-cover object-left rounded-md"
            alt="Game Development Process"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">Mobile Game Development</h3>
            </div>
            <p>
              Cross-platform mobile games with optimized performance, engaging
              mechanics, and monetization strategies for iOS and Android
              platforms.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">PC & Console Gaming</h3>
            </div>
            <p>
              High-performance PC and console games with advanced graphics,
              complex gameplay systems, and multiplayer capabilities for
              immersive experiences.
            </p>
          </div>
        </div>
      </div>
      <p>
        At VIHAANG AI GLOBAL SERVICES PVT LTD, we are passionate about pushing
        the boundaries of what's possible in game development. Our commitment to
        innovation drives us to explore new technologies, gameplay mechanics,
        and storytelling techniques that create memorable gaming experiences. We
        believe that great games have the power to entertain, educate, and bring
        people together, and we're dedicated to helping our clients create games
        that leave lasting impressions on players worldwide.
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

export default GameDevelopment;
