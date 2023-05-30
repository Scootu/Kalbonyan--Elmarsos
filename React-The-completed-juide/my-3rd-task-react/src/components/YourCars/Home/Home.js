import React from "react";
import classes from "./Home.module.css";
import Header from "./Header";
const Home = () => {
  return (
    <section className={classes.home}>
      <Header />
      <div className={`${classes.container} ${classes.grid}`}>
        <div></div>
        <div className={` ${classes.homeText}`}>
          <p>
            Find the perfect car<br></br>for you at YourCar.
          </p>
          <p>
            We offer a wide range of cars that cater to your needs and budget.
            Visit us today and drive away with your dream car!
          </p>
          <button className={classes.button} type="button">
           <span>Discover</span><span class="material-symbols-outlined">north_east</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
