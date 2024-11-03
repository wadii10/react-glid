import React, { useState } from "react";
import useOld from "./useOld";

const Dashboard = () => {
  const [count, setCount] = useState(5);

  const before = useOld(count);
  
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button onClick={increment}>+</button>
      <h1>before:{before} </h1>
      <h1>after: {count}</h1>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Dashboard;
