import classes from "./Header.module.css";
import { authAction } from "../store/auth";
import { useDispatch, useSelector } from "react-redux";
const Header = () => {
  const isAuth = useSelector((state) => state.auth.isAuthontication);
  const dispatch = useDispatch();
  const logOutHandler = (e) => {
    e.preventDefault();
    console.log(isAuth);
    dispatch(authAction.logOut());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logOutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
