import React from "react";
import useForm from "../hook/use-form";
import { signupForm } from "./FormConfig";

import "./SignupForm.css";

function SignupForm() {
  const { renderFormInputs, isFormValid } = useForm(signupForm);
  const submitHandler = (e) => {
    e.preventDefault();
    //Check validity
  };
  return (
    <form className="signupForm">
      <h1>Sign Up</h1>

      {renderFormInputs()}

      <button type="submit" onSubmit={submitHandler} disabled={!isFormValid()}>
        Submit
      </button>
    </form>
  );
}
export default SignupForm;
