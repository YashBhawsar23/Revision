// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchProducts } from "./productSlice";

// const ProductList = () => {
//   const dispatch = useDispatch();
//   const { items, loading, error } = useSelector((state) => state.products);

//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   return (
//     <div>
//       <h2>🛍️ Product List</h2>
//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
//         {!loading &&
//           items.map((product) => (
//             <div
//               key={product.id}
//               style={{
//                 border: "1px solid #ccc",
//                 borderRadius: "8px",
//                 padding: "10px",
//                 width: "200px",
//               }}
//             >
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 style={{ height: "150px", objectFit: "contain" }}
//               />
//               <h4>{product.title}</h4>
//               <p>💵 ${product.price}</p>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;

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
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          🛍️ Product List
        </h2>

        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="ml-4 text-lg text-gray-600">Loading products...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-700 text-center font-medium">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {items.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 hover:border-blue-300"
              >
                <div className="aspect-square bg-gray-100 p-4 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2 min-h-10">
                    {product.title}
                  </h4>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-green-600">
                      ${product.price}
                    </span>
                    <span className="text-2xl">💵</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && !error && items.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
