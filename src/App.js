import React from "react";
import "./styles.css";
import { evaluate } from "mathjs";
let numberOfOperators = 0;
export default function App() {
  const handleClick = function (value) {
    let newUpdatedExpression;

    try {
      if (value === "+" || value === "-" || value === "*" || value === "/") {
        numberOfOperators++;
      }
      if (numberOfOperators >= 2) {
        newUpdatedExpression = "Invalid Expression";
      } else {
        newUpdatedExpression = expression.toString() + value;
      }
      setExpression(newUpdatedExpression);
    } catch (ex) {
      setExpression("");
    }
  };
  const calculate = function () {
    let res;
    numberOfOperators = 0;

    try {
      res = evaluate(expression);
      setExpression(res);
    } catch (ex) {
      setExpression("");
    }
  };
  const clear = function () {
    setExpression("");
    numberOfOperators = 0;
  };
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "+", "-", "*", "/"];
  const [expression, setExpression] = React.useState("");
  return (
    <>
      <div className="screen">{expression}</div>
      {arr.map((el) => (
        <button key={el} onClick={() => handleClick(el)}>
          {el}
        </button>
      ))}
      <button onClick={calculate}>=</button>

      <button onClick={clear}>Clear</button>
    </>
  );
}
