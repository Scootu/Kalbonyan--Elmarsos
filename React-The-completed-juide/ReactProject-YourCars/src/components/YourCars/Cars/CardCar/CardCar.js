import React  from "react";
import classes from "./CardCar.module.css";
import Input from "./Input";

const CardCar = (props) => {
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

            <Input props={props} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CardCar;
