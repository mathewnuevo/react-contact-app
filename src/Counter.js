// src/Counter.js
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">🧮 Counter</h2>
      <div className="d-flex justify-content-center align-items-center gap-3">
        <button className="btn btn-danger" onClick={() => setCount(count - 1)}>−</button>
        <h3>{count}</h3>
        <button className="btn btn-success" onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div className="text-center mt-3">
        <button className="btn btn-secondary" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
