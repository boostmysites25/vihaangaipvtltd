import React from "react";
import img1 from "../../assets/images/services-details/blockchain1.jpg";
import img2 from "../../assets/images/services-details/blockchain2.jpeg";
import { Link } from "react-router-dom";
import { services } from "../../data/constant";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const BlockchainDevelopment = () => {
  const prev = services[2];
  const next = services[4];
  return (
    <div className="flex flex-col gap-10">
      <img
loading="lazy"        data-aos="fade-up"
        src={img1}
        
        className="h-[25rem] object-cover rounded-3xl object-top"
        alt="blockchain"
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Blockchain Solutions
        </h2>
        <p data-aos="fade-up" className="description">
          Blockchain technology is reshaping the modern business landscape,
          offering unmatched transparency, security, and efficiency. At VIHAANG AI GLOBAL SERVICES PVT LTD,
          we specialize in providing comprehensive blockchain development
          services tailored to meet the unique needs of businesses across
          industries. From secure smart contracts to decentralized applications,
          our solutions empower organizations to optimize operations, mitigate
          risks, and drive innovation.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Blockchain Solutions for Business Transformation
        </h2>
        <p data-aos="fade-up" className="description">
          Beyond operational efficiency, blockchain offers opportunities for
          innovation and growth. Companies can use it to manage digital assets,
          enhance supply chain transparency, and enable new business models,
          such as tokenization and decentralized finance. At VIHAANG AI GLOBAL SERVICES PVT LTD, we guide
          organizations through adopting blockchain technologies, ensuring they
          are not only prepared for the future but are at the forefront of
          industry transformation.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-7">
        <div className="h-full w-full">
          <img
loading="lazy"            
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-cover rounded-md"
            alt="blockchain"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Smart Contracts Development
              </h3>
            </div>
            <p>
              Develop and deploy smart contracts to automate agreements, enhance
              security, and reduce the risk of fraud.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Decentralized Applications (DApps)
              </h3>
            </div>
            <p>
              Build decentralized applications that provide enhanced security,
              transparency, and autonomy for various business processes.
            </p>
          </div>
        </div>
      </div>
      <p>
        At VIHAANG AI GLOBAL SERVICES PVT LTD, we harness the power of blockchain to help businesses
        modernize their operations. Our expertise includes developing solutions
        that streamline processes, automate agreements, and enhance data
        integrity, making business transactions more secure and trustworthy. By
        leveraging blockchain's decentralized nature, companies can reduce
        reliance on intermediaries and lower the risk of fraud.
      </p>
      <hr />
      <div className="flex w-full justify-between gap-6">
        <Link to={prev.link} className="flex items-center gap-3">
          <img
loading="lazy"            src={prev.icon}
            alt=""
            className="w-[3rem] h-[3rem] hidden sm:inline-block object-contain grayscale"
          />
          <div className="flex flex-col gap-1">
            <h6 className="text-md font-semibold">{prev.title}</h6>
            <p className="flex items-center gap-2 text-sm text-secondary">
              <IoIosArrowRoundBack className="text-2xl" /> Previous
            </p>
          </div>
        </Link>
        <Link to={next.link} className="flex items-center gap-3">
          <img
loading="lazy"            src={next.icon}
            alt=""
            className="w-[3rem] h-[3rem] hidden sm:inline-block object-contain grayscale"
          />
          <div className="flex flex-col gap-1">
            <h6 className="text-md font-semibold">{next.title}</h6>
            <p className="flex items-center gap-2 text-sm text-secondary">
              Next <IoIosArrowRoundForward className="text-2xl" />
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlockchainDevelopment;
