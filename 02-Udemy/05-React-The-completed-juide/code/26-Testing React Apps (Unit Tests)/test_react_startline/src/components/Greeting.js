import React from "react";
import { useState } from "react";
import { Output } from "./Output";
export const Greeting = () => {
  const [changedText, setChangedText] = useState(false);
  const changeTextHandler = () => {
    setChangedText(!changedText);
  };
  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <p>It's good here</p>}
      {changedText && <p>Changed!</p>}
      <button
        type="button"
        onClick={() => {
          setChangedText(true);
        }}
      >
        Change Text!
      </button>
    </div>
  );
};
