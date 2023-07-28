import React from "react";
import Business from "./Business";
import TechMeet from "./Techmeet.jsx";
import ServicesImage from "./ServiceImage.jsx";
import "./medium.css";
import OurServices from "../OurServices";

const Medium = () => {
  return (
    <div>
      <Business />
      <TechMeet />
      <div className="our_services__section">
        <OurServices />
      </div>
      <ServicesImage />
    </div>
  );
};

export default Medium;
