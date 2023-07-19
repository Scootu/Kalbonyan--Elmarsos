import React, { useContext } from "react";
import classes from "./CardCar.module.css";
import Input from "../../../UI/Input";
import CardDataContext from "../../../../Context/CardContext";
// send for item context

const CardCar = (props) => {
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

  return (
    <React.Fragment>
      <div className={classes.Card}>
        <div className={classes.img}>
          <img src={props.image} alt={props.name} />
        </div>
        <div className={classes.text}>
          <header className={classes.HeaderText}>{props.class}</header>
          <span className={classes.subHeader}>{props.name}</span>
          <p className={classes.description}>{props.description}</p>
          <div className={classes.footer}>
            <div className={classes.info}>
              <div>
                <img
                  className={classes.imgCard}
                  src={"/images/iconCard/Vector.png"}
                  alt="person avec une person"
                />
                <p className={classes.paragraphe}>{`${props.seats} Seats`}</p>
              </div>
              <div>
                <img
                  className={classes.imgCard}
                  src={"/images/iconCard/Vector1.png"}
                  alt="a packet"
                />
                <p
                  className={classes.paragraphe}
                >{`${props.luggage} Luggage`}</p>
              </div>
            </div>

            <Input
              onGetAmount={updateAmountItem}
              amount={
                ctx.items[entredItemIndex]
                  ? ctx.items[entredItemIndex].amount
                  : 0
              }
              
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CardCar;
