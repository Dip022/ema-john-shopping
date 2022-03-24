import React from "react";

const Cart = ({ product }) => {
  console.log(product.name);
  const { img, name, price, seller, ratings } = product;
  return (
    <div>
      <h1>Name: {product.name}</h1>
    </div>
  );
};

export default Cart;
