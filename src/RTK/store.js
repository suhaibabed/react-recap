import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
  },
});
