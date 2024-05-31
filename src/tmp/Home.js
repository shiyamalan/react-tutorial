import { useRef, useState } from "react";
import MathematicOperation from "../componets/MathematicOperation";
import "./Home.css";
const Home = () => {
  const numRef1 = useRef();
  const numRef2 = useRef();
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  let x, y;
  console.log("Render Home Page X, y", x, y);

  const handleCange = () => {
    x = numRef1.current.value; // assigining num1 value here
    y = numRef2.current.value;
    // setNum1(numRef1.current.value);
    // setNum2(numRef2.current.value);
  };
  return (
    <>
      <div id="num1">
        <label className="number">Enter First Number :-</label>
        <input
          type="number"
          ref={numRef1}
          onChange={() => handleCange()}
        ></input>
      </div>

      <div id="num2">
        <label className="number">Enter Second Number :-</label>
        <input
          type="number"
          ref={numRef2}
          onChange={() => handleCange()}
        ></input>
      </div>

      <MathematicOperation
        operation="Add"
        x={x}
        y={y}
        num1={num1}
        num2={num2}
        setResult={setResult}
      ></MathematicOperation>
      {/* <MathematicOperation
        operation="Subtract"
        num1={num1}
        num2={num2}
        setResult={setResult}
      ></MathematicOperation>
      <MathematicOperation
        operation="Multiply"
        num1={num1}
        num2={num2}
        setResult={setResult}
      ></MathematicOperation>
      <MathematicOperation
        operation="Division"
        num1={num1}
        num2={num2}
        setResult={setResult}
      ></MathematicOperation> */}

      <div id="result">
        <label>Final Result is :- {result}</label>
      </div>
    </>
  );
};

export default Home;
