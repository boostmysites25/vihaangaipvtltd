import React from "react";
import img1 from "../../assets/images/services-details/chatbot1.webp";
import img2 from "../../assets/images/services-details/chatbot2.webp";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { services } from "../../data/constant";

const ChatbotDevelopment = () => {
  const next = services[7]; // Data Analytics & Business Intelligence
  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="Chatbot Development"
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Chatbot Development
        </h2>
        <p data-aos="fade-up" className="description">
          At VIHAANG AI GLOBAL SERVICES PVT LTD, we create intelligent conversational AI solutions that revolutionize customer engagement and streamline business operations. Our chatbot development services leverage advanced natural language processing and machine learning to deliver human-like interactions that enhance user experience and drive business efficiency.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Intelligent Conversational AI Solutions
        </h2>
        <p data-aos="fade-up" className="description">
          Our chatbot development process begins with a comprehensive analysis of your business requirements, customer interaction patterns, and integration needs. We design conversational flows that align with your brand voice and business objectives, ensuring that every interaction adds value to both your customers and your organization. Our team specializes in creating chatbots that can handle complex queries, provide personalized responses, and seamlessly integrate with your existing systems.
          <br />
          <br />
          We utilize cutting-edge NLP technologies and machine learning algorithms to develop chatbots that continuously learn and improve from user interactions. Our solutions include advanced features such as sentiment analysis, intent recognition, and context awareness, enabling chatbots to provide more accurate and helpful responses over time. We also implement robust security measures and compliance protocols to ensure data privacy and regulatory adherence.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-cover object-left rounded-md"
            alt="Chatbot Solutions"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                AI-Powered Customer Support
              </h3>
            </div>
            <p>
              Intelligent chatbots that provide 24/7 customer support, handle complex queries, and seamlessly escalate to human agents when needed.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Multi-Platform Integration
              </h3>
            </div>
            <p>
              Chatbots that integrate seamlessly with websites, mobile apps, messaging platforms, and CRM systems for unified customer experience.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">Conversational Analytics</h3>
            </div>
            <p>
              Advanced analytics and reporting tools that provide insights into user interactions, conversation patterns, and chatbot performance optimization.
            </p>
          </div>
        </div>
      </div>
      <p>
        At VIHAANG AI GLOBAL SERVICES PVT LTD, we believe that conversational AI is transforming how businesses interact with their customers and operate internally. Our chatbot solutions are designed to not only automate routine tasks but also create meaningful, engaging experiences that strengthen customer relationships and drive business growth. We are committed to staying at the forefront of conversational AI technology to deliver innovative solutions that meet the evolving needs of modern businesses.
      </p>
      <hr />
      <div className="flex flex-col sm:flex-row w-full justify-end gap-6">
        <Link to={next.link} className="flex items-center self-end gap-3">
          <img
            loading="lazy"
            src={next.icon}
            alt=""
            className="w-[3rem] h-[3rem] object-contain grayscale"
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

export default ChatbotDevelopment;