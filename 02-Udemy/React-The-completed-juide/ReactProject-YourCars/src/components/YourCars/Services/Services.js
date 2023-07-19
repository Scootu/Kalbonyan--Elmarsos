import React from "react";
import styled from "./Services.module.css";
import Rides from "../../UI/Rides.js";
const Services = () => {
  
   
  return (
    <section className={`${styled.service}`}>
      <div className="container">
        <Rides styled={`${styled.ridesPosition} ridesPositionMiddel`}>SERVICES</Rides>
        <span className={`${styled.subText} subTextMiddel`}>Services</span>
        <div className={`grid grid-col3 ${styled.styleGridGap}`}>
          {/*1 item */}
          <div className={styled.mainContent}>
            <div className={styled.imgsContainer}>
              <img
                className={styled.icon}
                src="/images/serviceIcon/img1/Vector1.png"
                alt="star"
              />
              <div className={styled.notSelected}>
                <img src="images/serviceIcon/img1/Vector-10.png" alt="2" />
                <img src="images/serviceIcon/img1/Vector-20.png" alt="3" />
                <img src="images/serviceIcon/img1/Vector0.png" alt="1" />
              </div>
            </div>

            <div className={styled.content}>
              <span>Car sales</span>
              <p>
                Car sales At YourCar, we offer a wide selection of luxury
                vehicles for sale. Whether you're in the market for a sleek
                sports car or a spacious SUV, we have the perfect vehicle to fit
                your needs.
              </p>
            </div>
          </div>
          {/*1 item */}
          <div className={styled.mainContent}>
            <div className={styled.imgsContainerRental}>
              <div className={styled.carRental}>
                <img src="images/serviceIcon/img2/Vector.png" alt="3" />
                <img src="images/serviceIcon/img2/Vector-1.png" alt="1" />
              </div>
            </div>

            <div className={styled.content}>
              <span>Car rental</span>
              <p>
                If you're in need of a luxury car rental, look no further than
                YourCar. Our fleet of high-end vehicles is regularly maintained
                and serviced to ensure that you have a safe and comfortable
                driving experience.
              </p>
            </div>
          </div>
          {/*1 item */}
          <div className={styled.mainContent}>
            <div className={styled.imgsContainerSelling}>
              <img
                className={styled.icon}
                src="/images/serviceIcon/img3/Vector.png"
                alt="star"
              />
            </div>

            <div className={styled.content}>
              <span>Car selling</span>
              <p>
                At YourCar, we make it easy to sell your car. Simply
                bring your vehicle in for an appraisal, and we'll handle the
                rest. We offer fair prices and a hassle-free selling process, so
                you can get your vehicle with minimal effort.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
