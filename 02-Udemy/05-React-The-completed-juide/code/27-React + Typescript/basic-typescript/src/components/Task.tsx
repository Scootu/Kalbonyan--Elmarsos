import React from "react";

export const Task: React.FC<{ message: string }> = (props) => {
  return <li>{props.message}</li>;
};
