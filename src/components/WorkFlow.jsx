import React from "react";
import line from "../assets/images/line.png";
import {
  appDevelopmentWorkflow,
  generalDevelopmentWorkflow,
  webDevelopmentWorkflow,
} from "../data/constant";

const WorkFlow = ({ page }) => {
  let workflow;

  if (page === "web-development") {
    workflow = webDevelopmentWorkflow;
  } else if (page === "app-development") {
    workflow = appDevelopmentWorkflow;
  } else {
    workflow = generalDevelopmentWorkflow;
  }
  return (
    <div className="flex justify-center relative">
      <div className="blurred-blue left-[-10%] bottom-[-10%]"></div>
      <div
        data-aos="fade-up"
        className="wrapper flex flex-col items-center gap-5 z-10 py-10"
      >
        <div className="flex items-center gap-3">
          <img src={line} alt="line" className="w-[3rem]" />
          <h6 className="font-medium text-secondary">
            How We Build Your Success
          </h6>
        </div>
        <div className="z-10 grid grid-cols-1 mt-4 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-10 mx-auto max-w-6xl">
          {workflow.map((item) => (
            <div className="relative flex flex-col gap-2 items-start bg-primary/5 hover:bg-primary/10 rounded-lg p-5 hover:scale-105 transition-all duration-300">
              <div className="absolute -z-0 flex justify-center items-center h-[7rem] w-[7rem] md:h-[9rem] md:w-[9rem] rounded-full bg-primary/10 bottom-1 right-1">
                <span className="text-7xl md:text-8xl text-white font-extrabold">
                  {item.id}
                </span>
              </div>
              <div className="z-10 w-[4rem] h-[4rem] p-3 rounded-full bg-primary/10 flex items-center justify-center">
                <img
                  loading="lazy"
                  width="50"
                  height="50"
                  src={item.icon}
                  alt="icon"
                  className="w-[3rem] grayscale"
                />
              </div>
              <h6 className="z-10 font-medium text-xl">{item.title}</h6>
              <p className="z-10 text-gray-700 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
