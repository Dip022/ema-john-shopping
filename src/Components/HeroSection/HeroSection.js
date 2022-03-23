import React from "react";
import "./HeroSection.css";

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
        <h1>Hero image</h1>
      </div>
    </div>
  );
};

export default HeroSection;
