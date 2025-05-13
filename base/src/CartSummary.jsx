import React from "react";

const CartSummary = ({ cartItems }) => {
  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <strong>Items in Cart:</strong> {cartItems.length}
      </div>
    </>
  );
};

export default CartSummary;
