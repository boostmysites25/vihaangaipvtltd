import React, { useEffect, useState } from "react";
import bannerImg from "../../assets/images/landingpages/banner-bg.webp";
import { Link } from "react-router-dom";
import robot from "../../assets/images/landingpages/ai-robot.png";
import gsap from "gsap";

const TypewriterHeadline = () => {
  const text = "Welcome to the Future of Digital Product Engineering";
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const type = () => {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i));
        i++;
        setTimeout(type, 40);
      }
    };
    type();
    // Cleanup
    return () => {};
  }, []);

  return (
    <div style={{ position: "absolute", top: "5.5rem", left: 0, width: "100%", zIndex: 30, display: "flex", justifyContent: "center", pointerEvents: "none" }}>
      <h2 className="text-center text-2xl md:text-4xl font-extrabold text-primary relative" style={{ fontFamily: 'monospace', background: 'rgba(255,255,255,0.7)', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
        {displayed}
        <span className="typewriter-cursor" style={{ color: '#219BE4', fontWeight: 'bold', animation: 'blink 1s steps(1) infinite' }}>|</span>
        <style>{`
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
        `}</style>
      </h2>
    </div>
  );
};

const Banner = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to("#robot", {
      translateY: -80,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div id="banner" className="min-h-screen w-full relative flex justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bannerImg})` }}>
      <TypewriterHeadline />
      <div className="wrapper pt-[10rem] pb-[5rem] flex flex-col-reverse lg:grid grid-cols-[60%_40%] items-center gap-5">
        <div className="flex flex-col gap-4 items-start justify-center">
          <p data-aos="fade-right" className="bg-[#ECECF2] p-1 text-gray-900 text-sm">IT Services</p>
          <h1 data-aos="fade-right" className="text-[2.5rem] md:text-5xl font-bold leading-tight">
            Turning Ideas Into Impactful Digital Experiences
          </h1>
          <p data-aos="fade-right" className="text-sm text-gray-500 whitespace-pre-line">
            {`Whether you’re a fast-scaling startup or an established enterprise, we help you design, build, and scale digital solutions that are beautiful, functional, and future-ready.\nWe’re not just another tech service provider. We’re your strategic partner in delivering intelligent, customer-centric experiences — powered by world-class design, robust development, and emerging technologies like AI, IoT, Blockchain, and Cloud.\nLet’s shape your digital future, one solution at a time.`}
          </p>
          <Link to="/contact" data-aos="fade-right" className="primary-btn mt-10">
            Get Started
          </Link>
        </div>
        <div data-aos="fade-left" className="lg:pl-5 lg:pt-4 lg:pb-2 w-fit">
          <img loading="lazy" id="robot" src={robot} srcSet={`${robot} 300w, ${robot} 600w, ${robot} 1200w`} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px" alt="robot" width="600" height="400" className="h-[30vh] lg:h-[40vh] w-full object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
