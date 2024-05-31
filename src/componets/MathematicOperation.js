const MathematicOperation = (props) => {
  const { operation, num1, num2, setResult, x, y } = props;
  let result = 0;
  console.log("Inside MathematicOperation x,y", x, y);
  const handAction = () => {
    //caclulator logic

    if (operation === "Add") {
      result = Number(x) + Number(y);
    } else if (operation === "Subtract") {
      result = Number(num1) - Number(num2);
    } else if (operation === "Multiply") {
      result = Number(num1) * Number(num2);
    } else {
      result = Number(num1) / Number(num2);
    }
    setResult(result);
  };

  return (
    <>
      <button onClick={() => handAction()}>{operation}</button>
    </>
  );
};

export default MathematicOperation;
