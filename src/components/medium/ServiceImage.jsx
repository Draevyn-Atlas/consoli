import React from "react";
import Image1 from "../../assets/Image Placeholder.png";
import Image2 from "../../assets/Image Placeholder (1).png";
import Image3 from "../../assets/Image Placeholder (2).png";
const imageData = [
  {
    id: 1,
    image: Image1,
    title: "Increased Efficiency :",
    desc: "Streamline operations, reduce manual tasks, and free up your team's time for strategic activities.",
  },
  {
    id: 2,
    image: Image2,
    title: "AUTOMATED WORKFLOWS :",
    desc: "Reduce human error and increase productivity with automated workflows designed specifically for your business",
  },
  {
    id: 3,
    image: Image3,
    title: "INFORMATION :",
    desc: "Experience significant cost savings by implementing intelligent Al systems that minimize resource usage and maximize output.",
  },
];
const ServicesImage = () => {
  return (
    <div className="services">
      <div className="services_cards">
        {imageData.map(({ id, title, image, desc }) => {
          return (
            <div key={id} className="services_card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="services_text">
                <p className="title">{title.toLocaleUpperCase()}</p>
                <p className="desc">{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesImage;
