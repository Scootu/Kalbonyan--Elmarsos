import { useState } from "react";
import { Form, Link, useSearchParams } from "react-router-dom";

import classes from "./AuthForm.module.css";

function AuthForm() {
  // const [isLogin, setIsLogin] = useState(true);

  // function switchAuthHandler() {
  //   setIsLogin((isCurrentlyLogin) => !isCurrentlyLogin);
  // }

  const [searchParams] = useSearchParams();
  const params = searchParams.get("mode");
  const isLogin = params === "login";
  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
            {isLogin ? "Create new user" : "Login"}
          </Link>
          <button>Save</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
