import { combineReducers, createStore, applyMiddleware } from "redux";
import { bankReducer } from "./reducer/bankReducer";
import { productReducer } from "./reducer/productReducer";
import thunk from "redux-thunk";

const appReducer = combineReducers({
  bank: bankReducer,
  products: productReducer,
});

export const store = createStore(appReducer, applyMiddleware(thunk));
