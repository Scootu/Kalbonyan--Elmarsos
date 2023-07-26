import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../../store/cartcontext";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
  const removeHandler = (id) => {
    ctx.removeItem(id);
  };
  const addHandler = (item) => {
    ctx.addItem(item);
  };
  const CartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onRemove={removeHandler.bind(null, item.id)}
            onAdd={addHandler.bind(null, item)}
          />
        );
      })}{" "}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {CartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
