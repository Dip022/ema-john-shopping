import React from "react";
import "./Cart.css";

const Cart = ({ product }) => {
  console.log(product.name);
  const { img, name, price, seller, ratings } = product;
  return (
    <div className="cart">
      <div className="product-info">
        <img src={img} alt="" />
        <p className="product-name">{name}</p>
        <p className="product-price">
          Price: <span>$</span>
          {price}
        </p>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings} start</p>
      </div>
    </div>
  );
};

export default Cart;
