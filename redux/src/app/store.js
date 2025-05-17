import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import usersReducer from "../features/users/usersSlice";
import quoteReducer from "../features/quote/quoteSlice";
import productReducer from "../features/product/productSlice";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    // users: usersReducer,
    // // quote: quoteReducer,
    products: productReducer,
  },
});
