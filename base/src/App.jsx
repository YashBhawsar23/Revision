import React, { useState } from "react";
import CartSummary from "./CartSummary";
import ProductList from "./ProductList";

const App = () => {
  const [cartItems, setCartitems] = useState([]);

  const addToCart = (product) => {
    setCartitems((prev) => [...prev, product]);
  };

  return (
    <>
      <h1>Lifting State Up</h1>
      <h1>🛒 Shopping Cart</h1>
      <CartSummary cartItems={cartItems} />
      <ProductList addToCart={addToCart} />
    </>
  );
};

export default App;
