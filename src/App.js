import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Products from "./components/Products";
import { deposite, withdraw } from "./RTK/slices/bankSlice";
// import { deposite, withdraw } from "./store/actions/bankActions";

const App = () => {
  const state = useSelector((state) => state.bank);
  const dispatch = useDispatch();
  console.log(state);
  return (
    <div className="App">
      <div>
        <p>bank account balance: {state}</p>
        <button onClick={() => dispatch(withdraw(100))}>withdraw</button>
        <br></br>
        <button onClick={() => dispatch(deposite(300))}>deposite</button>
      </div>
      <Products />
    </div>
  );
};

export default App;
