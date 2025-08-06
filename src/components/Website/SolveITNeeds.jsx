import React from "react";
import img from "../../assets/images/266699.webp";
import { Link } from "react-router-dom";

const SolveITNeeds = () => {
  return (
    <div data-aos="fade-up" className="wrapper my-10">
      <div className="min-h-[10rem] flex items-center relative">
        <img
          loading="lazy"
          src={img}
          width="800"
          height="300"
          alt="bg"
          className="w-full h-full object-cover object-center absolute"
        />
        <div className="absolute h-full w-full bg-black/20"></div>
        <div className="w-full p-10 relative z-10 text-white flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex flex-col gap-3">
            <h2 className="heading-2 text-center sm:text-left text-white">Let's Build What's Next</h2>
            <p className="text-center sm:text-left max-w-2xl">
              Whether you're starting fresh or scaling fast, we're here to help you build digital solutions that are beautifully designed, technically advanced, and strategically sound.
            </p>
            <div className="text-center sm:text-left">
              <p className="font-semibold text-lg">We don't just deliver software.</p>
              <p className="font-semibold text-lg">We deliver value, impact, and growth.</p>
              <p className="mt-2">Let's create something exceptional together.</p>
            </div>
          </div>
          <Link to="/contact" className="primary-btn">
            Get Solutions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SolveITNeeds;
