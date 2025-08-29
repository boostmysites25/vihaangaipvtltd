import React from "react";
import Header from "../../components/Website/Header";
import banner from "../../assets/images/about-us-page-banner.webp";
import line from "../../assets/images/line.png";
import img1 from "../../assets/images/about-us-page-2.png";
import img2 from "../../assets/images/about-us-page-3.png";
import projectsImg from "../../assets/images/icons/projects.png";
import clientsImg from "../../assets/images/icons/clients.png";
import awardsImg from "../../assets/images/icons/awards.png";
import SolveITNeeds from "../../components/Website/SolveITNeeds";
import Footer from "../../components/Footer";

const AboutUs = () => {
  return (
    <div className="landing-bg">
      <Header />
      <div data-aos="fade-down" className="h-[50vh] md:h-[60vh]">
        <img
          loading="lazy"
          src={banner}
          width="800"
          height="600"
          className="h-full object-cover w-full object-left md:object-top"
          alt="banner"
        />
      </div>
      <section className="wrapper py-[5rem]">
        <div className="grid lg:grid-cols-2 lg:items-start gap-10">
          <div>
            <div data-aos="fade-up" className="flex items-center gap-3">
              <img src={line} alt="line" className="w-[3rem]" />
              <h6 className="font-medium text-secondary capitalize">
                Know about us
              </h6>
            </div>
            <h2 className="heading capitalize mt-5 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Driven by Innovation. Built for Impact.
            </h2>
            <p className="mt-6">
              We're not just a development agency — we're your technology partner in building exceptional digital experiences that make businesses smarter, faster, and future-ready.
            </p>
            <p className="mt-4">
              At our core, we're a team of developers, designers, strategists, and tech enthusiasts who believe that technology, when paired with purpose, can create real-world value. From cutting-edge UI/UX design to AI-powered solutions, from full-stack web development to cloud-native architectures, we're here to help you transform your ideas into meaningful digital products.
            </p>
            <p className="mt-4">
              We collaborate closely with startups, SMEs, and enterprises to design and develop custom solutions that not only meet industry standards but push the boundaries of what's possible.
            </p>
          </div>
          <div className="h-full w-full">
            <img
              loading="lazy"
              src={img1}
              width="500"
              height="400"
              alt="about us"
              className="object-contain max-h-[30rem] mx-auto"
            />
          </div>
        </div>
      </section>

      <section className="w-full grid lg:grid-cols-[60%_35%] items-end relative">
        <img
          loading="lazy"
          src={img2}
          alt="experience"
          width="800"
          height="600"
          className="w-full h-[80vh] lg:block hidden object-contain z-10 grayscale-[20%]"
        />
        <div
          data-aos="fade-left"
          className="px-6 flex flex-col items-center lg:items-start lg:pl-5 w-full z-10"
        >
          <div className="flex items-center gap-3 mb-5">
            <img src={line} alt="line" className="w-[3rem]" />
            <h6 className="font-medium text-secondary">Work Experience</h6>
          </div>
          <h2 className="text-[2rem] md:text-4xl capitalize text-center lg:text-start font-semibold mb-5">
            We specialize in custom -tailored
          </h2>
          <img
            loading="lazy"
            src={img2}
            width="400"
            height="300"
            alt="experience"
            className="w-full max-w-[20rem] block lg:hidden object-contain mx-auto object-right z-10"
          />
          <div className="z-10 bg-[#010C2A] w-full p-5 grid md:grid-cols-3 gap-5 lg:w-[70vw] lg:-translate-x-[30vw]">
            <div className="flex flex-col gap-2 text-white items-start md:border-r-2 border-white/40 p-5">
              <img
                loading="lazy"
                src={projectsImg}
                alt="projects-icon"
                className="h-[2rem] obj2ct-c -mb-4ontain"
              />
              <h2 className="text-4xl font-bold">50+</h2>
              <p className="border-l-2 border-[#00CDFF] pl-3">
                Projects Completed
              </p>
            </div>
            <div className="flex flex-col gap-2 text-white items-start md:border-r-2 border-white/40 p-5 md:pl-10">
              <img
                loading="lazy"
                src={clientsImg}
                alt="projects-icon"
                className="h-[2rem] obj2ct-c -mb-4ontain"
              />
              <h2 className="text-4xl font-bold">100%</h2>
              <p className="border-l-2 border-[#00CDFF] pl-3">
                Satisfied clients
              </p>
            </div>
            <div className="flex flex-col gap-2 text-white items-start p-5 md:pl-10">
              <img
                loading="lazy"
                src={awardsImg}
                alt="projects-icon"
                className="h-[2rem] obj2ct-c -mb-4ontain"
              />
              <h2 className="text-4xl font-bold">2+</h2>
              <p className="border-l-2 border-[#00CDFF] pl-3">Awards</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper text-center mt-16">
        <h1 className="heading mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Who We Are</h1>
        <p>
          Founded with the mission to drive digital transformation, VIHAANG AI GLOBAL SERVICES PVT LTD
          specializes in providing cutting-edge AI, blockchain, and ML services
          across a wide range of sectors including energy, healthcare,
          e-commerce, real estate, and more. Our solutions are tailored to the
          unique needs of each client, ensuring the perfect blend of innovation
          and practicality.
          <br />
          <br />
          With a strong focus on empowering businesses, we offer a comprehensive
          suite of services that includes cloud computing, data analytics,
          cybersecurity, and advanced software development. We pride ourselves
          on delivering intelligent, scalable, and secure solutions that help
          our clients unlock new opportunities and achieve sustainable growth.
        </p>
      </section>

      {/* What We Stand For Section */}
      <section className="wrapper py-16">
        <div className="text-center mb-12">
          <h2 className="heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">What We Stand For</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-6 bg-white/80 rounded-lg shadow-lg border border-primary/10 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-primary mb-3">Innovation with Purpose</h3>
            <p className="text-gray-700">We don't chase trends. We create solutions that matter.</p>
          </div>
          <div className="p-6 bg-white/80 rounded-lg shadow-lg border border-primary/10 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-primary mb-3">Partnership Over Projects</h3>
            <p className="text-gray-700">Every client becomes a part of our journey.</p>
          </div>
          <div className="p-6 bg-white/80 rounded-lg shadow-lg border border-primary/10 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-primary mb-3">Precision in Execution</h3>
            <p className="text-gray-700">From strategy to deployment, we sweat the details.</p>
          </div>
          <div className="p-6 bg-white/80 rounded-lg shadow-lg border border-primary/10 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-primary mb-3">Scalable Growth</h3>
            <p className="text-gray-700">Our systems evolve with your business.</p>
          </div>
        </div>
      </section>
      <SolveITNeeds />
      <Footer />
    </div>
  );
};

export default AboutUs;
