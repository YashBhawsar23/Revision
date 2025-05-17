import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./productSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h2>🛍️ Product List</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {!loading &&
          items.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "10px",
                width: "200px",
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{ height: "150px", objectFit: "contain" }}
              />
              <h4>{product.title}</h4>
              <p>💵 ${product.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductList;
