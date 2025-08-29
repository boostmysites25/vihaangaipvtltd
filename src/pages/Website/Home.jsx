import React, { useState, Suspense } from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Experience from "../../components/Experience";
import Testimonials from "../../components/Testimonials";
import AssociatedWith from "../../components/AssociatedWith";
import Footer from "../../components/Footer";
import LeadForm from "../../components/LeadForm";
import line from "../../assets/images/line.png";
import {
  companyDetails,
  industriesCompanyServe,
  services,
} from "../../data/constant";
import aboutImg from "../../assets/images/home-aboutus.webp";
import whoWeAre from "../../assets/images/who-we-are.webp";
import ServiceItemCard from "../../components/Website/ServiceItemCard";
import { Link } from "react-router-dom";
import WorkFlow from "../../components/WorkFlow";

// Lazy load components for better performance
const Header = React.lazy(() => import("../../components/Website/Header"));
const Banner = React.lazy(() => import("../../components/Website/Banner"));

// Loading component for Suspense fallback
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-secondary"></div>
  </div>
);

// Schema markup for Local Business
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "VIHAANG AI GLOBAL SERVICES PVT LTD",
  description:
    "VIHAANG AI GLOBAL SERVICES PVT LTD is a globally recognized leader in delivering cutting-edge technology solutions including AI, Machine Learning, Blockchain, and Cloud Computing.",
  image: companyDetails.logo,
  address: {
    "@type": "PostalAddress",
    streetAddress: "10-47 Ambedkar Nagar, Jawaharnagar",
    addressLocality: "Turumalagiri",
    addressRegion: "Telangana",
    postalCode: "500087",
    addressCountry: "India",
  },
};

