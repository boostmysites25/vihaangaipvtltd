import React from "react";
import { Link } from "react-router-dom";
import { companyDetails } from "../data/constant";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppIcon = () => {
  return (
    <Link
      rel="noreferrer"
      target="_blank"
      to={"//wa.me/" + companyDetails.phone.replace("+", "")}
      className="w-[4rem] z-30 hover:-translate-y-1 h-[4rem] cursor-pointer rounded-full border-4 border-white bg-[#25D366] hover:bg-[#0f0f0f] fixed bottom-7 right-7 flex items-center justify-center transition-all duration-300"
    >
      <FaWhatsapp className="text-white text-4xl" />
    </Link>
  );
};

export default WhatsAppIcon;
