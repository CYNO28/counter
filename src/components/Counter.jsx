import React from "react";
import counter from "../style/counter.module.css";

const Counter = (prop) => {
  let [count, setCount] = React.useState(prop.value);

  return (
    <div className={count % 2 === 0 ? counter.green : counter.red}>
      <h2>Counter App</h2>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => {setCount(count - 1)}}>Decrement</button>
      <button onClick={() => {setCount(count * 2)}}>Double</button>


    </div>
  );
};
export default Counter;