const Home = () => {
  const [showAll, setShowAll] = useState(false);
  const firstSix = services.slice(0, 6);
  const remaining = services.slice(6);

  return (
    <>
      <Helmet>
        <title>
          VIHAANG AI GLOBAL SERVICES PVT LTD - Leading AI & Technology Solutions Provider | Custom Software
          Development
        </title>
        <meta
          name="description"
          content="VIHAANG AI GLOBAL SERVICES PVT LTD offers cutting-edge AI, Machine Learning, and Blockchain solutions. Transform your business with our custom software development and technology consulting services."
        />
        <meta
          name="keywords"
          content="AI solutions, Machine Learning, Blockchain, Custom Software Development, Technology Consulting"
        />
        <link rel="canonical" href="https://www.aiwebx.com" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="VIHAANG AI GLOBAL SERVICES PVT LTD - Leading AI & Technology Solutions Provider"
        />
        <meta
          property="og:description"
          content="Transform your business with cutting-edge AI, Machine Learning, and Blockchain solutions from VIHAANG AI GLOBAL SERVICES PVT LTD."
        />
        <meta property="og:image" content={aboutImg} />
        <meta property="og:url" content="https://www.aiwebx.in" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="VIHAANG AI GLOBAL SERVICES PVT LTD - Leading AI & Technology Solutions Provider"
        />
        <meta
          name="twitter:description"
          content="Transform your business with cutting-edge AI, Machine Learning, and Blockchain solutions."
        />
        <meta name="twitter:image" content={aboutImg} />

        {/* Preload critical resources */}
        <link rel="preload" href={aboutImg} as="image" />
        <link rel="preload" href={whoWeAre} as="image" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <div className="landing-bg">
        <Suspense fallback={<LoadingFallback />}>
          <Header />
          <Banner />
        </Suspense>

        <main>
          <section
            id="services"
            className="w-screen min-h-[70vh] flex justify-center relative pt-[3rem]"
            aria-label="Our Services"
          >
            <div className="blurred-blue left-[-10%] top-[-10%]"></div>
            <div className="wrapper py-10 flex flex-col items-center gap-5 z-10">
              <div data-aos="fade-up" className="flex items-center gap-3">
                <LazyLoadImage
                  src={line}
                  alt="Decorative line"
                  className="w-[3rem]"
                  effect="blur"
                  threshold={100}
                />
                <h2 className="font-medium text-secondary capitalize">
                  Our Core Expertise
                </h2>
              </div>
              <h1 data-aos="fade-up" className="heading text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                We Provide the Best IT Solution Services
              </h1>
              <p data-aos="fade-up" className="text-center max-w-2xl">
                At VIHAANG AI GLOBAL SERVICES PVT LTD, we specialize in delivering full-spectrum product development services under one roof — combining design thinking, engineering excellence, and deep domain knowledge to help you stay ahead of the curve.
              </p>
              <div
                data-aos="fade-up"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-10 mx-auto max-w-6xl"
              >
                {firstSix.map((item) => (
                  <ServiceItemCard key={item.id} item={item} />
                ))}
                {showAll && remaining.map((item) => (
                  <ServiceItemCard key={item.id} item={item} />
                ))}
              </div>
              {remaining.length > 0 && (
                <button
                  className="mt-6 px-6 py-2 rounded bg-secondary text-white font-semibold shadow hover:bg-primary transition-all"
                  onClick={() => setShowAll((prev) => !prev)}
                >
                  {showAll ? "Show Less" : `Show More (${remaining.length})`}
                </button>
              )}
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="wrapper max-w-5xl mx-auto my-8 bg-white/80 rounded-xl shadow-lg p-6 flex flex-col items-center border border-primary/20">
            <h2 className="text-3xl font-bold text-primary mb-6">Why Choose Us</h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3 rounded-lg border-l-4 border-secondary bg-secondary/5 cursor-pointer transition-all duration-300 hover:shadow-lg hover:bg-secondary/10">
                <p className="text-lg text-gray-800">Proven track record across industries</p>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg border-l-4 border-secondary bg-secondary/5 cursor-pointer transition-all duration-300 hover:shadow-lg hover:bg-secondary/10">
                <p className="text-lg text-gray-800">Agile & transparent development process</p>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg border-l-4 border-secondary bg-secondary/5 cursor-pointer transition-all duration-300 hover:shadow-lg hover:bg-secondary/10">
                <p className="text-lg text-gray-800">End-to-end support — from strategy to launch</p>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg border-l-4 border-secondary bg-secondary/5 cursor-pointer transition-all duration-300 hover:shadow-lg hover:bg-secondary/10">
                <p className="text-lg text-gray-800">Scalable architecture built for performance</p>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg border-l-4 border-secondary bg-secondary/5 cursor-pointer transition-all duration-300 hover:shadow-lg hover:bg-secondary/10">
                <p className="text-lg text-gray-800">Dedicated team for every project</p>
              </div>
            </div>
            <p className="mt-6 text-center text-gray-600 italic">
              We don't just deliver software — we deliver value, results, and real business growth.
            </p>
          </section>

          <section
            className="wrapper py-[2rem] flex flex-col gap-3"
            aria-label="Industries We Serve"
          >
            <div className="flex flex-col gap-3">
              <h2 data-aos="fade-up" className="heading text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Industries We Serve
              </h2>
              <p data-aos="fade-up" className="mt-2 text-center mb-3">
                We cater to a wide range of industries, delivering tailored AI
                and tech solutions to meet specific needs:
              </p>
            </div>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-7">
              {industriesCompanyServe.map((item) => (
                <div
                  key={item.id}
                  data-aos="fade-up"
                  className="p-5 rounded-lg shadow-lg relative group overflow-hidden min-h-[12rem]"
                >
                  <LazyLoadImage
                    width="200"
                    height="100"
                    src={item.img}
                    alt={`${item.title} industry solutions`}
                    className="w-full h-full object-cover absolute top-0 left-0 rounded group-hover:scale-110 transition-all duration-300"
                    effect="blur"
                    threshold={100}
                  />
                  <div className="w-full h-full absolute top-0 left-0 bg-white/70 group-hover:bg-black/60 transition-all duration-300"></div>
                  <h3 className="text-center text-[1.3rem] font-medium relative z-10 group-hover:text-white transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-800 text-md mt-2 relative z-10 group-hover:text-white transition-all duration-300">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <WorkFlow />

            <section
              className="wrapper pb-10 flex flex-col items-center gap-5 z-10"
              aria-label="About Company"
            >
              <div data-aos="fade-up" className="flex items-center gap-3">
                <LazyLoadImage
                  src={line}
                  alt="Decorative line"
                  className="w-[3rem]"
                  effect="blur"
                  threshold={100}
                />
                <h2 className="font-medium text-secondary">About Company</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-10 md:mb-[7rem]">
                <div className="relative" data-aos="fade-right">
                  <LazyLoadImage
                    src={whoWeAre}
                    width="500"
                    height="400"
                    alt="VIHAANG AI GLOBAL SERVICES PVT LTD company overview"
                    className="rounded-lg h-[20rem] sm:h-full aspect-square w-full object-cover object-right"
                    effect="blur"
                    threshold={100}
                  />
                  <div className="w-full sm:w-fit sm:max-w-[18rem] text-white h-full sm:h-fit absolute md:-bottom-[5rem] bottom-0 left-0 bg-primary/70 sm:bg-primary p-5 rounded-lg">
                    <h3 className="text-5xl font-bold text-white">2+</h3>
                    <p className="font-medium mt-3 text-white">
                      Years of Experience
                    </p>
                    <p className="pl-5 border-l-2 border-white text-md mt-3 text-white">
                      The trusted choice for your software development solutions
                    </p>
                  </div>
                </div>
                <div data-aos="fade-right" className="flex flex-col gap-5">
                  <h2 className="heading-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Driven by Innovation. Built for Impact.
                  </h2>
                  <p>
                    We're not just a development agency — we're your technology partner in building exceptional digital experiences that make businesses smarter, faster, and future-ready.
                  </p>
                  <p>
                    At our core, we're a team of developers, designers, strategists, and tech enthusiasts who believe that technology, when paired with purpose, can create real-world value. From cutting-edge UI/UX design to AI-powered solutions, from full-stack web development to cloud-native architectures, we're here to help you transform your ideas into meaningful digital products.
                  </p>
                  <p>
                    We collaborate closely with startups, SMEs, and enterprises to design and develop custom solutions that not only meet industry standards but push the boundaries of what's possible.
                  </p>
                  <Link to="/about-us" className="primary-btn mt-7 w-fit">
                    Know More About Us
                  </Link>
                </div>
              </div>
            </section>
          </section>

          <Experience />
          <Testimonials />
          <LeadForm />
          <AssociatedWith />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
