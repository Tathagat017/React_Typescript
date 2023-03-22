import React, { useState } from "react";
import Button from "./Button";
const Counter = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <h1>Counter : {count}</h1>
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>Add</button>
        <button onClick={() => setCount((prev) => prev - 1)}>Substract</button>
      </div>
    </div>
  );
};

export default Counter;
