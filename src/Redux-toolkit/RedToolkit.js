import React from "react";
import { useSelector, useDispatch } from "react-redux";

const RedToolkit = () => {
  const dispatch = useDispatch();

  const globalState = useSelector((state) => state);

  // const Counterstate = useSelector((state) => {
  //   if (state.value < 1) {
  //     return "no number here";
  //   }
  //   return state.value;
  // });

  // const showToggle = useSelector((state) => state.showCounter);

  const handleCounterValue = (value) => {
    if (value < 1) {
      return "no number here";
    }
    return value;
  };

  const counterOperation = (type, payload) => {
    dispatch({ type: type, payload });
  };

  // const increase = () => {
  //   const action = { type: "increase", payload: 5 };
  //   dispatch(action);
  // };

  // const decrease = () => {
  //   const action = { type: "decrease", payload: 3 };
  //   dispatch(action);
  // };

  const toggleCounter = () => {
    dispatch({ type: "toggleCounter", payload: "" });
  };

  return (
    <div>
      <h1>Hello Redux Basic</h1>
      {globalState.showCounter && (
        <>
          <div className="counter">
            Counter:
            {handleCounterValue(globalState.value)}
          </div>
          ;
          <div>
            <button
              className="btn"
              onClick={() => {
                counterOperation("increase", 5);
              }}
            >
              increase +
            </button>
            <button className="btn" 
             onClick={() => {
              counterOperation("decrease", 3);
            }}
            >
              decrease -
            </button>
          </div>
          <div></div>
        </>
      )}
      <button className="btn" onClick={toggleCounter}>
        Hide/Show Counter Number
      </button>
    </div>
  );
};

export default RedToolkit;
