import React, { useEffect, useState } from "react";

const Shop = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h1>Welcome my ema john shopping</h1>
    </div>
  );
};

export default Shop;
