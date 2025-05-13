import React from "react";

const products = [
  { id: 1, name: "iPhone 14" },
  { id: 2, name: "MacBook Pro" },
  { id: 3, name: "AirPods Pro" },
];

const ProductList = ({ addToCart }) => {
  return (
    <div>
      <h2>Products:</h2>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            {item.name}
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => addToCart(item)}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
