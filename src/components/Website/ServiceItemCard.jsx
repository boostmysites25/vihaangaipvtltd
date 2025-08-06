import React from "react";
import { PiCaretDoubleRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const ServiceItemCard = ({ item }) => {
  return (
    <Link
      to={item.link}
      className="h-full flex flex-col justify-between gap-5 bg-primary/15 hover:shadow-2xl transition-all duration-300 hover:bg-primary group rounded-lg border border-black p-5"
    >
      <div className="flex flex-col gap-2 items-start">
        <div className="group-hover:scale-[120%] transition-all duration-300 w-[4rem] h-[4rem] p-3 rounded-full bg-primary/10 flex items-center justify-center">
          <img
            width="75"
            height="75"
            loading="lazy"
            src={item.icon}
            alt="icon"
            className="group-hover:scale-[120%] transition-all duration-300 w-[3rem] grayscale group-hover:invert"
          />
        </div>
        <h6 className="font-medium text-lg group-hover:text-white">
          {item.title}
        </h6>
        {item.subtitle && (
          <div className="text-primary text-md font-semibold group-hover:text-white mb-1">
            {item.subtitle}
          </div>
        )}
        <p className="text-gray-700 group-hover:text-white text-md">
          {item.description}
        </p>
        {item.keywords && (
          <div className="flex flex-wrap gap-2 mt-2">
            {item.keywords.map((kw, idx) => (
              <span key={idx} className="bg-secondary/10 text-secondary border border-secondary rounded-full px-3 py-1 text-xs font-medium">
                {kw}
              </span>
            ))}
          </div>
        )}
      </div>
      <Link
        to={item.link}
        className="text-primary group-hover:text-white transition-all duration-300 underline text-md flex gap-5 items-center"
      >
        Know More <PiCaretDoubleRightBold />
      </Link>
    </Link>
  );
};

export default ServiceItemCard;
