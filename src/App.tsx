import React from "react";
import { useAppDispatch, useAppSelector } from "./redux-hooks";
import { decrement, increment } from "./counterSlice";
function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <p>Counter: {count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  );
}

export default App;
