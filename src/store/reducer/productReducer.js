import { ADD_PRODUCT, GET_PRODUCT } from "../actions/productActions";

export const productReducer = (
  state = [{ id: 1, title: "product1" }],
  action
) => {
  switch (action.type) {
    case GET_PRODUCT:
      return [...action.payload];
    case ADD_PRODUCT:
      return [...state, action.payload];
    default:
      return state;
  }
};
