import { Fragment } from "react";
import classes from "./Module.module.css";
import { createPortal } from "react-dom";
const ModuleOverLays = (props) => {
  return (
    <div className={classes.backdrop}>
      <div className={classes.module}>{props.children}</div>
    </div>
  );
};

const Module = (props) => {
  const porttalElement = document.getElementById("overLays");
  return (
    <Fragment>
      {createPortal(
        <ModuleOverLays>{props.children}</ModuleOverLays>,
        porttalElement
      )}
    </Fragment>
  );
};
export default Module;
