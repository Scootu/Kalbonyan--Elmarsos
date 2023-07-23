import { memo } from "react";
import MyParagraph from "./MyParagraph";
const DemoOutPut = (props) => {
  console.log("DemoOutPut");
  return <MyParagraph>{props.show ? "Button IS clicked !" : ""}</MyParagraph>;
};

export default memo(DemoOutPut);
