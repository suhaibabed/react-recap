import { configureStore } from "@reduxjs/toolkit";
import BankReducer from "./slices/bankSlice";
import addProducts from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    bank: BankReducer,
    products: addProducts,
  },
});
