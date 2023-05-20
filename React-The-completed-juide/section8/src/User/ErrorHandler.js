// import React from "react";
import React from "react";
import styled from "./ErrorHandler.module.css";
import ReactDOM from "react-dom";
import Button from "../UI/Button";

const ErrorHandler = (props) => {
  const BackDrop = () => {
    return <div className={styled.outErrorBox}></div>;
  };
  const InDrop = () => {
    return (
      <div className={styled.insideErrorBox}>
        <h2 className={styled.insideHeaderText}>Invalid input</h2>
        <div className={styled.insidesubText}>
          Please enter a valid name and age (non-empty values).
        </div>
        <div className={styled.button}>
          <Button onClick={props.onGetAns}>Okay</Button>
        </div>
      </div>
    );
  };
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop />,
        document.getElementById("Back-Drop")
      )}
      {ReactDOM.createPortal(<InDrop />, document.getElementById("In-Drop"))}
    </React.Fragment>
  );
};
export default ErrorHandler;
