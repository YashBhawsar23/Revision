import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);

  return (
    <>
      <h1>Counter: {count}</h1>

      <button onClick={() => dispatch(increment())}>Increment By 1</button>
      <br />
      <button onClick={() => dispatch(decrement())}>Decrement By 1</button>
      <br />
      <div>
        <input
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
        />{" "}
        <br />
        <button onClick={() => dispatch(incrementByAmount(incrementAmount))}>
          Increment By Amount
        </button>
      </div>
    </>
  );
};

export default Counter;
