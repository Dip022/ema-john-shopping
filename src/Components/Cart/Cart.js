import React from "react";

const Cart = ({ product }) => {
  console.log(product.name);
  return (
    <div>
      <h1>Name: {product.name}</h1>
    </div>
  );
};

export default Cart;
