import React, { useEffect } from "react";
import useForm from "../hook/use-form";
import { signupForm } from "./FormConfig";

import "./SignupForm.css";
import { useDispatch, useSelector } from "react-redux";
import { sendFetchData } from "../store/formActions";
import Notification from "./Notification";
function SignupForm() {
  const dispatch = useDispatch();

  const isNotification = useSelector((state) => state.ui.isNotification);
  const { renderFormInputs, isFormValid } = useForm(signupForm);
  const submitHandler = (e) => {
    e.preventDefault();
    //Check validity
  };
  useEffect(() => {
    if (isFormValid()) {
      console.log('submit');
      // a transformation of data send 
      dispatch(sendFetchData(renderFormInputs()));
    }
  }, [isFormValid]);
  return (
    <>
      {isNotification.show && (
        <Notification
          status={isNotification.status}
          message={isNotification.message}
        />
      )}

      <form className="signupForm">
        <h1>Sign Up</h1>

        {renderFormInputs()}

        <button
          type="submit"
          onSubmit={submitHandler}
          disabled={!isFormValid()}
        >
          Submit
        </button>
      </form>
    </>
  );
}
export default SignupForm;
