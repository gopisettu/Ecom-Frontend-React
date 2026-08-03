import { configureStore } from "@reduxjs/toolkit";
import { CartReducer } from "./Reducer/CartReducer";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});