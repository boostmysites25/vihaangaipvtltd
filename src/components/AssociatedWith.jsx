import React from "react";
import logo1 from "../assets/images/brand-logos/1.png";
import logo2 from "../assets/images/brand-logos/2.png";
import logo3 from "../assets/images/brand-logos/3.png";
import logo4 from "../assets/images/brand-logos/4.png";
import logo5 from "../assets/images/brand-logos/5.png";
import { useKeenSlider } from "keen-slider/react";

const logos = [logo1, logo2, logo3, logo4, logo5];

const animation = { duration: 10000, easing: (t) => t };

const AssociatedWith = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: {
      perView: 2,
      spacing: 30,
    },
    breakpoints: {
      "(min-width: 480px)": {
        slides: {
          perView: 3,
          spacing: 30,
        },
      },
      "(min-width: 768px)": {
        slides: {
          perView: 4,
          spacing: 30,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 5,
          spacing: 30,
        },
      },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <div className="pt-[2rem] w-full flex flex-col items-center relative">
      <div className="blurred-blue right-[-10%] bottom-[-10%] -z-10"></div>
      <h2
        data-aos="fade-up"
        className="text-[2rem] md:text-4xl font-semibold wrapper"
      >
        Associated With
      </h2>
      <div ref={sliderRef} className="keen-slider mt-[3rem] bg-primary/20">
        {logos.map((img, index) => (
          <div key={index} className="keen-slider__slide flex justify-center">
            <img
              loading="lazy"
              src={img}
              width='200'
              height='100'
              alt="featured in"
              className="h-[7rem] w-[12rem] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssociatedWith;
