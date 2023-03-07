import { DEPOSITE_MONEY, WITHHDRAW_MONEY } from "./../actions/bankActions";

export const bankReducer = (state = 1000, action) => {
  switch (action.type) {
    case WITHHDRAW_MONEY:
      return state - action.payload;
    case DEPOSITE_MONEY:
      return state + action.payload;
    default:
      return state;
  }
};
