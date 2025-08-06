import React from "react";
import bg from "../assets/images/footer-bg.jpg";
import logo from "../assets/images/logo/123logo123.svg";
import emailIcon from "../assets/images/icons/email.png";
import phoneIcon from "../assets/images/icons/phone.png";
import locationIcon from "../assets/images/icons/location.png";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { companyDetails, services } from "../data/constant";

const Footer = () => {
  return (
    <div
      className="border-t-2 py-[2rem] bg-cover bg-top"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="wrapper grid grid-cols-1 md:grid-cols-4 lg:grid-cols-[50%_20%_30%] gap-6">
        <div className="w-fit md:col-span-4 lg:col-span-1 md:place-self-center lg:place-self-auto">
          <img src={logo} alt="logo" className="w-[10rem] object-contain" />
        </div>
        <div className="md:col-span-2 lg:col-span-1 flex flex-col gap-4">
          <h6 className="text-lg font-medium">Our Services</h6>
          <div className="flex text-md">
            <ul className="flex flex-col gap-2">
              {services.map(({ id, title, link }) => (
                <Link to={link} key={id}>
                  {title}
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:col-span-2 lg:col-span-1 flex flex-col gap-4">
          <h6 className="text-lg font-medium">Contact Info</h6>
          <div className="flex flex-col gap-5">
            <ul className="flex flex-col gap-6 text-md">
              <li className="flex gap-2 items-center">
                <img
loading="lazy"                  src={emailIcon}
                  alt="email"
                  className="w-[1.5rem] object-contain grayscale"
                />
                <a href={`mailto:${companyDetails.email}`}>
                  <span className="font-medium">Email:</span> {companyDetails.email}
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <img
loading="lazy"                  src={phoneIcon}
                  alt="phone"
                  className="w-[1.5rem] object-contain grayscale"
                />
                <a href={`tel:${companyDetails.phone}`}>
                  <span className="font-medium">Phone:</span> {companyDetails.phone}
                </a>
              </li>
              <li className="flex gap-2 items-start">
                <img
loading="lazy"                  src={locationIcon}
                  alt="location"
                  className="w-[1.5rem] object-contain grayscale"
                />
                <span className="max-w-[15rem] text-wrap">
                  <span className="font-medium">Location:</span> {companyDetails.location}
                </span>
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <Link className="bg-primary/10 text-primary/70 w-[2.5rem] h-[2.5rem] rounded-full flex justify-center items-center text-2xl hover:bg-gradient-to-r hover:text-primary hover:-translate-y-1 transition-all duration-300">
                <FaFacebookF />
              </Link>
              <Link className="bg-primary/10 text-primary/70 w-[2.5rem] h-[2.5rem] rounded-full flex justify-center items-center text-2xl hover:bg-gradient-to-r hover:text-primary hover:-translate-y-1 transition-all duration-300">
                <FaInstagram />
              </Link>
              <Link className="bg-primary/10 text-primary/70 w-[2.5rem] h-[2.5rem] rounded-full flex justify-center items-center text-2xl hover:bg-gradient-to-r hover:text-primary hover:-translate-y-1 transition-all duration-300">
                <FaLinkedin />
              </Link>
              <Link className="bg-primary/10 text-primary/70 w-[2.5rem] h-[2.5rem] rounded-full flex justify-center items-center text-2xl hover:bg-gradient-to-r hover:text-primary hover:-translate-y-1 transition-all duration-300">
                <FaTwitter />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
