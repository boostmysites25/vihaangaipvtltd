import React, { useEffect } from "react";
import testiImg from "../assets/images/testimonials/testimonials-bg.png";
import line from "../assets/images/line.png";
import users from "../assets/images/users-grp.png";
import { testimonials } from "../data/constant";
import gsap from "gsap";

const Testimonials = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".testimonial-item", {
      opacity: 1,
      duration: 1,
      stagger: 3.5,
      delay: 0.2,
      repeat: -1,
      yoyo: true,
    });

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div
      id="reviews"
      className="min-h-[70vh] py-[5rem] w-full bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-secondary rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary rounded-full blur-lg"></div>
      </div>
      
      <div className="wrapper grid lg:grid-cols-2 gap-10 w-full relative z-10">
        <div
          data-aos="fade-right"
          className="flex flex-col items-center lg:items-start w-full"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-0.5 bg-gradient-to-r from-secondary to-primary"></div>
            <h6 className="font-semibold text-secondary text-lg tracking-wide">Testimonials</h6>
          </div>
          <h2 className="text-[2.5rem] md:text-5xl font-bold mb-6 text-center lg:text-start lg:max-w-[30rem] bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Clients Feedback Examples You
          </h2>
          <p className="text-gray-600 text-base mb-8 max-w-[30rem] text-center lg:text-start leading-relaxed">
            At VIHAANG AI GLOBAL SERVICES PVT LTD, we take pride in the success of our clients. Here's what
            some of them have to say about their experience working with us:
          </p>
          <div className="flex items-center gap-2">
            <img
              width="150"
              height="50"
              src={users}
              alt="users"
              className="w-[8rem] object-contain"
            />
            <div className="text-sm text-gray-500">
              <span className="font-semibold text-secondary">500+</span> Happy Clients
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="relative min-h-[25rem] w-full sm:w-4/5 lg:w-full mx-auto mt-[4rem] sm:mt-0"
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="testimonial-item bg-white/90 backdrop-blur-sm opacity-0 absolute inset-0 w-full h-full flex flex-col justify-center p-8 rounded-2xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.2)'
              }}
            >
              {/* Service Badge */}
              <div className="absolute top-6 left-6">
                <span className="bg-gradient-to-r from-secondary to-primary text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
                  {item.service}
                </span>
              </div>
              
              <div className="flex flex-col gap-6 pt-12">
                {/* Quote */}
                <div className="relative">
                  <div className="absolute -top-2 -left-2 text-4xl text-secondary/20 font-serif">"</div>
                  <p className="text-base text-gray-700 leading-relaxed italic pl-6">
                    {item.quote}
                  </p>
                  <div className="absolute -bottom-2 -right-2 text-4xl text-secondary/20 font-serif">"</div>
                </div>
                
                {/* Client Info */}
                <div className="flex flex-col gap-2">
                  <h5 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {item.client.name}
                  </h5>
                  <p className="text-sm text-gray-600 font-medium">
                    {item.client.title} • {item.client.company}
                  </p>
                </div>
                
                {/* Keywords Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.keywords.map((keyword, idx) => (
                    <span 
                      key={idx} 
                      className="bg-gradient-to-r from-primary/10 to-secondary/10 text-primary text-xs font-semibold px-3 py-2 rounded-full border border-primary/20 hover:from-primary/20 hover:to-secondary/20 transition-all duration-300 transform hover:scale-105"
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
