import React from "react";
import "./Header.css";
import images from "../../images/Logo.svg";
import HeroSection from "../HeroSection/HeroSection";

const Header = () => {
  return (
    <div>
      <div className="header">
        <img src={images} alt="" />
        <div className="menu">
          <a href="/order">Order</a>
          <a href="/order Review">Order Review</a>
          <a href="/manage Inventory">Manage Inventory</a>
          <a href="/about">About</a>
        </div>
      </div>
      <HeroSection></HeroSection>
    </div>
  );
};

export default Header;
