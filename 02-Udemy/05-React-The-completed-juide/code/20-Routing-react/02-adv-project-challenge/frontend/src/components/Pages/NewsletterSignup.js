import classes from "./NewsletterSignup.module.css";
import { Form } from "react-router-dom";
function NewsletterSignup() {
  return (
    <Form method="POST" className={classes.newsletter}>
      <input
        type="email"
        name="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button type="submit">Sign up</button>
    </Form>
  );
}

export default NewsletterSignup;
