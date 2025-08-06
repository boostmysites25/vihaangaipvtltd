import React from "react";
import expImg from "../assets/images/experience.webp";
import line from "../assets/images/line.png";
import projectsImg from "../assets/images/icons/projects.png";
import clientsImg from "../assets/images/icons/clients.png";
import awardsImg from "../assets/images/icons/awards.png";

const Experience = () => {
  return (
    <div className="w-full grid lg:grid-cols-[60%_35%] items-end relative">
      <img
        loading="lazy"
        src={expImg}
        width="800"
        height="600"
        alt="experience"
        className="w-full h-[70vh] lg:block hidden object-cover z-10 grayscale-[20%]"
      />
      <div
        data-aos="fade-left"
        className="px-6 flex flex-col lg:pl-5 w-full z-10"
      >
        <div className="flex items-center gap-3 mb-5">
          <img src={line} alt="line" className="w-[3rem]" />
          <h6 className="font-medium text-secondary">Work Experience</h6>
        </div>
        <h2 className="text-[2rem] md:text-4xl capitalize font-semibold mb-5">
          We specialize in custom -tailored
        </h2>
        <img
          loading="lazy"
          src={expImg}
          width="400"
          height="300"
          alt="experience"
          className="w-full h-[50vh] block lg:hidden object-cover object-right z-10"
        />
        <div className="z-10 bg-[#010C2A] p-5 grid md:grid-cols-3 gap-5 lg:w-[70vw] lg:-translate-x-[30vw]">
          <div className="flex flex-col gap-2 text-white items-start md:border-r-2 border-white/40 p-5">
            <img
              src={projectsImg}
              alt="projects-icon"
              className="h-[3rem] object-contain"
            />
            <h2 className="text-4xl font-bold">50+</h2>
            <p className="border-l-2 border-[#00CDFF] pl-3">
              Projects Completed
            </p>
          </div>
          <div className="flex flex-col gap-2 text-white items-start md:border-r-2 border-white/40 p-5 md:pl-10">
            <img
              src={clientsImg}
              alt="projects-icon"
              className="h-[3rem] object-contain"
            />
            <h2 className="text-4xl font-bold">100%</h2>
            <p className="border-l-2 border-[#00CDFF] pl-3">
              Satisfied clients
            </p>
          </div>
          <div className="flex flex-col gap-2 text-white items-start p-5 md:pl-10">
            <img
              src={awardsImg}
              alt="projects-icon"
              className="h-[3rem] object-contain"
            />
            <h2 className="text-4xl font-bold">2+</h2>
            <p className="border-l-2 border-[#00CDFF] pl-3">Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
