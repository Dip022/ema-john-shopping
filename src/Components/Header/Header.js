import React from "react";
import "./Header.css";
import images from "../../images/Logo.svg";

const Header = () => {
  return (
    <div className="header">
      <img src={images} alt="" />
      <div className="menu">
        <a href="/order">Order</a>
        <a href="/order Review">Order Review</a>
        <a href="/manage Inventory">Manage Inventory</a>
        <a href="/about">About</a>
      </div>
    </div>
  );
};

export default Header;
