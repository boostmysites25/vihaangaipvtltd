import React, { useState, useEffect, useCallback, memo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import users from "../assets/images/users-grp.png";
import { testimonials } from "../data/constant";

const Testimonials = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Memoized navigation functions to prevent unnecessary re-renders
  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsPaused(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsPaused(false);
  }, []);

  // Auto-play functionality with useCallback optimization
  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(goToNext, 6000); // 6 seconds per testimonial
    }
    return () => clearInterval(interval);
  }, [isPaused, goToNext]);

  return (
    <div
      id="reviews"
      className="min-h-screen py-16 w-full bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-secondary rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary rounded-full blur-lg"></div>
      </div>

      <div className="wrapper relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-12 h-0.5 bg-gradient-to-r from-secondary to-primary"></div>
            <h6 className="font-semibold text-secondary text-lg tracking-wide">
              Testimonials
            </h6>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto leading-relaxed">
            At VIHAANG AI GLOBAL SERVICES PVT LTD, we take pride in the success
            of our clients. Here's what some of them have to say about their
            experience working with us:
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="max-w-4xl mx-auto">
          <div
            className="relative bg-white/90 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl p-8 md:p-12 transition-all duration-500"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Service Badge */}
            <div className="absolute top-6 left-6">
              <span className="bg-gradient-to-r from-secondary to-primary text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                {testimonials[currentIndex].service}
              </span>
            </div>

            {/* Testimonial Content */}
            <div className="pt-16">
              {/* Quote */}
              <div className="relative mb-8">
                <div className="absolute -top-2 -left-2 text-4xl text-secondary/20 font-serif">
                  "
                </div>
                <p className="text-lg text-gray-700 leading-relaxed italic pl-8 pr-4">
                  {testimonials[currentIndex].quote}
                </p>
                <div className="absolute -bottom-2 -right-2 text-4xl text-secondary/20 font-serif">
                  "
                </div>
              </div>

              {/* Client Info */}
              <div className="flex flex-col gap-2 mb-6">
                <h5 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {testimonials[currentIndex].client.name}
                </h5>
                <p className="text-sm text-gray-600 font-medium">
                  {testimonials[currentIndex].client.title} •{" "}
                  {testimonials[currentIndex].client.company}
                </p>
              </div>

              {/* Keywords Tags */}
              <div className="flex flex-wrap gap-2">
                {testimonials[currentIndex].keywords.map((keyword, idx) => (
                  <span
                    key={idx}
                    className="bg-gradient-to-r from-primary/10 to-secondary/10 text-primary text-xs font-semibold px-3 py-2 rounded-full border border-primary/20 hover:from-primary/20 hover:to-secondary/20 transition-all duration-300"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full"></div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 group"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-6 h-6 text-secondary group-hover:text-primary transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 group"
              aria-label="Next testimonial"
            >
              <svg
                className="w-6 h-6 text-secondary group-hover:text-primary transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <LazyLoadImage
            width="150"
            height="50"
            src={users}
            alt="users"
            className="w-24 object-contain"
            threshold={100}
            threshold={100}
          />
          <div className="text-sm text-gray-500">
            <span className="font-semibold text-secondary">500+</span> Happy
            Clients
          </div>
        </div>
      </div>
    </div>
  );
});

Testimonials.displayName = 'Testimonials';

export default Testimonials;
