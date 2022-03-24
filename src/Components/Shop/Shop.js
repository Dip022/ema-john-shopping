import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import "./Shop.css";

const Shop = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);
  return (
    <div className="shop">
      <div className="products">
        <Cart cart={cart}></Cart>
      </div>
      <div className="order-summary">
        <h1>order summary</h1>
      </div>
    </div>
  );
};

export default Shop;
