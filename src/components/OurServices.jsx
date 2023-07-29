import React from "react";
import "./OurServices.css";
import service_logo from "./../assets/Service 1.png";

const OurServices = () => {
  return (
    <div className="our_services__div" id="our_services__div">
      <h1>Our Services</h1>
      <img id="our_services__img" src={service_logo} alt="our_services" />
    </div>
  );
};

export default OurServices;
