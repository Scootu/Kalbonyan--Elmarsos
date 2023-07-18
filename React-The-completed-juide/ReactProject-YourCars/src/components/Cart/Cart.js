import { useContext, useEffect, useState } from "react";
import Module from "../UI/Module";
import classes from "./Cart.module.css";
import CardDataContext from "../../Context/CardContext";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ctx = useContext(CardDataContext);

  const [isCartyet, setCartYet] = useState(false);

  const cartItems = (
    <ul className={classes.cartList}>
      {" "}
      {ctx.items !== []
        ? ctx.items.map((item) => {
            return (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                class={item.class}
                amount={item.amount}
                image={item.image}
              ></CartItem>
            );
          })
        : ""}
    </ul>
  );
  const deleteAll = () => {
    ctx.deleteAllItems();
  };
  useEffect(() => {
    if (ctx.totalAmount > 0) {
      setCartYet(true);
    }
  }, [ctx]);
  return (
    <Module>
      {!isCartyet && (
        <div className={classes.cartAlert}>
          <p>Ther's no Car</p>
        </div>
      )}
      {cartItems}
      <button className={classes.button} onClick={deleteAll}>
        Delete All <span className="material-symbols-outlined">delete</span>
      </button>
    </Module>
  );
};

export default Cart;
