import React from "react";
import img1 from "../../assets/images/services-details/arvr1.jpg";
import img2 from "../../assets/images/services-details/arvr2.jpeg";
import { Link } from "react-router-dom";
import { services } from "../../data/constant";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const ARAndVR = () => {
  const prev = services[4];
  const next = services[6];
  return (
    <div className="flex flex-col gap-10">
      <img
loading="lazy"        data-aos="fade-up"
        src={img1}
        
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="cloud computing"
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          Cloud Computing Services
        </h2>
        <p data-aos="fade-up" className="description">
          In today's fast-paced digital landscape, cloud computing has become an
          essential component for businesses seeking to enhance flexibility,
          scalability, and efficiency. At AI Company, we offer comprehensive cloud
          computing services designed to empower organizations to leverage the
          full potential of cloud technology. Our focus on delivering tailored
          solutions ensures that businesses can adapt to changing demands while
          optimizing their operations.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Elevating Business Potential
        </h2>
        <p data-aos="fade-up" className="description">
          Cloud computing provides numerous advantages, including cost savings,
          enhanced collaboration, and improved data security. By migrating to
          the cloud, organizations can significantly reduce their IT
          infrastructure costs, as they no longer need to invest in expensive
          hardware and maintenance. Instead, they can utilize scalable cloud
          resources that allow them to pay only for what they need. This model
          is particularly beneficial for startups and small businesses, which
          can access advanced technologies without a hefty upfront investment.
          <br />
          <br />
          At AI Company, we offer a range of cloud services, including
          Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and
          Software as a Service (SaaS). Our IaaS solutions provide businesses
          with virtualized computing resources, enabling them to run
          applications and store data in a flexible and scalable environment.
          With PaaS, we empower developers to build, test, and deploy
          applications without worrying about the underlying infrastructure,
          allowing them to focus on innovation.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-7">
        <div className="h-full w-full">
          <img
loading="lazy"            
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-cover rounded-md"
            alt="cloud computing"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Cost-Effective Scalability
              </h3>
            </div>
            <p>
              Our cloud services allow businesses to scale their resources
              according to demand, promoting efficiency and cost savings.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Expert Guidance and Support
              </h3>
            </div>
            <p>
              We provide end-to-end support for clients during their cloud
              journey, ensuring a smooth transition and ongoing success.
            </p>
          </div>
        </div>
      </div>
      <p>
        As technology continues to evolve, AI Company remains committed to
        exploring new advancements in cloud computing. We stay informed about
        emerging trends and innovations, ensuring that our clients benefit from
        the latest capabilities. Our dedication to continuous improvement drives
        us to refine our cloud services, providing clients with cutting-edge
        solutions that enhance their operational effectiveness.
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

export default ARAndVR;
