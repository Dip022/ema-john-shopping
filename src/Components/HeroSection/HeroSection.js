import React from "react";
import "./HeroSection.css";
import images from "../../images/hero-img.png";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-info">
        <p className="discount">Sale up to 70% off</p>
        <h1>New Collection For Fall</h1>
        <p>Discover all the new arrivals of ready-to-wear collection.</p>
        <button>SHOP NOW</button>
      </div>
      <div>
        <img src={images} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
