import { useContext } from "react";

import classes from "./CartItem.module.css";
import Input from "../UI/Input";
import CardDataContext from "../../Context/CardContext";

const CartItem = (props) => {
  const ctx = useContext(CardDataContext);

  const entredItemIndex = ctx.items.findIndex((item) => {
    return props.id === item.id;
  });
  const updateAmountItem = (amount) => {
    if (amount > 0) {
      ctx.addCard({
        id: props.id,
        name: props.name,
        class: props.class,
        image: props.image,
        amount: amount,
      });
    } else {
      ctx.removeCard(props.id);
    }
  };

  const deleteSlip = () => {
    ctx.removeCard(props.id);
  };

  return (
    <li className={classes.main}>
      <div className={classes.text}>
        <p className={classes.mainText}>{`${props.class}`}</p>
        <span className={classes.subText}>{`${props.name}`}</span>
        <div className={classes.bottom}>
          <Input
            onGetAmount={updateAmountItem}
            amount={
              ctx.items[entredItemIndex] ? ctx.items[entredItemIndex].amount : 0
            }
          />
          <span className={`${classes.delete} material-symbols-outlined`} onClick={deleteSlip}>
            delete
          </span>
        </div>
      </div>
      <div className={classes.img}>
        <img src={props.image} alt={props.name} />
      </div>
    </li>
  );
};

export default CartItem;
