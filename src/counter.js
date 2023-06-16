import { useState, useReducer, useEffect } from "react";
const Counter = () => {
  // const [counterValue, setCounterValue] = useState(0);
  const [showNegative, setShowNegative] = useState(false); //this is used for negative value
  //root reducer function for Usereducer as 1st argument
  const rootReducer = (state, action) => {
    //initializing switch statement on action type
    switch (action.type) {
      case "increment":
        return { value: state.value + 1 };
      case "decrement":
        return { value: state.value - 1 };
      case "initial":
        return { value: 0 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(rootReducer, { value: 0 });
  const handleIncrement = () => {
    // setCounterValue(counterValue + 1);
    dispatch({ type: "increment" });
  };
  const handleDecrement = () => {
    // setCounterValue(counterValue - 1);

    dispatch({ type: "decrement" });
  };
  useEffect(() => {
    if (state.value < 0) {
      // Perform action for negative value
      console.log("Negative value detected!");
      setShowNegative(true);
      const timeoutId = setTimeout(() => {
        state.value = 0;
        setShowNegative(false);
      }, 3000); // 3 seconds
      return () => {
        clearTimeout(timeoutId);
      };
      // state.value = 0;
    }
  }, [state.value]);
  return (
    <div>
      {/* <p>{counterValue}</p> */}
      <p className="value">{state.value}</p>
      {showNegative && <p>Negative value detected!</p>}
      <div>
        <button className="btn" onClick={handleIncrement}>
          Increment
        </button>
        <button className="btn" onClick={handleDecrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
