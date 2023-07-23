import { useCallback, useState } from "react";
import "./App.css";
import Button from "./UI/Button/Button";
import DemoOutPut from "./Demo/Demo";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [allowToggle, setIsAllowToggle] = useState(false);

  console.log('APP RUNNING');
  
  const toggleClickedBtn = useCallback(() => {
    if (allowToggle) {
      setIsClicked((preVal) => !preVal);
    }
  }, [allowToggle]);

  const showToggle = () => {
    setIsAllowToggle(true);
  };

  return (
    <div className="App">
      <h1>Hi there!</h1>
      <DemoOutPut show={isClicked} />
      <Button onClick={showToggle}>Allow Toggle</Button>
      <Button onClick={toggleClickedBtn}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
