import { useState } from "react";
import Button from "../../UI/Button";
import classes from "./Gallory.module.css";

const Gallory = () => {
  
  const hoverElement = (
    <div className={classes.galloryMid}>
      <p>Tesla module 3</p>
      <span>Disruptive,avant-garde,futuristic,innovative.</span>
      <Button className={classes.Button}>Contact</Button>
    </div>
  );
  return (
    <section className={classes.main}>
      <div className={classes.container}>
        <img
          className={classes.galloryImg}
          src="/images/GalloryImg/Car.png"
          alt="pochaty in the sahara"
        />
        {hoverElement}
      </div>
      <div className={classes.container}>
        <img
          className={classes.galloryImg}
          src="/images/GalloryImg/porsche-911.png"
          alt="porsche in the sahara"
        />
        {hoverElement}
      </div>

      <div className={classes.container}>
        <img
          className={classes.galloryImg}
          src="/images/GalloryImg/HardCar.png"
          alt="pochaty in the sahara"
        />
        {hoverElement}
      </div>

      <div className={classes.container}>
        <img
          className={classes.galloryImg}
          src="/images/GalloryImg/boghaty.png"
          alt="pochaty in the sahara"
        />
        {hoverElement}
      </div>

      <div className={classes.container}>
        <img
          className={classes.galloryImg}
          src="/images/GalloryImg/Rectangle2.png"
          alt="poccaty in the desere"
        />
        {hoverElement}
      </div>

      <div className={classes.container}>
        <img
          className={classes.galloryImg}
          src="/images/GalloryImg/AstenMartenSpeedNew.png"
          alt="pochaty in the sahara"
        />
        {hoverElement}
      </div>

      <div className={classes.container}>
        <img
          className={classes.galloryImg}
          src="/images/GalloryImg/AstenMartenM.png"
          alt="pochaty in the sahara"
        />
        {hoverElement}
      </div>

      <div className={classes.container}>
        <img
          className={classes.galloryImg}
          src="/images/GalloryImg/AstenMarten.png"
          alt="pochaty in the sahara"
        />
        {hoverElement}
      </div>

      <div className={classes.container}>
        <img
          className={classes.galloryImg}
          src="/images/GalloryImg/Car.png"
          alt="pochaty in the sahara"
        />
        {hoverElement}
      </div>
    </section>
  );
};
export default Gallory;
