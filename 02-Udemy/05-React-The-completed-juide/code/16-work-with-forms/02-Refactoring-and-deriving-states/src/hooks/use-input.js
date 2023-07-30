import { useState } from "react";
const useInput = (applyValidation) => {
  const [entredVal, setEntredVal] = useState("");
  const [isTouchedInput, setTouchedInput] = useState(false);

  const isEntredValueInvalid = applyValidation(entredVal);
  const hasError = !isEntredValueInvalid && isTouchedInput;
  const inputChangeHandler = (event) => {
    setEntredVal(event.target.value);
  };
  const focusInputValid = (event) => {
    setTouchedInput(true);
  };
  // just we need a reste function

  const reste = () => {
    setEntredVal("");
    setTouchedInput(false);
  };
  return {
    value: entredVal,
    isValid:isEntredValueInvalid,
    hasError,
    inputChangeHandler,
    focusInputValid,
    reste,
  };
};

export default useInput;
