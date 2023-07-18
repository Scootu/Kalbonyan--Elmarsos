import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cartcontext";
const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);

  const CartVal = ctx.item.reduce((accVal, curVal) => {
    return accVal + curVal.amount;
  }, 0);
  
  console.log("header value ", ctx.item);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{CartVal}</span>
    </button>
  );
};

export default HeaderCartButton;
