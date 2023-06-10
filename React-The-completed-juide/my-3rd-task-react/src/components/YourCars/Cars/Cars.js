import React from "react";
import classes from "./Cars.module.css";
import Rides from "../../UI/Rides";
import SlidesCard from "./SlidesCard";
const Cars = () => {
  return (
    <section className={`${classes.Cars}`}>
      <div className="container">
        <Rides styled={"ridesPositionMiddel"}>CARS</Rides>
        <span className={`${classes.subText} subTextMiddel`}>Cars</span>
        <div className={classes.carsContent}>
       <SlidesCard />
        </div>
      </div>
    </section>
  );
};

export default Cars;
