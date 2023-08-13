import { useSelector } from "react-redux";
import classes from "./Notification.module.css";
function Notification({ message, status }) {
  const classContainer = `${classes[`${status}`]} ${classes.content} `;
  return <header className={classContainer}>{message}</header>;
}

export default Notification;
