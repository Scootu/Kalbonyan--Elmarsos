import React from "react";
import classes from "./About.module.css";
import Rides from "../../UI/Rides";

const About = () => {
  return (
    <section className={`${classes.about} container grid grid-col2`}>
      <div className={classes.subSection}>
        <Rides styled={`${classes.ridesPosition} ridesPositionLeft`}>ABOUT US</Rides>
        <div className={` ${classes.subTextSection} sub-textSection`}>About</div>
        <p className={classes.aboutText}>
        YourCar is a luxury car dealership that offers a personalized and first-class experience to its clients. Our team of experienced professionals is dedicated to providing exceptional service and finding the perfect vehicle to match our clients' unique preferences and requirements. We have an extensive selection of high-end vehicles, ranging from sports cars to SUVs, all of which are maintained to the highest standards of quality and safety.<br></br><br></br> At YourCar, we are committed to creating a stress-free and enjoyable car buying experience. We understand that purchasing a luxury car can be a significant investment, which is why we offer flexible financing options to make the process more manageable. Our team is available to answer any questions and provide guidance throughout the entire buying process. We take pride in our outstanding customer service and attention to detail, and we are confident that our client
        </p>
      </div>
      <div className={classes.secondColum}>
        <img className={classes.img} src='images/pngegg1.png' alt='cars about section' />
        <img className={classes.img2} src='images/pngegg2.png' alt='cars background about section' />
      </div>
    </section>
  );
};
export default About;
