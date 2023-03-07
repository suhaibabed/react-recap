export const WITHHDRAW_MONEY = "WITHHDRAW_MONEY";
export const DEPOSITE_MONEY = "DEPOSITE_MONEY";

export const withdraw = function (amount) {
  return {
    type: WITHHDRAW_MONEY,
    payload: amount,
  };
};

export const deposite = function (amount) {
  return {
    type: DEPOSITE_MONEY,
    payload: amount,
  };
};
