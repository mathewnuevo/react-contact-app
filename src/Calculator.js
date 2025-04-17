// src/Calculator.js
import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const clear = () => {
    setInput("");
  };

  const buttons = [
    "7", "8", "9", "/", 
    "4", "5", "6", "*", 
    "1", "2", "3", "-", 
    "0", ".", "=", "+"
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Simple Calculator</h2>
      <div className="card p-4 mx-auto" style={{ maxWidth: "300px" }}>
        <input
          type="text"
          className="form-control mb-3 text-end"
          value={input}
          readOnly
        />
        <div className="d-grid gap-2">
          {buttons.map((btn, i) => (
            <button
              key={i}
              className={`btn ${btn === "=" ? "btn-success" : "btn-secondary"}`}
              onClick={() => (btn === "=" ? calculate() : handleClick(btn))}
            >
              {btn}
            </button>
          ))}
          <button className="btn btn-danger" onClick={clear}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
